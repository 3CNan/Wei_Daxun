var is_phone = (document.body.scrollWidth < 769);

// film and tv section initialization
function shows_init() {
    carousel_init(all_show_recent, "show");
    
    // get elements from html
    var section_bar_objs = document.getElementsByClassName("section_bar");

    // initialize the amount of content bar needed
    for (var i = 0; i < section_bar_objs.length; i++) {
        section_init(section_bar_objs[i], all_show[i], 0, "show");
    }
    class_write_video_source("section_bar", all_show, [0, 0, 0], true);
    alert_init(all_show);
    class_write_video_source("alert_win", all_show, [0, 0, 0], false);
    section_load_image(all_show, [0, 0, 0], "show");
}

window.onload = function() {
    shows_init();
}