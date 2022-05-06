/*
 * App URI: app/exam/dev/oneForm
 * Source Location: app/exam/dev/oneForm.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/dev/oneForm", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * oneForm.js
			 * Created at 2021. 7. 22. 오후 1:23:34.
			 *
			 * @author kim su hyun
			 ************************************************/
			var util = createCommonUtil();
			
			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(/* cpr.events.CEvent */ e){
				util.Submit.send(app, "subOnload", function(pbSuccess){
					if(pbSuccess){
						
					}
				});
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("dsNatRcd");
			dataSet_1.parseData({
				"columns" : [
					{"name": "CD"},
					{"name": "CD_NM"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("dsGenderRcd");
			dataSet_2.parseData({
				"columns" : [
					{"name": "CD"},
					{"name": "CD_NM"}
				]
			});
			app.register(dataSet_2);
			
			var dataSet_3 = new cpr.data.DataSet("dsDayNightDivRcd");
			dataSet_3.parseData({
				"columns" : [
					{"name": "CD"},
					{"name": "CD_NM"}
				]
			});
			app.register(dataSet_3);
			
			var dataSet_4 = new cpr.data.DataSet("dsStudDivRcd");
			dataSet_4.parseData({
				"columns" : [
					{"name": "CD"},
					{"name": "CD_NM"}
				]
			});
			app.register(dataSet_4);
			
			var dataSet_5 = new cpr.data.DataSet("dsBankRcd");
			dataSet_5.parseData({
				"columns" : [
					{"name": "CD"},
					{"name": "CD_NM"}
				]
			});
			app.register(dataSet_5);
			var submission_1 = new cpr.protocols.Submission("subOnload");
			submission_1.action = "/OneGrid/onLoad.do";
			submission_1.addResponseData(dataSet_2, false);
			submission_1.addResponseData(dataSet_4, false);
			submission_1.addResponseData(dataSet_3, false);
			submission_1.addResponseData(dataSet_1, false);
			submission_1.addResponseData(dataSet_5, false);
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
			group_1.style.setClasses(["header-box"]);
			// Layout
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.spacing = 0;
			group_1.setLayout(verticalLayout_2);
			(function(container){
				var userDefinedControl_1 = new udc.com.appHeader("appheader");
				userDefinedControl_1.searchBoxId = "grpSearch";
				container.addChild(userDefinedControl_1, {
					"width": "500px",
					"height": "30px"
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "1320px",
				"height": "25px"
			});
			
			var group_2 = new cpr.controls.Container("grpData");
			// Layout
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "5px";
			formLayout_1.verticalSpacing = "5px";
			formLayout_1.setColumns(["1fr"]);
			formLayout_1.setRows(["25px", "1fr"]);
			group_2.setLayout(formLayout_1);
			(function(container){
				var userDefinedControl_2 = linker.userDefinedControl_2 = new udc.com.comFormTitle("comformtitle1");
				container.addChild(userDefinedControl_2, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var group_3 = linker.group_3 = new cpr.controls.Container("grpCmnTmpReg");
				group_3.fieldLabel = "학생상세";
				group_3.style.setClasses(["form-box"]);
				// Layout
				var formLayout_2 = new cpr.controls.layouts.FormLayout();
				formLayout_2.topMargin = "5px";
				formLayout_2.rightMargin = "5px";
				formLayout_2.bottomMargin = "5px";
				formLayout_2.leftMargin = "5px";
				formLayout_2.setColumns(["100px", "1fr", "100px", "1fr"]);
				formLayout_2.setRows(["25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "1fr"]);
				group_3.setLayout(formLayout_2);
				(function(container){
					var output_1 = new cpr.controls.Output();
					output_1.value = "학번";
					output_1.style.setClasses(["require"]);
					container.addChild(output_1, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var inputBox_1 = new cpr.controls.InputBox("ipb3");
					inputBox_1.bind("value").toDataColumn("STUD_NO");
					container.addChild(inputBox_1, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var output_2 = new cpr.controls.Output();
					output_2.value = "구성원ID";
					output_2.style.setClasses(["require"]);
					container.addChild(output_2, {
						"colIndex": 2,
						"rowIndex": 0
					});
					var inputBox_2 = new cpr.controls.InputBox("ipb8");
					inputBox_2.bind("value").toDataColumn("PARTY_ID");
					container.addChild(inputBox_2, {
						"colIndex": 3,
						"rowIndex": 0
					});
					var output_3 = new cpr.controls.Output();
					output_3.value = "성명";
					output_3.style.setClasses(["require"]);
					container.addChild(output_3, {
						"colIndex": 0,
						"rowIndex": 1
					});
					var inputBox_3 = new cpr.controls.InputBox("ipb4");
					inputBox_3.bind("value").toDataColumn("REP_NM");
					container.addChild(inputBox_3, {
						"colIndex": 1,
						"rowIndex": 1
					});
					var output_4 = new cpr.controls.Output();
					output_4.value = "영문명";
					container.addChild(output_4, {
						"colIndex": 2,
						"rowIndex": 1
					});
					var inputBox_4 = new cpr.controls.InputBox("ipb10");
					inputBox_4.bind("value").toDataColumn("ENG_NM");
					container.addChild(inputBox_4, {
						"colIndex": 3,
						"rowIndex": 1
					});
					var output_5 = new cpr.controls.Output();
					output_5.value = "한자명";
					container.addChild(output_5, {
						"colIndex": 0,
						"rowIndex": 2
					});
					var inputBox_5 = new cpr.controls.InputBox("ipb5");
					inputBox_5.bind("value").toDataColumn("CHA_NM");
					container.addChild(inputBox_5, {
						"colIndex": 1,
						"rowIndex": 2
					});
					var output_6 = new cpr.controls.Output();
					output_6.value = "성별";
					container.addChild(output_6, {
						"colIndex": 2,
						"rowIndex": 2
					});
					var comboBox_1 = new cpr.controls.ComboBox("cmb5");
					comboBox_1.bind("value").toDataColumn("GENDER_RCD");
					(function(comboBox_1){
						comboBox_1.setItemSet(app.lookup("dsGenderRcd"), {
							"label": "CD_NM",
							"value": "CD"
						});
					})(comboBox_1);
					container.addChild(comboBox_1, {
						"colIndex": 3,
						"rowIndex": 2
					});
					var output_7 = new cpr.controls.Output();
					output_7.value = "주민번호";
					container.addChild(output_7, {
						"colIndex": 0,
						"rowIndex": 3
					});
					var inputBox_6 = new cpr.controls.InputBox("ipb6");
					inputBox_6.bind("value").toDataColumn("SSN");
					container.addChild(inputBox_6, {
						"colIndex": 1,
						"rowIndex": 3
					});
					var output_8 = new cpr.controls.Output();
					output_8.value = "학생구분";
					container.addChild(output_8, {
						"colIndex": 2,
						"rowIndex": 3
					});
					var comboBox_2 = new cpr.controls.ComboBox("cmb3");
					comboBox_2.bind("value").toDataColumn("STUD_DIV_RCD");
					(function(comboBox_2){
						comboBox_2.setItemSet(app.lookup("dsStudDivRcd"), {
							"label": "CD_NM",
							"value": "CD"
						});
					})(comboBox_2);
					container.addChild(comboBox_2, {
						"colIndex": 3,
						"rowIndex": 3
					});
					var output_9 = new cpr.controls.Output();
					output_9.value = "학사부서";
					container.addChild(output_9, {
						"colIndex": 0,
						"rowIndex": 4
					});
					var inputBox_7 = new cpr.controls.InputBox("ipb7");
					inputBox_7.bind("value").toDataColumn("DEPT_CD");
					container.addChild(inputBox_7, {
						"colIndex": 1,
						"rowIndex": 4
					});
					var output_10 = new cpr.controls.Output();
					output_10.value = "주야구분";
					container.addChild(output_10, {
						"colIndex": 2,
						"rowIndex": 4
					});
					var comboBox_3 = new cpr.controls.ComboBox("cmb2");
					comboBox_3.bind("value").toDataColumn("DAY_NIGHT_DIV_RCD");
					(function(comboBox_3){
						comboBox_3.setItemSet(app.lookup("dsDayNightDivRcd"), {
							"label": "CD_NM",
							"value": "CD"
						});
					})(comboBox_3);
					container.addChild(comboBox_3, {
						"colIndex": 3,
						"rowIndex": 4
					});
					var output_11 = new cpr.controls.Output();
					output_11.value = "국가";
					container.addChild(output_11, {
						"colIndex": 0,
						"rowIndex": 5
					});
					var comboBox_4 = new cpr.controls.ComboBox("cmb1");
					comboBox_4.bind("value").toDataColumn("NAT_RCD");
					(function(comboBox_4){
						comboBox_4.setItemSet(app.lookup("dsNatRcd"), {
							"label": "CD_NM",
							"value": "CD"
						});
					})(comboBox_4);
					container.addChild(comboBox_4, {
						"colIndex": 1,
						"rowIndex": 5
					});
					var output_12 = new cpr.controls.Output();
					output_12.value = "우편번호";
					container.addChild(output_12, {
						"colIndex": 2,
						"rowIndex": 5
					});
					var inputBox_8 = new cpr.controls.InputBox("ipb11");
					inputBox_8.bind("value").toDataColumn("ZIPCODE");
					container.addChild(inputBox_8, {
						"colIndex": 3,
						"rowIndex": 5
					});
					var output_13 = new cpr.controls.Output();
					output_13.value = "주소1";
					container.addChild(output_13, {
						"colIndex": 0,
						"rowIndex": 6
					});
					var inputBox_9 = new cpr.controls.InputBox("ipb9");
					inputBox_9.bind("value").toDataColumn("ADDR1");
					container.addChild(inputBox_9, {
						"colIndex": 1,
						"rowIndex": 6
					});
					var output_14 = new cpr.controls.Output();
					output_14.value = "주소2";
					container.addChild(output_14, {
						"colIndex": 2,
						"rowIndex": 6
					});
					var inputBox_10 = new cpr.controls.InputBox("ipb12");
					inputBox_10.bind("value").toDataColumn("ADDR2");
					container.addChild(inputBox_10, {
						"colIndex": 3,
						"rowIndex": 6
					});
					var output_15 = new cpr.controls.Output();
					output_15.value = "휴대전화번호";
					container.addChild(output_15, {
						"colIndex": 0,
						"rowIndex": 7
					});
					var inputBox_11 = new cpr.controls.InputBox("ipb14");
					inputBox_11.bind("value").toDataColumn("CLP_NO");
					container.addChild(inputBox_11, {
						"colIndex": 1,
						"rowIndex": 7
					});
					var output_16 = new cpr.controls.Output();
					output_16.value = "내선번호";
					container.addChild(output_16, {
						"colIndex": 2,
						"rowIndex": 7
					});
					var inputBox_12 = new cpr.controls.InputBox("ipb13");
					inputBox_12.bind("value").toDataColumn("AEN");
					container.addChild(inputBox_12, {
						"colIndex": 3,
						"rowIndex": 7
					});
					var output_17 = new cpr.controls.Output();
					output_17.value = "이메일";
					container.addChild(output_17, {
						"colIndex": 0,
						"rowIndex": 8
					});
					var inputBox_13 = new cpr.controls.InputBox("ipb15");
					inputBox_13.bind("value").toDataColumn("EMAIL");
					container.addChild(inputBox_13, {
						"colIndex": 1,
						"rowIndex": 8
					});
					var output_18 = new cpr.controls.Output();
					output_18.value = "은행";
					container.addChild(output_18, {
						"colIndex": 2,
						"rowIndex": 8
					});
					var comboBox_5 = new cpr.controls.ComboBox("cmb4");
					comboBox_5.bind("value").toDataColumn("BANK_RCD");
					(function(comboBox_5){
						comboBox_5.setItemSet(app.lookup("dsBankRcd"), {
							"label": "CD_NM",
							"value": "CD"
						});
					})(comboBox_5);
					container.addChild(comboBox_5, {
						"colIndex": 3,
						"rowIndex": 8
					});
					var output_19 = new cpr.controls.Output();
					output_19.value = "계좌번호";
					container.addChild(output_19, {
						"colIndex": 0,
						"rowIndex": 9
					});
					var inputBox_14 = new cpr.controls.InputBox("ipb16");
					inputBox_14.bind("value").toDataColumn("ACCT_NO");
					container.addChild(inputBox_14, {
						"colIndex": 1,
						"rowIndex": 9
					});
					var output_20 = new cpr.controls.Output();
					output_20.value = "소유자명";
					container.addChild(output_20, {
						"colIndex": 2,
						"rowIndex": 9
					});
					var inputBox_15 = new cpr.controls.InputBox("ipb18");
					inputBox_15.bind("value").toDataColumn("OWNER_NM");
					container.addChild(inputBox_15, {
						"colIndex": 3,
						"rowIndex": 9
					});
					var output_21 = new cpr.controls.Output();
					output_21.value = "첨부파일";
					container.addChild(output_21, {
						"colIndex": 0,
						"rowIndex": 10
					});
					var userDefinedControl_3 = new udc.cmn.udcCmnPFileUpload("udccmnpfileupload1");
					userDefinedControl_3.bind("attcFileNo").toDataColumn("ATTC_FILE_NO");
					container.addChild(userDefinedControl_3, {
						"colIndex": 1,
						"rowIndex": 10
					});
					var output_22 = new cpr.controls.Output();
					output_22.value = "파일순번";
					container.addChild(output_22, {
						"colIndex": 2,
						"rowIndex": 10
					});
					var inputBox_16 = new cpr.controls.InputBox("ipb1");
					inputBox_16.bind("value").toDataColumn("ATTC_FILE_NO");
					container.addChild(inputBox_16, {
						"colIndex": 3,
						"rowIndex": 10
					});
				})(group_3);
				container.addChild(group_3, {
					"colIndex": 0,
					"rowIndex": 1
				});
			})(group_2);
			container.addChild(group_2, {
				"width": "1320px",
				"height": "630px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
			// Linking
			linker.userDefinedControl_2.ctrl = linker.group_3;
		}
	});
	app.title = "템플릿(폼)";
	cpr.core.Platform.INSTANCE.register(app);
})();