//["节目名称", "播出时间", "简介", "平台"]
var all_resident = [["魔方新世界","2024-05-15","----",["mgtv"]],
                    ["我们仨","2024-03-23","作为常驻嘉宾参与",["mgtv"]],
                    ["一起露营吧第二季","2023-04-19","作为露营家族成员常驻",["iqiyi"]],
                    ["我在你的未来吗","2022-11-13","作为观察员参与",["mgtv"]],
                    ["做家务的男人第四季","2022-08-12","作为固定嘉宾参与",["iqiyi"]],
                    ["嗨放派第二季","2022-08-06","作为“嗨放学长”参与",["tencent"]],
                    ["新游记","2022-06-04","----",["tencent"]],
                    ["一往无前的蓝","2022-02-19","以“消防新生”身份入驻消防站",["tencent"]],
                    ["奇异剧本鲨","2021-07-10","作为常驻嘉宾参与",["iqiyi"]],
                    ["明星大侦探第六季","2021-01-14","作为常驻嘉宾",["mgtv"]],
                    ["同一屋檐下","2021-01-06","作为固定嘉宾参与",["youku"]],
                    ["拜托了冰箱第六季","2020-04-28","担任代班主持",["tencent"]],
                    ["做家务的男人第一季","2019-08-02","作为固定嘉宾",["iqiyi"]],
                    ["我们长大了","2019-06-18","作为固定嘉宾",["tencent"]],
                    ["青春环游记第一季","2019-05-04","作为固定嘉宾",["tencent"]],
                    ["密室大逃脱第一季","2019-03-30","作为固定嘉宾",["mgtv"]],
                    ["终极高手","2019-01-18","荣耀经理人",["tencent"]],
                    ["妻子的浪漫旅行第一季","2018-09-12","作为固定嘉宾",["mgtv"]],
                    ["二十四小时第三季","2018-02-02","作为固定嘉宾",["tencent"]],
                    ["王者出击","2017-12-15","作为固定嘉宾",["tencent"]],
                    ["喜剧总动员第二季","2017-10-28","作为固定嘉宾，最终获得总决赛冠军",["youku"]],
                    ["明星大侦探第三季","2017-09-22","作为常驻嘉宾",["mgtv"]],
                    ["明星大侦探第二季","2017-01-13","作为常驻嘉宾",["mgtv"]],
                    ["头号惊喜","2016-11-20","作为固定嘉宾",["mgtv"]],
                    ["我们相爱吧第二季","2016-03-20","作为固定嘉宾",["weibo"]]];             // weibo
var all_flying = [["奔跑吧第八季","2024-05-31","第6期飞行嘉宾",["youku"]],
                    ["大侦探第九季","2024-01-18","飞行嘉宾除第4, 6, 9-11期",["mgtv"]],
                    ["奔跑吧·生态篇","2023-12-09","第4-7期飞行嘉宾",["iqiyi"]],
                    ["现在就出发","2023-08-20","第2-3期飞行嘉宾",["tencent"]],
                    ["青春环游记第四季","2023-07-01","第12期飞行嘉宾",["tencent"]],
                    ["奔跑吧第七季","2023-06-16","第9-10期飞行嘉宾",["tencent"]],
                    ["极限挑战宝藏行·国家公园季","2023-03-18","第9期飞行嘉宾",["iqiyi"]],
                    ["大侦探第八季","2023-01-12","----",["mgtv"]],
                    ["令人心动的offer第四季","2022-11-26","面试篇、第1期飞行嘉宾",["tencent"]],
                    ["奔跑吧·共同富裕篇","2022-11-04","第1、5期飞行嘉宾",["tencent"]],
                    ["奔跑吧第六季","2022-07-08","第9-10期飞行嘉宾",["tencent"]],
                    ["奔跑吧·黄河篇第二季","2021-11-26","第5期飞行嘉宾",["tencent"]],
                    ["哈哈哈哈哈第二季","2021-11-15","先导片飞行嘉宾",["tencent"]],
                    ["拜托了冰箱第七季","2021-08-17","第9期飞行嘉宾",["tencent"]],
                    ["嗨放派第一季","2021-08-14","作为“嗨放特派员”参与",["tencent"]],
                    ["极限挑战宝藏行·三区三州公益季","2020-08-02","第1-3、8-10期飞行嘉宾",["weibo"]],
                    ["明星大侦探第五季","2019-12-06","参加第4-5期",["mgtv"]],
                    ["妻子的浪漫旅行第三季","2019-11-27","第4期起加入",["mgtv"]],
                    ["妻子的浪漫旅行第二季","2019-04-25","第10-11期飞行嘉宾",["mgtv"]],
                    ["明星大侦探第四季","2018-12-14","第2、4、7期嘉宾",["mgtv"]],
                    ["勇敢的世界","2018-10-19","----",["mgtv"]],
                    ["勇敢的世界","2018-09-14","----",["mgtv"]],
                    ["勇敢的世界","2018-09-07","----",["mgtv"]],
                    ["奔跑吧第二季","2018-06-29","第12期飞行嘉宾",["tencent"]],
                    ["拜托了冰箱第四季","2018-06-06","参加第7-8期",["tencent"]],
                    ["萌宠小大人","2018-01-13","----",["iqiyi"]],
                    ["跨界歌王第二季","2017-05-13","第5、11期嘉宾",["tencent"]],
                    ["来吧冠军第二季","2017-05-07","第1、3期飞行嘉宾",["iqiyi"]],
                    ["奔跑吧第一季","2017-04-14","第1期飞行嘉宾",["tencent"]],
                    ["全员加速中第二季","2016-05-13","参加第3、8期",["mgtv"]],
                    ["明星大侦探第一季","2016-05-08","参加第6期",["mgtv"]],
                    ["拜托了冰箱第一季","2015-12-30","参加第5-6期",["tencent"]]];
var all_guest = [["你好，星期六","2024-01-20","----",["mgtv"]],
                ["时光音乐会·老友记","2023-11-04","第9期时光好友",["mgtv"]],
                ["你好，星期六","2023-08-19","----",["mgtv"]],
                ["你好，星期六","2023-08-12","----",["mgtv"]],
                ["你好，星期六","2023-08-08","----",["mgtv"]],
                ["你好，星期六","2023-07-22","----",["mgtv"]],
                ["你好，星期六","2023-07-01","----",["mgtv"]],
                ["你好，星期六","2023-05-27","----",["mgtv"]],
                ["你好，星期六","2023-05-06","----",["mgtv"]],
                ["你好，星期六","2023-04-01","----",["mgtv"]],
                ["你好，星期六","2023-02-25","第20230225期",["mgtv"]],
                ["你好，星期六","2023-02-18","----",["mgtv"]],
                ["你好，星期六","2022-06-04","----",["mgtv"]],
                ["开拍吧","2021-12-31","第5期参演演员，主演短片《寻人启事》",["iqiyi"]],
                ["戏剧新生活","2021-02-20","第5期飞行嘉宾",["iqiyi"]],
                ["百变大咖秀第六季","2021-01-29","第1期飞行嘉宾，模仿王力宏",["mgtv"]],
                ["快乐大本营","2021-01-02","20210102期",["mgtv"]],
                ["快乐大本营","2020-07-04","20200704期",["mgtv"]],
                ["天天向上","2019-12-15","20191215期",["mgtv"]],
                ["快乐大本营","2019-02-23","----",["mgtv"]],
                ["快乐大本营","2019-02-16","----",["mgtv"]],
                ["快乐大本营","2018-09-01","----",["mgtv"]],
                ["幻乐之城","2018-07-27","----",["tencent"]],
                ["非常静距离","2018-06-21","----",["tencent"]],
                ["快乐大本营","2018-03-24","----",["mgtv"]],
                ["信·中国","2018-03-23","----",["bili"]],
                ["吐槽大会第二季","2018-01-07","----",["tencent"]],
                ["快乐大本营","2017-11-18","----",["mgtv"]],
                ["天使之路","2017-11-09","----",["tencent"]],
                ["芝麻开门","2017-09-05","----",["tencent"]],
                ["快乐大本营","2017-07-22","----",["mgtv"]],
                ["快乐大本营","2017-07-01","----",["mgtv"]],
                ["快乐大本营","2017-04-15","----",["mgtv"]],
                ["饭饭男友","2017-04-13","----",["iqiyi"]],
                ["天天向上","2017-04-07","----",["mgtv"]],
                ["王牌对王牌第二季","2017-03-31","----",["tencent"]],
                ["向往的生活第一季","2017-03-26","----",["mgtv"]],
                ["我们十七岁","2017-03-11","----",["tencent"]],
                ["快乐大本营","2017-03-04","----",["mgtv"]],
                ["我们十七岁","2017-03-04","----",["tencent"]],
                ["天天向上","2016-12-23","----",["mgtv"]],
                ["快乐大本营","2016-11-19","----",["mgtv"]],
                ["偶滴歌神啊第三季","2016-09-15","----",["iqiyi"]],
                ["暴走法条君","2016-06-22","----",["weibo"]],
                ["暴走法条君","2016-06-15","----",["weibo"]],
                ["大学生来了","2016-06-02","----",["iqiyi"]],
                ["快乐大本营","2015-08-22","----",["mgtv"]],
                ["天天向上","2015-07-17","----",["mgtv"]],
                ["快乐大本营","2015-07-04","----",["mgtv"]],
                ["快乐大本营","2014-06-14","----",["mgtv"]]];
// var all_recent = [["奔跑吧第八季","2024-05-31","第6期飞行嘉宾","youku"],
//                     ["魔方新世界","2024-05-15","----","mgtv"],
//                     ["我们仨","2024-03-23","----","mgtv"],
//                     ["你好，星期六","2024-01-20","----","mgtv"],
//                     ["大侦探第九季","2024-01-18","----","mgtv"],
//                     ["奔跑吧·生态篇","2023-12-09","第4-7期飞行嘉宾","iqiyi"],
//                     ["时光音乐会·老友记","2023-11-04","第9期时光好友","mgtv"]];
var all_show = [all_resident, all_flying, all_guest];
var all_show_recent = get_rencent_six(all_show, [0, 0, 0]);


//["节目名称", "播出时间", "简介", "平台"]
var all_film = [["天堂旅行团","约 2024","",[""]],
                ["来都来了","2024-02-08","",["tencent"]],
                ["志愿军：雄兵出击","2023-09-28","",["tencent"]],
                ["1921","2021-07-01","",["tencent"]],
                ["紧急救援","2020-12-18","",["tencent"]],
                ["婚前故事","2020-11-13","",["tencent"]],
                ["亲爱的新年好","2019-12-31","",["tencent"]],
                ["大约在冬季","2019-11-15","",["tencent"]],
                ["小小的愿望","2019-09-12","",["tencent"]],
                ["因为爱情","2017-10-27","",["tencent"]],
                ["麻烦家族","2017-05-11","",["tencent"]],
                ["减法人生","2016-11-11","",["tencent"]],
                ["情敌蜜月","2015-09-02","",["tencent"]],
                ["我是奋青","2015-08-28","",["tencent"]],
                ["栀子花开","2015-07-10","",["tencent"]],
                ["握紧你的手","2015-06-19","",[""]],
                ["激浪青春","2014-06-06","",["tencent"]],
                ["非常之恋","2012-03-19","",["tencent"]],
                ["辛亥革命","2011-09-23","",["tencent"]]];
var all_tv = [["不讨好的勇气","约 2025","",[""]],
                ["人生若如初见","约 2024","",[""]],
                ["一曲三笙","约 2024","",[""]],                  // 未播出
                ["问苍茫","2023-12-12","",["cctv"]],
                ["特工任务","2023-09-20","",["iqiyi"]],
                ["送瘟神","2023-08-30","",["iqiyi", "pptv", "bili"]],
                ["我的人间烟火","2023-07-05","",["mgtv"]],
                ["蝶影","2023-03-21","",["iqiyi", "tencent"]],
                ["关于唐医生的一切","2022-06-25","",["iqiyi"]],
                ["超时空大玩家","2022-04-30","",["iqiyi"]],
                ["爱的理想生活","2021-03-01","",["mgtv", "tencent"]],
                ["平凡的荣耀","2020-09-04","",["youku"]],
                ["特工别闹","2020-02-17","",["tencent"]],
                ["夜空中最闪亮的星","2019-03-25","",["iqiyi", "tencent"]],
                ["青春警事","2018-07-02","",["tencent"]],
                ["北京女子图鉴","2018-04-10","",["youku"]],
                ["高能医少","2017-09-18","",["weibo"]],
                ["鲜肉老师","2017-03-28","",["youku"]],
                ["相爱穿梭千年2：月光下的交换","2016-11-16","",["mgtv"]],
                ["亲，向前冲","2016-10-26","",["iqiyi", "tencent"]],
                ["因为爱情有幸福","2016-02-24","",["iqiyi"]],
                ["百变五侠之我是大明星","2016-02-01","",["iqiyi"]],
                ["伏弩","2015-05-17","",["douyin", "pptv", "tencent", "xigua"]],
                ["办公室大爆炸","2015-04-24","",["weibo"]],
                ["女王派对","2014-12-30","",["pptv"]],
                ["城市猎人","2014-09-28","",["weibo"]],
                ["一又二分之一的夏天","2014-06-23","",["iqiyi"]],
                ["今夜天使降临","2013-07-31","",["tencent", "youku"]],
                ["抓紧时间爱","2013","",[""]],                               // 抓紧时间爱 nvs
                ["辣椒与泡菜","2012-11-17","",["weibo"]],
                ["牦牛岁月","2012","",["douyin", "iqiyi", "tencent", "xigua"]],
                ["警校生","2011-12-01","",["weibo"]],
                ["新拼住时代","2011","",[""]],                               // 新拼住时代 nvs
                ["毛岸英","2010-10-20","",["cctv", "iqiyi", "youku"]],
                ["苏菲日记","2008-12-15","",["weibo"]]];
var masterpiece = [["志愿军：雄兵出击","2023-09-28","",""],
                    ["特工任务","2023-09-20","",""],
                    ["我的人间烟火","2023-07-05","",""],
                    ["关于唐医生的一切","2022-06-25","",""],
                    ["超时空大玩家","2022-04-30","",""],
                    ["爱的理想生活","2021-03-01","",""]];
var all_film_tv = [all_film, all_tv];

// 未播出的数量
var ep_tot_unaired = 4;
var film_unaired = 1;
var tv_unaired = 3;
var all_film_tv_unaired = [film_unaired, tv_unaired];
var all_film_tv_recent = get_rencent_six(all_film_tv, all_film_tv_unaired);



// 部分微博资源
var weibo_source = {
    "极限挑战宝藏行·三区三州公益季": "Ohs9omyx3",
    "我们相爱吧第二季": "Ohs46dYnB", 
    "苏菲日记": "OhrZJjhXQ",
    "警校生": "OhrU72Xds",
    "辣椒与泡菜": "OhrOw8rGR",
    "城市猎人": "OhrJ3nF4b",
    "办公室大爆炸": "OhrD1cCG3",
    "高能医少": "OhrwWkLiK",
    "暴走法条君": "O2XiGzIVE",
    "爱不需要理由（live）": "4993740639311814",
    "寂寞的季节": "",
    "东方之珠": "",
    "熊猫之歌": ""
};

// music
var all_single = [["强国有我","2023-07-24","强国有我",["kugou", "kuwo", "wangyi"],["独唱","录音室","单曲"]],
                    ["只要心中升起太阳，世界依然五彩缤纷","2022-05-13","中国人的故事",["kugou"],["独唱","朗读","单曲"]],
                    ["最初的梦（合唱版）","2022-05-13","中国人的故事",["kugou", "qq"],["齐唱","录音室","单曲"]],
                    ["最初的梦","2022-05-13","中国人的故事",["kugou", "kuwo", "qq"],["独唱","录音室","单曲"]],
                    ["剑胆春秋","2022-05-31","光华韵律",["kugou","qq","wangyi"],["独唱","录音室","单曲"]],
                    ["那天","2021-07-15","指缝里的光",["kugou", "kuwo", "wangyi"],["独唱","录音室","单曲"]],
                    ["Won't Love Again","2021-07-15","指缝里的光",["kugou", "kuwo", "wangyi"],["独唱","录音室","单曲"]],
                    ["后来的后来","2021-07-15","指缝里的光",["kugou", "kuwo", "qq", "wangyi"],["独唱","录音室","单曲"]],
                    ["放眼望去全都是你的影子","2020-09-28","放眼望去全都是你的影子",["kugou", "wangyi"],["独唱","录音室","单曲"]],
                    ["大海","2020-04-17","大海",["kugou", "qq"],["独唱","录音室","单曲"]],
                    ["手足","2020-04-08","手足",["kugou", "kuwo", "qq"],["齐唱","录音室","单曲","有MV"]],
                    ["最美的英雄","2020-02-19","爱不隔离",["kugou", "kuwo", "qq"],["齐唱","录音室","单曲"]],
                    ["我和我的祖国 青春版","2019-09-26","我和我的祖国 青春版",["kugou", "qq", "wangyi"],["齐唱","录音室","有MV","单曲"]],
                    ["爱的阳光","2019-05-08","助残公益歌曲",["kugou", "kuwo", "qq", "wangyi"],["齐唱","录音室","有MV","单曲"]],
                    ["我爱你中国（中戏版）","2019-04-30","中央戏剧学院",["kuwo","qq"],["齐唱","录音室","有MV","单曲"]],
                    ["说到做到","2019-01-07","点赞诚信",["kugou","qq"],["齐唱","录音室","有MV","单曲"]],
                    ["坚持不懈，做命运的主人——品读《一棵小桃树》","2018-11-12","榜样阅读",["kuwo","qq"],["独唱","朗读","单曲"]]];
var all_ost = [["光辉","2023-05-23","第十八届、第十九届中国电影华表奖主题推广曲",["kugou", "kuwo"],["齐唱","录音室","OST", "有MV"]],
                ["逆天","2022-06-30","动画《神墓》主题曲",["kugou", "wangyi"],["独唱","录音室","OST"]],
                ["我的未来不是梦","2022-05-08","《超时空大玩家》OST",["kugou", "kuwo", "qq"],["齐唱","录音室","OST", "有MV"]],
                ["不完美","2022-05-08","《超时空大玩家》片尾曲",["kugou", "kuwo", "qq", "wangyi"],["独唱","录音室","OST", "有MV"]],
                ["一往无前的蓝","2022-04-30","一往无前的蓝综艺主题曲",["kugou", "kuwo", "qq", "wangyi"],["齐唱","录音室","OST", "有MV"]],
                ["致敬勇士","2021-10-27","北京2022年冬奥会和冬残奥会颁奖仪式推广歌曲",["kugou", "kuwo", "qq"],["齐唱","录音室","OST", "有MV"]],
                ["思华年","2021-05-18","国宝传音（浙江省博物馆文物推广曲）",["kugou", "kuwo", "qq"],["独唱","录音室","OST", "有MV"]],
                ["一万年以后","2021-01-29","名侦探俱乐部第六季",["kugou", "wangyi"],["独唱","录音室","OST", "有MV"]],
                ["孩子的梦","2020-09-29","《平凡的荣耀》插曲",["kugou", "wangyi"],["独唱","录音室","OST", "有MV"]],   // 我的天好温柔，假声真的好听
                ["大约在冬季（群星版）","2019-11-14","《大约在冬季》主题曲",["kugou", "kuwo", "qq", "wangyi"],["齐唱","录音室","OST", "有MV"]],
                ["最后不会有悲伤","2019-09-03","《小小的愿望》宣传曲",["kugou", "qq"],["合唱","录音室","OST", "有MV"]],
                ["二十四小时","2018-04-14","二十四小时主题曲",["qq"],["齐唱","录音室","OST", "有MV"]],
                ["春风十里","2017-12-22","明星大侦探第三季08期",["kugou", "qq", "wangyi"],["独唱","录音室","OST", "有MV"]],
                ["童话镇","2017-11-17","明星大侦探第三季03期",["kugou", "kuwo", "qq"],["独唱","录音室","OST", "有MV"]],
                ["无罪说","2017-09-29","明星大侦探主题曲",["kugou", "kuwo", "qq", "wangyi"],["齐唱","录音室","OST", "有MV"]],
                ["无论","2017-07-03","《青春警事》片尾曲",["kugou", "kuwo", "qq", "wangyi"],["独唱","录音室","OST", "有MV"]],
                ["妇女之友","2017-04-12","电影麻烦家族主题曲",["kugou", "kuwo", "qq"],["齐唱","录音室","OST", "有MV"]],
                ["没关系","2016-10-19","《减法人生》宣传曲",["kugou", "qq"],["合唱","录音室","OST", "有MV"]],
                ["My Everything","2016-10-18","相爱穿梭千年2：月光下的交换（插曲）",["kugou", "qq", "wangyi"],["独唱","录音室","OST", "有MV"]],
                ["像你这样的女孩","2016-03-22","因为爱情有幸福电视剧原声带",["kugou", "kuwo", "qq"],["独唱","录音室","OST"]],
                ["再见，再见","2015-07-08","电影《栀子花开》毕业季推广曲",["kugou", "qq", "wangyi"],["齐唱","录音室","OST", "有MV"]],
                ["熊猫之歌","2016-04-03","我们相爱吧第3期",["bili+", "weibo+"],["合唱", "录音室", "OST", "有MV"]]];
var all_tv_live = [["揭穿（live）","2019-03-25","电视剧夜空中最闪亮的星",["kugou"],["独唱", "录音室", "影视Live", "有MV"]],
                    ["小手拉大手","2018-04-10","北京女子图鉴",["bili+"],["独唱", "Live", "影视Live", "有MV"]],
                    ["爱不需要理由（live）","2008-12-","苏菲日记（电视剧）",["weibo"],["独唱", "Live", "影视Live", "有Live"]]];
var all_show_live = [["归途有风","2024-01-25","2024大侦探9侦心侦意演唱会第2场",["kugou", "mgtv+"],["齐唱","Live","综艺Live", "有Live"]],
                    ["如果我们不曾相遇","2024-01-25","2024大侦探9侦心侦意演唱会第2场",["kugou", "mgtv+"],["齐唱","Live","综艺Live", "有Live"]],
                    ["无罪说","2024-01-18","2024大侦探9侦心侦意演唱会第1场",["kugou", "mgtv+"],["齐唱","Live","综艺Live", "有Live"]],
                    ["凄美地","2024-01-18","2024大侦探9侦心侦意演唱会第1场",["kugou", "mgtv+"],["独唱","Live","综艺Live", "有Live"]],
                    ["陆垚知马俐","2023-11-04","时光音乐会老友记",["kugou", "kuwo", "qq"],["合唱","Live","综艺Live", "有Live"]],
                    ["到人民中去","2023-05-23","与人民同行——新时代文明实践文艺志愿服务特别节目",["kugou", "qq"],["齐唱","Live","综艺Live", "有Live"]],
                    ["虫儿飞","2023-04-26","一起露营吧",["iqiyi"],["齐唱","Live","综艺Live", "有Live"]],
                    ["好想爱这个世界啊","2023-01-13","侦心侦意新春演唱会第2场",["kugou", "mgtv+"],["独唱","Live","综艺Live", "有Live"]],
                    ["永远都会在（live）","2023-01-13","侦心侦意新春演唱会",["kugou", "mgtv+"],["齐唱","Live","综艺Live", "有Live"]],
                    ["一万次悲伤","2021-10-23","嗨放派",["kugou", "kuwo", "qq"],["独唱","Live","综艺Live", "有Live"]],
                    ["朱雀（live）","2021-10-02","快乐大本营",["kugou", "qq"],["齐唱","Live","综艺Live"]],
                    ["Julia","2021-01-29","百变大咖秀",["kugou", "qq"],["合唱","Live","综艺Live", "有Live"]],
                    ["中国人","2021-01-22","天赐的声音第二季 ",["bili+", "douyin+"],["独唱","Live","综艺Live", "有Live"]],
                    ["天堂","2021-01-22","天赐的声音第二季 第2期",["kugou", "kuwo", "qq", "wangyi"],["合唱","Live","综艺Live", "有Live"]],
                    ["后会无期","2021-01-22","天赐的声音第二季 第2期",["kugou", "kuwo", "qq", "wangyi"],["合唱","Live","综艺Live", "有Live"]],
                    ["他只是经过","2020-12-18","明星大侦探第六季NZND顶牛演唱会",["bili+", "qq", "wangyi"],["合唱","Live","综艺Live", "有Live"]],
                    ["水手（live）","2020-07-04","快乐大本营",["mgtv+"],["独唱","Live","综艺Live", "有Live"]],
                    ["花好月圆夜","2019-12-18","妻子的浪漫旅行第三季",["bili+", "mgtv+"],["合唱","Live","综艺Live", "有Live"]],
                    ["北斗星的爱","2019-12-18","妻子的浪漫旅行第三季",["bili+", "mgtv+"],["独唱","Live","综艺Live", "有Live"]],
                    ["九妹","2019-11-23","快乐大本营",["bili+", "douyin+"],["齐唱", "Live", "综艺Live", "有Live"]],
                    ["美丽的神话","2019-10-20","蒙面唱将猜猜猜第四季 第2期",["kugou", "kuwo", "qq", "wangyi"],["合唱", "Live", "综艺Live", "有Live"]],
                    ["童年","2019-10-20","蒙面唱将猜猜猜第四季 第2期",["kugou", "kuwo", "qq"],["齐唱", "Live", "综艺Live", "有Live"]],
                    ["男孩","2019-10-20","蒙面唱将猜猜猜第四季 第2期",["kugou", "kuwo", "wangyi"],["独唱","Live","综艺Live", "有Live"]],
                    ["我和我的祖国","2019-10-13","蒙面唱将猜猜猜第四季 第1期",["kuwo", "qq", "wangyi"],["齐唱", "Live", "综艺Live", "有Live"]],
                    ["一次就好","2019-10-13","蒙面唱将猜猜猜第四季 第1期",["kugou", "kuwo", "qq", "wangyi"],["合唱", "Live", "综艺Live", "有Live"]],
                    ["外婆的澎湖湾","2019-08-23","做家务的男人",["bili+", "douyin+"],["齐唱", "Live", "综艺Live", "有Live"]],
                    ["Susan说（live）","2019-08-03","快乐大本营",["bili+", "kugou", "mgtv+", "qq"],["独唱", "Live", "综艺Live", "有Live"]],
                    ["平凡之路","2019-05-22","哈哈农夫",["bili+"],["齐唱", "清唱", "综艺Live", "有Live"]],
                    ["琵琶行","2019-05-18","青春环游记第三期",["kugou", "kuwo", "qq"],["独唱", "Live", "综艺Live", "有Live"]], 
                    ["大约在冬季","2019-05-11","快乐大本营",["bili+", "kugou", "kuwo"],["合唱", "Live", "综艺Live", "有Live"]],
                    ["寂寞沙洲冷","2019-05-04","青春环游记第一期",["kugou", "kuwo", "qq"],["齐唱", "Live", "综艺Live", "有Live"]],
                    ["那些花儿","2019-05-02","妻子的浪漫旅行第二季",["bili+", "mgtv+"],["合唱", "Live", "综艺Live", "有Live"]],
                    ["那就这样吧（live）","2019-01-26","电竞不凡",["bili+"],["齐唱", "Live", "综艺Live", "有Live"]],
                    ["最后我们没有在一起","2018-11-23","明星大侦探第四季04期：NZND 回到未红时",["kugou", "mgtv+", "qq"],["独唱", "Live", "综艺Live", "有Live"]],
                    ["江湖叹","2018-09-01","快乐大本营",["mgtv+", "kugou", "kuwo", "qq"],["齐唱", "Live", "综艺Live", "有Live"]],
                    ["为爱痴狂","2018-07-27","幻乐之城第二期",["kugou", "kuwo", "qq"],["合唱", "Live", "综艺Live", "有Live"]],
                    ["了不起","2018-06-09","创造101",["bili+", "kugou", "tencent+"],["齐唱", "Live", "综艺Live", "有Live"]],
                    ["当我想你的时候","2017-06-24","跨界歌王第二季 第11期",["kugou", "kuwo", "qq", "wangyi"],["独唱", "Live", "综艺Live", "有Live"]],
                    ["白桦林","2017-06-24","跨界歌王第二季 第11期",["kugou", "kuwo", "qq", "wangyi"],["独唱", "Live", "综艺Live", "有Live"]],
                    ["我要你","2017-06-08","妈妈是超人",["bili+", "douyin+"],["独唱", "Live", "综艺Live", "有Live"]],
                    ["后来+天空之城","2017-05-13","跨界歌王第二季 第5期",["kugou", "kuwo", "qq", "wangyi"],["独唱", "Live", "综艺Live", "有Live"]],
                    ["美人（live）","2017-05-13","跨界歌王第二季 第5期",["bili+", "kugou", "qq", "tencent+", "wangyi"],["独唱", "清唱", "综艺Live", "有Live"]],
                    ["笨小孩","2017-05-13","跨界歌王第二季 第5期",["kugou", "kuwo", "qq", "wangyi"],["合唱", "Live", "综艺Live", "有Live"]],
                    ["童话镇","2017-04-15","快乐大本营",["mgtv+", "kugou", "kuwo", "qq"],["合唱", "Live", "综艺Live", "有Live"]],
                    ["致姗姗来迟的你","2017-04-07","天天向上",["mgtv+", "kugou", "kuwo", "qq", "wangyi"],["合唱", "Live", "综艺Live", "有Live"]],
                    ["春天花会开（live）","2017-04-07","天天向上",["bili+", "mgtv+", "tencent+"],["齐唱", "Live", "综艺Live", "有Live"]],
                    ["寂寞的季节","2016-11-25","火星情报局",["bili+", "kugou", "qq", "weibo+"],["独唱", "Live", "综艺Live", "有Live"]],
                    ["我想","2016-09-15","偶滴歌神啊第三季 第8期",["kugou", "kuwo", "qq"],["合唱", "Live", "综艺Live", "有Live"]],
                    ["小幸运","2016-06-05","我们相爱吧",["bili+"],["独唱", "清唱", "综艺Live", "有Live"]],
                    ["当你老了（live）","2016-05-01","我们相爱吧第7期",["kugou", "wangyi"],["独唱", "清唱", "综艺Live", "有Live"]],
                    ["将军令","2015-10-24","歌手是谁",["bili+", "kugou", "qq"],["独唱", "Live", "综艺Live", "有Live"]],
                    ["南山南","2015-10-24","歌手是谁",["bili+", "kugou", "qq", "mgtv+"],["独唱", "Live", "综艺Live", "有Live"]],
                    ["稳稳的幸福","2015-10-24","歌手是谁",["bili+"],["独唱", "清唱", "综艺Live", "有Live"]]];
var all_event_live = [["上春山","2024-02-09","2024年中央广播电视总台春节联欢晚会",[],["齐唱", "Live", "综艺Live", "有Live"]],
                        ["重逢","2024-02-03","2024网络视听盛典",[],["独唱", "Live", "综艺Live", "有Live"]],
                        ["我会等","2023-12-31","启航2024 中央广播电视总台跨年盛典",[],["独唱", "Live", "综艺Live", "有Live"]],
                        ["兰亭序","2023-12-31","2023-2024湖南卫视芒果TV跨年晚会",[],["独唱", "Live", "综艺Live", "有Live"]],
                        ["后来的后来（live）","2023-11-10","2023抖音熠熠生辉闪耀之夜",[],["独唱", "Live", "综艺Live", "有Live"]],
                        ["还是会想你（live）","2023-11-10","2023抖音熠熠生辉闪耀之夜",[],["独唱", "Live", "综艺Live", "有Live"]],
                        ["万疆（live）","2023-06-29","湾区升明月晚会",[],[]],
                        ["龙拳","2023-01-22","2023全球华侨华人春节大联欢",[],[]],
                        ["最好的我们","2022-11-10","抖音熠熠生辉闪耀之夜",[],[]],
                        ["让我留在你身边","2022-11-10","抖音熠熠生辉闪耀之夜",[],["独唱", "Live", "综艺Live", "有Live"]],
                        ["New Boy（live）","2021-12-31","2021浙江卫视跨年",[],[]],
                        ["东方之珠","2021-09-21","\"湾区升明月\"2021大湾区中秋电影音乐晚会",["kugou", "kuwo", "qq", "wangyi", "weibo+"],["齐唱", "Live", "晚会Live", "有Live"]],
                        ["麦兜与鸡","2021-09-21","\"湾区升明月\"2021大湾区中秋电影音乐晚会",[],[]],
                        ["平凡的一天","2021-06-16","湖南卫视616天猫开心夜",[],[]],
                        ["嘛呢","2021-02-12"," 2021北京广播电视台春节联欢晚会",[],[]],
                        ["春暖花开去见你","2021-01-15","2021爱奇艺为爱尖叫晚会",[],[]],
                        ["世界上唯一的花","2020-12-31","启航2020 中央广播电视总台跨年盛典",[],[]],
                        ["爱的飞行日记","2020-12-11","拼多多12.12超拼夜",[],[]],
                        ["曾经的你","2020-11-08","「朝暮」王源20岁的一天ONLINE演唱会",[],[]],
                        ["一起摇摆 +青苹果乐园","2020-09-09","江苏卫视99划算夜",[],[]],
                        ["不潮不用花钱","2020-06-17","拼多多618超拼夜",[],[]],
                        ["戏出东方","2020-05-04","2020湖南五四晚会",[],[]],
                        ["锦绣小康","2020-01-24","2020年中央电视台春节联欢晚会",[],[]],
                        ["我的新年愿望","2020-01-17","2020央视网络春晚",[],[]],
                        ["这个年纪（live）","2020-01-17","2020央视网络春晚",[],[]],
                        ["美丽的刀郎姑娘","2020-01-08","百花迎春-中国文学艺术界2020春节大联欢",[],[]],
                        ["无地自容","2019-12-31","2020BTV环球跨年冰雪盛典",[],[]],
                        ["向快乐出发","2019-12-31","2020BTV环球跨年冰雪盛典",[],[]],
                        ["光明","2019-12-31","2020BTV环球跨年冰雪盛典",[],[]],
                        ["阳光宅男","2019-11-11","2019湖南卫视苏宁易购11.11嗨爆夜",[],[]],
                        ["青春畅想","2019-05-06","中央电视台“我们都是追梦人”五四晚会",[],[]],
                        ["强国一代有我在(Live)","2019-05-02","“新青年耀青春 ”纪念五四运动100周年文艺晚会",[],[]],
                        ["青春畅想","2019-02-04","2019中央广播电视总台春节联欢晚会",[],[]],
                        ["三百六十五个祝福","2018-09-30","欢声笑语迎国庆",[],[]],
                        ["慢慢喜欢你（Live）","2018-08-26","因为有你 中国蓝十周年主题晚会",[],[]],
                        ["马栏山四子创意秀（Live）","2018-06-24","快乐中国毕业歌会",[],[]],
                        ["超吉变变变（串烧）","2017-01-30","2017全球华侨华人春节大联欢华侨华人春节大联欢",[],[]],
                        ["My Everything(live）","2016-10-15","第11届中国金鹰电视艺术节互联盛典",[],[]]];
var all_pieces = [["走天涯","2024-04-06","我们仨第三期",[],[]],
                    ["平凡的一天","2024-03-23","我们仨第一期",[],[]],
                    ["野狼disco","2019-11-28","妻子的浪漫旅行第三季第四期plus",["bili+", "mgtv+"],["独唱", "清唱", "碎片", "有Live"]],
                    ["蓝莲花","2019-05-22","哈哈农夫",["bili+", "mgtv+"],["齐唱", "清唱", "碎片", "有Live"]],
                    ["往后余生","2019-04-13","密室大逃脱",[],[]],
                    ["卡路里","2019-02-06","火山唱见直播",[],[]],
                    ["难忘今宵","2019-02-06","火山唱见直播",[],[]],
                    ["再见","2019-02-06","火山唱见直播",[],[]],
                    ["学猫叫","2019-02-06","火山唱见直播",[],[]],
                    ["别找我麻烦","2019-02-06","火山唱见直播",[],[]],
                    ["答案","2019-02-06","火山唱见直播",[],[]],
                    ["无与伦比的美丽","2019-02-06","火山唱见直播",[],[]],
                    ["阳光总在风雨后","2019-02-06","火山唱见直播",[],[]],
                    ["最美的太阳","2019-02-06","火山唱见直播",[],[]],
                    ["可惜不是你","2019-02-06","火山唱见直播",[],[]],
                    ["不要说话","2019-02-06","火山唱见直播",[],[]],
                    ["千千阙歌","2019-02-06","火山唱见直播",[],[]],
                    ["月半小夜曲","2019-02-06","火山唱见直播",[],[]],
                    ["一千个伤心的理由","2019-02-06","火山唱见直播",[],[]],
                    ["青春畅想","2019-02-06","火山唱见直播",[],[]],
                    ["泡沫","2019-02-06","火山唱见直播",[],[]],
                    ["该死的温柔","2019-02-06","火山唱见直播",[],[]],
                    ["阴天","2019-02-06","火山唱见直播",[],[]],
                    ["爱要怎么说出口","2019-02-06","火山唱见直播",[],[]],
                    ["我怎么这么好看","2019-02-06","火山唱见直播",[],[]],
                    ["天后","2019-02-06","火山唱见直播",[],[]],
                    ["后来","2019-02-06","火山唱见直播",[],[]],
                    ["独家的记忆","2019-02-06","火山唱见直播",[],[]],
                    ["说散就散","2019-02-06","火山唱见直播",[],[]],
                    ["往后余生2","2019-02-06","火山唱见直播",[],[]],
                    ["我是一只小小鸟","2019-02-06","火山唱见直播",[],[]],
                    ["往后余生","2019-02-06","火山唱见直播",[],[]],
                    ["恰似你的温柔","2019-02-06","火山唱见直播",[],[]],
                    ["今天你要嫁给我","2019-02-06","火山唱见直播",[],[]],
                    ["大头儿子小头爸爸","2019-02-06","火山唱见直播",[],[]],
                    ["大城小爱","2019-02-06","火山唱见直播",[],[]],
                    ["我愿意","2019-02-06","火山唱见直播",[],[]],
                    ["寂寞寂寞就好","2019-02-06","火山唱见直播",[],[]],
                    ["痒","2019-02-06","火山唱见直播",[],[]],
                    ["我和你","2019-02-06","火山唱见直播",[],[]],
                    ["死了都要爱","2018-04-14","二十四小时",["bili+"],["独唱", "清唱", "碎片", "有Live"]],
                    ["青苹果乐园","2018-04-06","二十四小时",["bili+"],["齐唱", "清唱", "碎片", "有Live"]],
                    ["明天的明天的明天","2018-03-09","二十四小时",["bili+"],["齐唱", "清唱", "碎片", "有Live"]],
                    ["我的中国心","2018-02-16","二十四小时",["bili+"],["齐唱", "Live", "碎片", "有Live"]],
                    ["真的爱你","2018-02-16","二十四小时",["bili+"],["齐唱", "Live", "碎片", "有Live"]],
                    ["董小姐（live）","2017-10-02","高能医少破亿粉丝福利",["bili+"],["独唱", "清唱", "碎片", "有Live"]], 
                    ["东方之珠","2017-07-01","快乐大本营",[],["Live", "碎片", "有Live"]],                            //
                    ["我爱你","2017-07-01","快乐大本营",[],["Live", "碎片", "有Live"]],                              //
                    ["对你爱不完","2017-07-01","快乐大本营",[],["Live", "碎片", "有Live"]],                           //
                    ["我是不是该安静的走开","2017-07-01","快乐大本营",[],["Live", "碎片", "有Live"]]];                 //
var all_music = [all_single, all_ost, all_tv_live, all_show_live, all_event_live, all_pieces];












