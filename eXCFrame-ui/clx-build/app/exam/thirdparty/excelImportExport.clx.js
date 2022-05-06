/*
 * App URI: app/exam/thirdparty/excelImportExport
 * Source Location: app/exam/thirdparty/excelImportExport.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/thirdparty/excelImportExport", {
		onPrepare: function(loader){
			loader.addScript("thirdparty/excel/FileSaver.min.js");
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			* excelImportExport2.js
			 * Created at 2022. 3. 8. 오후 2:00:32.
			 *
			 * @author aaajd
			 ************************************************/
			
			
			 /************************************************
			  * 전역 변수 선언
			  ************************************************/
			 var responseData;
			 var sendData;
			 var _data;
			 var mbExcelJS = false;
			 /************************************************
			  * 사용자 정의 함수
			  ************************************************/
			 function doList() {
			 	app.lookup("subList").send();
			 }
			 
			 
			  /************************************************
			  * 컨트롤 이벤트
			  ************************************************/
			/*
			 * "https://github.com/eligrey/FileSaver.js" 버튼(btn1)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn1Click(e){
				window.open('https://github.com/eligrey/FileSaver.js');
			}
			
			/*
			 * 사용자 정의 컨트롤에서 afterLoad 이벤트 발생 시 호출.
			 */
			function onAce1AfterLoad(e){
				/* 에디터에 소스 표시 */
				var vcAceEditor = app.lookup("ace1");
				vcAceEditor.value = importExcel + importExcelJs + onCmb1SelectionChange;
			}
			
			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				app.lookup("cmb1").selectItem(0);
			}
			
			/*
			 * "조회" 버튼(btn4)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn4Click(e){
				/** 
			 	 * @type cpr.controls.Button
			 	 */
			 	var btn4 = e.control;
			 	doList();
			}
			
			/*
			 * "초기화" 버튼(btn3)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn3Click(e){
				/** 
			 	 * @type cpr.controls.Button
			 	 */
			 	var btn3 = e.control;
			 	app.lookup("dsList").clear();
			 	
			 	app.lookup("comtitle1").rowCount = 0;
			}
			/************************************************
			  * IMPORT
			  ************************************************/
			 /**
			  * sheetJS 를 통한 엑셀 임포트
			  * @param {cpr.controls.FileInput} pcFileInput
			  */
			 function importExcel(pcFileInput) {
			 	var responseData;
			 	var sendData;
			 	var _data;
			 	
			 	var fileData = pcFileInput.file;
			 	
			 	sendData = moment().valueOf();
			 	
			 	var reader = new FileReader();
			 	
			 	//extend FileReader
			 	if (!FileReader.prototype.readAsBinaryString) {
			 		reader.readAsArrayBuffer(fileData);
			 	} else {
			 		reader.readAsBinaryString(fileData);
			 	}
			 	
			 	reader.onload = function(e) {
			 		
			 		var data = e.target.result;
			 		if (data instanceof ArrayBuffer) {
			 			var binary = "";
			 			var bytes = new Uint8Array(reader.result);
			 			var length = bytes.byteLength;
			 			for (var i = 0; i < length; i++) {
			 				binary += String.fromCharCode(bytes[i]);
			 			}
			 			data = binary;
			 		}
			 		
			 		var workbook = XLSX.read(data, {
			 			type: 'binary'
			 		});
			 		
			 		workbook.SheetNames.forEach(function(item, index) {
			 			ws = workbook.Sheets[item];
			 			var range = XLSX.utils.decode_range(workbook.Sheets[item]['!ref']);
			 			
			 			range.s.r = 1;
			 			//2. 데이터셋에서 컬럼이름 가져오는거
			 			var _header = app.lookup("dsList").getColumnNames();
			 			var EXCEL_JSON;
			 			EXCEL_JSON = XLSX.utils.sheet_to_json(ws, {
			 				range: range,
			 				header: _header
			 			});
			 			
			 			_data = EXCEL_JSON;
			 			
			 		});
			 	};
			 	
			 	reader.onloadend = function(e) {
			 		app.lookup("grdList").dataSet.build(_data, false);
			 	};
			 }
			 
			 /**
			  * excelJS 라이브러리를 통한 엑셀 임포트
			  * @param {cpr.controls.FileInput} pcFileInput
			  */
			 function importExcelJs(pcFileInput) {
			 	var responseData;
			 	var sendData;
			 	var _data;
			 	
			 	sendData = moment().valueOf();
			 	
			 	var reader = new FileReader();
			 	
			 	var workbook = new ExcelJS.Workbook();
			 	var fileData = pcFileInput.file;
			 	
			 	reader.readAsArrayBuffer(fileData);
			 	reader.onload = function(e) {
			 		
			 		var data = e.target.result;
			 		var _header = app.lookup("dsList").getColumnNames();
			 		var EXCEL_JSON = [];
			 		//workbook.xlsx.load(ExcelUtil._s2ab(data)).then(function(workbook) {
			 		workbook.xlsx.load(data).then(function(workbook) {
			 			
			 			workbook.eachSheet(function(worksheet, sheetId) {
			 				worksheet.eachRow({
			 					includeEmpty: false
			 				}, function(row, rowNumber) {
			 					if (rowNumber == 1) return;
			 					
			 					var voData = {};
			 					row.eachCell({
			 						includeEmpty: false
			 					}, function(cell, colNumber) {
			 						voData[_header[colNumber - 1]] = cell.value;
			 					});
			 					EXCEL_JSON.push(voData);
			 				});
			 			});
			 		}).then(function(success) {
			 			app.lookup("grdList").dataSet.build(EXCEL_JSON, false);
			 		}).catch(function(error) {
			 			console.log(error);
			 		});
			 	};
			 	
			 }
			
			/*
			 * "IMPORT" 버튼(btn2)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn2Click(e){
				/** 
			 	 * @type cpr.controls.Button
			 	 */
			 	var btn2 = e.control;
			 	
			 	if (app.lookup("cmb1").getSelectionLast().label.indexOf("excel") != -1) {
			 		mbExcelJS = true;
			 	} else {
			 		mbExcelJS = false;
			 	}
			 	app.lookup("fi1").openFileChooser();
			}
			
			/*
			 * 파일 인풋에서 value-change 이벤트 발생 시 호출.
			 * FileInput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
			 */
			function onFi1ValueChange(e){
				/** 
			 	 * @type cpr.controls.FileInput
			 	 */
			 	var fi1 = e.control;
			 	
			 	if (mbExcelJS) {
			 		/* excelJS */
			 		importExcelJs(fi1);
			 	} else {
			 		/* sheetJS */
			 		importExcel(fi1);
			 	}
			}
			
			/*
			 * "EXPORT" 버튼(btn5)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn5Click(e){
				/** 
			 	 * @type cpr.controls.Button
			 	 */
			 	var btn1 = e.control;
			 	
			 	var resourceLoader = new cpr.core.ResourceLoader();
			 	/* excel.js */
			 	if (app.lookup("cmb1").getSelectionLast().label.indexOf("excel") != -1) {
			 		
			 		var vsFileName = "EXCEL_CLIENT_EXPORT_" + app.lookup("grdList").getRowCount() + "_excelJS.xlsx";
			 		cpr.core.DeferredUpdateManager.INSTANCE.asyncExec(function() {
			 			ExcelUtil.exportExcelJsToJSON(vsFileName, "sheet1", app.lookup("grdList"));
			 		});
			 	} else {
			 		/* sheet.js */
			 		var vsFileName = "EXCEL_CLIENT_EXPORT_" + app.lookup("grdList").getRowCount() + "_sheetJS.xlsx";
			 		cpr.core.DeferredUpdateManager.INSTANCE.asyncExec(function() {
			 			ExcelUtil.exportExcelToJSON(vsFileName, "sheet1", app.lookup("grdList"));
			 		});
			 	}
			}
			
			/*
			 * 콤보 박스에서 selection-change 이벤트 발생 시 호출.
			 * ComboBox Item을 선택하여 선택된 값이 저장된 후에 발생하는 이벤트.
			 */
			function onCmb1SelectionChange(e){
				/** 
			 	 * @type cpr.controls.ComboBox
			 	 */
			 	var cmb1 = e.control;
			 	var resourceLoader = new cpr.core.ResourceLoader();
			 	/* excel.js */
			 	if (e.newSelection[0].label.indexOf("excel") != -1) {
			 		// exceljs의 3.0 version 이상일 경우 ecma6 문법 사용하므로 공통적으로 2.0.0 버젼으로 적용
			 		resourceLoader.addScript("./thirdparty/excel/exceljs.js").load(); // 2.0
			 	} else {
			 		/* sheet.js */
			 		resourceLoader.addScript("./thirdparty/excel/xlsx.min.js").load();
			 	}
			}
			
			/*
			 * "https://github.com/sheetjs/sheetjs" 버튼(btn6)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn6Click(e){
				window.open('https://github.com/sheetjs/sheetjs');
			}
			
			/*
			 * "https://github.com/exceljs/exceljs" 버튼(btn7)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn7Click(e){
				window.open('https://github.com/exceljs/exceljs');
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("dsList");
			dataSet_1.parseData({
				"columns" : [
					{"name": "id"},
					{"name": "first_name"},
					{"name": "last_name"},
					{"name": "email"},
					{"name": "gender"},
					{"name": "ip_address"}
				]
			});
			app.register(dataSet_1);
			var submission_1 = new cpr.protocols.Submission("subList");
			submission_1.async = true;
			submission_1.method = "post";
			submission_1.action = "app/exam/data/temp/default-data.json";
			submission_1.mediaType = "application/x-www-form-urlencoded";
			submission_1.responseType = "text";
			submission_1.addResponseData(dataSet_1, false);
			app.register(submission_1);
			
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
						output_1.value = "엑셀 Import/Export";
						output_1.style.css({
							"font-weight" : "bold",
							"padding-left" : "1rem",
							"font-size" : "2.5rem"
						});
						container.addChild(output_1, {
							"colIndex": 0,
							"rowIndex": 0,
							"colSpan": 2,
							"rowSpan": 1
						});
					})(group_4);
					container.addChild(group_4, {
						"autoSize": "height",
						"width": "1270px",
						"height": "40px"
					});
					var output_2 = new cpr.controls.Output();
					output_2.value = "sheet.js 또는 excel.js 라이브러리를 사용하여 Excel Import/Export를 구현한 화면입니다.";
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
					output_4.value = "1. 기능확인 우측 상단에 'IMPORT'버튼을 누르고 엑셀파일을 선택해 그리드에 잘 표현되는지 확인합니다.\r\n2. 기능확인 우측 상단에 'EXPORT'버튼을 누르고 그리드의 내용이 엑셀파일로 잘 다운받아지는지 확인합니다.";
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
						output_5.value = "FileSaver.js";
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
						button_1.value = "https://github.com/eligrey/FileSaver.js";
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
					var group_7 = new cpr.controls.Container("grp12");
					group_7.style.css({
						"background-color" : "#dff7fb"
					});
					// Layout
					var verticalLayout_7 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_7.spacing = 10;
					verticalLayout_7.leftMargin = 30;
					verticalLayout_7.rightMargin = 30;
					verticalLayout_7.topMargin = 20;
					verticalLayout_7.bottomMargin = 20;
					group_7.setLayout(verticalLayout_7);
					(function(container){
						var output_7 = new cpr.controls.Output();
						output_7.value = "Sheet.js";
						output_7.style.setClasses(["ref-title"]);
						output_7.style.css({
							"color" : "#09c2de",
							"font-weight" : "bold"
						});
						container.addChild(output_7, {
							"width": "100px",
							"height": "25px"
						});
						var output_8 = new cpr.controls.Output();
						output_8.value = "js파일은 아래 링크에서 최신 버전을 다운로드합니다.";
						output_8.style.css({
							"color" : "#09c2de"
						});
						container.addChild(output_8, {
							"autoSize": "height",
							"width": "100px",
							"height": "25px"
						});
						var button_2 = new cpr.controls.Button("btn6");
						button_2.value = "https://github.com/sheetjs/sheetjs";
						button_2.ariaButtonType = "link";
						button_2.style.css({
							"background-color" : "#dff7fb",
							"color" : "false",
							"border-top-width" : "0px",
							"border-right-width" : "0px",
							"border-bottom-width" : "0px",
							"background-image" : "none",
							"border-left-width" : "0px",
							"text-align" : "left"
						});
						if(typeof onBtn6Click == "function") {
							button_2.addEventListener("click", onBtn6Click);
						}
						container.addChild(button_2, {
							"autoSize": "none",
							"width": "1210px",
							"height": "20px"
						});
					})(group_7);
					container.addChild(group_7, {
						"autoSize": "height",
						"width": "1270px",
						"height": "150px"
					});
					var group_8 = new cpr.controls.Container("grp13");
					group_8.style.css({
						"background-color" : "#dff7fb"
					});
					// Layout
					var verticalLayout_8 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_8.spacing = 10;
					verticalLayout_8.leftMargin = 30;
					verticalLayout_8.rightMargin = 30;
					verticalLayout_8.topMargin = 20;
					verticalLayout_8.bottomMargin = 20;
					group_8.setLayout(verticalLayout_8);
					(function(container){
						var output_9 = new cpr.controls.Output();
						output_9.value = "Excel.js";
						output_9.style.setClasses(["ref-title"]);
						output_9.style.css({
							"color" : "#09c2de",
							"font-weight" : "bold"
						});
						container.addChild(output_9, {
							"width": "100px",
							"height": "25px"
						});
						var output_10 = new cpr.controls.Output();
						output_10.value = "js파일은 아래 링크에서 최신 버전을 다운로드합니다.";
						output_10.style.css({
							"color" : "#09c2de"
						});
						container.addChild(output_10, {
							"autoSize": "height",
							"width": "100px",
							"height": "25px"
						});
						var button_3 = new cpr.controls.Button("btn7");
						button_3.value = "https://github.com/exceljs/exceljs";
						button_3.ariaButtonType = "link";
						button_3.style.css({
							"background-color" : "#dff7fb",
							"color" : "false",
							"border-top-width" : "0px",
							"border-right-width" : "0px",
							"border-bottom-width" : "0px",
							"background-image" : "none",
							"border-left-width" : "0px",
							"text-align" : "left"
						});
						if(typeof onBtn7Click == "function") {
							button_3.addEventListener("click", onBtn7Click);
						}
						container.addChild(button_3, {
							"autoSize": "none",
							"width": "1210px",
							"height": "20px"
						});
					})(group_8);
					container.addChild(group_8, {
						"autoSize": "height",
						"width": "1270px",
						"height": "150px"
					});
				})(group_5);
				container.addChild(group_5, {
					"autoSize": "height",
					"width": "1270px",
					"height": "750px"
				});
				var group_9 = new cpr.controls.Container("grpFunction");
				// Layout
				var verticalLayout_9 = new cpr.controls.layouts.VerticalLayout();
				group_9.setLayout(verticalLayout_9);
				(function(container){
					var group_10 = new cpr.controls.Container("grpFuncFloating");
					group_10.userAttr({"floating-header": "true"});
					// Layout
					var verticalLayout_10 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_10.bottomMargin = 30;
					group_10.setLayout(verticalLayout_10);
					(function(container){
						var output_11 = new cpr.controls.Output();
						output_11.value = "기능확인";
						output_11.style.setClasses(["h1", "pl-3", "bg-primary", "text-white"]);
						output_11.style.css({
							"font-weight" : "bold",
							"padding-left" : "1rem",
							"font-size" : "1.75rem"
						});
						container.addChild(output_11, {
							"autoSize": "none",
							"width": "1270px",
							"height": "40px"
						});
						var group_11 = new cpr.controls.Container("grp11");
						group_11.style.css({
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
						var verticalLayout_11 = new cpr.controls.layouts.VerticalLayout();
						verticalLayout_11.leftMargin = 30;
						verticalLayout_11.rightMargin = 30;
						verticalLayout_11.topMargin = 5;
						verticalLayout_11.bottomMargin = 10;
						group_11.setLayout(verticalLayout_11);
						(function(container){
							var group_12 = new cpr.controls.Container("grp10");
							// Layout
							var formLayout_2 = new cpr.controls.layouts.FormLayout();
							formLayout_2.scrollable = false;
							formLayout_2.topMargin = "0px";
							formLayout_2.rightMargin = "0px";
							formLayout_2.bottomMargin = "0px";
							formLayout_2.leftMargin = "0px";
							formLayout_2.horizontalSpacing = "5px";
							formLayout_2.verticalSpacing = "5px";
							formLayout_2.setColumns(["1fr", "10px", "100px", "60px", "60px", "60px", "60px"]);
							formLayout_2.setColumnVisible(1, false);
							formLayout_2.setRows(["1fr"]);
							group_12.setLayout(formLayout_2);
							(function(container){
								var fileInput_1 = new cpr.controls.FileInput("fi1");
								if(typeof onFi1ValueChange == "function") {
									fileInput_1.addEventListener("value-change", onFi1ValueChange);
								}
								container.addChild(fileInput_1, {
									"colIndex": 1,
									"rowIndex": 0
								});
								var button_4 = new cpr.controls.Button("btn4");
								button_4.value = "조회";
								button_4.style.setClasses(["btn-primary"]);
								if(typeof onBtn4Click == "function") {
									button_4.addEventListener("click", onBtn4Click);
								}
								container.addChild(button_4, {
									"colIndex": 3,
									"rowIndex": 0
								});
								var button_5 = new cpr.controls.Button("btn3");
								button_5.value = "초기화";
								button_5.style.setClasses(["btn-secondary"]);
								if(typeof onBtn3Click == "function") {
									button_5.addEventListener("click", onBtn3Click);
								}
								container.addChild(button_5, {
									"colIndex": 4,
									"rowIndex": 0
								});
								var button_6 = new cpr.controls.Button("btn2");
								button_6.value = "IMPORT";
								button_6.style.setClasses(["btn-success"]);
								if(typeof onBtn2Click == "function") {
									button_6.addEventListener("click", onBtn2Click);
								}
								container.addChild(button_6, {
									"colIndex": 5,
									"rowIndex": 0
								});
								var button_7 = new cpr.controls.Button("btn5");
								button_7.value = "EXPORT";
								button_7.style.setClasses(["btn-danger"]);
								if(typeof onBtn5Click == "function") {
									button_7.addEventListener("click", onBtn5Click);
								}
								container.addChild(button_7, {
									"colIndex": 6,
									"rowIndex": 0
								});
								var userDefinedControl_2 = linker.userDefinedControl_2 = new udc.com.comTitle("comtitle1");
								userDefinedControl_2.showExportExcel = false;
								container.addChild(userDefinedControl_2, {
									"colIndex": 0,
									"rowIndex": 0
								});
								var comboBox_1 = new cpr.controls.ComboBox("cmb1");
								comboBox_1.preventInput = true;
								(function(comboBox_1){
									comboBox_1.addItem(new cpr.controls.Item("excel.js", "excel"));
									comboBox_1.addItem(new cpr.controls.Item("sheet.js", "sheet"));
								})(comboBox_1);
								if(typeof onCmb1SelectionChange == "function") {
									comboBox_1.addEventListener("selection-change", onCmb1SelectionChange);
								}
								container.addChild(comboBox_1, {
									"colIndex": 2,
									"rowIndex": 0
								});
							})(group_12);
							container.addChild(group_12, {
								"autoSize": "none",
								"width": "1320px",
								"height": "25px"
							});
							var grid_1 = linker.grid_1 = new cpr.controls.Grid("grdList");
							grid_1.fieldLabel = "그리드 Import/Export";
							grid_1.readOnly = false;
							grid_1.init({
								"dataSet": app.lookup("dsList"),
								"columnMovable": false,
								"autoFit": "0, 1, 2, 3, 4, 5",
								"columns": [
									{"width": "100px"},
									{"width": "100px"},
									{"width": "100px"},
									{"width": "100px"},
									{"width": "100px"},
									{"width": "100px"}
								],
								"header": {
									"rows": [{"height": "30px"}],
									"cells": [
										{
											"constraint": {"rowIndex": 0, "colIndex": 0},
											"configurator": function(cell){
												cell.targetColumnName = "id";
												cell.filterable = false;
												cell.sortable = false;
												cell.text = "아이디";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 1},
											"configurator": function(cell){
												cell.targetColumnName = "first_name";
												cell.filterable = false;
												cell.sortable = false;
												cell.text = "이름";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 2},
											"configurator": function(cell){
												cell.targetColumnName = "last_name";
												cell.filterable = false;
												cell.sortable = false;
												cell.text = "성";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 3},
											"configurator": function(cell){
												cell.targetColumnName = "email";
												cell.filterable = false;
												cell.sortable = false;
												cell.text = "이메일";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 4},
											"configurator": function(cell){
												cell.targetColumnName = "gender";
												cell.filterable = false;
												cell.sortable = false;
												cell.text = "성별";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 5},
											"configurator": function(cell){
												cell.targetColumnName = "ip_address";
												cell.filterable = false;
												cell.sortable = false;
												cell.text = "아이피";
											}
										}
									]
								},
								"detail": {
									"rows": [{"height": "30px"}],
									"cells": [
										{
											"constraint": {"rowIndex": 0, "colIndex": 0},
											"configurator": function(cell){
												cell.columnName = "id";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 1},
											"configurator": function(cell){
												cell.columnName = "first_name";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 2},
											"configurator": function(cell){
												cell.columnName = "last_name";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 3},
											"configurator": function(cell){
												cell.columnName = "email";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 4},
											"configurator": function(cell){
												cell.columnName = "gender";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 5},
											"configurator": function(cell){
												cell.columnName = "ip_address";
											}
										}
									]
								}
							});
							container.addChild(grid_1, {
								"autoSize": "none",
								"width": "1320px",
								"height": "585px"
							});
						})(group_11);
						container.addChild(group_11, {
							"autoSize": "height",
							"width": "1210px",
							"height": "700px"
						});
					})(group_10);
					container.addChild(group_10, {
						"autoSize": "height",
						"width": "1270px",
						"height": "700px"
					});
				})(group_9);
				container.addChild(group_9, {
					"autoSize": "height",
					"width": "1270px",
					"height": "700px"
				});
				var output_12 = new cpr.controls.Output();
				output_12.value = "주요코드";
				output_12.style.setClasses(["h1", "pl-3", "bg-primary", "text-white"]);
				output_12.style.css({
					"font-weight" : "bold",
					"padding-left" : "1rem",
					"font-size" : "1.75rem"
				});
				container.addChild(output_12, {
					"autoSize": "none",
					"width": "1210px",
					"height": "40px"
				});
				var group_13 = new cpr.controls.Container("grp15");
				// Layout
				var verticalLayout_12 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_12.spacing = 20;
				verticalLayout_12.leftMargin = 30;
				verticalLayout_12.rightMargin = 30;
				verticalLayout_12.topMargin = 0;
				verticalLayout_12.bottomMargin = 0;
				group_13.setLayout(verticalLayout_12);
				(function(container){
					var group_14 = new cpr.controls.Container("grp7");
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
					group_14.setLayout(formLayout_3);
					(function(container){
						var group_15 = new cpr.controls.Container("grp9");
						group_15.style.setClasses(["form-box"]);
						// Layout
						var verticalLayout_13 = new cpr.controls.layouts.VerticalLayout();
						group_15.setLayout(verticalLayout_13);
						(function(container){
							var userDefinedControl_3 = new udc.tmp.Ace("ace1");
							if(typeof onAce1AfterLoad == "function") {
								userDefinedControl_3.addEventListener("afterLoad", onAce1AfterLoad);
							}
							container.addChild(userDefinedControl_3, {
								"autoSize": "height",
								"width": "300px",
								"height": "300px"
							});
						})(group_15);
						container.addChild(group_15, {
							"colIndex": 0,
							"rowIndex": 0
						});
					})(group_14);
					container.addChild(group_14, {
						"autoSize": "height",
						"width": "1210px",
						"height": "310px"
					});
				})(group_13);
				container.addChild(group_13, {
					"autoSize": "height",
					"width": "1270px",
					"height": "350px"
				});
				var group_16 = new cpr.controls.Container("grp5");
				group_16.style.setClasses(["card-inner"]);
				// Layout
				var verticalLayout_14 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_14.spacing = 15;
				verticalLayout_14.leftMargin = 0;
				verticalLayout_14.rightMargin = 0;
				verticalLayout_14.topMargin = 20;
				verticalLayout_14.bottomMargin = 40;
				group_16.setLayout(verticalLayout_14);
				(function(container){
					var output_13 = new cpr.controls.Output();
					output_13.value = "서드파티 버전 및 라이센스 정책";
					output_13.style.setClasses(["h1", "pl-3", "bg-primary", "text-white"]);
					output_13.style.css({
						"font-weight" : "bold",
						"padding-left" : "1rem",
						"font-size" : "1.75rem"
					});
					container.addChild(output_13, {
						"autoSize": "none",
						"width": "1270px",
						"height": "40px"
					});
					var group_17 = new cpr.controls.Container("grp6");
					group_17.style.css({
						"background-color" : "#FFF5EF"
					});
					// Layout
					var verticalLayout_15 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_15.leftMargin = 30;
					verticalLayout_15.rightMargin = 30;
					verticalLayout_15.topMargin = 20;
					verticalLayout_15.bottomMargin = 20;
					group_17.setLayout(verticalLayout_15);
					(function(container){
						var output_14 = new cpr.controls.Output();
						output_14.value = "서드파티 버전";
						output_14.style.css({
							"color" : "#FF9149",
							"font-weight" : "bolder"
						});
						container.addChild(output_14, {
							"width": "100px",
							"height": "25px"
						});
						var output_15 = new cpr.controls.Output();
						output_15.value = "FileSaver.js v2.0.4";
						output_15.style.css({
							"color" : "#FF9149"
						});
						container.addChild(output_15, {
							"autoSize": "height",
							"width": "100px",
							"height": "25px"
						});
					})(group_17);
					container.addChild(group_17, {
						"autoSize": "height",
						"width": "1040px",
						"height": "100px"
					});
					var group_18 = new cpr.controls.Container("grp8");
					group_18.style.css({
						"background-color" : "#FFF5EF"
					});
					// Layout
					var verticalLayout_16 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_16.leftMargin = 30;
					verticalLayout_16.rightMargin = 30;
					verticalLayout_16.topMargin = 20;
					verticalLayout_16.bottomMargin = 20;
					group_18.setLayout(verticalLayout_16);
					(function(container){
						var output_16 = new cpr.controls.Output();
						output_16.value = "라이센스 정책 및 호환";
						output_16.style.css({
							"color" : "#FF9149",
							"font-weight" : "bolder"
						});
						container.addChild(output_16, {
							"width": "100px",
							"height": "25px"
						});
						var output_17 = new cpr.controls.Output();
						output_17.value = "FileSaver - MIT License를 따릅니다.\r\nSheetJS - Apache-2.0 License를 따릅니다.\r\nExcelJS - MIT License를 따릅니다.";
						output_17.style.css({
							"color" : "#FF9149"
						});
						container.addChild(output_17, {
							"autoSize": "height",
							"width": "100px",
							"height": "86px"
						});
					})(group_18);
					container.addChild(group_18, {
						"autoSize": "height",
						"width": "1270px",
						"height": "250px"
					});
				})(group_16);
				container.addChild(group_16, {
					"autoSize": "height",
					"width": "1100px",
					"height": "500px"
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "height",
				"width": "1320px",
				"height": "2600px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
			// Linking
			linker.userDefinedControl_2.ctrl = linker.grid_1;
		}
	});
	app.title = "엑셀 Import/Export";
	cpr.core.Platform.INSTANCE.register(app);
})();