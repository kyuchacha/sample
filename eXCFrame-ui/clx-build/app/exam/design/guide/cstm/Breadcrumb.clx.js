/*
 * App URI: app/exam/design/guide/cstm/Breadcrumb
 * Source Location: app/exam/design/guide/cstm/Breadcrumb.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/design/guide/cstm/Breadcrumb", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * Breadcrumb.js
			 * Created at 2020. 5. 11. 오전 10:27:06.
			 *
			 * @author ryu
			 ************************************************/
			 
			 /************************************************
			 * 공통 모듈 선언
			 ************************************************/
			 
			 /************************************************
			 * 전역 변수 선언
			 ************************************************/
			 
			 /************************************************
			 * 사용자 정의 함수
			 ************************************************/
			  
			  
			 /************************************************
			 * 컨트롤 이벤트
			 ************************************************/;
			// End - User Script
			
			// Header
			
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 850px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 849px)", "mobile");
			
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
			verticalLayout_1.spacing = 20;
			verticalLayout_1.leftMargin = 20;
			verticalLayout_1.rightMargin = 20;
			verticalLayout_1.topMargin = 20;
			verticalLayout_1.bottomMargin = 20;
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			// Layout
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.setColumns(["1fr", "30px"]);
			formLayout_1.setColumnAutoSizing(1, true);
			formLayout_1.setRows(["1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "BREADCRUMBS";
				output_1.style.setClasses(["h3"]);
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var userDefinedControl_1 = new udc.template.Breadcrumb("breadcrumb1");
				userDefinedControl_1.values = "DESIGN GUIDE,BREADCRUMBS";
				container.addChild(userDefinedControl_1, {
					"colIndex": 1,
					"rowIndex": 0
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "none",
				"width": "984px",
				"height": "26px"
			});
			
			var output_2 = new cpr.controls.Output();
			output_2.value = "Default Style";
			output_2.style.setClasses(["h6"]);
			container.addChild(output_2, {
				"autoSize": "none",
				"width": "984px",
				"height": "25px"
			});
			
			var group_2 = new cpr.controls.Container();
			group_2.style.setClasses(["card", "card-bordered"]);
			// Layout
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.spacing = 5;
			verticalLayout_2.leftMargin = 20;
			verticalLayout_2.rightMargin = 20;
			verticalLayout_2.topMargin = 20;
			verticalLayout_2.bottomMargin = 20;
			group_2.setLayout(verticalLayout_2);
			(function(container){
				var userDefinedControl_2 = new udc.template.Breadcrumb("breadcrumb2");
				userDefinedControl_2.align = "left";
				userDefinedControl_2.values = "HOME";
				container.addChild(userDefinedControl_2, {
					"width": "300px",
					"height": "26px"
				});
				var userDefinedControl_3 = new udc.template.Breadcrumb("breadcrumb3");
				userDefinedControl_3.align = "left";
				userDefinedControl_3.values = "HOME,LIBRARY";
				container.addChild(userDefinedControl_3, {
					"width": "300px",
					"height": "26px"
				});
				var userDefinedControl_4 = new udc.template.Breadcrumb("breadcrumb4");
				userDefinedControl_4.align = "left";
				userDefinedControl_4.values = "HOME,LIBRARY,DATA";
				container.addChild(userDefinedControl_4, {
					"width": "300px",
					"height": "26px"
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "height",
				"width": "984px",
				"height": "129px"
			});
			
			var output_3 = new cpr.controls.Output();
			output_3.value = "Arrow Style";
			output_3.style.setClasses(["h6"]);
			container.addChild(output_3, {
				"autoSize": "none",
				"width": "984px",
				"height": "25px"
			});
			
			var group_3 = new cpr.controls.Container();
			group_3.style.setClasses(["card", "card-bordered"]);
			// Layout
			var verticalLayout_3 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_3.spacing = 5;
			verticalLayout_3.leftMargin = 20;
			verticalLayout_3.rightMargin = 20;
			verticalLayout_3.topMargin = 20;
			verticalLayout_3.bottomMargin = 20;
			group_3.setLayout(verticalLayout_3);
			(function(container){
				var userDefinedControl_5 = new udc.template.Breadcrumb("breadcrumb5");
				userDefinedControl_5.align = "left";
				userDefinedControl_5.values = "HOME";
				userDefinedControl_5.class = "arrow";
				container.addChild(userDefinedControl_5, {
					"width": "300px",
					"height": "26px"
				});
				var userDefinedControl_6 = new udc.template.Breadcrumb("breadcrumb6");
				userDefinedControl_6.align = "left";
				userDefinedControl_6.values = "HOME,LIBRARY";
				userDefinedControl_6.class = "arrow";
				container.addChild(userDefinedControl_6, {
					"width": "300px",
					"height": "26px"
				});
				var userDefinedControl_7 = new udc.template.Breadcrumb("breadcrumb7");
				userDefinedControl_7.align = "left";
				userDefinedControl_7.values = "HOME,LIBRARY,DATA";
				userDefinedControl_7.class = "arrow";
				container.addChild(userDefinedControl_7, {
					"width": "300px",
					"height": "26px"
				});
			})(group_3);
			container.addChild(group_3, {
				"autoSize": "height",
				"width": "984px",
				"height": "129px"
			});
			
			var output_4 = new cpr.controls.Output();
			output_4.value = "Bar Style";
			output_4.style.setClasses(["h6"]);
			container.addChild(output_4, {
				"autoSize": "none",
				"width": "984px",
				"height": "25px"
			});
			
			var group_4 = new cpr.controls.Container();
			group_4.style.setClasses(["card", "card-bordered"]);
			// Layout
			var verticalLayout_4 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_4.spacing = 5;
			verticalLayout_4.leftMargin = 20;
			verticalLayout_4.rightMargin = 20;
			verticalLayout_4.topMargin = 20;
			verticalLayout_4.bottomMargin = 20;
			group_4.setLayout(verticalLayout_4);
			(function(container){
				var userDefinedControl_8 = new udc.template.Breadcrumb("breadcrumb8");
				userDefinedControl_8.align = "left";
				userDefinedControl_8.values = "HOME";
				userDefinedControl_8.class = "bar";
				container.addChild(userDefinedControl_8, {
					"width": "300px",
					"height": "26px"
				});
				var userDefinedControl_9 = new udc.template.Breadcrumb("breadcrumb9");
				userDefinedControl_9.align = "left";
				userDefinedControl_9.values = "HOME,LIBRARY";
				userDefinedControl_9.class = "bar";
				container.addChild(userDefinedControl_9, {
					"width": "300px",
					"height": "26px"
				});
				var userDefinedControl_10 = new udc.template.Breadcrumb("breadcrumb10");
				userDefinedControl_10.align = "left";
				userDefinedControl_10.values = "HOME,LIBRARY,DATA";
				userDefinedControl_10.class = "bar";
				container.addChild(userDefinedControl_10, {
					"width": "300px",
					"height": "26px"
				});
			})(group_4);
			container.addChild(group_4, {
				"autoSize": "height",
				"width": "984px",
				"height": "129px"
			});
			
			var output_5 = new cpr.controls.Output();
			output_5.value = "Right Align";
			output_5.style.setClasses(["h6"]);
			container.addChild(output_5, {
				"autoSize": "none",
				"width": "984px",
				"height": "25px"
			});
			
			var group_5 = new cpr.controls.Container();
			group_5.style.setClasses(["card", "card-bordered"]);
			// Layout
			var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_5.spacing = 5;
			verticalLayout_5.leftMargin = 20;
			verticalLayout_5.rightMargin = 20;
			verticalLayout_5.topMargin = 20;
			verticalLayout_5.bottomMargin = 20;
			group_5.setLayout(verticalLayout_5);
			(function(container){
				var userDefinedControl_11 = new udc.template.Breadcrumb("breadcrumb11");
				userDefinedControl_11.align = "right";
				userDefinedControl_11.values = "HOME";
				userDefinedControl_11.class = "bar";
				container.addChild(userDefinedControl_11, {
					"width": "300px",
					"height": "26px"
				});
				var userDefinedControl_12 = new udc.template.Breadcrumb("breadcrumb12");
				userDefinedControl_12.align = "right";
				userDefinedControl_12.values = "HOME,LIBRARY";
				userDefinedControl_12.class = "bar";
				container.addChild(userDefinedControl_12, {
					"width": "300px",
					"height": "26px"
				});
				var userDefinedControl_13 = new udc.template.Breadcrumb("breadcrumb13");
				userDefinedControl_13.align = "right";
				userDefinedControl_13.values = "HOME,LIBRARY,DATA";
				userDefinedControl_13.class = "bar";
				container.addChild(userDefinedControl_13, {
					"width": "300px",
					"height": "26px"
				});
			})(group_5);
			container.addChild(group_5, {
				"autoSize": "height",
				"width": "984px",
				"height": "129px"
			});
		}
	});
	app.title = "Breadcrumb";
	cpr.core.Platform.INSTANCE.register(app);
})();
