var is_phone = (document.body.scrollWidth < 769);
var navigation = document.getElementById("navigation");
navigation.style.fontSize = (is_phone) ? ("100%") : ("60%");

var date_on = new Date().toISOString().slice(0, 10); // yyyy-mm-dd
date_on = get_date_arr(date_on);
var days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var year, month, day, month_len, calendar;
var month_zh = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
var month_en = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];


// event basic style initialization
function event_init() {
    var calendar = document.getElementById("calendar");
    calendar.style.width = (is_phone) ? "90%" : "70%";
    calendar.style.fontSize = (is_phone) ? "100%" : "200%";
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
    year = Number(date_on.slice(0, 4));
    month = Number(date_on.slice(5, 7));
    day = Number(date_on.slice(8, 10));
    return [year, month, day];
}

function get_day(day) { // return 1-7
    return (day > 1) ? (day - 1) : (day + 6);
}

function get_calendar() {
    year = date_on[0];
    month = date_on[1];
    day = date_on[2];
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
    // console.log(m_calendar);
    calendar = m_calendar;
}

function draw_calendar() {
    get_calendar();
    var get_calendar_bar_html = function(txt_bar, index) {
        var content_in_bar = "";
        for (var i = 0; i < 7; i++) {
            var class_html = "calendar_day_box";
            class_html += (txt_bar[i][1] != month) ? " calendar_day_box_other" : "";
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
    if (obj != undefined) {
        for (var i = 0; i < $(".calendar_day_box").length; i++) {
            $(".calendar_day_box")[i].classList.remove("date_on");
        }
        obj.classList.add("date_on");
    }
    date_on = date_arr;
}


function redraw_new_month(direction) {
    month = month + direction;
    year = (month == 0) ? (year - 1) : year;
    month = (month == 0) ? 12 : month;
    year = (month == 13) ? (year + 1) : year;
    month = (month == 13) ? 1 : month;
    set_date_on([year, month, day]);
    draw_calendar();
}

function get_event(year, month, day) {
}


window.onload = function() {
    event_init();
    draw_calendar();
}

$("#m_date").on("blur", function(e) {
    date_on = this.value;
    date_on = get_date_arr(date_on);
    draw_calendar();
});










