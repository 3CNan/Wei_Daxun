// film and tv section initialization
function film_tv_init() {
    // get elements from html
    var section_bar_objs = document.getElementsByClassName("section_bar");
    var works = [all_film, all_tv];
    var works_image = [all_film_image, all_tv_image];
    var works_unaired = [film_unaired, tv_unaired];

    // initialize the amount of content bar needed
    for (var i = 0; i < section_bar_objs.length; i++) {
        section_init(section_bar_objs[i], works[i], works_image[i], works_unaired[i], "film_tv");
    }
}

window.onload = function() {
    carousel_init(masterpiece);
    film_tv_init();
}