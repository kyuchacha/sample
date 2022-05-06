/************************************************
 * NavigationBar.js
 * Created at 2022. 3. 9. 오후 6:13:10.
 *
 * @author 1amthomas
 ************************************************/

/*
 * "실행" 버튼(btnInit2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnInit2Click(e){
	var select = app.lookup("sampleCmb").value;
	if(select == null){
		alert("입력값을 먼저 선택하세요");
		return false;
	}
	if(select == "megamenu"){
		app.lookup("sampleMega").visible = true;
		app.lookup("sampleFull").visible = false;			
	}else{
		app.lookup("sampleFull").visible = true;
		app.lookup("sampleMega").visible = false;	
	}
}

/*
 * "실행" 버튼(btnInit3)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnInit3Click(e){
	var select = app.lookup("sampleCmb2").value;
	if(select == null){
		alert("입력값을 먼저 선택하세요");
		return false;
	}
	console.log(select);
	app.lookup("sampleNavi").expandTrigger = select;
	app.lookup("sampleNavi").redraw();	
}

/*
 * "실행" 버튼(btnInit5)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnInit5Click(e){
	var select = app.lookup("sampleCmb3").value;
	if(select == null){
		alert("입력값을 먼저 선택하세요");
		return false;
	}
	app.lookup("sample").space = select;
	
}
