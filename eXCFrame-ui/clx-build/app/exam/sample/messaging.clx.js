/*
 * App URI: app/exam/sample/messaging
 * Source Location: app/exam/sample/messaging.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/sample/messaging", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * messagingRevise.js
			 * Created at 2022. 1. 26. 오후 1:34:25.
			 *
			 * @author jiyeon
			 ************************************************/
			
			var openWindow = null;
			
			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(/* cpr.events.CEvent */ e){
				//init 시점에 메시지 받아오는 이벤트 실행
				window.addEventListener("message", function getPostMessage(e) {
					if(app.lookup("mainWindowOpt") != null) {
						app.lookup("mainWindowOpt").value = e.data;
					}
				});
			}
			
			
			/*
			 * 임베디드 앱에서 load 이벤트 발생 시 호출.
			 * 임베디드 앱이 준비되고 그려진 후에 디스패치 되는 이벤트.
			 */
			function onEmbAppLoad(e){
				var embapp = e.control;
				
				//임베디드 앱의 property 설정
				embapp.setAppProperty("mainApp", app);
			}
			
			/*
			 * "보내기 버튼" 버튼(btnMsgEmbApp)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnMsgEmbAppClick(e){
				var btnMsgEmbApp = e.control;
				
				//임베디드 앱의 메서드 실행
				var vcEmbeddedApp = app.lookup("embApp");
				if(vcEmbeddedApp.hasAppMethod("setOptProperty")) {
					vcEmbeddedApp.callAppMethod("setOptProperty", app.lookup("mainEmbAppIpb").value);
				}
			}
			
			/*
			 * 임베디드 페이지에서 load 이벤트 발생 시 호출.
			 * 페이지의 Load가 완료되었을 때 호출되는 Event.
			 */
			function onEmbPageLoad(e){
				/** 
				 * @type cpr.controls.EmbeddedPage
				 */
				var embpage = e.control;
				
				//임베디드 페이지의 속성 설정
				embpage.setPageProperty("_ownerApp", app);
			}
			
			/*
			 * "보내기 버튼" 버튼(btnMsgEmbPg)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnMsgEmbPgClick(e){
				var btnMsgEmbPg = e.control;
				
				var vcEmbeddedPage = app.lookup("embPage");
				
				//임베디드 페이지의 메서드 실행
				if(vcEmbeddedPage.hasPageMethod("getOutputText")) {
					vcEmbeddedPage.callPageMethod("getOutputText");
				}
			}
			
			/*
			 * "새 창 열기" 버튼(btnPopUp)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnPopUpClick(e){
				/** 
				 * @type cpr.controls.Button
				 */
				var btnPopUp = e.control;
				
				openWindow = window.open("./app/exam/sample/windowPopUp.clx", "_popup", "height=300,left=100,top=100,width=350,location=no,menubar=no,resizable=no,scrollbars=yes,status=yes,titlebar=no,toolbar=no");
			}
			
			/*
			 * "보내기 버튼" 버튼(btnMsgWindow)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnMsgWindowClick(e){
				/** 
				 * @type cpr.controls.Button
				 */
				var btnMsgWindow = e.control;
				
				//window 창으로 메세지 전달
				openWindow.postMessage(app.lookup("mainWindowIpb").value, "*");
			}
			
			/*
			 * 사용자 정의 컨트롤에서 afterLoad 이벤트 발생 시 호출.
			 */
			function onAce1AfterLoad(e){
				/* 에디터에 소스 표시 */
				var vcAceEditor = app.lookup("ace1");
				vcAceEditor.value = onBodyInit + 
									onEmbAppLoad + 
									onBtnMsgEmbAppClick + 
									onEmbPageLoad + 
									onBtnMsgEmbPgClick + 
									onBtnPopUpClick + 
									onBtnMsgWindowClick;
			};
			// End - User Script
			
			// Header
			
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
				"width": "1320px",
				"height": "30px"
			});
			
			var group_2 = new cpr.controls.Container("grpData");
			// Layout
			var verticalLayout_3 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_3.leftMargin = 20;
			verticalLayout_3.rightMargin = 30;
			verticalLayout_3.topMargin = 30;
			verticalLayout_3.bottomMargin = 30;
			group_2.setLayout(verticalLayout_3);
			(function(container){
				var group_3 = new cpr.controls.Container("grp1");
				// Layout
				var verticalLayout_4 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_4.spacing = 30;
				verticalLayout_4.topMargin = 20;
				verticalLayout_4.bottomMargin = 40;
				group_3.setLayout(verticalLayout_4);
				(function(container){
					var group_4 = new cpr.controls.Container("grp3");
					// Layout
					var formLayout_1 = new cpr.controls.layouts.FormLayout();
					formLayout_1.scrollable = false;
					formLayout_1.rightMargin = "50px";
					formLayout_1.horizontalSpacing = "5px";
					formLayout_1.verticalSpacing = "5px";
					formLayout_1.setColumns(["300px", "100px"]);
					formLayout_1.setColumnAutoSizing(0, true);
					formLayout_1.setColumnAutoSizing(1, true);
					formLayout_1.setRows(["1fr"]);
					group_4.setLayout(formLayout_1);
					(function(container){
						var output_1 = new cpr.controls.Output();
						output_1.value = "통신 예제";
						output_1.style.css({
							"font-weight" : "bold",
							"padding-left" : "1rem",
							"font-size" : "2.5rem"
						});
						container.addChild(output_1, {
							"colIndex": 0,
							"rowIndex": 0
						});
					})(group_4);
					container.addChild(group_4, {
						"autoSize": "height",
						"width": "1270px",
						"height": "40px"
					});
					var output_2 = new cpr.controls.Output();
					output_2.value = "이 페이지는 메인 앱과 임베디드 페이지 간, 메인 앱과 팝업창 간의 통신을 구현한 샘플입니다.";
					output_2.style.setClasses(["opt-tmpl"]);
					output_2.style.css({
						"padding-left" : "1rem",
						"font-size" : "1rem"
					});
					container.addChild(output_2, {
						"autoSize": "height",
						"width": "1210px",
						"height": "46px"
					});
				})(group_3);
				container.addChild(group_3, {
					"autoSize": "height",
					"width": "1270px",
					"height": "150px"
				});
				var group_5 = new cpr.controls.Container("grp2");
				// Layout
				var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_5.spacing = 30;
				verticalLayout_5.topMargin = 10;
				verticalLayout_5.bottomMargin = 30;
				group_5.setLayout(verticalLayout_5);
				(function(container){
					var output_3 = new cpr.controls.Output();
					output_3.value = "시나리오";
					output_3.style.setClasses(["h1", "pl-3", "bg-primary", "text-white"]);
					output_3.style.css({
						"font-weight" : "bold",
						"padding-left" : "1rem",
						"font-size" : "1.75rem"
					});
					container.addChild(output_3, {
						"width": "100px",
						"height": "40px"
					});
					var output_4 = new cpr.controls.Output("ipbScenario");
					output_4.value = "1. 임베디드 페이지에 앱 영역 인풋박스에 값을 입력 후 보내기 버튼을 클릭합니다.\r\n2. HTML페이지 아웃풋박스에 해당 값이 출력되는지 확인합니다.\r\n3. HTML페이지 인풋박스에 값을 입력 후 보내기 버튼을 클릭합니다.\r\n4. 앱 영역 아웃풋박스에 해당 값이 출력되는지 확인합니다.\r\n5. window 팝업창 영역에 window 팝업 새 창 열기 버튼을 클릭해서 팝업을 엽니다.\r\n6. 앱 영역 인풋박스에 값을 입력 후 보내기 버튼을 클릭합니다.\r\n7. 팝업창 아웃풋박스에 해당 값이 출력되는지 확인합니다.\r\n8. 팝업창 인풋박스에 값을 입력 후 보내기 버튼을 클릭합니다.\r\n9. 앱 영역 아웃풋박스에 해당 값이 출력되는지 확인합니다.";
					output_4.style.setClasses(["opt-tmpl"]);
					output_4.style.css({
						"padding-left" : "1rem",
						"font-size" : "1rem"
					});
					container.addChild(output_4, {
						"autoSize": "height",
						"width": "1210px",
						"height": "200px"
					});
				})(group_5);
				container.addChild(group_5, {
					"autoSize": "height",
					"width": "1270px",
					"height": "345px"
				});
				var group_6 = new cpr.controls.Container("grpFunction");
				// Layout
				var verticalLayout_6 = new cpr.controls.layouts.VerticalLayout();
				group_6.setLayout(verticalLayout_6);
				(function(container){
					var group_7 = new cpr.controls.Container("grpFuncFloating");
					group_7.userAttr({"floating-header": "true"});
					// Layout
					var verticalLayout_7 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_7.bottomMargin = 30;
					group_7.setLayout(verticalLayout_7);
					(function(container){
						var output_5 = new cpr.controls.Output();
						output_5.value = "기능확인";
						output_5.style.setClasses(["h1", "pl-3", "bg-primary", "text-white"]);
						output_5.style.css({
							"font-weight" : "bold",
							"padding-left" : "1rem",
							"font-size" : "1.75rem"
						});
						container.addChild(output_5, {
							"autoSize": "none",
							"width": "1270px",
							"height": "40px"
						});
						var group_8 = new cpr.controls.Container("grp11");
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
							var group_9 = new cpr.controls.Container("grp13");
							group_9.fieldLabel = "임베디드 앱";
							group_9.style.css({
								"border-right-style" : "solid",
								"border-bottom-color" : "darkGray",
								"border-left-style" : "solid",
								"border-left-color" : "darkGray",
								"border-top-color" : "darkGray",
								"border-bottom-style" : "solid",
								"border-right-color" : "darkGray",
								"border-top-style" : "solid"
							});
							// Layout
							var formLayout_2 = new cpr.controls.layouts.FormLayout();
							formLayout_2.scrollable = false;
							formLayout_2.topMargin = "10px";
							formLayout_2.rightMargin = "10px";
							formLayout_2.bottomMargin = "10px";
							formLayout_2.leftMargin = "10px";
							formLayout_2.horizontalSpacing = "5px";
							formLayout_2.verticalSpacing = "5px";
							formLayout_2.setColumns(["1fr"]);
							formLayout_2.setRows(["25px", "25px", "1fr"]);
							group_9.setLayout(formLayout_2);
							(function(container){
								var group_10 = linker.group_10 = new cpr.controls.Container("grp14");
								group_10.fieldLabel = "임베디드 앱 통신";
								// Layout
								var formLayout_3 = new cpr.controls.layouts.FormLayout();
								formLayout_3.scrollable = false;
								formLayout_3.topMargin = "0px";
								formLayout_3.rightMargin = "0px";
								formLayout_3.bottomMargin = "0px";
								formLayout_3.leftMargin = "0px";
								formLayout_3.horizontalSpacing = "5px";
								formLayout_3.verticalSpacing = "5px";
								formLayout_3.setColumns(["600px", "400px", "1fr"]);
								formLayout_3.setRows(["1fr"]);
								group_10.setLayout(formLayout_3);
								(function(container){
									var group_11 = new cpr.controls.Container("grp16");
									// Layout
									var xYLayout_1 = new cpr.controls.layouts.XYLayout();
									group_11.setLayout(xYLayout_1);
									(function(container){
										var output_6 = new cpr.controls.Output();
										output_6.value = "앱 영역";
										output_6.style.css({
											"font-weight" : "bold"
										});
										container.addChild(output_6, {
											"top": "10px",
											"left": "50px",
											"width": "120px",
											"height": "40px"
										});
										var output_7 = new cpr.controls.Output("mainEmbAppOpt");
										output_7.value = "임베디드 앱에서 값 받아오기";
										output_7.style.css({
											"border-right-style" : "solid",
											"border-top-width" : "1px",
											"border-bottom-color" : "black",
											"border-right-width" : "1px",
											"padding-left" : "5px",
											"border-left-color" : "black",
											"border-right-color" : "black",
											"border-left-width" : "1px",
											"border-top-style" : "solid",
											"border-left-style" : "solid",
											"border-bottom-width" : "1px",
											"border-top-color" : "black",
											"border-bottom-style" : "solid"
										});
										container.addChild(output_7, {
											"top": "130px",
											"left": "50px",
											"width": "250px",
											"height": "30px"
										});
										var inputBox_1 = new cpr.controls.InputBox("mainEmbAppIpb");
										inputBox_1.placeholder = "전송할 값을 입력해주세요.";
										container.addChild(inputBox_1, {
											"top": "90px",
											"left": "50px",
											"width": "250px",
											"height": "30px"
										});
										var button_1 = new cpr.controls.Button("btnMsgEmbApp");
										button_1.value = "보내기 버튼";
										if(typeof onBtnMsgEmbAppClick == "function") {
											button_1.addEventListener("click", onBtnMsgEmbAppClick);
										}
										container.addChild(button_1, {
											"top": "90px",
											"left": "310px",
											"width": "100px",
											"height": "30px"
										});
									})(group_11);
									container.addChild(group_11, {
										"colIndex": 0,
										"rowIndex": 0
									});
									var embeddedApp_1 = new cpr.controls.EmbeddedApp("embApp");
									embeddedApp_1.style.css({
										"border-right-style" : "solid",
										"border-top-width" : "1px",
										"border-bottom-color" : "black",
										"border-left-style" : "solid",
										"border-right-width" : "1px",
										"border-bottom-width" : "1px",
										"border-left-color" : "black",
										"border-top-color" : "black",
										"border-bottom-style" : "solid",
										"border-right-color" : "black",
										"border-left-width" : "1px",
										"border-top-style" : "solid"
									});
									if(typeof onEmbAppLoad == "function") {
										embeddedApp_1.addEventListener("load", onEmbAppLoad);
									}
									cpr.core.App.load("app/exam/sample/embeddedApp", function(app) {
										if(app){
											embeddedApp_1.app = app;
										}
									});
									container.addChild(embeddedApp_1, {
										"colIndex": 1,
										"rowIndex": 0
									});
								})(group_10);
								container.addChild(group_10, {
									"colIndex": 0,
									"rowIndex": 2
								});
								var userDefinedControl_2 = linker.userDefinedControl_2 = new udc.com.comFormTitle("comformtitle3");
								container.addChild(userDefinedControl_2, {
									"colIndex": 0,
									"rowIndex": 1
								});
								var output_8 = new cpr.controls.Output();
								output_8.value = "setAppProperty 함수를 사용해 메인 앱과 임베디드 앱의 통신을 구현한 샘플입니다.";
								container.addChild(output_8, {
									"colIndex": 0,
									"rowIndex": 0
								});
							})(group_9);
							container.addChild(group_9, {
								"autoSize": "none",
								"width": "1320px",
								"height": "337px"
							});
							var group_12 = new cpr.controls.Container("grp4");
							group_12.fieldLabel = "임베디드 페이지";
							group_12.style.css({
								"border-right-style" : "solid",
								"border-bottom-color" : "darkGray",
								"border-left-style" : "solid",
								"border-left-color" : "darkGray",
								"border-top-color" : "darkGray",
								"border-bottom-style" : "solid",
								"border-right-color" : "darkGray",
								"border-top-style" : "solid"
							});
							// Layout
							var formLayout_4 = new cpr.controls.layouts.FormLayout();
							formLayout_4.scrollable = false;
							formLayout_4.topMargin = "10px";
							formLayout_4.rightMargin = "10px";
							formLayout_4.bottomMargin = "10px";
							formLayout_4.leftMargin = "10px";
							formLayout_4.horizontalSpacing = "5px";
							formLayout_4.verticalSpacing = "5px";
							formLayout_4.setColumns(["1fr"]);
							formLayout_4.setRows(["25px", "25px", "1fr"]);
							group_12.setLayout(formLayout_4);
							(function(container){
								var userDefinedControl_3 = linker.userDefinedControl_3 = new udc.com.comFormTitle("comformtitle2");
								container.addChild(userDefinedControl_3, {
									"colIndex": 0,
									"rowIndex": 1
								});
								var group_13 = new cpr.controls.Container("grp5");
								// Layout
								var formLayout_5 = new cpr.controls.layouts.FormLayout();
								formLayout_5.scrollable = false;
								formLayout_5.topMargin = "0px";
								formLayout_5.rightMargin = "0px";
								formLayout_5.bottomMargin = "0px";
								formLayout_5.leftMargin = "0px";
								formLayout_5.horizontalSpacing = "5px";
								formLayout_5.verticalSpacing = "5px";
								formLayout_5.setColumns(["1fr"]);
								formLayout_5.setRows(["1fr"]);
								group_13.setLayout(formLayout_5);
								(function(container){
									var group_14 = linker.group_14 = new cpr.controls.Container("grp6");
									group_14.fieldLabel = "임베디드 페이지 통신";
									// Layout
									var formLayout_6 = new cpr.controls.layouts.FormLayout();
									formLayout_6.scrollable = false;
									formLayout_6.topMargin = "10px";
									formLayout_6.rightMargin = "0px";
									formLayout_6.bottomMargin = "10px";
									formLayout_6.leftMargin = "0px";
									formLayout_6.horizontalSpacing = "5px";
									formLayout_6.verticalSpacing = "5px";
									formLayout_6.setColumns(["600px", "400px", "1fr"]);
									formLayout_6.setRows(["1fr"]);
									group_14.setLayout(formLayout_6);
									(function(container){
										var group_15 = new cpr.controls.Container("grp8");
										// Layout
										var xYLayout_2 = new cpr.controls.layouts.XYLayout();
										group_15.setLayout(xYLayout_2);
										(function(container){
											var output_9 = new cpr.controls.Output();
											output_9.value = "앱 영역";
											output_9.style.css({
												"font-weight" : "bold"
											});
											container.addChild(output_9, {
												"top": "10px",
												"left": "50px",
												"width": "120px",
												"height": "40px"
											});
											var output_10 = new cpr.controls.Output("mainEmbPgOpt");
											output_10.value = "임베디드 페이지에서 값 받아오기";
											output_10.style.css({
												"border-right-style" : "solid",
												"border-top-width" : "1px",
												"border-bottom-color" : "black",
												"border-right-width" : "1px",
												"padding-left" : "5px",
												"border-left-color" : "black",
												"border-right-color" : "black",
												"border-left-width" : "1px",
												"border-top-style" : "solid",
												"border-left-style" : "solid",
												"border-bottom-width" : "1px",
												"border-top-color" : "black",
												"border-bottom-style" : "solid"
											});
											container.addChild(output_10, {
												"top": "130px",
												"left": "50px",
												"width": "250px",
												"height": "30px"
											});
											var inputBox_2 = new cpr.controls.InputBox("mainEmbPgIpb");
											inputBox_2.placeholder = "전송할 값을 입력해주세요.";
											container.addChild(inputBox_2, {
												"top": "90px",
												"left": "50px",
												"width": "250px",
												"height": "30px"
											});
											var button_2 = new cpr.controls.Button("btnMsgEmbPg");
											button_2.value = "보내기 버튼";
											if(typeof onBtnMsgEmbPgClick == "function") {
												button_2.addEventListener("click", onBtnMsgEmbPgClick);
											}
											container.addChild(button_2, {
												"top": "90px",
												"left": "310px",
												"width": "100px",
												"height": "30px"
											});
										})(group_15);
										container.addChild(group_15, {
											"colIndex": 0,
											"rowIndex": 0
										});
										var embeddedPage_1 = new cpr.controls.EmbeddedPage("embPage");
										embeddedPage_1.src = "app/exam/sample/embeddedPage.html";
										embeddedPage_1.style.css({
											"border-right-style" : "solid",
											"border-top-width" : "1px",
											"border-bottom-color" : "black",
											"border-left-style" : "solid",
											"border-right-width" : "1px",
											"border-bottom-width" : "1px",
											"border-left-color" : "black",
											"border-top-color" : "black",
											"border-bottom-style" : "solid",
											"border-right-color" : "black",
											"border-left-width" : "1px",
											"border-top-style" : "solid"
										});
										if(typeof onEmbPageLoad == "function") {
											embeddedPage_1.addEventListener("load", onEmbPageLoad);
										}
										container.addChild(embeddedPage_1, {
											"colIndex": 1,
											"rowIndex": 0
										});
									})(group_14);
									container.addChild(group_14, {
										"colIndex": 0,
										"rowIndex": 0
									});
								})(group_13);
								container.addChild(group_13, {
									"colIndex": 0,
									"rowIndex": 2
								});
								var output_11 = new cpr.controls.Output();
								output_11.value = "setPageProperty 함수를 사용해 메인 앱과 임베디드 페이지 간의 통신을 구현한 샘플입니다.";
								container.addChild(output_11, {
									"colIndex": 0,
									"rowIndex": 0
								});
							})(group_12);
							container.addChild(group_12, {
								"autoSize": "none",
								"width": "1320px",
								"height": "337px"
							});
							var group_16 = new cpr.controls.Container("grp10");
							group_16.fieldLabel = "window 팝업창";
							group_16.style.css({
								"border-right-style" : "solid",
								"border-bottom-color" : "darkGray",
								"border-left-style" : "solid",
								"border-left-color" : "darkGray",
								"border-top-color" : "darkGray",
								"border-bottom-style" : "solid",
								"border-right-color" : "darkGray",
								"border-top-style" : "solid"
							});
							// Layout
							var formLayout_7 = new cpr.controls.layouts.FormLayout();
							formLayout_7.scrollable = false;
							formLayout_7.topMargin = "10px";
							formLayout_7.rightMargin = "10px";
							formLayout_7.bottomMargin = "10px";
							formLayout_7.leftMargin = "10px";
							formLayout_7.horizontalSpacing = "5px";
							formLayout_7.verticalSpacing = "5px";
							formLayout_7.setColumns(["1fr"]);
							formLayout_7.setRows(["25px", "25px", "1fr"]);
							group_16.setLayout(formLayout_7);
							(function(container){
								var userDefinedControl_4 = linker.userDefinedControl_4 = new udc.com.comFormTitle("comformtitle1");
								container.addChild(userDefinedControl_4, {
									"colIndex": 0,
									"rowIndex": 1
								});
								var group_17 = linker.group_17 = new cpr.controls.Container("grp12");
								group_17.fieldLabel = "window 팝업창 통신";
								// Layout
								var xYLayout_3 = new cpr.controls.layouts.XYLayout();
								group_17.setLayout(xYLayout_3);
								(function(container){
									var button_3 = new cpr.controls.Button("btnPopUp");
									button_3.value = "새 창 열기";
									if(typeof onBtnPopUpClick == "function") {
										button_3.addEventListener("click", onBtnPopUpClick);
									}
									container.addChild(button_3, {
										"top": "100px",
										"left": "644px",
										"width": "180px",
										"height": "70px"
									});
									var inputBox_3 = new cpr.controls.InputBox("mainWindowIpb");
									inputBox_3.placeholder = "전송할 값을 입력해주세요.";
									container.addChild(inputBox_3, {
										"top": "100px",
										"left": "50px",
										"width": "250px",
										"height": "30px"
									});
									var output_12 = new cpr.controls.Output("mainWindowOpt");
									output_12.value = "window 창에서 값 받아오기";
									output_12.style.css({
										"border-right-style" : "solid",
										"border-top-width" : "1px",
										"border-bottom-color" : "black",
										"border-right-width" : "1px",
										"padding-left" : "5px",
										"border-left-color" : "black",
										"border-right-color" : "black",
										"border-left-width" : "1px",
										"border-top-style" : "solid",
										"border-left-style" : "solid",
										"border-bottom-width" : "1px",
										"border-top-color" : "black",
										"border-bottom-style" : "solid"
									});
									container.addChild(output_12, {
										"top": "140px",
										"left": "50px",
										"width": "250px",
										"height": "30px"
									});
									var button_4 = new cpr.controls.Button("btnMsgWindow");
									button_4.value = "보내기 버튼";
									if(typeof onBtnMsgWindowClick == "function") {
										button_4.addEventListener("click", onBtnMsgWindowClick);
									}
									container.addChild(button_4, {
										"top": "100px",
										"left": "310px",
										"width": "100px",
										"height": "30px"
									});
									var output_13 = new cpr.controls.Output();
									output_13.value = "앱 영역";
									output_13.style.css({
										"font-weight" : "bold"
									});
									container.addChild(output_13, {
										"top": "20px",
										"left": "50px",
										"width": "120px",
										"height": "40px"
									});
									var output_14 = new cpr.controls.Output();
									output_14.value = "window 팝업창";
									output_14.style.css({
										"font-weight" : "bold"
									});
									container.addChild(output_14, {
										"top": "20px",
										"left": "620px",
										"width": "120px",
										"height": "40px"
									});
								})(group_17);
								container.addChild(group_17, {
									"colIndex": 0,
									"rowIndex": 2
								});
								var output_15 = new cpr.controls.Output();
								output_15.value = "window.postMessage 함수를 사용해 메인 앱과 window 팝업창 간의 통신을 구현한 샘플입니다.";
								container.addChild(output_15, {
									"colIndex": 0,
									"rowIndex": 0
								});
							})(group_16);
							container.addChild(group_16, {
								"autoSize": "none",
								"width": "1320px",
								"height": "337px"
							});
						})(group_8);
						container.addChild(group_8, {
							"autoSize": "height",
							"width": "1210px",
							"height": "1200px"
						});
					})(group_7);
					container.addChild(group_7, {
						"autoSize": "height",
						"width": "1270px",
						"height": "1200px"
					});
				})(group_6);
				container.addChild(group_6, {
					"autoSize": "height",
					"width": "1270px",
					"height": "1200px"
				});
				var output_16 = new cpr.controls.Output();
				output_16.value = "주요코드";
				output_16.style.setClasses(["h1", "pl-3", "bg-primary", "text-white"]);
				output_16.style.css({
					"font-weight" : "bold",
					"padding-left" : "1rem",
					"font-size" : "1.75rem"
				});
				container.addChild(output_16, {
					"autoSize": "none",
					"width": "1210px",
					"height": "40px"
				});
				var group_18 = new cpr.controls.Container("grp15");
				// Layout
				var verticalLayout_9 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_9.spacing = 20;
				verticalLayout_9.leftMargin = 30;
				verticalLayout_9.rightMargin = 30;
				verticalLayout_9.topMargin = 0;
				verticalLayout_9.bottomMargin = 0;
				group_18.setLayout(verticalLayout_9);
				(function(container){
					var group_19 = new cpr.controls.Container("grp7");
					// Layout
					var formLayout_8 = new cpr.controls.layouts.FormLayout();
					formLayout_8.scrollable = false;
					formLayout_8.topMargin = "0px";
					formLayout_8.rightMargin = "0px";
					formLayout_8.bottomMargin = "0px";
					formLayout_8.leftMargin = "0px";
					formLayout_8.horizontalSpacing = "5px";
					formLayout_8.verticalSpacing = "5px";
					formLayout_8.setColumns(["1fr"]);
					formLayout_8.setRows(["1fr"]);
					group_19.setLayout(formLayout_8);
					(function(container){
						var group_20 = new cpr.controls.Container("grp9");
						group_20.style.setClasses(["form-box"]);
						// Layout
						var verticalLayout_10 = new cpr.controls.layouts.VerticalLayout();
						group_20.setLayout(verticalLayout_10);
						(function(container){
							var userDefinedControl_5 = new udc.tmp.Ace("ace1");
							if(typeof onAce1AfterLoad == "function") {
								userDefinedControl_5.addEventListener("afterLoad", onAce1AfterLoad);
							}
							container.addChild(userDefinedControl_5, {
								"autoSize": "height",
								"width": "300px",
								"height": "300px"
							});
						})(group_20);
						container.addChild(group_20, {
							"colIndex": 0,
							"rowIndex": 0
						});
					})(group_19);
					container.addChild(group_19, {
						"autoSize": "height",
						"width": "1210px",
						"height": "310px"
					});
				})(group_18);
				container.addChild(group_18, {
					"autoSize": "height",
					"width": "1270px",
					"height": "350px"
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "height",
				"width": "1320px",
				"height": "2056px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
			// Linking
			linker.userDefinedControl_2.ctrl = linker.group_10;
			linker.userDefinedControl_3.ctrl = linker.group_14;
			linker.userDefinedControl_4.ctrl = linker.group_17;
		}
	});
	app.title = "통신 예제";
	cpr.core.Platform.INSTANCE.register(app);
})();
