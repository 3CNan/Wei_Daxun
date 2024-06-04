// film and tv section initialization
function shows_init() {
    // get elements from html
    var section_bar_objs = document.getElementsByClassName("section_bar");

    // initialize the amount of content bar needed
    for (var i = 0; i < section_bar_objs.length; i++) {
        section_init(section_bar_objs[i], all_show[i], 0, "show");
    }
    section_load_image(all_show, [0, 0, 0], "show");
    class_write_video_source("section_bar", all_show, [0, 0, 0]);
    alert_init(all_show);
    class_write_video_source("alert_win", all_show, [0, 0, 0]);
}

window.onload = function() {
    carousel_init(all_recent, "show");
    shows_init();
}