/*
 * App URI: app/exam/layout/pattern/templatePFileUpload
 * Source Location: app/exam/layout/pattern/templatePFileUpload.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/layout/pattern/templatePFileUpload", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * templatePFileUpload.js
			 * Created at 2021. 4. 27. 오전 11:00:02.
			 *
			 * @author kjyan
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("dsFile");
			dataSet_1.parseData({
				"info": "ATTC_FILE_NO,SEQ",
				"columns": [
					{"name": "ATTC_FILE_NO"},
					{"name": "SEQ"},
					{"name": "PGM_ID"},
					{"name": "USER_ID"},
					{"name": "FILE_NM"},
					{"name": "SAVE_FILE_NM"},
					{"name": "FILE_STAT_NM"},
					{"name": "FILE_PATH"},
					{"name": "FILE_EXT"},
					{"name": "FILE_SIZE"},
					{"name": "CRT_DTTM"},
					{"name": "FILE_ICON_IMG"}
				]
			});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("dmParam");
			dataMap_1.parseData({
				"columns" : [
					{
						"name": "strAttcFileNo",
						"dataType": "string",
						"defaultValue": ""
					},
					{"name": "strUserDefinePgmId"},
					{
						"name": "strFileStatRcd",
						"defaultValue": ""
					}
				]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("dmUpload");
			dataMap_2.parseData({
				"columns" : [
					{"name": "attcFileNo"},
					{"name": "fileNm"},
					{"name": "fileSize"}
				]
			});
			app.register(dataMap_2);
			
			var dataMap_3 = new cpr.data.DataMap("dmParamDown");
			dataMap_3.parseData({
				"columns" : [
					{"name": "filePath"},
					{"name": "fileNm"}
				]
			});
			app.register(dataMap_3);
			
			var dataMap_4 = new cpr.data.DataMap("dmMsg");
			dataMap_4.parseData({
				"columns" : [{"name": "strMsg"}]
			});
			app.register(dataMap_4);
			var submission_1 = new cpr.protocols.Submission("subUpload");
			submission_1.action = "/CmnFile/upload.do";
			submission_1.mediaType = "multipart/form-data";
			submission_1.responseType = "text";
			submission_1.addRequestData(dataMap_1);
			submission_1.addResponseData(dataMap_2, false);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("subList");
			submission_2.action = "/CmnFile/list.do";
			submission_2.addRequestData(dataMap_1);
			submission_2.addResponseData(dataSet_1, false);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("subDelete");
			submission_3.action = "/CmnFile/delete.do";
			submission_3.addRequestData(dataMap_1);
			submission_3.addRequestData(dataSet_1);
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("subCheckExist");
			submission_4.action = "/CmnFile/checkFileExist.do";
			submission_4.addRequestData(dataMap_3);
			app.register(submission_4);
			
			var submission_5 = new cpr.protocols.Submission("subDownload");
			submission_5.action = "/CmnFile/download.do";
			submission_5.mediaType = "application/x-www-form-urlencoded";
			submission_5.responseType = "filedownload";
			submission_5.addRequestData(dataMap_3);
			app.register(submission_5);
			
			var submission_6 = new cpr.protocols.Submission("subDownloadAll");
			submission_6.action = "/CmnFile/downloadAll.do";
			submission_6.mediaType = "application/x-www-form-urlencoded";
			submission_6.responseType = "filedownload";
			submission_6.addRequestData(dataMap_3);
			app.register(submission_6);
			
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
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container("grpHeader");
			group_1.style.setClasses(["header-box"]);
			// Layout
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			group_1.setLayout(verticalLayout_2);
			(function(container){
				var userDefinedControl_1 = new udc.com.appHeader("appheader");
				container.addChild(userDefinedControl_1, {
					"width": "1320px",
					"height": "30px"
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "700px",
				"height": "30px"
			});
			
			var group_2 = new cpr.controls.Container("grpData");
			// Layout
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.setColumns(["1fr"]);
			formLayout_1.setRows(["20px", "1fr", "30px"]);
			formLayout_1.setRowAutoSizing(0, true);
			group_2.setLayout(formLayout_1);
			(function(container){
				var group_3 = new cpr.controls.Container("grp4");
				group_3.userAttr({
					"mobile-column-count": "1",
					"tablet-column-count": "2"
				});
				// Layout
				var formLayout_2 = new cpr.controls.layouts.FormLayout();
				formLayout_2.setColumns(["1fr", "270px"]);
				formLayout_2.setRows(["20px"]);
				group_3.setLayout(formLayout_2);
				(function(container){
					var userDefinedControl_2 = linker.userDefinedControl_2 = new udc.com.comFormTitle("comformtitle1");
					container.addChild(userDefinedControl_2, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var group_4 = new cpr.controls.Container("grp5");
					group_4.userAttr({"not_responsive_target": "true"});
					// Layout
					var formLayout_3 = new cpr.controls.layouts.FormLayout();
					formLayout_3.topMargin = "0px";
					formLayout_3.rightMargin = "0px";
					formLayout_3.bottomMargin = "0px";
					formLayout_3.leftMargin = "0px";
					formLayout_3.setColumns(["100px", "10px", "80px", "60px"]);
					formLayout_3.setRows(["1fr"]);
					group_4.setLayout(formLayout_3);
					(function(container){
						var button_1 = new cpr.controls.Button("btnDelete");
						button_1.visible = false;
						button_1.value = "삭제";
						button_1.style.setClasses(["btn-delete-save"]);
						container.addChild(button_1, {
							"colIndex": 3,
							"rowIndex": 0
						});
						var button_2 = new cpr.controls.Button("btnDownAll");
						button_2.value = "전체다운";
						container.addChild(button_2, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var button_3 = new cpr.controls.Button("btnUpload");
						button_3.visible = false;
						button_3.value = "파일 업로드";
						button_3.style.setClasses(["btn-commit"]);
						container.addChild(button_3, {
							"colIndex": 0,
							"rowIndex": 0
						});
					})(group_4);
					container.addChild(group_4, {
						"colIndex": 1,
						"rowIndex": 0
					});
				})(group_3);
				container.addChild(group_3, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var group_5 = new cpr.controls.Container("grp3");
				// Layout
				var formLayout_4 = new cpr.controls.layouts.FormLayout();
				formLayout_4.topMargin = "5px";
				formLayout_4.rightMargin = "0px";
				formLayout_4.bottomMargin = "5px";
				formLayout_4.leftMargin = "0px";
				formLayout_4.setColumns(["1fr", "70px", "1fr"]);
				formLayout_4.setRows(["20px"]);
				group_5.setLayout(formLayout_4);
				(function(container){
					var button_4 = new cpr.controls.Button("btnClose");
					button_4.value = "화면닫기";
					button_4.style.setClasses(["btn-pop-close"]);
					container.addChild(button_4, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var fileInput_1 = new cpr.controls.FileInput("fileinput1");
					fileInput_1.visible = false;
					fileInput_1.multiple = true;
					fileInput_1.limitFileSizeUnit = "mb";
					fileInput_1.limitFileSize = 50;
					container.addChild(fileInput_1, {
						"colIndex": 2,
						"rowIndex": 0
					});
				})(group_5);
				container.addChild(group_5, {
					"colIndex": 0,
					"rowIndex": 2
				});
				var grid_1 = linker.grid_1 = new cpr.controls.Grid("grdFile");
				grid_1.fieldLabel = "첨부파일목록";
				grid_1.readOnly = true;
				grid_1.init({
					"dataSet": app.lookup("dsFile"),
					"autoFit": "3",
					"columns": [
						{"width": "25px"},
						{"width": "40px"},
						{"width": "20px"},
						{"width": "359px"},
						{"width": "95px"},
						{"width": "70px"},
						{
							"width": "60px",
							"visible": false
						},
						{
							"width": "100px",
							"visible": false
						},
						{
							"width": "100px",
							"visible": false
						}
					],
					"header": {
						"rows": [{"height": "24"}],
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
									cell.filterable = false;
									cell.sortable = false;
									cell.text = "No";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2, "rowSpan": 1, "colSpan": 2},
								"configurator": function(cell){
									cell.text = "파일명";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.text = "사이즈(byte)";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 5},
								"configurator": function(cell){
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 6},
								"configurator": function(cell){
									cell.text = "상태";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 7},
								"configurator": function(cell){
									cell.text = "업로드일시";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 8},
								"configurator": function(cell){
									cell.text = "업로드사용자ID";
								}
							}
						]
					},
					"detail": {
						"rows": [{"height": "24"}],
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
									cell.columnType = "rowindex";
									cell.style.css({
										"text-align" : "center"
									});
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.style.css({
										"border-right-style" : "none",
										"border-top-width" : "0px",
										"border-left-style" : "none",
										"border-right-width" : "0px",
										"border-left-width" : "0px",
										"border-top-style" : "none"
									});
									cell.control = (function(){
										var image_1 = new cpr.controls.Image("img1");
										image_1.bind("src").toDataColumn("FILE_ICON_IMG");
										(function(image_1){
										})(image_1);
										return image_1;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.columnName = "FILE_NM";
									cell.style.css({
										"padding" : "0px 2px 0px 2px"
									});
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.columnName = "FILE_SIZE";
									cell.style.css({
										"text-align" : "right"
									});
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 5},
								"configurator": function(cell){
									cell.control = (function(){
										var button_5 = new cpr.controls.Button("btn1");
										button_5.value = "다운로드";
										return button_5;
									})();
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 6},
								"configurator": function(cell){
									cell.columnName = "FILE_STAT_NM";
									cell.style.css({
										"text-align" : "center"
									});
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 7},
								"configurator": function(cell){
									cell.columnName = "CRT_DTTM";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 8},
								"configurator": function(cell){
									cell.columnName = "USER_ID";
								}
							}
						]
					}
				});
				container.addChild(grid_1, {
					"colIndex": 0,
					"rowIndex": 1
				});
			})(group_2);
			container.addChild(group_2, {
				"width": "700px",
				"height": "315px"
			});
			// Linking
			linker.userDefinedControl_2.ctrl = linker.grid_1;
		}
	});
	app.title = "템플릿(파일업로드 팝업)";
	cpr.core.Platform.INSTANCE.register(app);
})();
