/*
 * App URI: app/exam/guide/grid/GridSampleEtc03
 * Source Location: app/exam/guide/grid/GridSampleEtc03.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/guide/grid/GridSampleEtc03", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * GridSampleEtc01.js
			 * Created at 2020. 6. 2. 오후 1:50:39.
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
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("dsList");
			dataSet_1.parseData({
				"columns": [
					{
						"name": "col1",
						"dataType": "number"
					},
					{
						"name": "col2",
						"dataType": "number"
					},
					{
						"name": "col3",
						"dataType": "number"
					},
					{
						"name": "col4",
						"dataType": "number"
					},
					{
						"name": "col5",
						"dataType": "number"
					},
					{
						"name": "col6",
						"dataType": "number"
					},
					{
						"name": "col7",
						"dataType": "number"
					},
					{
						"name": "sum123",
						"dataType": "expression",
						"displayOnly": true,
						"expression": "col1+col2+col3"
					}
				],
				"rows": [
					{"col1": "1", "col2": "2", "col3": "3", "col4": "4", "col5": "5", "col6": "6", "col7": "7"},
					{"col1": "2", "col2": "2", "col3": "3", "col4": "4", "col5": "5", "col6": "6", "col7": "7"},
					{"col1": "3", "col2": "2", "col3": "3", "col4": "4", "col5": "5", "col6": "6", "col7": "7"},
					{"col1": "4", "col2": "2", "col3": "3", "col4": "4", "col5": "5", "col6": "6", "col7": "7"},
					{"col1": "5", "col2": "2", "col3": "3", "col4": "4", "col5": "5", "col6": "6", "col7": "7"},
					{"col1": "6", "col2": "2", "col3": "3", "col4": "4", "col5": "5", "col6": "6", "col7": "7"},
					{"col1": "7", "col2": "2", "col3": "3", "col4": "4", "col5": "5", "col6": "6", "col7": "7"},
					{"col1": "8", "col2": "2", "col3": "3", "col4": "4", "col5": "5", "col6": "6", "col7": "7"},
					{"col1": "9", "col2": "2", "col3": "3", "col4": "4", "col5": "5", "col6": "6", "col7": "7"},
					{"col1": "10", "col2": "2", "col3": "3", "col4": "4", "col5": "5", "col6": "6", "col7": "7"}
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
			formLayout_1.setRows(["25px", "1fr", "25px", "35px", "25px", "1fr"]);
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
					textArea_1.value = "1. 그리드 항목의 합계 및 평균에 대한 자동계산 내역을 확인한다.\r\n2. 그리드 co1과 col2의 항목에 대한 합계 계산 내역을 확인한다.";
					container.addChild(textArea_1, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var textArea_2 = new cpr.controls.TextArea("txa2");
					textArea_2.readOnly = true;
					textArea_2.value = "익스프레션 함수를 이용하여서 해당 행의 숫자들의 합계 값과 평균값을 계산하여 출력하는 화면 예제";
					container.addChild(textArea_2, {
						"colIndex": 1,
						"rowIndex": 1
					});
				})(group_2);
				container.addChild(group_2, {
					"colIndex": 0,
					"rowIndex": 5
				});
				var grid_1 = new cpr.controls.Grid("grdList");
				grid_1.readOnly = true;
				grid_1.init({
					"dataSet": app.lookup("dsList"),
					"columnMovable": true,
					"autoFit": "1, 2, 3, 4, 5, 6, 7, 8",
					"resizableColumns": "all",
					"columns": [
						{"width": "60px"},
						{"width": "100px"},
						{"width": "100px"},
						{"width": "100px"},
						{"width": "100px"},
						{"width": "100px"},
						{"width": "100px"},
						{"width": "100px"},
						{"width": "142px"}
					],
					"header": {
						"rows": [{"height": "27px"}],
						"cells": [
							{
								"constraint": {"rowIndex": 0, "colIndex": 0},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "No";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.targetColumnName = "col1";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "col1";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.targetColumnName = "col2";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "col2";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.targetColumnName = "col3";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "col3";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.targetColumnName = "col4";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "col4";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 5},
								"configurator": function(cell){
									cell.targetColumnName = "col5";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "col5";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 6},
								"configurator": function(cell){
									cell.targetColumnName = "col6";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "col6";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 7},
								"configurator": function(cell){
									cell.targetColumnName = "col7";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "col7";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 8},
								"configurator": function(cell){
									cell.targetColumnName = "sum123";
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "sum(col1+col2+col3)";
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
									cell.columnType = "rowindex";
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
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.columnName = "col4";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 5},
								"configurator": function(cell){
									cell.columnName = "col5";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 6},
								"configurator": function(cell){
									cell.columnName = "col6";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 7},
								"configurator": function(cell){
									cell.columnName = "col7";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 8},
								"configurator": function(cell){
									cell.columnName = "sum123";
								}
							}
						]
					},
					"footer": {
						"rows": [
							{"height": "24px"},
							{"height": "24px"}
						],
						"cells": [
							{
								"constraint": {"rowIndex": 0, "colIndex": 0},
								"configurator": function(cell){
									cell.expr = "\"합계\"";
									cell.control = (function(){
										var output_3 = new cpr.controls.Output("otp1");
										output_3.value = "Output";
										output_3.style.css({
											"font-weight" : "bold",
											"text-align" : "center"
										});
										return output_3;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.expr = "getSum(\"col1\")";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.expr = "getSum(\"col2\")";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.expr = "getSum(\"col3\")";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.expr = "getSum(\"col4\")";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 5},
								"configurator": function(cell){
									cell.expr = "getSum(\"col5\")";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 6},
								"configurator": function(cell){
									cell.expr = "getSum(\"col6\")";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 7},
								"configurator": function(cell){
									cell.expr = "getSum(\"col7\")";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 8},
								"configurator": function(cell){
								}
							},
							{
								"constraint": {"rowIndex": 1, "colIndex": 0},
								"configurator": function(cell){
									cell.expr = "\"평균\"";
									cell.control = (function(){
										var output_4 = new cpr.controls.Output("otp2");
										output_4.value = "Output";
										output_4.style.css({
											"font-weight" : "bold",
											"text-align" : "center"
										});
										return output_4;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 1, "colIndex": 1},
								"configurator": function(cell){
									cell.expr = "round(getAvg(\"col1\"))";
								}
							},
							{
								"constraint": {"rowIndex": 1, "colIndex": 2},
								"configurator": function(cell){
									cell.expr = "round(getAvg(\"col2\"))";
								}
							},
							{
								"constraint": {"rowIndex": 1, "colIndex": 3},
								"configurator": function(cell){
									cell.expr = "round(getAvg(\"col3\"))";
								}
							},
							{
								"constraint": {"rowIndex": 1, "colIndex": 4},
								"configurator": function(cell){
									cell.expr = "round(getAvg(\"col4\"))";
								}
							},
							{
								"constraint": {"rowIndex": 1, "colIndex": 5},
								"configurator": function(cell){
									cell.expr = "round(getAvg(\"col5\"))";
								}
							},
							{
								"constraint": {"rowIndex": 1, "colIndex": 6},
								"configurator": function(cell){
									cell.expr = "round(getAvg(\"col6\"))";
								}
							},
							{
								"constraint": {"rowIndex": 1, "colIndex": 7},
								"configurator": function(cell){
									cell.expr = "round(getAvg(\"col7\"))";
								}
							},
							{
								"constraint": {"rowIndex": 1, "colIndex": 8},
								"configurator": function(cell){
								}
							}
						]
					}
				});
				container.addChild(grid_1, {
					"colIndex": 0,
					"rowIndex": 1
				});
				var group_3 = new cpr.controls.Container("grp2");
				group_3.style.setClasses(["form-box"]);
				// Layout
				var formLayout_3 = new cpr.controls.layouts.FormLayout();
				formLayout_3.topMargin = "5px";
				formLayout_3.rightMargin = "5px";
				formLayout_3.bottomMargin = "5px";
				formLayout_3.leftMargin = "5px";
				formLayout_3.setColumns(["180px", "200px", "180px", "200px", "1fr"]);
				formLayout_3.setRows(["25px"]);
				group_3.setLayout(formLayout_3);
				(function(container){
					var output_5 = new cpr.controls.Output("otp3");
					output_5.value = "col1 항목의 합계";
					container.addChild(output_5, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var output_6 = new cpr.controls.Output("otp4");
					output_6.style.css({
						"background-color" : "white",
						"font-weight" : "normal",
						"text-align" : "left"
					});
					output_6.bind("value").toExpression("#dsList.getSum(\"col1\")");
					container.addChild(output_6, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var output_7 = new cpr.controls.Output("otp5");
					output_7.value = "col2 항목의 합계";
					container.addChild(output_7, {
						"colIndex": 2,
						"rowIndex": 0
					});
					var output_8 = new cpr.controls.Output("otp6");
					output_8.style.css({
						"background-color" : "white",
						"font-weight" : "normal",
						"text-align" : "left"
					});
					output_8.bind("value").toExpression("#dsList.getSum(\"col2\")");
					container.addChild(output_8, {
						"colIndex": 3,
						"rowIndex": 0
					});
				})(group_3);
				container.addChild(group_3, {
					"colIndex": 0,
					"rowIndex": 3
				});
				var userDefinedControl_2 = new udc.com.comFormTitle("comformtitle3");
				userDefinedControl_2.title = "그리드 자동합산 예제";
				container.addChild(userDefinedControl_2, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var userDefinedControl_3 = new udc.com.comFormTitle("comformtitle2");
				userDefinedControl_3.title = "그리드 특정항목 합계 예제";
				container.addChild(userDefinedControl_3, {
					"colIndex": 0,
					"rowIndex": 2
				});
				var userDefinedControl_4 = new udc.com.comFormTitle("comformtitle4");
				userDefinedControl_4.title = "시나리오";
				container.addChild(userDefinedControl_4, {
					"colIndex": 0,
					"rowIndex": 4
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
	app.title = "그리드 자동합산 예제";
	cpr.core.Platform.INSTANCE.register(app);
})();
