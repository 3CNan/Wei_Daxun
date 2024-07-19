var is_phone = (document.body.scrollWidth < 769);

// film and tv section initialization
function film_tv_init() {
    carousel_init(masterpiece, "film_tv");

    // get elements from html
    var section_bar_objs = document.getElementsByClassName("section_bar");

    // initialize the amount of content bar needed
    for (var i = 0; i < section_bar_objs.length; i++) {
        section_init(section_bar_objs[i], all_film_tv[i], all_film_tv_unaired[i], "film_tv");
    }
    class_write_video_source("section_bar", all_film_tv, all_film_tv_unaired, true);
    alert_init(all_film_tv);
    class_write_video_source("alert_win", all_film_tv, [0, 0, 0], false);
    section_load_image(all_film_tv, all_film_tv_unaired, "film_tv");
}

window.onload = function() {
    film_tv_init();
}