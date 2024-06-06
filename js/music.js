// film and tv section initialization
function music_init() {
    var ranking = document.getElementById("ranking");
    var ranking_break = (is_phone) ? ('</div><div class="ranking_list_bar">') : ("");
    var ranking_content = '<div class="ranking_list_bar"> \
                                <div class="ranking_list">单曲</div>' + ranking_break +' \
                                <div class="ranking_list">ost</div>' + ranking_break +' \
                                <div class="ranking_list">碎片</div> \
                            </div> \
                            <div class="ranking_list_bar"> \
                                <div class="ranking_list">综艺Live</div>' + ranking_break +' \
                                <div class="ranking_list">晚会Live</div> \
                            </div>';
    ranking.innerHTML = ranking_content;
}



window.onload = function() {
    music_init();
}

