var is_phone = (document.body.scrollWidth < 769);
var navigation = document.getElementById("navigation");
navigation.style.fontSize = (is_phone) ? ("100%") : ("60%");
var date_on = new Date();
var a = ["a", "a2"];
var b = ["b", "b2"];
var c = {
    "c1": a,
    "c2": b
};
var ab_obj = {
    "a": a,
    "b": b,
    "c": c
};

// film and tv section initialization
function event_init() {
    
    console.log(m_date.value);
}

window.onload = function() {
    // event_init();
    var icon = document.getElementsByClassName("icon");
    console.log("navigation: " + navigation[0]);
    console.log("icon: " + icon[0]);
}

$("#m_date").on("blur", function() {
    console.log(this.value);
});

