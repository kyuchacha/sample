/*
 * App URI: app/exam/thirdparty/qrcode
 * Source Location: app/exam/thirdparty/qrcode.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/thirdparty/qrcode", {
		onPrepare: function(loader){
			loader.addScript("thirdparty/html5qrcode/html5-qrcode.min.js");
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			* qrcode2.js
			 * Created at 2022. 3. 8. 오전 11:02:22.
			 *
			 * @author aaajd
			 ************************************************/
			
			/*
			 * "https://github.com/mebjas/html5-qrcode" 버튼(btn1)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn1Click(e){
				window.open('https://github.com/mebjas/html5-qrcode');
			}
			
			/*
			 * 사용자 정의 컨트롤에서 afterLoad 이벤트 발생 시 호출.
			 */
			function onAce1AfterLoad(e){
				/* 에디터에 소스 표시 */
				var vcAceEditor = app.lookup("ace1");
				vcAceEditor.value = onShlQrcodeLoad;
			}
			
			/*
			 * 쉘에서 load 이벤트 발생 시 호출.
			 */
			function onShlQrcodeLoad(e){
				/** 
				 * @type cpr.controls.UIControlShell
				 */
				var shl1 = e.control;
				var elqrcode = document.createElement("div");
				e.content.appendChild(elqrcode).id = "qr-reader";
				var elqrcoderesult = document.createElement("div");
				e.content.appendChild(elqrcoderesult).id = "qr-reader-results";
				
				function docReady(fn) {
					// see if DOM is already available
					if (document.readyState === "complete" ||
						document.readyState === "interactive") {
						// call on next available tick
						setTimeout(fn, 1);
					} else {
						document.addEventListener("DOMContentLoaded", fn);
					}
				}
				
				docReady(function() {
					var resultContainer = document.getElementById('qr-reader-results');
					var lastResult, countResults = 0;
					
					function onScanSuccess(decodedText, decodedResult) {
						if (decodedText !== lastResult) {
							++countResults;
							lastResult = decodedText;
						
						}
			
						app.lookup("txaResult").value = lastResult ;
						window.open(lastResult)
					}
					
					var html5QrcodeScanner = new Html5QrcodeScanner(
						"qr-reader", {
							fps: 10,
							qrbox: 250
						});
					html5QrcodeScanner.render(onScanSuccess);
				});
			};
			// End - User Script
			
			// Header
			var dataMap_1 = new cpr.data.DataMap("dmParam");
			dataMap_1.parseData({
				"columns" : [{"name": "qr_result"}]
			});
			app.register(dataMap_1);
			
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
						output_1.value = "QR 코드 리더";
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
					output_2.value = "Html5-QRcode 라이브러리를 사용해 QR코드 스캐너를 구현한 화면입니다.";
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
					output_4.value = "1. Request Camera Permissions 버튼을 클릭하고 카메라 권한을 허용합니다.\r\n2. 카메라에 QR코드를 인식시킵니다.\r\n3. 결과창에 결과가 정상적으로 출력되는지 확인합니다.";
					output_4.style.setClasses(["opt-tmpl"]);
					output_4.style.css({
						"padding-left" : "1rem",
						"font-size" : "1rem"
					});
					container.addChild(output_4, {
						"autoSize": "height",
						"width": "1210px",
						"height": "107px"
					});
					var group_6 = new cpr.controls.Container("grp4");
					group_6.style.css({
						"background-color" : "#dff7fb"
					});
					// Layout
					var verticalLayout_6 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_6.spacing = 10;
					verticalLayout_6.leftMargin = 30;
					verticalLayout_6.rightMargin = 30;
					verticalLayout_6.topMargin = 20;
					verticalLayout_6.bottomMargin = 20;
					group_6.setLayout(verticalLayout_6);
					(function(container){
						var output_5 = new cpr.controls.Output();
						output_5.value = "Html5-QRcode";
						output_5.style.setClasses(["ref-title"]);
						output_5.style.css({
							"color" : "#09c2de",
							"font-weight" : "bold"
						});
						container.addChild(output_5, {
							"width": "100px",
							"height": "25px"
						});
						var output_6 = new cpr.controls.Output();
						output_6.value = "js파일은 아래 링크에서 최신 버전을 다운로드합니다.";
						output_6.style.css({
							"color" : "#09c2de"
						});
						container.addChild(output_6, {
							"autoSize": "height",
							"width": "100px",
							"height": "25px"
						});
						var button_1 = new cpr.controls.Button("btn1");
						button_1.value = "https://github.com/mebjas/html5-qrcode";
						button_1.ariaButtonType = "link";
						button_1.style.css({
							"background-color" : "#dff7fb",
							"color" : "false",
							"border-top-width" : "0px",
							"border-right-width" : "0px",
							"border-bottom-width" : "0px",
							"background-image" : "none",
							"border-left-width" : "0px",
							"text-align" : "left"
						});
						if(typeof onBtn1Click == "function") {
							button_1.addEventListener("click", onBtn1Click);
						}
						container.addChild(button_1, {
							"autoSize": "none",
							"width": "1210px",
							"height": "20px"
						});
					})(group_6);
					container.addChild(group_6, {
						"autoSize": "height",
						"width": "1100px",
						"height": "150px"
					});
				})(group_5);
				container.addChild(group_5, {
					"autoSize": "height",
					"width": "1270px",
					"height": "370px"
				});
				var group_7 = new cpr.controls.Container("grpFunction");
				// Layout
				var verticalLayout_7 = new cpr.controls.layouts.VerticalLayout();
				group_7.setLayout(verticalLayout_7);
				(function(container){
					var group_8 = new cpr.controls.Container("grpFuncFloating");
					group_8.userAttr({"floating-header": "true"});
					// Layout
					var verticalLayout_8 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_8.bottomMargin = 30;
					group_8.setLayout(verticalLayout_8);
					(function(container){
						var output_7 = new cpr.controls.Output();
						output_7.value = "기능확인";
						output_7.style.setClasses(["h1", "pl-3", "bg-primary", "text-white"]);
						output_7.style.css({
							"font-weight" : "bold",
							"padding-left" : "1rem",
							"font-size" : "1.75rem"
						});
						container.addChild(output_7, {
							"autoSize": "none",
							"width": "1270px",
							"height": "40px"
						});
						var group_9 = new cpr.controls.Container("grp11");
						group_9.style.css({
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
						var verticalLayout_9 = new cpr.controls.layouts.VerticalLayout();
						verticalLayout_9.leftMargin = 30;
						verticalLayout_9.rightMargin = 30;
						verticalLayout_9.topMargin = 5;
						verticalLayout_9.bottomMargin = 10;
						group_9.setLayout(verticalLayout_9);
						(function(container){
							var userDefinedControl_2 = linker.userDefinedControl_2 = new udc.com.comFormTitle("comformtitle1");
							container.addChild(userDefinedControl_2, {
								"autoSize": "none",
								"width": "1024px",
								"height": "25px"
							});
							var group_10 = new cpr.controls.Container("grp10");
							// Layout
							var formLayout_2 = new cpr.controls.layouts.FormLayout();
							formLayout_2.scrollable = false;
							formLayout_2.topMargin = "0px";
							formLayout_2.rightMargin = "0px";
							formLayout_2.bottomMargin = "0px";
							formLayout_2.leftMargin = "0px";
							formLayout_2.horizontalSpacing = "0px";
							formLayout_2.verticalSpacing = "0px";
							formLayout_2.setColumns(["1fr", "1fr", "1fr"]);
							formLayout_2.setRows(["1fr"]);
							group_10.setLayout(formLayout_2);
							(function(container){
								var uIControlShell_1 = linker.uIControlShell_1 = new cpr.controls.UIControlShell("shlQrcode");
								uIControlShell_1.fieldLabel = "QR 코드";
								if(typeof onShlQrcodeLoad == "function") {
									uIControlShell_1.addEventListener("load", onShlQrcodeLoad);
								}
								container.addChild(uIControlShell_1, {
									"colIndex": 1,
									"rowIndex": 0
								});
							})(group_10);
							container.addChild(group_10, {
								"width": "400px",
								"height": "500px"
							});
							var userDefinedControl_3 = linker.userDefinedControl_3 = new udc.com.comFormTitle("comformtitle2");
							container.addChild(userDefinedControl_3, {
								"autoSize": "none",
								"width": "1024px",
								"height": "25px"
							});
							var textArea_1 = linker.textArea_1 = new cpr.controls.TextArea("txaResult");
							textArea_1.fieldLabel = "결과창";
							container.addChild(textArea_1, {
								"autoSize": "none",
								"width": "1024px",
								"height": "213px"
							});
						})(group_9);
						container.addChild(group_9, {
							"autoSize": "height",
							"width": "1210px",
							"height": "800px"
						});
					})(group_8);
					container.addChild(group_8, {
						"autoSize": "height",
						"width": "1270px",
						"height": "800px"
					});
				})(group_7);
				container.addChild(group_7, {
					"autoSize": "height",
					"width": "1270px",
					"height": "800px"
				});
				var output_8 = new cpr.controls.Output();
				output_8.value = "주요코드";
				output_8.style.setClasses(["h1", "pl-3", "bg-primary", "text-white"]);
				output_8.style.css({
					"font-weight" : "bold",
					"padding-left" : "1rem",
					"font-size" : "1.75rem"
				});
				container.addChild(output_8, {
					"autoSize": "none",
					"width": "1210px",
					"height": "40px"
				});
				var group_11 = new cpr.controls.Container("grp15");
				// Layout
				var verticalLayout_10 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_10.spacing = 20;
				verticalLayout_10.leftMargin = 30;
				verticalLayout_10.rightMargin = 30;
				verticalLayout_10.topMargin = 0;
				verticalLayout_10.bottomMargin = 0;
				group_11.setLayout(verticalLayout_10);
				(function(container){
					var group_12 = new cpr.controls.Container("grp7");
					// Layout
					var formLayout_3 = new cpr.controls.layouts.FormLayout();
					formLayout_3.scrollable = false;
					formLayout_3.topMargin = "0px";
					formLayout_3.rightMargin = "0px";
					formLayout_3.bottomMargin = "0px";
					formLayout_3.leftMargin = "0px";
					formLayout_3.horizontalSpacing = "5px";
					formLayout_3.verticalSpacing = "5px";
					formLayout_3.setColumns(["1fr"]);
					formLayout_3.setRows(["1fr"]);
					group_12.setLayout(formLayout_3);
					(function(container){
						var group_13 = new cpr.controls.Container("grp9");
						group_13.style.setClasses(["form-box"]);
						// Layout
						var verticalLayout_11 = new cpr.controls.layouts.VerticalLayout();
						group_13.setLayout(verticalLayout_11);
						(function(container){
							var userDefinedControl_4 = new udc.tmp.Ace("ace1");
							if(typeof onAce1AfterLoad == "function") {
								userDefinedControl_4.addEventListener("afterLoad", onAce1AfterLoad);
							}
							container.addChild(userDefinedControl_4, {
								"autoSize": "height",
								"width": "300px",
								"height": "300px"
							});
						})(group_13);
						container.addChild(group_13, {
							"colIndex": 0,
							"rowIndex": 0
						});
					})(group_12);
					container.addChild(group_12, {
						"autoSize": "height",
						"width": "1210px",
						"height": "310px"
					});
				})(group_11);
				container.addChild(group_11, {
					"autoSize": "height",
					"width": "1270px",
					"height": "350px"
				});
				var group_14 = new cpr.controls.Container("grp5");
				group_14.style.setClasses(["card-inner"]);
				// Layout
				var verticalLayout_12 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_12.spacing = 15;
				verticalLayout_12.leftMargin = 0;
				verticalLayout_12.rightMargin = 0;
				verticalLayout_12.topMargin = 20;
				verticalLayout_12.bottomMargin = 40;
				group_14.setLayout(verticalLayout_12);
				(function(container){
					var output_9 = new cpr.controls.Output();
					output_9.value = "서드파티 버전 및 라이센스 정책";
					output_9.style.setClasses(["h1", "pl-3", "bg-primary", "text-white"]);
					output_9.style.css({
						"font-weight" : "bold",
						"padding-left" : "1rem",
						"font-size" : "1.75rem"
					});
					container.addChild(output_9, {
						"autoSize": "none",
						"width": "1270px",
						"height": "40px"
					});
					var group_15 = new cpr.controls.Container("grp6");
					group_15.style.css({
						"background-color" : "#FFF5EF"
					});
					// Layout
					var verticalLayout_13 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_13.leftMargin = 30;
					verticalLayout_13.rightMargin = 30;
					verticalLayout_13.topMargin = 20;
					verticalLayout_13.bottomMargin = 20;
					group_15.setLayout(verticalLayout_13);
					(function(container){
						var output_10 = new cpr.controls.Output();
						output_10.value = "서드파티 버전";
						output_10.style.css({
							"color" : "#FF9149",
							"font-weight" : "bolder"
						});
						container.addChild(output_10, {
							"width": "100px",
							"height": "25px"
						});
						var output_11 = new cpr.controls.Output();
						output_11.value = "Html5-QRcode 2.2.0";
						output_11.style.css({
							"color" : "#FF9149"
						});
						container.addChild(output_11, {
							"autoSize": "height",
							"width": "100px",
							"height": "25px"
						});
					})(group_15);
					container.addChild(group_15, {
						"autoSize": "height",
						"width": "1040px",
						"height": "100px"
					});
					var group_16 = new cpr.controls.Container("grp8");
					group_16.style.css({
						"background-color" : "#FFF5EF"
					});
					// Layout
					var verticalLayout_14 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_14.leftMargin = 30;
					verticalLayout_14.rightMargin = 30;
					verticalLayout_14.topMargin = 20;
					verticalLayout_14.bottomMargin = 20;
					group_16.setLayout(verticalLayout_14);
					(function(container){
						var output_12 = new cpr.controls.Output();
						output_12.value = "라이센스 정책 및 호환";
						output_12.style.css({
							"color" : "#FF9149",
							"font-weight" : "bolder"
						});
						container.addChild(output_12, {
							"width": "100px",
							"height": "25px"
						});
						var output_13 = new cpr.controls.Output();
						output_13.value = "Apache 2.0 라이센스를 따릅니다.";
						output_13.style.css({
							"color" : "#FF9149"
						});
						container.addChild(output_13, {
							"autoSize": "height",
							"width": "100px",
							"height": "25px"
						});
					})(group_16);
					container.addChild(group_16, {
						"autoSize": "height",
						"width": "1270px",
						"height": "250px"
					});
				})(group_14);
				container.addChild(group_14, {
					"autoSize": "height",
					"width": "1100px",
					"height": "500px"
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "height",
				"width": "1320px",
				"height": "2056px"
			});
			// Linking
			linker.userDefinedControl_2.ctrl = linker.uIControlShell_1;
			linker.userDefinedControl_3.ctrl = linker.textArea_1;
		}
	});
	app.title = "QR 코드";
	cpr.core.Platform.INSTANCE.register(app);
})();
