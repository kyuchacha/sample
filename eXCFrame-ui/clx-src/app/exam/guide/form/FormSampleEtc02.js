/************************************************
 * FormSampleEtc01.js
 * Created at 2020. 5. 29. 오후 5:43:51.
 *
 * @author 1073903
 ************************************************/

var util = createCommonUtil();

/*
 * "초기화" 버튼(btn1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn1Click( /* cpr.events.CMouseEvent */ e) {
	/** 
	 * @type cpr.controls.Button
	 */
	var btn1 = e.control;

	util.FreeForm.init(app, "grpFreeForm");
}

/*
 * "필수값체크" 버튼(btn2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn2Click( /* cpr.events.CMouseEvent */ e) {
	/** 
	 * @type cpr.controls.Button
	 */
	var btn2 = e.control;
	
	// 폼레이아웃에 필수 입력값에 포커스 지정
	app.lookup("grpFreeForm").getChildren().forEach(function(each){
		if (each.value != "") each.style.removeClass("cl-focus");
		if (each.userAttr("required") == "Y" && each.value == "") {
			each.style.addClass("cl-focus");
		} 
	});
}

/*
 * Body에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit( /* cpr.events.CEvent */ e) {
	//그리드 초기화
	util.Grid.init(app, ["grd1"]);
	
	//폼 초기화
	util.FreeForm.init(app, ["grpFormFunc", "grpFormCont", "grpFreeForm"]);
}