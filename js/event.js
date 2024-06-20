var is_phone = (document.body.scrollWidth < 769);
var navigation = document.getElementById("navigation");
navigation.style.fontSize = (is_phone) ? ("100%") : ("60%");

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
    calendar.style.width = (is_phone) ? "90%" : "70%";
    calendar.style.fontSize = (is_phone) ? "100%" : "200%";
    var event_area = document.getElementById("event_area");
    event_area.style.width = (is_phone) ? "90%" : "70%";
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
}


function redraw_calendar(is_redraw, i, j) {
    var calendar_day_bar = document.getElementsByClassName("calendar_day_bar");
    var calendar_day_box = calendar_day_bar[i].getElementsByClassName("calendar_day_box");
    var calendar_day_box_other = document.getElementsByClassName("calendar_day_box_other");
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
    var event_format = function(event) {
        var event_platform = event[3].split(", ");
        var event_link = '';
        var event_info = event[2];
        var event_name = event[0];
        for (var i = 0; i < event_platform.length; i++) {
            var keyword = (event_platform[i] == "weibo4") ? event[0] + "_" + event[1]: event[0];
            var suffix = (event_platform[i].indexOf("weibo") != -1) ? weibo_source_index[keyword] : "";
            
            event_link += "<a class='src_link' target='_blank' href='" + get_video_source(keyword, event_platform[i]) + "'>&nbsp;|" +  get_platform_name(event_platform[i]) + "_" + suffix + "</a>"; 
        }
        console.log(event_platform);
        return '<div class="event_bubble">\
                    <div class="event_bubble_title">\
                        ' + event_name + '\
                    </div>\
                    <div class="event_bubble_description">\
                        ' + event_info + '\
                    </div>\
                    <div class="event_bubble_link">\
                        ' + event_link + '\
                    </div>\
                </div>';
    }
    canva.innerHTML += event_format(event);
}


// function exportPictureDownPNG(pngName, pngId) {
//     if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"") == "MSIE8.0" || navigator.appVersion.split(";")[1].replace(/[ ]/g,"") == "MSIE9.0") {
//             //IE亲测
//             alert("请升级您的IE浏览器版本，暂不支持IE9及以下版本导出图片。")
//     }
//     html2canvas(document.getElementById(pngId)，{
//         onrendered:function(canvas){
//         var imgData = canvas.toDataURL('image/octet-stream');  // IE 9+浏览器
//         if(canvas.msToBlob){
//             var blob = canvas.msToBlob();
//             window.navigator.msSaveBlob(blob, pngName);
//         } else {
//             saveFile(imgData,pngName);
//         }
//     });
// }
// function saveFile(data, filename)f
// var save link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');save link.href = data;save link.download = filename;
// var event = document.createEvent('MouseEvents');event.initMouseEvent('click', true, false, window,0,0,0,0,0, false, false, false, false,0, null);save link.dispatchEvent(event);










window.onload = function() {
    event_init();
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










