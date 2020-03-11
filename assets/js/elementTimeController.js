module.exports = function($video, max) {
    initialElementState();

    function initialElementState() {
        g('#total').innerHTML = timeFormat(max);
        g('#collapsed').innerText = timeFormat($video.currentTime);
    }

    function timeFormat(seconds) {
        let m = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds / 60) : Math.floor(seconds / 60);
        let s = Math.floor(seconds - (m * 60)) < 10 ? '0' + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
        return m + ':' + s;
    }

    return {
        timeFormat,
        updateTimer() {
            g('#collapsed').innerText = timeFormat($video.currentTime);
        }
    };
};