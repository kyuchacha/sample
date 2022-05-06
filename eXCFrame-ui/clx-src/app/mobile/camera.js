/************************************************
 * camera.js
 * Created at 2021. 4. 19. 오전 11:58:44.
 *
 * @author 김민규
 ************************************************/

var cordova = cpr.core.Module.require("module/cordova");

/*
 * "사진 촬영" 버튼(btn1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn1Click(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var btn1 = e.control;
	cordova.takePicture().then(function(input){
		changeImage(input);
	});;
}


/*
 * "사진 선택" 버튼(btn2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn2Click(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var btn2 = e.control;
	cordova.selectPicture().then(function(input){
		changeImage(input);
	});;
}

function changeImage(url){
	var grp1 = app.lookup("grp1");
	grp1.style.css({
		"background-image": "url(" + encodeURI(url) + ")",
		"background-size" : "contain"
	});
}