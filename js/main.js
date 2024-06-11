// Single Section Bar Initialization
function section_init(selected_bar, works, works_unaired, page_on) {
	// get elements from html
    var section_box_objs = selected_bar.getElementsByClassName("section_box");
    var section_img_objs = selected_bar.getElementsByClassName("section_img");
    var section_title = selected_bar.getElementsByClassName("section_title"); 
    var section_box_objs = selected_bar.getElementsByClassName("section_box"); 
    var section_text_objs = selected_bar.getElementsByClassName("section_text"); 
    var section_content_objs = selected_bar.getElementsByClassName("section_content"); 
    // var img_section_img_objs = selected_bar.getElementsByTagName("img");
    var box_in_bar;

	// initialize the amount of content bar needed
    if (is_phone) {
        section_title[0].style.fontSize = "3.5vw";
        selected_bar.innerHTML += '<div class="section_content"></div><div class="section_content"></div>';
    } else {
        // section_title[0].style.fontSize = "2.5vw";
        selected_bar.innerHTML += '<div class="section_content"></div>';
    }

    // initialize the amount of box in each content bar
    if(is_phone) {
        for (var i = 0; i < 2; i++) {       // 2行
            for (var j = 0; j < 3; j++) {   // 一行各3个框
                section_content_objs[i].innerHTML += '<div class="section_box"><a class="src_link" target="_blank"><div class="section_img"></div><div class="section_text"></div></a></div>';
                section_content_objs[i].style.height = "30vw";
            }
        }
        box_in_bar = 3;
    } else {
        for (var j = 0; j < 6; j++) {       // 共一行，一行6个框
            section_content_objs[0].innerHTML += '<div class="section_box"><a class="src_link" target="_blank"><div class="section_img"></div><div class="section_text"></div></a></div>';
            section_content_objs[0].style.height = "15vw";
        }
        box_in_bar = 6;
    }

    // initialize the specific img
    for (var i = 0; i < section_box_objs.length; i++) {
        section_img_objs[i].style.height = Number(works[works_unaired + i][2] != "") * (-10) + 75 + "%";
        section_box_objs[i].style.width = "calc(100% / " + box_in_bar + " - 2.8vw)";
        section_text_objs[i].style.fontSize = (9 / box_in_bar) + "vw";
        section_text_objs[i].innerHTML = works[works_unaired + i][0];
        section_text_objs[i].innerHTML += "<div class='section_text_sub'>" + works[works_unaired + i][1] + "</div>";
        if (works[works_unaired + i][2] != "") {
            section_text_objs[i].innerHTML += "<div class='section_text_sub'>" + works[works_unaired + i][2] + "</div>";
        }
    }
    section_title[0].innerHTML += "<div class='section_title_sub' onclick='alert_open(" + ($(selected_bar).index() - 1) + ")'>点击展开</div>";
    console.log("Section bar initialization finished.");
}

function section_load_image(all_works, works_unaired, page_on) {
    var section_bar_objs = document.getElementsByClassName("section_bar");
    for (var i = 0; i < section_bar_objs.length; i++) {
        var section_img_objs = section_bar_objs[i].getElementsByClassName("section_img");
        for (var j = 0; j < section_img_objs.length; j++) {
            section_img_objs[j].style.backgroundImage = 'url(' + get_url(page_on, all_works[i], works_unaired[i] + j) + ')';
        }
    }
    console.log("Section bar loading image finished.");
}

// carousel area initialization
function carousel_init(works, page_on) {
    var carousel_height;

    // get elements from html
    var carousel = document.getElementById("carousel");
    var ep_titles = document.getElementById("ep_titles");
    var ep_area = document.getElementById("ep_area");
    var ep_name_objs = document.getElementsByClassName("ep_name");
    var ep_name_area = document.getElementById("ep_name_area");

    // initialization
    if(is_phone) { // if it's opened by phone
        carousel_height = 300;
        ep_area.style.width = "30%";
        ep_name_area.style.width = "30%";
        ep_name_area.style.marginLeft = "-30%";
    } else {
        carousel_height = 550;
    }
    carousel.style.height = carousel_height + "px";
    ep_name_area.style.height = "calc(" + carousel_height + "px / 6";
    for(var i = 0; i < 12; i++) {
        ep_name_objs[i].innerHTML = works[i % 6][0];                          // carousel the recent best 6 (I think) works
        ep_name_objs[i].title = works[i % 6][0];  
        ep_name_objs[i].style.height = "calc(" + carousel_height + "px / 6";
        ep_name_objs[i].style.fontSize = (carousel_height / 20) + "px";
    }

    carousel_anime_init(carousel_height, works, page_on);
}

function carousel_anime_init(carousel_height, works, page_on) {
    var style = document.createElement('style');
    style.innerHTML = '\
    @keyframes carousel_ep_names{               /* animation for ep_name_area to scroll up */ \
        0%    {margin-top: 0px;}\
        11.1% {margin-top: 0px;}\
        16.7% {margin-top: calc(-' + carousel_height + 'px / 6 * 1);}\
        27.8% {margin-top: calc(-' + carousel_height + 'px / 6 * 1);}\
        33.3% {margin-top: calc(-' + carousel_height + 'px / 6 * 2);}\
        44.4% {margin-top: calc(-' + carousel_height + 'px / 6 * 2);}\
        50%   {margin-top: calc(-' + carousel_height + 'px / 6 * 3);}\
        61.1% {margin-top: calc(-' + carousel_height + 'px / 6 * 3);}\
        66.7% {margin-top: calc(-' + carousel_height + 'px / 6 * 4);}\
        77.8% {margin-top: calc(-' + carousel_height + 'px / 6 * 4);}\
        83.3% {margin-top: calc(-' + carousel_height + 'px / 6 * 5);}\
        94.4% {margin-top: calc(-' + carousel_height + 'px / 6 * 5);}\
        100%  {margin-top: calc(-' + carousel_height + 'px / 6 * 6);}\
    }\
    @keyframes gradient_ep_names{               /* animation for selected effect to scroll up */ \
        0%     {margin-top: 0;}\
        11.1%  {margin-top: 0;}\
        16.69% {margin-top: calc(-' + carousel_height + 'px / 6 * 1);}\
        16.7%  {margin-top: 0;}\
        27.8%  {margin-top: 0;}\
        33.29% {margin-top: calc(-' + carousel_height + 'px / 6 * 1);}\
        33.3%  {margin-top: 0;}\
        44.4%  {margin-top: 0;}\
        49.99% {margin-top: calc(-' + carousel_height + 'px / 6 * 1);}\
        50.0%  {margin-top: 0;}\
        61.1%  {margin-top: 0;}\
        66.69% {margin-top: calc(-' + carousel_height + 'px / 6 * 1);}\
        66.7%  {margin-top: 0;}\
        77.8%  {margin-top: 0;}\
        83.29% {margin-top: calc(-' + carousel_height + 'px / 6 * 1);}\
        83.3%  {margin-top: 0;}\
        94.4%  {margin-top: 0;}\
        99.99% {margin-top: calc(-' + carousel_height + 'px / 6 * 1);}\
        100%   {margin-top: 0;}\
    }\
    @keyframes carousel_img{                    /* animation for imgs to change while scrolling */ \
        0%    {background-image: url("' + get_url(page_on, works, 0) + '");}\
        11.1% {background-image: url("' + get_url(page_on, works, 0) + '");}\
        16.7% {background-image: url("' + get_url(page_on, works, 1) + '");}\
        27.8% {background-image: url("' + get_url(page_on, works, 1) + '");}\
        33.3% {background-image: url("' + get_url(page_on, works, 2) + '");}\
        44.4% {background-image: url("' + get_url(page_on, works, 2) + '");}\
        50%   {background-image: url("' + get_url(page_on, works, 3) + '");}\
        61.1% {background-image: url("' + get_url(page_on, works, 3) + '");}\
        66.7% {background-image: url("' + get_url(page_on, works, 4) + '");}\
        77.8% {background-image: url("' + get_url(page_on, works, 4) + '");}\
        83.3% {background-image: url("' + get_url(page_on, works, 5) + '");}\
        94.4% {background-image: url("' + get_url(page_on, works, 5) + '");}\
        100%  {background-image: url("' + get_url(page_on, works, 0) + '");}\
    }'; // add animations
    document.head.appendChild(style);
    console.log("Carousel initialization finished.");
}

function get_url(page_on, works, work_on) {
    return './src/' + page_on + '/' + works[work_on][0] + "_" + works[work_on][1] + '.jpg';
}

function get_video_source(keyword, platform) {
    switch(platform) {
    case "youku":
        return "https://so.youku.com/search_video/q_" + keyword;
    case "mgtv":
        return "https://so.mgtv.com/so?k=" + keyword;
    case "iqiyi":
        return "https://www.iqiyi.com/search/" + keyword + ".html";
    case "tencent":
        return "https://v.qq.com/x/search/?q=" + keyword;
    case "cctv":
        return "https://search.cctv.com/search.php?qtext=" + keyword;
    case "pptv":
        return "https://sou.pptv.com/s_video?kw=" + keyword;
    case "bili":
        return "https://search.bilibili.com/all?keyword=" + keyword;
    case "weibo":
        return "https://weibo.com/7883248565/" + weibo_source[keyword]; // 花园里的小蝴蝶_
    case "douyin":
        return "https://www.douyin.com/search/" + keyword;
    case "xigua":
        return "https://www.ixigua.com/search/" + keyword;
    case "wangyi":
        return "https://music.163.com/#/search/m/?s=魏大勋%20" + keyword;
    case "qq":
        return "https://y.qq.com/n/ryqq/search?w=魏大勋%20" + keyword;
    case "kuwo":
        return "http://www.kuwo.cn/search/list?key=魏大勋%20" + keyword;
    case "kugou":
        return "https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=魏大勋%20" + keyword;
    case "bili+":
        return "https://search.bilibili.com/all?keyword=魏大勋%20" + keyword;
    case "weibo+":
        return "https://weibo.com/7659141491/" + weibo_source[keyword]; // 魏大勋de花园
    default:
        return "(no valid source)";
    }
}

function get_platform_name(platform) {
    switch(platform) {
    case "youku":
        return "优酷";
    case "mgtv":
        return "芒果tv";
    case "iqiyi":
        return "爱奇艺";
    case "tencent":
        return "腾讯视频";
    case "cctv":
        return "央视网";
    case "pptv":
        return "PP视频";
    case "bili":
    case "bili+":
        return "哔哩哔哩";
    case "weibo":
    case "weibo+":
        return "微博";
    case "douyin":
        return "抖音";
    case "xigua":
        return "西瓜视频";
    case "wangyi":
        return "网易云音乐";
    case "qq": 
        return "QQ音乐";
    case "kuwo":
        return "酷我音乐";
    case "kugou":
        return "酷狗音乐"
    default:
        return "(no valid source)";
    }
}

function get_all_video_source(keyword, all_platforms) {
    var src = [];
    for (var i = 0; i < all_platforms.length; i++) {
        src.push(get_video_source(keyword, all_platforms[i]));
    }
    return src;
}

function write_single_source(class_name_objs, all_works, works_unaired, i) {
    var src_link_objs = class_name_objs[i].getElementsByClassName("src_link");
    for (var j = 0; j < src_link_objs.length; j++) {
        var link_ref = get_all_video_source(all_works[i][works_unaired[i] + j][0], all_works[i][works_unaired[i] + j][3]);
        src_link_objs[j].href = link_ref[0];
    }
}

function write_multiple_source(class_name_objs, all_works, works_unaired, i) {
    var bubble_content_objs = class_name_objs[i].getElementsByClassName("bubble_content");
    for (var j = 0; j < bubble_content_objs.length; j++) {
        var src_link_objs = bubble_content_objs[j].getElementsByClassName("src_link");
        var link_ref = get_all_video_source(all_works[i][works_unaired[i] + j][0], all_works[i][works_unaired[i] + j][3]);
        if (link_ref[0] != "(no valid source)") {
            for (var k = 0; k < src_link_objs.length; k++) {
                src_link_objs[k].href = link_ref[k];
            }
        }
    }
}

function class_write_video_source(class_name, all_works, works_unaired, is_single) {
    var class_name_objs = document.getElementsByClassName(class_name);
    // var num_src_link = 0;
    for (var i = 0; i < class_name_objs.length; i++) {
        if (is_single) {
            write_single_source(class_name_objs, all_works, works_unaired, i);
        } else {
            write_multiple_source(class_name_objs, all_works, works_unaired, i);
        }
    }
    console.log("Writing video source finished.");
}

function id_write_video_source(id_name, all_works) {
    var id_obj = document.getElementById(id_name);
    var bubble_content_objs = id_obj.getElementsByClassName("bubble_content");
    for (var j = 0; j < bubble_content_objs.length; j++) {
        var src_link_objs = bubble_content_objs[j].getElementsByClassName("src_link");
        var link_ref = get_all_video_source(all_works[j][0], all_works[j][3]);
        if (link_ref[0] != "(no valid source)") {
            for (var k = 0; k < src_link_objs.length; k++) {
                src_link_objs[k].href = link_ref[k];
            }
        }
    }
}

function alert_init(all_works) {
    var alert_bg = document.getElementById("alert_bg");
    var alert_win_objs = document.getElementsByClassName("alert_win");
    alert_bg.style.height = document.body.scrollHeight + "px";
    for(var i = 0; i < all_works.length; i++) {
        alert_bg.innerHTML += "<div class='alert_win'><div class='alert_title'>全部作品<div class='alert_close_btn' onclick='alert_close()'>点击关闭</div></div></div>";
        alert_win_objs[i].style.display = "none";
        alert_win_objs[i].style.fontSize = (is_phone) ? ("2.5vw") : ("1.5vw");

        // initialize bubbles inside        
        create_bubble(alert_win_objs[i], all_works[i]);
    }
    console.log("Alert window initialization finished.");
}

function alert_open(i) {
    var alert_bg = document.getElementById("alert_bg");
    var alert_win_objs = document.getElementsByClassName("alert_win");
    alert_bg.style.display = "block";
    alert_win_objs[i].style.display = "block";
}

function alert_close() {
    var alert_bg = document.getElementById("alert_bg");
    var alert_win_objs = document.getElementsByClassName("alert_win");
    alert_bg.style.display = "none";
    for (var i = 0; i < alert_win_objs.length; i++) {
        alert_win_objs[i].style.display = "none";
    }
}

function create_bubble(canva, content, extra_content=undefined) {
    for (var i = 0; i < content.length; i++) {
        var all_a = "";
        for (var j = 0; j < content[i][3].length; j++) {
            all_a += "<a class='src_link' target='_blank'>|" + get_platform_name(content[i][3][j]) + "</a>";
        }
        var extra = "";
        if (extra_content != undefined) {
            extra = " <div class='bubble_description'>\
                        " + extra_content[i][2] + "\
                    </div>";
        }
        canva.innerHTML += "<div class='bubble'>\
                                <div class='bubble_date'>\
                                    " + content[i][1] + "\
                                </div>\
                                <div class='bubble_content'>\
                                    " + content[i][0] + extra + all_a + "\
                                </div>\
                            </div>";
    }
    console.log("Create bubbles finished.");
}

function get_rencent_six(all_works, works_unaired) {
    var all_recent_size = all_works.length * 6;
    var all_recent = []
    for (var i = 0; i < all_recent_size; i++) {
        all_recent[i] = all_works[Math.floor(i / 6)][i % 6 + works_unaired[Math.floor(i / 6)]];
    }
    var sort_by_index = function(array_index) {
        return function(item1, item2) {
            // format: yyyy-mm-dd
            var a = item1[array_index];
            var b = item2[array_index];
            var a_y = Number(a.slice(0, 4)), a_m = Number(a.slice(5, 7)), a_d = Number(a.slice(8, 10));
            var b_y = Number(b.slice(0, 4)), b_m = Number(b.slice(5, 7)), b_d = Number(b.slice(8, 10));
            if (a_y < b_y) {
                return 1;
            } else if (a_y > b_y) {
                return -1;
            } else {
                if (a_m < b_m) {
                    return 1;
                } else if (a_m > b_m) {
                    return -1;
                } else {
                    if (a_d < b_d) {
                        return 1;
                    } else if (a_d > b_d) {
                        return -1;
                    } else {
                        return 0;  // if equal
                    }
                }
            }
        }
    }
    all_recent.sort(sort_by_index(1));
    return all_recent.slice(0, 6);
}







