/*
 * App URI: app/exam/guide/util/UtilSample04
 * Source Location: app/exam/guide/util/UtilSample04.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/guide/util/UtilSample04", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * UtilSample04.js
			 * Created at 2020. 6. 8. 오후 2:38:16.
			 *
			 * @author 1073727
			 ************************************************/
			// End - User Script
			
			// Header
			
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
			formLayout_1.setColumns(["1fr"]);
			formLayout_1.setRows(["25px", "25px", "120px", "25px", "95px", "25px", "118px"]);
			formLayout_1.setRowAutoSizing(2, true);
			formLayout_1.setRowAutoSizing(4, true);
			formLayout_1.setRowAutoSizing(6, true);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output("otp1");
				output_1.value = "컨트롤의 dataType, format 속성값 또는 마스크 에디터를 통해 데이터의 포맷을 설정할 수 있다. 아래는 몇가지 예시를 들었으며 자세한 사항은 도움말을 참조.";
				output_1.style.css({
					"font-weight" : "bold"
				});
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var userDefinedControl_2 = new udc.com.comFormTitle("comformtitle2");
				userDefinedControl_2.title = "아웃풋 숫자포맷";
				container.addChild(userDefinedControl_2, {
					"colIndex": 0,
					"rowIndex": 1
				});
				var group_2 = new cpr.controls.Container("grp2");
				group_2.style.setClasses(["form-box"]);
				// Layout
				var formLayout_2 = new cpr.controls.layouts.FormLayout();
				formLayout_2.topMargin = "5px";
				formLayout_2.rightMargin = "5px";
				formLayout_2.bottomMargin = "5px";
				formLayout_2.leftMargin = "5px";
				formLayout_2.setColumns(["180px", "100px", "1fr", "100px", "1fr", "100px", "1fr", "100px", "1fr"]);
				formLayout_2.setRows(["25px", "25px", "25px", "25px"]);
				group_2.setLayout(formLayout_2);
				(function(container){
					var output_2 = new cpr.controls.Output("opt1");
					output_2.value = "숫자포맷(음수포함 정수)";
					output_2.style.css({
						"background-color" : "#d7e4f2",
						"text-align" : "center"
					});
					container.addChild(output_2, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var output_3 = new cpr.controls.Output("opt22");
					output_3.value = "dataType";
					container.addChild(output_3, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var inputBox_1 = new cpr.controls.InputBox("ipb1");
					inputBox_1.readOnly = true;
					inputBox_1.value = "number";
					container.addChild(inputBox_1, {
						"colIndex": 2,
						"rowIndex": 0
					});
					var output_4 = new cpr.controls.Output("opt23");
					output_4.value = "format";
					container.addChild(output_4, {
						"colIndex": 3,
						"rowIndex": 0
					});
					var inputBox_2 = new cpr.controls.InputBox("ipb5");
					inputBox_2.readOnly = true;
					inputBox_2.value = "s#,##9";
					container.addChild(inputBox_2, {
						"colIndex": 4,
						"rowIndex": 0
					});
					var output_5 = new cpr.controls.Output("opt8");
					output_5.value = "입력값";
					container.addChild(output_5, {
						"colIndex": 5,
						"rowIndex": 0
					});
					var inputBox_3 = new cpr.controls.InputBox("ipb9");
					inputBox_3.readOnly = true;
					inputBox_3.value = "-12345";
					container.addChild(inputBox_3, {
						"colIndex": 6,
						"rowIndex": 0
					});
					var output_6 = new cpr.controls.Output("opt25");
					output_6.value = "결과값";
					container.addChild(output_6, {
						"colIndex": 7,
						"rowIndex": 0
					});
					var output_7 = new cpr.controls.Output("opt26");
					output_7.value = "-12345";
					output_7.dataType = "number";
					output_7.format = "s#,##9";
					output_7.style.css({
						"background-color" : "white",
						"font-weight" : "normal",
						"text-align" : "left"
					});
					container.addChild(output_7, {
						"colIndex": 8,
						"rowIndex": 0
					});
					var output_8 = new cpr.controls.Output("opt3");
					output_8.value = "양수포맷(정수)";
					output_8.style.css({
						"background-color" : "#d7e4f2",
						"text-align" : "center"
					});
					container.addChild(output_8, {
						"colIndex": 0,
						"rowIndex": 1
					});
					var output_9 = new cpr.controls.Output("opt27");
					output_9.value = "dataType";
					container.addChild(output_9, {
						"colIndex": 1,
						"rowIndex": 1
					});
					var inputBox_4 = new cpr.controls.InputBox("ipb2");
					inputBox_4.readOnly = true;
					inputBox_4.value = "number";
					container.addChild(inputBox_4, {
						"colIndex": 2,
						"rowIndex": 1
					});
					var output_10 = new cpr.controls.Output("opt29");
					output_10.value = "format";
					container.addChild(output_10, {
						"colIndex": 3,
						"rowIndex": 1
					});
					var inputBox_5 = new cpr.controls.InputBox("ipb6");
					inputBox_5.readOnly = true;
					inputBox_5.value = "#,##9";
					container.addChild(inputBox_5, {
						"colIndex": 4,
						"rowIndex": 1
					});
					var output_11 = new cpr.controls.Output("opt10");
					output_11.value = "입력값";
					container.addChild(output_11, {
						"colIndex": 5,
						"rowIndex": 1
					});
					var inputBox_6 = new cpr.controls.InputBox("ipb10");
					inputBox_6.readOnly = true;
					inputBox_6.value = "-12345";
					container.addChild(inputBox_6, {
						"colIndex": 6,
						"rowIndex": 1
					});
					var output_12 = new cpr.controls.Output("opt30");
					output_12.value = "결과값";
					container.addChild(output_12, {
						"colIndex": 7,
						"rowIndex": 1
					});
					var output_13 = new cpr.controls.Output("opt43");
					output_13.value = "-12345";
					output_13.dataType = "number";
					output_13.format = "#,##9";
					output_13.style.css({
						"background-color" : "white",
						"font-weight" : "normal",
						"text-align" : "left"
					});
					container.addChild(output_13, {
						"colIndex": 8,
						"rowIndex": 1
					});
					var output_14 = new cpr.controls.Output("opt4");
					output_14.value = "소수점1자리";
					output_14.style.css({
						"background-color" : "#d7e4f2",
						"text-align" : "center"
					});
					container.addChild(output_14, {
						"colIndex": 0,
						"rowIndex": 2
					});
					var output_15 = new cpr.controls.Output("opt31");
					output_15.value = "dataType";
					container.addChild(output_15, {
						"colIndex": 1,
						"rowIndex": 2
					});
					var inputBox_7 = new cpr.controls.InputBox("ipb3");
					inputBox_7.readOnly = true;
					inputBox_7.value = "number";
					container.addChild(inputBox_7, {
						"colIndex": 2,
						"rowIndex": 2
					});
					var output_16 = new cpr.controls.Output("opt33");
					output_16.value = "format";
					container.addChild(output_16, {
						"colIndex": 3,
						"rowIndex": 2
					});
					var inputBox_8 = new cpr.controls.InputBox("ipb7");
					inputBox_8.readOnly = true;
					inputBox_8.value = "s#,##0.0";
					container.addChild(inputBox_8, {
						"colIndex": 4,
						"rowIndex": 2
					});
					var output_17 = new cpr.controls.Output("opt9");
					output_17.value = "입력값";
					container.addChild(output_17, {
						"colIndex": 5,
						"rowIndex": 2
					});
					var inputBox_9 = new cpr.controls.InputBox("ipb11");
					inputBox_9.readOnly = true;
					inputBox_9.value = "123.456";
					container.addChild(inputBox_9, {
						"colIndex": 6,
						"rowIndex": 2
					});
					var output_18 = new cpr.controls.Output("opt34");
					output_18.value = "결과값";
					container.addChild(output_18, {
						"colIndex": 7,
						"rowIndex": 2
					});
					var output_19 = new cpr.controls.Output("opt44");
					output_19.value = "123.456";
					output_19.dataType = "number";
					output_19.format = "s#,##0.0";
					output_19.style.css({
						"background-color" : "white",
						"font-weight" : "normal",
						"text-align" : "left"
					});
					container.addChild(output_19, {
						"colIndex": 8,
						"rowIndex": 2
					});
					var output_20 = new cpr.controls.Output("opt5");
					output_20.value = "소수점2자리";
					output_20.style.css({
						"background-color" : "#d7e4f2",
						"text-align" : "center"
					});
					container.addChild(output_20, {
						"colIndex": 0,
						"rowIndex": 3
					});
					var output_21 = new cpr.controls.Output("opt41");
					output_21.value = "dataType";
					container.addChild(output_21, {
						"colIndex": 1,
						"rowIndex": 3
					});
					var inputBox_10 = new cpr.controls.InputBox("ipb4");
					inputBox_10.readOnly = true;
					inputBox_10.value = "number";
					container.addChild(inputBox_10, {
						"colIndex": 2,
						"rowIndex": 3
					});
					var output_22 = new cpr.controls.Output("opt37");
					output_22.value = "format";
					container.addChild(output_22, {
						"colIndex": 3,
						"rowIndex": 3
					});
					var inputBox_11 = new cpr.controls.InputBox("ipb8");
					inputBox_11.readOnly = true;
					inputBox_11.value = "s#,##0.00";
					container.addChild(inputBox_11, {
						"colIndex": 4,
						"rowIndex": 3
					});
					var output_23 = new cpr.controls.Output("opt11");
					output_23.value = "입력값";
					container.addChild(output_23, {
						"colIndex": 5,
						"rowIndex": 3
					});
					var inputBox_12 = new cpr.controls.InputBox("ipb12");
					inputBox_12.readOnly = true;
					inputBox_12.value = "123.456";
					container.addChild(inputBox_12, {
						"colIndex": 6,
						"rowIndex": 3
					});
					var output_24 = new cpr.controls.Output("opt35");
					output_24.value = "결과값";
					container.addChild(output_24, {
						"colIndex": 7,
						"rowIndex": 3
					});
					var output_25 = new cpr.controls.Output("opt45");
					output_25.value = "123.456";
					output_25.dataType = "number";
					output_25.format = "s#,##0.00";
					output_25.style.css({
						"background-color" : "white",
						"font-weight" : "normal",
						"text-align" : "left"
					});
					container.addChild(output_25, {
						"colIndex": 8,
						"rowIndex": 3
					});
				})(group_2);
				container.addChild(group_2, {
					"colIndex": 0,
					"rowIndex": 2
				});
				var userDefinedControl_3 = new udc.com.comFormTitle("comformtitle3");
				userDefinedControl_3.title = "아웃풋 날짜포맷";
				container.addChild(userDefinedControl_3, {
					"colIndex": 0,
					"rowIndex": 3
				});
				var group_3 = new cpr.controls.Container("grp3");
				group_3.style.setClasses(["form-box"]);
				// Layout
				var formLayout_3 = new cpr.controls.layouts.FormLayout();
				formLayout_3.topMargin = "5px";
				formLayout_3.rightMargin = "5px";
				formLayout_3.bottomMargin = "5px";
				formLayout_3.leftMargin = "5px";
				formLayout_3.setColumns(["180px", "100px", "1fr", "100px", "1fr", "100px", "1fr", "100px", "1fr"]);
				formLayout_3.setRows(["25px", "25px", "25px"]);
				group_3.setLayout(formLayout_3);
				(function(container){
					var output_26 = new cpr.controls.Output("opt12");
					output_26.value = "YYYY-MM-DD";
					output_26.style.css({
						"background-color" : "#d7e4f2",
						"text-align" : "center"
					});
					container.addChild(output_26, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var output_27 = new cpr.controls.Output("opt53");
					output_27.value = "dataType";
					container.addChild(output_27, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var inputBox_13 = new cpr.controls.InputBox("ipb17");
					inputBox_13.readOnly = true;
					inputBox_13.value = "date";
					container.addChild(inputBox_13, {
						"colIndex": 2,
						"rowIndex": 0
					});
					var output_28 = new cpr.controls.Output("opt54");
					output_28.value = "format";
					container.addChild(output_28, {
						"colIndex": 3,
						"rowIndex": 0
					});
					var inputBox_14 = new cpr.controls.InputBox("ipb20");
					inputBox_14.readOnly = true;
					inputBox_14.value = "YYYY-MM-DD";
					container.addChild(inputBox_14, {
						"colIndex": 4,
						"rowIndex": 0
					});
					var output_29 = new cpr.controls.Output("opt38");
					output_29.value = "입력값";
					container.addChild(output_29, {
						"colIndex": 5,
						"rowIndex": 0
					});
					var inputBox_15 = new cpr.controls.InputBox("ipb23");
					inputBox_15.readOnly = true;
					inputBox_15.value = "20200610";
					container.addChild(inputBox_15, {
						"colIndex": 6,
						"rowIndex": 0
					});
					var output_30 = new cpr.controls.Output("opt56");
					output_30.value = "결과값";
					container.addChild(output_30, {
						"colIndex": 7,
						"rowIndex": 0
					});
					var output_31 = new cpr.controls.Output("opt57");
					output_31.value = "20200610";
					output_31.dataType = "date";
					output_31.format = "YYYY-MM-DD";
					output_31.style.css({
						"background-color" : "white",
						"font-weight" : "normal",
						"text-align" : "left"
					});
					container.addChild(output_31, {
						"colIndex": 8,
						"rowIndex": 0
					});
					var output_32 = new cpr.controls.Output("opt16");
					output_32.value = "DD/MM/YYYY";
					output_32.style.css({
						"background-color" : "#d7e4f2",
						"text-align" : "center"
					});
					container.addChild(output_32, {
						"colIndex": 0,
						"rowIndex": 1
					});
					var output_33 = new cpr.controls.Output("opt61");
					output_33.value = "dataType";
					container.addChild(output_33, {
						"colIndex": 1,
						"rowIndex": 1
					});
					var inputBox_16 = new cpr.controls.InputBox("ipb18");
					inputBox_16.readOnly = true;
					inputBox_16.value = "date";
					container.addChild(inputBox_16, {
						"colIndex": 2,
						"rowIndex": 1
					});
					var output_34 = new cpr.controls.Output("opt64");
					output_34.value = "format";
					container.addChild(output_34, {
						"colIndex": 3,
						"rowIndex": 1
					});
					var inputBox_17 = new cpr.controls.InputBox("ipb21");
					inputBox_17.readOnly = true;
					inputBox_17.value = "DD/MM/YYYY";
					container.addChild(inputBox_17, {
						"colIndex": 4,
						"rowIndex": 1
					});
					var output_35 = new cpr.controls.Output("opt68");
					output_35.value = "입력값";
					container.addChild(output_35, {
						"colIndex": 5,
						"rowIndex": 1
					});
					var inputBox_18 = new cpr.controls.InputBox("ipb24");
					inputBox_18.readOnly = true;
					inputBox_18.value = "20200610";
					container.addChild(inputBox_18, {
						"colIndex": 6,
						"rowIndex": 1
					});
					var output_36 = new cpr.controls.Output("opt70");
					output_36.value = "결과값";
					container.addChild(output_36, {
						"colIndex": 7,
						"rowIndex": 1
					});
					var output_37 = new cpr.controls.Output("opt73");
					output_37.value = "20200610";
					output_37.dataType = "date";
					output_37.format = "DD/MM/YYYY";
					output_37.style.css({
						"background-color" : "white",
						"font-weight" : "normal",
						"text-align" : "left"
					});
					container.addChild(output_37, {
						"colIndex": 8,
						"rowIndex": 1
					});
					var output_38 = new cpr.controls.Output("opt21");
					output_38.value = "YY.MM.DD";
					output_38.style.css({
						"background-color" : "#d7e4f2",
						"text-align" : "center"
					});
					container.addChild(output_38, {
						"colIndex": 0,
						"rowIndex": 2
					});
					var output_39 = new cpr.controls.Output("opt62");
					output_39.value = "dataType";
					container.addChild(output_39, {
						"colIndex": 1,
						"rowIndex": 2
					});
					var inputBox_19 = new cpr.controls.InputBox("ipb19");
					inputBox_19.readOnly = true;
					inputBox_19.value = "date";
					container.addChild(inputBox_19, {
						"colIndex": 2,
						"rowIndex": 2
					});
					var output_40 = new cpr.controls.Output("opt65");
					output_40.value = "format";
					container.addChild(output_40, {
						"colIndex": 3,
						"rowIndex": 2
					});
					var inputBox_20 = new cpr.controls.InputBox("ipb22");
					inputBox_20.readOnly = true;
					inputBox_20.value = "YY.MM.DD";
					container.addChild(inputBox_20, {
						"colIndex": 4,
						"rowIndex": 2
					});
					var output_41 = new cpr.controls.Output("opt67");
					output_41.value = "입력값";
					container.addChild(output_41, {
						"colIndex": 5,
						"rowIndex": 2
					});
					var inputBox_21 = new cpr.controls.InputBox("ipb25");
					inputBox_21.readOnly = true;
					inputBox_21.value = "20200610";
					container.addChild(inputBox_21, {
						"colIndex": 6,
						"rowIndex": 2
					});
					var output_42 = new cpr.controls.Output("opt71");
					output_42.value = "결과값";
					container.addChild(output_42, {
						"colIndex": 7,
						"rowIndex": 2
					});
					var output_43 = new cpr.controls.Output("opt74");
					output_43.value = "20200610";
					output_43.dataType = "date";
					output_43.format = "YY.MM.DD";
					output_43.style.css({
						"background-color" : "white",
						"font-weight" : "normal",
						"text-align" : "left"
					});
					container.addChild(output_43, {
						"colIndex": 8,
						"rowIndex": 2
					});
				})(group_3);
				container.addChild(group_3, {
					"colIndex": 0,
					"rowIndex": 4
				});
				var userDefinedControl_4 = new udc.com.comFormTitle("comformtitle4");
				userDefinedControl_4.title = "마스크 에디터를 통한 포맷";
				container.addChild(userDefinedControl_4, {
					"colIndex": 0,
					"rowIndex": 5
				});
				var group_4 = new cpr.controls.Container("grp4");
				group_4.style.setClasses(["form-box"]);
				// Layout
				var formLayout_4 = new cpr.controls.layouts.FormLayout();
				formLayout_4.topMargin = "5px";
				formLayout_4.rightMargin = "5px";
				formLayout_4.bottomMargin = "5px";
				formLayout_4.leftMargin = "5px";
				formLayout_4.setColumns(["300px", "100px", "1fr", "100px", "1fr", "100px", "1fr"]);
				formLayout_4.setRows(["25px", "25px", "25px", "25px"]);
				group_4.setLayout(formLayout_4);
				(function(container){
					var output_44 = new cpr.controls.Output("opt48");
					output_44.value = "주민번호";
					output_44.style.css({
						"background-color" : "#d7e4f2",
						"text-align" : "center"
					});
					container.addChild(output_44, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var output_45 = new cpr.controls.Output("opt78");
					output_45.value = "mask";
					container.addChild(output_45, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var inputBox_22 = new cpr.controls.InputBox("ipb13");
					inputBox_22.readOnly = true;
					inputBox_22.value = "000000-0000000";
					container.addChild(inputBox_22, {
						"colIndex": 2,
						"rowIndex": 0
					});
					var output_46 = new cpr.controls.Output("opt63");
					output_46.value = "입력값";
					container.addChild(output_46, {
						"colIndex": 3,
						"rowIndex": 0
					});
					var inputBox_23 = new cpr.controls.InputBox("ipb26");
					inputBox_23.readOnly = true;
					inputBox_23.value = "7012011234567";
					container.addChild(inputBox_23, {
						"colIndex": 4,
						"rowIndex": 0
					});
					var output_47 = new cpr.controls.Output("opt81");
					output_47.value = "결과값";
					container.addChild(output_47, {
						"colIndex": 5,
						"rowIndex": 0
					});
					var maskEditor_1 = new cpr.controls.MaskEditor("mse1");
					maskEditor_1.value = "7012011234567";
					maskEditor_1.mask = "000000-0000000";
					maskEditor_1.style.css({
						"text-align" : "left"
					});
					container.addChild(maskEditor_1, {
						"colIndex": 6,
						"rowIndex": 0
					});
					var output_48 = new cpr.controls.Output("opt52");
					output_48.value = "문자+숫자";
					output_48.style.css({
						"background-color" : "#d7e4f2",
						"text-align" : "center"
					});
					container.addChild(output_48, {
						"colIndex": 0,
						"rowIndex": 1
					});
					var output_49 = new cpr.controls.Output("opt85");
					output_49.value = "mask";
					container.addChild(output_49, {
						"colIndex": 1,
						"rowIndex": 1
					});
					var inputBox_24 = new cpr.controls.InputBox("ipb14");
					inputBox_24.readOnly = true;
					inputBox_24.value = "F-00000";
					container.addChild(inputBox_24, {
						"colIndex": 2,
						"rowIndex": 1
					});
					var output_50 = new cpr.controls.Output("opt90");
					output_50.value = "입력값";
					container.addChild(output_50, {
						"colIndex": 3,
						"rowIndex": 1
					});
					var inputBox_25 = new cpr.controls.InputBox("ipb27");
					inputBox_25.readOnly = true;
					inputBox_25.value = "34567";
					container.addChild(inputBox_25, {
						"colIndex": 4,
						"rowIndex": 1
					});
					var output_51 = new cpr.controls.Output("opt91");
					output_51.value = "결과값";
					container.addChild(output_51, {
						"colIndex": 5,
						"rowIndex": 1
					});
					var maskEditor_2 = new cpr.controls.MaskEditor("mse2");
					maskEditor_2.value = "34567";
					maskEditor_2.mask = "F-00000";
					maskEditor_2.style.css({
						"text-align" : "left"
					});
					container.addChild(maskEditor_2, {
						"colIndex": 6,
						"rowIndex": 1
					});
					var output_52 = new cpr.controls.Output("opt60");
					output_52.value = "날짜";
					output_52.style.css({
						"background-color" : "#d7e4f2",
						"text-align" : "center"
					});
					container.addChild(output_52, {
						"colIndex": 0,
						"rowIndex": 2
					});
					var output_53 = new cpr.controls.Output("opt86");
					output_53.value = "mask";
					container.addChild(output_53, {
						"colIndex": 1,
						"rowIndex": 2
					});
					var inputBox_26 = new cpr.controls.InputBox("ipb15");
					inputBox_26.readOnly = true;
					inputBox_26.value = "0000/00/00";
					container.addChild(inputBox_26, {
						"colIndex": 2,
						"rowIndex": 2
					});
					var output_54 = new cpr.controls.Output("opt89");
					output_54.value = "입력값";
					container.addChild(output_54, {
						"colIndex": 3,
						"rowIndex": 2
					});
					var inputBox_27 = new cpr.controls.InputBox("ipb28");
					inputBox_27.readOnly = true;
					inputBox_27.value = "20200610";
					container.addChild(inputBox_27, {
						"colIndex": 4,
						"rowIndex": 2
					});
					var output_55 = new cpr.controls.Output("opt92");
					output_55.value = "결과값";
					container.addChild(output_55, {
						"colIndex": 5,
						"rowIndex": 2
					});
					var maskEditor_3 = new cpr.controls.MaskEditor("mse3");
					maskEditor_3.value = "20200610";
					maskEditor_3.mask = "0000/00/00";
					maskEditor_3.style.css({
						"text-align" : "left"
					});
					container.addChild(maskEditor_3, {
						"colIndex": 6,
						"rowIndex": 2
					});
					var output_56 = new cpr.controls.Output("opt69");
					output_56.value = "영문소문자+영문대문자+특수문자+숫자";
					output_56.style.css({
						"background-color" : "#d7e4f2",
						"text-align" : "center"
					});
					container.addChild(output_56, {
						"colIndex": 0,
						"rowIndex": 3
					});
					var output_57 = new cpr.controls.Output("opt72");
					output_57.value = "mask";
					container.addChild(output_57, {
						"colIndex": 1,
						"rowIndex": 3
					});
					var inputBox_28 = new cpr.controls.InputBox("ipb16");
					inputBox_28.readOnly = true;
					inputBox_28.value = "aaaaaa AA.00";
					container.addChild(inputBox_28, {
						"colIndex": 2,
						"rowIndex": 3
					});
					var output_58 = new cpr.controls.Output("opt79");
					output_58.value = "입력값";
					container.addChild(output_58, {
						"colIndex": 3,
						"rowIndex": 3
					});
					var inputBox_29 = new cpr.controls.InputBox("ipb29");
					inputBox_29.readOnly = true;
					inputBox_29.value = "hanwhaNO63";
					container.addChild(inputBox_29, {
						"colIndex": 4,
						"rowIndex": 3
					});
					var output_59 = new cpr.controls.Output("opt80");
					output_59.value = "결과값";
					container.addChild(output_59, {
						"colIndex": 5,
						"rowIndex": 3
					});
					var maskEditor_4 = new cpr.controls.MaskEditor("mse4");
					maskEditor_4.value = "hanwhaNO63";
					maskEditor_4.mask = "aaaaaa AA.00";
					maskEditor_4.style.css({
						"text-align" : "left"
					});
					container.addChild(maskEditor_4, {
						"colIndex": 6,
						"rowIndex": 3
					});
				})(group_4);
				container.addChild(group_4, {
					"colIndex": 0,
					"rowIndex": 6
				});
			})(group_1);
			container.addChild(group_1, {
				"width": "972px",
				"height": "645px"
			});
		}
	});
	app.title = "포맷 예제";
	cpr.core.Platform.INSTANCE.register(app);
})();