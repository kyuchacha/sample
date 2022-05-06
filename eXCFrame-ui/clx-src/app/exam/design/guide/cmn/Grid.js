/************************************************
 * Grid.js
 * Created at 2020. 5. 11. 오후 3:54:05.
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
 ************************************************/



/*
 * Body에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(/* cpr.events.CEvent */ e){
	app.lookup("grd2").setRowState(1, cpr.data.tabledata.RowState.INSERTED);
	app.lookup("grd2").setRowState(2, cpr.data.tabledata.RowState.UPDATED);
	app.lookup("grd2").setRowState(3, cpr.data.tabledata.RowState.DELETED);
	app.lookup("grd2").selectRows(4);
}