/*
 * App URI: app/exam/guide/move/prev/MoveSample02Prev
 * Source Location: app/exam/guide/move/prev/MoveSample02Prev.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/guide/move/prev/MoveSample02Prev", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * MoveSample02.js
			 * Created at 2020. 3. 7. 오전 9:52:37.
			 *
			 * @author 1073727
			 ************************************************/
			
			var util = createCommonUtil();
			
			/*
			 * Body에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit( /* cpr.events.CEvent */ e) {
				//폼 초기화
				util.FreeForm.init(app, ["grpFormFunc", "grpFormCont"]);
				
			}
			
			/*
			 * "Button" 버튼(btn1)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn1Click( /* cpr.events.CMouseEvent */ e) {
				/** 
				 * @type cpr.controls.Button
				 */
				var btn1 = e.control;
				
				var initValue = {};
				
				f_MDIOpen();
				
				//스크립트 내용 표시
				app.lookup("txaScript").value = "" + f_MDIOpen;
			}
			
			/**
			 * 화면에 표시할 스크립트 내용을 기술 
			 */
			function f_MDIOpen() {
				
				var mdiValue = {
					"menuParam1": "파라미터1",
					"menuParam2": "파라미터2"
				};
				
				//함수호출
				util.MDI.open(app, "LEVEL04-58", mdiValue);
			};
			
			///*
			// * "팝업호출" 버튼(btn4)에서 click 이벤트 발생 시 호출.
			// * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			// */
			//function onBtn4Click(/* cpr.events.CMouseEvent */ e){
			//	/** 
			//	 * @type cpr.controls.Button
			//	 */
			//	var btn4 = e.control;
			//
			//	//함수호출
			//	f_MDIClose();
			//
			//	//스크립트 내용 표시
			//	app.lookup("txaScript").value = ""+f_MDIClose;
			//	
			//}
			
			///**
			// * 화면에 표시할 스크립트 내용을 기술 
			// */
			//function f_MDIClose() {
			//	util.MDI.close(app, "exam/template/Template101");
			//}
			
			/*
			 * "메뉴파라미터" 버튼(btn2)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn2Click( /* cpr.events.CMouseEvent */ e) {
				/** 
				 * @type cpr.controls.Button
				 */
				var btn2 = e.control;
				f_getMenuParam();
				
				//스크립트 내용 표시
				app.lookup("txaScript").value = "" + f_getMenuParam;
				
				//결과값
				app.lookup("otpRslt").value = JSON.stringify(util.Auth.getMenuParam(app));
			}
			
			function f_getMenuParam() {
				var menuParam = util.Auth.getMenuParam(app);
			}
			
			///*
			// * "MDI메뉴 호출" 버튼(btn3)에서 click 이벤트 발생 시 호출.
			// * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			// */
			//function onBtn3Click(/* cpr.events.CMouseEvent */ e){
			//	/** 
			//	 * @type cpr.controls.Button
			//	 */
			//	var btn3 = e.control;
			//	
			//	
			//	
			//	var initValue = {
			//		"menuParam3" : "param1",
			//		"menuParam4" : "param2"
			//	};
			//	
			//	//함수호출
			//	util.MDI.open(app, "exam/template/Template102", initValue);
			//}
			// End - User Script
			
			// Header
			
			app.supportMedia("all and (min-width: 1320px)", "eXFrame");
			app.supportMedia("all and (min-width: 1020px) and (max-width: 1319px)", "default");
			app.supportMedia("all and (min-width: 800px) and (max-width: 1019px)", "tablet");
			app.supportMedia("all and (max-width: 799px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"top" : "0px",
				"height" : "100%",
				"left" : "0px"
			});
			
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var userDefinedControl_1 = new udc.com.appHeader("appheader");
			userDefinedControl_1.initializeYn = "N";
			userDefinedControl_1.groupBoxIds = "grp1";
			container.addChild(userDefinedControl_1, {
				"autoSize": "none",
				"width": "998px",
				"height": "30px"
			});
			
			var group_1 = new cpr.controls.Container("grpData");
			group_1.userAttr({"fillLayout": "Y"});
			// Layout
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.verticalSpacing = "5px";
			formLayout_1.setColumns(["1fr", "1fr"]);
			formLayout_1.setRows(["25px", "150px", "25px", "100px", "25px", "1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var textArea_1 = new cpr.controls.TextArea("txaScript");
				container.addChild(textArea_1, {
					"colIndex": 0,
					"rowIndex": 5,
					"colSpan": 2,
					"rowSpan": 1
				});
				var group_2 = new cpr.controls.Container("grpFormFunc");
				group_2.style.setClasses(["form-box"]);
				// Layout
				var formLayout_2 = new cpr.controls.layouts.FormLayout();
				formLayout_2.topMargin = "5px";
				formLayout_2.rightMargin = "5px";
				formLayout_2.bottomMargin = "5px";
				formLayout_2.leftMargin = "5px";
				formLayout_2.setColumns(["24px", "130px", "1fr", "150px"]);
				formLayout_2.setRows(["25px", "25px", "25px", "1fr"]);
				group_2.setLayout(formLayout_2);
				(function(container){
					var output_1 = new cpr.controls.Output("otp1");
					output_1.value = "No";
					output_1.style.css({
						"text-align" : "center"
					});
					container.addChild(output_1, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var output_2 = new cpr.controls.Output("otp3");
					output_2.value = "함수";
					output_2.style.css({
						"text-align" : "center"
					});
					container.addChild(output_2, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var output_3 = new cpr.controls.Output("otp20");
					output_3.value = "설명";
					output_3.style.css({
						"text-align" : "center"
					});
					container.addChild(output_3, {
						"colIndex": 2,
						"rowIndex": 0
					});
					var output_4 = new cpr.controls.Output("otp4");
					output_4.value = "동작";
					output_4.style.css({
						"text-align" : "center"
					});
					container.addChild(output_4, {
						"colIndex": 3,
						"rowIndex": 0
					});
					var output_5 = new cpr.controls.Output("otp6");
					output_5.value = "1";
					output_5.style.css({
						"text-align" : "center"
					});
					container.addChild(output_5, {
						"colIndex": 0,
						"rowIndex": 1
					});
					var inputBox_1 = new cpr.controls.InputBox("ipb3");
					inputBox_1.readOnly = true;
					inputBox_1.value = "open";
					container.addChild(inputBox_1, {
						"colIndex": 1,
						"rowIndex": 1
					});
					var inputBox_2 = new cpr.controls.InputBox("ipb1");
					inputBox_2.readOnly = true;
					inputBox_2.value = "화면을 메인MDI에 추가한다.";
					container.addChild(inputBox_2, {
						"colIndex": 2,
						"rowIndex": 1
					});
					var button_1 = new cpr.controls.Button("btn1");
					button_1.value = "MDI메뉴 호출";
					if(typeof onBtn1Click == "function") {
						button_1.addEventListener("click", onBtn1Click);
					}
					container.addChild(button_1, {
						"colIndex": 3,
						"rowIndex": 1,
						"horizontalAlign": "fill",
						"verticalAlign": "fill",
						"width": 140,
						"height": 30
					});
					var output_6 = new cpr.controls.Output("otp2");
					output_6.value = "2";
					output_6.style.css({
						"text-align" : "center"
					});
					container.addChild(output_6, {
						"colIndex": 0,
						"rowIndex": 2
					});
					var inputBox_3 = new cpr.controls.InputBox("ipb4");
					inputBox_3.readOnly = true;
					inputBox_3.value = "getMenuParam";
					container.addChild(inputBox_3, {
						"colIndex": 1,
						"rowIndex": 2
					});
					var inputBox_4 = new cpr.controls.InputBox("ipb2");
					inputBox_4.readOnly = true;
					inputBox_4.value = "현재화면의 파라미터를 취득한다.";
					container.addChild(inputBox_4, {
						"colIndex": 2,
						"rowIndex": 2
					});
					var button_2 = new cpr.controls.Button("btn2");
					button_2.value = "메뉴파라미터";
					if(typeof onBtn2Click == "function") {
						button_2.addEventListener("click", onBtn2Click);
					}
					container.addChild(button_2, {
						"colIndex": 3,
						"rowIndex": 2,
						"horizontalAlign": "fill",
						"verticalAlign": "fill",
						"width": 140,
						"height": 30
					});
				})(group_2);
				container.addChild(group_2, {
					"colIndex": 0,
					"rowIndex": 1,
					"colSpan": 1,
					"rowSpan": 3
				});
				var group_3 = new cpr.controls.Container("grpFormCont");
				group_3.style.setClasses(["form-box"]);
				// Layout
				var formLayout_3 = new cpr.controls.layouts.FormLayout();
				formLayout_3.topMargin = "5px";
				formLayout_3.rightMargin = "5px";
				formLayout_3.bottomMargin = "5px";
				formLayout_3.leftMargin = "5px";
				formLayout_3.setColumns(["100px", "1fr"]);
				formLayout_3.setRows(["2fr", "1fr"]);
				group_3.setLayout(formLayout_3);
				(function(container){
					var output_7 = new cpr.controls.Output("otp25");
					output_7.value = "시나리오";
					container.addChild(output_7, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var textArea_2 = new cpr.controls.TextArea("txa1");
					textArea_2.readOnly = true;
					textArea_2.value = "\r\n1. MDI메뉴 호출을 클릭하여 메인MDI에 아이템이 추가되는지 확인한다.\r\n2. 메뉴파라미터를 클릭하여 전달된 파라미터를 확인한다.";
					container.addChild(textArea_2, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var output_8 = new cpr.controls.Output("otp26");
					output_8.value = "추가설명";
					container.addChild(output_8, {
						"colIndex": 0,
						"rowIndex": 1
					});
					var textArea_3 = new cpr.controls.TextArea("txa2");
					textArea_3.readOnly = true;
					container.addChild(textArea_3, {
						"colIndex": 1,
						"rowIndex": 1
					});
				})(group_3);
				container.addChild(group_3, {
					"colIndex": 1,
					"rowIndex": 1
				});
				var userDefinedControl_2 = new udc.com.comFormTitle("comformtitle3");
				userDefinedControl_2.title = "기능(함수)";
				container.addChild(userDefinedControl_2, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var userDefinedControl_3 = new udc.com.comFormTitle("comformtitle2");
				userDefinedControl_3.title = "시나리오";
				container.addChild(userDefinedControl_3, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var userDefinedControl_4 = new udc.com.comFormTitle("comformtitle4");
				userDefinedControl_4.title = "결과값";
				container.addChild(userDefinedControl_4, {
					"colIndex": 1,
					"rowIndex": 2
				});
				var userDefinedControl_5 = new udc.com.comFormTitle("comformtitle5");
				userDefinedControl_5.title = "스크립트 내용";
				container.addChild(userDefinedControl_5, {
					"colIndex": 0,
					"rowIndex": 4,
					"colSpan": 2,
					"rowSpan": 1
				});
				var inputBox_5 = new cpr.controls.InputBox("otpRslt");
				inputBox_5.readOnly = true;
				container.addChild(inputBox_5, {
					"colIndex": 1,
					"rowIndex": 3
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "none",
				"width": "972px",
				"height": "645px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "MDI전환";
	cpr.core.Platform.INSTANCE.register(app);
})();
