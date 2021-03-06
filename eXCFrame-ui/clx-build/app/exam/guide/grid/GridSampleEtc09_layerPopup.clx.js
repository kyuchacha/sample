/*
 * App URI: app/exam/guide/grid/GridSampleEtc09_layerPopup
 * Source Location: app/exam/guide/grid/GridSampleEtc09_layerPopup.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/guide/grid/GridSampleEtc09_layerPopup", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * GridSampleEtc09_layerPopup.js
			 * Created at 2020. 6. 4. 오후 5:57:48.
			 *
			 * @author 1073903
			 ************************************************/
			
			var util = createCommonUtil();
			
			/*
			 * "닫기" 버튼(btn1)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn1Click( /* cpr.events.CMouseEvent */ e) {
				/** 
				 * @type cpr.controls.Button
				 */
				var btn1 = e.control;
				var initValue = app.getHostProperty("initValue")
				
				var returnValue = {
					"aaaaa": "eeeee"
				}
				
				if (app.hasAppMethod("returnValueFunc")) {
					initValue["hostApp"].callAppMethod("returnValueFunc", returnValue)
				}
				
				util.getMainApp(app).removeFloatingControl(util.getMainApp(app).lookup("callApp"));
			}
			
			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad( /* cpr.events.CEvent */ e) {
				var initValue = app.getHostProperty("initValue")
				
				util.Control.setValue(app, "ipb1", initValue["val1"]);
				util.Control.setValue(app, "ipb2", initValue["val2"]);
			}
			// End - User Script
			
			// Header
			app.declareAppProperty("initValue", null);
			
			app.supportMedia("all and (min-width: 1320px)", "eXFrame");
			app.supportMedia("all and (min-width: 1020px) and (max-width: 1319px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1019px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"border-right-style" : "solid",
				"border-left-style" : "solid",
				"background-color" : "#ffffff",
				"border-bottom-style" : "solid",
				"width" : "100%",
				"top" : "0px",
				"height" : "100%",
				"left" : "0px",
				"border-top-style" : "solid"
			});
			
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_1.leftMargin = 5;
			verticalLayout_1.rightMargin = 5;
			verticalLayout_1.topMargin = 5;
			verticalLayout_1.bottomMargin = 5;
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container("grp2");
			// Layout
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.distribution = "trailing";
			group_1.setLayout(verticalLayout_2);
			(function(container){
				var button_1 = new cpr.controls.Button("btn1");
				button_1.value = "닫기";
				button_1.style.setClasses(["btn-secondary"]);
				if(typeof onBtn1Click == "function") {
					button_1.addEventListener("click", onBtn1Click);
				}
				container.addChild(button_1, {
					"autoSize": "none",
					"width": "50px",
					"height": "20px"
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "394px",
				"height": "20px"
			});
			
			var group_2 = new cpr.controls.Container("grp1");
			group_2.style.setClasses(["form-box"]);
			// Layout
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.topMargin = "5px";
			formLayout_1.rightMargin = "5px";
			formLayout_1.bottomMargin = "5px";
			formLayout_1.leftMargin = "5px";
			formLayout_1.setColumns(["100px", "1fr"]);
			formLayout_1.setRows(["25px", "25px", "1fr"]);
			group_2.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output("otp1");
				output_1.value = "가입자전화번호";
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var output_2 = new cpr.controls.Output("otp2");
				output_2.value = "가입자주소";
				container.addChild(output_2, {
					"colIndex": 0,
					"rowIndex": 1
				});
				var output_3 = new cpr.controls.Output("otp3");
				output_3.value = "비고";
				container.addChild(output_3, {
					"colIndex": 0,
					"rowIndex": 2
				});
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				inputBox_1.readOnly = true;
				inputBox_1.value = "010-9999-9999";
				container.addChild(inputBox_1, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var inputBox_2 = new cpr.controls.InputBox("ipb2");
				inputBox_2.readOnly = true;
				inputBox_2.value = "서울시 도봉구 도봉동 도봉아파트";
				container.addChild(inputBox_2, {
					"colIndex": 1,
					"rowIndex": 1
				});
				var textArea_1 = new cpr.controls.TextArea("txa1");
				textArea_1.readOnly = true;
				textArea_1.value = "비고설명";
				container.addChild(textArea_1, {
					"colIndex": 1,
					"rowIndex": 2
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "none",
				"width": "400px",
				"height": "155px"
			});
			if(typeof onBodyPropertyChange == "function"){
				app.addEventListener("property-change", onBodyPropertyChange);
			}
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
			if(typeof onBodyUnload == "function"){
				app.addEventListener("unload", onBodyUnload);
			}
		}
	});
	app.title = "GridSampleEtc09_layerPopup";
	cpr.core.Platform.INSTANCE.register(app);
})();
