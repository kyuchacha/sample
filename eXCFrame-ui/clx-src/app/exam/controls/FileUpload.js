/************************************************
 * FileUpload.js
 * Created at 2022. 3. 7. 오후 5:40:26.
 *
 * @author 1amthomas
 ************************************************/

/*
 * "실행" 버튼(btnInit)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnInitClick(e){
	var select = app.lookup("sampleCmb1").value;
	if(select == null){
		alert("입력값을 먼저 선택하세요");
		return false;
	}
	app.lookup("sampleFid1").emptyMessage = select;
}

/*
 * "실행" 버튼(btnInit2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnInit2Click(e){
	var select = app.lookup("sampleCmb2").value;
	switch(select){
		case "1" :
			app.lookup("sampleFid2").buttons = ["send","add"];
			break;
		case "2" :
			app.lookup("sampleFid2").buttons = ["remove","send"];
			break;
		case "3" :
			app.lookup("sampleFid2").buttons = ["add","remove"];			
			break;
	}
}

/*
 * "실행" 버튼(btnInit6)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnInit6Click(e){
	var select = app.lookup("sampleCmb").value;
	if(select == null){
		alert("입력값을 먼저 선택하세요");
		return false;
	}
	app.lookup("sampleFid6").maxFileCount = Number(select);
	app.lookup("sampleFid6").focus();
}

/*
 * "실행" 버튼(btnInit7)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnInit7Click(e){
	var select = app.lookup("sampleCmb2").value;
	if(select == null){
		alert("입력값을 먼저 선택하세요");
		return false;
	}
	if(select == "true"){
		app.lookup("sampleFid7").droppableFile = true;		
	}else{
		app.lookup("sampleFid7").droppableFile = false;	
	}
}
