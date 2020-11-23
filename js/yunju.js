$(function() {
	var bannerList = {
		'li1': [
			'台式机',
			'笔记本',
			'平板电脑',
			'一体机',
			'服务器/工作站'
		],
		'li2': [
			'显示器',
			'CPU',
			'主板',
			'显卡',
			'硬盘',
			'内存',
			'机箱',
			'电源',
			'散热器',
			'显示器支架',
			'刻录机/光驱',
			'声卡/扩展卡',
			'装机配件',
			'SSD固态硬盘',
			'组装电脑',
			'USB分线器',
			'主板CPU套装'
		],
		'li3': [
			'鼠标',
			'键盘',
			'键鼠套装',
			'网络仪表仪器',
			'U盘',
			'移动硬盘',
			'鼠标垫',
			'摄像头',
			'线缆',
			'手写板',
			'硬盘盒',
			'电脑工具',
			'电脑清洁',
			'UPS电源'
		],
		'li4': [
			'数码相机',
			'微单相机',
			'单反相机',
			'拍立得',
			'运动相机',
			'摄像机',
			'镜头',
			'户外器材',
			'影棚器材',
			'数码相框'
		],
		'li5': [
			'存储卡',
			'三脚架/云台',
			'相机包',
			'滤镜',
			'闪光灯/手柄',
			'相机清洁/贴膜',
			'机身附件',
			'镜头附件',
			'读卡器',
			'支架',
			'电池/充电器'
		],
		'li6': [
			'投影机',
			'投影配件',
			'打印机',
			'传真设备',
			'验钞/点钞机',
			'扫描设备',
			'复合机',
			'碎纸机',
			'考勤门禁',
			'收银机',
			'会议音频视频',
			'保险柜',
			'装订/封装机',
			'安防监控',
			'白板'
		],
		'li7': [
			'笔类',
			'本册/便签',
			'办公文具',
			'文件收纳',
			'学生文具',
			'计算器',
			'画具画材',
			'财会用品',
			'文房四宝',
			'硒鼓/墨粉',
			'墨盒',
			'色带',
			'纸类',
			'刻录光盘'
		],
		'li8': [
			'乒乓球',
			'羽毛球',
			'篮球',
			'足球',
			'轮滑',
			'滑板',
			'网球',
			'高尔夫',
			'台球',
			'排球',
			'棋牌麻将'
		],
		'li9': [
			'跑步机',
			'动感单车',
			'哑铃',
			'仰卧板/收腹机',
			'瑜伽用品',
			'舞蹈用品',
			'运动护具',
			'健腹轮',
			'拉力器/臂力器',
			'跳绳',
			'引体向上器'
		],
		'li10': [
			'电视',
			'空调',
			'冰箱',
			'洗衣机',
			'家庭影院',
			'DVD',
			'迷你音响'
		],
		'li11': [
			'油烟机',
			'燃气灶',
			'烟灶套装',
			'集成灶',
			'消毒柜',
			'洗碗机',
			'电热水器',
			'燃气热水器',
			'空气能热水器',
			'太阳能热水器',
			'嵌入式厨电烟机',
			'灶具配件'
		],
		'li12': [
			'破壁机',
			'电烤箱',
			'电饭煲',
			'电压力锅',
			'电炖锅',
			'豆浆机',
			'料理机',
			'咖啡机',
			'电饼铛',
			'榨汁机/原汁机',
			'电水壶/热水瓶',
			'微波炉',
			'电热饭盒',
			'电火锅',
			'养生壶',
			'电磁炉',
			'面包机',
			'空气炸锅',
			'面条机',
			'电陶炉',
			'煮蛋器',
			'电烧烤炉'
		],
		'li13': [
			'取暖器',
			'空气净化器',
			'吸尘器',
			'除螨仪',
			'扫地机器人',
			'除湿机',
			'干衣机',
			'蒸汽拖把/拖地机',
			'挂烫机/熨斗',
			'电话机',
			'饮水机',
			'净水器',
			'电风扇',
			'冷风扇',
			'加湿器',
			'毛球修剪器',
			'生活电器配件'
		],
		'li14': [
			'剃须刀',
			'剃/脱毛器',
			'电动牙刷',
			'美容仪洁面',
			'口腔护理',
			'电吹风',
			'理发器',
			'按摩椅',
			'按摩器',
			'足浴盆',
			'血压计',
			'健康秤',
			'血糖仪',
			'体温计',
			'便携式制氧机'
		],
		'li15': [
			'床垫',
			'被褥',
			'被套',
			'床单',
			'窗帘窗纱',
			'蚊帐',
			'凉席',
			'毛巾',
			'浴巾',
			'桌布',
			'坐垫',
			'枕头',
			'拉杆箱',
			'双肩包',
			'提包',
			'旅行包',
			'腰包'
		],
		'li16': [
			'收纳用品',
			'雨伞雨具',
			'净化除味',
			'浴室用品',
			'洗晒/熨烫',
			'缝纫/针织用品',
			'保暖防护',
			'清洁工具'
		],
		'li17': [
			'桌子',
			'椅子',
			'柜子',
			'储物收纳',
			'床',
			'床垫',
			'沙发',
			'茶几',
			'鞋架/衣帽架'
		],
		'li18': [
			'指纹锁',
			'电动工具',
			'手动工具',
			'测量工具',
			'工具箱',
			'劳防用品',
			'开关插座',
			'配电箱/断路器',
			'机械锁',
			'拉手'
		],
		'li19': [
			'油漆涂料',
			'涂刷辅料',
			'瓷砖',
			'地板',
			'壁纸',
			'强化地板',
			'美缝剂',
			'防水涂料',
			'管材管件',
			'木材/板材'
		],
		'li20': [
			'维修保养',
			'汽车装饰',
			'车载电器',
			'美容清洁',
			'安全自驾'
		]
	}
	$('#bannerBox_fl li').click(function() {
		event.stopPropagation();
		var indexs = $(this).index();
		yunjuFun($('#bannerBox_fl li'), $('.bannerBox_tanBox'), "choose", indexs)
	})
	$(".wechatBtn").hover(function() {
		$('.wechat_bg').show()
	}, function() {
		$('.wechat_bg').hide()
	})
	$("#classifyList_fr li").click(function() {
		event.stopPropagation();
		var indexs = $(this).index();
		if (indexs > 9) {
			$('.classifyTan').css({
				'top': '265px'
			})
		} else {
			$('.classifyTan').css({
				'top': '215px'
			})
		}
		yunjuFun($('#classifyList_fr li'), $('.classifyTan'), "classifyOn", indexs)
	})
	$("#details_addressBtn").click(function() {
		event.stopPropagation();
		$(".details_bannerFr_addressTan").show()
		$(".details_bannerFr_addressTan").css({
			'display': 'flex'
		})
	})
	$(".details_bannerFr_addressTan li").click(function() {
		$(".details_bannerFr_addressTan").hide();
		$("#details_addressBtn span").html($(this).html())
	})
	$("#numsInput").on('input', function() {
		var re = /^[0-9]+.?[0-9]*$/; 
		if (!re.test($(this).val()) || $(this).val() < 0) {
			alert('请输入大于等于1的购买数量哦，而且不能是特殊符号哦！');
			$(this).val('1')
		}
	})
	$("#numsFl").click(function() {
		var values = $("#numsInput").val()
		console.log(values)
		if (values <= 1) {
			alert('购买数量不能小于1哦！')
		} else {
			values--;
			$("#numsInput").val(values)
			return;
		}
	})
	$("#numsFr").click(function() {
		var values = $("#numsInput").val()
		values++;
		console.log(values)
		$("#numsInput").val(values)
	})
	$("#details_chooseList li").click(function(){
		$("#details_chooseList li").removeClass("choose")
		$(this).addClass("choose")
	})
	$(document).click(function() {
		$('.classifyTan').hide()
		$('.bannerBox_tanBox').hide()
		$('#classifyList_fr li').removeClass('classifyOn')
		$('#bannerBox_fl li').removeClass('choose')
		$(".details_bannerFr_addressTan").hide()
	})

	function yunjuFun(clickBtn, tanList, status, nums) {
		clickBtn.removeClass(status);
		tanList.html(' ');
		clickBtn.eq(nums).addClass(status);
		tanList.show()
		tanList.show();
		var indexnum = nums + 1;
		var indexs = 'li' + indexnum;
		var bannnerTanBox = bannerList[indexs];
		if (bannnerTanBox) {
			for (var i = 0; i < bannnerTanBox.length; i++) {
				if (i <= bannerList[indexs].length) {
					tanList.html(tanList.html() + "<a href='#'>" + bannnerTanBox[i] + "</a>")
				} else {
					return
				}
			}
		}
	}
})
