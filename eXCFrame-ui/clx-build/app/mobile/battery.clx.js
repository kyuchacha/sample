/*
 * App URI: app/mobile/battery
 * Source Location: app/mobile/battery.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/mobile/battery", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * camera.js
			 * Created at 2021. 4. 19. 오전 11:58:44.
			 *
			 * @author 김민규
			 ************************************************/
			
			var cordova = cpr.core.Module.require("module/cordova");
			
			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(/* cpr.events.CEvent */ e){
				var pgr1 = app.lookup("pgr1");
				if( typeof navigator.getBattery!='undefined' ){
				    navigator.getBattery().then(function(battery) {
			//	        console.log('Battery Level: '+battery.level);
						pgr1.value = battery.level * 100;
				    });
				}
				else{
				     console.log('Plugin missing');
				}
				window.addEventListener("batterystatus", onBatteryStatus, false);
			}
			
			function onBatteryStatus(status) {
				var pgr1 = app.lookup("pgr1");
				console.log('Battery Level: '+battery.level);
				pgr1.value = status.level * 100;
			}
			// End - User Script
			
			// Header
			
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
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "0px";
			formLayout_1.verticalSpacing = "0px";
			formLayout_1.setColumns(["1fr"]);
			formLayout_1.setRows(["50px", "1fr", "1fr", "1fr", "1fr"]);
			container.setLayout(formLayout_1);
			
			// UI Configuration
			var output_1 = new cpr.controls.Output();
			output_1.value = "배터리 정보";
			output_1.style.css({
				"text-align" : "center"
			});
			container.addChild(output_1, {
				"colIndex": 0,
				"rowIndex": 0
			});
			
			var progress_1 = new cpr.controls.Progress("pgr1");
			progress_1.value = "50";
			progress_1.showText = true;
			container.addChild(progress_1, {
				"colIndex": 0,
				"rowIndex": 2
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "battery";
	cpr.core.Platform.INSTANCE.register(app);
})();