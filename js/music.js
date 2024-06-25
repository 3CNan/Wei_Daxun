var is_phone = (document.body.scrollWidth < 769);
var navigation = document.getElementById("navigation");
navigation.style.fontSize = (is_phone) ? ("100%") : ("60%");

// initialization
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
            ranking_title_objs[i].style.fontSize = "6vw";
        }
    }

    var ranking_list_objs = document.getElementsByClassName("ranking_list");
    if (is_phone) {
        for (var i = 0; i < ranking_list_objs.length; i++) {
            ranking_list_objs[i].style.width = "calc(100% - 4vw)";
        }
    }

    var ranking_list_header_bg_objs = document.getElementsByClassName("ranking_list_header_bg");
    for (var i = 0; i < ranking_list_header_bg_objs.length; i++) {
        ranking_list_header_bg_objs[i].style.backgroundImage = "linear-gradient(to bottom, transparent, transparent, transparent, white), url('src/music/" + i + ".jpg')";
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

function toggle_tag_win() {
    var show_all_tag = document.getElementById("show_all_tag");
    var filter_tag_win = document.getElementById("filter_tag_win");
    if(filter_tag_win.style.display != "none") {
        filter_tag_win.style.display = "none";
        show_all_tag.innerHTML = "点击展开所有标签";
    } else {
        filter_tag_win.style.display = "block";
        show_all_tag.innerHTML = "点击收起所有标签";
    }
}

var select_mode = 2; // 1 - include all, 0 - include either, -1 - not include
var tag_state = {
    "独唱": 2,
    "合唱": 2,
    "齐唱": 2,
    "录音室": 2,
    "Live": 2,
    "清唱": 2,
    "朗读": 2,
    "有MV": 2,
    "有Live": 2,
    "单曲": 2,
    "OST": 2,
    "影视Live": 2,
    "综艺Live": 2,
    "晚会Live": 2,
    "碎片": 2
}; // 2 - not selected
var select_filter_bar = -1;
var select_filter_tag = -1;

function set_select_mode(num) {
    select_mode = num;
}

function get_select_mode(num) {
    switch(num) {
    case 1:
        return "all_include";
    case 0:
        return "include_either";
    case -1:
        return "not_include";
    default:
        return "";
    }
}

function add_select_style(element, class_name) {
    if (class_name == "" || element.parentNode.classList.contains("filter_tag_area")) {
        return;
    }
    // class_name: all_include, include_either, not_include
    element.classList.remove("all_include");
    element.classList.remove("include_either");
    element.classList.remove("not_include");
    var element_parent = element.parentNode;
    var sibling_element = element_parent.getElementsByClassName("filter_tag");
    if (class_name == "all_include") {
        for (var i = 0; i < sibling_element.length; i++) {
            sibling_element[i].classList.remove("all_include");
            sibling_element[i].classList.remove("include_either");
            sibling_element[i].classList.remove("not_include");
            tag_state[sibling_element[i].innerHTML] = 2;
        }
    } else if (class_name == "include_either") {
        var is_all_include = false;
        for (var i = 0; i < sibling_element.length; i++) {
            if (i == $(element).index()) {continue;}
            if (sibling_element[i].classList.contains("all_include")) {
                is_all_include = true;
            }
        }
        if (is_all_include) {return;} // if this bar has an all_include, it cannot be either include
    } else if (class_name == "not_include") {
        var is_all_not = true;
        for (var i = 0; i < sibling_element.length; i++) {
            if (i == $(element).index()) {continue;}
            if (!sibling_element[i].classList.contains("not_include")) {
                is_all_not = false;
            }
        }
        // console.log(is_all_not);
        if (is_all_not) {return;}
    }
    element.classList.add(class_name);
    if (element.innerHTML != "全部包含" && element.innerHTML != "包含任一" && element.innerHTML != "&nbsp; 不包含 &nbsp;") {
        tag_state[element.innerHTML] = select_mode;
    }
}


function reset_tag_select() {
    var filter_tag_objs = document.getElementsByClassName("filter_tag");
    for (var i = 3; i < filter_tag_objs.length; i++) {
        filter_tag_objs[i].classList.remove("all_include");
        filter_tag_objs[i].classList.remove("include_either");
        filter_tag_objs[i].classList.remove("not_include");
    }
    Object.keys(tag_state).forEach(tag => {
        tag_state[tag] = 2;
    });
}

function tag_filter() {
    // get all songs into one array
    toggle_tag_win();
    var all_songs = get_all_songs();
    var song1, song2, song3;
    song1 = filter_all_include(all_songs);  // all include
    song2 = filter_not_include(song1);      // not include
    song3 = filter_include_either(song2);   // include either
    write_filter_content(song3);
}

function get_all_songs() {
    var res = [];
    for (var i = 0; i < all_music.length; i++) {
        for (var j = 0; j < all_music[i].length; j++) {
           res.push(all_music[i][j]);
        }
    }
    return res;
}

function get_tag_needed(select_mode) {
    var res = [];
    Object.keys(tag_state).forEach(tag => {
        if (tag_state[tag] == select_mode) {
            res.push(tag);
        }
    });
    console.log(res);
    return res;
}

function filter_all_include(all_works) {
    var tag_needed = get_tag_needed(1);
    if (tag_needed[0] == undefined) {return all_works};

    var res = all_works.filter(item => {
        var is_all_include = true;
        for (var i = 0; i < tag_needed.length; i++) {
            if (item[4].indexOf(tag_needed[i]) == -1) {
                is_all_include = false;
            }
        }
        return is_all_include;
        
    });
    return res;
}

function filter_not_include(all_works) {
    var tag_needed = get_tag_needed(-1);
    if (tag_needed[0] == undefined) {return all_works};
    console.log("-1: ", tag_needed[0] == undefined);

    var res = all_works.filter(item => {
        var is_not_include = true;
        for (var i = 0; i < tag_needed.length; i++) {
            if (item[4].indexOf(tag_needed[i]) != -1) {
                is_not_include = false;
            }
        }
        return is_not_include;
    });
    return res;
}

function filter_include_either(all_works) {
    var tag_needed = get_tag_needed(0);
    if (tag_needed[0] == undefined) {return all_works};
    console.log("0: ", !tag_needed);

    var res = all_works.filter(item => {
        var is_include_either = false;
        for (var i = 0; i < tag_needed.length; i++) {
            if(item[4].indexOf(tag_needed[i]) != -1) {
                is_include_either = true;
            }
        }
        return is_include_either;
    });
    return res;
}


function write_filter_content(all_works) {
    var ways_to_sort_objs = document.getElementsByName("ways_to_sort");
    var sort_way = -1; // not sort
    for (var i = 0; i < ways_to_sort_objs.length; i++) {
        if (ways_to_sort_objs[i].checked) {
            sort_way = Number(ways_to_sort_objs[i].value);
        }
    }
    all_works = sort_by_radio(all_works, sort_way);
    var filter_content = document.getElementById("filter_content");
    filter_content.innerHTML = "";
    if (all_works[0] == undefined) {
        filter_content.innerHTML = "未找到符合筛选标准的歌曲";
    } else {
        create_bubble(filter_content, all_works, 2, 4);
        id_write_video_source("filter_content", all_works);
        if (is_phone) {
            var bubble_tag_bar_objs = document.getElementsByClassName("bubble_tag_bar");
            for (var i = 0; i < bubble_tag_bar_objs.length; i++) {
                bubble_tag_bar_objs[i].style.display = "block";
            }
        }
    }
}

function write_tag_to_class(all_works, class_name) {
    var class_name_objs = document.getElementsByClassName(class_name);
    for (var i = 0; i < all_works.length; i++) {
        var tags = all_works[i][4];         // ["歌曲名称", "时间", "出处", "平台", "标签"]
        for (var j = 0; j < tags.length; j++) {
            class_name_objs[i].innerHTML += "<div class='bubble_tag'>" + tags[j] + "</div>";
        }
    }
}


window.onload = function() {
    music_init();
    ranking_init(all_music);
    tag_filter();
}



$(".filter_tag").on('click', function(e) {
    select_filter_tag = $(this).index();
    add_select_style(this, get_select_mode(select_mode));
    // console.log(this.parentNode);
})
$(".filter_tag_bar").on('click', function(e) {
    select_filter_bar = $(this).index();
    // mark_tag(this, select_mode);
})






