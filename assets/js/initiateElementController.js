class InitVideo {
    /* constructor(videoElement) {

    } */
    initVideo(videoElement) {
        videoElement = videoElement;

        if (g !== "undefined" && gA !== "undefined") {
            this.list = gA("#playlist li");

            if (this.list.length) {
                for (const list of this.list)
                    list.classList.remove('active');
            } else {
                throw Error('playlist is null, please add some files to it first');
            }
        } else {
            throw Error('g/gA element selector is not defined, you can not use undefined variables befone you declare them');
        }

        if (videoElement) {
            videoElement.classList.add('active');
            playFromPlayList(videoElement);
        }


        function playFromPlayList(media) {
            media = media || g('#playlist li.active');
            let video = g("#video");
            video.src = media.getAttribute('art-data-src');

            let newMediaControllers = require('./mediaControllers');
            let mediaControllers = new newMediaControllers();
            mediaControllers.stop();

            setTimeout(() => {
                mediaControllers.play(video);
            }, 300);
        }
    }
}

module.exports = InitVideo;