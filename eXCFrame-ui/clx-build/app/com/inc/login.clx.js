/*
 * App URI: app/com/inc/login
 * Source Location: app/com/inc/login.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/com/inc/login", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * 공통 모듈 선언
			 ************************************************/
			var util = createCommonUtil();
			
			var mnKeySize = 128;
			var mnIterationCount = 10000;
			var msSalt = "0c68efe9e3c3a02b3f9f69a08987e4ab";
			var msIv = "18b8e16db963ae9bfe9fccbe37d452e0";
			var msPassPhrase = "exb6Frame";
			
			/**
			 * 쿠키를 설정합니다.
			 * 
			 * @param {String} psName
			 * @param {Strubg} psValue
			 * @param {Number} pnExpireDate
			 */
			function setCookie(psName, psValue, pnExpireDate) {
				var voToday = new Date();
				voToday.setDate(voToday.getDate() + parseInt(pnExpireDate));
				document.cookie = psName + "=" + escape(psValue) + ";path=/;expires=" + voToday.toGMTString() + ";";
			}
			
			
			/**
			 * 쿠키를 가져옵니다.
			 * @param {String} psName
			 */
			function getCookie(psName) {
				var vsCookie = document.cookie + ";";
			
				var vaItems = vsCookie.split(";");
				var vnItemLen = vaItems.length;
				var item = null;
				var voItemInfo = null;
				for (var i = 0; i < vnItemLen; i++) {
					item = vaItems[i];
					voItemInfo = item.split("=");
					if (psName == voItemInfo[0].trim()) {
						return unescape(voItemInfo[1]);
					}
				}
			}
			
			function deleteCookie(name) {
				var expireDate = new Date();
				expireDate.setDate(expireDate.getDate() - 1);
				document.cookie = name + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
			}
			
			
			/************************************************
			 * 컨트롤 이벤트
			 ************************************************/
			/*
			 * Body에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(/* cpr.events.CEvent */ e){
				/* 쿠키 설정 */
				var vsCookieId = getCookie("expuid");
				var dsParam = app.lookup("dsParam");
				
				console.log(vsCookieId);
				if (!ValueUtil.isNull(vsCookieId)){
					util.DataMap.setValue(app, "dsParam", "USER_ID", vsCookieId);
					app.lookup("cbxRmbr").checked = true;
			
					app.lookup("ipbPw").focus();
				} else {
					app.lookup("ipbUserNm").focus();
				}
				
				util.Control.redraw(app, "grpLoginBd");
				
				//어플리케이션 로케일  조회 (다국어 및 language.json 필요시)
				//app.lookup("subLocale").send();
			}
			
			
			/*
			 * 인풋 박스에서 keydown 이벤트 발생 시 호출.
			 * 사용자가 키를 누를 때 발생하는 이벤트.
			 */
			function onIpbUserNmKeydown(/* cpr.events.CKeyboardEvent */ e){
				/** 
				 * @type cpr.controls.InputBox
				 */
				var ipbUserNm = e.control;
				
				if (e.keyCode == cpr.events.KeyCode.ENTER){
					app.lookup("ipbPw").focus();
				}
			}
			
			
			/*
			 * 인풋 박스에서 keydown 이벤트 발생 시 호출.
			 * 사용자가 키를 누를 때 발생하는 이벤트.
			 */
			function onIpbPwKeydown(/* cpr.events.CKeyboardEvent */ e){
				/** 
				 * @type cpr.controls.InputBox
				 */
				var ipbPw = e.control;
				
				if (e.keyCode == cpr.events.KeyCode.ENTER){
					app.lookup("btnLogin").click();
				}
			}
			
			
			/*
			 * 체크 박스에서 value-change 이벤트 발생 시 호출.
			 * CheckBox의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
			 */
			function onCbxScrtValueChange(/* cpr.events.CValueChangeEvent */ e){
				/** 
				 * @type cpr.controls.CheckBox
				 */
				var vcCbxScrt = e.control;
				
				var vcIpbPw = app.lookup("ipbPw");
				
				if (vcCbxScrt.checked){
					vcIpbPw.secret = true;
				} else {
					vcIpbPw.secret = false;
				}
			}
			
			
			/*
			 * "Log In" 버튼(btnLogin)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnLoginClick(/* cpr.events.CMouseEvent */ e){
				/** 
				 * @type cpr.controls.Button
				 */
				var btnLogin = e.control;
				
				//TODO 로그인 관련 Validate 처리를 작성하십시오.
				var dsParam = app.lookup("dsParam");
				var username = dsParam.getValue("USER_ID");
				var pwd = dsParam.getValue("PWD");
				
				if(!util.validate(app, ["ipbUserNm", "ipbPw"])) return false;
			
				var vcCbxRmbr = app.lookup("cbxRmbr");
				if (vcCbxRmbr.checked == true) {
					setCookie("expuid", username, 30);
				} else {
					deleteCookie("expuid");
				}
				
			//	SSL을 적용 할 수 없는 환경 일경우 파라미터로 랜덤생성된 iv 과 암호화된 값을 전달하고 
			// salt값은 사용자 id를 사용하는 방식으로 구현 필요 
			//	var iv = CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
			//  var salt = CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
			    
				var aesUtil = new AesUtil(mnKeySize, mnIterationCount);
				var encString = aesUtil.encrypt(msSalt, msIv, msPassPhrase, pwd);
				
				util.DataMap.setValue(app, "dsParam", "PWD", encString);
				
				//로그인 서브미션 호출;
				util.Submit.send(app, "subLogin", function(pbSuccess){
					if(pbSuccess){
						var sublogin = app.lookup("subLogin");
						var appId = sublogin.getMetadata("uri");
						var msg = sublogin.getMetadata("msg");
						if(msg != null) {
							alert(msg);
							return;
						}
					    /* 메인 화면으로 전환 (SPA 전환) */
						cpr.core.App.load(appId, function(loadedApp){
							loadedApp.createNewInstance().run();
							app.dispose();
						});
			
					}
				});
			}
			
			
			
			/*
			 * "Signup now" 아웃풋(optRgstr)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onOptRgstrClick(/* cpr.events.CMouseEvent */ e){
				/** 
				 * @type cpr.controls.Output
				 */
				var optRgstr = e.control;
				
				/* 회원가입 화면으로 전환 (SPA 전환) */
			//	cpr.core.App.load("app/com/inc/Register", function(loadedApp){
			//		loadedApp.createNewInstance().run();
			//		app.dispose();
			//	});
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("dsLanDivRCd");
			dataSet_1.parseData({
				"columns" : [
					{"name": "CD"},
					{"name": "CD_NM"},
					{"name": "CD_PRP1"}
				]
			});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("dsParam");
			dataMap_1.parseData({
				"columns" : [
					{"name": "USER_ID"},
					{"name": "PWD"},
					{"name": "default.locale"},
					{
						"name": "directLoginYn",
						"defaultValue": "N",
						"info": "직접로그인여부"
					}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("subLogin");
			submission_1.action = "/Login/login.do";
			submission_1.mediaType = "application/x-www-form-urlencoded";
			submission_1.addRequestData(dataMap_1);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("subLocale");
			submission_2.action = "/i18n/locale.do";
			submission_2.responseType = "javascript";
			app.register(submission_2);
			
			app.supportMedia("all and (min-width: 1320px)", "eXFrame");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1319px)", "default");
			app.supportMedia("all and (min-width: 850px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 849px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.setClasses(["login-body"]);
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container("grp1");
			group_1.style.setClasses(["login-aside"]);
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "eXBuilder6 © 2021";
				output_1.ellipsis = true;
				output_1.style.setClasses(["text-white"]);
				container.addChild(output_1, {
					"right": "36px",
					"bottom": "36px",
					"left": "36px",
					"height": "20px"
				});
			})(group_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1320px)",
						"top": "0px",
						"bottom": "0px",
						"left": "0px",
						"width": "472px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1319px)",
						"top": "0px",
						"bottom": "0px",
						"left": "0px",
						"width": "366px"
					}, 
					{
						"media": "all and (min-width: 850px) and (max-width: 1023px)",
						"hidden": true,
						"top": "0px",
						"bottom": "0px",
						"left": "0px",
						"width": "229px"
					}, 
					{
						"media": "all and (max-width: 849px)",
						"hidden": true,
						"top": "0px",
						"bottom": "0px",
						"left": "0px",
						"width": "119px"
					}
				]
			});
			
			var group_2 = new cpr.controls.Container("grp3");
			group_2.style.setClasses(["login-form"]);
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_1.scrollable = false;
			verticalLayout_1.spacing = 24;
			group_2.setLayout(verticalLayout_1);
			(function(container){
				var group_3 = new cpr.controls.Container("grp4");
				// Layout
				var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_2.spacing = 8;
				group_3.setLayout(verticalLayout_2);
				(function(container){
					var group_4 = new cpr.controls.Container("grp5");
					// Layout
					var flowLayout_1 = new cpr.controls.layouts.FlowLayout();
					flowLayout_1.horizontalSpacing = 0;
					flowLayout_1.verticalSpacing = 0;
					flowLayout_1.horizontalAlign = "center";
					flowLayout_1.bottomMargin = 8;
					group_4.setLayout(flowLayout_1);
					(function(container){
						var image_1 = new cpr.controls.Image("img1");
						image_1.src = "theme/common/images/com/login/login_logo.png";
						(function(image_1){
						})(image_1);
						container.addChild(image_1, {
							"autoSize": "both",
							"width": "59px",
							"height": "45px"
						});
					})(group_4);
					container.addChild(group_4, {
						"autoSize": "height",
						"width": "400px",
						"height": "65px"
					});
					var output_2 = new cpr.controls.Output();
					output_2.value = "로그인";
					output_2.unselectable = false;
					output_2.style.setClasses(["login-txt", "text-center"]);
					container.addChild(output_2, {
						"autoSize": "height",
						"width": "100px",
						"height": "43px"
					});
					var group_5 = new cpr.controls.Container("grp7");
					// Layout
					var flowLayout_2 = new cpr.controls.layouts.FlowLayout();
					flowLayout_2.scrollable = false;
					flowLayout_2.horizontalSpacing = 3;
					flowLayout_2.verticalSpacing = 0;
					flowLayout_2.horizontalAlign = "center";
					flowLayout_2.verticalAlign = "bottom";
					group_5.setLayout(flowLayout_2);
					(function(container){
						var output_3 = new cpr.controls.Output();
						output_3.value = "환영합니다! 로그인 하시거나";
						output_3.unselectable = false;
						output_3.style.setClasses(["h5", "fw-medium", "text-dark", "fw-bold"]);
						container.addChild(output_3, {
							"autoSize": "both",
							"width": "182px",
							"height": "21px"
						});
						var output_4 = new cpr.controls.Output("optRgstr");
						output_4.value = "여기";
						output_4.unselectable = false;
						output_4.style.setClasses(["h5", "text-primary", "fw-bold", "cursor-pointer"]);
						if(typeof onOptRgstrClick == "function") {
							output_4.addEventListener("click", onOptRgstrClick);
						}
						container.addChild(output_4, {
							"autoSize": "both",
							"width": "32px",
							"height": "21px"
						});
						var output_5 = new cpr.controls.Output();
						output_5.value = "를 눌러 회원가입하세요.";
						output_5.unselectable = false;
						output_5.style.setClasses(["h5", "fw-medium", "text-dark", "fw-bold"]);
						container.addChild(output_5, {
							"autoSize": "both",
							"width": "151px",
							"height": "21px"
						});
					})(group_5);
					container.addChild(group_5, {
						"autoSize": "height",
						"width": "400px",
						"height": "21px"
					});
				})(group_3);
				container.addChild(group_3, {
					"autoSize": "height",
					"width": "410px",
					"height": "147px"
				});
				var inputBox_1 = new cpr.controls.InputBox("ipbUserNm");
				inputBox_1.placeholder = "아이디 또는 이메일";
				inputBox_1.style.setClasses(["form-control"]);
				inputBox_1.bind("value").toDataMap(app.lookup("dsParam"), "USER_ID");
				if(typeof onIpbUserNmKeydown == "function") {
					inputBox_1.addEventListener("keydown", onIpbUserNmKeydown);
				}
				container.addChild(inputBox_1, {
					"autoSize": "none",
					"width": "100px",
					"height": "58px"
				});
				var inputBox_2 = new cpr.controls.InputBox("ipbPw");
				inputBox_2.secret = true;
				inputBox_2.placeholder = "비밀번호";
				inputBox_2.style.setClasses(["form-control"]);
				inputBox_2.bind("value").toDataMap(app.lookup("dsParam"), "PWD");
				if(typeof onIpbPwKeydown == "function") {
					inputBox_2.addEventListener("keydown", onIpbPwKeydown);
				}
				container.addChild(inputBox_2, {
					"autoSize": "none",
					"width": "100px",
					"height": "58px"
				});
				var group_6 = new cpr.controls.Container("grp6");
				// Layout
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_6.setLayout(xYLayout_2);
				(function(container){
					var checkBox_1 = new cpr.controls.CheckBox("cbxRmbr");
					checkBox_1.text = "아이디 기억하기";
					checkBox_1.style.css({
						"padding-top" : "0px"
					});
					if(typeof onCbxScrtValueChange == "function") {
						checkBox_1.addEventListener("value-change", onCbxScrtValueChange);
					}
					container.addChild(checkBox_1, {
						"left": "0px",
						"width": "130px",
						"height": "21px",
						"top": "calc(50% - 10px)"
					});
					var button_1 = new cpr.controls.Button("btnLogin");
					button_1.value = "로그인";
					button_1.style.setClasses(["btn-primary", "btn-login"]);
					if(typeof onBtnLoginClick == "function") {
						button_1.addEventListener("click", onBtnLoginClick);
					}
					container.addChild(button_1, {
						"right": "0px",
						"width": "110px",
						"height": "42px",
						"top": "calc(50% - 21px)"
					});
				})(group_6);
				container.addChild(group_6, {
					"autoSize": "none",
					"width": "400px",
					"height": "42px"
				});
			})(group_2);
			container.addChild(group_2, {
				positions: [
					{
						"media": "all and (min-width: 1320px)",
						"width": "554px",
						"height": "378px",
						"left": "calc(50% - 277px)",
						"top": "calc(50% - 189px)"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1319px)",
						"width": "430px",
						"height": "378px",
						"left": "calc(50% - 215px)",
						"top": "calc(50% - 189px)"
					}, 
					{
						"media": "all and (min-width: 850px) and (max-width: 1023px)",
						"right": "70px",
						"left": "70px",
						"height": "378px",
						"top": "calc(50% - 189px)"
					}, 
					{
						"media": "all and (max-width: 849px)",
						"right": "45px",
						"left": "45px",
						"height": "450px",
						"top": "calc(50% - 225px)"
					}
				]
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
			if(typeof onBodyScreenChange == "function"){
				app.addEventListener("screen-change", onBodyScreenChange);
			}
		}
	});
	app.title = "로그인";
	cpr.core.Platform.INSTANCE.register(app);
})();
