/************************************************
 * mobile.module.js
 * Created at 2021. 4. 15. 오후 12:59:01.
 *
 * @author 김민규
 ************************************************/

/**
 * 전역변수
 */
var media = null;
var recInterval = null;

cpr.core.App.addHook({
	onCreate: function(app, exports) {
		app.getContainer().style.css({
			"position": "absolute",
			"left": "0px",
			"top": "0px"
		});
	}
});

/**
 * 실제 모바일 기기에서 실행중인지 여부를 반환합니다.
 */
var runningOnDevice = function(){
	return typeof window["cordova"] != "undefined";
};

if(!runningOnDevice()){
	cpr.core.App.addHook({
		onCreate: function(app, exports) {
			app.getContainer().style.css({
				"position": "absolute",
				"left": "0px",
				"top": "0px"
			});
		}
	});
}

/**
 * @param {cpr.core.AppInstance} current
 * @param {#app} appId
 * @param {"top" | "right" | "bottom" | "left" } direction?
 * @return {Promise<cpr.core.AppInstance>}
 */
globals.pushNewApp = function(app, appId, direction) {
	direction = direction || "right";

	var appearingTransform;
	var disappearingTransform;

	switch (direction) {
		case "right":
			appearingTransform = "translate3d(100%, 0px, 0px)";
			disappearingTransform = "translate3d(-100%, 0px, 0px)"
			break;

		case "left":
			appearingTransform = "translate3d(-100%, 0px, 0px)";
			disappearingTransform = "translate3d(100%, 0px, 0px)"
			break;

		case "bottom":
			appearingTransform = "translate3d(0px, 100%, 0px)";
			disappearingTransform = "translate3d(0px, -100%, 0px)"
			break;

		case "top":
			appearingTransform = "translate3d(0px, -100%, 0px)";
			disappearingTransform = "translate3d(0px, 100%, 0px)"
			break;
	}

	return new Promise(function(resolve, reject) {
		cpr.core.App.load(appId, function(loadedApp) {
			if (!loadedApp) {
				return reject("앱을 로드하지 못했습니다: " + appId);
			}

			var newAppInstance = loadedApp.createNewInstance();
			newAppInstance.run(null, function() {
				resolve(newAppInstance);
				newAppInstance.getContainer().style.animateFrom({
					"transform": appearingTransform
				});
				app.getContainer().addEventListenerOnce("transitionend", function() {
					app.dispose();
				});
				app.getContainer().style.animateTo({
					"transform": disappearingTransform
				});
			});
		});
	});
}

/**
 * 사진을 촬영 합니다. 사진파일의 URI를 전달하는 프로미스 객체가 리턴됩니다.
 * @return {Promise<String, any>}
 */
exports.takePicture = function() {
	return new Promise(function(resolve, reject) {
		if (runningOnDevice()) {
			takePhotoFromCordova("camera", resolve, reject);
		} else {
			takePhotoFromBrowser(resolve, reject);
		}
	});
};

/**
 * 사진을 사진첩에서 선택합니다. 사진파일의 URI를 전달하는 프로미스 객체가 리턴됩니다.
 * @return {Promise<String, any>}
 */
exports.selectPicture = function() {
	return new Promise(function(resolve, reject) {
		if (runningOnDevice()) {
			takePhotoFromCordova("photoLibrary", resolve, reject);
		} else {
			takePhotoFromBrowser(resolve, reject);
		}
	});
};

/**
 * 브라우저를 통해 사진파일 선택
 * @param {(String)=>void} onSuccess
 * @param {(any)=>void} onError
 */
function takePhotoFromBrowser(onSuccess, onError) {
	// 파일 선택을 위해 인풋 엘리먼트 만듬.
	var input = document.createElement("input");
	input.type = "file";
	input.style.display = "none";
	document.body.appendChild(input);

	// 사용자가 파일을 선택한 경우에 대한 리스너.
	input.addEventListener("change", function(e) {
		var selectedFile = input.files[0];

		// 파일이 선택된 경우.
		if (selectedFile) {
			// 선택된 파일을 dataURL 형식으로 읽어 들임.
			var fileReader = new FileReader();
			fileReader.addEventListener("load", function() {
				var dataURL = fileReader.result;
				onSuccess(dataURL);
			});
			fileReader.readAsDataURL(selectedFile);
		}
		document.body.removeChild(input);
	});
	input.click();
}

/**
 * 
 * @param {(string)=>void} onSuccess
 * @param {(any)=>void} onError
 */
function takePhotoFromCordova(source, onSuccess, onError) {
	if (!navigator.camera) {
		return onError("카메라 플러그인을 찾을 수 없습니다.");
	}
	var sourceTarget = null;
	if(source == "camera"){
		sourceTarget = Camera.PictureSourceType.CAMERA
	}else if(source == "photoLibrary"){
		sourceTarget = Camera.PictureSourceType.PHOTOLIBRARY
	}
	navigator.camera.getPicture(onSuccess, onError, {
		targetWidth: 1024,
		targetHeight: 1024,
		qualitiy: 50,
		destinationType: Camera.DestinationType.FILE_URI,
		sourceType: sourceTarget,
		encodingType: Camera.EncodingType.JPEG,
		correctOrientation: true
	});
}

exports.startRecord = function(onSuccess, onError){
	return new Promise(function(resolve, reject) {
		if (runningOnDevice()) {
			recordAudio(resolve, reject);
		} else {
			return;
		}
	});
}

exports.pauseRecord = function(onSuccess, onError){
	return new Promise(function(resolve, reject) {
		if (runningOnDevice()) {
			pauseRecord();
		} else {
			return;
		}
	});
}

exports.playMedia = function(src, onSuccess, onError){
	return new Promise(function(resolve, reject) {
		if (runningOnDevice()) {
			startMedia(src);
		} else {
			return;
		}
	});
}

exports.stopMedia = function(onSuccess, onError){
	return new Promise(function(resolve, reject) {
		if (runningOnDevice()) {
			stopMedia();
		} else {
			return;
		}
	});
}


exports.resumeRecord = function(){
	return new Promise(function(resolve, reject) {
		if (runningOnDevice()) {
			resumeRecord(resolve, reject);
		} else {
			return;
		}
	});
}

exports.stopRecord = function(){
	return new Promise(function(resolve, reject) {
		if (runningOnDevice()) {
			stopRecord(resolve, reject);
		} else {
			return;
		}
	});
}

var mediaRec = null;

function recordAudio(onSuccess, onError) {
	
	if (!Media) {
		return onError("미디어 플러그인을 찾을 수 없습니다.");
	}
	
    var src = "myrecording.mp3";
    mediaRec = new Media(src, onSuccess, onError);

    // Record audio
    mediaRec.startRecord();

    // Stop recording after 10 sec
    var recTime = 0;
    
   	if(recInterval != null){
   		return ;
   	}
    
    recInterval = setInterval(function() {
        recTime = recTime + 1;
//        setAudioPosition(recTime + " sec");
        if (recTime >= 10) {
            clearInterval(recInterval);
            recInterval = null;
            mediaRec.stopRecord();
        }
    }, 1000);
}

function pauseRecord(onSuccess, onError){
	
	if (!Media) {
		return onError("미디어 플러그인을 찾을 수 없습니다.");
	}
	
	mediaRec.pauseRecord();
}

function resumeRecord(onSuccess, onError){
	
	if (!Media) {
		return onError("미디어 플러그인을 찾을 수 없습니다.");
	}
	
	mediaRec.resumeRecord();
}

function stopRecord(onSuccess, onError){
	
	if (!Media) {
		return onError("미디어 플러그인을 찾을 수 없습니다.");
	}
	
	recInterval = null;
	mediaRec.stopRecord();
	
}

function startMedia(src, onSuccess, onError){
	
	if (!Media) {
		return onError("미디어 플러그인을 찾을 수 없습니다.");
	}
	
	media = new Media(src,
	    onSuccess,
	    onError
	);
	media.play();
}

function stopMedia(onSuccess, onError){
	
	if (!Media) {
		return onError("미디어 플러그인을 찾을 수 없습니다.");
	}
	
	media.stop();
}


/**
 * 디바이스 정보를 불러옵니다.
 * @return {Promise<String, any>}
 */
exports.getDeviceData = function(onSuccess, onError) {
	return getDeviceData(onSuccess, onError);
};

function getDeviceData(onSuccess, onError){
	
	if (!device) {
		return onError("디바이스 플러그인을 찾을 수 없습니다.");
	}
	
	var deviceData = {
		cordova : device.cordova,
		model : device.model,
		platform : device.platform,
		uuid : device.uuid,
		version : device.version,
		manufacturer : device.manufacturer,
		isVirtual : device.isVirtual,
		serial : device.serial
	};
	
	return deviceData;
}

/**
 * 진동을 활성화 시킵니다
 * @return {Promise<String, any>}
 */
exports.runVibration = function(time, onSuccess, onError) {
	runVibration(time, onSuccess, onError);
};

function runVibration(time, onSuccess, onError){
	
	if (!navigator.vibrate) {
		return onError("vibrate 플러그인을 찾을 수 없습니다.");
	}
	
	navigator.vibrate(time);
}
