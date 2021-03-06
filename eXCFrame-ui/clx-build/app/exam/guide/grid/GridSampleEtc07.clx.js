/*
 * App URI: app/exam/guide/grid/GridSampleEtc07
 * Source Location: app/exam/guide/grid/GridSampleEtc07.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/guide/grid/GridSampleEtc07", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * GridSampleEtc07.js
			 * Created at 2020. 6. 3. 오전 10:38:00.
			 *
			 * @author 1073727
			 ************************************************/
			
			var util = createCommonUtil();
			
			/*
			 * Body에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit( /* cpr.events.CEvent */ e) {
				util.Grid.init(app, "grdList");
				util.FreeForm.init(app, ["grpFormCont"]);
				
				//첫번째 그룹 펼치기
				var gridRowGroup = app.lookup("grdList").getGridRowGroup(0);
				if (gridRowGroup) {
					gridRowGroup.expanded = true;
				}
				
			}
			
			/*
			 * 그리드에서 rowgroup-click 이벤트 발생 시 호출.
			 * Grid의 RowGroup 클릭시 발생하는 이벤트.
			 */
			function onGrd1RowgroupClick( /* cpr.events.CGridEvent */ e) {
				/** 
				 * @type cpr.controls.Grid
				 */
				var grd1 = e.control;
				
				/** @type HTMLElement */
				var dom = e.target;
				
				var classNames = dom.className.split(/\s+/g);
				
				// 접기 펼치기 클릭
				if (classNames.indexOf("expander") !== -1) {
					e.rowgroup.expanded = !e.rowgroup.expanded;
				}
				
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("dsList");
			dataSet_1.parseData({
				"columns": [
					{
						"name": "gbn",
						"dataType": "string"
					},
					{
						"name": "col1",
						"dataType": "string"
					},
					{
						"name": "col2",
						"dataType": "string"
					},
					{
						"name": "col3",
						"dataType": "number"
					},
					{"name": "col4"}
				],
				"rows": [
					{"gbn": "토마토", "col1": "A1234567", "col2": "홍길동1", "col3": "520000", "col4": "2018-09-01"},
					{"gbn": "토마토", "col1": "A1234567", "col2": "홍길동2", "col3": "30000", "col4": "2018-09-01"},
					{"gbn": "토마토", "col1": "A1234567", "col2": "홍길동3", "col3": "1500000", "col4": "2018-09-01"},
					{"gbn": "토마토", "col1": "A1234567", "col2": "홍길동4", "col3": "900000", "col4": "2018-09-01"},
					{"gbn": "퇴직연금", "col1": "A1234567", "col2": "홍길동5", "col3": "2000000", "col4": "2018-09-01"},
					{"gbn": "퇴직연금", "col1": "A1234567", "col2": "홍길동6", "col3": "25000", "col4": "2018-09-01"},
					{"gbn": "퇴직연금", "col1": "A1234567", "col2": "홍길동7", "col3": "300000", "col4": "2018-09-01"},
					{"gbn": "퇴직연금", "col1": "A1234567", "col2": "홍길동8", "col3": "1000000", "col4": "2018-09-01"},
					{"gbn": "리버사이드", "col1": "A1234567", "col2": "홍길동9", "col3": "850000", "col4": "2018-09-01"},
					{"gbn": "리버사이드", "col1": "A1234567", "col2": "홍길동10", "col3": "150000", "col4": "2018-09-01"},
					{"gbn": "리버사이드", "col1": "A1234567", "col2": "홍길동11", "col3": "370000", "col4": "2018-09-01"}
				]
			});
			app.register(dataSet_1);
			
			app.supportMedia("all and (min-width: 1320px)", "eXFrame");
			app.supportMedia("all and (min-width: 1020px) and (max-width: 1319px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1019px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
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
			
			var group_1 = new cpr.controls.Container("grp1");
			group_1.userAttr({"fillLayout": "Y"});
			// Layout
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.verticalSpacing = "5px";
			formLayout_1.setColumns(["1fr"]);
			formLayout_1.setRows(["25px", "2fr", "25px", "1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var group_2 = new cpr.controls.Container("grpFormCont");
				group_2.style.setClasses(["form-box"]);
				// Layout
				var formLayout_2 = new cpr.controls.layouts.FormLayout();
				formLayout_2.topMargin = "5px";
				formLayout_2.rightMargin = "5px";
				formLayout_2.bottomMargin = "5px";
				formLayout_2.leftMargin = "5px";
				formLayout_2.setColumns(["100px", "1fr"]);
				formLayout_2.setRows(["1fr", "1fr"]);
				group_2.setLayout(formLayout_2);
				(function(container){
					var output_1 = new cpr.controls.Output("otp25");
					output_1.value = "시나리오";
					container.addChild(output_1, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var output_2 = new cpr.controls.Output("otp26");
					output_2.value = "추가설명";
					container.addChild(output_2, {
						"colIndex": 0,
						"rowIndex": 1
					});
					var textArea_1 = new cpr.controls.TextArea("txa1");
					textArea_1.readOnly = true;
					textArea_1.value = "1. 그리드의 단체별 부담금합계가 계산되어 각 그룹헤더에 표시되는것을 확인한다.\r\n2. 단체별로 표시된 그룹헤더의 [-접기] 와 [+펼치기] 기능이 올바르게 동작하는지 확인한다.";
					container.addChild(textArea_1, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var textArea_2 = new cpr.controls.TextArea("txa2");
					textArea_2.readOnly = true;
					textArea_2.value = "풋터에 디자인을 위한 테이블 태그와 데이터 값을 복합적으로 표시하는 expression을 사용하고, css명칭을 불러와 이벤트를 호출하는 방법";
					container.addChild(textArea_2, {
						"colIndex": 1,
						"rowIndex": 1
					});
				})(group_2);
				container.addChild(group_2, {
					"colIndex": 0,
					"rowIndex": 3
				});
				var grid_1 = new cpr.controls.Grid("grdList");
				grid_1.init({
					"dataSet": app.lookup("dsList"),
					"collapsible": true,
					"columns": [
						{"width": "100px"},
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
									cell.targetColumnName = "gbn";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "단체";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.targetColumnName = "col1";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "가입자증번";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.targetColumnName = "col2";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "성명";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.targetColumnName = "col3";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "부담금";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.targetColumnName = "col4";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "지급일자";
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
									cell.columnName = "gbn";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.columnName = "col1";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.columnName = "col2";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.columnName = "col3";
									cell.control = (function(){
										var numberEditor_1 = new cpr.controls.NumberEditor("ned1");
										numberEditor_1.bind("value").toDataColumn("col3");
										return numberEditor_1;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.columnName = "col4";
								}
							}
						]
					},
					"rowGroup": [{
						"groupCondition": "gbn",
						"startCollapse": true,
						"gheader": {
							"rows": [{"height": "32px"}],
							"cells": [
								{
									"constraint": {"rowIndex": 0, "colIndex": 0, "rowSpan": 1, "colSpan": 4},
									"configurator": function(cell){
										cell.expr = "\"<span>\" + gbn + \"<\/span>&nbsp&nbsp\"\r\n+ (expanded ? \"<span class='expander expanded'>[-접기]<\/span>\" : \"<span class='expander collapsed'>[+펼치기]<\/span>\")";
										cell.control = (function(){
											var hTMLSnippet_1 = new cpr.controls.HTMLSnippet("htmlsnp1");
											hTMLSnippet_1.value = "<p>HTML Snippet<\/p>";
											return hTMLSnippet_1;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.expr = "\"부담금 총액 : \"+ getSum(\"col3\").toNumber().toLocaleString() + \"원\" ";
									}
								}
							]
						}
					}]
				});
				if(typeof onGrd1RowgroupClick == "function") {
					grid_1.addEventListener("rowgroup-click", onGrd1RowgroupClick);
				}
				container.addChild(grid_1, {
					"colIndex": 0,
					"rowIndex": 1
				});
				var userDefinedControl_2 = new udc.com.comFormTitle("comformtitle3");
				userDefinedControl_2.title = "그리드 그룹소계 디자인 예제";
				container.addChild(userDefinedControl_2, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var userDefinedControl_3 = new udc.com.comFormTitle("comformtitle2");
				userDefinedControl_3.title = "시나리오";
				container.addChild(userDefinedControl_3, {
					"colIndex": 0,
					"rowIndex": 2
				});
			})(group_1);
			container.addChild(group_1, {
				"width": "972px",
				"height": "645px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "그리드 그룹소계 디자인";
	cpr.core.Platform.INSTANCE.register(app);
})();
