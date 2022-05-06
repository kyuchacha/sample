/************************************************
 * FormSampleEtc01.js
 * Created at 2022. 3. 10. 오후 1:00:27.
 *
 * @author jiyeon
 ************************************************/

var util = createCommonUtil();

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e){
	//그리드 초기화
	util.Grid.init(app, ["grdList"]);
	
	//폼 초기화
	util.FreeForm.init(app, ["grpFormFunc", "grpFreeForm"]);
}

/*
 * "초기화" 버튼(btnFormClear)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnFormClearClick2(e){
	var btnFormClear = e.control;
	
	util.Group.clear(app, "grpFreeForm");
}
