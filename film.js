var ep_on;
var ep_timer;
var ep_sec = 3000;

window.onload = function() {
	ep_on = 0;
    clearInterval(ep_timer);
    ep_timer = setInterval(next_ep(), ep_sec);
}

function next_ep() {
    ep_on++;
    if(ep_on > 5) {
        ep_on = 0;
    }
    console.log(ep_on);
    for(var i = 0; i < 5; i++) {
        ep_title_objs[i].style.backgroundColor = "white";
    }
    ep_title_objs[ep_on].style.backgroundColor = "lightblue";
}

var ep_title_objs = document.getElementsByClassName("ep_name");
