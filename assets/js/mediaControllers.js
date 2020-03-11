class mediaController {
    constructor() {
        this.activeList = g('#playlist li.active');
        stop = _ => this.stop();
    }

    play(video) {
        this.activeList = g('#playlist li.active');
        if (video.src !== '') {
            if (video.paused || elementState === 'paused') {
                video.play();

                updateElementState('played');

            } else if (video.played || elementState === 'played') {
                video.pause();

                updateElementState('paused');

            } else {
                video.play();
                updateElementState('played');
            }
        } else {
            throw Error('Something went wrong');
        }
    }

    //Next Button
    next() {
        let newInitVideo = require('./initiateElementController');
        let InitVideo = new newInitVideo();
        this.initVideo = InitVideo.initVideo;

        this.activeList = g('#playlist li.active');

        if (this.activeList) {
            let activeList = this.activeList;

            if (activeList.nextSibling !== null) {

                var next = activeList.nextSibling;

                this.initVideo(next);
            } else {
                let next = g('#playlist :first-child');
                this.initVideo(next);
            }

        } else {
            console.log("List is null");

            // Don't call this.stop;
            // This fights again error exception (this.stop is not a function);
            // That is due to this is being called under this element's event listener 
            // which apparently would own the object (this) 
            stop();
        }
    }

    //Prev Button
    prev() {
        let newInitVideo = require('./initiateElementController');
        let InitVideo = new newInitVideo();
        this.initVideo = InitVideo.initVideo;

        this.activeList = g('#playlist li.active');
        if (this.activeList) {
            let activeList = this.activeList;

            if (activeList.previousElementSibling !== null) {
                var next = activeList.previousElementSibling;
                this.initVideo(next);
            }

            if (activeList.previousElementSibling == null) {
                let prev = g('#playlist :last-child');
                this.initVideo(prev);
            }

        } else {
            // Don't call this.stop;
            // This fights again error exception (this.stop is not a function);
            // That is due to this is being called under this element's event listener 
            // which apparently would own the object (this)
            stop();
        }
    }

    // Stop controller
    stop() {
        this.activeList = g('#playlist li.active');
        video.pause();
        updateElementState('initial');
    }
}

module.exports = mediaController;