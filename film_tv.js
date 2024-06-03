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
var all_film = [["天堂旅行团", "约 2024"],    // 未播出
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
var all_tv = [["不讨好的勇气","约 2025"], ["人生若如初见", "约 2024"],    // 未播出
              ["一曲三笙", "约 2024"],   // 未播出
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

// global variables
var ep_tot_unaired = 4;
var film_unaired = 1;
var tv_unaired = 3;

// film and tv section initialization
function film_tv_init() {
    // get elements from html
    var section_bar_objs = document.getElementsByClassName("section_bar");
    var works = [all_film, all_tv];
    var works_unaired = [film_unaired, tv_unaired];

    // initialize the amount of content bar needed
    for (var i = 0; i < section_bar_objs.length; i++) {
        section_init(section_bar_objs[i], works[i], works_unaired[i], "film_tv");
    }
    section_load_image(works, works_unaired, "film_tv");
}

window.onload = function() {
    carousel_init(masterpiece, "film_tv");
    film_tv_init();
}