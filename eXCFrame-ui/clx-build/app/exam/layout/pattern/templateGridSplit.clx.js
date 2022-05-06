/*
 * App URI: app/exam/layout/pattern/templateGridSplit
 * Source Location: app/exam/layout/pattern/templateGridSplit.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/layout/pattern/templateGridSplit", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			//공통 모듈 사용
			var util = createCommonUtil();
			
			/*
			 * Body에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(/* cpr.events.CEvent */ e){
				
				util.Submit.send(app, "subOnLoad", function(pbSuccess) {
					if (pbSuccess) {
						util.Control.redraw(app, "cmbJob");
						util.ComUdcBtn.dispatchEvent(app, "btnSearch", "click");
					}
				});
			}
			
			/*
			 * 사용자 정의 컨트롤에서 search 이벤트 발생 시 호출.
			 * 조회버튼 클릭시 이벤트
			 */
			function onCombtnsearchSearch(/* cpr.events.CUIEvent */ e){
				// 1. 데이터 변경사항 체크
				if (util.Grid.isModified(app, "grdMain", "CRM")) {
					return false;
				}
				
				// 2. 조회조건 유효성 체크
				if(!util.validate(app, "grpSearch")) return false;
				
				// 3. 데이터 조회
				doList();
				
			}
			
			/**
			 * 그리드 데이터를 조회
			 * @param psStatus - 조회 상태(저장 후 조회인 경우에는 'save' 구분값 넘김)
			 * 
			 */
			function doList(psStatus) {
				util.Submit.send(app, "subList", function(pbSuccess) {
					if(pbSuccess) {
						if(psStatus == "save"){
							//갱신된 데이터가 조회되었습니다.
							util.Msg.notify(app, "INF-M005");
						}else{
							//조회되었습니다.
							util.Msg.notify(app, "INF-M001");
							util.Grid.selectRow(app, "grdMain", 0);
						}
					}
				});
			}
			
			/*
			 * 사용자 정의 컨트롤에서 save 이벤트 발생 시 호출.
			 * 저장 클릭 이벤트
			 */
			function onCombutton1Save(/* cpr.events.CUIEvent */ e){
				// 1. 데이터 변경사항 체크
				if (!util.Grid.isModified(app, "grdMain", "MSG")) return false;
				
				// 2. 유효성 체크
				if (!util.validate(app, "grdMain")) return false;
				
				// 3. 데이터 저장
				util.Submit.send(app, "subSave", function(pbSuccess){
					if(pbSuccess){
						doList("save");
					}
				});
			}
			
			
			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSubListSubmitSuccess(/* cpr.events.CSubmissionEvent */ e){
				/** 
				 * @type cpr.protocols.Submission
				 */
				var subList = e.control;
				var vcGrid = app.lookup("grdMain");
				vcGrid.topSplit = 3;
				vcGrid.topSplitHeight = 80;
				vcGrid.bottomSplit = 3;
				vcGrid.bottomSplitHeight = 80;
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("dsJob");
			dataSet_1.parseData({
				"columns" : [
					{"name": "CD_NM"},
					{"name": "CD"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("dsEmp");
			dataSet_2.parseData({
				"info": "EMPNO",
				"columns": [
					{
						"name": "EMPNO",
						"dataType": "number"
					},
					{"name": "ENAME"},
					{"name": "JOB"},
					{
						"name": "MGR",
						"dataType": "number"
					},
					{"name": "HIREDATE"},
					{
						"name": "SAL",
						"dataType": "decimal"
					},
					{
						"name": "COMM",
						"dataType": "decimal"
					},
					{
						"name": "DEPTNO",
						"dataType": "number"
					},
					{
						"name": "AGE",
						"dataType": "number"
					},
					{"name": "GENDER"},
					{"name": "BRTDY"},
					{"name": "NATION"},
					{"name": "LOGINID"},
					{"name": "PWD"},
					{"name": "EMAIL"},
					{"name": "PHONENUM"},
					{"name": "ADDRESS"}
				],
				"rows": []
			});
			app.register(dataSet_2);
			
			var dataSet_3 = new cpr.data.DataSet("dsGender");
			dataSet_3.parseData({
				"columns" : [
					{"name": "CD_NM"},
					{"name": "CD"}
				]
			});
			app.register(dataSet_3);
			
			var dataSet_4 = new cpr.data.DataSet("dsNat");
			dataSet_4.parseData({
				"columns" : [
					{"name": "CD_NM"},
					{"name": "CD"}
				]
			});
			app.register(dataSet_4);
			var dataMap_1 = new cpr.data.DataMap("dmParam");
			dataMap_1.parseData({
				"columns" : [
					{"name": "strEName"},
					{"name": "strJob"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("subOnLoad");
			submission_1.action = "app/exam/data/temp/template.json";
			submission_1.mediaType = "application/x-www-form-urlencoded";
			submission_1.addResponseData(dataSet_1, false);
			submission_1.addResponseData(dataSet_3, false);
			submission_1.addResponseData(dataSet_4, false);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("subList");
			submission_2.action = "app/exam/data/temp/template.json";
			submission_2.mediaType = "application/x-www-form-urlencoded";
			submission_2.addRequestData(dataMap_1);
			submission_2.addResponseData(dataSet_2, false);
			if(typeof onSubListSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onSubListSubmitSuccess);
			}
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("subSave");
			submission_3.action = "app/exam/data/temp/template.json";
			submission_3.mediaType = "application/x-www-form-urlencoded";
			submission_3.addRequestData(dataSet_2);
			app.register(submission_3);
			
			app.supportMedia("all and (min-width: 1320px)", "eXFrame");
			app.supportMedia("all and (min-width: 1235px) and (max-width: 1319px)", "default");
			app.supportMedia("all and (min-width: 760px) and (max-width: 1234px)", "tablet");
			app.supportMedia("all and (max-width: 759px)", "mobile");
			
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
			var group_1 = new cpr.controls.Container("grpHeader");
			group_1.style.setClasses(["header-box"]);
			// Layout
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.spacing = 0;
			group_1.setLayout(verticalLayout_2);
			(function(container){
				var userDefinedControl_1 = linker.userDefinedControl_1 = new udc.com.appHeader("appheader");
				userDefinedControl_1.groupBoxIds = "grpData";
				container.addChild(userDefinedControl_1, {
					"autoSize": "none",
					"width": "1320px",
					"height": "30px"
				});
				var group_2 = new cpr.controls.Container("grpSearch");
				group_2.userAttr({
					"mobile-column-count": "2",
					"tablet-column-count": "2"
				});
				group_2.style.setClasses(["search-box"]);
				// Layout
				var formLayout_1 = new cpr.controls.layouts.FormLayout();
				formLayout_1.topMargin = "5px";
				formLayout_1.rightMargin = "5px";
				formLayout_1.bottomMargin = "5px";
				formLayout_1.leftMargin = "5px";
				formLayout_1.setColumns(["120px", "120px", "120px", "200px", "1fr", "60px"]);
				formLayout_1.setRows(["25px"]);
				formLayout_1.setRowAutoSizing(0, true);
				group_2.setLayout(formLayout_1);
				(function(container){
					var output_1 = new cpr.controls.Output();
					output_1.value = "사원명";
					container.addChild(output_1, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var inputBox_1 = new cpr.controls.InputBox("ipbEName");
					inputBox_1.fieldLabel = "사원명";
					inputBox_1.userAttr({"autoKeydownSearch": "Y"});
					inputBox_1.bind("value").toDataMap(app.lookup("dmParam"), "strEName");
					container.addChild(inputBox_1, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var output_2 = new cpr.controls.Output();
					output_2.value = "직급";
					container.addChild(output_2, {
						"colIndex": 2,
						"rowIndex": 0
					});
					var comboBox_1 = new cpr.controls.ComboBox("cmbJob");
					comboBox_1.fieldLabel = "직급";
					comboBox_1.bind("value").toDataMap(app.lookup("dmParam"), "strJob");
					(function(comboBox_1){
						comboBox_1.addItem(new cpr.controls.Item("전체", ""));
						comboBox_1.setItemSet(app.lookup("dsJob"), {
							"label": "CD_NM",
							"value": "CD"
						});
					})(comboBox_1);
					container.addChild(comboBox_1, {
						"colIndex": 3,
						"rowIndex": 0
					});
					var group_3 = new cpr.controls.Container("grp2");
					// Layout
					var formLayout_2 = new cpr.controls.layouts.FormLayout();
					formLayout_2.setColumns(["3fr", "60px"]);
					formLayout_2.setRows(["25px"]);
					group_3.setLayout(formLayout_2);
					(function(container){
						var userDefinedControl_2 = new udc.com.comBtnSearch("combtnsearch");
						if(typeof onCombtnsearchSearch == "function") {
							userDefinedControl_2.addEventListener("search", onCombtnsearchSearch);
						}
						container.addChild(userDefinedControl_2, {
							"colIndex": 1,
							"rowIndex": 0,
							"horizontalAlign": "right",
							"verticalAlign": "fill",
							"width": 60
						});
					})(group_3);
					container.addChild(group_3, {
						"colIndex": 4,
						"rowIndex": 0,
						"colSpan": 2,
						"rowSpan": 1
					});
				})(group_2);
				container.addChild(group_2, {
					"autoSize": "height",
					"width": "1320px",
					"height": "37px"
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "1320px",
				"height": "67px"
			});
			
			var group_4 = new cpr.controls.Container("grpData");
			// Layout
			var formLayout_3 = new cpr.controls.layouts.FormLayout();
			formLayout_3.setColumns(["1fr"]);
			formLayout_3.setRows(["25px", "1fr"]);
			group_4.setLayout(formLayout_3);
			(function(container){
				var group_5 = new cpr.controls.Container("grp1");
				// Layout
				var formLayout_4 = new cpr.controls.layouts.FormLayout();
				formLayout_4.topMargin = "0px";
				formLayout_4.rightMargin = "0px";
				formLayout_4.bottomMargin = "0px";
				formLayout_4.leftMargin = "0px";
				formLayout_4.horizontalSpacing = "5px";
				formLayout_4.verticalSpacing = "5px";
				formLayout_4.setColumns(["1fr", "260px"]);
				formLayout_4.setRows(["1fr"]);
				group_5.setLayout(formLayout_4);
				(function(container){
					var userDefinedControl_3 = linker.userDefinedControl_3 = new udc.com.comTitle("comtitle1");
					container.addChild(userDefinedControl_3, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var userDefinedControl_4 = linker.userDefinedControl_4 = new udc.com.comButton("combutton1");
					userDefinedControl_4.focusColumnName = "EMPNO";
					if(typeof onCombutton1Save == "function") {
						userDefinedControl_4.addEventListener("save", onCombutton1Save);
					}
					container.addChild(userDefinedControl_4, {
						"colIndex": 1,
						"rowIndex": 0
					});
				})(group_5);
				container.addChild(group_5, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var grid_1 = linker.grid_1 = new cpr.controls.Grid("grdMain");
				grid_1.fieldLabel = "직원 정보";
				grid_1.init({
					"dataSet": app.lookup("dsEmp"),
					"leftSplit": 4,
					"rightSplit": 1,
					"leftSplitWidth": 170,
					"rightSplitWidth": 80,
					"autoFit": "3, 4, 14, 15, 16, 17, 18, 19, 5, 6, 7, 8, 9, 10, 11, 12",
					"resizableColumns": "14, 15, 16, 17, 18, 19",
					"clickMode": "edit",
					"columns": [
						{"width": "25px"},
						{"width": "25px"},
						{"width": "40px"},
						{"width": "80px"},
						{"width": "100px"},
						{"width": "70px"},
						{"width": "100px"},
						{"width": "120px"},
						{"width": "100px"},
						{"width": "100px"},
						{"width": "100px"},
						{"width": "150px"},
						{"width": "130px"},
						{"width": "300px"},
						{"width": "100px"},
						{"width": "120px"},
						{"width": "120px"},
						{"width": "100px"},
						{"width": "100px"},
						{"width": "80px"}
					],
					"header": {
						"rows": [{"height": "27px"}],
						"cells": [
							{
								"constraint": {"rowIndex": 0, "colIndex": 0},
								"configurator": function(cell){
									cell.columnType = "checkbox";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.text = "F";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.text = "No";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.targetColumnName = "EMPNO";
									cell.text = "사원번호";
									cell.style.setClasses(["require"]);
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.targetColumnName = "ENAME";
									cell.text = "사원명";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 5},
								"configurator": function(cell){
									cell.targetColumnName = "AGE";
									cell.text = "나이";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 6},
								"configurator": function(cell){
									cell.targetColumnName = "GENDER";
									cell.text = "성별";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 7},
								"configurator": function(cell){
									cell.targetColumnName = "BRTDY";
									cell.text = "생년월일";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 8},
								"configurator": function(cell){
									cell.targetColumnName = "NATION";
									cell.text = "국가";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 9},
								"configurator": function(cell){
									cell.targetColumnName = "LOGINID";
									cell.text = "로그인ID";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 10},
								"configurator": function(cell){
									cell.targetColumnName = "PWD";
									cell.text = "비밀번호";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 11},
								"configurator": function(cell){
									cell.targetColumnName = "EMAIL";
									cell.text = "이메일";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 12},
								"configurator": function(cell){
									cell.targetColumnName = "PHONENUM";
									cell.text = "전화번호";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 14},
								"configurator": function(cell){
									cell.targetColumnName = "JOB";
									cell.text = "직급";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 15},
								"configurator": function(cell){
									cell.targetColumnName = "MGR";
									cell.text = "관리자 사원번호";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 16},
								"configurator": function(cell){
									cell.targetColumnName = "HIREDATE";
									cell.text = "입사일";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 17},
								"configurator": function(cell){
									cell.targetColumnName = "SAL";
									cell.text = "급여";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 18},
								"configurator": function(cell){
									cell.targetColumnName = "COMM";
									cell.text = "성과금";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 19},
								"configurator": function(cell){
									cell.targetColumnName = "DEPTNO";
									cell.text = "부서코드";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 13},
								"configurator": function(cell){
									cell.targetColumnName = "ADDRESS";
									cell.text = "주소";
								}
							}
						]
					},
					"detail": {
						"rows": [{"height": "25px"}],
						"cells": [
							{
								"constraint": {"rowIndex": 0, "colIndex": 0},
								"configurator": function(cell){
									cell.columnType = "checkbox";
									cell.style.css({
										"text-align" : "center"
									});
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.control = (function(){
										var output_3 = new cpr.controls.Output();
										output_3.style.css({
											"text-align" : "center"
										});
										return output_3;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.columnType = "rowindex";
									cell.style.css({
										"text-align" : "center"
									});
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.columnName = "EMPNO";
									cell.control = (function(){
										var inputBox_2 = new cpr.controls.InputBox("ipb1");
										inputBox_2.style.css({
											"text-align" : "center"
										});
										inputBox_2.bind("value").toDataColumn("EMPNO");
										return inputBox_2;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.columnName = "ENAME";
									cell.control = (function(){
										var inputBox_3 = new cpr.controls.InputBox("ipb2");
										inputBox_3.style.css({
											"text-align" : "center"
										});
										inputBox_3.bind("value").toDataColumn("ENAME");
										return inputBox_3;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 5},
								"configurator": function(cell){
									cell.columnName = "AGE";
									cell.control = (function(){
										var numberEditor_1 = new cpr.controls.NumberEditor("nbe3");
										numberEditor_1.bind("value").toDataColumn("AGE");
										return numberEditor_1;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 6},
								"configurator": function(cell){
									cell.columnName = "GENDER";
									cell.control = (function(){
										var comboBox_2 = new cpr.controls.ComboBox("cmb2");
										(function(comboBox_2){
											comboBox_2.setItemSet(app.lookup("dsGender"), {
												"label": "CD_NM",
												"value": "CD"
											});
										})(comboBox_2);
										comboBox_2.bind("value").toDataColumn("GENDER");
										return comboBox_2;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 7},
								"configurator": function(cell){
									cell.columnName = "BRTDY";
									cell.control = (function(){
										var dateInput_1 = new cpr.controls.DateInput("dti2");
										dateInput_1.format = "YYYY-MM-DD";
										dateInput_1.bind("value").toDataColumn("BRTDY");
										return dateInput_1;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 8},
								"configurator": function(cell){
									cell.columnName = "NATION";
									cell.control = (function(){
										var comboBox_3 = new cpr.controls.ComboBox("cmb3");
										(function(comboBox_3){
											comboBox_3.setItemSet(app.lookup("dsNat"), {
												"label": "CD_NM",
												"value": "CD"
											});
										})(comboBox_3);
										comboBox_3.bind("value").toDataColumn("NATION");
										return comboBox_3;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 9},
								"configurator": function(cell){
									cell.columnName = "LOGINID";
									cell.control = (function(){
										var inputBox_4 = new cpr.controls.InputBox("ipb5");
										inputBox_4.bind("value").toDataColumn("LOGINID");
										return inputBox_4;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 10},
								"configurator": function(cell){
									cell.columnName = "PWD";
									cell.control = (function(){
										var inputBox_5 = new cpr.controls.InputBox("ipb6");
										inputBox_5.secret = true;
										inputBox_5.bind("value").toDataColumn("PWD");
										return inputBox_5;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 11},
								"configurator": function(cell){
									cell.columnName = "EMAIL";
									cell.control = (function(){
										var inputBox_6 = new cpr.controls.InputBox("ipb7");
										inputBox_6.bind("value").toDataColumn("EMAIL");
										return inputBox_6;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 12},
								"configurator": function(cell){
									cell.columnName = "PHONENUM";
									cell.control = (function(){
										var maskEditor_1 = new cpr.controls.MaskEditor("mse1");
										maskEditor_1.mask = "000-0000-0000";
										maskEditor_1.bind("value").toDataColumn("PHONENUM");
										return maskEditor_1;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 14},
								"configurator": function(cell){
									cell.columnName = "JOB";
									cell.control = (function(){
										var comboBox_4 = new cpr.controls.ComboBox("cmb1");
										comboBox_4.style.css({
											"text-align" : "center"
										});
										(function(comboBox_4){
											comboBox_4.setItemSet(app.lookup("dsJob"), {
												"label": "CD_NM",
												"value": "CD"
											});
										})(comboBox_4);
										comboBox_4.bind("value").toDataColumn("JOB");
										return comboBox_4;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 15},
								"configurator": function(cell){
									cell.columnName = "MGR";
									cell.control = (function(){
										var inputBox_7 = new cpr.controls.InputBox("ipb3");
										inputBox_7.style.css({
											"text-align" : "center"
										});
										inputBox_7.bind("value").toDataColumn("MGR");
										return inputBox_7;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 16},
								"configurator": function(cell){
									cell.columnName = "HIREDATE";
									cell.control = (function(){
										var dateInput_2 = new cpr.controls.DateInput("dti1");
										dateInput_2.format = "YYYY-MM-DD";
										dateInput_2.bind("value").toDataColumn("HIREDATE");
										return dateInput_2;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 17},
								"configurator": function(cell){
									cell.columnName = "SAL";
									cell.control = (function(){
										var numberEditor_2 = new cpr.controls.NumberEditor("nbe1");
										numberEditor_2.bind("value").toDataColumn("SAL");
										return numberEditor_2;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 18},
								"configurator": function(cell){
									cell.columnName = "COMM";
									cell.control = (function(){
										var numberEditor_3 = new cpr.controls.NumberEditor("nbe2");
										numberEditor_3.bind("value").toDataColumn("COMM");
										return numberEditor_3;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 19},
								"configurator": function(cell){
									cell.columnName = "DEPTNO";
									cell.control = (function(){
										var inputBox_8 = new cpr.controls.InputBox("ipb4");
										inputBox_8.style.css({
											"text-align" : "center"
										});
										inputBox_8.bind("value").toDataColumn("DEPTNO");
										return inputBox_8;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 13},
								"configurator": function(cell){
									cell.columnName = "ADDRESS";
									cell.control = (function(){
										var inputBox_9 = new cpr.controls.InputBox();
										inputBox_9.bind("value").toDataColumn("ADDRESS");
										return inputBox_9;
									})();
									cell.controlConstraint = {};
								}
							}
						]
					}
				});
				container.addChild(grid_1, {
					"colIndex": 0,
					"rowIndex": 1,
					"colSpan": 1,
					"rowSpan": 1
				});
			})(group_4);
			container.addChild(group_4, {
				"width": "1320px",
				"height": "608px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
			// Linking
			linker.userDefinedControl_3.ctrl = linker.grid_1;
			linker.userDefinedControl_4.grid = linker.grid_1;
		}
	});
	app.title = "템플릿(그리드 틀 고정)";
	cpr.core.Platform.INSTANCE.register(app);
})();
