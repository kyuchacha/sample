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