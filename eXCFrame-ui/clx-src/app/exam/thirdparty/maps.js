/************************************************
 * maps.js
 * Created at 2022. 2. 21. 오후 2:01:41.
 *
 * @author jiyeon
 ************************************************/

//== 카카오 지도 ==//

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e){
	app.lookup("btnSearchAddr").style.css({
		"z-index": 10,
	});
}

/*
 * "주소 검색 팝업" 버튼(btnSearchAddr)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnSearchAddrClick2(e){
	var btnSearchAddr = e.control;
	var vcKakaoAPI = app.lookup("embKakao");
	
	if(vcKakaoAPI.hasPageMethod("openPostCode")) {
		vcKakaoAPI.callPageMethod("openPostCode")
	}
}



//== 네이버 지도 ==//

/*
 * 쉘에서 init 이벤트 발생 시 호출.
 */
function onShlNaverInit(e){
	var shlNaver = e.control;
	
	var voContent = e.content;
	
	if(voContent){
		e.preventDefault();
	}
}

/*
 * 쉘에서 load 이벤트 발생 시 호출.
 */
function onShlNaverLoad(e){
	cpr.core.ResourceLoader.loadScript("http://code.jquery.com/jquery-3.3.1.js")
		.then(function(input) {
			//ncpClientId 파라미터는 발급받은 클라이언트 ID로 변경 후 사용
			//현재 소스코드에서 사용되고 있는 clinet key에는 http://211.109.22.33, localhost:8080, 127.1.1.0:52194 세 개의 도메인이 등록되어 있음
			cpr.core.ResourceLoader.loadScript("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=2yu9yglnhu&submodules=geocoder")
				.then(function(input) {
					mapSetting();
				});
		});
	
	
	var shl1 = e.control;
	var content = e.content
	
	//지도를 넣을 div 생성
	var mapDiv = document.createElement("div");
	mapDiv.id = "map";
	mapDiv.style.width = "100%";
	mapDiv.style.height = "100%";
	
	//검색을 위한 div 생성
	var searchDiv = document.createElement("div");
	searchDiv.className = "search";
	
	//검색을 입력하는 input 생성
	var address = document.createElement("input");
	address.id = "address"
	address.type = "text";
	address.placehoder = "검색할 주소";
	address.value = "장뻘빌딩";
	
	//검색을 submit 하는 input 생성
	var submit = document.createElement("input");
	submit.id = "submit";
	submit.type = "button";
	submit.value = "주소 검색";
	
	//각각 순서에 맞게 appendChild 해주고 ,마지막으로 쉘의 영역에 추가해 준다.
	mapDiv.appendChild(searchDiv);
	searchDiv.appendChild(address);
	searchDiv.appendChild(submit);
	content.appendChild(mapDiv);
	
	navigator.geolocation.getCurrentPosition(function(pos) {
		lat = pos.coords.latitute;
		lng = pos.coords.longitude;
	});
	
	//현재위치를 받아 오는것에 무관하게 geocode가 검색 되면서, infowindow가 열리면서 센터값이 잡힘
	function mapSetting() {
		var map = new naver.maps.Map("map", {
			center: new naver.maps.LatLng(37.3595316, 127.1052133),
			zoom: 15,
			zoomControl: true,
			zoomControlOptions: {
				position: naver.maps.Position.TOP_RIGHT,
				style: naver.maps.ZoomControlStyle.SMALL
			},
			mapTypeControl: true
		});
		var menuLayer = $('<div style="position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;"></div>');
		map.getPanes().floatPane.appendChild(menuLayer[0]);
		
		naver.maps.Event.addListener(map, 'rightclick', function(e) {
			infoWindow.close();
			var coordHtml =
						'<h2>* lat : 위도, lng: 경도</h2>' +
						'현재좌표는 : ' + e.coord.toString();
			
			menuLayer.show().css({
				left: e.offset.x,
				top: e.offset.y
			}).html(coordHtml);
			
		});
		var infoWindow = new naver.maps.InfoWindow({
			anchorSkew: true
		});
		
		map.setCursor('pointer');
		
		function searchCoordinateToAddress(latlng) {
			menuLayer.hide();
			infoWindow.close();
			
			naver.maps.Service.reverseGeocode({
				coords: latlng,
				orders: [
					naver.maps.Service.OrderType.ADDR,
					naver.maps.Service.OrderType.ROAD_ADDR
				].join(',')
			}, function(status, response) {
				if (status === naver.maps.Service.Status.ERROR) {
					if (!latlng) {
						return alert('ReverseGeocode Error, Please check latlng');
					}
					if (latlng.toString) {
						return alert('ReverseGeocode Error, latlng:' + latlng.toString());
					}
					if (latlng.x && latlng.y) {
						return alert('ReverseGeocode Error, x:' + latlng.x + ', y:' + latlng.y);
					}
					return alert('ReverseGeocode Error, Please check latlng');
				}
				
				var address = response.v2.address,
					htmlAddresses = [];
				
				if (address.jibunAddress !== '') {
					htmlAddresses.push('[지번 주소] ' + address.jibunAddress);
				}
				
				if (address.roadAddress !== '') {
					htmlAddresses.push('[도로명 주소] ' + address.roadAddress);
				}
				
				infoWindow.setContent([
					'<div style="padding:10px;min-width:200px;line-height:150%;">',
					'<h4 style="margin-top:5px;">검색 좌표</h4><br />',
					htmlAddresses.join('<br />'),
					'</div>'
				].join('\n'));
				
				infoWindow.open(map, latlng);
			});
		}
		
		function searchAddressToCoordinate(address) {
			menuLayer.hide();
			
			naver.maps.Service.geocode({
				query: address
			}, function(status, response) {
				if (status === naver.maps.Service.Status.ERROR) {
					if (!address) {
						return alert('Geocode Error, Please check address');
					}
					return alert('Geocode Error, address:' + address);
				}
				
				if (response.v2.meta.totalCount === 0) {
					return alert('지번주소로 검색해 주세요.');
				}
				
				var htmlAddresses = [],
					item = response.v2.addresses[0],
					point = new naver.maps.Point(item.x, item.y);
				
				if (item.roadAddress) {
					htmlAddresses.push('[도로명 주소] ' + item.roadAddress);
				}
				
				if (item.jibunAddress) {
					htmlAddresses.push('[지번 주소] ' + item.jibunAddress);
				}
				
				if (item.englishAddress) {
					htmlAddresses.push('[영문명 주소] ' + item.englishAddress);
				}
				
				infoWindow.setContent([
					'<div style="padding:10px;min-width:200px;line-height:150%;">',
					'<h4 style="margin-top:5px;">검색 주소 : ' + address + '</h4><br />',
					htmlAddresses.join('<br />'),
					'</div>'
				].join('\n'));
				
				map.setCenter(point);
				infoWindow.open(map, point);
			});
		}
		
		function initGeocoder() {
			map.addListener('click', function(e) {
				searchCoordinateToAddress(e.coord);
			});
			
			$('#address').on('keydown', function(e) {
				var keyCode = e.which;
				
				if (keyCode === 13) { // Enter Key
					searchAddressToCoordinate($('#address').val());
				}
			});
			
			$('#submit').on('click', function(e) {
				e.preventDefault();
				
				searchAddressToCoordinate($('#address').val());
			});
			
			searchAddressToCoordinate('논현동 207-3');
		}
		
		naver.maps.onJSContentLoaded = initGeocoder;
		
	}
}



//== 구글 지도 ==//

var map = null;
var markerTemp = null;
var marker = null;
var geocoder = null;
var result = null;


/*
 * 쉘에서 init 이벤트 발생 시 호출.
 */
function onShlGoogleInit(e){
	var shlGoogle = e.control;
	
	if(e.content) {
		e.preventDefault();
	}
}

/*
 * 쉘에서 load 이벤트 발생 시 호출.
 */
function onShlGoogleLoad(e){
	var shlGoogle = e.control;
	
	//google API 로드
	//key 파라미터는 발급받은 API Key로 변경 후 사용
	//구글의 경우, 도메인 등록이 필요하지 않음
	cpr.core.ResourceLoader.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAyri4O94b8rKYJMU056VBl0AYDct241P8")
		.then(function(input) {
			//geocoder 객체 생성
			geocoder = new google.maps.Geocoder();
			myMap();
		});
	
	//초기 맵 세팅
	function myMap() {
		var mapOptions = {
			center: new google.maps.LatLng(37.5135827, 127.0311027),
			zoom: 15
		};
		
		//div(shell컨트롤)에 map 객체 주입
		map = new google.maps.Map(
			document.getElementById(e.content.id), mapOptions);
		
		//좌클릭 이벤트 (주소)
		google.maps.event.addListener(map, "click", function(event) {			
			geocoder.geocode({
				'location': event.latLng
			}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					map.setCenter(results[0].geometry.location);
					
					//이전 마커 제거
					if (marker != null && marker != undefined) {
						marker.setMap(null);
					}
					
					//마커 생성
					marker = new google.maps.Marker({
						map: map,
						title: results[0].formatted_address, // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
						position: results[0].geometry.location,
						animation: google.maps.Animation.DROP
					});
					marker.setPosition(event.latLng);
					marker.setLabel(results[0].formatted_address);	
					marker.addListener("click", toggleBounce);
					marker.addListener("dblclick", removeMarker);
					
					map.setZoom(15);
					map.setCenter(event.latLng);
				} else {
					alert("error: " + status);
				}
			});
		});
		
		//우클릭 이벤트 (좌표)
		google.maps.event.addListener(map, "contextmenu", function(event) {			
			geocoder.geocode({
				'location': event.latLng
			}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					map.setCenter(results[0].geometry.location);
					
					//이전 마커 제거
					if (marker != null && marker != undefined) {
						marker.setMap(null);
					}
					
					//마커 생성
					marker = new google.maps.Marker({
						map: map,
						title: event.latLng.lat() + "  /  " + event.latLng.lng(), // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
						position: results[0].geometry.location,
						animation: google.maps.Animation.DROP
					});
					marker.setPosition(event.latLng);
					marker.setLabel(event.latLng.lat() + "  /  " + event.latLng.lng());	
					marker.addListener("click", toggleBounce);
					marker.addListener("dblclick", removeMarker);
					
					map.setZoom(15);
					map.setCenter(event.latLng);
				} else {
					alert("error: " + status);
				}
			});
		});
	}
	
	//바로 검색할 수 있도록 인풋에 포커스
	app.lookup("ipbSearch").focus();
}

/*
 * "검색" 버튼(btnSearch)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnSearchClick(e){
	var btnSearch = e.control;
	
	var address = app.lookup("ipbSearch").value;
	
	geocoder.geocode({
		'address': address
	}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			map.setZoom(15);
			
			//이전 마커 제거
			if (marker != null && marker != undefined) {
				marker.setMap(null);
			}
			
			marker = new google.maps.Marker({
				map: map,
				title: results[0].formatted_address, // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
				position: results[0].geometry.location,
				animation: google.maps.Animation.DROP
			});
			marker.setLabel(results[0].formatted_address);			
			marker.addListener("click", toggleBounce);
			marker.addListener("dblclick", removeMarker);
		} else {
			alert("error: " + status);
		}
	});
}

/*
 * "내위치찾기" 버튼(myLocationBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onMyLocationBtnClick(e){
	var myLocationBtn = e.control;
	
	//현재 위치 받아오기
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success, error);
	} else {
		error();
	}
	
	function success(position) {
		//경도 위도 세팅
		var pos = {
			lat: parseFloat(position.coords.latitude),
			lng: parseFloat(position.coords.longitude),
		};
		
		geocoder.geocode({
			'location': pos
		}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				map.setCenter(results[0].geometry.location);
				
				//이전 마커 제거
				if (marker != null && marker != undefined) {
					marker.setMap(null);
				}
					
				//마커 생성
				marker = new google.maps.Marker({
					map: map,
					title: results[0].formatted_address, // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
					position: results[0].geometry.location,
					animation: google.maps.Animation.DROP
				});
				marker.setPosition(pos);
				marker.setLabel(results[0].formatted_address);	
				marker.addListener("click", toggleBounce);
				marker.addListener("dblclick", removeMarker);
				
				map.setZoom(16);
				map.setCenter(pos);
			} else {
				alert("error: " + status);
			}
		});
	}
	
	function error() {
		window.alert('내 위치를 찾을 수 없습니다');
	}
}

//마커 애니메이션(bounce), 클릭 시 삭제
function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
		var infoWindow = new google.maps.InfoWindow({
			content: "<p>주소:" + marker.getTitle() + "</p><br><p>위치:" + marker.getPosition() + "</p>",
		});
		infoWindow.open(map, marker);
		
		setTimeout(function() {
			marker.setAnimation(null);
		}, 2000);
	}
}

function removeMarker() {
	marker.setMap(null);
}

/*
 * 인풋 박스에서 keyup 이벤트 발생 시 호출.
 * 사용자가 키에서 손을 뗄 때 발생하는 이벤트.
 */
function onIpbSearchKeyup(e){
	var ipbSearch = e.control;
	
	//엔터키 키업 시 검색
	if (e.key == 'Enter') {
		app.lookup('btnSearch').click();
	}
}
