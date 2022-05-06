/*
 * App URI: app/exam/guide/move/MoveSample01
 * Source Location: app/exam/guide/move/MoveSample01.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/guide/move/MoveSample01", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * MoveSample01.js
			 * Created at 2022. 3. 8. 오전 10:43:38.
			 *
			 * @author jiyeon
			 ************************************************/
			
			var util = createCommonUtil();
			
			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e){
				//폼 초기화
				util.FreeForm.init(app, "grpFormFunc");
			}
			
			/*
			 * "화면A 호출" 버튼(btn1)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn1Click(e){
				var btn1 = e.control;
				
				//함수 실행
				callPageA();
				
				//스크립트 출력
				printSource(callPageA);
			}
			
			/*
			 * "화면B 호출" 버튼(btn3)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn3Click(e){
				var btn3 = e.control;
				
				callPageB();
				
				printSource(callPageB);
			}
			
			/*
			 * "함수 호출" 버튼(btn2)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn2Click(e){
				var btn2 = e.control;
				
				callFunc();
				
				printSource(callFunc);
			}
			
			
			
			//== 스크립트 출력 ==//
			
			function printSource(value) {
				/* 에디터에 소스 표시 */
				var vcAceEditor = app.lookup("ace1");
				vcAceEditor.value = value;	
			}
			
			function callPageA() {
				var vsEmbId = "embapp1";
				var vsCallAppId = "app/exam/guide/move/Sample01Sub1";
				var initValue = {
					"initValue1": "Value1",
					"initValue2": "Value2",
					"initValue3": "Value3"
				}
				
				util.EmbApp.setPage(app, vsEmbId, vsCallAppId, initValue);
			}
			
			function callPageB() {
				var vsEmbId = "embapp1";
				var vsCallAppId = "app/exam/guide/move/Sample01Sub2";
				var initValue = {};
				util.EmbApp.setPage(app, vsEmbId, vsCallAppId, initValue);
			}
			
			function callFunc() {
				//샘플화면 임베디드앱내 호출
				var vsEdaId = "embapp1";
				var vsCallAppId = "app/exam/guide/move/Sample01Sub2";
				var paArgs = {
					"Args1": "파라미터값1",
					"Args2": "파라미터값2",
					"Args3": "파라미터값3"
				};
				util.EmbApp.setPage(app, vsEdaId, vsCallAppId, paArgs);
				
				//함수 호출
				var vsFuncname = "f_callMethod";
				util.EmbApp.callAppMethod(app, vsEdaId, vsFuncname, paArgs);
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("dsList");
			dataSet_1.parseData({
				"columns": [
					{"name": "col1"},
					{"name": "col2"},
					{"name": "col3"},
					{"name": "col4"}
				],
				"rows": [
					{"col1": "ID0001", "col2": "박보검", "col3": "010-1234-5678", "col4": "서울시 여의도"},
					{"col1": "ID0002", "col2": "홍길동", "col3": "010-1234-5678", "col4": "서울시 동작구 123"},
					{"col1": "ID0003", "col2": "이순신", "col3": "010-1234-5678", "col4": "경기도 의정부시 111"},
					{"col1": "ID0004", "col2": "송혜교", "col3": "010-1234-5678", "col4": "서울시 노원구 중계동"},
					{"col1": "ID0004", "col2": "이보영", "col3": "010-1234-5678", "col4": "서울시 강북구"},
					{"col1": "ID0005", "col2": "임장군", "col3": "010-1234-5678", "col4": "서울시 여의도 영등포동"},
					{"col1": "ID0005", "col2": "김토마토", "col3": "010-1234-5678", "col4": "서울시 여의도 영등포동"},
					{"col1": "ID0005", "col2": "김퇴직", "col3": "010-1234-5678", "col4": "서울시 여의도 영등포동"}
				]
			});
			app.register(dataSet_1);
			
			app.supportMedia("all and (min-width: 1320px)", "eXFrame");
			app.supportMedia("all and (min-width: 1020px) and (max-width: 1319px)", "default");
			app.supportMedia("all and (min-width: 760px) and (max-width: 1019px)", "tablet");
			app.supportMedia("all and (max-width: 759px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container("grpHeader");
			// Layout
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			group_1.setLayout(verticalLayout_2);
			(function(container){
				var userDefinedControl_1 = new udc.com.appHeader("appheader1");
				container.addChild(userDefinedControl_1, {
					"width": "500px",
					"height": "30px"
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "400px",
				"height": "30px"
			});
			
			var group_2 = new cpr.controls.Container("grpData");
			// Layout
			var verticalLayout_3 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_3.leftMargin = 20;
			verticalLayout_3.rightMargin = 30;
			verticalLayout_3.topMargin = 30;
			verticalLayout_3.bottomMargin = 20;
			group_2.setLayout(verticalLayout_3);
			(function(container){
				var group_3 = new cpr.controls.Container();
				// Layout
				var verticalLayout_4 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_4.spacing = 20;
				verticalLayout_4.topMargin = 20;
				verticalLayout_4.bottomMargin = 40;
				group_3.setLayout(verticalLayout_4);
				(function(container){
					var group_4 = new cpr.controls.Container("grp1");
					// Layout
					var formLayout_1 = new cpr.controls.layouts.FormLayout();
					formLayout_1.scrollable = false;
					formLayout_1.rightMargin = "50px";
					formLayout_1.horizontalSpacing = "5px";
					formLayout_1.verticalSpacing = "5px";
					formLayout_1.setColumns(["150px", "100px"]);
					formLayout_1.setColumnAutoSizing(0, true);
					formLayout_1.setColumnAutoSizing(1, true);
					formLayout_1.setRows(["1fr"]);
					group_4.setLayout(formLayout_1);
					(function(container){
						var output_1 = new cpr.controls.Output();
						output_1.value = "임베디드 앱";
						output_1.style.css({
							"font-weight" : "bold",
							"padding-left" : "1rem",
							"font-size" : "2.5rem"
						});
						container.addChild(output_1, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_2 = new cpr.controls.Output();
						output_2.value = "util.EmbApp";
						output_2.style.setClasses(["text-primary"]);
						output_2.style.css({
							"font-weight" : "bold",
							"padding-left" : "3rem",
							"font-size" : "1.25rem",
							"text-align" : "left"
						});
						container.addChild(output_2, {
							"colIndex": 1,
							"rowIndex": 0,
							"verticalAlign": "bottom",
							"height": 35
						});
					})(group_4);
					container.addChild(group_4, {
						"autoSize": "height",
						"width": "1270px",
						"height": "40px"
					});
					var output_3 = new cpr.controls.Output();
					output_3.value = "이 페이지는 임베디드 앱에서 사용하는 공통모듈에 대해 설명합니다.";
					output_3.style.setClasses(["opt-tmpl"]);
					output_3.style.css({
						"padding-left" : "1rem",
						"font-size" : "1rem"
					});
					container.addChild(output_3, {
						"autoSize": "height",
						"width": "1210px",
						"height": "46px"
					});
				})(group_3);
				container.addChild(group_3, {
					"autoSize": "height",
					"width": "1270px",
					"height": "120px"
				});
				var group_5 = new cpr.controls.Container();
				// Layout
				var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_5.spacing = 20;
				verticalLayout_5.topMargin = 20;
				verticalLayout_5.bottomMargin = 40;
				group_5.setLayout(verticalLayout_5);
				(function(container){
					var output_4 = new cpr.controls.Output();
					output_4.value = "시나리오";
					output_4.style.setClasses(["h1", "pl-3", "bg-primary", "text-white"]);
					output_4.style.css({
						"font-weight" : "bold",
						"padding-left" : "1rem",
						"font-size" : "1.75rem"
					});
					container.addChild(output_4, {
						"width": "100px",
						"height": "40px"
					});
					var output_5 = new cpr.controls.Output("ipbScenario");
					output_5.value = "1. 기능 및 함수를 설명하는 영역의 동작 버튼을 클릭한다.\r\n2. 임베디드 앱 영역에 해당 화면이 호출되는 것을 확인한다.\r\n* [화면A 호출] 버튼 클릭시, 전달되는 파라미터를 확인할 수 있다.\r\n3. 해당 스크립트 내용을 확인한다.\r\n4. 스크립트 내용을 복사하여 코딩에 활용한다.";
					output_5.style.setClasses(["opt-tmpl"]);
					output_5.style.css({
						"padding-left" : "1rem",
						"font-size" : "1rem"
					});
					container.addChild(output_5, {
						"autoSize": "height",
						"width": "1210px",
						"height": "107px"
					});
					var group_6 = new cpr.controls.Container("grp2");
					group_6.visible = false;
					group_6.style.css({
						"background-color" : "#dff7fb"
					});
					// Layout
					var verticalLayout_6 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_6.leftMargin = 30;
					verticalLayout_6.rightMargin = 30;
					verticalLayout_6.topMargin = 20;
					verticalLayout_6.bottomMargin = 20;
					group_6.setLayout(verticalLayout_6);
					(function(container){
						var output_6 = new cpr.controls.Output();
						output_6.value = "추가설명";
						output_6.style.setClasses(["text-info", "opt-tmpl"]);
						output_6.style.css({
							"font-weight" : "bold"
						});
						container.addChild(output_6, {
							"width": "100px",
							"height": "25px"
						});
						var output_7 = new cpr.controls.Output();
						output_7.value = "추가적으로 설명할 정보가 있다면 작성해주세요.";
						output_7.style.setClasses(["text-info", "opt-tmpl"]);
						container.addChild(output_7, {
							"autoSize": "height",
							"width": "100px",
							"height": "25px"
						});
					})(group_6);
					container.addChild(group_6, {
						"autoSize": "height",
						"width": "1100px",
						"height": "100px"
					});
				})(group_5);
				container.addChild(group_5, {
					"autoSize": "height",
					"width": "1270px",
					"height": "345px"
				});
				var group_7 = new cpr.controls.Container();
				group_7.userAttr({"floating-header": "true"});
				// Layout
				var verticalLayout_7 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_7.spacing = 15;
				verticalLayout_7.topMargin = 20;
				verticalLayout_7.bottomMargin = 0;
				group_7.setLayout(verticalLayout_7);
				(function(container){
					var output_8 = new cpr.controls.Output();
					output_8.value = "기능 확인";
					output_8.style.setClasses(["h1", "pl-3", "bg-primary", "text-white"]);
					output_8.style.css({
						"font-weight" : "bold",
						"padding-left" : "1rem",
						"font-size" : "1.75rem"
					});
					container.addChild(output_8, {
						"autoSize": "none",
						"width": "1270px",
						"height": "40px"
					});
					var group_8 = new cpr.controls.Container("grp3");
					group_8.style.css({
						"border-right-style" : "solid",
						"border-top-width" : "1px",
						"border-bottom-color" : "#dedede",
						"border-right-width" : "1px",
						"border-left-color" : "#dedede",
						"border-right-color" : "#dedede",
						"border-left-width" : "1px",
						"border-top-style" : "solid",
						"background-color" : "#F0F0F0",
						"border-left-style" : "solid",
						"border-bottom-width" : "1px",
						"border-top-color" : "#dedede",
						"border-bottom-style" : "solid"
					});
					// Layout
					var verticalLayout_8 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_8.leftMargin = 30;
					verticalLayout_8.rightMargin = 30;
					verticalLayout_8.topMargin = 5;
					verticalLayout_8.bottomMargin = 10;
					group_8.setLayout(verticalLayout_8);
					(function(container){
						var group_9 = new cpr.controls.Container("grp5");
						// Layout
						var formLayout_2 = new cpr.controls.layouts.FormLayout();
						formLayout_2.scrollable = false;
						formLayout_2.topMargin = "0px";
						formLayout_2.rightMargin = "0px";
						formLayout_2.leftMargin = "0px";
						formLayout_2.horizontalSpacing = "5px";
						formLayout_2.verticalSpacing = "5px";
						formLayout_2.setColumns(["1fr"]);
						formLayout_2.setRows(["25px", "1fr"]);
						group_9.setLayout(formLayout_2);
						(function(container){
							var group_10 = new cpr.controls.Container("grp8");
							// Layout
							var verticalLayout_9 = new cpr.controls.layouts.VerticalLayout();
							group_10.setLayout(verticalLayout_9);
							(function(container){
								var embeddedApp_1 = new cpr.controls.EmbeddedApp("embapp1");
								container.addChild(embeddedApp_1, {
									"width": "320px",
									"height": "305px"
								});
							})(group_10);
							container.addChild(group_10, {
								"colIndex": 0,
								"rowIndex": 1,
								"colSpan": 1,
								"rowSpan": 1
							});
							var output_9 = new cpr.controls.Output();
							output_9.value = "<임베디드 앱 영역>";
							output_9.style.setClasses(["opt-tmpl"]);
							output_9.style.css({
								"text-align" : "center"
							});
							output_9.bind("tooltip").toExpression("#ipbScenario.value");
							container.addChild(output_9, {
								"colIndex": 0,
								"rowIndex": 0
							});
						})(group_9);
						container.addChild(group_9, {
							"autoSize": "height",
							"width": "860px",
							"height": "335px"
						});
					})(group_8);
					if(typeof onGrp11Click == "function") {
						group_8.addEventListener("click", onGrp11Click);
					}
					container.addChild(group_8, {
						"autoSize": "height",
						"width": "1210px",
						"height": "340px"
					});
					var group_11 = new cpr.controls.Container("grp4");
					// Layout
					var formLayout_3 = new cpr.controls.layouts.FormLayout();
					formLayout_3.userResizingMode = "standard";
					formLayout_3.topMargin = "0px";
					formLayout_3.rightMargin = "0px";
					formLayout_3.bottomMargin = "0px";
					formLayout_3.leftMargin = "0px";
					formLayout_3.horizontalSpacing = "5px";
					formLayout_3.verticalSpacing = "5px";
					formLayout_3.setColumns(["1fr", "470px"]);
					formLayout_3.setRows(["1fr"]);
					group_11.setLayout(formLayout_3);
					(function(container){
						var group_12 = new cpr.controls.Container("grp7");
						group_12.style.setClasses(["form-box"]);
						// Layout
						var verticalLayout_10 = new cpr.controls.layouts.VerticalLayout();
						group_12.setLayout(verticalLayout_10);
						(function(container){
							var userDefinedControl_2 = new udc.tmp.Ace("ace1");
							container.addChild(userDefinedControl_2, {
								"autoSize": "height",
								"width": "418px",
								"height": "295px"
							});
						})(group_12);
						container.addChild(group_12, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var group_13 = new cpr.controls.Container("grp6");
						// Layout
						var formLayout_4 = new cpr.controls.layouts.FormLayout();
						formLayout_4.horizontalSpacing = "5px";
						formLayout_4.verticalSpacing = "10px";
						formLayout_4.setColumns(["1fr", "10px"]);
						formLayout_4.setColumnAutoSizing(1, true);
						formLayout_4.setRows(["1fr"]);
						group_13.setLayout(formLayout_4);
						(function(container){
							var userDefinedControl_3 = new udc.com.udcSplit("udcsplit1");
							userDefinedControl_3.leftGrpId = "grp6";
							userDefinedControl_3.rightGrpId = "grp7";
							container.addChild(userDefinedControl_3, {
								"colIndex": 1,
								"rowIndex": 0,
								"colSpan": 1,
								"rowSpan": 1,
								"horizontalAlign": "right",
								"width": 9
							});
							var group_14 = new cpr.controls.Container("grp9");
							// Layout
							var formLayout_5 = new cpr.controls.layouts.FormLayout();
							formLayout_5.scrollable = false;
							formLayout_5.topMargin = "0px";
							formLayout_5.rightMargin = "0px";
							formLayout_5.bottomMargin = "0px";
							formLayout_5.leftMargin = "0px";
							formLayout_5.horizontalSpacing = "10px";
							formLayout_5.verticalSpacing = "10px";
							formLayout_5.setColumns(["1fr"]);
							formLayout_5.setRows(["40px", "1fr"]);
							group_14.setLayout(formLayout_5);
							(function(container){
								var group_15 = new cpr.controls.Container("grpFormFunc");
								group_15.style.setClasses(["form-box"]);
								// Layout
								var formLayout_6 = new cpr.controls.layouts.FormLayout();
								formLayout_6.topMargin = "5px";
								formLayout_6.rightMargin = "5px";
								formLayout_6.bottomMargin = "5px";
								formLayout_6.leftMargin = "5px";
								formLayout_6.horizontalSpacing = "5px";
								formLayout_6.verticalSpacing = "5px";
								formLayout_6.setColumns(["24px", "200px", "1fr", "225px"]);
								formLayout_6.setColumnAutoSizing(1, true);
								formLayout_6.setRows(["25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px"]);
								formLayout_6.setRowAutoSizing(1, true);
								formLayout_6.setRowAutoSizing(2, true);
								formLayout_6.setRowAutoSizing(3, true);
								formLayout_6.setRowAutoSizing(4, true);
								formLayout_6.setRowAutoSizing(5, true);
								formLayout_6.setRowAutoSizing(6, true);
								formLayout_6.setRowAutoSizing(7, true);
								group_15.setLayout(formLayout_6);
								(function(container){
									var output_10 = new cpr.controls.Output();
									output_10.value = "No";
									output_10.style.css({
										"background-color" : "#e1edfe",
										"background-image" : "none",
										"text-align" : "center"
									});
									container.addChild(output_10, {
										"colIndex": 0,
										"rowIndex": 0
									});
									var output_11 = new cpr.controls.Output();
									output_11.value = "함수";
									output_11.style.css({
										"background-color" : "#e1edfe",
										"background-image" : "none",
										"text-align" : "center"
									});
									container.addChild(output_11, {
										"colIndex": 1,
										"rowIndex": 0
									});
									var output_12 = new cpr.controls.Output();
									output_12.value = "설명";
									output_12.style.css({
										"background-color" : "#e1edfe",
										"background-image" : "none",
										"text-align" : "center"
									});
									container.addChild(output_12, {
										"colIndex": 2,
										"rowIndex": 0
									});
									var output_13 = new cpr.controls.Output();
									output_13.value = "동작";
									output_13.style.css({
										"background-color" : "#e1edfe",
										"background-image" : "none",
										"text-align" : "center"
									});
									container.addChild(output_13, {
										"colIndex": 3,
										"rowIndex": 0
									});
									var output_14 = new cpr.controls.Output();
									output_14.value = "1";
									output_14.style.css({
										"background-color" : "#e1edfe",
										"border-right-style" : "none",
										"border-left-style" : "none",
										"border-bottom-style" : "none",
										"background-image" : "none",
										"border-top-style" : "none",
										"text-align" : "center"
									});
									container.addChild(output_14, {
										"colIndex": 0,
										"rowIndex": 1
									});
									var output_15 = new cpr.controls.Output();
									output_15.value = "2";
									output_15.style.css({
										"background-color" : "#e1edfe",
										"border-right-style" : "none",
										"border-left-style" : "none",
										"border-bottom-style" : "none",
										"background-image" : "none",
										"border-top-style" : "none",
										"text-align" : "center"
									});
									container.addChild(output_15, {
										"colIndex": 0,
										"rowIndex": 2
									});
									var inputBox_1 = new cpr.controls.InputBox("ipb1");
									inputBox_1.readOnly = true;
									inputBox_1.value = "loadPage";
									container.addChild(inputBox_1, {
										"colIndex": 1,
										"rowIndex": 1
									});
									var inputBox_2 = new cpr.controls.InputBox("ipb2");
									inputBox_2.readOnly = true;
									inputBox_2.value = "임베디드 앱 영역에 화면 호출";
									container.addChild(inputBox_2, {
										"colIndex": 2,
										"rowIndex": 1
									});
									var inputBox_3 = new cpr.controls.InputBox("ipb3");
									inputBox_3.readOnly = true;
									inputBox_3.value = "임베디드 앱 내의 함수를 호출";
									container.addChild(inputBox_3, {
										"colIndex": 2,
										"rowIndex": 2
									});
									var inputBox_4 = new cpr.controls.InputBox("ipb4");
									inputBox_4.readOnly = true;
									inputBox_4.value = "callAppMethod";
									container.addChild(inputBox_4, {
										"colIndex": 1,
										"rowIndex": 2
									});
									var group_16 = new cpr.controls.Container("grp10");
									// Layout
									var formLayout_7 = new cpr.controls.layouts.FormLayout();
									formLayout_7.scrollable = false;
									formLayout_7.topMargin = "0px";
									formLayout_7.rightMargin = "0px";
									formLayout_7.bottomMargin = "0px";
									formLayout_7.leftMargin = "0px";
									formLayout_7.horizontalSpacing = "5px";
									formLayout_7.verticalSpacing = "5px";
									formLayout_7.setColumns(["1fr", "1fr"]);
									formLayout_7.setRows(["1fr"]);
									group_16.setLayout(formLayout_7);
									(function(container){
										var button_1 = new cpr.controls.Button("btn1");
										button_1.value = "화면A 호출";
										button_1.style.setClasses(["btn-primary"]);
										if(typeof onBtn1Click == "function") {
											button_1.addEventListener("click", onBtn1Click);
										}
										container.addChild(button_1, {
											"colIndex": 0,
											"rowIndex": 0
										});
										var button_2 = new cpr.controls.Button("btn3");
										button_2.value = "화면B 호출";
										button_2.style.setClasses(["btn-gray"]);
										if(typeof onBtn3Click == "function") {
											button_2.addEventListener("click", onBtn3Click);
										}
										container.addChild(button_2, {
											"colIndex": 1,
											"rowIndex": 0
										});
									})(group_16);
									container.addChild(group_16, {
										"colIndex": 3,
										"rowIndex": 1
									});
									var group_17 = new cpr.controls.Container("grp11");
									// Layout
									var formLayout_8 = new cpr.controls.layouts.FormLayout();
									formLayout_8.scrollable = false;
									formLayout_8.topMargin = "0px";
									formLayout_8.rightMargin = "0px";
									formLayout_8.bottomMargin = "0px";
									formLayout_8.leftMargin = "0px";
									formLayout_8.horizontalSpacing = "5px";
									formLayout_8.verticalSpacing = "5px";
									formLayout_8.setColumns(["1fr", "1fr"]);
									formLayout_8.setRows(["1fr"]);
									group_17.setLayout(formLayout_8);
									(function(container){
										var button_3 = new cpr.controls.Button("btn2");
										button_3.value = "함수 호출";
										button_3.style.setClasses(["btn-primary"]);
										if(typeof onBtn2Click == "function") {
											button_3.addEventListener("click", onBtn2Click);
										}
										container.addChild(button_3, {
											"colIndex": 0,
											"rowIndex": 0
										});
									})(group_17);
									container.addChild(group_17, {
										"colIndex": 3,
										"rowIndex": 2
									});
								})(group_15);
								container.addChild(group_15, {
									"colIndex": 0,
									"rowIndex": 0,
									"colSpan": 1,
									"rowSpan": 2
								});
							})(group_14);
							container.addChild(group_14, {
								"colIndex": 0,
								"rowIndex": 0,
								"colSpan": 1,
								"rowSpan": 1
							});
						})(group_13);
						container.addChild(group_13, {
							"colIndex": 0,
							"rowIndex": 0,
							"colSpan": 1,
							"rowSpan": 1
						});
					})(group_11);
					container.addChild(group_11, {
						"autoSize": "none",
						"width": "1210px",
						"height": "295px"
					});
				})(group_7);
				container.addChild(group_7, {
					"autoSize": "height",
					"width": "1270px",
					"height": "1000px"
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "height",
				"width": "400px",
				"height": "1800px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "임베디드앱";
	cpr.core.Platform.INSTANCE.register(app);
})();