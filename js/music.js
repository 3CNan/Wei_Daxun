var is_phone = (document.body.scrollWidth < 769);
var navigation = document.getElementById("navigation");
navigation.style.fontSize = (is_phone) ? ("100%") : ("60%");

// film and tv section initialization
function music_init() {
    var ranking = document.getElementById("ranking");
    var ranking_break = (is_phone) ? ('</div><div class="ranking_list_bar">') : ("");
    var ranking_format = function(list_name) {
        return '<div class="ranking_list">\
                    <div class="ranking_list_header_bg">\
                        <div class="ranking_list_header">\
                            ' + list_name + '\
                        </div>\
                    </div>\
                    <div class="ranking_content_area">\
                        <ul class="ranking_content"></ul>\
                    </div>\
                </div>';
    };
    var ranking_content = '<div class="ranking_title">录音室</div>  \
                            <div class="ranking_list_bar"> \
                                ' + ranking_format("单曲") + ranking_break +' \
                                ' + ranking_format("OST") + ranking_break +' \
                                ' + ranking_format("影视Live") + ' \
                            </div> \
                            <div class="ranking_title">Live</div>\
                            <div class="ranking_list_bar"> \
                                ' + ranking_format("综艺Live") + ranking_break +' \
                                ' + ranking_format("晚会Live") + ranking_break +' \
                                ' + ranking_format("碎片") +' \
                            </div>';
    ranking.innerHTML = ranking_content;

    var ranking_title_objs = document.getElementsByClassName("ranking_title");
    if (is_phone) {
        for (var i = 0; i < ranking_title_objs.length; i++) {
            ranking_title_objs[i].style.fontSize = "3.5vw";
        }
    }

    var ranking_list_objs = document.getElementsByClassName("ranking_list");
    if (is_phone) {
        for (var i = 0; i < ranking_list_objs.length; i++) {
            ranking_list_objs[i].style.width = "calc(100% - 4vw)";
        }
    }
}

function ranking_init(all_works) {
    var ranking_content_objs = document.getElementsByClassName("ranking_content");
    for (var i = 0; i < all_works.length; i++) {
        for (var j = 0; j < all_works[i].length; j++) {
            ranking_content_objs[i].innerHTML += "<li>" + all_works[i][j][0] + "</li>";
        }
    }
}

window.onload = function() {
    music_init();
    ranking_init(all_music);
}

