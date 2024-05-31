// Single Section Bar Initialization
function section_init(selected_bar, is_phone, all_works, work_unaired, page_on) {
	// get elements from html
    var section_box_objs = selected_bar.getElementsByClassName("section_box");
    var section_img_objs = selected_bar.getElementsByClassName("section_img");
    var section_title = selected_bar.getElementsByClassName("section_title"); 
    var section_box_objs = selected_bar.getElementsByClassName("section_box"); 
    var section_text_objs = selected_bar.getElementsByClassName("section_text"); 
    var section_content_objs = selected_bar.getElementsByClassName("section_content"); 
    var box_in_bar;

	// initialize the amount of content bar needed
    if (is_phone) {
        section_title[0].style.fontSize = "3.5vw";
        selected_bar.innerHTML += '<div class="section_content"></div><div class="section_content"></div>';
    } else {
        section_title[0].style.fontSize = "2.5vw";
        selected_bar.innerHTML += '<div class="section_content"></div>';
    }
    console.log(document);

    // initialize the amount of box in each content bar
    if(is_phone) {
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 3; j++) {
                section_content_objs[i].innerHTML += '<div class="section_box"><div class="section_img"></div><div class="section_text"></div></div>';
                section_content_objs[i].style.height = "30vw";
            }
        }
        box_in_bar = 3;
    } else {
        for (var j = 0; j < 6; j++) {
            section_content_objs[0].innerHTML += '<div class="section_box"><div class="section_img"></div><div class="section_text"></div></div>';
            section_content_objs[0].style.height = "15vw";
        }
        box_in_bar = 6;
    }

    // initialize the specific img
    for (var i = 0; i < section_box_objs.length; i++) {
        section_box_objs[i].style.width = "calc(100% / " + box_in_bar + " - 3vw)";
        section_text_objs[i].style.fontSize = (9 / box_in_bar) + "vw";
    }
    for (var i = 0; i < 6; i++) {
        section_text_objs[i].innerHTML = all_works[work_unaired + i][0];
        section_img_objs[i].style.backgroundImage = 'url("./src/' + page_on + '/' + all_works[work_unaired + i][0] + '.jpg")';
    }
}