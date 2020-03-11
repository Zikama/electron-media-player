// Init slider
module.exports = function($video, max) {
    $("#js-slider").slider({
        range: "min",
        max: parseFloat(max),
        value: 0,
        create: function(event, ui) {
            var slider;
            slider = $(event.target);

            // Append the slider handle with a center dot and it's own track
            slider.find('.ui-slider-handle').append('<span class="dot"><span class="handle-track"></span></span>');

            // Append the slider with an inverse range
            slider.prepend('<div class="slider-range-inverse"></div>');

            // Set initial dimensions
            slider.find(".handle-track").css("width", event.target.clientWidth);

            // Set initial position for tracks
            return update_handle_track_pos(event.target, $(this).slider("value"));
        },
        slide: function(event, ui) {
            // Update position of tracks
            if ($video.played.length) {
                $video.pause();
                $video.currentTime = ui.value;
                setTimeout(() => {
                    $video.play();
                }, 100);
            } else {
                $video.currentTime = ui.value;
            }
            return $video.currentTime = update_handle_track_pos(event.target, ui.value);
        }
    });

    function update_handle_track_pos(slider, ui_handle_pos) {

        var handle_track_xoffset, slider_range_inverse_width;
        handle_track_xoffset = -(ui_handle_pos / 100 * slider.clientWidth);

        $(slider).find(".handle-track").css("left", handle_track_xoffset);

        slider_range_inverse_width = 100 - (0 / max * slider.clientWidth) + "%";

        $(slider).find(".slider-range-inverse").css("width", slider_range_inverse_width);

        return ui_handle_pos;
    }

    return {
        updateTracker() {
            $("#js-slider").slider({
                range: "min",
                max: parseFloat(max),
                value: parseFloat($video.currentTime),
                // Update position of tracks
                slide: function(event, ui) {
                    if (elementState === 'initial') {
                        if (elementState === 'played') {
                            $video.pause();
                            updateElementState('paused');
                        }

                        $video.currentTime = ui.value;

                        if (elementState === 'paused') {
                            $video.play();
                            updateElementState('played');
                        }

                    } else {
                        $video.currentTime = ui.value;
                    }

                    $video.currentTime = ui.value;
                    return update_handle_track_pos(event.target, ui.value);
                }
            });
        }
    }
};