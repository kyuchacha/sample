/************************************************
 * GridSampleEtc01.js
 * Created at 2020. 6. 2. 오후 1:50:39.
 *
 * @author 1073727
 ************************************************/

var util = createCommonUtil();

/*
 * Body에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit( /* cpr.events.CEvent */ e) {
	util.Grid.init(app, "grdList");
	util.FreeForm.init(app, ["grpFormCont"]);
}

