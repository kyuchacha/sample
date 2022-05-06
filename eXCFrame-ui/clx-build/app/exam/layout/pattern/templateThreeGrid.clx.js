/*
 * App URI: app/exam/layout/pattern/templateThreeGrid
 * Source Location: app/exam/layout/pattern/templateThreeGrid.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/layout/pattern/templateThreeGrid", {
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
			function onComButtonSave(/* cpr.events.CUIEvent */ e){
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
			 * 그리드에서 selection-change 이벤트 발생 시 호출.
			 * detail의 cell 클릭하여 설정된 selectionunit에 해당되는 단위가 선택될 때 발생하는 이벤트.
			 */
			function onGrdMainSelectionChange(/* cpr.events.CSelectionEvent */ e){
				/** 
				 * @type cpr.controls.Grid
				 */
				var grdMain = e.control;
				if(util.Grid.getRowState(app, "grdMain") == cpr.data.tabledata.RowState.INSERTED){
					util.Grid.reset(app, "grdSub");
					return false;
				}
				
				doListDtl();	
			}
			
			/**
			 * @param psStatus - 조회 상태(저장 후 조회인 경우에는 'save' 구분값 넘김)
			 */
			function doListDtl(psStatus){
			     var vsDeptNo = util.Grid.getCellValue(app, "grdMain", "DEPTNO");
			     util.DataMap.setValue(app, "dmParamDtl", "strDeptNo", vsDeptNo);
			     
				//조회 서브미션 호출
				util.Submit.send(app, "subListDtl", function(pbSuccess){
					if(pbSuccess) {
						if(psStatus == "save"){
							//갱신된 데이터가 조회되었습니다.
							util.Msg.notify(app, "INF-M005");
						}else{
							//조회되었습니다.
							util.Msg.notify(app, "INF-M001");
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
				if (!util.Grid.isModified(app, "grdSub", "MSG")) return false;
				
				// 2. 유효성 체크
				if (!util.validate(app, "grdSub")) return false;
				
				// 3. 데이터 저장
				util.Submit.send(app, "subSaveDtl", function(pbSuccess){
					if(pbSuccess){
						doListDtl("save");
					}
				});
			}
			
			
			/*
			 * 사용자 정의 컨트롤에서 save 이벤트 발생 시 호출.
			 * 저장 클릭 이벤트
			 */
			function onCombutton2Save(/* cpr.events.CUIEvent */ e){
				// 1. 데이터 변경사항 체크
				if (!util.Grid.isModified(app, "grdSub2", "MSG")) return false;
				
				// 2. 유효성 체크
				if (!util.validate(app, "grdSub2")) return false;
				
				// 3. 데이터 저장
				util.Submit.send(app, "subSaveDtl", function(pbSuccess){
					if(pbSuccess){
						doListDtl("save");
					}
				});
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
					}
				],
				"rows": []
			});
			app.register(dataSet_2);
			
			var dataSet_3 = new cpr.data.DataSet("dsDept");
			dataSet_3.parseData({
				"info": "DEPTNO",
				"columns": [
					{
						"name": "DEPTNO",
						"dataType": "number"
					},
					{"name": "DNAME"},
					{"name": "LOC"}
				]
			});
			app.register(dataSet_3);
			
			var dataSet_4 = new cpr.data.DataSet("dsSalGrade");
			dataSet_4.parseData({
				"columns" : [
					{
						"name": "GRADE",
						"dataType": "number"
					},
					{
						"name": "LOSAL",
						"dataType": "number"
					},
					{
						"name": "HISAL",
						"dataType": "number"
					}
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
			
			var dataMap_2 = new cpr.data.DataMap("dmParamDtl");
			dataMap_2.parseData({
				"columns" : [{"name": "strDeptNo"}]
			});
			app.register(dataMap_2);
			var submission_1 = new cpr.protocols.Submission("subOnLoad");
			submission_1.action = "app/exam/data/temp/template.json";
			submission_1.mediaType = "application/x-www-form-urlencoded";
			submission_1.addResponseData(dataSet_1, false);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("subList");
			submission_2.action = "app/exam/data/temp/template.json";
			submission_2.mediaType = "application/x-www-form-urlencoded";
			submission_2.addRequestData(dataMap_1);
			submission_2.addResponseData(dataSet_2, false);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("subSave");
			submission_3.action = "app/exam/data/temp/template.json";
			submission_3.mediaType = "application/x-www-form-urlencoded";
			submission_3.addRequestData(dataSet_2);
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("subListDtl");
			submission_4.action = "app/exam/data/temp/template.json";
			submission_4.mediaType = "application/x-www-form-urlencoded";
			submission_4.addRequestData(dataMap_2);
			submission_4.addResponseData(dataSet_3, false);
			submission_4.addResponseData(dataSet_4, false);
			app.register(submission_4);
			
			var submission_5 = new cpr.protocols.Submission("subSaveDtl");
			submission_5.action = "app/exam/data/temp/template.json";
			submission_5.mediaType = "application/x-www-form-urlencoded";
			submission_5.addRequestData(dataSet_3);
			app.register(submission_5);
			
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
				var userDefinedControl_1 = new udc.com.appHeader("appheader");
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
					var group_3 = new cpr.controls.Container("grp8");
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
			group_4.userAttr({
				"mobile-column-count": "1",
				"tablet-column-count": "1"
			});
			// Layout
			var formLayout_3 = new cpr.controls.layouts.FormLayout();
			formLayout_3.userResizingMode = "standard";
			formLayout_3.setColumns(["1fr", "1fr"]);
			formLayout_3.setRows(["1fr"]);
			group_4.setLayout(formLayout_3);
			(function(container){
				var group_5 = new cpr.controls.Container("grpSub");
				// Layout
				var formLayout_4 = new cpr.controls.layouts.FormLayout();
				formLayout_4.userResizingMode = "standard";
				formLayout_4.setColumns(["1fr"]);
				formLayout_4.setRows(["1fr", "1fr"]);
				group_5.setLayout(formLayout_4);
				(function(container){
					var group_6 = new cpr.controls.Container("grpUp");
					// Layout
					var formLayout_5 = new cpr.controls.layouts.FormLayout();
					formLayout_5.horizontalSpacing = "5px";
					formLayout_5.verticalSpacing = "5px";
					formLayout_5.setColumns(["1fr"]);
					formLayout_5.setRows(["25px", "1fr"]);
					group_6.setLayout(formLayout_5);
					(function(container){
						var group_7 = new cpr.controls.Container("grp1");
						// Layout
						var formLayout_6 = new cpr.controls.layouts.FormLayout();
						formLayout_6.topMargin = "0px";
						formLayout_6.rightMargin = "0px";
						formLayout_6.bottomMargin = "0px";
						formLayout_6.leftMargin = "0px";
						formLayout_6.horizontalSpacing = "5px";
						formLayout_6.verticalSpacing = "5px";
						formLayout_6.setColumns(["1fr", "260px"]);
						formLayout_6.setRows(["1fr"]);
						group_7.setLayout(formLayout_6);
						(function(container){
							var userDefinedControl_3 = linker.userDefinedControl_3 = new udc.com.comTitle("comtitle2");
							container.addChild(userDefinedControl_3, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var userDefinedControl_4 = linker.userDefinedControl_4 = new udc.com.comButton("combutton4");
							userDefinedControl_4.focusColumnName = "DEPTNO";
							if(typeof onCombutton1Save == "function") {
								userDefinedControl_4.addEventListener("save", onCombutton1Save);
							}
							container.addChild(userDefinedControl_4, {
								"colIndex": 1,
								"rowIndex": 0
							});
						})(group_7);
						container.addChild(group_7, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var grid_1 = linker.grid_1 = new cpr.controls.Grid("grdSub");
						grid_1.fieldLabel = "부서정보";
						grid_1.init({
							"dataSet": app.lookup("dsDept"),
							"autoFit": "3, 4, 5",
							"columns": [
								{"width": "25px"},
								{"width": "25px"},
								{"width": "40px"},
								{"width": "100px"},
								{"width": "100px"},
								{"width": "100px"}
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
											cell.text = "번호";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 5},
										"configurator": function(cell){
											cell.targetColumnName = "LOC";
											cell.text = "장소";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 4},
										"configurator": function(cell){
											cell.targetColumnName = "DNAME";
											cell.text = "부서명";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.targetColumnName = "DEPTNO";
											cell.text = "부서코드";
											cell.style.setClasses(["require"]);
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
												var output_3 = new cpr.controls.Output("opt2");
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
										"constraint": {"rowIndex": 0, "colIndex": 5},
										"configurator": function(cell){
											cell.columnName = "LOC";
											cell.control = (function(){
												var inputBox_2 = new cpr.controls.InputBox("ipb4");
												inputBox_2.style.css({
													"text-align" : "center"
												});
												inputBox_2.bind("value").toDataColumn("LOC");
												return inputBox_2;
											})();
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 4},
										"configurator": function(cell){
											cell.columnName = "DNAME";
											cell.control = (function(){
												var inputBox_3 = new cpr.controls.InputBox("ipb3");
												inputBox_3.style.css({
													"text-align" : "center"
												});
												inputBox_3.bind("value").toDataColumn("DNAME");
												return inputBox_3;
											})();
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.columnName = "DEPTNO";
											cell.control = (function(){
												var inputBox_4 = new cpr.controls.InputBox("ipb2");
												inputBox_4.userAttr({"required": "Y"});
												inputBox_4.style.css({
													"text-align" : "center"
												});
												inputBox_4.bind("value").toDataColumn("DEPTNO");
												return inputBox_4;
											})();
										}
									}
								]
							}
						});
						container.addChild(grid_1, {
							"colIndex": 0,
							"rowIndex": 1
						});
					})(group_6);
					container.addChild(group_6, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var group_8 = new cpr.controls.Container("grpDown");
					// Layout
					var formLayout_7 = new cpr.controls.layouts.FormLayout();
					formLayout_7.setColumns(["1fr"]);
					formLayout_7.setRows(["25px", "1fr"]);
					group_8.setLayout(formLayout_7);
					(function(container){
						var group_9 = new cpr.controls.Container("grp7");
						// Layout
						var formLayout_8 = new cpr.controls.layouts.FormLayout();
						formLayout_8.topMargin = "0px";
						formLayout_8.rightMargin = "0px";
						formLayout_8.bottomMargin = "0px";
						formLayout_8.leftMargin = "0px";
						formLayout_8.horizontalSpacing = "5px";
						formLayout_8.verticalSpacing = "5px";
						formLayout_8.setColumns(["1fr", "260px"]);
						formLayout_8.setRows(["1fr"]);
						group_9.setLayout(formLayout_8);
						(function(container){
							var userDefinedControl_5 = linker.userDefinedControl_5 = new udc.com.comTitle("comtitle1");
							container.addChild(userDefinedControl_5, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var userDefinedControl_6 = linker.userDefinedControl_6 = new udc.com.comButton("combutton2");
							if(typeof onCombutton2Save == "function") {
								userDefinedControl_6.addEventListener("save", onCombutton2Save);
							}
							container.addChild(userDefinedControl_6, {
								"colIndex": 1,
								"rowIndex": 0
							});
						})(group_9);
						container.addChild(group_9, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var grid_2 = linker.grid_2 = new cpr.controls.Grid("grdSub2");
						grid_2.fieldLabel = "급여등급";
						grid_2.init({
							"dataSet": app.lookup("dsSalGrade"),
							"autoFit": "3, 4, 5",
							"columns": [
								{"width": "25px"},
								{"width": "25px"},
								{"width": "40px"},
								{"width": "100px"},
								{"width": "100px"},
								{"width": "100px"}
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
										"constraint": {"rowIndex": 0, "colIndex": 5},
										"configurator": function(cell){
											cell.targetColumnName = "HISAL";
											cell.text = "최고등급";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 4},
										"configurator": function(cell){
											cell.targetColumnName = "LOSAL";
											cell.text = "최저등급";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.targetColumnName = "GRADE";
											cell.text = "등급";
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
												var output_4 = new cpr.controls.Output("opt3");
												output_4.style.css({
													"text-align" : "center"
												});
												return output_4;
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
										"constraint": {"rowIndex": 0, "colIndex": 5},
										"configurator": function(cell){
											cell.columnName = "HISAL";
											cell.control = (function(){
												var numberEditor_1 = new cpr.controls.NumberEditor("nbe4");
												numberEditor_1.bind("value").toDataColumn("HISAL");
												return numberEditor_1;
											})();
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 4},
										"configurator": function(cell){
											cell.columnName = "LOSAL";
											cell.control = (function(){
												var numberEditor_2 = new cpr.controls.NumberEditor("nbe3");
												numberEditor_2.bind("value").toDataColumn("LOSAL");
												return numberEditor_2;
											})();
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.columnName = "GRADE";
											cell.control = (function(){
												var output_5 = new cpr.controls.Output();
												output_5.style.css({
													"text-align" : "center"
												});
												output_5.bind("value").toDataColumn("GRADE");
												return output_5;
											})();
										}
									}
								]
							}
						});
						container.addChild(grid_2, {
							"colIndex": 0,
							"rowIndex": 1
						});
					})(group_8);
					container.addChild(group_8, {
						"colIndex": 0,
						"rowIndex": 1
					});
				})(group_5);
				container.addChild(group_5, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var group_10 = new cpr.controls.Container("grpMain");
				// Layout
				var formLayout_9 = new cpr.controls.layouts.FormLayout();
				formLayout_9.setColumns(["1fr", "9px"]);
				formLayout_9.setRows(["25px", "1fr"]);
				group_10.setLayout(formLayout_9);
				(function(container){
					var group_11 = new cpr.controls.Container("grp2");
					// Layout
					var formLayout_10 = new cpr.controls.layouts.FormLayout();
					formLayout_10.topMargin = "0px";
					formLayout_10.rightMargin = "0px";
					formLayout_10.bottomMargin = "0px";
					formLayout_10.leftMargin = "0px";
					formLayout_10.horizontalSpacing = "5px";
					formLayout_10.verticalSpacing = "5px";
					formLayout_10.setColumns(["1fr", "260px"]);
					formLayout_10.setRows(["1fr"]);
					group_11.setLayout(formLayout_10);
					(function(container){
						var userDefinedControl_7 = linker.userDefinedControl_7 = new udc.com.comTitle("comtitle3");
						container.addChild(userDefinedControl_7, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var userDefinedControl_8 = linker.userDefinedControl_8 = new udc.com.comButton("combutton3");
						userDefinedControl_8.focusColumnName = "EMPNO";
						if(typeof onComButtonSave == "function") {
							userDefinedControl_8.addEventListener("save", onComButtonSave);
						}
						container.addChild(userDefinedControl_8, {
							"colIndex": 1,
							"rowIndex": 0
						});
					})(group_11);
					container.addChild(group_11, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var grid_3 = linker.grid_3 = new cpr.controls.Grid("grdMain");
					grid_3.fieldLabel = "사원정보";
					grid_3.init({
						"dataSet": app.lookup("dsEmp"),
						"autoFit": "3, 4, 5, 6, 7, 8, 9, 10",
						"resizableColumns": "5, 6, 7, 8, 9, 10",
						"columns": [
							{"width": "25px"},
							{"width": "25px"},
							{"width": "40px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "120px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"}
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
										cell.text = "사원번호";
										cell.style.setClasses(["require"]);
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.text = "사원명";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 10},
									"configurator": function(cell){
										cell.text = "부서코드";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 9},
									"configurator": function(cell){
										cell.text = "성과금";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 8},
									"configurator": function(cell){
										cell.text = "급여";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 7},
									"configurator": function(cell){
										cell.text = "입사일";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 6},
									"configurator": function(cell){
										cell.text = "관리자 사원번호";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.text = "직급";
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
											var output_6 = new cpr.controls.Output();
											output_6.style.css({
												"text-align" : "center"
											});
											return output_6;
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
											var inputBox_5 = new cpr.controls.InputBox("ipb7");
											inputBox_5.inputFilter = "[0-9]";
											inputBox_5.userAttr({"required": "Y"});
											inputBox_5.style.css({
												"text-align" : "center"
											});
											inputBox_5.bind("value").toDataColumn("EMPNO");
											return inputBox_5;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.columnName = "ENAME";
										cell.control = (function(){
											var inputBox_6 = new cpr.controls.InputBox("ipb8");
											inputBox_6.style.css({
												"text-align" : "center"
											});
											inputBox_6.bind("value").toDataColumn("ENAME");
											return inputBox_6;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 10},
									"configurator": function(cell){
										cell.columnName = "DEPTNO";
										cell.control = (function(){
											var inputBox_7 = new cpr.controls.InputBox("ipb9");
											inputBox_7.style.css({
												"text-align" : "center"
											});
											inputBox_7.bind("value").toDataColumn("DEPTNO");
											return inputBox_7;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 9},
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
									"constraint": {"rowIndex": 0, "colIndex": 8},
									"configurator": function(cell){
										cell.columnName = "SAL";
										cell.control = (function(){
											var numberEditor_4 = new cpr.controls.NumberEditor("nbe1");
											numberEditor_4.bind("value").toDataColumn("SAL");
											return numberEditor_4;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 7},
									"configurator": function(cell){
										cell.columnName = "HIREDATE";
										cell.control = (function(){
											var dateInput_1 = new cpr.controls.DateInput("dti1");
											dateInput_1.format = "YYYY-MM-DD";
											dateInput_1.bind("value").toDataColumn("HIREDATE");
											return dateInput_1;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 6},
									"configurator": function(cell){
										cell.columnName = "MGR";
										cell.control = (function(){
											var inputBox_8 = new cpr.controls.InputBox("ipb10");
											inputBox_8.style.css({
												"text-align" : "center"
											});
											inputBox_8.bind("value").toDataColumn("MGR");
											return inputBox_8;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.columnName = "JOB";
										cell.control = (function(){
											var comboBox_2 = new cpr.controls.ComboBox("cmb1");
											comboBox_2.style.css({
												"text-align" : "center"
											});
											(function(comboBox_2){
												comboBox_2.setItemSet(app.lookup("dsJob"), {
													"label": "CD_NM",
													"value": "CD"
												});
											})(comboBox_2);
											comboBox_2.bind("value").toDataColumn("JOB");
											return comboBox_2;
										})();
									}
								}
							]
						}
					});
					if(typeof onGrdMainSelectionChange == "function") {
						grid_3.addEventListener("selection-change", onGrdMainSelectionChange);
					}
					container.addChild(grid_3, {
						"colIndex": 0,
						"rowIndex": 1,
						"colSpan": 1,
						"rowSpan": 1
					});
					var userDefinedControl_9 = new udc.com.udcSplit("udcsplit1");
					userDefinedControl_9.leftGrpId = "grpMain";
					userDefinedControl_9.rightGrpId = "grpSub";
					userDefinedControl_9.leftGridId = "grdMain";
					container.addChild(userDefinedControl_9, {
						"colIndex": 1,
						"rowIndex": 1
					});
				})(group_10);
				container.addChild(group_10, {
					"colIndex": 0,
					"rowIndex": 0
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
			linker.userDefinedControl_5.ctrl = linker.grid_2;
			linker.userDefinedControl_6.grid = linker.grid_2;
			linker.userDefinedControl_7.ctrl = linker.grid_3;
			linker.userDefinedControl_8.grid = linker.grid_3;
		}
	});
	app.title = "템플릿(다중 그리드)";
	cpr.core.Platform.INSTANCE.register(app);
})();