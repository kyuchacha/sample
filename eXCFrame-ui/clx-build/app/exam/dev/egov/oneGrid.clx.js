/*
 * App URI: app/exam/dev/egov/oneGrid
 * Source Location: app/exam/dev/egov/oneGrid.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/dev/egov/oneGrid", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * cmnCGrid.js
			 * Created at 2020. 3. 9. 오후 12:49:14.
			 *
			 * @author 
			 ************************************************/
			
			var util = createCommonUtil();
			
			/*
			 * Body에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(/* cpr.events.CEvent */ e){
			
				util.Submit.send(app, "subOnload", function(pbSuccess){
					if(pbSuccess){
						
					}
				});
			}
			
			
			/**
			 * 그리드 데이터를 조회
			 * @param psStatus - 조회 상태(저장 후 조회인 경우에는 'save' 구분값 넘김)
			 * 
			 */
			function doList(psStatus){
			
				//조회 서브미션 호출
				util.Submit.send(app, "subList", function(pbSuccess){
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
			 * 사용자 정의 컨트롤에서 search 이벤트 발생 시 호출.
			 * 조회버튼 클릭시 이벤트
			 */
			function onCombtnsearch1Search(/* cpr.events.CUIEvent */ e){
				
				// 데이터 변경사항 체크
				if (util.Grid.isModified(app, "grdCmnTmpReg", "CRM")) {
					return false;
				}
				
				// 조회조건 유효성 체크
				if(!util.validate(app, "grpSearch")) return false;
				
				doList();
				
				
			}
			
			 
			/*
			 * 사용자 정의 컨트롤에서 save 이벤트 발생 시 호출.
			 * 저장 클릭 이벤트
			 */
			function onCombutton1Save(/* cpr.event.CUIEvent */ e){
				
				if (!util.Grid.isModified(app, "grdCmnTmpReg", "MSG")) return false;
				
				if (!util.validate(app, "grdCmnTmpReg")) return false;
				
				util.Submit.send(app, "subSave", function(pbSuccess){
					if(pbSuccess){
						doList("save");
					}
				});
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("dsSample");
			dataSet_1.parseData({
				"info": "ID",
				"columns": [
					{
						"name": "ID",
						"dataType": "string"
					},
					{"name": "NAME"},
					{"name": "DESCRIPTION"},
					{"name": "USE_YN"},
					{"name": "REG_USER"}
				]
			});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("dmTime");
			dataMap_1.parseData({
				"columns" : [{"name": "strToday"}]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("dmParam");
			dataMap_2.parseData({
				"columns" : [{"name": "NAME"}]
			});
			app.register(dataMap_2);
			var submission_1 = new cpr.protocols.Submission("subOnload");
			submission_1.action = "/OneGrid/onLoad.do";
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("subList");
			submission_2.action = "/OneGrid/list.do";
			submission_2.addRequestData(dataMap_2);
			submission_2.addResponseData(dataSet_1, false);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("subSave");
			submission_3.action = "/OneGrid/save.do";
			submission_3.addRequestData(dataSet_1);
			app.register(submission_3);
			
			app.supportMedia("all and (min-width: 1320px)", "eXFrame");
			app.supportMedia("all and (min-width: 1020px) and (max-width: 1319px)", "default");
			app.supportMedia("all and (min-width: 760px) and (max-width: 1019px)", "tablet");
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
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.setColumns(["1fr"]);
			formLayout_1.setRows(["67px", "1fr"]);
			formLayout_1.setRowAutoSizing(0, true);
			container.setLayout(formLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container("grpHeader");
			group_1.style.setClasses(["header-box"]);
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_1.spacing = 0;
			group_1.setLayout(verticalLayout_1);
			(function(container){
				var userDefinedControl_1 = new udc.com.appHeader("appheader");
				userDefinedControl_1.searchBoxId = "grpSearch";
				container.addChild(userDefinedControl_1, {
					"width": "500px",
					"height": "30px"
				});
				var group_2 = new cpr.controls.Container("grpSearch");
				group_2.userAttr({
					"mobile-column-count": "2",
					"tablet-column-count": "2"
				});
				group_2.style.setClasses(["search-box"]);
				// Layout
				var formLayout_2 = new cpr.controls.layouts.FormLayout();
				formLayout_2.topMargin = "5px";
				formLayout_2.rightMargin = "5px";
				formLayout_2.bottomMargin = "5px";
				formLayout_2.leftMargin = "5px";
				formLayout_2.setColumns(["120px", "200px", "1fr", "60px"]);
				formLayout_2.setRows(["25px"]);
				formLayout_2.setRowAutoSizing(0, true);
				group_2.setLayout(formLayout_2);
				(function(container){
					var output_1 = new cpr.controls.Output();
					output_1.value = "NAME";
					container.addChild(output_1, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var inputBox_1 = new cpr.controls.InputBox("ipb1");
					inputBox_1.fieldLabel = "학과";
					inputBox_1.tooltip = "학과";
					inputBox_1.userAttr({"autoKeydownSearch": "Y"});
					inputBox_1.bind("value").toDataMap(app.lookup("dmParam"), "NAME");
					container.addChild(inputBox_1, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var group_3 = new cpr.controls.Container("grp1");
					// Layout
					var formLayout_3 = new cpr.controls.layouts.FormLayout();
					formLayout_3.horizontalSpacing = "5px";
					formLayout_3.verticalSpacing = "5px";
					formLayout_3.setColumns(["1fr", "60px"]);
					formLayout_3.setRows(["25px"]);
					group_3.setLayout(formLayout_3);
					(function(container){
						var userDefinedControl_2 = new udc.com.comBtnSearch("combtnsearch");
						if(typeof onCombtnsearch1Search == "function") {
							userDefinedControl_2.addEventListener("search", onCombtnsearch1Search);
						}
						container.addChild(userDefinedControl_2, {
							"colIndex": 1,
							"rowIndex": 0,
							"horizontalAlign": "fill",
							"width": 60
						});
					})(group_3);
					container.addChild(group_3, {
						"colIndex": 2,
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
				"colIndex": 0,
				"rowIndex": 0
			});
			
			var group_4 = new cpr.controls.Container("grpData");
			// Layout
			var formLayout_4 = new cpr.controls.layouts.FormLayout();
			formLayout_4.setColumns(["1fr"]);
			formLayout_4.setRows(["25px", "1fr"]);
			formLayout_4.setRowAutoSizing(0, true);
			group_4.setLayout(formLayout_4);
			(function(container){
				var group_5 = new cpr.controls.Container("grp2");
				group_5.userAttr({
					"mobile-column-count": "",
					"tablet-column-count": ""
				});
				// Layout
				var formLayout_5 = new cpr.controls.layouts.FormLayout();
				formLayout_5.setColumns(["1fr", "260px"]);
				formLayout_5.setRows(["1fr"]);
				group_5.setLayout(formLayout_5);
				(function(container){
					var userDefinedControl_3 = linker.userDefinedControl_3 = new udc.com.comTitle("comtitle1");
					container.addChild(userDefinedControl_3, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var userDefinedControl_4 = linker.userDefinedControl_4 = new udc.com.comButton("combutton1");
					userDefinedControl_4.focusColumnName = "PARTY_ID";
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
				var grid_1 = linker.grid_1 = new cpr.controls.Grid("grdCmnTmpReg");
				grid_1.fieldLabel = "학생정보";
				grid_1.init({
					"dataSet": app.lookup("dsSample"),
					"selectionMulti": "multi",
					"autoFit": "3, 4, 5, 6, 7",
					"columns": [
						{"width": "25px"},
						{"width": "25px"},
						{"width": "40px"},
						{"width": "158px"},
						{"width": "100px"},
						{"width": "100px"},
						{"width": "100px"},
						{"width": "100px"}
					],
					"header": {
						"rows": [{"height": "27"}],
						"cells": [
							{
								"constraint": {"rowIndex": 0, "colIndex": 0},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.columnType = "checkbox";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "No";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.text = "ID";
									cell.style.setClasses(["require"]);
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.text = "NAME";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 5},
								"configurator": function(cell){
									cell.text = "DESC";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 6},
								"configurator": function(cell){
									cell.text = "USE_YN";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 7},
								"configurator": function(cell){
									cell.text = "REG_USER";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.text = "F";
								}
							}
						]
					},
					"detail": {
						"rows": [{"height": "24px"}],
						"cells": [
							{
								"constraint": {"rowIndex": 0, "colIndex": 0},
								"configurator": function(cell){
									cell.columnType = "checkbox";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.columnType = "rowindex";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.columnName = "ID";
									cell.control = (function(){
										var inputBox_2 = new cpr.controls.InputBox("ipb3");
										inputBox_2.bind("value").toDataColumn("ID");
										return inputBox_2;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.columnName = "NAME";
									cell.control = (function(){
										var inputBox_3 = new cpr.controls.InputBox("ipb4");
										inputBox_3.bind("value").toDataColumn("NAME");
										return inputBox_3;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 5},
								"configurator": function(cell){
									cell.columnName = "DESCRIPTION";
									cell.control = (function(){
										var inputBox_4 = new cpr.controls.InputBox("ipb5");
										inputBox_4.bind("value").toDataColumn("DESCRIPTION");
										return inputBox_4;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 6},
								"configurator": function(cell){
									cell.columnName = "USE_YN";
									cell.control = (function(){
										var checkBox_1 = new cpr.controls.CheckBox("cbx1");
										checkBox_1.trueValue = "Y";
										checkBox_1.text = "Y";
										checkBox_1.bind("value").toDataColumn("USE_YN");
										return checkBox_1;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 7},
								"configurator": function(cell){
									cell.columnName = "REG_USER";
									cell.control = (function(){
										var inputBox_5 = new cpr.controls.InputBox("ipb7");
										inputBox_5.bind("value").toDataColumn("REG_USER");
										return inputBox_5;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.control = (function(){
										var output_2 = new cpr.controls.Output();
										return output_2;
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
			})(group_4);
			container.addChild(group_4, {
				"colIndex": 0,
				"rowIndex": 1
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
			// Linking
			linker.userDefinedControl_3.ctrl = linker.grid_1;
			linker.userDefinedControl_4.grid = linker.grid_1;
		}
	});
	app.title = "템플릿(그리드)";
	cpr.core.Platform.INSTANCE.register(app);
})();