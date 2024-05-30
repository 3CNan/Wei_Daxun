var all_film_tv = [["不讨好的勇气","约 2025"], ["人生若如初见", "约 2024"], 
                   ["一曲三笙", "约 2024"], ["天堂旅行团", "约 2024"],     // 未播出
                   ["来都来了", "2024-2-8"], ["问苍茫", "2023-12-12"], 
                   ["志愿军：雄兵出击", "2023-9-28"], ["特工任务", "2023-9-20"], 
                   ["送瘟神", "2023-8-30"], ["我的人间烟火", "2023-7-5"], 
                   ["蝶影", "2023-3-21"], ["关于唐医生的一切", "2022-6-25"], 
                   ["超时空大玩家", "2022-4-30"], ["1921", "2021-7-1"], 
                   ["爱的理想生活", "2021-3-1"], ["紧急救援", "2020-12-18"], 
                   ["婚前故事", "2020-11-13"], ["平凡的荣耀", "2020-9-4"], 
                   ["特工别闹", "2020-2-17"],                               // 因格式问题缺一个，下个作品加进去！
                   ["亲爱的新年好", "2019-12-31"], ["大约在冬季", "2019-11-15"], 
                   ["小小的愿望", "2019-9-12"], ["夜空中最闪亮的星", "2019-3-25"], 
                   ["青春警事", "2018-7-2"], ["北京女子图鉴", "2018-4-10"], 
                   ["因为爱情", "2017-10-27"], ["高能医少", "2017-9-18"],
                   ["麻烦家族", "2017-5-11"], ["相爱穿梭千年2：月光下的交换", "2016-11-16"], 
                   ["减法人生", "2016-11-11"], ["亲向前冲", "2016-10-26"], 
                   ["因为爱情有幸福", "2016-2-24"], ["百变五侠之我是大明星", "2016-2-1"], 
                   ["情敌蜜月", "2015-9-2"], ["我是奋青", "2015-8-28"], 
                   ["栀子花开", "2015-7-10"], ["握紧你的手", "2015-6-19"], 
                   ["伏弩", "2015-5-17"], ["办公室大爆炸", "2015-4-24"],
                   ["女王派对", "2014-12-30"], ["城市猎人", "2014-9-28"], 
                   ["一又二分之一的夏天", "2014-6-23"], ["激浪青春", "2014-6-6"],
                   ["今夜天使降临", "2013-7-31"], ["抓紧时间爱", "2013"], 
                   ["辣椒与泡菜", "2012-11-17"], ["非常之恋", "2012-3-19"],
                   ["牦牛岁月", "2012"], ["辛亥革命", "2011-9-23"], 
                   ["警校生", "2011-12-1"], ["新拼住时代", "2011"],
                   ["毛岸英", "2010-10-20"], ["苏菲日记", "2008-12-15"]];
var all_film = [["天堂旅行团", "约 2024"],  // 未播出
                ["来都来了", "2024-2-8"], ["志愿军：雄兵出击", "2023-9-28"],
                ["1921", "2021-7-1"], ["紧急救援", "2020-12-18"], 
                ["婚前故事", "2020-11-13"], ["亲爱的新年好", "2019-12-31"], 
                ["大约在冬季", "2019-11-15"], ["小小的愿望", "2019-9-12"], 
                ["因为爱情", "2017-10-27"], ["麻烦家族", "2017-5-11"], 
                ["减法人生", "2016-11-11"], ["亲向前冲", "2016-10-26"], 
                ["情敌蜜月", "2015-9-2"], ["我是奋青", "2015-8-28"], 
                ["栀子花开", "2015-7-10"], ["握紧你的手", "2015-6-19"], 
                ["激浪青春", "2014-6-6"], ["非常之恋", "2012-3-19"],
                ["辛亥革命", "2011-9-23"]];
var all_tv = [["不讨好的勇气","约 2025"], ["人生若如初见", "约 2024"], 
              ["一曲三笙", "约 2024"], // 未播出
              ["问苍茫", "2023-12-12"], ["特工任务", "2023-9-20"], 
              ["送瘟神", "2023-8-30"], ["我的人间烟火", "2023-7-5"], 
              ["蝶影", "2023-3-21"], ["关于唐医生的一切", "2022-6-25"], 
              ["超时空大玩家", "2022-4-30"], ["爱的理想生活", "2021-3-1"], 
              ["平凡的荣耀", "2020-9-4"], ["特工别闹", "2020-2-17"],
              ["夜空中最闪亮的星", "2019-3-25"], ["青春警事", "2018-7-2"], 
              ["北京女子图鉴", "2018-4-10"], ["高能医少", "2017-9-18"],
              ["相爱穿梭千年2：月光下的交换", "2016-11-16"], ["因为爱情有幸福", "2016-2-24"], 
              ["百变五侠之我是大明星", "2016-2-1"], ["伏弩", "2015-5-17"], 
              ["办公室大爆炸", "2015-4-24"], ["女王派对", "2014-12-30"], 
              ["城市猎人", "2014-9-28"], ["一又二分之一的夏天", "2014-6-23"], 
              ["今夜天使降临", "2013-7-31"], ["抓紧时间爱", "2013"], 
              ["辣椒与泡菜", "2012-11-17"], ["牦牛岁月", "2012"], 
              ["警校生", "2011-12-1"], ["新拼住时代", "2011"],
              ["毛岸英", "2010-10-20"], ["苏菲日记", "2008-12-15"]];
var masterpiece = [["志愿军：雄兵出击", "2023-9-28"], ["特工任务", "2023-9-20"], 
                   ["我的人间烟火", "2023-7-5"], ["关于唐医生的一切", "2022-6-25"], 
                   ["超时空大玩家", "2022-4-30"], ["爱的理想生活", "2021-3-1"]];

var carousel = document.getElementById("carousel");
var ep_titles = document.getElementById("ep_titles");
var ep_area = document.getElementById("ep_area");
var ep_name_objs = document.getElementsByClassName("ep_name");
var ep_name_area = document.getElementById("ep_name_area");
var ep_on = 0;
var carousel_height;
var ep_tot_unaired = 4;


window.onload = function() {
    if(window.screen.width < 700) {
        carousel_height = 300;
    } else {
        carousel_height = 550;
    }
    carousel.style.height = carousel_height + "px";
    ep_name_area.style.height = "calc(" + carousel_height + "px / 6";
    for(var i = 0; i < 12; i++) {
        // ep_name_objs[i].innerHTML = all_film_tv[ep_tot_unaired + i % 6][0]; // carousel the recent 6 works
        ep_name_objs[i].innerHTML = masterpiece[i % 6][0]; // carousel the recent best 6 (I think) works
        ep_name_objs[i].style.height = "calc(" + carousel_height + "px / 6";
        ep_name_objs[i].style.fontSize = (carousel_height / 20) + "px";
    }
    var style = document.createElement('style');
    style.innerHTML = '\
    @keyframes carousel_ep_names{\
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
    @keyframes gradient_ep_names{\
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
    @keyframes carousel_img{\
        0%    {background-image: url("./src/film_tv/' + masterpiece[0][0] + '.jpg");}\
        11.1% {background-image: url("./src/film_tv/' + masterpiece[0][0] + '.jpg");}\
        16.7% {background-image: url("./src/film_tv/' + masterpiece[1][0] + '.jpg");}\
        27.8% {background-image: url("./src/film_tv/' + masterpiece[1][0] + '.jpg");}\
        33.3% {background-image: url("./src/film_tv/' + masterpiece[2][0] + '.jpg");}\
        44.4% {background-image: url("./src/film_tv/' + masterpiece[2][0] + '.jpg");}\
        50%   {background-image: url("./src/film_tv/' + masterpiece[3][0] + '.jpg");}\
        61.1% {background-image: url("./src/film_tv/' + masterpiece[3][0] + '.jpg");}\
        66.7% {background-image: url("./src/film_tv/' + masterpiece[4][0] + '.jpg");}\
        77.8% {background-image: url("./src/film_tv/' + masterpiece[4][0] + '.jpg");}\
        83.3% {background-image: url("./src/film_tv/' + masterpiece[5][0] + '.jpg");}\
        94.4% {background-image: url("./src/film_tv/' + masterpiece[5][0] + '.jpg");}\
        100%  {background-image: url("./src/film_tv/' + masterpiece[0][0] + '.jpg");}\
    }'; // add animations

    document.head.appendChild(style);
}

// ep_titles.addEventListener("click", function() {console.log("hello");});
// function turn_page() {
//     carousel_img_rowObj.style.marginLeft = ep_on + "00%" ;
// }

// function scroll_carousel_to_right() {
//     ep_on++;
//     carousel_img_rowObj.style.transition = "all linear 1.5s";
//     if (ep_on >= 0) {
//         ep_on = 0;
//         turn_page();
//         setTimeout(back_to_right, 1500);
//     } else {
//         turn_page();
//     }
// }
// function scroll_carousel_to_top() {
//     ep_on++;
//     carousel_img_rowObj.style.transition = "all linear 1.5s";
//     if (ep_on >= 0) {
//         ep_on = 0;
//         turn_page();
//         setTimeout(back_to_right, 1500);
//     } else {
//         turn_page();
//     }
// }
// function back_to_right() {
//     ep_on = -6;
//     carousel_img_rowObj.style.transition = "none";
//     turn_page();
// }