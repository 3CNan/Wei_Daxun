function kuwo_search(keyword) {
    var usernameInput = document.querySelector('input.search');
    usernameInput.value = "魏大勋 " + keyword;
    var event1 = new Event('input', { bubbles: true });
    usernameInput.dispatchEvent(event1);
    $(".icon.iconfont.icon-header_icon_search_").click();
}

function kuwo_add_in_list() {
    var song_item = document.querySelectorAll('.song_item.flex_c');
    song_item[0].click();
    $(".song_opts.flex_c .iconfont.icon-icon_play_").click();
}