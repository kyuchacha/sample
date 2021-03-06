/*
 * App URI: app/exam/controls/embedded/embeddedApp_sample01
 * Source Location: app/exam/controls/embedded/embeddedApp_sample01.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/controls/embedded/embeddedApp_sample01", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * embeddedApp_sample01.js
			 * Created at 2022. 3. 07. 오후 4:21:20.
			 *
			 * @author "1amthomas"
			 ************************************************/
			/*
			 * "Button" 버튼(btn1)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn1Click(e){
				var btn1 = e.control;
				alert("버튼 활성화");
			};
			// End - User Script
			
			// Header
			
			app.supportMedia("all and (min-width: 1200px)", "default");
			app.supportMedia("all and (min-width: 850px) and (max-width: 1199px)", "tablet");
			app.supportMedia("all and (max-width: 849px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"background-image" : "none",
				"background-color" : "white",
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_1.distribution = "center";
			verticalLayout_1.spacing = 10;
			verticalLayout_1.leftMargin = 100;
			verticalLayout_1.rightMargin = 100;
			verticalLayout_1.topMargin = 100;
			verticalLayout_1.bottomMargin = 100;
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var output_1 = new cpr.controls.Output();
			output_1.value = "임베디드 앱 화면";
			output_1.style.css({
				"font-size" : "30px",
				"text-align" : "center"
			});
			container.addChild(output_1, {
				"width": "200px",
				"height": "90px"
			});
			
			var button_1 = new cpr.controls.Button("btn1");
			button_1.value = "Button";
			if(typeof onBtn1Click == "function") {
				button_1.addEventListener("click", onBtn1Click);
			}
			container.addChild(button_1, {
				"width": "100px",
				"height": "20px"
			});
			
			var inputBox_1 = new cpr.controls.InputBox("ipb1");
			container.addChild(inputBox_1, {
				"width": "100px",
				"height": "20px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "embeddedApp_sample01";
	cpr.core.Platform.INSTANCE.register(app);
})();
