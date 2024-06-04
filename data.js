//["节目名称", "播出时间", "简介", "平台"]
var all_resident = [["魔方新世界","2024-05-15","----","mgtv"],
                    ["我们仨","2024-03-23","作为常驻嘉宾参与","mgtv"],
                    ["一起露营吧第二季","2023-04-19","作为露营家族成员常驻","iqiyi"],
                    ["我在你的未来吗","2022-11-13","作为观察员参与","mgtv"],
                    ["做家务的男人第四季","2022-08-12","作为固定嘉宾参与","iqiyi"],
                    ["嗨放派第二季","2022-08-06","作为“嗨放学长”参与","tencent"],
                    ["新游记","2022-06-04","----","tencent"],
                    ["一往无前的蓝","2022-02-19","以“消防新生”身份入驻消防站","tencent"],
                    ["奇异剧本鲨","2021-07-10","作为常驻嘉宾参与","iqiyi"],
                    ["明星大侦探第六季","2021-01-14","作为常驻嘉宾","mgtv"],
                    ["同一屋檐下","2021-01-06","作为固定嘉宾参与","youku"],
                    ["拜托了冰箱第六季","2020-04-28","担任代班主持","tencent"],
                    ["做家务的男人第一季","2019-08-02","作为固定嘉宾","iqiyi"],
                    ["我们长大了","2019-06-18","作为固定嘉宾","tencent"],
                    ["青春环游记第一季","2019-05-04","作为固定嘉宾","tencent"],
                    ["密室大逃脱第一季","2019-03-30","作为固定嘉宾","mgtv"],
                    ["终极高手","2019-01-18","荣耀经理人","tencent"],
                    ["妻子的浪漫旅行第一季","2018-09-12","作为固定嘉宾","mgtv"],
                    ["二十四小时第三季","2018-02-02","作为固定嘉宾","tencent"],
                    ["王者出击","2017-12-15","作为固定嘉宾","tencent"],
                    ["喜剧总动员第二季","2017-10-28","作为固定嘉宾，最终获得总决赛冠军","youku"],
                    ["明星大侦探第三季","2017-09-22","作为常驻嘉宾","mgtv"],
                    ["明星大侦探第二季","2017-01-13","作为常驻嘉宾","mgtv"],
                    ["头号惊喜","2016-11-20","作为固定嘉宾","mgtv"],
                    ["我们相爱吧第二季","2016-03-20","作为固定嘉宾",""]];
var all_flying = [["奔跑吧第八季","2024-05-31","第6期飞行嘉宾","youku"],
                    ["大侦探第九季","2024-01-18","飞行嘉宾除第4, 6, 9-11期","mgtv"],
                    ["奔跑吧·生态篇","2023-12-09","第4-7期飞行嘉宾","iqiyi"],
                    ["现在就出发","2023-08-20","第2-3期飞行嘉宾","tencent"],
                    ["青春环游记第四季","2023-07-01","第12期飞行嘉宾","tencent"],
                    ["奔跑吧第七季","2023-06-16","第9-10期飞行嘉宾","tencent"],
                    ["极限挑战宝藏行·国家公园季","2023-03-18","第9期飞行嘉宾","iqiyi"],
                    ["大侦探第八季","2023-01-12","----","mgtv"],
                    ["令人心动的offer第四季","2022-11-26","面试篇、第1期飞行嘉宾","tencent"],
                    ["奔跑吧·共同富裕篇","2022-11-04","第1、5期飞行嘉宾","tencent"],
                    ["奔跑吧第六季","2022-07-08","第9-10期飞行嘉宾","tencent"],
                    ["奔跑吧·黄河篇第二季","2021-11-26","第5期飞行嘉宾","tencent"],
                    ["哈哈哈哈哈第二季","2021-11-15","先导片飞行嘉宾","tencent"],
                    ["拜托了冰箱第七季","2021-08-17","第9期飞行嘉宾","tencent"],
                    ["嗨放派第一季","2021-08-14","作为“嗨放特派员”参与","tencent"],
                    ["极限挑战宝藏行·三区三州公益季","2020-08-02","第1-3、8-10期飞行嘉宾",""],
                    ["明星大侦探第五季","2019-12-06","参加第4-5期","mgtv"],
                    ["妻子的浪漫旅行第三季","2019-11-27","第4期起加入","mgtv"],
                    ["妻子的浪漫旅行第二季","2019-04-25","第10-11期飞行嘉宾","mgtv"],
                    ["明星大侦探第四季","2018-12-14","第2、4、7期嘉宾","mgtv"],
                    ["勇敢的世界","2018-10-19","----","mgtv"],
                    ["勇敢的世界","2018-09-14","----","mgtv"],
                    ["勇敢的世界","2018-09-07","----","mgtv"],
                    ["奔跑吧第二季","2018-06-29","第12期飞行嘉宾","tencent"],
                    ["拜托了冰箱第四季","2018-06-06","参加第7-8期","tencent"],
                    ["萌宠小大人","2018-01-13","----","iqiyi"],
                    ["跨界歌王第二季","2017-05-13","第5、11期嘉宾","tencent"],
                    ["来吧冠军第二季","2017-05-07","第1、3期飞行嘉宾","iqiyi"],
                    ["奔跑吧第一季","2017-04-14","第1期飞行嘉宾","tencent"],
                    ["全员加速中第二季","2016-05-13","参加第3、8期","mgtv"],
                    ["明星大侦探第一季","2016-05-08","参加第6期","mgtv"],
                    ["拜托了冰箱第一季","2015-12-30","参加第5-6期","tencent"]];
var all_guest = [["你好，星期六","2024-01-20","----","mgtv"],
                ["时光音乐会·老友记","2023-11-04","第9期时光好友","mgtv"],
                ["你好，星期六","2023-08-19","----","mgtv"],
                ["你好，星期六","2023-08-12","----","mgtv"],
                ["你好，星期六","2023-08-08","----","mgtv"],
                ["你好，星期六","2023-07-22","----","mgtv"],
                ["你好，星期六","2023-07-01","----","mgtv"],
                ["你好，星期六","2023-05-27","----","mgtv"],
                ["你好，星期六","2023-05-06","----","mgtv"],
                ["你好，星期六","2023-04-01","----","mgtv"],
                ["你好，星期六","2023-02-25","第20230225期","mgtv"],
                ["你好，星期六","2023-02-18","----","mgtv"],
                ["你好，星期六","2022-06-04","----","mgtv"],
                ["开拍吧","2021-12-31","第5期参演演员，主演短片《寻人启事》","iqiyi"],
                ["戏剧新生活","2021-02-20","第5期飞行嘉宾","iqiyi"],
                ["百变大咖秀第六季","2021-01-29","第1期飞行嘉宾，模仿王力宏","mgtv"],
                ["快乐大本营","2021-01-02","20210102期","mgtv"],
                ["快乐大本营","2020-07-04","20200704期","mgtv"],
                ["天天向上","2019-12-15","20191215期","mgtv"],
                ["快乐大本营","2019-02-23","----","mgtv"],
                ["快乐大本营","2019-02-16","----","mgtv"],
                ["快乐大本营","2018-09-01","----","mgtv"],
                ["幻乐之城","2018-07-27","----","tencent"],
                ["非常静距离","2018-06-21","----","tencent"],
                ["快乐大本营","2018-03-24","----","mgtv"],
                ["信·中国","2018-03-23","----","bili"],
                ["吐槽大会第二季","2018-01-07","----","tencent"],
                ["快乐大本营","2017-11-18","----","mgtv"],
                ["天使之路","2017-11-09","----","tencent"],
                ["芝麻开门","2017-09-05","----","tencent"],
                ["快乐大本营","2017-07-22","----","mgtv"],
                ["快乐大本营","2017-07-01","----","mgtv"],
                ["快乐大本营","2017-04-15","----","mgtv"],
                ["饭饭男友","2017-04-13","----","iqiyi"],
                ["天天向上","2017-04-07","----","mgtv"],
                ["王牌对王牌第二季","2017-03-31","----","tencent"],
                ["向往的生活第一季","2017-03-26","----","mgtv"],
                ["我们十七岁","2017-03-11","----","tencent"],
                ["快乐大本营","2017-03-04","----","mgtv"],
                ["我们十七岁","2017-03-04","----","tencent"],
                ["天天向上","2016-12-23","----","mgtv"],
                ["快乐大本营","2016-11-19","----","mgtv"],
                ["偶滴歌神啊第三季","2016-09-15","----","iqiyi"],
                ["暴走法条君","2016-06-22","----",""],
                ["暴走法条君","2016-06-15","----",""],
                ["大学生来了","2016-06-02","----","iqiyi"],
                ["快乐大本营","2015-08-22","----","mgtv"],
                ["天天向上","2015-07-17","----","mgtv"],
                ["快乐大本营","2015-07-04","----","mgtv"],
                ["快乐大本营","2014-06-14","----","mgtv"]];
var all_recent = [["奔跑吧第八季","2024-05-31","第6期飞行嘉宾","youku"],
                    ["魔方新世界","2024-05-15","----","mgtv"],
                    ["我们仨","2024-03-23","----","mgtv"],
                    ["你好，星期六","2024-01-20","----","mgtv"],
                    ["大侦探第九季","2024-01-18","----","mgtv"],
                    ["奔跑吧·生态篇","2023-12-09","第4-7期飞行嘉宾","iqiyi"],
                    ["时光音乐会·老友记","2023-11-04","第9期时光好友","mgtv"]];
var all_show = [all_resident, all_flying, all_guest];


//["节目名称", "播出时间", "简介", "平台"]
var all_film = [["天堂旅行团","约 2024","",""],
                ["来都来了","2024-2-8","","tencent"],
                ["志愿军：雄兵出击","2023-9-28","","tencent"],
                ["1921","2021-7-1","","tencent"],
                ["紧急救援","2020-12-18","","tencent"],
                ["婚前故事","2020-11-13","","tencent"],
                ["亲爱的新年好","2019-12-31","","tencent"],
                ["大约在冬季","2019-11-15","","tencent"],
                ["小小的愿望","2019-9-12","","tencent"],
                ["因为爱情","2017-10-27","","tencent"],
                ["麻烦家族","2017-5-11","","tencent"],
                ["减法人生","2016-11-11","","tencent"],
                ["情敌蜜月","2015-9-2","","tencent"],
                ["我是奋青","2015-8-28","","tencent"],
                ["栀子花开","2015-7-10","","tencent"],
                ["握紧你的手","2015-6-19","",""],                // 握紧你的手 平台暂无
                ["激浪青春","2014-6-6","","tencent"],
                ["非常之恋","2012-3-19","","tencent"],
                ["辛亥革命","2011-9-23","","tencent"]];
var all_tv = [["不讨好的勇气","约 2025","",""],
                ["人生若如初见","约 2024","",""],
                ["一曲三笙","约 2024","",""],
                ["问苍茫","2023-12-12","","cctv"],
                ["特工任务","2023-9-20","","iqiyi"],
                ["送瘟神","2023-8-30","","iqiyi"],
                ["我的人间烟火","2023-7-5","","mgtv"],
                ["蝶影","2023-3-21","","tencent"],
                ["关于唐医生的一切","2022-6-25","","iqiyi"],
                ["超时空大玩家","2022-4-30","","iqiyi"],
                ["爱的理想生活","2021-3-1","","tencent"],
                ["平凡的荣耀","2020-9-4","","youku"],
                ["特工别闹","2020-2-17","","tencent"],
                ["夜空中最闪亮的星","2019-3-25","","tencent"],
                ["青春警事","2018-7-2","","tencent"],
                ["北京女子图鉴","2018-4-10","","youku"],
                ["高能医少","2017-9-18","",""],                 // 高能医少 平台暂无
                ["相爱穿梭千年2：月光下的交换","2016-11-16","","mgtv"],
                ["亲，向前冲","2016-10-26","","tencent"],
                ["因为爱情有幸福","2016-2-24","","iqiyi"],
                ["百变五侠之我是大明星","2016-2-1","","iqiyi"],
                ["伏弩","2015-5-17","","tencent"],
                ["办公室大爆炸","2015-4-24","",""],               // 办公室大爆炸 平台暂无
                ["女王派对","2014-12-30","","pptv"],
                ["城市猎人","2014-9-28","",""],                 // 城市猎人 平台暂无
                ["一又二分之一的夏天","2014-6-23","","iqiyi"],
                ["今夜天使降临","2013-7-31","","tencent"],
                ["抓紧时间爱","2013","",""],                     // 抓紧时间爱 平台暂无
                ["辣椒与泡菜","2012-11-17","",""],               // 辣椒与泡菜 平台暂无
                ["牦牛岁月","2012","","tencent"],
                ["警校生","2011-12-1","",""],                  // 警校生 平台暂无
                ["新拼住时代","2011","",""],                     // 新拼住时代 平台暂无
                ["毛岸英","2010-10-20","","cctv"],
                ["苏菲日记","2008-12-15","",""]];               // 苏菲日记 平台暂无
var masterpiece = [["志愿军：雄兵出击","2023-9-28","",""],
                    ["特工任务","2023-9-20","",""],
                    ["我的人间烟火","2023-7-5","",""],
                    ["关于唐医生的一切","2022-6-25","",""],
                    ["超时空大玩家","2022-4-30","",""],
                    ["爱的理想生活","2021-3-1","",""]];
var all_film_tv = [all_film, all_tv];
var ep_tot_unaired = 4;
var film_unaired = 1;
var tv_unaired = 3;
var all_unaired = [film_unaired, tv_unaired];