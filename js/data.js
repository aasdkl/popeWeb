$(function() {

	var mymap = L.map('mapid').setView([41.9027835, 12.4963655], 2);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ? <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.light',
		accessToken: 'pk.eyJ1IjoiYWFzZGtsIiwiYSI6ImNpdnQ2c3RmOTAwMjgydG1pYjRpM3BnbDkifQ.f6KnHBtcjmDKNpAJij26MQ'
	}).addTo(mymap);
	L.marker([43.399395, 10.8660333]).addTo(mymap).bindTooltip('罗马帝国 意大利沃尔泰拉')._icon.setAttribute("l","43.399395,10.8660333");
	L.marker([37.9838096, 23.7275388]).addTo(mymap).bindTooltip('罗马帝国 希腊雅典')._icon.setAttribute("l","37.9838096,23.7275388");
	L.marker([31.7053821, 35.2024425]).addTo(mymap).bindTooltip('罗马帝国 犹太行省伯利恒')._icon.setAttribute("l","31.7053821,35.2024425");
	L.marker([39.6598529, 16.3581527]).addTo(mymap).bindTooltip('罗马帝国 意大利泰拉诺瓦达西巴里')._icon.setAttribute("l","39.6598529,16.3581527");
	L.marker([37.9838096, 23.7275388]).addTo(mymap).bindTooltip('罗马帝国 希腊雅典')._icon.setAttribute("l","37.9838096,23.7275388");
	L.marker([45.7681691, 13.3687199]).addTo(mymap).bindTooltip('罗马帝国 意大利阿奎莱亚')._icon.setAttribute("l","45.7681691,13.3687199");
	L.marker([39.1130076, 16.7842903000001]).addTo(mymap).bindTooltip('罗马帝国 意大利佩蒂利亚')._icon.setAttribute("l","39.1130076,16.7842903000001");
	L.marker([39.6598529, 16.3581527]).addTo(mymap).bindTooltip('罗马帝国 意大利泰拉诺瓦达西巴里')._icon.setAttribute("l","39.6598529,16.3581527");
	L.marker([44.2951567, 9.95064839999998]).addTo(mymap).bindTooltip('罗马帝国 意大利卢尼')._icon.setAttribute("l","44.2951567,9.95064839999998");
	L.marker([41.893238, 12.487152]).addTo(mymap).bindTooltip('罗马帝国 意大利')._icon.setAttribute("l","41.893238,12.487152");
	L.marker([40.9725388, 14.7462603]).addTo(mymap).bindTooltip('罗马帝国 圣安杰洛阿斯卡拉')._icon.setAttribute("l","40.9725388,14.7462603");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('罗马帝国 罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([39.0829081, 16.7911825]).addTo(mymap).bindTooltip('罗马帝国 卢卡尼亚 - 布鲁太梅索拉卡')._icon.setAttribute("l","39.0829081,16.7911825");
	L.marker([40.6670887, 15.1068113]).addTo(mymap).bindTooltip('罗马帝国 坎帕尼亚')._icon.setAttribute("l","40.6670887,15.1068113");
	L.marker([41.959817, 12.8022261]).addTo(mymap).bindTooltip('西罗马帝国 蒂沃利')._icon.setAttribute("l","41.959817,12.8022261");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('西罗马帝国 罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([41.6576528, 13.6362715]).addTo(mymap).bindTooltip('西罗马帝国 拉齐奥 - 坎帕尼亚弗罗西诺内')._icon.setAttribute("l","41.6576528,13.6362715");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('奥多亚塞王国 罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('东罗马帝国 罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('东罗马帝国 罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([40.8517746, 14.2681244]).addTo(mymap).bindTooltip('东罗马帝国 那不勒斯')._icon.setAttribute("l","40.8517746,14.2681244");
	L.marker([40.6670887, 15.1068113]).addTo(mymap).bindTooltip('东罗马帝国 坎帕尼亚')._icon.setAttribute("l","40.6670887,15.1068113");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('东罗马帝国 罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([31.768319, 35.21371]).addTo(mymap).bindTooltip('东罗马帝国 耶路撒冷')._icon.setAttribute("l","31.768319,35.21371");
	L.marker([42.7819352, 12.4065686]).addTo(mymap).bindTooltip('东罗马帝国 翁布里亚托迪')._icon.setAttribute("l","42.7819352,12.4065686");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('罗马公国（英语：Duchy of Rome） 罗马（名义属东罗马帝国）')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('罗马公国 罗马（名义属东罗马帝国）')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('罗马公国 罗马（名义属东罗马帝国）')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([38.1156879, 13.3612671]).addTo(mymap).bindTooltip('东罗马帝国 巴勒莫')._icon.setAttribute("l","38.1156879,13.3612671");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('罗马公国 罗马（名义属东罗马帝国）')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([34.802075, 38.996815]).addTo(mymap).bindTooltip('东罗马帝国 叙利亚')._icon.setAttribute("l","34.802075,38.996815");
	L.marker([38.1156879, 13.3612671]).addTo(mymap).bindTooltip('东罗马帝国 巴勒莫')._icon.setAttribute("l","38.1156879,13.3612671");
	L.marker([39.5763309, 16.6342882]).addTo(mymap).bindTooltip('东罗马帝国 卡拉布里亚罗萨诺')._icon.setAttribute("l","39.5763309,16.6342882");
	L.marker([34.802075, 38.996815]).addTo(mymap).bindTooltip('正统哈里发王朝 叙利亚')._icon.setAttribute("l","34.802075,38.996815");
	L.marker([34.802075, 38.996815]).addTo(mymap).bindTooltip('倭马亚王朝 叙利亚')._icon.setAttribute("l","34.802075,38.996815");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('罗马公国 罗马（名义属东罗马帝国）')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([34.802075, 38.996815]).addTo(mymap).bindTooltip('倭马亚王朝 叙利亚')._icon.setAttribute("l","34.802075,38.996815");
	L.marker([39.1478065, 16.9158621]).addTo(mymap).bindTooltip('东罗马帝国 卡拉布里亚圣塞韦里纳')._icon.setAttribute("l","39.1478065,16.9158621");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('罗马公国 罗马（名义属东罗马帝国）')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([42.3741926, 12.4036728999999]).addTo(mymap).bindTooltip('教皇国 加莱塞')._icon.setAttribute("l","42.3741926,12.4036728999999");
	L.marker([42.3741926, 12.4036728999999]).addTo(mymap).bindTooltip('教皇国 加莱塞')._icon.setAttribute("l","42.3741926,12.4036728999999");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('教皇国 罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([41.959817, 12.8022261]).addTo(mymap).bindTooltip('教皇国 蒂沃利')._icon.setAttribute("l","41.959817,12.8022261");
	L.marker([48.34236, -1.27585290000002]).addTo(mymap).bindTooltip('罗马涅 托西尼亚诺（名义属教皇国）')._icon.setAttribute("l","48.34236,-1.27585290000002");
	L.marker([45.1847248, 9.15820689999998]).addTo(mymap).bindTooltip('神圣罗马帝国 意大利王国帕维亚')._icon.setAttribute("l","45.1847248,9.15820689999998");
	L.marker([45.663764, 2.21643800000004]).addTo(mymap).bindTooltip('法国 贝里亚克')._icon.setAttribute("l","45.663764,2.21643800000004");
	L.marker([43.1584092, 13.6015463]).addTo(mymap).bindTooltip('教皇国 拉帕尼亚诺')._icon.setAttribute("l","43.1584092,13.6015463");
	L.marker([48.026628, 0.333235000000059]).addTo(mymap).bindTooltip('法国 香槟伯国马恩河畔沙蒂隆')._icon.setAttribute("l","48.026628,0.333235000000059");
	L.marker([41.2107299, 13.5714285]).addTo(mymap).bindTooltip('加埃塔公国（英语：Duchy of Gaeta） 加埃塔')._icon.setAttribute("l","41.2107299,13.5714285");
	L.marker([47.103127, 5.88323500000001]).addTo(mymap).bindTooltip('弗朗什 - 孔泰 坎热')._icon.setAttribute("l","47.103127,5.88323500000001");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('教皇国 罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([43.4639783, 12.2404869]).addTo(mymap).bindTooltip('教皇国 卡斯泰洛城')._icon.setAttribute("l","43.4639783,12.2404869");
	L.marker([44.494887, 11.3426163]).addTo(mymap).bindTooltip('神圣罗马帝国 博洛尼亚')._icon.setAttribute("l","44.494887,11.3426163");
	L.marker([44.9722852, 8.32736390000002]).addTo(mymap).bindTooltip('比萨共和国 蒙泰马尼奥')._icon.setAttribute("l","44.9722852,8.32736390000002");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('教皇国 罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([43.318809, 11.3307574]).addTo(mymap).bindTooltip('锡耶纳共和国（英语：Republic of Siena） 锡耶纳')._icon.setAttribute("l","43.318809,11.3307574");
	L.marker([43.8376211, 10.4950609]).addTo(mymap).bindTooltip('神圣罗马帝国 托斯卡纳侯爵领（英语：March of Tuscany）卢卡')._icon.setAttribute("l","43.8376211,10.4950609");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('教皇国 罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([45.4654219, 9.18592430000001]).addTo(mymap).bindTooltip('神圣罗马帝国 意大利米兰')._icon.setAttribute("l","45.4654219,9.18592430000001");
	L.marker([48.026628, 0.333235000000059]).addTo(mymap).bindTooltip('法国 香槟伯国特鲁瓦')._icon.setAttribute("l","48.026628,0.333235000000059");
	L.marker([46.227638, 2.21374900000001]).addTo(mymap).bindTooltip('法国 隆格多克圣吉莱')._icon.setAttribute("l","46.227638,2.21374900000001");
	L.marker([45.0526206, 9.69298449999997]).addTo(mymap).bindTooltip('神圣罗马帝国 意大利皮亚琴察')._icon.setAttribute("l","45.0526206,9.69298449999997");
	L.marker([38.7222524, -9.13933659999998]).addTo(mymap).bindTooltip('葡萄牙 里斯本')._icon.setAttribute("l","38.7222524,-9.13933659999998");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('教皇国 罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([46.2331221, 7.36062600000002]).addTo(mymap).bindTooltip('法国 图赖讷梅皮西昂')._icon.setAttribute("l","46.2331221,7.36062600000002");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('教皇国 罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([41.7074884, 14.6063192]).addTo(mymap).bindTooltip('西西里王国 圣安杰洛利莫桑奥')._icon.setAttribute("l","41.7074884,14.6063192");
	L.marker([45.6668893, 12.2430437]).addTo(mymap).bindTooltip('神圣罗马帝国 特雷维索')._icon.setAttribute("l","45.6668893,12.2430437");
	L.marker([44.457754, -0.373185000000035]).addTo(mymap).bindTooltip('法国 加斯科涅维朗德罗')._icon.setAttribute("l","44.457754,-0.373185000000035");
	L.marker([43.237875, 6.07219989999999]).addTo(mymap).bindTooltip('法国 屈埃尔西卡奥尔')._icon.setAttribute("l","43.237875,6.07219989999999");
	L.marker([42.964127, 1.605232]).addTo(mymap).bindTooltip('法国 富瓦萨韦尔丹')._icon.setAttribute("l","42.964127,1.605232");
	L.marker([45.8932231, 1.56960179999999]).addTo(mymap).bindTooltip('法国 利穆赞莫蒙')._icon.setAttribute("l","45.8932231,1.56960179999999");
	L.marker([45.8932231, 1.56960179999999]).addTo(mymap).bindTooltip('法国 利穆赞勒蒙')._icon.setAttribute("l","45.8932231,1.56960179999999");
	L.marker([48.494183, -2.71444900000006]).addTo(mymap).bindTooltip('法国 朗格多克格里扎克')._icon.setAttribute("l","48.494183,-2.71444900000006");
	L.marker([45.8932231, 1.56960179999999]).addTo(mymap).bindTooltip('法国 利穆赞莫蒙')._icon.setAttribute("l","45.8932231,1.56960179999999");
	L.marker([40.8517746, 14.2681244]).addTo(mymap).bindTooltip('那不勒斯王国 那不勒斯')._icon.setAttribute("l","40.8517746,14.2681244");
	L.marker([40.8517746, 14.2681244]).addTo(mymap).bindTooltip('那不勒斯王国 那不勒斯')._icon.setAttribute("l","40.8517746,14.2681244");
	L.marker([42.0481782, 13.9289304]).addTo(mymap).bindTooltip('那不勒斯王国 苏尔莫纳')._icon.setAttribute("l","42.0481782,13.9289304");
	L.marker([45.4408474, 12.3155151]).addTo(mymap).bindTooltip('威尼斯共和国 威尼斯')._icon.setAttribute("l","45.4408474,12.3155151");
	L.marker([41.8361406, 12.9733452]).addTo(mymap).bindTooltip('教皇国 杰纳扎诺')._icon.setAttribute("l","41.8361406,12.9733452");
	L.marker([45.4408474, 12.3155151]).addTo(mymap).bindTooltip('威尼斯共和国 威尼斯')._icon.setAttribute("l","45.4408474,12.3155151");
	L.marker([44.111424, 9.96312149999994]).addTo(mymap).bindTooltip('热那亚共和国 萨尔扎纳')._icon.setAttribute("l","44.111424,9.96312149999994");
	L.marker([45.4408474, 12.3155151]).addTo(mymap).bindTooltip('威尼斯共和国 威尼斯')._icon.setAttribute("l","45.4408474,12.3155151");
	L.marker([43.7695604, 11.2558136]).addTo(mymap).bindTooltip('佛罗伦萨共和国 佛罗伦萨')._icon.setAttribute("l","43.7695604,11.2558136");
	L.marker([52.0907374, 5.12142010000002]).addTo(mymap).bindTooltip('神圣罗马帝国 乌德勒支采邑大主教区乌德勒支')._icon.setAttribute("l","52.0907374,5.12142010000002");
	L.marker([43.7695604, 11.2558136]).addTo(mymap).bindTooltip('佛罗伦萨共和国 佛罗伦萨')._icon.setAttribute("l","43.7695604,11.2558136");
	L.marker([42.466403, 11.750676]).addTo(mymap).bindTooltip('教皇国 拉齐奥卡尼诺')._icon.setAttribute("l","42.466403,11.750676");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('教皇国 拉齐奥罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([43.4085159, 13.416501]).addTo(mymap).bindTooltip('教皇国 马尔凯蒙泰法诺')._icon.setAttribute("l","43.4085159,13.416501");
	L.marker([40.9580902, 14.7812653999999]).addTo(mymap).bindTooltip('那不勒斯王国 坎帕尼亚卡普里利亚伊尔皮纳')._icon.setAttribute("l","40.9580902,14.7812653999999");
	L.marker([45.4070955, 7.50366199999996]).addTo(mymap).bindTooltip('米兰公国 皮埃蒙特博斯科')._icon.setAttribute("l","45.4070955,7.50366199999996");
	L.marker([44.494887, 11.3426163]).addTo(mymap).bindTooltip('教皇国 艾米利亚 - 罗马涅博洛尼亚')._icon.setAttribute("l","44.494887,11.3426163");
	L.marker([42.9748386, 13.8564085]).addTo(mymap).bindTooltip('教皇国 马尔凯格罗塔姆马雷')._icon.setAttribute("l","42.9748386,13.8564085");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('教皇国 拉齐奥罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([45.6827479, 8.70680709999999]).addTo(mymap).bindTooltip('米兰公国 伦巴第索姆马隆巴尔多')._icon.setAttribute("l","45.6827479,8.70680709999999");
	L.marker([44.494887, 11.3426163]).addTo(mymap).bindTooltip('教皇国 艾米利亚 - 罗马涅博洛尼亚')._icon.setAttribute("l","44.494887,11.3426163");
	L.marker([43.8398164, 13.0194200999999]).addTo(mymap).bindTooltip('教皇国 马尔凯法诺')._icon.setAttribute("l","43.8398164,13.0194200999999");
	L.marker([43.7695604, 11.2558136]).addTo(mymap).bindTooltip('佛罗伦萨公国 佛罗伦萨')._icon.setAttribute("l","43.7695604,11.2558136");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('教皇国 拉齐奥罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([44.494887, 11.3426163]).addTo(mymap).bindTooltip('教皇国 艾米利亚 - 罗马涅博洛尼亚')._icon.setAttribute("l","44.494887,11.3426163");
	L.marker([43.7695604, 11.2558136]).addTo(mymap).bindTooltip('托斯卡纳大公国 佛罗伦萨')._icon.setAttribute("l","43.7695604,11.2558136");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('教皇国 拉齐奥罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('教皇国 拉齐奥罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([45.4408474, 12.3155151]).addTo(mymap).bindTooltip('威尼斯共和国 威尼斯')._icon.setAttribute("l","45.4408474,12.3155151");
	L.marker([40.9684542, 16.0895164999999]).addTo(mymap).bindTooltip('那不勒斯王国 普利亚斯皮纳佐拉')._icon.setAttribute("l","40.9684542,16.0895164999999");
	L.marker([43.7262567, 12.6365633]).addTo(mymap).bindTooltip('教皇国 马尔凯乌尔比诺')._icon.setAttribute("l","43.7262567,12.6365633");
	L.marker([41.8922054, 12.8860016]).addTo(mymap).bindTooltip('教皇国 拉齐奥波利')._icon.setAttribute("l","41.8922054,12.8860016");
	L.marker([40.8425376, 16.3699271]).addTo(mymap).bindTooltip('那不勒斯王国 巴里普利亚格拉维纳')._icon.setAttribute("l","40.8425376,16.3699271");
	L.marker([44.494887, 11.3426163]).addTo(mymap).bindTooltip('教皇国 博洛尼亚')._icon.setAttribute("l","44.494887,11.3426163");
	L.marker([45.4408474, 12.3155151]).addTo(mymap).bindTooltip('威尼斯共和国 威尼斯')._icon.setAttribute("l","45.4408474,12.3155151");
	L.marker([44.0472717, 12.4495221]).addTo(mymap).bindTooltip('教皇国 圣阿尔坎杰洛 - 迪罗马涅')._icon.setAttribute("l","44.0472717,12.4495221");
	L.marker([44.1396438, 12.2464292]).addTo(mymap).bindTooltip('教皇国 艾米利亚 - 罗马涅切塞纳')._icon.setAttribute("l","44.1396438,12.2464292");
	L.marker([44.1396438, 12.2464292]).addTo(mymap).bindTooltip('教皇国 艾米利亚 - 罗马涅切塞纳')._icon.setAttribute("l","44.1396438,12.2464292");
	L.marker([43.4291392, 12.935166]).addTo(mymap).bindTooltip('教皇国 马尔凯真加')._icon.setAttribute("l","43.4291392,12.935166");
	L.marker([43.3773354, 13.2139116]).addTo(mymap).bindTooltip('教皇国 马尔凯钦戈利')._icon.setAttribute("l","43.3773354,13.2139116");
	L.marker([46.1424635, 12.2167088]).addTo(mymap).bindTooltip('威尼斯共和国 威尼托贝卢诺')._icon.setAttribute("l","46.1424635,12.2167088");
	L.marker([43.7197926, 13.2152224]).addTo(mymap).bindTooltip('教皇国 马尔凯塞尼加利亚')._icon.setAttribute("l","43.7197926,13.2152224");
	L.marker([41.6003412, 13.0216463]).addTo(mymap).bindTooltip('教皇国 拉齐奥卡皮内托罗马诺')._icon.setAttribute("l","41.6003412,13.0216463");
	L.marker([45.6702291, 12.200062]).addTo(mymap).bindTooltip('奥地利帝国 伦巴第 - 威尼西亚特雷维索列塞')._icon.setAttribute("l","45.6702291,12.200062");
	L.marker([41.7461073, 12.2471464]).addTo(mymap).bindTooltip('皮埃蒙特 - 撒丁尼亚王国 热那亚')._icon.setAttribute("l","41.7461073,12.2471464");
	L.marker([45.863975, 12.071410]).addTo(mymap).bindTooltip('奥地利帝国 伦巴第 - 威尼西亚迪塞奥')._icon.setAttribute("l","45.863975,12.071410");
	L.marker([41.9027835, 12.4963655]).addTo(mymap).bindTooltip('意大利王国 拉齐奥罗马')._icon.setAttribute("l","41.9027835,12.4963655");
	L.marker([45.7129049, 9.50590620000003]).addTo(mymap).bindTooltip('意大利王国 贝尔加莫索托伊尔蒙泰')._icon.setAttribute("l","45.7129049,9.50590620000003");
	L.marker([45.6127403, 10.2190203]).addTo(mymap).bindTooltip('意大利王国 布雷西亚孔切肖')._icon.setAttribute("l","45.6127403,10.2190203");
	L.marker([46.33095, 11.8911368]).addTo(mymap).bindTooltip('意大利王国 威尼托贝卢诺卡纳莱达戈尔多')._icon.setAttribute("l","46.33095,11.8911368");
	L.marker([49.8827856, 19.4939578999999]).addTo(mymap).bindTooltip('波兰第二共和国 瓦多维采')._icon.setAttribute("l","49.8827856,19.4939578999999");
	L.marker([48.2551652, 12.8447013]).addTo(mymap).bindTooltip('德国 巴伐利亚因河畔马克特尔')._icon.setAttribute("l","48.2551652,12.8447013");
	L.marker([-36.0141576, -59.0992986]).addTo(mymap).bindTooltip('阿根廷 布宜诺斯艾利斯弗洛雷斯')._icon.setAttribute("l","-36.0141576,-59.0992986");
	
	$(mymap.getPane('markerPane')).on('click',function(e){
		s=e.target.getAttribute('l').split(',');
		if(mymap.getZoom()==8 && isNear(s, mymap.getCenter())){
			mymap.flyTo([41.9027835, 12.4963655], 2,{duration:1});
		} else {
			mymap.flyTo([Number(s[0]), Number(s[1])], 8,{duration:1});
		}
	});
	
	function isNear(arr1,latlng) {
		if (Math.abs(arr1[0]-latlng['lat'])<0.1 && Math.abs(arr1[1]-latlng['lng'])<0.1) {
			return true;
		}
		return false;
	}
	

// chart
	var chart2 = echarts.init(document.getElementById('chart2'));
	// 初始 option
	option2 = {
		title:{
			text: '教宗出生地统计',
			x:'center',
			textStyle:{color:'#ddd'}
		},
		textStyle:{
			color:'#ddd'
		},
		legend:{
			x:'15%',
			y:'90%',
			data:['罗马','非罗马'],
			textStyle:{color:'#ddd'}
		},
		tooltip : {},
		grid : {
			right : '1%',
			left : '45%',
			width : '50%',
			containLabel : true
		},
		xAxis : [ {
			type : 'category',
			data : [{value: "罗马",textStyle: {fontSize: 20}}, "意大利", "佛罗伦萨", "叙利亚", "威尼斯", "那不勒斯", "希腊雅典", "撒丁尼亚", "托斯卡纳侯爵领", "艾米利亚 - 罗马涅博洛尼亚", "锡耶纳", "巴勒莫", "艾米利亚 - 罗马涅切塞纳", "贝内文托", "利穆赞莫蒙", "拉齐奥", "香槟伯国", "热那亚", "萨克森公国", "阿非利加", "阿纳尼", "热那亚共和国", "加莱塞", "博洛尼亚", "坎帕尼亚", "蒂沃利", "巴伦西亚王国", "马尔凯钦戈利", "翁布里亚托迪", "卡拉布里亚圣塞韦里纳", "锡拉库扎", "圣安杰洛利莫桑奥", "马尔凯乌尔比诺", "马尔凯真加", "利穆赞勒蒙", "萨尔扎纳", "罗马涅菲亚尼亚诺", "伦巴第索姆马隆巴尔多", "阿奎莱亚丰迪", "伊特鲁里亚锡耶纳", "皮斯托亚", "伊庇鲁斯尼科波利", "科西尼亚诺", "富瓦萨韦尔丹", "切卡诺", "威尼托贝卢诺", "蒙泰马尼奥", "利夏诺", "朗格多克格里扎克", "卡皮内托罗马诺", "洛林公国", "坎热", "卢卡尼亚 - 布鲁太梅索拉卡", "托西尼亚诺", "加维纳诺", "贝里亚克", "库焦诺", "马尔凯法诺", "意大利王国", "伊特鲁里亚", "加利利伯赛大", "米兰巴乔", "阿尔比索拉", "布雷西亚孔切肖", "杰纳扎诺", "巴伐利亚因河畔马克特尔", "马尔凯蒙泰法诺", "威尼托贝卢诺卡纳莱达戈尔多", "延内", "米兰", "施瓦本公国埃吉桑", "贝尔加莫索托伊尔蒙泰", "特雷维索", "马尔西卡", "里斯本", "色雷斯", "马尔凯塞尼加利亚", "巴里普利亚格拉维纳", "布莱拉", "拉齐奥 - 坎帕尼亚弗罗西诺内", "以弗所", "加斯科涅维朗德罗", "伦巴第 - 威尼西亚特雷维索列塞", "图赖讷梅皮西昂", "坎帕尼亚卡普里利亚伊尔皮纳", "隆格多克圣吉莱", "布宜诺斯艾利斯弗洛雷斯", "皮埃蒙特博斯科", "圣安杰洛阿斯卡拉", "萨伏伊伯国", "巴伦西亚王国哈蒂瓦", "瓦多维采", "耶路撒冷", "萨莫奈", "拉帕尼亚诺", "阿伊多内", "加埃塔", "阿非利加卡比利亚", "撒比纳", "马尔凯格罗塔姆马雷", "塞尼", "施瓦本公国", "奥斯提亚", "伦巴第科莫", "切莱利古雷", "拉齐奥 - 坎帕尼亚阿尔巴诺", "琉息太尼亚伊达尼亚", "乌德勒支采邑大主教区乌德勒支", "卡拉布里亚罗萨诺", "达尔马提亚萨罗纳", "赫特福德郡阿博茨朗利", "阿尔代亚", "萨伏伊伯国梅屈里", "伦巴第 - 威尼西亚迪塞奥", "巴伐利亚公国", "圣阿尔坎杰洛 - 迪罗马涅", "达尔马提亚扎达尔", "犹太行省伯利恒", "屈埃尔西卡奥尔", "普利亚斯皮纳佐拉", "苏尔莫纳", "卡斯泰洛城"],
			axisLine:{lineStyle:{color:'#ddd'}}
		} ],
		dataZoom : [ {
			show : true,
			start : 0,
			end : 10
		} ],
		yAxis : [ {
			type : 'value',
			axisLine:{lineStyle:{color:'#ddd'}}
		} ],
		calculable:true,
		series : [  {
			name : '人数',
			type : 'bar',
			data : [101, 9, 5, 5, 5, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		},{
			name : '人数',
			type : 'pie',
			center:['19%','49%'],
			radius:'40%',
			data : [
				{name:'非罗马',value:165},
				{name:'罗马',value:101}]
		} ]
	};
	chart2.setOption(option2);


	var chart3 = echarts.init(document.getElementById('chart3'));
	// 初始 option
	option3 = {
		title : {
			text: '教宗就任/离任年龄分布',
			x:'center',
			y:15,
			textStyle:{color:'#ddd'}
		},
		textStyle:{
			color:'#ddd'
		},
		grid : {
			top:'15%',
			left : '8%',
			right : '12%',
			bottom:'6%',
			containLabel : true
		},
		tooltip : {
			trigger : 'axis',
			axisPointer: {
				show:true,
				type:'cross',
				lineStyle:{
					type: "dashed",
					width:1
				}
			},
			formatter: function (para) {
				if(para.value.length>1){
					return para.seriesName + ":<br />就任："+para.value[0]+" 岁<br /> 离任："+para.value[1]+" 岁";
				} else if(para.name.indexOf('/')>0){
					return para.seriesName + ":<br />"+para.name+"："+para.data.coord[0]+"/"+para.data.coord[1];
				} else {
					return para.seriesName + ":<br />"+para.name+"："+para.value;
				}
			}
		},
		legend:{
			x:'center',
			y:'bottom',
			data:['罗马','非罗马'],
			textStyle:{color:'#ddd'}
		},
		xAxis : [ {
			name:"就任年龄",
			type : 'value',
			scale: true,
			axisLabel: {formatter:'{value} 岁'},
			splitLine:{show:false},
			axisLine:{lineStyle:{color:'#ddd'}}
		} ],
		yAxis : [ {
			name:"离任年龄",
			type : 'value',
			scale: true,
			axisLabel: {formatter:'{value} 岁'},
			splitLine:{show:false},
			axisLine:{lineStyle:{color:'#ddd'}}
		} ],
		series : [ {
			name : '罗马',
			type : 'scatter',
			data :  [[53, 64], [30, 40], [73, 83], [39, 57], [62, 67], [47, 55], [55, 60], [36, 50], [71, 73], [48, 49], [54, 57], [63, 68], [46, 54], [46, 46], [57, 72], [42, 56], [50, 65], [59, 61], [43, 47], [42, 50], [43, 52], [51, 53], [40, 42], [63, 65], [45, 46], [37, 55], [51, 56], [41, 54], [50, 54], [59, 70], [50, 64], [67, 67], [45, 48], [55, 55], [39, 42], [51, 55], [66, 68], [49, 50], [46, 62], [52, 52], [38, 43], [57, 67], [60, 83], [45, 66], [46, 47], [42, 49], [44, 47], [47, 47], [37, 54], [54, 57], [57, 65], [45, 48], [39, 48], [75, 80], [52, 62], [49, 50], [45, 51], [90, 90], [46, 47], [57, 57], [60, 63], [44, 51], [46, 48], [48, 48], [49, 51], [21, 25], [41, 44], [39, 42], [42, 46], [41, 50], [18, 26], [48, 49], [27, 27], [49, 49], [49, 50], [45, 52], [48, 49], [44, 53], [35, 46], [48, 48], [44, 47], [32, 44], [49, 57], [20, 32], [45, 45], [33, 33], [45, 46], [35, 36], [64, 70], [48, 61], [80, 81], [57, 61], [85, 92], [62, 67], [70, 83], [69, 69], [72, 72], [52, 68], [67, 69], [70, 80], [79, 86], [63, 68], [57, 81], [57, 81], [67, 93], [63, 82]],
			markArea:{
				silent:true,
				itemStyle:{
					normal:{
						color: 'transparent',
						borderWidth:1,
						borderType:'dashed'
					}
				},
				data:[[
					{name: '罗马籍教宗分布区间',xAxis:'min',yAxis:'min'},
					{xAxis:'max',yAxis:'max'}
				]]
			},
			markPoint:{
				itemStyle: { 
					normal: { 
						label: {
							formatter: function (p, n, v) {
								return p.value;
							},
						}
					}
				},
				data:[
					{name: '最大离任年龄', type:'max',valueDim:'y'},
					{name: '最小离任年龄',type:'min',valueDim:'y'},
					{name: '最大就任年龄', type:'max',valueDim:'x'},
					{name: '最小就任年龄',type:'min',valueDim:'x'}
				]
			},
			markLine:{
				lineStyle:{
					normal:{
						type:'solid'
					}
				},
				data:[
					{name: '平均离任年龄', type:'average',valueIndex:0},
					{name: '平均就任年龄', type:'average',valueIndex:1}
				]
			}
		}, {
			name : '非罗马',
			type : 'scatter',
			data : [[32, 66], [57, 66], [51, 63], [49, 55], [58, 69], [58, 62], [59, 74], [63, 74], [46, 55], [45, 59], [34, 44], [55, 56], [42, 43], [59, 68], [35, 43], [38, 51], [53, 54], [54, 54], [41, 44], [29, 50], [60, 78], [41, 57], [47, 48], [42, 52], [50, 71], [46, 53], [38, 53], [82, 86], [38, 54], [39, 48], [53, 56], [36, 40], [36, 37], [74, 76], [48, 55], [44, 50], [40, 53], [40, 42], [32, 39], [59, 65], [57, 72], [101, 104], [71, 72], [50, 51], [56, 57], [37, 51], [46, 50], [55, 57], [58, 58], [44, 51], [41, 51], [62, 73], [45, 49], [52, 54], [75, 80], [47, 47], [58, 60], [58, 58], [48, 49], [54, 68], [43, 44], [24, 27], [53, 57], [43, 49], [41, 42], [48, 48], [47, 51], [37, 39], [37, 38], [63, 66], [46, 58], [48, 60], [60, 61], [46, 57], [49, 68], [57, 58], [59, 64], [58, 59], [49, 50], [44, 52], [54, 59], [59, 81], [84, 88], [65, 67], [79, 79], [37, 55], [65, 67], [80, 91], [48, 62], [47, 63], [49, 57], [76, 79], [52, 58], [47, 54], [57, 70], [51, 59], [61, 72], [64, 64], [59, 69], [37, 45], [62, 64], [45, 56], [66, 81], [53, 53], [78, 83], [60, 66], [61, 68], [63, 68], [55, 56], [55, 69], [69, 69], [55, 76], [56, 68], [67, 69], [65, 78], [79, 80], [76, 85], [51, 71], [65, 68], [75, 81], [78, 87], [65, 83], [65, 75], [63, 68], [67, 69], [65, 80], [54, 85], [68, 79], [59, 67], [64, 81], [76, 81], [65, 80], [65, 65], [58, 84], [78, 85]],
			markArea:{
				silent:true,
				itemStyle:{
					normal:{
						color: 'transparent',
						borderWidth:1,
						borderType:'dashed'
					}
				},
				data:[[
					{name: '非罗马籍教宗分布区间',xAxis:'min',yAxis:'min'},
					{xAxis:'max', yAxis:'max'}
				]]
			},
			markPoint:{
				itemStyle: { 
					normal: { 
						label: {
							formatter: function (p, n, v) {
								return p.data.coord[0]+"/"+p.data.coord[1];
							},
						}
					}
				},
				data:[
					{name: '最大就任/离任年龄', type:'max'},
					{name: '最小离任/离任年龄',type:'min'},
				]
			},
			markLine:{
				lineStyle:{
					normal:{
						type:'solid'
					}
				},
				data:[
					{name: '平均离任年龄', type:'average',valueIndex:0},
					{name: '平均就任年龄', type:'average',valueIndex:1}
				]
			}
		} ]
	};
	chart3.setOption(option3);

	var data = [
{"num":"1", "time":"33 年 4 月 1 日 <br>- 67 年 6 月 29 日<br>（34 年 89 天）", "head":"<img src='./img/pope/pic_001.jpg' class='img-circle' />", "name1":"圣伯多禄<br>PETRUS", "name2":"西门·矶法<br>Šimʻōn Kêpâ", "born":"罗马帝国<br>加利利伯赛大", "age":"32 / 66", "tag":"耶稣使徒之一，根据《马太福音》16:18 - 19 由其处获得天国的钥匙。倒钉十字架而死。<br>庆日 6 月 29 日（圣伯多禄与圣保禄庆日）与 2 月 22 日（圣伯多禄座）。<br>天主教会承认其为基督任命的首位罗马主教。亦为东方基督教尊为圣人，庆日 6 月 29 日。" },
{"num":"2", "time":"67 年 6 月 29 日 <br>- 76 年 9 月 23 日<br>（9 年 86 天）", "head":"<img src='./img/pope/pic_002.jpg' class='img-circle' />", "name1":"圣理诺<br>Papa LINUS", "name2":"理诺<br>Linus", "born":"罗马帝国<br>意大利 沃尔泰拉", "age":"57 / 66", "tag":"庆日 9 月 23 日。亦为东方基督教尊为圣人，庆日 6 月 7 日。" },
{"num":"3", "time":"76 年 9 月 23 日 <br>- 88 年 4 月 26 日<br>（11 年 216 天）", "head":"<img src='./img/pope/pic_003.jpg' class='img-circle' />", "name1":"圣亚纳格肋多（克雷）<br>Papa ANACLETUS（Cletus）", "name2":"亚纳格肋多<br>Anacletus", "born":"罗马帝国<br>希腊雅典", "age":"51 / 63", "tag":"殉教；庆日 4 月 26 日。曾被误分为克雷和亚纳格肋多二人。" },
{"num":"4", "time":"88 年 4 月 26 日 <br>- 99 年 11 月 23 日<br>（11 年 211 天）", "head":"<img src='./img/pope/pic_004.jpg' class='img-circle' />", "name1":"圣克肋孟一世<br>Papa CLEMENS", "name2":"克雷芒<br>Clemens", "born":"罗马帝国<br>罗马", "age":"53 / 64", "tag":"庆日 11 月 23 日。《克肋孟一书（英语：First Epistle of Clement）》据称确立了神职人员的使徒权。亦为东方基督教尊为圣人，庆日 11 月 25 日。" },
{"num":"5", "time":"99 年 11 月 23 日 <br>- 107 年 10 月 27 日<br>（7 年 338 天）", "head":"<img src='./img/pope/pic_005.jpg' class='img-circle' />", "name1":"圣爱华利多<br>Papa EVARISTUS", "name2":"爱华利多<br>Evaristus", "born":"罗马帝国<br>犹太行省伯利恒", "age":"49 / 55", "tag":"据称将罗马划分为教区，并分配牧师。庆日 10 月 26 日。" },
{"num":"6", "time":"107 年 10 月 27 日 <br>- 115 年 5 月 3 日<br>（7 年 188 天）", "head":"<img src='./img/pope/pic_006.jpg' class='img-circle' />", "name1":"圣亚历山大一世<br>Papa ALEXANDER", "name2":"亚历山大<br>Alexander", "born":"罗马帝国<br>罗马", "age":"30 / 40", "tag":"创立以圣水祝圣的传统。亦为东方基督教尊为圣人，庆日 3 月 16 日。" },
{"num":"7", "time":"115 年 5 月 3 日 <br>- 125 年 4 月 3 日<br>（9 年 335 天）", "head":"<img src='./img/pope/pic_007.jpg' class='img-circle' />", "name1":"圣西斯笃一世<br>Papa XYSTUS", "name2":"西斯笃<br>Xystus", "born":"罗马帝国<br>罗马", "age":"73 / 83", "tag":"庆日 4 月 6 日。亦为东方基督教尊为圣人，庆日 8 月 10 日。" },
{"num":"8", "time":"125 年 4 月 3 日 <br>- 136 年 1 月 5 日<br>（10 年 277 天）", "head":"<img src='./img/pope/pic_008.jpg' class='img-circle' />", "name1":"圣德肋斯福禄<br>Papa TELESPHORUS", "name2":"德肋斯福禄<br>Telesphorus", "born":"罗马帝国<br>意大利 泰拉诺瓦达西巴里", "age":"58 / 69", "tag":"庆日 1 月 5 日。亦为东方基督教尊为圣人，庆日 2 月 22 日。教父圣爱任纽称其为大殉教者。" },
{"num":"9", "time":"136 年 1 月 5 日 <br>- 140 年 1 月 11 日<br>（4 年 6 天）", "head":"<img src='./img/pope/pic_009.jpg' class='img-circle' />", "name1":"圣喜及诺<br>Papa HYGINUS", "name2":"喜及诺<br>Ygínos", "born":"罗马帝国<br>希腊雅典", "age":"58 / 62", "tag":"根据传统为殉教者；庆日 1 月 11 日。" },
{"num":"10", "time":"140 年 1 月 11 日 <br>- 155 年 7 月 11 日<br>（15 年 181 天）", "head":"<img src='./img/pope/pic_010.jpg' class='img-circle' />", "name1":"圣庇护一世<br>Papa PIUS", "name2":"庇护<br>Pius", "born":"罗马帝国<br>意大利 阿奎莱亚", "age":"59 / 74", "tag":"殉教者，死于剑下；庆日 7 月 11 日。下令复活节仅当于周日庆祝。" },
{"num":"11", "time":"155 年 7 月 11 日 <br>- 166 年 4 月 20 日<br>（10 年 283 天）", "head":"<img src='./img/pope/pic_011.jpg' class='img-circle' />", "name1":"圣亚尼策<br>Papa ANICETUS", "name2":"亚尼策<br>Anicitus", "born":"罗马帝国<br>叙利亚 埃梅萨", "age":"63 / 74", "tag":"根据传统为殉教者；庆日 4 月 17 日。下令神职人员不当留长发。" },
{"num":"12", "time":"166 年 4 月 20 日 <br>- 174 年 4 月 22 日<br>（8 年 2 天）", "head":"<img src='./img/pope/pic_012.jpg' class='img-circle' />", "name1":"圣索德<br>Papa SOTERIUS", "name2":"索德<br>Soterius", "born":"罗马帝国<br>阿奎莱亚丰迪", "age":"46 / 55", "tag":"根据传统为殉教者；庆日 4 月 22 日。宣布在牧师祝福后婚姻成立；正式将复活节订立为罗马年度节日。" },
{"num":"13", "time":"174 年 4 月 22 日 <br>- 189 年 5 月 26 日<br>（15 年 34 天）", "head":"<img src='./img/pope/pic_013.jpg' class='img-circle' />", "name1":"圣爱琉德理<br>Papa ELEUTHERIUS", "name2":"爱琉德理<br>Eleutherius", "born":"罗马帝国<br>伊庇鲁斯尼科波利", "age":"45 / 59", "tag":"根据传统为殉教者；庆日 5 月 6 日。" },
{"num":"14", "time":"189 年 5 月 26 日 <br>- 199 年 7 月 28 日<br>（10 年 63 天）", "head":"<img src='./img/pope/pic_014.jpg' class='img-circle' />", "name1":"圣维多一世<br>Papa VICTOR", "name2":"维多<br>Victor", "born":"罗马帝国<br>阿非利加", "age":"34 / 44", "tag":"将拜占庭的狄奥多图斯绝罚。守十四日派（英语：Quartodeciman）斗争。" },
{"num":"15", "time":"199 年 7 月 28 日 <br>- 217 年 12 月 20 日<br>（18 年 145 天）", "head":"<img src='./img/pope/pic_015.jpg' class='img-circle' />", "name1":"圣则斐琳<br>Papa ZEPHYRINUS", "name2":"则斐琳<br>Zephyrinus", "born":"罗马帝国<br>罗马", "age":"39 / 57", "tag":"同狄奥多图斯的嗣子说异端进行斗争。未直接殉教，但由于其承受的苦痛而被称为殉教者。" },
{"num":"16", "time":"217 年 12 月 20 日 <br>- 222 年 10 月 14 日<br>（7 年 298 天）", "head":"<img src='./img/pope/pic_016.jpg' class='img-circle' />", "name1":"圣嘉礼一世<br>Papa CALLISTUS", "name2":"加理多<br>Callistus", "born":"罗马帝国<br>罗马", "age":"62 / 67", "tag":"殉教者；庆日 10 月 14 日。" },
{"num":"17", "time":"222 年 10 月 14 日 <br>- 230 年 5 月 23 日<br>（7 年 221 天）", "head":"<img src='./img/pope/pic_017.jpg' class='img-circle' />", "name1":"圣乌尔巴诺一世<br>Papa URBANUS", "name2":"乌尔巴诺<br>Urbanus", "born":"罗马帝国<br>罗马", "age":"47 / 55", "tag":"亦为东方基督教尊为圣人，庆日 5 月 25 日。" },
{"num":"18", "time":"230 年 8 月 21 日 <br>- 235 年 9 月 28 日<br>（5 年 38 天）", "head":"<img src='./img/pope/pic_018.jpg' class='img-circle' />", "name1":"圣彭谦<br>Papa PONTIANUS", "name2":"彭谦<br>Pontianus", "born":"罗马帝国<br>罗马", "age":"55 / 60", "tag":"为罗马皇帝马克西米努斯·色雷克斯放逐至撒丁岛，首位逊位教宗。《利比里亚目录（英语：Liberian Catalogue）》记载其过世日为 235 年 9 月 28 日，此为教宗史上最初的精确日期。" },
{"num":"19", "time":"235 年 11 月 21 日 <br>- 236 年 1 月 3 日<br>（0 年 13 天）", "head":"<img src='./img/pope/pic_019.jpg' class='img-circle' />", "name1":"圣安塞罗<br>Papa ANTERUS", "name2":"安塞罗<br>Anterus", "born":"罗马帝国<br>意大利 佩蒂利亚", "age":"55 / 56", "tag":"庆日 1 月 3 日。亦为东方基督教尊为圣人，庆日 8 月 5 日。" },
{"num":"20", "time":"236 年 1 月 10 日 <br>- 250 年 1 月 20 日<br>（14 年 10 天）", "head":"<img src='./img/pope/pic_020.jpg' class='img-circle' />", "name1":"圣法比盎<br>Papa FABIANUS", "name2":"法比盎<br>Fabianus", "born":"罗马帝国<br>罗马", "age":"36 / 50", "tag":"将罗马分为七个区，每区由一执事领衔。庆日 1 月 20 日。亦为东方基督教尊为圣人，庆日 8 月 5 日。" },
{"num":"21", "time":"251 年 3 月 6 日 <br>- 253 年 6 月 25 日<br>（2 年 111 天）", "head":"<img src='./img/pope/pic_021.jpg' class='img-circle' />", "name1":"圣科尔乃略<br>Papa CORNELIUS", "name2":"科尔乃略<br>Cornelius", "born":"罗马帝国<br>罗马", "age":"71 / 73", "tag":"经受苦役后殉教；庆日 9 月 16 日。" },
{"num":"22", "time":"253 年 6 月 25 日 <br>- 254 年 3 月 5 日<br>（0 年 253 天）", "head":"<img src='./img/pope/pic_022.jpg' class='img-circle' />", "name1":"圣路基约一世<br>Papa LUCIUS", "name2":"路基约<br>Lucius", "born":"罗马帝国<br>罗马", "age":"48 / 49", "tag":"庆日 3 月 5 日。" },
{"num":"23", "time":"254 年 3 月 12 日 <br>- 257 年 8 月 2 日<br>（3 年 143 天）", "head":"<img src='./img/pope/pic_023.jpg' class='img-circle' />", "name1":"圣斯德望一世<br>Papa STEPHANUS", "name2":"斯德望<br>Stephanus", "born":"罗马帝国<br>罗马", "age":"54 / 57", "tag":"殉教者，死于斩首；庆日 8 月 2 日。亦为东方基督教尊为圣人，庆日相同。" },
{"num":"24", "time":"257 年 8 月 30 日 <br>- 258 年 8 月 6 日<br>（0 年 341 天）", "head":"<img src='./img/pope/pic_024.jpg' class='img-circle' />", "name1":"圣西斯笃二世<br>Papa XYSTUS Secundus", "name2":"西斯笃<br>Sixtus", "born":"罗马帝国<br>希腊雅典", "age":"42 / 43", "tag":"殉教者，死于斩首。亦为东方基督教尊为圣人，庆日 8 月 10 日。" },
{"num":"25", "time":"259 年 7 月 22 日 <br>- 268 年 12 月 26 日<br>（9 年 157 天）", "head":"<img src='./img/pope/pic_025.jpg' class='img-circle' />", "name1":"圣狄约尼削<br>Papa DIONYSIUS", "name2":"狄约尼削<br>Dionysius", "born":"罗马帝国<br>意大利 泰拉诺瓦达西巴里", "age":"59 / 68", "tag":"庆日 12 月 26 日。" },
{"num":"26", "time":"269 年 1 月 5 日 <br>- 274 年 12 月 30 日<br>（5 年 359 天）", "head":"<img src='./img/pope/pic_026.jpg' class='img-circle' />", "name1":"圣斐理斯一世<br>Papa FELIX", "name2":"斐理斯<br>Felix", "born":"罗马帝国<br>罗马", "age":"63 / 68", "tag":"" },
{"num":"27", "time":"275 年 1 月 4 日 <br>- 283 年 12 月 7 日<br>（8 年 337 天）", "head":"<img src='./img/pope/pic_027.jpg' class='img-circle' />", "name1":"圣欧提齐盎<br>Papa EUTYCHIANUS", "name2":"欧提齐盎<br>Eutychianus", "born":"罗马帝国<br>意大利 卢尼", "age":"35 / 43", "tag":"" },
{"num":"28", "time":"283 年 12 月 17 日 <br>- 296 年 4 月 22 日<br>（12 年 127 天）", "head":"<img src='./img/pope/pic_028.jpg' class='img-circle' />", "name1":"圣加犹<br>Papa CAIUS", "name2":"加犹<br>Gaius", "born":"罗马帝国<br>达尔马提亚萨罗纳", "age":"38 / 51", "tag":"殉教者（根据传统）；庆日 4 月 22 日。亦为东方基督教尊为圣人，庆日 8 月 11 日。" },
{"num":"29", "time":"296 年 6 月 30 日 <br>- 304 年 4 月 26 日<br>（7 年 301 天）", "head":"<img src='./img/pope/pic_029.jpg' class='img-circle' />", "name1":"圣玛策林<br>Papa MARCELLINUS", "name2":"玛策林<br>Marcellinus", "born":"罗马帝国<br>罗马", "age":"46 / 54", "tag":"庆日 4 月 26 日。亦为东方基督教尊为圣人，庆日 6 月 7 日。" },
{"num":"30", "time":"308 年 5 月 27 日 <br>- 309 年 1 月 16 日<br>（0 年 234 天）", "head":"<img src='./img/pope/pic_030.jpg' class='img-circle' />", "name1":"圣玛策禄一世<br>Papa MARCELLUS", "name2":"玛策禄<br>Marcellus", "born":"罗马帝国<br>意大利", "age":"53 / 54", "tag":"309 年为罗马皇帝马克森提乌斯放逐。" },
{"num":"31", "time":"309 年 4 月 18 日 <br>- 309 年 8 月 17 日<br>（0 年 121 天）", "head":"<img src='./img/pope/pic_031.jpg' class='img-circle' />", "name1":"圣欧瑟伯<br>Papa EUSEBIUS", "name2":"欧瑟伯<br>Eusebius", "born":"罗马帝国<br>撒丁尼亚", "age":"54 / 54", "tag":"为罗马皇帝马克森提乌斯放逐，并死于途中。" },
{"num":"32", "time":"311 年 7 月 2 日 <br>- 314 年 1 月 10 日<br>（2 年 192 天）", "head":"<img src='./img/pope/pic_032.jpg' class='img-circle' />", "name1":"圣美基德<br>Papa MILTIADES", "name2":"美基德<br>Miltiades", "born":"罗马帝国<br>阿非利加", "age":"41 / 44", "tag":"君士坦丁大帝颁布《米兰敕令》（313 年）停止迫害基督徒后的首位教宗。313 年主持拉特朗公会议。" },
{"num":"33", "time":"314 年 1 月 31 日 <br>- 335 年 12 月 31 日<br>（21 年 334 天）", "head":"<img src='./img/pope/pic_033.jpg' class='img-circle' />", "name1":"圣西尔维斯特一世<br>Papa SILVESTER", "name2":"西尔维斯特<br>Silvester", "born":"罗马帝国<br>圣安杰洛阿斯卡拉", "age":"29 / 50", "tag":"庆日 12 月 31 日。亦为东方基督教尊为圣人，庆日 1 月 2 日。第一次尼西亚公会议（325 年）。在其任内兴建拉特朗圣若望大殿、耶路撒冷圣十字圣殿及老圣伯多禄大殿（英语：Old St. Peter&apos;s Basilica）。《君士坦丁献土》。" },
{"num":"34", "time":"336 年 1 月 18 日 <br>- 336 年 10 月 7 日<br>（0 年 263 天）", "head":"<img src='./img/pope/pic_034.jpg' class='img-circle' />", "name1":"圣马尔谷<br>Papa MARCUS", "name2":"马尔谷<br>Marcus", "born":"罗马帝国<br>罗马", "age":"46 / 46", "tag":"马尔谷组织编纂了其生前殉教者及主教的传记。据传在罗马建立两座教堂，一今圣马尔谷教堂，另一位于今巴尔比纳墓窟。君士坦丁捐献土地并为建筑修建提供帮助。庆日 10 月 7 日。" },
{"num":"35", "time":"337 年 2 月 6 日 <br>- 352 年 4 月 12 日<br>（15 年 66 天）", "head":"<img src='./img/pope/pic_035.jpg' class='img-circle' />", "name1":"圣儒略一世<br>Papa IULIUS", "name2":"儒略<br>Iulius", "born":"罗马帝国<br>罗马", "age":"57 / 72", "tag":"阿里乌教派之争。将基督诞生分为两个节日，主显节为原日期，圣诞节则为 12 月 25 日。" },
{"num":"36", "time":"352 年 5 月 17 日 <br>- 366 年 9 月 24 日<br>（14 年 130 天）", "head":"<img src='./img/pope/pic_036.jpg' class='img-circle' />", "name1":"利伯略<br>Papa LIBERIUS", "name2":"利伯略<br>Liberius", "born":"罗马帝国<br>罗马", "age":"42 / 56", "tag":"首位未被罗马天主教会封圣的教宗。为东方基督教尊为圣人，庆日 8 月 27 日。" },
{"num":"37", "time":"366 年 10 月 1 日 <br>- 384 年 12 月 11 日<br>（18 年 71 天）", "head":"<img src='./img/pope/pic_037.jpg' class='img-circle' />", "name1":"圣达玛稣一世<br>Papa DAMASUS", "name2":"达玛稣<br>Damasus", "born":"罗马帝国<br>琉息太尼亚伊达尼亚", "age":"60 / 78", "tag":"支持哲罗姆起草武加大译本《圣经》。罗马公会议（382）。" },
{"num":"38", "time":"384 年 12 月 17 日 <br>- 399 年 11 月 26 日<br>（14 年 344 天）", "head":"<img src='./img/pope/pic_038.jpg' class='img-circle' />", "name1":"圣西里修<br>Papa SIRICIUS", "name2":"西里修<br>Sicirius", "born":"罗马帝国<br>罗马", "age":"50 / 65", "tag":"其教令为现存最早，内容涉及宗教纪律、施洗、献祭、授任、忏悔和节欲。其 386 年教令（塔拉戈纳的希迈留的书信）首次要求神职人员禁欲。" },
{"num":"39", "time":"399 年 11 月 27 日 <br>- 401 年 12 月 19 日<br>（2 年 22 天）", "head":"<img src='./img/pope/pic_039.jpg' class='img-circle' />", "name1":"圣亚纳大削一世<br>Papa ANASTASIUS", "name2":"亚纳大削<br>Anastasius", "born":"罗马帝国<br>罗马", "age":"59 / 61", "tag":"要求神职人员在诵读福音书时站立并鞠躬。" },
{"num":"40", "time":"401 年 12 月 21 日 <br>- 417 年 3 月 12 日<br>（15 年 81 天）", "head":"<img src='./img/pope/pic_040.jpg' class='img-circle' />", "name1":"圣依诺增爵一世<br>Papa INNOCENTIUS", "name2":"依诺增爵<br>Innocentius", "born":"罗马帝国<br>拉齐奥 - 坎帕尼亚阿尔巴诺", "age":"41 / 57", "tag":"亚拉里克一世带领西哥特人劫掠罗马（410 年）。" },
{"num":"41", "time":"417 年 3 月 18 日 <br>- 418 年 12 月 26 日<br>（1 年 283 天）", "head":"<img src='./img/pope/pic_041.jpg' class='img-circle' />", "name1":"圣佐西穆<br>Papa ZOSIMUS", "name2":"佐西穆 Zosimas", "born":"罗马帝国<br>卢卡尼亚 - 布鲁太梅索拉卡", "age":"47 / 48", "tag":"" },
{"num":"42", "time":"418 年 12 月 28 日 <br>- 422 年 9 月 4 日<br>（3 年 250 天）", "head":"<img src='./img/pope/pic_042.jpg' class='img-circle' />", "name1":"圣波尼法爵一世<br>Papa BONIFACIUS", "name2":"波尼法爵<br>Bonifacius", "born":"罗马帝国<br>罗马", "age":"43 / 47", "tag":"" },
{"num":"43", "time":"422 年 9 月 10 日 <br>- 432 年 7 月 27 日<br>（9 年 321 天）", "head":"<img src='./img/pope/pic_043.jpg' class='img-circle' />", "name1":"圣策肋定一世<br>Papa COELESTINUS", "name2":"策肋定<br>Coelestinus", "born":"罗马帝国<br>坎帕尼亚", "age":"42 / 52", "tag":"亦为东方基督教尊为圣人，庆日 4 月 8 日。" },
{"num":"44", "time":"432 年 7 月 31 日 <br>- 440 年 8 月 18 日<br>（8 年 18 天）", "head":"<img src='./img/pope/pic_044.jpg' class='img-circle' />", "name1":"圣西斯笃三世<br>Papa SIXTUS Tertius", "name2":"西斯笃<br>Sixtus", "born":"罗马帝国<br>罗马", "age":"42 / 50", "tag":"" },
{"num":"45", "time":"440 年 9 月 29 日 <br>- 461 年 11 月 10 日<br>（21 年 42 天）", "head":"<img src='./img/pope/pic_045.jpg' class='img-circle' />", "name1":"圣良一世（大良）<br>Papa LEO MAGNUS", "name2":"良<br>Leo", "born":"罗马帝国<br>伊特鲁里亚", "age":"50 / 71", "tag":"说服阿提拉停止对意大利的入侵。作《大卷》，对迦克墩公会议影响重大，创立位格合一论。庆日 11 月 10 日。亦为东方基督教尊为圣人，庆日 2 月 18 日。" },
{"num":"46", "time":"461 年 11 月 19 日 <br>- 468 年 2 月 29 日<br>（6 年 102 天）", "head":"<img src='./img/pope/pic_046.jpg' class='img-circle' />", "name1":"圣依拉略<br>Papa HILARIUS", "name2":"依拉略<br>Hilarius", "born":"西罗马帝国<br>撒丁尼亚", "age":"46 / 53", "tag":"" },
{"num":"47", "time":"468 年 3 月 3 日 <br>- 483 年 3 月 10 日<br>（15 年 7 天）", "head":"<img src='./img/pope/pic_047.jpg' class='img-circle' />", "name1":"圣辛普利修<br>Papa SIMPLICIUS", "name2":"辛普利修<br>Simplicius", "born":"西罗马帝国<br>蒂沃利", "age":"38 / 53", "tag":"" },
{"num":"48", "time":"483 年 3 月 13 日 <br>- 492 年 3 月 1 日<br>（8 年 354 天）", "head":"<img src='./img/pope/pic_048.jpg' class='img-circle' />", "name1":"圣斐理斯三世（斐理斯二世）<br>Papa FELIX Tertius（Secundus）", "name2":"斐理斯<br>Felice", "born":"西罗马帝国<br>罗马", "age":"43 / 52", "tag":"有时称斐理斯二世。" },
{"num":"49", "time":"492 年 3 月 1 日 <br>- 496 年 11 月 21 日<br>（4 年 265 天）", "head":"<img src='./img/pope/pic_049.jpg' class='img-circle' />", "name1":"圣哲拉修一世<br>Papa GELASIUS", "name2":"哲拉修<br>Gelasius", "born":"西罗马帝国<br>阿非利加卡比利亚", "age":"82 / 86", "tag":"最后一位生于非洲大陆的教宗。首位称 “基督代理人” 的教宗。" },
{"num":"50", "time":"496 年 11 月 24 日 <br>- 498 年 11 月 19 日<br>（1 年 360 天）", "head":"<img src='./img/pope/pic_050.jpg' class='img-circle' />", "name1":"亚纳大削二世<br>Papa ANASTASIUS Secundus", "name2":"亚纳大削<br>Anastasius", "born":"西罗马帝国<br>罗马", "age":"51 / 53", "tag":"试图终止阿卡修教会分裂，但反而导致老楞佐分裂（英语：Antipope Laurentius）。" },
{"num":"51", "time":"498 年 11 月 22 日 <br>- 514 年 7 月 19 日<br>（15 年 239 天）", "head":"<img src='./img/pope/pic_051.jpg' class='img-circle' />", "name1":"圣西玛克<br>Papa SYMMACHUS", "name2":"西玛克<br>Simmaco", "born":"西罗马帝国<br>撒丁尼亚", "age":"38 / 54", "tag":"" },
{"num":"52", "time":"514 年 7 月 20 日 <br>- 523 年 8 月 6 日<br>（9 年 17 天）", "head":"<img src='./img/pope/pic_052.jpg' class='img-circle' />", "name1":"圣贺密斯达<br>Papa HORMISDAS", "name2":"贺密斯达<br>Hormisdas", "born":"西罗马帝国<br>拉齐奥 - 坎帕尼亚弗罗西诺内", "age":"39 / 48", "tag":"教宗西尔勿略之父。阿卡修教会分裂。" },
{"num":"53", "time":"523 年 8 月 13 日 <br>- 526 年 5 月 18 日<br>（2 年 278 天）", "head":"<img src='./img/pope/pic_053.jpg' class='img-circle' />", "name1":"圣若望一世<br>Papa IOANNES", "name2":"乔瓦尼<br>Giovanni", "born":"西罗马帝国<br>伊特鲁里亚锡耶纳", "age":"53 / 56", "tag":"" },
{"num":"54", "time":"526 年 7 月 12 日 <br>- 530 年 9 月 22 日<br>（4 年 72 天）", "head":"<img src='./img/pope/pic_054.jpg' class='img-circle' />", "name1":"圣斐理斯四世（斐理斯三世）<br>Papa FELIX Quartus（Tertius）", "name2":"斐理斯<br>Felice", "born":"奥多亚塞王国<br>萨莫奈", "age":"36 / 40", "tag":"有时称斐理斯三世。兴建圣葛斯默和达弥盎圣殿。" },
{"num":"55", "time":"530 年 9 月 22 日 <br>- 532 年 10 月 17 日<br>（2 年 25 天）", "head":"<img src='./img/pope/pic_055.jpg' class='img-circle' />", "name1":"波尼法爵二世<br>Papa BONIFATIUS Secundus", "name2":"波尼法乔<br>Bonifacio", "born":"奥多亚塞王国<br>罗马", "age":"40 / 42", "tag":"将儒略历纪年法由罗马建城纪年改为基督纪年。" },
{"num":"56", "time":"533 年 1 月 2 日 <br>- 535 年 5 月 8 日<br>（2 年 126 天）", "head":"<img src='./img/pope/pic_056.jpg' class='img-circle' />", "name1":"若望二世<br>Papa IOANNES Secundus", "name2":"墨丘利奥<br>Mercurio", "born":"奥多亚塞王国<br>罗马", "age":"63 / 65", "tag":"首位未使用其本名的教宗，缘为其与罗马神墨丘利同名。" },
{"num":"57", "time":"535 年 5 月 13 日 <br>- 536 年 4 月 22 日<br>（0 年 356 天）", "head":"<img src='./img/pope/pic_057.jpg' class='img-circle' />", "name1":"圣亚加比多一世<br>Papa AGAPITUS", "name2":"亚加比多<br>Agapito", "born":"奥多亚塞王国<br>罗马", "age":"45 / 46", "tag":"庆日 4 月 22 日和 9 月 20 日。亦为东方基督教尊为圣人，庆日 4 月 17 日。" },
{"num":"58", "time":"536 年 6 月 8 日 <br>- 537 年 3 月 11 日<br>（0 年 276 天）", "head":"<img src='./img/pope/pic_058.jpg' class='img-circle' />", "name1":"圣西尔勿略<br>Papa SILVERIUS", "name2":"西尔勿略<br>Silverius", "born":"东哥特王国<br>切卡诺", "age":"36 / 37", "tag":"被放逐。庆日 6 月 20 日。教宗贺密斯达之子。" },
{"num":"59", "time":"537 年 3 月 29 日 <br>- 555 年 6 月 7 日<br>（18 年 70 天）", "head":"<img src='./img/pope/pic_059.jpg' class='img-circle' />", "name1":"维吉吕<br>Papa VIGILIUS", "name2":"维吉吕<br>Vigilius", "born":"奥多亚塞王国<br>罗马", "age":"37 / 55", "tag":"" },
{"num":"60", "time":"556 年 4 月 16 日 <br>- 561 年 3 月 4 日<br>（4 年 322 天）", "head":"<img src='./img/pope/pic_060.jpg' class='img-circle' />", "name1":"柏拉奇一世<br>Papa PELAGIUS", "name2":"柏拉奇<br>Pelagius", "born":"东哥特王国<br>罗马", "age":"51 / 56", "tag":"据传兴建十二宗徒圣殿。" },
{"num":"61", "time":"561 年 7 月 17 日 <br>- 574 年 7 月 13 日<br>（12 年 361 天）", "head":"<img src='./img/pope/pic_061.jpg' class='img-circle' />", "name1":"若望三世<br>Papa IOANNES Tertius", "name2":"加特林<br>Catelinus", "born":"东哥特王国<br>罗马", "age":"41 / 54", "tag":"" },
{"num":"62", "time":"575 年 6 月 2 日 <br>- 579 年 7 月 30 日<br>（4 年 58 天）", "head":"<img src='./img/pope/pic_062.jpg' class='img-circle' />", "name1":"本笃一世<br>Papa BENEDICTUS", "name2":"本笃<br>Benedictus", "born":"东哥特王国<br>罗马", "age":"50 / 54", "tag":"" },
{"num":"63", "time":"579 年 11 月 26 日 <br>- 590 年 2 月 7 日<br>（10 年 73 天）", "head":"<img src='./img/pope/pic_063.jpg' class='img-circle' />", "name1":"柏拉奇二世<br>Papa PELAGIUS Secundus", "name2":"柏拉奇<br>Pelagius", "born":"东哥特王国<br>罗马", "age":"59 / 70", "tag":"下令兴建城外圣老楞佐圣殿。" },
{"num":"64", "time":"590 年 9 月 3 日 <br>- 604 年 3 月 12 日<br>（13 年 191 天）", "head":"<img src='./img/pope/pic_064.jpg' class='img-circle' />", "name1":"圣额我略一世（大额我略）<br>Papa GREGORIUS MAGNUS", "name2":"额我略<br>Gregorio O.S.B.", "born":"东罗马帝国<br>罗马", "age":"50 / 64", "tag":"首位正式使用 “天主众仆之仆” 及“大祭司”头衔的教宗。创额我略圣咏。庆日 9 月 3 日。亦为东方基督教尊为圣人，庆日 3 月 12 日。被称为“基督教会之父”。正教会称其为“对话者圣额我略”。" },
{"num":"65", "time":"604 年 9 月 13 日 <br>- 606 年 2 月 22 日<br>（1 年 162 天）", "head":"<img src='./img/pope/pic_065.jpg' class='img-circle' />", "name1":"沙比尼盎<br>Papa SABINIANUS", "name2":"沙比尼盎<br>Sabinianus", "born":"东罗马帝国<br>布莱拉", "age":"74 / 76", "tag":"" },
{"num":"66", "time":"607 年 2 月 19 日 <br>- 607 年 11 月 12 日<br>（0 年 266 天）", "head":"<img src='./img/pope/pic_066.jpg' class='img-circle' />", "name1":"波尼法爵三世<br>Papa BONIFATIUS Tertius", "name2":"波尼法乔<br>Bonifacio", "born":"东罗马帝国<br>罗马", "age":"67 / 67", "tag":"" },
{"num":"67", "time":"608 年 9 月 15 日 <br>- 615 年 5 月 8 日<br>（6 年 235 天）", "head":"<img src='./img/pope/pic_067.jpg' class='img-circle' />", "name1":"圣波尼法爵四世<br>Papa BONIFATIUS Quartus", "name2":"波尼法乔<br>Bonifacio O.S.B.", "born":"东罗马帝国<br>马尔西卡", "age":"48 / 55", "tag":"首位与其前任使用同名的教宗。本笃会成员。" },
{"num":"68", "time":"615 年 11 月 13 日 <br>- 618 年 11 月 8 日<br>（2 年 360 天）", "head":"<img src='./img/pope/pic_068.jpg' class='img-circle' />", "name1":"圣亚狄达笃一世（狄达笃）<br>Papa ADEODATUS sive DEUSDEDIT", "name2":"亚狄达笃<br>Adeodatus（狄达笃）（Deusdedit）", "born":"东罗马帝国<br>罗马", "age":"45 / 48", "tag":"有时称狄达笃，导致教宗亚狄达笃二世有时被直接称为教宗亚狄达笃（无序数）。首位在教宗文件上使用铅封者，后被称为教宗诏书。" },
{"num":"69", "time":"619 年 12 月 23 日 <br>- 625 年 10 月 25 日<br>（5 年 306 天）", "head":"<img src='./img/pope/pic_069.jpg' class='img-circle' />", "name1":"波尼法爵五世<br>Papa BONIFATIUS Quintus", "name2":"波尼法乔<br>Bonifacio", "born":"东罗马帝国<br>那不勒斯", "age":"44 / 50", "tag":"" },
{"num":"70", "time":"625 年 10 月 27 日 <br>- 638 年 10 月 12 日<br>（12 年 350 天）", "head":"<img src='./img/pope/pic_070.jpg' class='img-circle' />", "name1":"和诺理一世<br>Papa HONORIUS", "name2":"奥诺里奥<br>Onorio", "born":"东罗马帝国<br>坎帕尼亚", "age":"40 / 53", "tag":"为 680 年第三次君士坦丁堡公会议定为异端并除籍。" },
{"num":"71", "time":"640 年 5 月 28 日 <br>- 640 年 8 月 2 日<br>（0 年 66 天）", "head":"<img src='./img/pope/pic_071.jpg' class='img-circle' />", "name1":"塞味利<br>Papa SEVERINUS", "name2":"塞味利诺<br>Severino", "born":"东罗马帝国<br>罗马", "age":"55 / 55", "tag":"" },
{"num":"72", "time":"640 年 12 月 24 日 <br>- 642 年 10 月 12 日<br>（1 年 292 天）", "head":"<img src='./img/pope/pic_072.jpg' class='img-circle' />", "name1":"若望四世<br>Papa IOANNES Quartus", "name2":"乔瓦尼<br>Giovanni", "born":"东罗马帝国<br>达尔马提亚扎达尔", "age":"40 / 42", "tag":"" },
{"num":"73", "time":"642 年 11 月 24 日 <br>- 649 年 5 月 14 日<br>（6 年 171 天）", "head":"<img src='./img/pope/pic_073.jpg' class='img-circle' />", "name1":"戴多禄一世<br>Papa THEODORUS", "name2":"戴多禄<br>Theodoro", "born":"东罗马帝国<br>耶路撒冷", "age":"32 / 39", "tag":"最后一位来自巴勒斯坦地区的教宗。筹备召开 649 年拉特朗公会议，但先一步去世。" },
{"num":"74", "time":"649 年 7 月 5 日 <br>- 655 年 11 月 12 日<br>（6 年 130 天）", "head":"<img src='./img/pope/pic_074.jpg' class='img-circle' />", "name1":"圣玛尔定一世<br>Papa MARTINUS", "name2":"玛尔蒂诺<br>Martino", "born":"东罗马帝国<br>翁布里亚托迪", "age":"59 / 65", "tag":"最后一位被承认为殉教者的教宗。庆日 11 月 12 日。亦为东方基督教尊为圣人，庆日 4 月 14 日。" },
{"num":"75", "time":"654 年 8 月 10 日 <br>- 657 年 6 月 2 日<br>（2 年 296 天）", "head":"<img src='./img/pope/pic_075.jpg' class='img-circle' />", "name1":"圣恩仁一世<br>Papa EUGENIUS", "name2":"尤金尼奥<br>Eugenio", "born":"罗马公国（英语：Duchy of Rome）<br>罗马（名义属东罗马帝国）", "age":"39 / 42", "tag":"" },
{"num":"76", "time":"657 年 7 月 30 日 <br>- 672 年 1 月 27 日<br>（14 年 181 天）", "head":"<img src='./img/pope/pic_076.jpg' class='img-circle' />", "name1":"圣魏德连<br>Papa VITALIANUS", "name2":"维达利亚诺<br>Vitaliano", "born":"罗马公国<br>塞尼（名义属东罗马帝国）", "age":"57 / 72", "tag":"" },
{"num":"77", "time":"672 年 4 月 11 日 <br>- 676 年 6 月 17 日<br>（4 年 67 天）", "head":"<img src='./img/pope/pic_077.jpg' class='img-circle' />", "name1":"亚狄达笃二世<br>Papa ADEODATUS Secundus", "name2":"亚狄达笃<br>Adeodatus O.S.B.", "born":"罗马公国<br>罗马（名义属东罗马帝国）", "age":"51 / 55", "tag":"有时称教宗亚狄达笃（无序数）。本笃会成员。" },
{"num":"78", "time":"676 年 11 月 2 日 <br>- 678 年 4 月 11 日<br>（1 年 160 天）", "head":"<img src='./img/pope/pic_078.jpg' class='img-circle' />", "name1":"多诺<br>Papa DONUS", "name2":"多诺<br>Dono", "born":"罗马公国<br>罗马（名义属东罗马帝国）", "age":"66 / 68", "tag":"" },
{"num":"79", "time":"678 年 6 月 27 日 <br>- 681 年 1 月 10 日<br>（2 年 197 天）", "head":"<img src='./img/pope/pic_079.jpg' class='img-circle' />", "name1":"圣亚佳东<br>Papa AGATHO", "name2":"亚佳东<br>Agatho", "born":"东罗马帝国<br>巴勒莫", "age":"101 / 104", "tag":"亦为东方基督教尊为圣人，庆日 2 月 20 日。" },
{"num":"80", "time":"682 年 8 月 17 日 <br>- 683 年 7 月 3 日<br>（0 年 320 天）", "head":"<img src='./img/pope/pic_080.jpg' class='img-circle' />", "name1":"圣良二世<br>Papa LEO Secundus", "name2":"利奥内<br>Leone", "born":"东罗马帝国<br>阿伊多内", "age":"71 / 72", "tag":"庆日 7 月 3 日。" },
{"num":"81", "time":"684 年 6 月 26 日 <br>- 685 年 5 月 8 日<br>（0 年 316 天）", "head":"<img src='./img/pope/pic_081.jpg' class='img-circle' />", "name1":"圣本笃二世<br>Papa BENEDICTUS Secundus", "name2":"贝内德托<br>Benedetto", "born":"罗马公国<br>罗马（名义属东罗马帝国）", "age":"49 / 50", "tag":"庆日 5 月 7 日。" },
{"num":"82", "time":"685 年 7 月 23 日 <br>- 686 年 8 月 2 日<br>（1 年 10 天）", "head":"<img src='./img/pope/pic_082.jpg' class='img-circle' />", "name1":"若望五世<br>Papa IOANNES Quintus", "name2":"乔瓦尼<br>Giovanni", "born":"东罗马帝国<br>叙利亚", "age":"50 / 51", "tag":"" },
{"num":"83", "time":"686 年 10 月 21 日 <br>- 687 年 9 月 21 日<br>（0 年 335 天）", "head":"<img src='./img/pope/pic_083.jpg' class='img-circle' />", "name1":"哥诺<br>Papa CONON", "name2":"哥诺<br>Conon", "born":"东罗马帝国<br>色雷斯", "age":"56 / 57", "tag":"" },
{"num":"84", "time":"687 年 12 月 15 日 <br>- 701 年 9 月 8 日<br>（13 年 267 天）", "head":"<img src='./img/pope/pic_084.jpg' class='img-circle' />", "name1":"圣色尔爵一世<br>Papa SERGIUS", "name2":"色尔戈里奥<br>Sergorio", "born":"东罗马帝国<br>巴勒莫", "age":"37 / 51", "tag":"开创在弥撒时演唱《羔羊颂》的传统" },
{"num":"85", "time":"701 年 10 月 30 日 <br>- 705 年 1 月 11 日<br>（3 年 73 天）", "head":"<img src='./img/pope/pic_085.jpg' class='img-circle' />", "name1":"若望六世<br>Papa IOANNES Sextus", "name2":"乔瓦尼<br>Giovanni", "born":"东罗马帝国<br>以弗所", "age":"46 / 50", "tag":"" },
{"num":"86", "time":"705 年 3 月 1 日 <br>- 707 年 10 月 18 日<br>（2 年 231 天）", "head":"<img src='./img/pope/pic_086.jpg' class='img-circle' />", "name1":"若望七世<br>Papa IOANNES Septimus", "name2":"乔瓦尼<br>Giovanni", "born":"东罗马帝国<br>卡拉布里亚罗萨诺", "age":"55 / 57", "tag":"第二位与其前任使用同名的教宗。" },
{"num":"87", "time":"708 年 1 月 15 日 <br>- 708 年 2 月 4 日<br>（0 年 20 天）", "head":"<img src='./img/pope/pic_087.jpg' class='img-circle' />", "name1":"西西诺<br>Papa SISINNIUS", "name2":"西西诺<br>Sisinius", "born":"正统哈里发王朝<br>叙利亚", "age":"58 / 58", "tag":"" },
{"num":"88", "time":"708 年 3 月 25 日 <br>- 715 年 4 月 9 日<br>（7 年 15 天）", "head":"<img src='./img/pope/pic_088.jpg' class='img-circle' />", "name1":"君士坦丁<br>Papa COSTANTINUS sive CONSTANTINUS", "name2":"君士坦丁<br>Constantinus", "born":"倭马亚王朝<br>叙利亚", "age":"44 / 51", "tag":"最后一位在任时造访希腊的教宗（直至 2001 年若望保禄二世）。" },
{"num":"89", "time":"715 年 5 月 19 日 <br>- 731 年 2 月 11 日<br>（15 年 268 天）", "head":"<img src='./img/pope/pic_089.jpg' class='img-circle' />", "name1":"圣额我略二世<br>Papa GREGORIUS Secundus", "name2":"额我略<br>Gregorio", "born":"罗马公国<br>罗马（名义属东罗马帝国）", "age":"46 / 62", "tag":"庆日 2 月 11 日。召开罗马公会议（721 年）。" },
{"num":"90", "time":"731 年 3 月 18 日 <br>- 741 年 11 月 28 日<br>（10 年 255 天）", "head":"<img src='./img/pope/pic_090.jpg' class='img-circle' />", "name1":"圣额我略三世<br>Papa GREGORIUS Tertius", "name2":"额我略<br>Gregorio", "born":"倭马亚王朝<br>叙利亚", "age":"41 / 51", "tag":"第三位与其前任使用同名的教宗。前为最后一位生于欧洲外的教宗（直至 2013 年方济各）。" },
{"num":"91", "time":"741 年 12 月 3 日 <br>- 752 年 3 月 22 日<br>（10 年 110 天）", "head":"<img src='./img/pope/pic_091.jpg' class='img-circle' />", "name1":"圣匝加利亚<br>Papa ZACHARIAS", "name2":"匝加利亚<br>Zacharias", "born":"东罗马帝国<br>卡拉布里亚圣塞韦里纳", "age":"62 / 73", "tag":"庆日 3 月 15 日。兴建神庙遗址圣母堂。" },
{"num":"（从未祝圣）", "time":"752 年 3 月 22 日 <br>- 752 年 3 月 25 日<br>（0 年 3 天）（未就任）", "head":"", "name1":"当选教宗斯德望（Stephen II）<br>Papa Electus STEPHANUS（STEPHANUS Secundus）", "name2":"斯德望<br>Stephano", "born":"罗马公国<br>罗马（名义属东罗马帝国）", "age":"52 / 52", "tag":"有时称斯德望二世。当选后三日即过世，未进行主教祝圣仪式。一些教宗列表仍将其包括在内。16 世纪梵蒂冈将其加入名录，但 1961 年将其剔除，教会今不再承认其为教宗。" },
{"num":"92", "time":"752 年 3 月 26 日 <br>- 757 年 4 月 26 日<br>（5 年 31 天）", "head":"<img src='./img/pope/pic_092.jpg' class='img-circle' />", "name1":"斯德望二世（斯德望三世）<br>Papa STEPHANUS Secundus（Tertius）", "name2":"斯德望<br>Stephano", "born":"罗马公国<br>罗马（名义属东罗马帝国）", "age":"38 / 43", "tag":"有时称斯德望三世。丕平献土。保禄一世之弟。" },
{"num":"93", "time":"757 年 5 月 29 日 <br>- 767 年 6 月 28 日<br>（10 年 30 天）", "head":"<img src='./img/pope/pic_093.jpg' class='img-circle' />", "name1":"圣保禄一世<br>Papa PAULUS", "name2":"保罗<br>Paolo", "born":"罗马公国<br>罗马（名义属东罗马帝国）", "age":"57 / 67", "tag":"斯德望二世之兄。" },
{"num":"94", "time":"768 年 8 月 7 日 <br>- 772 年 1 月 24 日<br>（3 年 170 天）", "head":"<img src='./img/pope/pic_094.jpg' class='img-circle' />", "name1":"斯德望三世（斯德望四世）<br>Papa STEPHANUS Tertius（Quartus）", "name2":"斯德望<br>Stefano", "born":"罗马公国<br>锡拉库扎（名义属东罗马帝国）", "age":"45 / 49", "tag":"有时称斯德望四世。拉特朗公会议（769 年）（英语：Lateran Council（769））。" },
{"num":"95", "time":"772 年 2 月 1 日 <br>- 795 年 12 月 26 日<br>（23 年 328 天）", "head":"<img src='./img/pope/pic_095.jpg' class='img-circle' />", "name1":"阿德里安一世<br>Papa HADRIANUS", "name2":"阿德里亚诺<br>Adriano", "born":"罗马公国<br>罗马（名义属东罗马帝国）", "age":"60 / 83", "tag":"" },
{"num":"96", "time":"795 年 12 月 26 日 <br>- 816 年 6 月 12 日<br>（20 年 169 天）", "head":"<img src='./img/pope/pic_096.jpg' class='img-circle' />", "name1":"圣良三世<br>Papa LEO Tertius", "name2":"利奥内<br>Leone", "born":"教皇国<br>罗马", "age":"45 / 66", "tag":"800 年圣诞节加冕查理曼为皇帝，由此开创神圣罗马皇帝一头衔，需由教宗承认。" },
{"num":"97", "time":"816 年 6 月 22 日 <br>- 817 年 1 月 24 日<br>（0 年 216 天）", "head":"<img src='./img/pope/pic_097.jpg' class='img-circle' />", "name1":"斯德望四世（斯德望五世）<br>Papa STEPHANUS Quartus（Quintus）", "name2":"斯德望<br>Stefano", "born":"教皇国<br>罗马", "age":"46 / 47", "tag":"有时称斯德望五世。" },
{"num":"98", "time":"817 年 1 月 25 日 <br>- 824 年 2 月 11 日<br>（7 年 17 天）", "head":"<img src='./img/pope/pic_098.jpg' class='img-circle' />", "name1":"圣巴斯加一世<br>Papa PASCHALIS", "name2":"巴斯加莱<br>Pasquale", "born":"教皇国<br>罗马", "age":"42 / 49", "tag":"传于加理多墓窟（英语：Catacomb of Callixtus）中发现圣则济利亚遗骸。兴建圣则济利亚圣殿及大圣母圣殿（英语：Santa Maria in Domnica）。" },
{"num":"99", "time":"824 年 5 月 8 日 <br>- 827 年 8 月 27 日<br>（3 年 111 天）", "head":"<img src='./img/pope/pic_099.jpg' class='img-circle' />", "name1":"恩仁二世<br>Papa EUGENIUS Secundus", "name2":"尤金尼奥<br>Eugenio", "born":"教皇国<br>罗马", "age":"44 / 47", "tag":"" },
{"num":"100", "time":"827 年 8 月 31 日 <br>- 827 年 10 月 10 日<br>（0 年 40 天）", "head":"<img src='./img/pope/pic_100.jpg' class='img-circle' />", "name1":"瓦伦廷<br>Papa VALENTINUS", "name2":"瓦伦廷诺<br>Valentino", "born":"教皇国<br>罗马", "age":"47 / 47", "tag":"" },
{"num":"101", "time":"827 年 12 月 20 日 <br>- 844 年 1 月 25 日<br>（16 年 36 天）", "head":"<img src='./img/pope/pic_101.jpg' class='img-circle' />", "name1":"额我略四世<br>Papa GREGORIUS Quartus", "name2":"额我略<br>Gregorio", "born":"教皇国<br>罗马", "age":"37 / 54", "tag":"重建圣伯多禄大殿并将额我略一世遗骸迁入。" },
{"num":"102", "time":"844 年 1 月 25 日 <br>- 847 年 1 月 27 日<br>（3 年 2 天）", "head":"<img src='./img/pope/pic_102.jpg' class='img-circle' />", "name1":"色尔爵二世<br>Papa SERGIUS Secundus", "name2":"色尔戈里奥<br>Sergorio", "born":"教皇国<br>罗马", "age":"54 / 57", "tag":"" },
{"num":"103", "time":"847 年 4 月 10 日 <br>- 855 年 7 月 17 日<br>（8 年 98 天）", "head":"<img src='./img/pope/pic_103.jpg' class='img-circle' />", "name1":"圣良四世<br>Papa LEO Quartus", "name2":"利奥<br>Leo O.S.B.", "born":"教皇国<br>罗马", "age":"57 / 65", "tag":"本笃会成员。" },
{"num":"104", "time":"855 年 9 月 29 日 <br>- 858 年 4 月 7 日<br>（2 年 190 天）", "head":"<img src='./img/pope/pic_104.jpg' class='img-circle' />", "name1":"本笃三世<br>Papa BENEDICTUS Tertius", "name2":"贝内德托<br>Benedetto", "born":"教皇国<br>罗马", "age":"45 / 48", "tag":"" },
{"num":"105", "time":"858 年 4 月 24 日 <br>- 867 年 11 月 13 日<br>（9 年 203 天）", "head":"<img src='./img/pope/pic_105.jpg' class='img-circle' />", "name1":"圣尼各老一世（大尼各老）<br>Papa NICOLAUS MAGNUS", "name2":"尼各老<br>Niccolò", "born":"教皇国<br>罗马", "age":"39 / 48", "tag":"鼓励传教活动。" },
{"num":"106", "time":"867 年 12 月 14 日 <br>- 872 年 12 月 14 日<br>（5 年 0 天）", "head":"<img src='./img/pope/pic_106.jpg' class='img-circle' />", "name1":"阿德里安二世<br>Papa HADRIANUS Secundus", "name2":"阿德里亚诺<br>Adriano", "born":"教皇国<br>罗马", "age":"75 / 80", "tag":"" },
{"num":"107", "time":"872 年 12 月 14 日 <br>- 882 年 12 月 16 日<br>（10 年 2 天）", "head":"<img src='./img/pope/pic_107.jpg' class='img-circle' />", "name1":"若望八世<br>Papa IOANNES Octavus", "name2":"乔瓦尼<br>Giovanni", "born":"教皇国<br>罗马", "age":"52 / 62", "tag":"" },
{"num":"108", "time":"882 年 12 月 16 日 <br>- 884 年 5 月 15 日<br>（1 年 151 天）", "head":"<img src='./img/pope/pic_108.jpg' class='img-circle' />", "name1":"玛理诺一世<br>Papa MARINUS", "name2":"玛理诺<br>Marino", "born":"教皇国<br>加莱塞", "age":"52 / 54", "tag":"有时称玛尔定二世。" },
{"num":"109", "time":"884 年 5 月 17 日 <br>- 885 年 9 月 15 日<br>（1 年 121 天）", "head":"<img src='./img/pope/pic_109.jpg' class='img-circle' />", "name1":"圣阿德里安三世<br>Papa HADRIANUS Tertius", "name2":"阿德里亚诺<br>Adriano", "born":"教皇国<br>罗马", "age":"49 / 50", "tag":"" },
{"num":"110", "time":"885 年 9 月 14 日 <br>- 891 年 9 月 4 日<br>（5 年 355 天）", "head":"<img src='./img/pope/pic_110.jpg' class='img-circle' />", "name1":"斯德望五世（斯德望六世）<br>Papa STEPHANUS Quintus（Sextus）", "name2":"斯德望<br>Stefano", "born":"教皇国<br>罗马", "age":"45 / 51", "tag":"有时称斯德望六世。" },
{"num":"111", "time":"891 年 10 月 6 日 <br>- 896 年 4 月 4 日<br>（4 年 181 天）", "head":"<img src='./img/pope/pic_111.jpg' class='img-circle' />", "name1":"福慕<br>Papa FORMOSUS", "name2":"福尔摩索<br>Formoso", "born":"教皇国<br>奥斯提亚", "age":"75 / 80", "tag":"僵尸审判后被戮尸。" },
{"num":"112", "time":"896 年 4 月 11 日 <br>- 896 年 4 月 26 日<br>（0 年 15 天）", "head":"<img src='./img/pope/pic_112.jpg' class='img-circle' />", "name1":"波尼法爵六世<br>Papa BONIFATIUS Sextus", "name2":"波尼法乔<br>Bonifacio", "born":"教皇国<br>罗马", "age":"90 / 90", "tag":"" },
{"num":"113", "time":"896 年 5 月 22 日 <br>- 897 年 8 月 14 日<br>（1 年 84 天）", "head":"<img src='./img/pope/pic_113.jpg' class='img-circle' />", "name1":"斯德望六世（斯德望七世）<br>Papa STEPHANUS Sextus（Septimus）", "name2":"斯德望<br>Stefano", "born":"教皇国<br>罗马", "age":"46 / 47", "tag":"有时称斯德望七世。召开臭名昭著的僵尸审判。" },
{"num":"114", "time":"897 年 8 月 14 日 <br>- 897 年 11 月 14 日<br>（0 年 92 天）", "head":"<img src='./img/pope/pic_114.jpg' class='img-circle' />", "name1":"罗马诺<br>Papa ROMANUS", "name2":"罗马诺<br>Romano", "born":"教皇国<br>加莱塞", "age":"47 / 47", "tag":"" },
{"num":"115", "time":"897 年 11 月 30 日- 897 年 12 月 20 日<br>（0 年 20 天）", "head":"<img src='./img/pope/pic_115.jpg' class='img-circle' />", "name1":"戴多禄二世<br>Papa THEODORUS Secundus", "name2":"戴多禄<br>Theodoro", "born":"教皇国<br>罗马", "age":"57 / 57", "tag":"" },
{"num":"116", "time":"898 年 1 月 18 日 <br>- 900 年 1 月 5 日<br>（1 年 352 天）", "head":"<img src='./img/pope/pic_116.jpg' class='img-circle' />", "name1":"若望九世<br>Papa IOANNES Nonus", "name2":"乔瓦尼<br>Giovanni O.S.B.", "born":"教皇国<br>蒂沃利", "age":"58 / 60", "tag":"本笃会成员。" },
{"num":"117", "time":"900 年 2 月 1 日 <br>- 903 年 7 月 30 日<br>（3 年 179 天）", "head":"<img src='./img/pope/pic_117.jpg' class='img-circle' />", "name1":"本笃四世<br>Papa BENEDICTUS Quartus", "name2":"贝内德托<br>Benedetto", "born":"教皇国<br>罗马", "age":"60 / 63", "tag":"" },
{"num":"118", "time":"903 年 7 月 30 日 <br>- 903 年 11 月 30 日<br>（0 年 123 天）", "head":"<img src='./img/pope/pic_118.jpg' class='img-circle' />", "name1":"良五世<br>Papa LEO Quintus", "name2":"利奥内<br>Leone", "born":"教皇国<br>阿尔代亚", "age":"58 / 58", "tag":"" },
{"num":"119", "time":"904 年 1 月 29 日 <br>- 911 年 4 月 14 日<br>（7 年 75 天）", "head":"<img src='./img/pope/pic_119.jpg' class='img-circle' />", "name1":"色尔爵三世<br>Papa SERGIUS Tertius", "name2":"色尔戈里奥<br>Sergorio", "born":"教皇国<br>罗马", "age":"44 / 51", "tag":"“娼妇政权” 开始。首位加三重冕的教宗。" },
{"num":"120", "time":"911 年 4 月 14 日 <br>- 913 年 5 月 31 日<br>（2 年 47 天）", "head":"<img src='./img/pope/pic_120.jpg' class='img-circle' />", "name1":"亚纳大削三世<br>Papa ANASTASIUS Tertius", "name2":"亚纳大削<br>Anastasio", "born":"教皇国<br>罗马", "age":"46 / 48", "tag":"" },
{"num":"121", "time":"913 年 7 月 7 日 <br>- 914 年 2 月 5 日<br>（0 年 213 天）", "head":"<img src='./img/pope/pic_121.jpg' class='img-circle' />", "name1":"兰铎<br>Papa LANDUS", "name2":"兰铎<br>Lando", "born":"教皇国<br>撒比纳", "age":"48 / 49", "tag":"" },
{"num":"122", "time":"914 年 2 月 28 日 <br>- 928 年 5 月 28 日<br>（14 年 89 天）", "head":"<img src='./img/pope/pic_122.jpg' class='img-circle' />", "name1":"若望十世<br>Papa IOANNES Decimus", "name2":"乔瓦尼<br>Giovanni", "born":"罗马涅<br>托西尼亚诺（名义属教皇国）", "age":"54 / 68", "tag":"" },
{"num":"123", "time":"928 年 5 月 28 日 <br>- 928 年 11 月 30 日<br>（0 年 186 天）", "head":"<img src='./img/pope/pic_123.jpg' class='img-circle' />", "name1":"良六世<br>Papa LEO Sextus", "name2":"利奥内<br>Leone", "born":"教皇国<br>罗马", "age":"48 / 48", "tag":"" },
{"num":"124", "time":"929 年 2 月 3 日 <br>- 931 年 2 月 13 日<br>（2 年 10 天）", "head":"<img src='./img/pope/pic_124.jpg' class='img-circle' />", "name1":"斯德望七世（斯德望八世）<br>Papa STEPHANUS Septimus（Octavus）", "name2":"斯德望<br>Stefano", "born":"教皇国<br>罗马", "age":"49 / 51", "tag":"有时称斯德望八世。" },
{"num":"125", "time":"931 年 3 月 15 日 <br>- 935 年 11 月 30 日<br>（4 年 260 天）", "head":"<img src='./img/pope/pic_125.jpg' class='img-circle' />", "name1":"若望十一世<br>Papa IOANNES Undecimus", "name2":"乔瓦尼<br>Giovanni", "born":"教皇国<br>罗马", "age":"21 / 25", "tag":"" },
{"num":"126", "time":"936 年 1 月 3 日 <br>- 939 年 7 月 13 日<br>（3 年 191 天）", "head":"<img src='./img/pope/pic_126.jpg' class='img-circle' />", "name1":"良七世<br>Papa LEO Septimus", "name2":"利奥内<br>Leone O.S.B.", "born":"教皇国<br>罗马", "age":"41 / 44", "tag":"本笃会成员。" },
{"num":"127", "time":"939 年 7 月 14 日 <br>- 942 年 10 月 30 日<br>（3 年 108 天）", "head":"<img src='./img/pope/pic_127.jpg' class='img-circle' />", "name1":"斯德望八世（斯德望九世）<br>Papa STEPHANUS Octavus（Nonus）", "name2":"斯德望<br>Stefano", "born":"教皇国<br>罗马", "age":"39 / 42", "tag":"有时称斯德望九世。" },
{"num":"128", "time":"942 年 10 月 30 日 <br>- 946 年 5 月 1 日<br>（3 年 183 天）", "head":"<img src='./img/pope/pic_128.jpg' class='img-circle' />", "name1":"玛理诺二世<br>Papa MARINUS Secundus", "name2":"玛理诺<br>Marino", "born":"教皇国<br>罗马", "age":"42 / 46", "tag":"" },
{"num":"129", "time":"946 年 5 月 10 日 <br>- 955 年 11 月 8 日<br>（9 年 182 天）", "head":"<img src='./img/pope/pic_129.jpg' class='img-circle' />", "name1":"亚加比多二世<br>Papa AGAPITUS Secundus", "name2":"亚加比多<br>Agapito", "born":"教皇国<br>罗马", "age":"41 / 50", "tag":"" },
{"num":"130", "time":"955 年 12 月 16 日 <br>- 963 年 12 月 6 日<br>（8 年 356 天）", "head":"<img src='./img/pope/pic_130.jpg' class='img-circle' />", "name1":"若望十二世<br>Papa IOANNES Duodecimus", "name2":"奥塔维亚诺（托斯科洛伯爵）<br>Ottaviano dei Conti di Tuscolo", "born":"教皇国<br>罗马", "age":"18 / 26", "tag":"963 年为神圣罗马皇帝奥托非法罢黜。“娼妇政权” 终结。" },
{"num":"", "time":"963 年 12 月 6 日 <br>- 964 年 2 月 26 日<br>（0 年 82 天）", "head":"", "name1":"（对立教宗良八世）<br>Antipapa LEO Octavus", "name2":"利奥内<br>Leone", "born":"教皇国<br>罗马", "age":"48 / 49", "tag":"963 年为神圣罗马皇帝奥托立为对立教宗，以与若望十二世及本笃五世相抗衡。本笃五世被废黜后正式成为 132 任教宗。" },
{"num":"130", "time":"964 年 2 月 26 日 <br>- 964 年 5 月 14 日<br>（0 年 78 天）", "head":"<img src='./img/pope/pic_131.jpg' class='img-circle' />", "name1":"若望十二世<br>Papa IOANNES Duodecimus", "name2":"奥塔维亚诺（托斯科洛伯爵）<br>Ottaviano dei Conti di Tuscolo", "born":"教皇国<br>罗马", "age":"27 / 27", "tag":"964 年被杀。" },
{"num":"131", "time":"964 年 5 月 22 日 <br>- 964 年 6 月 23 日<br>（0 年 32 天）", "head":"<img src='./img/pope/pic_132.jpg' class='img-circle' />", "name1":"本笃五世<br>Papa BENEDICTUS Quintus", "name2":"贝内德托<br>Benedictto", "born":"教皇国<br>罗马", "age":"49 / 49", "tag":"由罗马人民选举，以同对立教宗良八世相抗衡。964 年被废黜，良八世成为唯一教宗。" },
{"num":"132", "time":"964 年 6 月 23 日 <br>- 965 年 3 月 1 日<br>（0 年 251 天）", "head":"<img src='./img/pope/pic_133.jpg' class='img-circle' />", "name1":"良八世<br>Papa LEO Octavus", "name2":"利奥内<br>Leone", "born":"教皇国<br>罗马", "age":"49 / 50", "tag":"本笃五世被废黜后成为正式教宗。" },
{"num":"133", "time":"965 年 10 月 1 日 <br>- 972 年 9 月 6 日<br>（6 年 341 天）", "head":"<img src='./img/pope/pic_134.jpg' class='img-circle' />", "name1":"若望十三世<br>Papa IOANNES Tertius Decimus", "name2":"乔瓦尼·德·克雷森奇<br>Giovanni dei Crescenzi", "born":"教皇国<br>罗马", "age":"45 / 52", "tag":"" },
{"num":"134", "time":"973 年 1 月 19 日 <br>- 974 年 6 月 8 日<br>（1 年 140 天）", "head":"<img src='./img/pope/pic_135.jpg' class='img-circle' />", "name1":"本笃六世<br>Papa BENEDICTUS Sextus", "name2":"贝内德托<br>Benedictto", "born":"教皇国<br>罗马", "age":"48 / 49", "tag":"被废黜并杀死。" },
{"num":"135", "time":"974 年 9 月 30 日 <br>- 983 年 7 月 10 日<br>（8 年 283 天）", "head":"<img src='./img/pope/pic_136.jpg' class='img-circle' />", "name1":"本笃七世<br>Papa BENEDICTUS Septimus", "name2":"贝内德托<br>Benedictto", "born":"教皇国<br>罗马", "age":"44 / 53", "tag":"" },
{"num":"136", "time":"983 年 11 月 30 日 <br>- 984 年 8 月 20 日<br>（0 年 264 天）", "head":"<img src='./img/pope/pic_137.jpg' class='img-circle' />", "name1":"若望十四世<br>Papa IOANNES Quartus Decimus", "name2":"皮埃特罗·卡内帕诺瓦<br>Pietro Canepanova", "born":"神圣罗马帝国<br>意大利王国 帕维亚", "age":"43 / 44", "tag":"自若望三世以来首位未使用本名的教宗。" },
{"num":"137", "time":"985 年 8 月 20 日 <br>- 996 年 4 月 1 日<br>（10 年 225 天）", "head":"<img src='./img/pope/pic_138.jpg' class='img-circle' />", "name1":"若望十五世<br>Papa IOANNES Quintus Decimus", "name2":"乔瓦尼·迪·加里纳·阿尔巴<br>Giovanni di Gallina Alba", "born":"教皇国<br>罗马", "age":"35 / 46", "tag":"首位正式封圣的教宗。" },
{"num":"138", "time":"996 年 5 月 3 日 <br>- 999 年 2 月 18 日<br>（2 年 291 天）", "head":"<img src='./img/pope/pic_139.jpg' class='img-circle' />", "name1":"额我略五世<br>Papa GREGORIUS Quintus", "name2":"布鲁诺·冯·克恩顿<br>Bruno von Kärnten", "born":"神圣罗马帝国<br>萨克森公国", "age":"24 / 27", "tag":"首位德意志教宗。" },
{"num":"139", "time":"999 年 4 月 2 日 <br>- 1003 年 5 月 12 日<br>（4 年 40 天）", "head":"<img src='./img/pope/pic_140.jpg' class='img-circle' />", "name1":"西尔维斯特二世<br>Papa SILVESTER Secundus", "name2":"热贝尔·奥里拉克<br>Gerbert d&apos;Aurillac", "born":"法国<br>贝里亚克", "age":"53 / 57", "tag":"首位法国教宗。" },
{"num":"140", "time":"1003 年 5 月 16 日 <br>- 1003 年 11 月 6 日<br>（0 年 174 天）", "head":"<img src='./img/pope/pic_141.jpg' class='img-circle' />", "name1":"若望十七世<br>Papa IOANNES Septimus Decimus", "name2":"西科内<br>Siccone", "born":"教皇国<br>罗马", "age":"48 / 48", "tag":"" },
{"num":"141", "time":"1003 年 12 月 25 日 <br>- 1009 年 7 月 18 日<br>（5 年 205 天）", "head":"<img src='./img/pope/pic_142.jpg' class='img-circle' />", "name1":"若望十八世<br>Papa IOANNES Duodevi - cesimus", "name2":"乔瓦尼<br>Giovanni", "born":"教皇国<br>拉帕尼亚诺", "age":"43 / 49", "tag":"" },
{"num":"142", "time":"1009 年 7 月 31 日 <br>- 1012 年 5 月 12 日<br>（2 年 286 天）", "head":"<img src='./img/pope/pic_143.jpg' class='img-circle' />", "name1":"色尔爵四世<br>Papa SERGIUS Quartus", "name2":"皮埃特罗·博卡迪博科<br>O.S.B.", "born":"教皇国<br>罗马", "age":"44 / 47", "tag":"" },
{"num":"143", "time":"1012 年 5 月 18 日 <br>- 1024 年 4 月 9 日<br>（11 年 327 天）", "head":"<img src='./img/pope/pic_144.jpg' class='img-circle' />", "name1":"本笃八世<br>Papa BENEDICTUS Octavus", "name2":"特奥费拉托·德·孔蒂·迪·托斯科洛（英语：Count of Tusculum）<br>Teofilatto dei Conti di Tuscolo", "born":"教皇国<br>罗马", "age":"32 / 44", "tag":"" },
{"num":"144", "time":"1024 年 5 月 14 日 <br>- 1032 年 10 月 6 日<br>（8 年 145 天）", "head":"<img src='./img/pope/pic_145.jpg' class='img-circle' />", "name1":"若望十九世<br>Papa IOANNES Undevices - imus", "name2":"罗马诺·德·孔蒂·迪·托斯科洛（英语：Count of Tusculum）<br>Romano dei Conti di Tuscolo", "born":"教皇国<br>罗马", "age":"49 / 57", "tag":"" },
{"num":"145", "time":"1032 年 10 月 21 日 <br>- 1044 年 12 月 31 日<br>（12 年 71 天）", "head":"<img src='./img/pope/pic_146.jpg' class='img-circle' />", "name1":"本笃九世<br>Papa BENEDICTUS Nonus", "name2":"特奥费拉托·德·孔蒂·迪·托斯科洛（英语：Count of Tusculum）<br>Teofilatto dei Conti di Tuscolo", "born":"教皇国<br>罗马", "age":"20 / 32", "tag":"第一任。" },
{"num":"146", "time":"1045 年 1 月 13 日 <br>- 1045 年 3 月 10 日<br>（0 年 56 天）", "head":"<img src='./img/pope/pic_147.jpg' class='img-circle' />", "name1":"西尔维斯特三世<br>Papa SILVESTER Tertius", "name2":"乔瓦尼·德·克雷森奇·奥塔维亚尼<br>Giovanni dei Crescenzi Ottaviani", "born":"教皇国<br>罗马", "age":"45 / 45", "tag":"选举有效性受到质疑；有时被认为是对立教宗；苏特里公会议后被罢黜。" },
{"num":"147", "time":"1045 年 3 月 10 日 <br>- 1045 年 5 月 1 日<br>（0 年 52 天）", "head":"<img src='./img/pope/pic_148.jpg' class='img-circle' />", "name1":"本笃九世<br>Papa BENEDICTUS Nonus", "name2":"特奥费拉托·德·孔蒂·迪·托斯科洛（英语：Count of Tusculum）<br>Teofilatto dei Conti di Tuscolo", "born":"教皇国<br>罗马", "age":"33 / 33", "tag":"第二任；苏特里公会议后被罢黜。" },
{"num":"148", "time":"1045 年 5 月 5 日 <br>- 1046 年 12 月 20 日<br>（1 年 229 天）", "head":"<img src='./img/pope/pic_149.jpg' class='img-circle' />", "name1":"额我略六世<br>Papa GREGORIUS Sextus", "name2":"乔瓦尼·格拉奇亚诺·皮埃利奥尼<br>Giovanni Graziano Pierleoni", "born":"教皇国<br>罗马", "age":"45 / 46", "tag":"苏特里公会议后被罢黜。" },
{"num":"149", "time":"1046 年 12 月 24 日 <br>- 1047 年 10 月 9 日<br>（0 年 289 天）", "head":"<img src='./img/pope/pic_150.jpg' class='img-circle' />", "name1":"克肋孟二世<br>Papa CLEMENS Secundus", "name2":"苏伊格·冯·莫斯莱本 - 霍尔恩堡<br>Suidger von Morsleben - Hornburg", "born":"神圣罗马帝国<br>萨克森公国", "age":"41 / 42", "tag":"苏特里公会议中为亨利三世任命；加冕亨利三世为神圣罗马皇帝。" },
{"num":"150", "time":"1047 年 11 月 8 日 <br>- 1048 年 7 月 17 日<br>（0 年 252 天）", "head":"<img src='./img/pope/pic_151.jpg' class='img-circle' />", "name1":"本笃九世<br>Papa BENEDICTUS Nonus", "name2":"特奥费拉托·德·孔蒂·迪·托斯科洛（英语：Count of Tusculum）<br>Teofilatto dei Conti di Tuscolo", "born":"教皇国<br>罗马", "age":"35 / 36", "tag":"第三任；被废黜并绝罚。" },
{"num":"151", "time":"1048 年 7 月 16 日 <br>- 1048 年 8 月 9 日<br>（0 年 24 天）", "head":"<img src='./img/pope/pic_152.jpg' class='img-circle' />", "name1":"达玛稣二世<br>Papa DAMASUS Secundus", "name2":"波珀<br>Poppo", "born":"神圣罗马帝国<br>巴伐利亚公国 皮尔德瑙", "age":"48 / 48", "tag":"" },
{"num":"152", "time":"1049 年 2 月 12 日 <br>- 1054 年 4 月 19 日<br>（5 年 66 天）", "head":"<img src='./img/pope/pic_153.jpg' class='img-circle' />", "name1":"圣良九世<br>Papa LEO Nonus", "name2":"布鲁诺·冯·埃格斯海姆 - 达格斯堡<br>Bruno von Egisheim - Dagsburg", "born":"神圣罗马帝国<br>施瓦本公国埃吉桑", "age":"47 / 51", "tag":"1054 年，良九世和君士坦丁堡普世牧首马格尔一世·赛鲁拉留斯（英语：Michael I Cerularius）相互绝罚，东西教会大分裂正式开始。1965 年保禄六世和雅典纳哥拉一世相互取消了这一决定。" },
{"num":"153", "time":"1055 年 4 月 13 日 <br>- 1057 年 7 月 28 日<br>（2 年 106 天）", "head":"<img src='./img/pope/pic_154.jpg' class='img-circle' />", "name1":"维多二世<br>Papa VICTOR Secundus", "name2":"格布哈特二世·冯·卡尔夫 - 多尔恩斯泰因 - 希尔施贝格<br>Gebhard II von Calw - Dollnstein - Hirschberg", "born":"神圣罗马帝国<br>施瓦本公国", "age":"37 / 39", "tag":"" },
{"num":"154", "time":"1057 年 8 月 2 日 <br>- 1058 年 3 月 29 日<br>（0 年 239 天）", "head":"<img src='./img/pope/pic_155.jpg' class='img-circle' />", "name1":"斯德望九世（斯德望十世）<br>Papa STEPHANUS Nonus（Decimus）", "name2":"弗雷德里克·德·洛林<br>Frédéric de Lorraine O.S.B.", "born":"神圣罗马帝国<br>洛林公国", "age":"37 / 38", "tag":"有时称斯德望十世。本笃会成员。" },
{"num":"155", "time":"1058 年 12 月 6 日 <br>- 1061 年 7 月 27 日<br>（2 年 233 天）", "head":"<img src='./img/pope/pic_156.jpg' class='img-circle' />", "name1":"尼各老二世<br>Papa NICOLAUS Secundus", "name2":"热拉尔·德·勃艮<br>Gerard de Bourgogne", "born":"神圣罗马帝国<br>萨伏伊伯国梅屈里", "age":"63 / 66", "tag":"1059 年其诏书《以神之名》指定枢机团为唯一选举教宗机构（教宗选举）。" },
{"num":"156", "time":"1061 年 9 月 30 日 <br>- 1073 年 4 月 21 日<br>（11 年 203 天）", "head":"<img src='./img/pope/pic_157.jpg' class='img-circle' />", "name1":"亚历山大二世<br>Papa ALEXANDER Secundus", "name2":"安塞尔莫·达·巴乔<br>Anselmo da Baggio", "born":"神圣罗马帝国<br>米兰巴乔", "age":"46 / 58", "tag":"1066 年准许诺曼征服英格兰。" },
{"num":"157", "time":"1073 年 4 月 22 日 <br>- 1085 年 5 月 25 日<br>（12 年 33 天）", "head":"<img src='./img/pope/pic_158.jpg' class='img-circle' />", "name1":"圣额我略七世<br>Papa GREGORIUS Septimus", "name2":"伊尔德布兰多·阿尔多布兰德斯基·蒂·索亚纳<br>Ildebrando Aldobrandeschi di Soana O.S.B.", "born":"神圣罗马帝国<br>托斯卡纳侯爵领（英语：March of Tuscany）索瓦纳", "age":"48 / 60", "tag":"推动额我略改革（英语：Gregorian Reform）。限定教宗一词仅能为罗马主教使用。本笃会成员。同亨利四世进行政治斗争，导致后者被迫前往卡诺莎求恕（1077 年）。" },
{"num":"158", "time":"1086 年 5 月 24 日 <br>- 1087 年 9 月 16 日<br>（1 年 115 天）", "head":"<img src='./img/pope/pic_159.jpg' class='img-circle' />", "name1":"真福维多三世<br>Papa VICTOR Tertius", "name2":"达乌费里奥·德西德里奥<br>Dauferio o Desiderio O.S.B.", "born":"贝内文托公国<br>贝内文托", "age":"60 / 61", "tag":"本笃会成员。召开贝内文托公会议（1087 年），谴责平信徒授衣礼。" },
{"num":"159", "time":"1088 年 3 月 12 日 <br>- 1099 年 7 月 29 日<br>（11 年 139 天）", "head":"<img src='./img/pope/pic_160.jpg' class='img-circle' />", "name1":"真福乌尔巴诺二世<br>Papa URBANUS Secundus", "name2":"奥顿·德·拉热里<br>Odon de Lagery O.S.B.", "born":"法国<br>香槟伯国 马恩河畔沙蒂隆", "age":"46 / 57", "tag":"推动并发起了第一次十字军东征。本笃会成员。" },
{"num":"160", "time":"1099 年 8 月 13 日 <br>- 1118 年 1 月 21 日<br>（18 年 161 天）", "head":"<img src='./img/pope/pic_161.jpg' class='img-circle' />", "name1":"巴斯加二世<br>Papa PASCHALIS Secundus", "name2":"拉涅罗·拉涅利<br>Raniero Ranieri O.S.B.", "born":"神圣罗马帝国<br>托斯卡纳侯爵领（英语：March of Tuscany）布列达", "age":"49 / 68", "tag":"本笃会成员。下令兴建四殉道堂。" },
{"num":"161", "time":"1118 年 1 月 24 日 <br>- 1119 年 1 月 29 日<br>（1 年 5 天）", "head":"<img src='./img/pope/pic_162.jpg' class='img-circle' />", "name1":"哲拉修二世<br>Papa GELASIUS Secundus", "name2":"乔瓦尼·德·加埃塔尼<br>Giovanni dei Caetani O.S.B.", "born":"加埃塔公国（英语：Duchy of Gaeta）<br>加埃塔", "age":"57 / 58", "tag":"本笃会成员。" },
{"num":"162", "time":"1119 年 2 月 2 日 <br>- 1124 年 12 月 13 日<br>（5 年 315 天）", "head":"<img src='./img/pope/pic_163.jpg' class='img-circle' />", "name1":"嘉礼二世<br>Papa CALLISTUS Secundus", "name2":"居伊·德·勃艮（勃艮第伯爵）<br>Gui de Bourgogne, Comte de Bourgogne", "born":"弗朗什 - 孔泰<br>坎热", "age":"59 / 64", "tag":"召开第一次拉特朗公会议（英语：First Council of the Lateran）（1123 年）。" },
{"num":"163", "time":"1124 年 12 月 21 日 <br>- 1130 年 2 月 13 日<br>（5 年 54 天）", "head":"<img src='./img/pope/pic_164.jpg' class='img-circle' />", "name1":"和诺理二世<br>Papa HONORIUS Secundus", "name2":"兰伯托·斯卡纳贝奇·达·菲亚尼亚诺<br>Lamberto Scannabecchi da Fiagnano, Can.Reg.", "born":"神圣罗马帝国<br>罗马涅菲亚尼亚诺", "age":"64 / 70", "tag":"律修会修士（圣雷诺圣母修会）。1128 年批准圣殿骑士团成立。" },
{"num":"164", "time":"1130 年 2 月 14 日 <br>- 1143 年 9 月 24 日<br>（13 年 222 天）", "head":"<img src='./img/pope/pic_165.jpg' class='img-circle' />", "name1":"依诺增爵二世<br>Papa INNOCENTIUS Secundus", "name2":"格里格里奥·帕帕雷斯基<br>Gregorio Papareschi, Can.Reg.", "born":"教皇国<br>罗马", "age":"48 / 61", "tag":"律修会修士（拉特朗修会）。1139 年召开第二次拉特朗公会议（英语：Second Council of the Lateran）。" },
{"num":"165", "time":"1143 年 9 月 26 日 <br>- 1144 年 3 月 8 日<br>（0 年 164 天）", "head":"<img src='./img/pope/pic_166.jpg' class='img-circle' />", "name1":"策肋定二世<br>Papa COELESTINUS Secundus", "name2":"古伊多·达·卡斯泰洛<br>Guido da Castello", "born":"教皇国<br>卡斯泰洛城", "age":"58 / 59", "tag":"" },
{"num":"166", "time":"1144 年 3 月 12 日 <br>- 1145 年 2 月 15 日<br>（0 年 340 天）", "head":"<img src='./img/pope/pic_167.jpg' class='img-circle' />", "name1":"路基约二世<br>Papa LUCIUS Secundus", "name2":"格拉尔多·卡奇亚内米奇·达洛尔索<br>Gherardo Caccianemici dall&apos;Orso, Can.Reg.", "born":"神圣罗马帝国<br>博洛尼亚", "age":"49 / 50", "tag":"律修会修士（卢卡圣弗雷迪亚诺修会）。" },
{"num":"167", "time":"1145 年 2 月 15 日 <br>- 1153 年 7 月 8 日<br>（8 年 143 天）", "head":"<img src='./img/pope/pic_168.jpg' class='img-circle' />", "name1":"真福恩仁三世<br>Papa EUGENIUS Tertius", "name2":"皮埃特罗·德·帕加内利·迪·蒙泰马尼奥<br>Pietro dei Paganelli di Montemagno, O.Cist.", "born":"比萨共和国<br>蒙泰马尼奥", "age":"44 / 52", "tag":"熙笃会成员。宣布第二次十字军东征开始。" },
{"num":"168", "time":"1153 年 7 月 12 日 <br>- 1154 年 12 月 3 日<br>（1 年 144 天）", "head":"<img src='./img/pope/pic_169.jpg' class='img-circle' />", "name1":"亚纳大削四世<br>Papa ANASTASIUS Quartus", "name2":"科拉多·德拉·苏布拉<br>Corrado della Suburra", "born":"教皇国<br>罗马", "age":"80 / 81", "tag":"" },
{"num":"169", "time":"1154 年 12 月 4 日 <br>- 1159 年 9 月 1 日<br>（4 年 271 天）", "head":"<img src='./img/pope/pic_170.jpg' class='img-circle' />", "name1":"阿德里安四世<br>Papa HADRIANUS Quartus", "name2":"尼古拉斯·布雷斯庇尔<br>Nicholas Breakspear, Can.Reg.", "born":"英格兰王国<br>赫特福德郡阿博茨朗利", "age":"54 / 59", "tag":"首位和唯一一位英格兰教宗；将爱尔兰划归予英格兰国王亨利二世。律修会修士（圣鲁弗斯修会）。" },
{"num":"170", "time":"1159 年 9 月 7 日 <br>- 1181 年 8 月 30 日<br>（21 年 357 天）", "head":"<img src='./img/pope/pic_171.jpg' class='img-circle' />", "name1":"亚历山大三世<br>Papa ALEXANDER Tertius", "name2":"罗兰多·班迪内利<br>Rolando Bandinelli", "born":"锡耶纳共和国（英语：Republic of Siena）<br>锡耶纳", "age":"59 / 81", "tag":"1179 年召开第三次拉特朗公会议。" },
{"num":"171", "time":"1181 年 9 月 1 日 <br>- 1185 年 11 月 25 日<br>（4 年 85 天）", "head":"<img src='./img/pope/pic_172.jpg' class='img-circle' />", "name1":"路基约三世<br>Papa LUCIUS Tertius", "name2":"乌巴尔多·阿卢奇尼奥利<br>Ubaldo Allucignoli", "born":"神圣罗马帝国<br>托斯卡纳侯爵领（英语：March of Tuscany）卢卡", "age":"84 / 88", "tag":"" },
{"num":"172", "time":"1185 年 11 月 25 日 <br>- 1187 年 10 月 20 日<br>（1 年 329 天）", "head":"<img src='./img/pope/pic_173.jpg' class='img-circle' />", "name1":"乌尔巴诺三世<br>Papa URBANUS Tertius", "name2":"乌贝尔托·克里维利<br>Uberto Crivelli", "born":"神圣罗马帝国<br>库焦诺", "age":"65 / 67", "tag":"" },
{"num":"173", "time":"1187 年 10 月 21 日 <br>- 1187 年 12 月 17 日<br>（0 年 57 天）", "head":"<img src='./img/pope/pic_174.jpg' class='img-circle' />", "name1":"额我略八世<br>Papa GREGORIUS Octavus", "name2":"阿尔贝托·德·莫拉<br>Alberto de Morra, Can.Reg.", "born":"教皇国<br>贝内文托", "age":"79 / 79", "tag":"律修会修士。推动第三次十字军东征。" },
{"num":"174", "time":"1187 年 12 月 19 日 <br>- 1191 年 3 月 20 日<br>（3 年 91 天）", "head":"<img src='./img/pope/pic_175.jpg' class='img-circle' />", "name1":"克肋孟三世<br>Papa CLEMENS Tertius", "name2":"保罗·斯科拉里<br>Paolo Scolari", "born":"教皇国<br>罗马", "age":"57 / 61", "tag":"" },
{"num":"175<br><img src='./img/pope/pic_176.png' />", "time":"1191 年 3 月 30 日 <br>- 1198 年 1 月 8 日<br>（6 年 284 天）", "head":"<img src='./img/pope/pic_177.jpg' class='img-circle' />", "name1":"策肋定三世<br>Papa COELESTINUS Tertius", "name2":"贾琴托·博波内·奥尔西尼<br>Giacinto Bobone Orsini", "born":"教皇国<br>罗马", "age":"85 / 92", "tag":"批准条顿骑士团建立。" },
{"num":"176<br><img src='./img/pope/pic_178.png' />", "time":"1198 年 1 月 8 日 <br>- 1216 年 7 月 16 日<br>（18 年 190 天）", "head":"<img src='./img/pope/pic_179.jpg' class='img-circle' />", "name1":"依诺增爵三世<br>Papa INNOCENTIUS Tertius", "name2":"洛塔里奥·德·孔蒂·迪·塞尼<br>Lotario dei Conti di Segni", "born":"教皇国<br>加维纳诺", "age":"37 / 55", "tag":"1215 年召开第四次拉特朗公会议。推动第四次十字军东征开始，但在意识到其领袖无意征服圣地而仅欲劫掠基督教城市后与十字军决裂，并威胁绝罚其参与者。" },
{"num":"177", "time":"1216 年 7 月 18 日 <br>- 1227 年 3 月 18 日<br>（10 年 243 天）", "head":"<img src='./img/pope/pic_180.jpg' class='img-circle' />", "name1":"和诺理三世<br>Papa HONORIUS Tertius", "name2":"森奇奥·萨维利<br>Cencio Savelli", "born":"教皇国<br>罗马", "age":"-", "tag":"发动第五次十字军东征。批准建立数个修道会。" },
{"num":"178<br><img src='./img/pope/pic_181.png' />", "time":"1227 年 3 月 19 日 <br>- 1241 年 8 月 22 日<br>（14 年 156 天）", "head":"<img src='./img/pope/pic_182.jpg' class='img-circle' />", "name1":"额我略九世<br>Papa GREGORIUS Nonus", "name2":"乌格里奥·德·孔蒂·迪·塞尼<br>Ugolino dei Conti di Segni O.F.S", "born":"教皇国<br>阿纳尼", "age":"-", "tag":"封圣匈牙利的伊丽莎白（英语：Elisabeth of Hungary）（1235 年）。发动法国宗教审判及北方十字军入侵。" },
{"num":"179<br><img src='./img/pope/pic_183.png' />", "time":"1241 年 10 月 25 日 <br>- 1241 年 11 月 10 日<br>（0 年 16 天）", "head":"<img src='./img/pope/pic_184.jpg' class='img-circle' />", "name1":"策肋定四世<br>Papa COELESTINUS Quartus", "name2":"格弗雷多·卡斯蒂利奥尼<br>Goffredo Castiglioni", "born":"神圣罗马帝国<br>意大利 米兰", "age":"-", "tag":"加冕前过世。" },
{"num":"180", "time":"1243 年 6 月 25 日 <br>- 1254 年 12 月 7 日<br>（11 年 165 天）", "head":"<img src='./img/pope/pic_185.jpg' class='img-circle' />", "name1":"依诺增爵四世<br>Papa INNOCENTIUS Quartus", "name2":"西尼巴尔多·菲斯奇<br>Sinibaldo Fieschi", "born":"神圣罗马帝国<br>热那亚共和国 热那亚", "age":"-", "tag":"召开第一次里昂公会议（1245 年）。颁布《根绝（英语：Ad extirpanda）》教令（1252 年），允许以苛刑对待异端者。" },
{"num":"181<br><img src='./img/pope/pic_186.png' />", "time":"1254 年 12 月 12 日 <br>- 1261 年 5 月 25 日<br>（6 年 164 天）", "head":"<img src='./img/pope/pic_187.jpg' class='img-circle' />", "name1":"亚历山大四世<br>Papa ALEXANDER Quartus", "name2":"里纳尔多·德·孔蒂·迪·延内<br>Rinaldo dei Conti di Jenne", "born":"教皇国<br>延内", "age":"-", "tag":"在法国建立宗教裁判所。" },
{"num":"182<br><img src='./img/pope/pic_188.png' />", "time":"1261 年 8 月 29 日 <br>- 1264 年 10 月 2 日<br>（3 年 34 天）", "head":"<img src='./img/pope/pic_189.jpg' class='img-circle' />", "name1":"乌尔巴诺四世<br>Papa URBANUS Quartus", "name2":"雅克·潘塔利翁<br>Jacques Pantaléon", "born":"法国<br>香槟伯国 特鲁瓦", "age":"-", "tag":"创立基督圣体圣血节（1264 年）。" },
{"num":"183<br><img src='./img/pope/pic_190.png' />", "time":"1265 年 2 月 5 日 <br>- 1268 年 11 月 29 日<br>（3 年 298 天）", "head":"", "name1":"克肋孟四世<br>Papa CLEMENS Quartus", "name2":"居伊·福库瓦<br>Gui Faucoi", "born":"法国<br>隆格多克圣吉莱", "age":"-", "tag":"" },
{"num":"—", "time":"1268 年 11 月 29 日 <br>- 1271 年 9 月 1 日", "head":"", "name1":"空位期", "name2":"由于枢机无法达成一致，在近三年内没有选举产生教宗。", "born":"", "age":"", "tag":"" },
{"num":"184<br><img src='./img/pope/pic_191.png' />", "time":"1271 年 9 月 1 日 <br>- 1276 年 1 月 10 日<br>（4 年 131 天）", "head":"<img src='./img/pope/pic_192.jpg' class='img-circle' />", "name1":"真福额我略十世<br>Papa GREGORIUS Decimus", "name2":"蒂巴尔多·维斯孔蒂<br>Tebaldo Visconti, O.F.S（英语：Secular Franciscan Order）", "born":"神圣罗马帝国<br>意大利 皮亚琴察", "age":"-", "tag":"召开第二次里昂公会议（英语：Second Council of Lyons）（1274 年）。制订选举规则，至 20 世纪前均适行。" },
{"num":"185<br><img src='./img/pope/pic_193.png' />", "time":"1276 年 1 月 21 日 <br>- 1276 年 6 月 22 日<br>（0 年 153 天）", "head":"<img src='./img/pope/pic_194.jpg' class='img-circle' />", "name1":"真福依诺增爵五世<br>Papa INNOCENTIUS Quintus", "name2":"皮埃尔·德·塔朗泰斯<br>Pierre de Tarentaise, O.P.", "born":"神圣罗马帝国<br>萨伏伊伯国", "age":"-", "tag":"道明会成员。" },
{"num":"186", "time":"1276 年 7 月 11 日 <br>- 1276 年 8 月 18 日<br>（0 年 38 天）", "head":"<img src='./img/pope/pic_195.jpg' class='img-circle' />", "name1":"阿德里安五世<br>Papa HADRIANUS Quintus", "name2":"奥托布欧诺·菲斯奇<br>Ottobuono Fieschi", "born":"神圣罗马帝国<br>热那亚共和国 热那亚", "age":"-", "tag":"废除额我略十世制订的选举规则。" },
{"num":"187<br><img src='./img/pope/pic_196.png' />", "time":"1276 年 9 月 8 日 <br>- 1277 年 5 月 20 日<br>（0 年 254 天）", "head":"<img src='./img/pope/pic_197.jpg' class='img-circle' />", "name1":"若望二十一世<br>Papa IOANNES Vicesimus Primus", "name2":"佩德罗·若里昂 Pedro Juli<br>o", "born":"葡萄牙<br>里斯本", "age":"-", "tag":"由于在 13 世纪对于名若望的教宗计数混淆，史上从无若望二十世。第二十位使用若望一名的教宗当选时试图更正并不存在的计数错误，选名若望二十一世。" },
{"num":"188<br><img src='./img/pope/pic_198.png' />", "time":"1277 年 11 月 25 日 <br>- 1280 年 8 月 22 日<br>（2 年 271 天）", "head":"<img src='./img/pope/pic_199.jpg' class='img-circle' />", "name1":"尼各老三世<br>Papa NICOLAUS Tertius", "name2":"乔瓦尼·加埃塔诺·奥尔西尼<br>Giovanni Gaetano Orsini", "born":"教皇国<br>罗马", "age":"-", "tag":"" },
{"num":"189<br><img src='./img/pope/pic_200.png' />", "time":"1281 年 2 月 22 日 <br>- 1285 年 3 月 28 日<br>（4 年 34 天）", "head":"<img src='./img/pope/pic_201.jpg' class='img-circle' />", "name1":"玛尔定四世<br>Papa MARTINUS Quartus", "name2":"西蒙·德·布里翁<br>Simon de Brion", "born":"法国<br>图赖讷梅皮西昂", "age":"-", "tag":"" },
{"num":"190", "time":"1285 年 4 月 2 日 <br>- 1287 年 4 月 3 日<br>（2 年 1 天）", "head":"<img src='./img/pope/pic_202.jpg' class='img-circle' />", "name1":"和诺理四世<br>Papa HONORIUS Quartus", "name2":"贾科莫·萨维利<br>Giacomo Savelli", "born":"教皇国<br>罗马", "age":"-", "tag":"" },
{"num":"191<br><img src='./img/pope/pic_203.png' />", "time":"1288 年 2 月 22 日 <br>- 1292 年 4 月 4 日<br>（4 年 42 天）", "head":"<img src='./img/pope/pic_204.jpg' class='img-circle' />", "name1":"尼各老四世<br>Papa NICOLAUS Quartus", "name2":"吉罗拉莫·马斯奇<br>Girolamo Masci, O.F.M.", "born":"教皇国<br>利夏诺", "age":"-", "tag":"方济各会成员。" },
{"num":"—", "time":"1292 年 4 月 4 日 <br>- 1294 年 7 月 5 日", "head":"", "name1":"空位期", "name2":"由于枢机无法达成一致，在二年内没有选举产生教宗。", "born":"", "age":"", "tag":"" },
{"num":"192<br><img src='./img/pope/pic_205.png' />", "time":"1294 年 7 月 5 日 <br>- 1294 年 12 月 13 日<br>（0 年 161 天）", "head":"<img src='./img/pope/pic_206.jpg' class='img-circle' />", "name1":"圣策肋定五世<br>Papa COELESTINUS Quintus", "name2":"皮埃特罗·安杰莱里奥<br>Pietro Angelerio, O.S.B.", "born":"西西里王国<br>圣安杰洛利莫桑奥", "age":"-", "tag":"主动去职。本笃会成员。创立策肋定会。" },
{"num":"193<br><img src='./img/pope/pic_207.png' />", "time":"1294 年 12 月 24 日 <br>- 1303 年 10 月 11 日<br>（8 年 291 天）", "head":"<img src='./img/pope/pic_208.jpg' class='img-circle' />", "name1":"波尼法爵八世<br>Papa BONIFATIUS Octavus", "name2":"贝内德托·加埃塔尼<br>Benedetto Caetani", "born":"教皇国<br>阿纳尼", "age":"-", "tag":"1300 年正式创立禧年传统。颁布《一圣教谕（英语：Unam sanctam）》（1302 年），宣称教宗权力至上，将其推至历史顶峰。" },
{"num":"194<br><img src='./img/pope/pic_209.png' />", "time":"1303 年 10 月 22 日 <br>- 1304 年 7 月 7 日<br>（0 年 259 天）", "head":"<img src='./img/pope/pic_210.jpg' class='img-circle' />", "name1":"真福本笃十一世<br>Papa BENEDICTUS Undecimus", "name2":"尼科洛·博卡西尼<br>Niccolò Boccasini, O.P.", "born":"神圣罗马帝国<br>特雷维索", "age":"-", "tag":"道明会成员。废除波尼法爵八世的《一圣教谕》。" },
{"num":"195<br><img src='./img/pope/pic_211.png' />", "time":"1305 年 6 月 5 日 <br>- 1314 年 4 月 20 日<br>（8 年 319 天）", "head":"<img src='./img/pope/pic_212.jpg' class='img-circle' />", "name1":"克肋孟五世<br>Papa CLEMENS Quintus", "name2":"贝尔特朗·德·哥特<br>Bertrand de Got", "born":"法国<br>加斯科涅维朗德罗", "age":"-", "tag":"阿维尼翁教廷。召开维埃纳公会议（1311 - 1312）。在法国国王腓力四世要挟下开始对圣殿骑士团的迫害。" },
{"num":"—", "time":"1314 年 4 月 20 日 <br>- 1316 年 8 月 7 日", "head":"", "name1":"空位期", "name2":"由于枢机无法达成一致，在二年内没有选举产生教宗。", "born":"", "age":"", "tag":"" },
{"num":"196<br><img src='./img/pope/pic_213.png' />", "time":"1316 年 8 月 7 日 <br>- 1334 年 12 月 4 日<br>（18 年 119 天）", "head":"<img src='./img/pope/pic_214.jpg' class='img-circle' />", "name1":"若望二十二世<br>Papa IOANNES Vicesimus Secundus", "name2":"雅克·德·尤斯<br>Jacques d&apos;Euse", "born":"法国<br>屈埃尔西卡奥尔", "age":"-", "tag":"阿维尼翁教廷。其 “荣福直观” 论受到争议。" },
{"num":"197<br><img src='./img/pope/pic_215.png' />", "time":"1334 年 12 月 20 日 <br>- 1342 年 4 月 25 日<br>（7 年 126 天）", "head":"<img src='./img/pope/pic_216.jpg' class='img-circle' />", "name1":"本笃十二世<br>Papa BENEDICTUS Duodecimus", "name2":"雅克·福尼尔<br>Jacques Fournier, O.Cist.", "born":"法国<br>富瓦萨韦尔丹", "age":"-", "tag":"阿维尼翁教廷。熙笃会成员。颁布宗座宪令《本笃圣令》（1336 年）。" },
{"num":"198<br><img src='./img/pope/pic_217.png' />", "time":"1342 年 5 月 7 日 <br>- 1352 年 12 月 6 日<br>（10 年 213 天）", "head":"<img src='./img/pope/pic_218.jpg' class='img-circle' />", "name1":"克肋孟六世<br>Papa CLEMENS Sextus", "name2":"皮埃尔·罗热<br>Pierre Roger, O.S.B.", "born":"法国<br>利穆赞莫蒙", "age":"-", "tag":"阿维尼翁教廷。黑死病盛行期间在任，赦免死于黑死病者的罪。" },
{"num":"199<br><img src='./img/pope/pic_219.png' />", "time":"1352 年 12 月 18 日 <br>- 1362 年 9 月 12 日<br>（9 年 268 天）", "head":"<img src='./img/pope/pic_220.jpg' class='img-circle' />", "name1":"依诺增爵六世<br>Papa INNOCENTIUS Sextus", "name2":"埃蒂安·奥贝尔<br>Étienne Aubert", "born":"法国<br>利穆赞勒蒙", "age":"-", "tag":"阿维尼翁教廷。推动了《布雷蒂尼条约（英语：Treaty of Brétigny）》（1360 年）的签署。" },
{"num":"200<br><img src='./img/pope/pic_221.png' />", "time":"1362 年 9 月 28 日 <br>- 1370 年 12 月 19 日<br>（8 年 82 天）", "head":"<img src='./img/pope/pic_222.jpg' class='img-circle' />", "name1":"真福乌尔巴诺五世<br>Papa URBANUS Quintus", "name2":"纪尧姆·格里莫尔<br>Guillaume（de）Grimoard, O.S.B.", "born":"法国<br>朗格多克格里扎克", "age":"-", "tag":"阿维尼翁教廷。本笃会成员。推动教育改革并对欧洲和亚洲各地进行传教活动。亚历山大十字军及萨伏伊十字军。" },
{"num":"201", "time":"1370 年 12 月 30 日 <br>- 1378 年 3 月 27 日<br>（7 年 87 天）", "head":"<img src='./img/pope/pic_223.jpg' class='img-circle' />", "name1":"额我略十一世<br>Papa GREGORIUS Undecimus", "name2":"皮埃尔·罗热·德·博福尔<br>Pierre Roger de Beaufort", "born":"法国<br>利穆赞莫蒙", "age":"-", "tag":"阿维尼翁教廷；后返回罗马。最后一位法国教宗。" },
{"num":"202<br><img src='./img/pope/pic_224.png' />", "time":"1378 年 4 月 8 日 <br>- 1389 年 10 月 15 日<br>（11 年 190 天）", "head":"<img src='./img/pope/pic_225.jpg' class='img-circle' />", "name1":"乌尔巴诺六世<br>Papa URBANUS Sextus", "name2":"巴托罗缪·普里尼亚诺<br>Bartolomeo Prignano", "born":"那不勒斯王国<br>那不勒斯", "age":"-", "tag":"天主教会大分裂。最后一位未经枢机会议选举产生的教宗。" },
{"num":"203<br><img src='./img/pope/pic_226.png' />", "time":"1389 年 11 月 2 日 <br>- 1404 年 10 月 1 日<br>（14 年 334 天）", "head":"<img src='./img/pope/pic_227.jpg' class='img-circle' />", "name1":"波尼法爵九世<br>Papa BONIFATIUS Nonus", "name2":"皮埃特罗·托马切利<br>Pietro Tomacelli", "born":"那不勒斯王国<br>那不勒斯", "age":"-", "tag":"天主教会大分裂。" },
{"num":"204<br><img src='./img/pope/pic_228.png' />", "time":"1404 年 10 月 17 日 <br>- 1406 年 11 月 6 日<br>（2 年 20 天）", "head":"<img src='./img/pope/pic_229.jpg' class='img-circle' />", "name1":"依诺增爵七世<br>Papa INNOCENTIUS Septimus", "name2":"科西莫·詹蒂莱·米利奥拉蒂<br>Cosimo Gentile Migliorati", "born":"那不勒斯王国<br>苏尔莫纳", "age":"65 / 67", "tag":"天主教会大分裂。" },
{"num":"205<br><img src='./img/pope/pic_230.png' />", "time":"1406 年 11 月 30 日 <br>- 1415 年 7 月 4 日<br>（8 年 216 天）", "head":"<img src='./img/pope/pic_231.jpg' class='img-circle' />", "name1":"额我略十二世<br>Papa GREGORIUS Duodecimus", "name2":"安杰洛·科雷尔<br>Angelo Correr", "born":"威尼斯共和国<br>威尼斯", "age":"80 / 91", "tag":"天主教会大分裂；在由其政敌若望二十三世召开的康士坦斯大公会议中宣布退位。至本笃十六世前为最后一位退位教宗。" },
{"num":"—", "time":"1415 年 7 月 4 日 <br>- 1417 年 11 月 11 日", "head":"", "name1":"空位期", "name2":"两年内未选举产生教宗。", "born":"", "age":"", "tag":"" },
{"num":"206<br><img src='./img/pope/pic_232.png' />", "time":"1417 年 11 月 11 日 <br>- 1431 年 2 月 20 日<br>（13 年 101 天）", "head":"<img src='./img/pope/pic_233.jpg' class='img-circle' />", "name1":"玛尔定五世<br>Papa MARTINUS Quintus", "name2":"奥多内·科隆纳<br>Oddone Colonna, O.F.S（英语：Secular Franciscan Order）", "born":"教皇国<br>杰纳扎诺", "age":"48 / 62", "tag":"召开巴塞尔公会议（1431 年）。胡斯战争开始。" },
{"num":"207<br><img src='./img/pope/pic_234.png' />", "time":"1431 年 3 月 3 日 <br>- 1447 年 2 月 23 日<br>（15 年 357 天）", "head":"<img src='./img/pope/pic_235.jpg' class='img-circle' />", "name1":"恩仁四世<br>Papa EUGENIUS Quartus", "name2":"加布里埃尔·孔杜尔莫<br>Gabriele Condulmer, O.S.A.", "born":"威尼斯共和国<br>威尼斯", "age":"47 / 63", "tag":"奥斯定会成员。玛尔定五世之侄。1433 年于罗马加冕西吉斯蒙德为神圣罗马皇帝。将巴塞尔公会议会址转移至费拉拉，但由于腺鼠疫盛行，会址再次转移至佛罗伦萨。" },
{"num":"208<br><img src='./img/pope/pic_236.png' />", "time":"1447 年 3 月 6 日 <br>- 1455 年 3 月 24 日<br>（8 年 18 天）", "head":"<img src='./img/pope/pic_237.jpg' class='img-circle' />", "name1":"尼各老五世<br>Papa NICOLAUS Quintus", "name2":"托马索·帕伦图切利<br>Tommaso Parentucelli, O.P.", "born":"热那亚共和国<br>萨尔扎纳", "age":"49 / 57", "tag":"道明会成员。1450 年庆禧年。1452 年于罗马加冕腓特烈三世为神圣罗马皇帝。1452 年颁布诏书授权葡萄牙征服和奴役撒拉森人及异教徒。于梵蒂冈建立梵蒂冈宗座图书馆。" },
{"num":"209<br><img src='./img/pope/pic_238.png' />", "time":"1455 年 4 月 8 日 <br>- 1458 年 8 月 6 日<br>（3 年 120 天）", "head":"<img src='./img/pope/pic_239.jpg' class='img-circle' />", "name1":"嘉礼三世<br>Papa CALLISTUS Tertius", "name2":"阿尔方索·德·博尔哈<br>Alfonso de Borja", "born":"阿拉贡联合王国<br>巴伦西亚王国 哈蒂瓦", "age":"76 / 79", "tag":"首位西班牙教宗。宣布 8 月 6 日为显圣节。下令重审圣女贞德，并最终宣布其无罪。" },
{"num":"210<br><img src='./img/pope/pic_240.png' />", "time":"1458 年 8 月 19 日 <br>- 1464 年 8 月 15 日<br>（5 年 362 天）", "head":"<img src='./img/pope/pic_241.jpg' class='img-circle' />", "name1":"庇护二世<br>Papa PIUS Secundus", "name2":"埃尼亚·西尔维奥·皮科罗米尼<br>Enea Silvio Piccolomini", "born":"锡耶纳共和国<br>科西尼亚诺", "age":"52 / 58", "tag":"1462 年于锡耶纳附近建立皮恩扎。对圣经进行阐释。" },
{"num":"211<br><img src='./img/pope/pic_242.png' />", "time":"1464 年 8 月 30 日 <br>- 1471 年 7 月 26 日<br>（6 年 330 天）", "head":"<img src='./img/pope/pic_243.jpg' class='img-circle' />", "name1":"保禄二世<br>Papa PAULUS Secundus", "name2":"皮埃特罗·巴尔博<br>Pietro Barbo", "born":"威尼斯共和国<br>威尼斯", "age":"47 / 54", "tag":"恩仁四世之侄。兴建圣马可宫（今威尼斯宫）。准许印刷术引入教皇国。" },
{"num":"212<br><img src='./img/pope/pic_244.png' />", "time":"1471 年 8 月 9 日 <br>- 1484 年 8 月 12 日<br>（13 年 3 天）", "head":"<img src='./img/pope/pic_245.jpg' class='img-circle' />", "name1":"西斯笃四世<br>Papa XYSTUS Quartus", "name2":"弗朗切斯科·德拉罗韦雷<br>Francesco della Rovere, O.F.M.", "born":"热那亚共和国<br>切莱利古雷", "age":"57 / 70", "tag":"方济各会成员。发起兴建西斯廷礼拜堂。在西班牙君主伊莎贝拉和斐迪南要求下准许宗教裁判所对犹太裔基督徒进行迫害。" },
{"num":"213<br><img src='./img/pope/pic_246.png' />", "time":"1484 年 8 月 29 日 <br>- 1492 年 7 月 25 日<br>（7 年 331 天）", "head":"<img src='./img/pope/pic_247.jpg' class='img-circle' />", "name1":"依诺增爵八世<br>Papa INNOCENTIUS Octavus", "name2":"乔瓦尼·巴蒂斯塔·西博<br>Giovanni Battista Cybo", "born":"热那亚共和国<br>热那亚", "age":"51 / 59", "tag":"任命托马斯·德·托尔克马达。颁布《深忧之求》诏书（1484 年），支持对巫术进行打击。" },
{"num":"214<br><img src='./img/pope/pic_248.png' />", "time":"1492 年 8 月 11 日 <br>- 1503 年 8 月 18 日<br>（11 年 7 天）", "head":"<img src='./img/pope/pic_249.jpg' class='img-circle' />", "name1":"亚历山大六世<br>Papa ALEXANDER Sextus", "name2":"罗德里克·利安索尔·德·博尔哈<br>Roderic Llançol i de Borja", "born":"阿拉贡联合王国<br>巴伦西亚王国哈蒂瓦", "age":"61 / 72", "tag":"加里多三世之侄；切萨雷·波吉亚及卢克雷齐亚·波吉亚之父。1493 年颁布诏书，将欧洲外的世界分归予西班牙和葡萄牙。由于对立教宗的存在，无亚历山大五世一说。" },
{"num":"215", "time":"1503 年 9 月 22 日 <br>- 1503 年 10 月 18 日<br>（0 年 26 天）", "head":"<img src='./img/pope/pic_250.jpg' class='img-circle' />", "name1":"庇护三世<br>Papa PIUS Tertius", "name2":"弗朗切斯科·托德斯奇尼·皮科罗米尼<br>Francesco Todeschini Piccolomini", "born":"锡耶纳共和国<br>锡耶纳", "age":"64 / 64", "tag":"庇护二世之侄。于锡耶纳主教座堂侧建立皮科罗米尼图书馆。" },
{"num":"216", "time":"1503 年 10 月 31 日 <br>- 1513 年 2 月 21 日<br>（9 年 113 天）", "head":"<img src='./img/pope/pic_251.jpg' class='img-circle' />", "name1":"儒略二世<br>Papa IULIUS Secundus", "name2":"朱利亚诺·德拉羅維雷<br>Giuliano della Rovere, O.F.M.", "born":"热那亚共和国<br>阿尔比索拉", "age":"59 / 69", "tag":"西斯笃四世之侄。1512 年召开第五次拉特朗公会议（英语：Fifth Council of the Lateran）。首位完全掌控教皇国的教宗。雇佣米开朗基罗于西斯廷礼拜堂大厅天顶进行创作。提出圣伯多禄大殿重建方案。" },
{"num":"217<br><img src='./img/pope/pic_252.png' />", "time":"1513 年 3 月 9 日 <br>- 1521 年 12 月 1 日<br>（8 年 267 天）", "head":"<img src='./img/pope/pic_253.jpg' class='img-circle' />", "name1":"良十世<br>Papa LEO Decimus", "name2":"乔瓦尼·迪·洛伦佐·德·美第奇<br>Giovanni di Lorenzo de&apos; Medici", "born":"佛罗伦萨共和国<br>佛罗伦萨", "age":"37 / 45", "tag":"洛伦佐·德·美第奇之子。宣告第五次拉特朗公会议结束。向资助圣伯多禄大殿者颁发赎罪券。1521 年绝罚马丁·路德。将西班牙宗教裁判拓展至葡萄牙。" },
{"num":"218<br><img src='./img/pope/pic_254.png' />", "time":"1522 年 1 月 9 日 <br>- 1523 年 9 月 14 日<br>（1 年 248 天）", "head":"<img src='./img/pope/pic_255.jpg' class='img-circle' />", "name1":"阿德里安六世<br>Papa HADRIANUS Sextus", "name2":"阿德里安·弗洛里岑·博延斯<br>Adriaan Floriszoon Boeyens", "born":"神圣罗马帝国<br>乌德勒支采邑大主教区乌德勒支", "age":"62 / 64", "tag":"唯一来自荷兰教宗，最后一位非意大利裔教宗，直至 1978 年若望保禄二世。神圣罗马皇帝查理五世之师。使用其本名为其教名。" },
{"num":"219", "time":"1523 年 11 月 26 日 <br>- 1534 年 9 月 25 日<br>（10 年 303 天）", "head":"<img src='./img/pope/pic_256.jpg' class='img-circle' />", "name1":"克肋孟七世<br>Papa CLEMENS Septimus", "name2":"朱利奥·迪·朱利亚诺·德·美第奇<br>Giulio di Giuliano de&apos; Medici", "born":"佛罗伦萨共和国<br>佛罗伦萨", "age":"45 / 56", "tag":"良十世表弟。1527 年罗马受帝国军队劫掠。禁止亨利八世离婚。1530 年于博洛尼亚加冕查理五世为神圣罗马皇帝。其侄女许配予未来法国国王亨利二世。雇佣米开朗基罗于西斯廷礼拜堂作《最后的审判》。" },
{"num":"220<br><img src='./img/pope/pic_257.png' />", "time":"1534 年 10 月 13 日 <br>- 1549 年 11 月 10 日<br>（15 年 28 天）", "head":"<img src='./img/pope/pic_258.jpg' class='img-circle' />", "name1":"保禄三世<br>Papa PAULUS Tertius", "name2":"亚历山德罗·法尔内塞<br>Alessandro Farnese", "born":"教皇国<br>拉齐奥 卡尼诺", "age":"66 / 81", "tag":"1545 年召开特伦托公会议。其私生子成为首任帕尔马公爵。第二次绝罚亨利八世。1546 年任命米开朗基罗统筹圣伯多禄大殿的建设。" },
{"num":"221<br><img src='./img/pope/pic_259.png' />", "time":"1550 年 2 月 7 日 <br>- 1555 年 3 月 29 日<br>（5 年 50 天）", "head":"<img src='./img/pope/pic_260.jpg' class='img-circle' />", "name1":"儒略三世<br>Papa IULIUS Tertius", "name2":"乔瓦尼·玛利亚·奇奥奇·德尔·蒙蒂<br>Giovanni Maria Ciocchi del Monte", "born":"教皇国<br>拉齐奥 罗马", "age":"62 / 67", "tag":"1552 年建立宗座德国学院（英语：Collegium Germanicum et Hungaricum）。重新召开特伦托公会议。伊诺森佐丑闻（英语：Innocenzo Ciocchi del Monte）。" },
{"num":"222<br><img src='./img/pope/pic_261.png' />", "time":"1555 年 4 月 9 日 <br>- 1555 年 5 月 1 日<br>（0 年 22 天）", "head":"<img src='./img/pope/pic_262.jpg' class='img-circle' />", "name1":"玛策禄二世<br>Papa MARCELLUS Secundus", "name2":"马切洛·切尔维尼·德里·斯帕诺奇<br>Marcello Cervini degli Spannochi", "born":"教皇国<br>马尔凯蒙泰法诺", "age":"53 / 53", "tag":"最后一位使用其本名的教宗。《教宗玛策禄弥撒》为其所作。" },
{"num":"223<br><img src='./img/pope/pic_263.png' />", "time":"1555 年 5 月 23 日 <br>- 1559 年 8 月 18 日<br>（4 年 87 天）", "head":"<img src='./img/pope/pic_264.jpg' class='img-circle' />", "name1":"保禄四世<br>Papa PAULUS Quartus", "name2":"乔瓦尼·皮埃特罗·卡拉法<br>Giovanni Pietro Carafa, C.R.（英语：Theatines）", "born":"那不勒斯王国<br>坎帕尼亚卡普里利亚伊尔皮纳", "age":"78 / 83", "tag":"戴蒂尼会（英语：Theatines）成员。1555 年颁布诏书建立罗马犹太区（英语：Roman Ghetto）。颁布《禁书目录》。下令米开朗基罗重作《最后的审判》以使其显得体。" },
{"num":"224", "time":"1559 年 12 月 26 日 <br>- 1565 年 12 月 9 日<br>（5 年 348 天）", "head":"<img src='./img/pope/pic_265.jpg' class='img-circle' />", "name1":"庇护四世<br>Papa PIUS Quartus", "name2":"乔瓦尼·安杰洛·美第奇<br>Giovanni Angelo Medici", "born":"米兰公国<br>米兰", "age":"60 / 66", "tag":"重新召开并终结特伦托公会议。下令提升罗马供水质量。颁布《脱利腾信经》。" },
{"num":"225<br><img src='./img/pope/pic_266.png' />", "time":"1566 年 1 月 7 日 <br>- 1572 年 5 月 1 日<br>（6 年 115 天）", "head":"<img src='./img/pope/pic_267.jpg' class='img-circle' />", "name1":"圣庇护五世<br>Papa PIUS Quintus", "name2":"安东尼奥·吉斯利耶里<br>Antonio Ghislieri, O.P.", "born":"米兰公国<br>皮埃蒙特博斯科", "age":"61 / 68", "tag":"道明会成员。1570 年绝罚伊丽莎白一世。勒班陀战役（1571 年）。颁布《玫瑰经》。颁布 1570 年《罗马弥撒》。" },
{"num":"226<br><img src='./img/pope/pic_268.png' />", "time":"1572 年 5 月 13 日 <br>- 1585 年 4 月 10 日<br>（12 年 332 天）", "head":"<img src='./img/pope/pic_269.jpg' class='img-circle' />", "name1":"额我略十三世<br>Papa GREGORIUS Tertius Decimus", "name2":"乌戈·本孔帕尼<br>Ugo Boncompagni", "born":"教皇国<br>艾米利亚 - 罗马涅博洛尼亚", "age":"70 / 83", "tag":"1582 年改革历法。于梵蒂冈兴建额我略礼拜堂。1579 年以圣母无染原罪祝福菲律宾群岛。同亚洲国家加强外交联系。" },
{"num":"227<br><img src='./img/pope/pic_270.png' />", "time":"1585 年 4 月 24 日 <br>- 1590 年 8 月 27 日<br>（5 年 125 天）", "head":"<img src='./img/pope/pic_271.jpg' class='img-circle' />", "name1":"西斯笃五世<br>Papa XYSTUS Quintus", "name2":"费利切·佩雷蒂·迪·蒙塔尔托<br>Felice Peretti di Montalto, O.F.M. Conv.", "born":"教皇国<br>马尔凯格罗塔姆马雷", "age":"63 / 68", "tag":"方济各住院会成员。对罗马特级宗座圣殿进行修缮。限定枢机团人数不超 70 人。罗马教廷人数翻番。" },
{"num":"228<br><img src='./img/pope/pic_272.png' />", "time":"1590 年 9 月 15 日 <br>- 1590 年 9 月 27 日<br>（0 年 12 天）", "head":"<img src='./img/pope/pic_273.jpg' class='img-circle' />", "name1":"乌尔巴诺七世<br>Papa URBANUS Septimus", "name2":"乔瓦尼·巴蒂斯塔·卡斯塔尼亚<br>Giovanni Battista Castagna", "born":"教皇国<br>拉齐奥 罗马", "age":"69 / 69", "tag":"任期最短的教宗，加冕前过世。订立世界首个禁烟令，禁止在所有教堂内及附近吸烟。" },
{"num":"229<br><img src='./img/pope/pic_274.png' />", "time":"1590 年 12 月 5 日 <br>- 1591 年 10 月 16 日<br>（0 年 315 天）", "head":"<img src='./img/pope/pic_275.jpg' class='img-circle' />", "name1":"额我略十四世<br>Papa GREGORIUS Quartus Decimus", "name2":"尼科洛·斯冯德拉蒂<br>Niccolò Sfondrati", "born":"米兰公国<br>伦巴第索姆马隆巴尔多", "age":"55 / 56", "tag":"1591 年修改西斯笃五世宪令，由此在婴儿开始活动后堕胎才应受处罚。宣布对教宗选举进行赌博者进行绝罚。" },
{"num":"230<br><img src='./img/pope/pic_276.png' />", "time":"1591 年 10 月 29 日 <br>- 1591 年 12 月 30 日<br>（0 年 62 天）", "head":"<img src='./img/pope/pic_277.jpg' class='img-circle' />", "name1":"依诺增爵九世<br>Papa INNOCENTIUS Nonus", "name2":"乔瓦尼·安东尼奥·法齐内蒂<br>Giovanni Antonio Facchinetti", "born":"教皇国<br>艾米利亚 - 罗马涅博洛尼亚", "age":"72 / 72", "tag":"在法国宗教战争中支持费利佩二世及天主教同盟。禁止让渡教会财产。" },
{"num":"231<br><img src='./img/pope/pic_278.png' />", "time":"1592 年 1 月 30 日 <br>- 1605 年 3 月 3 日<br>（13 年 32 天）", "head":"<img src='./img/pope/pic_279.jpg' class='img-circle' />", "name1":"克肋孟八世<br>Papa CLEMENS Octavus", "name2":"伊波利托·阿尔多布兰迪尼<br>Ippolito Aldobrandini", "born":"教皇国<br>马尔凯法诺", "age":"55 / 69", "tag":"1595 年联络各欧洲基督教国家同奥斯曼帝国开战。召开神圣救援会议，调停道明会及耶稣会间对于自由意志及神圣恩典的理念冲突。" },
{"num":"232", "time":"1605 年 4 月 1 日 <br>- 1605 年 4 月 27 日<br>（0 年 26 天）", "head":"<img src='./img/pope/pic_280.jpg' class='img-circle' />", "name1":"良十一世<br>Papa LEO Undecimus", "name2":"亚历桑德罗·奥塔维亚诺·德·美第奇<br>Alessandro Ottaviano de&apos; Medici", "born":"佛罗伦萨公国<br>佛罗伦萨", "age":"69 / 69", "tag":"良十世之侄。由于其任期之短被称为 “闪电教宗”（Papa Lampo）。" },
{"num":"233<br><img src='./img/pope/pic_281.png' />", "time":"1605 年 5 月 16 日 <br>- 1621 年 1 月 28 日<br>（15 年 257 天）", "head":"<img src='./img/pope/pic_282.jpg' class='img-circle' />", "name1":"保禄五世<br>Papa PAULUS Quintus", "name2":"卡米洛·博尔盖塞<br>Camillo Borghese", "born":"教皇国<br>拉齐奥 罗马", "age":"52 / 68", "tag":"兴建工程诸多，包括圣伯多禄大殿正面。1605 年建立圣灵银行。修复图拉真水道桥（英语：Aqua Traiana）。" },
{"num":"234<br><img src='./img/pope/pic_283.png' />", "time":"1621 年 2 月 9 日 <br>- 1623 年 7 月 8 日<br>（2 年 149 天）", "head":"<img src='./img/pope/pic_284.jpg' class='img-circle' />", "name1":"额我略十五世<br>Papa GREGORIUS Quintus Decimus", "name2":"亚历桑德罗·卢多维西<br>Alessandro Ludovisi", "born":"教皇国<br>艾米利亚 - 罗马涅博洛尼亚", "age":"67 / 69", "tag":"1622 年建立传布信仰圣部。1621 年颁布诏书，宣布教宗选举应采用秘密投票。1623 年颁布宪令，批判魔术师和巫师。" },
{"num":"235<br><img src='./img/pope/pic_285.png' />", "time":"1623 年 8 月 6 日 <br>- 1644 年 7 月 29 日<br>（20 年 358 天）", "head":"<img src='./img/pope/pic_286.jpg' class='img-circle' />", "name1":"乌尔巴诺八世<br>Papa URBANUS Octavus", "name2":"马菲奥·巴贝里尼<br>Maffeo Barberini", "born":"托斯卡纳大公国<br>佛罗伦萨", "age":"55 / 76", "tag":"对伽利略·伽利莱进行审判。最后一位通过武力扩张领土的教宗。1624 年颁布诏书，宣布在圣地吸食烟草者将受绝罚。" },
{"num":"236<br><img src='./img/pope/pic_287.png' />", "time":"1644 年 9 月 15 日 <br>- 1655 年 1 月 7 日<br>（10 年 114 天）", "head":"<img src='./img/pope/pic_288.jpg' class='img-circle' />", "name1":"依诺增爵十世<br>Papa INNOCENTIUS Decimus", "name2":"乔瓦尼·巴蒂斯塔·潘菲利<br>Giovanni Battista Pamphilj", "born":"教皇国<br>拉齐奥 罗马", "age":"70 / 80", "tag":"亚历山大六世玄孙之子。于纳沃纳广场建立四河喷泉。1653 年颁布宪令，称杨森主义五点主张为异端。" },
{"num":"237<br><img src='./img/pope/pic_289.png' />", "time":"1655 年 4 月 7 日 <br>- 1667 年 5 月 22 日<br>（12 年 45 天）", "head":"<img src='./img/pope/pic_290.jpg' class='img-circle' />", "name1":"亚历山大七世<br>Papa ALEXANDER Septimus", "name2":"法比奥·基吉<br>Fabio Chigi", "born":"托斯卡纳大公国<br>锡耶纳", "age":"56 / 68", "tag":"保禄五世侄孙。筹建圣伯多禄广场。颁布宪令，订立圣母无染原罪原则。" },
{"num":"238<br><img src='./img/pope/pic_291.png' />", "time":"1667 年 6 月 20 日 <br>- 1669 年 12 月 9 日<br>（2 年 172 天）", "head":"<img src='./img/pope/pic_292.jpg' class='img-circle' />", "name1":"克肋孟九世<br>Papa CLEMENS Nonus", "name2":"朱利奥·罗斯皮利奥西<br>Giulio Rospigliosi", "born":"托斯卡纳大公国<br>皮斯托亚", "age":"67 / 69", "tag":"筹建圣伯多禄广场列柱。1668 年参与推动《亚琛和约》签署。" },
{"num":"239<br><img src='./img/pope/pic_293.png' />", "time":"1670 年 4 月 29 日 <br>- 1676 年 7 月 22 日<br>（6 年 84 天）", "head":"<img src='./img/pope/pic_294.jpg' class='img-circle' />", "name1":"克肋孟十世<br>Papa CLEMENS Decimus", "name2":"埃米利奥·博纳文图拉·阿尔蒂耶里<br>Emilio Bonaventura Altieri", "born":"教皇国<br>拉齐奥 罗马", "age":"79 / 86", "tag":"1671 年封圣利马的圣罗撒（英语：Rose of Lima），为首位来自美洲的圣人。在圣天使城堡桥上安置十尊天使像，于圣伯多禄广场安置两个喷泉。颁布关于自陵墓中迁移圣髑的规定。" },
{"num":"240<br><img src='./img/pope/pic_295.png' />", "time":"1676 年 9 月 21 日 <br>- 1689 年 8 月 12 日<br>（12 年 325 天）", "head":"<img src='./img/pope/pic_296.jpg' class='img-circle' />", "name1":"真福依诺增爵十一世<br>Papa INNOCENTIUS Undecimus", "name2":"贝内德托·奥德斯卡尔奇<br>Benedetto Odescalchi", "born":"米兰公国<br>伦巴第科莫", "age":"65 / 78", "tag":"建立神圣联盟。1684 年将圣母圣名节定为全教会性节日。在口授经文教理方面做出重要贡献。" },
{"num":"241<br><img src='./img/pope/pic_297.png' />", "time":"1689 年 10 月 6 日 <br>- 1691 年 2 月 1 日<br>（1 年 118 天）", "head":"<img src='./img/pope/pic_298.jpg' class='img-circle' />", "name1":"亚历山大八世<br>Papa ALEXANDER Octavus", "name2":"皮埃特罗·维托·奥托博尼<br>Pietro Vito Ottoboni", "born":"威尼斯共和国<br>威尼斯", "age":"79 / 80", "tag":"1690 年谴责所谓 “哲学罪”。" },
{"num":"242<br><img src='./img/pope/pic_299.png' />", "time":"1691 年 7 月 12 日 <br>- 1700 年 9 月 27 日<br>（9 年 77 天）", "head":"<img src='./img/pope/pic_300.jpg' class='img-circle' />", "name1":"依诺增爵十二世<br>Papa INNOCENTIUS Duodecimus", "name2":"安东尼奥·皮尼亚特利<br>Antonio Pignatelli, O.F.S（英语：Secular Franciscan Order）", "born":"那不勒斯王国<br>普利亚斯皮纳佐拉", "age":"76 / 85", "tag":"1692 年颁布《宜乎罗马教宗》诏书，谴责裙带关系。建立多个慈善及教育机构。" },
{"num":"243<br><img src='./img/pope/pic_301.png' />", "time":"1700 年 11 月 23 日 <br>- 1721 年 3 月 19 日<br>（20 年 116 天）", "head":"<img src='./img/pope/pic_302.jpg' class='img-circle' />", "name1":"克肋孟十一世<br>Papa CLEMENS Undecimus", "name2":"乔瓦尼·弗朗切斯科·阿尔巴尼<br>Giovanni Francesco Albani", "born":"教皇国<br>马尔凯乌尔比诺", "age":"51 / 71", "tag":"中国礼仪之争。首次对殉道者墓窟进行考古发掘。圣母无染原罪节成为全教会节日。" },
{"num":"244<br><img src='./img/pope/pic_303.png' />", "time":"1721 年 5 月 8 日 <br>- 1724 年 3 月 7 日<br>（2 年 304 天）", "head":"<img src='./img/pope/pic_304.jpg' class='img-circle' />", "name1":"依诺增爵十三世<br>Papa INNOCENTIUS Tertius Decimus", "name2":"米开朗基罗·德·孔蒂<br>Michelangelo dei Conti", "born":"教皇国<br>拉齐奥 波利", "age":"65 / 68", "tag":"禁止耶稣会在中国进行传教活动，并禁止耶稣会进一步招纳成员。" },
{"num":"245<br><img src='./img/pope/pic_305.png' />", "time":"1724 年 5 月 29 日 <br>- 1730 年 2 月 21 日<br>（5 年 268 天）", "head":"<img src='./img/pope/pic_306.jpg' class='img-circle' />", "name1":"神仆本笃十三世<br>Papa BENEDICTUS Tertius Decimus", "name2":"皮埃特罗·弗朗切斯科·奥尔西尼<br>Pietro Francesco Orsini, O.P.", "born":"那不勒斯王国<br>巴里普利亚格拉维纳", "age":"75 / 81", "tag":"道明会成员。最后一名来自奥尔西尼家族的教宗。原先由于先前的对立教宗而称本笃十四世，但后改为本笃十三世。废除乌尔巴诺七世和八世对烟草的禁令。" },
{"num":"246<br><img src='./img/pope/pic_307.png' />", "time":"1730 年 7 月 12 日 <br>- 1740 年 2 月 6 日<br>（9 年 209 天）", "head":"<img src='./img/pope/pic_308.jpg' class='img-circle' />", "name1":"克肋孟十二世<br>Papa CLEMENS Duodecimus", "name2":"洛伦佐·科尔西尼<br>Lorenzo Corsini, O.F.S（英语：Secular Franciscan Order）", "born":"托斯卡纳大公国<br>佛罗伦萨", "age":"78 / 87", "tag":"1735 年拉特朗圣若望大殿正面完工。1732 年筹建特雷维喷泉。1738 年颁布《著名使徒》诏书，谴责共济会。最老当选的教宗，直至 2005 年本笃十六世当选。" },
{"num":"247<br><img src='./img/pope/pic_309.png' />", "time":"1740 年 8 月 17 日 <br>- 1758 年 5 月 3 日<br>（17 年 259 天）", "head":"<img src='./img/pope/pic_310.jpg' class='img-circle' />", "name1":"本笃十四世<br>Papa BENEDICTUS Quartus Decimus", "name2":"普罗斯佩罗·洛伦佐·兰伯蒂尼<br>Prospero Lorenzo Lambertini", "born":"教皇国<br>博洛尼亚", "age":"65 / 83", "tag":"对司铎教育系统及圣人历进行改革。特雷维喷泉建成。肯定了托马斯·阿奎那的思想。建立艺术、宗教及科学院。" },
{"num":"248<br><img src='./img/pope/pic_311.png' />", "time":"1758 年 7 月 6 日 <br>- 1769 年 2 月 2 日<br>（10 年 211 天）", "head":"<img src='./img/pope/pic_312.jpg' class='img-circle' />", "name1":"克肋孟十三世<br>Papa CLEMENS Tertius Decimus", "name2":"卡洛·德拉·托雷·迪·伦佐尼科<br>Carlo della Torre di Rezzonico", "born":"威尼斯共和国<br>威尼斯", "age":"65 / 75", "tag":"在梵蒂冈裸体男像上置遮羞布。1765 年颁布诏书支持耶稣会。" },
{"num":"249<br><img src='./img/pope/pic_313.png' />", "time":"1769 年 5 月 19 日 <br>- 1774 年 9 月 22 日<br>（5 年 126 天）", "head":"<img src='./img/pope/pic_314.jpg' class='img-circle' />", "name1":"克肋孟十四世<br>Papa CLEMENS Quartus Decimus", "name2":"乔瓦尼·文岑佐·安东尼奥·甘格内利<br>Giovanni Vincenzo Antonio Ganganelli, O.F.M. Conv.", "born":"教皇国<br>圣阿尔坎杰洛 - 迪罗马涅", "age":"63 / 68", "tag":"方济各住院会成员。1773 年颁布诏书《吾主救世主》，取缔耶稣会。" },
{"num":"250<br><img src='./img/pope/pic_315.png' />", "time":"1775 年 2 月 15 日 <br>- 1799 年 8 月 29 日<br>（24 年 195 天）", "head":"<img src='./img/pope/pic_316.jpg' class='img-circle' />", "name1":"庇护六世<br>Papa PIUS Sextus", "name2":"乔瓦尼·安杰洛·布拉斯奇<br>Giovanni Angelo Braschi", "born":"教皇国<br>艾米利亚 - 罗马涅切塞纳", "age":"57 / 81", "tag":"谴责法国大革命。1798 年被法军自教皇国驱逐，直至其过世。最后一位支持文艺复兴艺术的教宗。" },
{"num":"—", "time":"1799 年 8 月 29 日 <br>- 1800 年 3 月 14 日", "head":"", "name1":"空位期", "name2":"由于枢机无法达成一致及其他一系列问题（包括上任教宗被囚禁及枢机会议位于威尼斯），在六个月内没有选举产生教宗。", "born":"", "age":"", "tag":"" },
{"num":"251<br><img src='./img/pope/pic_317.png' />", "time":"1800 年 3 月 14 日 <br>- 1823 年 8 月 20 日<br>（23 年 159 天）", "head":"<img src='./img/pope/pic_318.jpg' class='img-circle' />", "name1":"神仆庇护七世<br>Papa PIUS Septimus", "name2":"巴尔纳巴·尼科洛·玛利亚·路易吉·奇亚拉蒙蒂<br>Barnaba Niccolò Maria Luigi Chiaramonti, O.S.B.", "born":"教皇国<br>艾米利亚 - 罗马涅切塞纳", "age":"57 / 81", "tag":"本笃会成员。在拿破仑加冕为法兰西人的皇帝时在场。1809 年至 1814 年间为法军驱逐出教皇国。" },
{"num":"252<br><img src='./img/pope/pic_319.png' />", "time":"1823 年 9 月 28 日 <br>- 1829 年 2 月 10 日<br>（5 年 135 天）", "head":"<img src='./img/pope/pic_320.jpg' class='img-circle' />", "name1":"良十二世<br>Papa LEO Duodecimus", "name2":"安尼巴莱·弗朗切斯科·克莱蒙特·梅尔奇奥莱·吉罗拉莫·尼科拉·塞尔马蒂·德拉·真加<br>Annibale Francesco Clemente Melchiore Girolamo Nicola Sermattei della Genga", "born":"教皇国<br>马尔凯真加", "age":"63 / 68", "tag":"1824 年颁布诏书，将天主教教育系统归于耶稣会管辖。谴责圣经公会。" },
{"num":"253<br><img src='./img/pope/pic_321.png' />", "time":"1829 年 3 月 31 日 <br>- 1830 年 11 月 30 日<br>（1 年 244 天）", "head":"<img src='./img/pope/pic_322.jpg' class='img-circle' />", "name1":"庇护八世<br>Papa PIUS Octavus", "name2":"弗朗切斯科·塞维里奥·卡斯蒂利奥尼<br>Francesco Saverio Castiglioni", "born":"教皇国<br>马尔凯钦戈利", "age":"67 / 69", "tag":"接受路易 - 菲利普一世为法国国王。1830 年颁布诏书，谴责共济会和现代圣经译本。" },
{"num":"254<br><img src='./img/pope/pic_323.png' />", "time":"1831 年 2 月 2 日 <br>- 1846 年 6 月 1 日<br>（15 年 119 天）", "head":"<img src='./img/pope/pic_324.jpg' class='img-circle' />", "name1":"额我略十六世<br>Papa GREGORIUS Sextus Decimus", "name2":"巴托罗缪·阿尔贝托·卡佩拉里<br>Bartolomeo Alberto Cappellari, O.S.B. Cam.（英语：Camaldolese）", "born":"威尼斯共和国<br>威尼托贝卢诺", "age":"65 / 80", "tag":"卡马尔多利会（英语：Camaldolese）成员。最后一位当选教宗的非主教。反对教宗国民主化和现代化改革。" },
{"num":"255<br><img src='./img/pope/pic_325.png' />", "time":"1846 年 6 月 16 日 <br>- 1878 年 2 月 7 日<br>（31 年 236 天）", "head":"<img src='./img/pope/pic_326.jpg' class='img-circle' />", "name1":"真福庇护九世<br>Papa PIUS Nonus", "name2":"乔瓦尼·玛利亚·马斯塔伊 - 费雷蒂<br>Giovanni Maria Mastai - Ferretti, O.F.S（英语：Secular Franciscan Order）", "born":"教皇国<br>马尔凯塞尼加利亚", "age":"54 / 85", "tag":"召开第一次梵蒂冈大公会议。教皇国为意大利夺取。确立圣母无染原罪及教宗无谬误原则。颁布《谬说要录（英语：Syllabus of Errors）》。第二长在位教宗，仅次于圣伯多禄。" },
{"num":"256<br><img src='./img/pope/pic_327.png' />", "time":"1878 年 2 月 20 日 <br>- 1903 年 7 月 20 日<br>（25 年 150 天）", "head":"<img src='./img/pope/pic_328.jpg' class='img-circle' />", "name1":"良十三世<br>Papa LEO Tertius Decimus", "name2":"乔亚奇诺·文岑佐·拉法埃莱·路易吉·佩奇<br>Gioacchino Vincenzo Raffaele Luigi Pecci, O.F.S（英语：Secular Franciscan Order）", "born":"教皇国<br>拉齐奥 卡皮内托罗马诺", "age":"67 / 93", "tag":"颁布《新事通谕（英语：Rerum novarum）》。支持基督教民主，反对共产主义。第四长在位教宗。推行玫瑰珠及肩羽，并批准两款新的圣母肩羽。首位完全承认玛利亚女仲裁者的教宗。" },
{"num":"257<br><img src='./img/pope/pic_329.png' />", "time":"1903 年 8 月 4 日 <br>- 1914 年 8 月 20 日<br>（11 年 16 天）", "head":"<img src='./img/pope/pic_330.jpg' class='img-circle' />", "name1":"圣庇护十世<br>Papa PIUS Decimus", "name2":"朱塞佩·梅尔奇奥莱·萨尔托<br>Giuseppe Melchiorre Sarto, O.F.S（英语：Secular Franciscan Order）", "born":"奥地利帝国<br>伦巴第 - 威尼西亚特雷维索列塞", "age":"68 / 79", "tag":"推广圣餐礼。抵制教会现代主义并立誓反对之。推行额我略圣咏并改革每日祈祷。" },
{"num":"258<br><img src='./img/pope/pic_331.png' />", "time":"1914 年 9 月 3 日 <br>- 1922 年 1 月 22 日<br>（7 年 141 天）", "head":"<img src='./img/pope/pic_332.jpg' class='img-circle' />", "name1":"本笃十五世<br>Papa BENEDICTUS Quintus Decimus", "name2":"贾科莫·保罗·乔瓦尼·巴蒂斯塔·德拉·基耶萨<br>Giacomo Paolo Giovanni Battista Della Chiesa, O.F.S（英语：Secular Franciscan Order）", "born":"皮埃蒙特 - 撒丁尼亚王国<br>热那亚", "age":"59 / 67", "tag":"在第一次世界大战中试图进行和平调解。颁布《1917 年教会法法典》。支持传教。本笃十六世称其为 “和平使者”。" },
{"num":"259<br><img src='./img/pope/pic_333.png' />", "time":"1922 年 2 月 6 日 <br>- 1939 年 2 月 10 日<br>（17 年 4 天）", "head":"<img src='./img/pope/pic_334.jpg' class='img-circle' />", "name1":"庇护十一世<br>Papa PIUS Undecimus", "name2":"阿契莱·安布罗吉奥·达米亚诺·拉蒂<br>Achille Ambrogio Damiano Ratti, O.F.S（英语：Secular Franciscan Order）", "born":"奥地利帝国<br>伦巴第 - 威尼西亚迪塞奥", "age":"64 / 81", "tag":"1929 年同意大利签订《拉特兰条约》，主权国家梵蒂冈城国建立。建立梵蒂冈广播电台。重建教廷科学院。推广基督王节。反对共产主义及纳粹主义。" },
{"num":"260<br><img src='./img/pope/pic_335.png' />", "time":"1939 年 3 月 2 日 <br>- 1958 年 10 月 9 日<br>（19 年 221 天）", "head":"<img src='./img/pope/pic_336.jpg' class='img-circle' />", "name1":"可敬者庇护十二世<br>Papa PIUS Duodecimus", "name2":"尤金尼奥·玛利亚·朱塞佩·乔瓦尼·帕切利<br>Eugenio Maria Giuseppe Giovanni Pacelli, O.F.S（英语：Secular Franciscan Order）", "born":"意大利王国<br>拉齐奥 罗马", "age":"63 / 82", "tag":"于其《广赐恩宠天主》宪令中重申教宗无谬误。定圣母蒙召升天为教义。意大利籍主教不再占枢机团多数。在第二次世界大战中试图进行和平调解。其在犹太人大屠杀中的角色受到争议。" },
{"num":"261<br><img src='./img/pope/pic_337.png' />", "time":"1958 年 10 月 28 日 <br>- 1963 年 6 月 3 日<br>（4 年 218 天）", "head":"<img src='./img/pope/pic_338.jpg' class='img-circle' />", "name1":"圣若望二十三世<br>Papa IOANNES Vicesimus Tertius", "name2":"安杰洛·朱塞佩·龙嘉利<br>Angelo Giuseppe Roncalli, O.F.S（英语：Secular Franciscan Order）", "born":"意大利王国<br>贝尔加莫索托伊尔蒙泰", "age":"76 / 81", "tag":"召开第二次梵蒂冈大公会议。1963 年颁布《和平于世》，宣扬和平及无核化。1962 年古巴导弹危机中试图进行和平调解。" },
{"num":"262<br><img src='./img/pope/pic_339.png' />", "time":"1963 年 6 月 21 日 <br>- 1978 年 8 月 6 日<br>（15 年 46 天）", "head":"<img src='./img/pope/pic_340.jpg' class='img-circle' />", "name1":"真福保禄六世<br>Papa PAULUS Sextus", "name2":"乔瓦尼·巴蒂斯塔·恩里克·安东尼奥·玛利亚·蒙蒂尼<br>Giovanni Battista Enrico Antonio Maria Montini", "born":"意大利王国<br>布雷西亚孔切肖", "age":"65 / 80", "tag":"最后一位加三重冕的教宗。首位造访美国和澳大利亚的教宗，亦为自 1809 年来首位离境意大利的教宗。宣布第二次梵蒂冈大公会议结束。1968 年颁布《关于人之生命》，反对人工节育。" },
{"num":"263<br><img src='./img/pope/pic_341.png' />", "time":"1978 年 8 月 26 日 <br>- 1978 年 9 月 28 日<br>（0 年 33 天）", "head":"<img src='./img/pope/pic_342.jpg' class='img-circle' />", "name1":"神仆若望·保禄一世<br>Papa IOANNES PAULUS Primus", "name2":"阿尔比诺·卢恰尼<br>Albino Luciani", "born":"意大利王国<br>威尼托贝卢诺卡纳莱达戈尔多", "age":"65 / 65", "tag":"废除教宗就职中的加冕环节。首位于其教名中正式使用 “一世” 的教宗，亦为首位使用前两任教宗名者。最后一位使用教宗御轿者。" },
{"num":"264<br><img src='./img/pope/pic_343.png' />", "time":"1978 年 10 月 16 日 <br>- 2005 年 4 月 2 日<br>（26 年 168 天）", "head":"<img src='./img/pope/pic_344.jpg' class='img-circle' />", "name1":"圣若望·保禄二世（大若望·保禄）<br>Papa IOANNES PAULUS Secundus", "name2":"卡罗尔·约泽夫·沃伊蒂瓦<br>Karol Józef Wojtyła", "born":"波兰第二共和国<br>瓦多维采", "age":"58 / 84", "tag":"首位来自波兰的教宗，亦为自阿德里安六世（1522 - 1523）以来首位非意大利裔教宗。任内造访 129 个国家。在位时间第三长的教宗。1984 年创立世界青年日。封圣多于任何前任教宗。" },
{"num":"265<br><img src='./img/pope/pic_345.png' />", "time":"2005 年 4 月 19 日 <br>- 2013 年 2 月 28 日<br>（7 年 315 天）", "head":"<img src='./img/pope/pic_346.jpg' class='img-circle' />", "name1":"本笃十六世<br>Papa BENEDICTUS Sextus Decimus", "name2":"约瑟夫·阿洛伊修斯·拉辛格<br>Joseph Aloisius Ratzinger", "born":"德国<br>巴伐利亚因河畔马克特尔", "age":"78 / 85", "tag":"自克肋孟十二世（1730 年）以来最年长的当选教宗。提升脱利腾弥撒的地位，并推广使用拉丁语。重新开始使用一些不再使用的教宗服饰。建立安立甘宗特别主教辖区。自策肋定五世（1294 年）以来首位主动放弃教宗职位者，保留其称号并加 “荣休教宗” 头衔。" },
{"num":"266<br><img src='./img/pope/pic_347.png' />", "time":"2013 年 3 月 13 日 <br>- 现今<br>（3 年 205 天）", "head":"<img src='./img/pope/pic_348.jpg' class='img-circle' />", "name1":"方济各<br>Papa FRANCISCUS", "name2":"豪尔赫·马里奥·贝戈利奥<br>Jorge Mario Bergoglio, S.J.", "born":"阿根廷<br>布宜诺斯艾利斯弗洛雷斯", "age":"76 / -", "tag":"自额我略三世（731 - 741）以来首位生于欧洲外的教宗，亦为首位来自美洲及南半球的教宗。自额我略十六世（1831 - 1846）来首位出身于修会的教宗，首位耶稣会教宗。自兰铎（913 - 914）以来首位使用全新且非融合教名的教宗。" }	
	]
	$('#table').bootstrapTable('load',data);
	var tab=[0,4,14,28,38,50,63,83,96,116,141,162,178,197,208,220,237,248,257,263,271,273]
	$('#toolbar').find('select').on('property change',function(e){
		filter=e.target.value;
		t=data;
		if(!isNaN(filter)) {
			ind=[tab[filter-1],tab[filter]]
			$('#table').bootstrapTable('load',data.slice(ind[0],ind[1]+1));
		} else {
			$('#table').bootstrapTable('load',data);
		}
	});

});