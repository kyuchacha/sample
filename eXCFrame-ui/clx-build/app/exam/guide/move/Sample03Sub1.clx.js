/*
 * App URI: app/exam/guide/move/Sample03Sub1
 * Source Location: app/exam/guide/move/Sample03Sub1.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/guide/move/Sample03Sub1", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * Template7011.js
			 * Created at 2020. 4. 23. 오전 10:49:28.
			 *
			 * @author 1073903
			 ************************************************/
			
			var util = createCommonUtil();
			
			/*
			 * Body에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit( /* cpr.events.CEvent */ e) {
				util.Grid.init(app, ["grdMst"]);
				
				//함수호출
				f_setInitValue();
				
				//스크립트 내용 표시
				app.lookup("txaScript").value = "" + f_setInitValue;
				
			}
			
			/**
			 * 화면에 표시할 스크립트 내용을 기술 
			 */
			function f_setInitValue() {
				//조회조건에 전달받은 파라메터 셋팅
				var vsInitValue = app.getHostProperty("initValue");
				
				app.lookup("ipbCd").value = vsInitValue.initCd;
				app.lookup("ipbNm").value = vsInitValue.initNm;
				
			}
			
			
			/*
			 * "선택닫기" 버튼(btnSelect)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnSelectClick(/* cpr.events.CMouseEvent */ e){
				/** 
				 * @type cpr.controls.Button
				 */
				var btnSelect = e.control;
				var returnValue = {
					"rtnValue": "rtnVal",
					"rtnValue2": "rtnVal2"
				};
				
				app.close(returnValue);
				
				//예시: 데이터셋 리턴
				//app.close(app.lookup("ds1"));
			}
			
			
			/*
			 * "화면닫기" 버튼(btnClose2)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnClose2Click(/* cpr.events.CMouseEvent */ e){
				/** 
				 * @type cpr.controls.Button
				 */
				var btnClose2 = e.control;
				app.close();
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds1");
			dataSet_1.parseData({
				"columns": [
					{"name": "단체증번"},
					{"name": "수금인"},
					{"name": "수금인사번"},
					{"name": "수금기관"},
					{"name": "담당자"},
					{"name": "담당자사번"}
				],
				"rows": [
					{"단체증번": "단체증번1", "수금인": "수금인1", "수금인사번": "수금인사번1", "수금기관": "수금기관1", "담당자": "담당자1", "담당자사번": "담당자사번1"},
					{"단체증번": "단체증번2", "수금인": "수금인2", "수금인사번": "수금인사번2", "수금기관": "수금기관2", "담당자": "담당자2", "담당자사번": "담당자사번2"},
					{"단체증번": "단체증번3", "수금인": "수금인3", "수금인사번": "수금인사번3", "수금기관": "수금기관3", "담당자": "담당자3", "담당자사번": "담당자사번3"},
					{"단체증번": "단체증번4", "수금인": "수금인4", "수금인사번": "수금인사번4", "수금기관": "수금기관4", "담당자": "담당자4", "담당자사번": "담당자사번4"},
					{"단체증번": "단체증번5", "수금인": "수금인5", "수금인사번": "수금인사번5", "수금기관": "수금기관5", "담당자": "담당자5", "담당자사번": "담당자사번5"},
					{"단체증번": "단체증번6", "수금인": "수금인6", "수금인사번": "수금인사번6", "수금기관": "수금기관6", "담당자": "담당자6", "담당자사번": "담당자사번6"},
					{"단체증번": "단체증번7", "수금인": "수금인7", "수금인사번": "수금인사번7", "수금기관": "수금기관7", "담당자": "담당자7", "담당자사번": "담당자사번7"},
					{"단체증번": "단체증번8", "수금인": "수금인8", "수금인사번": "수금인사번8", "수금기관": "수금기관8", "담당자": "담당자8", "담당자사번": "담당자사번8"},
					{"단체증번": "단체증번9", "수금인": "수금인9", "수금인사번": "수금인사번9", "수금기관": "수금기관9", "담당자": "담당자9", "담당자사번": "담당자사번9"},
					{"단체증번": "단체증번10", "수금인": "수금인10", "수금인사번": "수금인사번10", "수금기관": "수금기관10", "담당자": "담당자10", "담당자사번": "담당자사번10"},
					{"단체증번": "단체증번11", "수금인": "수금인11", "수금인사번": "수금인사번11", "수금기관": "수금기관11", "담당자": "담당자11", "담당자사번": "담당자사번11"},
					{"단체증번": "단체증번12", "수금인": "수금인12", "수금인사번": "수금인사번12", "수금기관": "수금기관12", "담당자": "담당자12", "담당자사번": "담당자사번12"},
					{"단체증번": "단체증번13", "수금인": "수금인13", "수금인사번": "수금인사번13", "수금기관": "수금기관13", "담당자": "담당자13", "담당자사번": "담당자사번13"},
					{"단체증번": "단체증번14", "수금인": "수금인14", "수금인사번": "수금인사번14", "수금기관": "수금기관14", "담당자": "담당자14", "담당자사번": "담당자사번14"},
					{"단체증번": "단체증번15", "수금인": "수금인15", "수금인사번": "수금인사번15", "수금기관": "수금기관15", "담당자": "담당자15", "담당자사번": "담당자사번15"}
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
			var group_1 = new cpr.controls.Container("grp8");
			group_1.style.setClasses(["header-box"]);
			// Layout
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.scrollable = false;
			verticalLayout_2.spacing = 0;
			group_1.setLayout(verticalLayout_2);
			(function(container){
				var userDefinedControl_1 = new udc.com.appHeader("appheader1");
				userDefinedControl_1.groupBoxIds = "grp1";
				userDefinedControl_1.searchBoxId = "grpSearch";
				userDefinedControl_1.initializeYn = "N";
				container.addChild(userDefinedControl_1, {
					"autoSize": "none",
					"width": "790px",
					"height": "30px"
				});
				var group_2 = new cpr.controls.Container("grpSearch");
				group_2.style.setClasses(["search-box"]);
				// Layout
				var flowLayout_1 = new cpr.controls.layouts.FlowLayout();
				group_2.setLayout(flowLayout_1);
				(function(container){
					var group_3 = new cpr.controls.Container("grp9");
					// Layout
					var formLayout_1 = new cpr.controls.layouts.FormLayout();
					formLayout_1.setColumns(["100px", "1fr"]);
					formLayout_1.setRows(["1fr"]);
					group_3.setLayout(formLayout_1);
					(function(container){
						var output_1 = new cpr.controls.Output();
						output_1.value = "파라미터_코드";
						container.addChild(output_1, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var inputBox_1 = new cpr.controls.InputBox("ipbCd");
						container.addChild(inputBox_1, {
							"colIndex": 1,
							"rowIndex": 0
						});
					})(group_3);
					container.addChild(group_3, {
						"width": "300px",
						"height": "25px"
					});
					var group_4 = new cpr.controls.Container("grp10");
					// Layout
					var formLayout_2 = new cpr.controls.layouts.FormLayout();
					formLayout_2.setColumns(["100px", "1fr"]);
					formLayout_2.setRows(["1fr"]);
					group_4.setLayout(formLayout_2);
					(function(container){
						var output_2 = new cpr.controls.Output();
						output_2.value = "파라미터_명칭";
						container.addChild(output_2, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var inputBox_2 = new cpr.controls.InputBox("ipbNm");
						container.addChild(inputBox_2, {
							"colIndex": 1,
							"rowIndex": 0
						});
					})(group_4);
					container.addChild(group_4, {
						"width": "300px",
						"height": "25px"
					});
					var userDefinedControl_2 = new udc.com.comBtnSearch("combtnsearch1");
					container.addChild(userDefinedControl_2, {
						"autoSize": "none",
						"width": "60px",
						"height": "25px"
					});
				})(group_2);
				container.addChild(group_2, {
					"autoSize": "height",
					"width": "790px",
					"height": "25px"
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "800px",
				"height": "60px"
			});
			
			var group_5 = new cpr.controls.Container("grp1");
			// Layout
			var formLayout_3 = new cpr.controls.layouts.FormLayout();
			formLayout_3.horizontalSpacing = "0px";
			formLayout_3.verticalSpacing = "0px";
			formLayout_3.setColumns(["1fr"]);
			formLayout_3.setRows(["1fr", "30px"]);
			group_5.setLayout(formLayout_3);
			(function(container){
				var group_6 = new cpr.controls.Container("grp6");
				// Layout
				var formLayout_4 = new cpr.controls.layouts.FormLayout();
				formLayout_4.horizontalSpacing = "0px";
				formLayout_4.verticalSpacing = "0px";
				formLayout_4.setColumns(["1fr"]);
				formLayout_4.setRows(["20px", "1fr", "20px", "1fr"]);
				group_6.setLayout(formLayout_4);
				(function(container){
					var grid_1 = new cpr.controls.Grid("grdMst");
					grid_1.init({
						"dataSet": app.lookup("ds1"),
						"columns": [
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"}
						],
						"header": {
							"rows": [{"height": "24px"}],
							"cells": [
								{
									"constraint": {"rowIndex": 0, "colIndex": 0},
									"configurator": function(cell){
										cell.targetColumnName = "단체증번";
										cell.filterable = false;
										cell.sortable = false;
										cell.text = "단체증번";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.targetColumnName = "수금인";
										cell.filterable = false;
										cell.sortable = false;
										cell.text = "수금인";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.targetColumnName = "수금인사번";
										cell.filterable = false;
										cell.sortable = false;
										cell.text = "수금인사번";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.targetColumnName = "수금기관";
										cell.filterable = false;
										cell.sortable = false;
										cell.text = "수금기관";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.targetColumnName = "담당자";
										cell.filterable = false;
										cell.sortable = false;
										cell.text = "담당자";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.targetColumnName = "담당자사번";
										cell.filterable = false;
										cell.sortable = false;
										cell.text = "담당자사번";
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
										cell.columnName = "단체증번";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.columnName = "수금인";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.columnName = "수금인사번";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.columnName = "수금기관";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.columnName = "담당자";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.columnName = "담당자사번";
									}
								}
							]
						}
					});
					container.addChild(grid_1, {
						"colIndex": 0,
						"rowIndex": 1
					});
					var textArea_1 = new cpr.controls.TextArea("txaScript");
					textArea_1.style.setClasses(["form-box"]);
					container.addChild(textArea_1, {
						"colIndex": 0,
						"rowIndex": 3
					});
					var userDefinedControl_3 = new udc.com.comFormTitle("comformtitle3");
					userDefinedControl_3.title = "목록";
					container.addChild(userDefinedControl_3, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var userDefinedControl_4 = new udc.com.comFormTitle("comformtitle2");
					userDefinedControl_4.title = "스크립트 내용";
					container.addChild(userDefinedControl_4, {
						"colIndex": 0,
						"rowIndex": 2
					});
				})(group_6);
				container.addChild(group_6, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var group_7 = new cpr.controls.Container("grp3");
				// Layout
				var formLayout_5 = new cpr.controls.layouts.FormLayout();
				formLayout_5.topMargin = "5px";
				formLayout_5.rightMargin = "0px";
				formLayout_5.bottomMargin = "5px";
				formLayout_5.leftMargin = "0px";
				formLayout_5.setColumns(["70px", "1fr", "70px", "5px"]);
				formLayout_5.setRows(["1fr"]);
				group_7.setLayout(formLayout_5);
				(function(container){
					var button_1 = new cpr.controls.Button("btnClose2");
					button_1.visible = false;
					button_1.value = "화면닫기";
					button_1.style.setClasses(["btn-pop-close"]);
					if(typeof onBtnClose2Click == "function") {
						button_1.addEventListener("click", onBtnClose2Click);
					}
					container.addChild(button_1, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var button_2 = new cpr.controls.Button("btnSelect");
					button_2.value = "선택닫기";
					button_2.style.setClasses(["btn-pop-close"]);
					if(typeof onBtnSelectClick == "function") {
						button_2.addEventListener("click", onBtnSelectClick);
					}
					container.addChild(button_2, {
						"colIndex": 2,
						"rowIndex": 0
					});
				})(group_7);
				container.addChild(group_7, {
					"colIndex": 0,
					"rowIndex": 1
				});
			})(group_5);
			container.addChild(group_5, {
				"autoSize": "none",
				"width": "1292px",
				"height": "535px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "팝업";
	cpr.core.Platform.INSTANCE.register(app);
})();
