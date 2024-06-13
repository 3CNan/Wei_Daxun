var is_phone = (document.body.scrollWidth < 769);
var navigation = document.getElementById("navigation");
navigation.style.fontSize = (is_phone) ? ("100%") : ("60%");
var date_on = new Date().toISOString().slice(0, 10); // yyyy-mm-dd
var days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// film and tv section initialization
function event_init() {
    
}

function get_days_in_month(year, month) {
    if()
}

window.onload = function() {
    // event_init();
    var icon = document.getElementsByClassName("icon");
    console.log("navigation: " + navigation[0]);
    console.log("icon: " + icon[0]);

    console.log(date_on);
}

$("#m_date").on("blur", function() {
    console.log(this.value);
});

