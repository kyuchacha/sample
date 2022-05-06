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
	var deviceData = cordova.getDeviceData();
	
	var optModel = app.lookup("optModel");
	var optPlatform = app.lookup("optPlatform");
	var optUuid = app.lookup("optUuid");
	var optVersion = app.lookup("optVersion");
	var optManufacturer = app.lookup("optManufacturer");
	var optIsVirtual = app.lookup("optIsVirtual");
	var optSerial = app.lookup("optSerial");
	
	optModel.value = deviceData.model;
	optPlatform.value = deviceData.platform;
	optUuid.value = deviceData.uuid;
	optVersion.value = deviceData.version;
	optManufacturer.value = deviceData.manufacturer;
	optIsVirtual.value = deviceData.isVirtual;
	optSerial.value = deviceData.serial;
	
	app.getContainer().redraw();
}
