/*
 * App URI: app/cmn/confirm
 * Source Location: app/cmn/confirm.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/cmn/confirm", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * confirm.js
			 * Created at 2021. 10. 20 오후 2:14:44.
			 *
			 * @author hp
			 ************************************************/
			
			
			
			/*
			 * "확인" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(/* cpr.events.CMouseEvent */ e){
			
				/**
				 * @type cpr.controls.Dialog
				 */
				var dialog = app.getHost()
				dialog.close({closeState : "confirm"})
			}
			
			
			/*
			 * "취소" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(/* cpr.events.CMouseEvent */ e){
				/**
				 * @type cpr.controls.Dialog
				 */
				var dialog = app.getHost()
				dialog.close({closeState : "cancel"})
			}
			
			
			
			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(/* cpr.events.CEvent */ e){
				if(app.getHost().initValue){
					app.lookup("optMsg").value = app.getHost().initValue;
				}
			};
			// End - User Script
			
			// Header
			
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
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
			var group_1 = new cpr.controls.Container();
			// Layout
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "5px";
			formLayout_1.rightMargin = "5px";
			formLayout_1.bottomMargin = "5px";
			formLayout_1.leftMargin = "5px";
			formLayout_1.horizontalSpacing = "10px";
			formLayout_1.verticalSpacing = "10px";
			formLayout_1.setColumns(["1fr"]);
			formLayout_1.setRows(["1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output("optMsg");
				output_1.value = "변경된 데이터가 존재합니다. \r\n계속하시겠습니까?";
				output_1.style.setClasses(["text-center"]);
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
			})(group_1);
			container.addChild(group_1, {
				"width": "400px",
				"height": "205px"
			});
			
			var group_2 = new cpr.controls.Container();
			// Layout
			var formLayout_2 = new cpr.controls.layouts.FormLayout();
			formLayout_2.scrollable = false;
			formLayout_2.topMargin = "5px";
			formLayout_2.rightMargin = "5px";
			formLayout_2.bottomMargin = "5px";
			formLayout_2.leftMargin = "5px";
			formLayout_2.horizontalSpacing = "10px";
			formLayout_2.verticalSpacing = "10px";
			formLayout_2.setColumns(["1fr", "70px", "70px", "1fr"]);
			formLayout_2.setRows(["1fr"]);
			group_2.setLayout(formLayout_2);
			(function(container){
				var button_1 = new cpr.controls.Button();
				button_1.value = "확인";
				button_1.style.setClasses(["btn-danger"]);
				if(typeof onButtonClick == "function") {
					button_1.addEventListener("click", onButtonClick);
				}
				container.addChild(button_1, {
					"colIndex": 2,
					"rowIndex": 0
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "취소";
				button_2.style.setClasses(["btn-dark"]);
				if(typeof onButtonClick2 == "function") {
					button_2.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_2, {
					"colIndex": 1,
					"rowIndex": 0
				});
			})(group_2);
			container.addChild(group_2, {
				"width": "400px",
				"height": "35px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "confirm";
	cpr.core.Platform.INSTANCE.register(app);
})();
