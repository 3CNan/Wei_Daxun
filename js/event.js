var is_phone = (document.body.scrollWidth < 769);

var date_on = new Date().toISOString().slice(0, 10); // yyyy-mm-dd
date_on = get_date_arr(date_on);
update_date_on();
var days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var year, month, day, month_len, calendar;
var month_zh = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
var month_en = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];


// event basic style initialization
function event_init() {
    var calendar = document.getElementById("calendar");
    calendar.style.width = (is_phone) ? "90%" : "45%";
    calendar.style.fontSize = (is_phone) ? "100%" : "200%";
    var event_area = document.getElementById("event_area");
    event_area.style.width = (is_phone) ? "90%" : "45%";
    // var filter = document.getElementById("filter");
    // filter.style.height = (is_phone) ? "70vh" : "90vh";
}

function get_days_in_months(year, month) { // month: 1-12
    if (month == 0) {
        month = 12;
    }
    if (month == 2 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)) {
        return 29;
    }
    return days_in_months[month - 1];
}

function get_date_arr(date_str) {
    var m_year = Number(date_str.slice(0, 4));
    var m_month = Number(date_str.slice(5, 7));
    var m_day = Number(date_str.slice(8, 10));
    return [m_year, m_month, m_day];
}

function get_day(day) { // return 1-7
    return (day > 1) ? (day - 1) : (day + 6);
}

function get_calendar() {
    update_date_on();
    month_len = get_days_in_months(year, month);
    var prev_month_len = get_days_in_months(year, month - 1);
    var first_weekday = get_day(new Date(year, month - 1, 2).getDay());
    var m_calendar = [];
    var calendar_push_date = function(i, j, year, month, day) {
        year = (month == 0) ? (year - 1) : year;
        month = (month == 0) ? 12 : month;
        year = (month == 13) ? (year + 1) : year;
        month = (month == 13) ? 1 : month;
        m_calendar[i][j] = [];
        m_calendar[i][j].push(year);
        m_calendar[i][j].push(month);
        m_calendar[i][j].push(day);
    }

    // get regular month part
    for (var i = 0; i < month_len + first_weekday; i++) {
        if (i % 7 == 0) {
            m_calendar.push([]);
        }
        if (i >= first_weekday) {
            calendar_push_date(Math.floor(i / 7), i % 7, year, month, i - first_weekday + 1);
        } else {
            m_calendar[Math.floor(i / 7)][i % 7] = null;
        }
    }

    // get prev month part
    for (var i = 6; i >= 0; i--) {
        if (!m_calendar[0][i]) {
            calendar_push_date(0, i, year, month - 1, prev_month_len--);
        }
    }

    // get later month part
    var later_index = m_calendar[m_calendar.length - 1].length;
    for (var i = later_index; i < 7; i++) {
        calendar_push_date(m_calendar.length - 1, i, year, month + 1, i - later_index + 1);
    }
    console.log(m_calendar);
    calendar = m_calendar;
}

function draw_calendar() {
    get_calendar();
    var get_calendar_bar_html = function(txt_bar, index) {
        var content_in_bar = "";
        for (var i = 0; i < 7; i++) {
            var class_html = "calendar_day_box";
            class_html += (txt_bar[i][1] != month) ? " calendar_day_box_other" : "";
            class_html += (get_event(txt_bar[i], false)) ? " calendar_day_box_event_on" : "";
            var onclick_html = (txt_bar[i][1] != month) ? "redraw_calendar(1, " + index + ", " + i + ")" : "redraw_calendar(0, " + index + ", " + i + ")";
            class_html = ' class="' + class_html + '"';
            onclick_html = ' onclick="' + onclick_html + '"';
            content_in_bar += '<div ' + class_html + onclick_html + '>' + txt_bar[i][2] + '</div>';
        }
        return '<div class="calendar_day_bar">\
                    ' + content_in_bar + '\
                </div>';
    };
    
    var calendar_content = document.getElementById("calendar_content");
    calendar_content.innerHTML = "";
    for (var i = 0; i < calendar.length; i++) {
        calendar_content.innerHTML += get_calendar_bar_html(calendar[i], i);
    }

    var calendar_month_content = document.getElementById("calendar_month_content");
    calendar_month_content.innerHTML = year + " " + month_zh[month - 1] + " " + month_en[month - 1];

    for (var i = 0; i < calendar.length; i++) {
        for (var j = 0; j < calendar[i].length; j++) {
            if (calendar[i][j][0] == date_on[0] && calendar[i][j][1] == date_on[1] && calendar[i][j][2] == date_on[2]) {
                var calendar_day_bar = document.getElementsByClassName("calendar_day_bar");
                var calendar_day_box = calendar_day_bar[i].getElementsByClassName("calendar_day_box");
                set_date_on(date_on, calendar_day_box[j]);
            }
        }
    }
}


function redraw_calendar(is_redraw, i, j) {
    var calendar_day_bar = document.getElementsByClassName("calendar_day_bar");
    var calendar_day_box = calendar_day_bar[i].getElementsByClassName("calendar_day_box");
    if (is_redraw) {
        set_date_on(calendar[i][j]);
        draw_calendar();
    } else {
        set_date_on(calendar[i][j], calendar_day_box[j]);
    }
}


function set_date_on(date_arr, obj=undefined) {
    date_on = date_arr;
    update_date_on();
    if (obj != undefined) {
        for (var i = 0; i < $(".calendar_day_box").length; i++) {
            $(".calendar_day_box")[i].classList.remove("date_on");
        }
        obj.classList.add("date_on");
        get_event(date_arr, true);
    }
}


function update_date_on() {
    year = date_on[0];
    month = date_on[1];
    day = date_on[2];
}


function redraw_new_month(direction) {
    update_date_on();
    month = month + direction;
    year = (month == 0) ? (year - 1) : year;
    year = (month == 13) ? (year + 1) : year;
    month = (month == 0) ? 12 : month;
    month = (month == 13) ? 1 : month;
    set_date_on([year, month, day]);
    draw_calendar();
}


function get_event(date_arr, is_create_bubble) {
    var event_area = document.getElementById("event_area");
    event_area.innerHTML = '';
    is_having_event = false;
    for (var i = 0; i < all_event.length; i++) {
        event_date = get_date_arr(all_event[i][1]);
        if (event_date[0] == date_arr[0] && event_date[1] == date_arr[1] && event_date[2] == date_arr[2]) {
            is_having_event = true;
            if (is_create_bubble) {
                create_event_bubbles(event_area, all_event[i]);
            }   
        }
    }
    if (!is_having_event && is_create_bubble) {
        event_area.innerHTML = '<div class="event_bubble">今天没有活动 / 有活动暂时还没更新，请耐心等等哦 :D</div>';
    }
    return is_having_event;
}


function create_event_bubbles(canva, event) {
    var event_arr = event_format(event);
    canva.innerHTML +=  '<div class="event_bubble">\
                            <div class="event_bubble_title">\
                                ' + event_arr[0] + '\
                            </div>\
                            <div class="event_bubble_description">\
                                ' + event_arr[1] + "\n" + event_arr[2] + '\
                            </div>\
                            <div class="event_bubble_link">\
                                ' + event_arr[3] + '\
                            </div>\
                        </div>';
}

var event_format = function(event) {
    var event_platform = event[3];
    var event_link = '';
    var event_info = event[2];
    var event_name = event[0];
    var event_date = event[1];
    var suffix = '';
    var src_list = [];
    var write_src = function(keyword, plat_name, suffix) {
        var src = get_video_source(keyword, plat_name);
        (src != "") ? src_list.push(src) : "";
        src = (src != "") ? " href='" + src + "'" : src;
        var plat_name = get_platform_name(plat_name);
        event_link += "<a class='src_link' target='_blank'" + src + ">&nbsp;|" + plat_name + suffix + "</a>"; 
    }
    for (var i = 0; i < event_platform.length; i++) {
        var keyword = event_name;
        item_list = get_weibo_source(weibo_source[event_name], event_date, event_platform[i]);
        if (item_list != []) {
            for (var j = 0; j < item_list.length; j++) {
                keyword = item_list[j]['link'];
                suffix = "_" + item_list[j]['from'];
                plat_name = item_list[j]['type'];
                write_src(keyword, plat_name, suffix);
            }
        }
    }
    console.log(src_list);
    // console.log(event_name, event_link);
    return [event_name, event_date, event_info, event_link, src_list];
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
        filter_content.innerHTML = "未找到符合筛选标准的活动";
    } else {
        create_bubble(filter_content, all_works);
        // id_write_video_source("filter_content", all_works);
        var id_obj = document.getElementById("filter_content");
        var bubble_content_objs = id_obj.getElementsByClassName("bubble_content");
        for (var j = 0; j < bubble_content_objs.length; j++) {
            var src_link_objs = bubble_content_objs[j].getElementsByClassName("src_link");
            var link_ref = event_format(all_works[j])[4];
            if (link_ref[0] != "") {
                for (var k = 0; k < src_link_objs.length; k++) {
                    src_link_objs[k].href = link_ref[k];
                }
            }
        }

        if (is_phone) {
            var bubble_tag_bar_objs = document.getElementsByClassName("bubble_tag_bar");
            for (var i = 0; i < bubble_tag_bar_objs.length; i++) {
                bubble_tag_bar_objs[i].style.display = "block";
            }
        }
    }
}


function select_filter() {
    var year_selected = Number(document.getElementById("date_select_year").value);
    var month_selected = Number(document.getElementById("date_select_month").value);
    // console.log(year_selected, month_selected);
    var res = all_event.filter(item => {
        var m_date = item[1];
        var m_year = Number(m_date.slice(0, 4));
        var m_month = Number(m_date.slice(5, 7));
        // console.log(m_year == year_selected && !month_selected);
        if (m_year == year_selected && m_month == month_selected) {
            return true;
        } else if (m_year == year_selected && !month_selected) {
            return true;
        } else if (m_month == month_selected && !year_selected) {
            return true;
        } else {
            return false;
        }
    });

    write_filter_content(res, "活动");
}



window.onload = function() {
    event_init();
    write_filter_content(all_event);
    draw_calendar();
}

$("#m_date").on("blur", function(e) {
    // console.log(this.value == '');
    if (this.value != '') {
        date_on = this.value;
        date_on = get_date_arr(date_on);
        draw_calendar();
    }
});










