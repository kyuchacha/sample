/*
 * App URI: app/com/error/Error404
 * Source Location: app/com/error/Error404.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/com/error/Error404", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * Error404.js
			 * Created at 2020. 12. 22. 오후 2:40:02.
			 *
			 * @author ryu
			 ************************************************/;
			// End - User Script
			
			// Header
			
			app.supportMedia("all and (min-width: 1200px)", "default");
			app.supportMedia("all and (min-width: 850px) and (max-width: 1199px)", "tablet");
			app.supportMedia("all and (max-width: 849px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.setClasses(["bg-gray-200"]);
			container.style.css({
				"width" : "100%",
				"top" : "0px",
				"height" : "100%",
				"left" : "0px"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var image_1 = new cpr.controls.Image("img1");
			image_1.src = "theme/common/images/com/error/error-404-landing-page-flat-style.png";
			(function(image_1){
			})(image_1);
			container.addChild(image_1, {
				"width": "1073px",
				"height": "713px",
				"left": "calc(50% - 536px)",
				"top": "calc(50% - 356px)"
			});
			
			var hTMLSnippet_1 = new cpr.controls.HTMLSnippet("hsp1");
			hTMLSnippet_1.value = "<a href='https://www.freepik.com/vectors/business'>Business vector created by pikisuperstar - www.freepik.com<\/a>";
			container.addChild(hTMLSnippet_1, {
				"bottom": "10px",
				"width": "400px",
				"height": "20px",
				"left": "calc(50% - 200px)"
			});
		}
	});
	app.title = "Error404";
	app.setPreferredSize(-1, 0);
	cpr.core.Platform.INSTANCE.register(app);
})();
