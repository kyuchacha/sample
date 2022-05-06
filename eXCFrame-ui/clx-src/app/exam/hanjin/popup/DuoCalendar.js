/************************************************
 * twoCalendar.js
 * Created at 2021. 12. 10. 오전 8:53:22.
 *
 * @author HANS
 ************************************************/
var msSelectOption = "";
/**
 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
 */
exports.getText = function() {
	// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
	return "";
};

/*
 * 캘린더에서 before-value-change 이벤트 발생 시 호출.
 * Calendar의 value를 변경하여 변경된 값이 저장되기 전에 발생하는 이벤트. 다음 이벤트로 value-change가 발생합니다.
 */
function onCal1BeforeValueChange( /* cpr.events.CValueChangeEvent */ e) {
	/** 
	 * @type cpr.controls.Calendar
	 */
	var cal1 = e.control;
	var vsNewValue = e.newValue;
	var vcCal2 = app.lookup("cal2");
	vcCal2.putValues([vsNewValue]);
	var vsNextMont = moment(vcCal2.current).add(1, "month");
	vcCal2.navigate(vsNextMont);
	var vaFromTime = vsNewValue.split(cal1.delimiter);
	var vsFromTime = vaFromTime[0];
	app.lookup("dtiFromTime").putValue(vsFromTime);
}

/*
 * 캘린더에서 before-value-change 이벤트 발생 시 호출.
 * Calendar의 value를 변경하여 변경된 값이 저장되기 전에 발생하는 이벤트. 다음 이벤트로 value-change가 발생합니다.
 */
function onCal2BeforeValueChange( /* cpr.events.CValueChangeEvent */ e) {
	/** 
	 * @type cpr.controls.Calendar
	 */
	var cal2 = e.control;
	var cal1 = app.lookup("cal1");
	var vsOldValue = e.oldValue;
	var vsDelimeter = cal2.delimiter;
	vsOldValue = ValueUtil.fixNull(vsOldValue) == "" ? "" : vsOldValue;
	
	var vsOldCheck = vsOldValue.replace(vsDelimeter, "");
	var vsNewValue = e.newValue;
	if (vsOldCheck != null && vsOldCheck != "") {
		
		vsOldValue = vsOldValue.split(cal2.delimiter)[0];
		if (vsNewValue.indexOf(cal2.delimiter) == -1) {
			e.preventDefault();
			
			cal1.putValues([vsOldValue, vsNewValue]);
			cal2.putValues([vsOldValue, vsNewValue]);
			
		} else {
			cal1.putValue(vsNewValue);
		}
		cal1.navigate(moment(vsOldValue, cal2.format));
	} else {
		e.preventDefault();
		if (msSelectOption != "" && msSelectOption != null) {
			
			if (msSelectOption == "date") {
				var vsFromDate = moment(vsNewValue, cal2.format).subtract(1, 'year').format(cal2.format);
				cal1.putValues([vsFromDate, vsNewValue]);
				cal2.putValues([vsFromDate, vsNewValue]);
				cal1.navigate(moment(vsFromDate, cal1.format));
			} else if (msSelectOption == "dayofweek") {
				
				var vsFromDate = moment(vsNewValue, cal2.format).subtract(364, "day").format(cal2.format);
				cal1.putValues([vsFromDate, vsNewValue]);
				cal2.putValues([vsFromDate, vsNewValue]);
				cal1.navigate(moment(vsFromDate, cal1.format));
			}
		}
		//		cal1.value = vsNewValue;
	}
	//	var vaNewTime = vsNewValue.split(vsDelimeter);
	//	var vsNewTime = vaNewTime[vaNewTime.length-1];
	//	app.lookup("dtiToTime").value = vsNewTime;
}

/*
 * "OK" 버튼(btnOK)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnOKClick( /* cpr.events.CMouseEvent */ e) {
	/** 
	 * @type cpr.controls.Button
	 */
	var btnOK = e.control;
	app.close(app.lookup("cal1").values);
}

/*
 * "Cancel" 버튼(btnCancel)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnCancelClick( /* cpr.events.CMouseEvent */ e) {
	/** 
	 * @type cpr.controls.Button
	 */
	var btnCancel = e.control;
	app.close();
}

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit( /* cpr.events.CEvent */ e) {
	
	var voInit = app.getHostProperty("initValue");
	
	if (voInit != null) {
		
		var vsSelectOption = voInit["selectOption"];
		if (vsSelectOption == "month") {
			app.lookup("cal1").calendarType = "yearmonth";
			app.lookup("cal2").calendarType = "yearmonth";
		} else {
			app.lookup("cal1").calendarType = "yearmonthdate";
			app.lookup("cal2").calendarType = "yearmonthdate";
		}
	}
	var vsSelectOption = voInit["selectOption"];
	msSelectOption = vsSelectOption;
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad( /* cpr.events.CEvent */ e) {
	
	var vcCal1 = app.lookup("cal1");
	var vcCal2 = app.lookup("cal2");
	var vcDtiFromTime = app.lookup("dtiFromTime");
	var vcDtiToTime = app.lookup("dtiToTime");
	var voInitValue = app.getHostProperty("initValue");
	
	if (voInitValue) {
		
		var vsEnableExp = voInitValue["enableDateExp"];
		/** @type String */
		var vsFormat = voInitValue["format"];
		if (vsEnableExp != "" && vsEnableExp != null) {
			
			vcCal1.enabledDateExp = vsEnableExp;
			vcCal2.enabledDateExp = vsEnableExp;
		}
		if (vsFormat != "" && vsFormat != null) {
			vcCal1.format = vsFormat;
			vcCal2.format = vsFormat;
			//TODO should refactoring
			var vbUseTime = voInitValue["useTimeFormat"];
			if (vbUseTime) {
				vcDtiFromTime.format = vsFormat;
				vcDtiFromTime.visible = true;
				vcDtiToTime.format = vsFormat;
				vcDtiToTime.visible = true;
			} else {
				vcDtiFromTime.visible = false;
				vcDtiToTime.visible = false;
			}
		}
		
		var vsClassName = voInitValue["className"];
		if (vsClassName != "" && vsClassName != null) {
			vcCal1.style.addClass(vsClassName);
			vcCal2.style.addClass(vsClassName);
		}
		
		var vsFromDate = voInitValue["fromDate"];
		var vsEndDate = voInitValue["toDate"];
		var vaDate = [];
		if (ValueUtil.fixNull(vsFromDate) != "") {
			vaDate.push(vsFromDate);
		}
		if (ValueUtil.fixNull(vsEndDate) != "") {
			vaDate.push(vsEndDate);
		}
		vcCal1.values = vaDate;
		vcCal2.values = vaDate;
		
		if (vsFromDate != "" && vsFromDate != null) {
			
			vcCal1.navigate(moment(vsFromDate, vsFormat));
		}
		if (vsEndDate != "" && vsEndDate != null) {
			
			vcCal2.navigate(moment(vsEndDate, vsFormat));
		}
		vcCal1.focus();
		
		/** @type Boolean */
		var vbUseAutoSelect = voInitValue["useAutoSelect"];
		var bodyLayout = app.getContainer().getLayout();
		bodyLayout.setColumnVisible(0, vbUseAutoSelect);
		
	}
}

/*
 * 데이트 인풋에서 value-change 이벤트 발생 시 호출.
 * Dateinput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onDtiFromTimeValueChange( /* cpr.events.CValueChangeEvent */ e) {
	/** 
	 * @type cpr.controls.DateInput
	 */
	var dtiFromTime = e.control;
	var cal1 = app.lookup("cal1");
	var cal2 = app.lookup("cal2");
	var vaValues = cal1.values;
	cal1.putValues([dtiFromTime.value, vaValues[1]]);
	cal2.putValues([dtiFromTime.value, vaValues[1]]);
	cal1.navigate(moment(dtiFromTime.value, cal1.format));
}

/*
 * 데이트 인풋에서 value-change 이벤트 발생 시 호출.
 * Dateinput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onDtiToTimeValueChange( /* cpr.events.CValueChangeEvent */ e) {
	/** 
	 * @type cpr.controls.DateInput
	 */
	var dtiToTime = e.control;
	var cal1 = app.lookup("cal1");
	var cal2 = app.lookup("cal2");
	var vaValues = cal1.values;
	cal1.putValues([vaValues[0], dtiToTime.value]);
	cal2.putValues([vaValues[0], dtiToTime.value]);
	cal1.navigate(moment(vaValues[0], cal1.format));
}



/*
 * "금주" 버튼(btn1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn1Click(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var btn1 = e.control;
	
	var cal1 = app.lookup("cal1");
	var cal2 = app.lookup("cal2");
	
	var monday = mondayMaker(cal1);
	var sunday = sundayMaker(cal1);
	
	cal1.putValues([monday, sunday]);
	cal2.putValues([monday, sunday]);
}

function mondayMaker(cal1) {
	
	var defaultDate = cal1.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() + 1;
	var date;
	
	//요일에 따른 월요일 계산
	var week = defaultDate.getDay();
	if (week == 0) {
		week = 7;
	}
	
	if (week != 1) {
		date = defaultDate.getDate() - (week - 1);
		
		//전 달로 넘어갔는지 체크
		if (date < 1) {
			var preMaxDate = new Date(year, month, 0).getDate();
			
			month = month - 1;
			date = preMaxDate + date;
			
			//전 년도로 넘어갔는지 체크
			if (month == 0) {
				month = 12;
				year = year - 1;
			}
		}
	}
	
	//달이 한자리 수인지 체크 (한자리 수 일 경우 앞에 0 추가)
	if (month < 10) {
		month = '0' + month;
	} 
	
	return year + ""+ month + "" + date + "";
}

function sundayMaker(cal1) {
	
	var defaultDate = cal1.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() + 1;
	var date;
	
	//요일에 따른 일요일 계산
	var week = defaultDate.getDay();
	
	if (week == 0) {
		week = 7;
	}
	
	week = 7 - week;
	
	date = defaultDate.getDate() + week;
	
	//다음 달로 넘어갔는지 체크
	var currentMaxDate = new Date(year, month, 0).getDate();
	
	if (currentMaxDate < date) {
		month = month + 1;
		date = date - currentMaxDate;		
	}
	
	//다음 년도로 넘어갔는지 체크
	if (month == 13) {
		year = year + 1;
		month = 1;
	}
	
	//달이 한자리 수인지 체크 (한자리 수 일 경우 앞에 0 추가)
	if (month < 10) {
		month = '0' + month;
	} 
	
	return year + ""+ month + "" + date + "";
}


/*
 * "전주" 버튼(btn2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn2Click(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var btn2 = e.control;
	
	var cal1 = app.lookup("cal1");
	var cal2 = app.lookup("cal2");
	
	var monday = preMondayMaker(cal1);
	var sunday = preSundayMaker(cal1);
	
	cal1.putValues([monday, sunday]);
	cal2.putValues([monday, sunday]);
}

function preMondayMaker(cal1) {
	
	var defaultDate = cal1.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() + 1;
	var date;
	
	//요일에 따른 월요일 계산
	var week = defaultDate.getDay();
	if (week == 0) {
		week = 7;
	}
	
	if (week != 1) {
		date = defaultDate.getDate() - (week - 1) - 7;
		
		//전 달로 넘어갔는지 체크
		if (date < 1) {
			var preMaxDate = new Date(year, month, 0).getDate();
			
			month = month - 1;
			date = preMaxDate + date;
			
			//전 년도로 넘어갔는지 체크
			if (month == 0) {
				month = 12;
				year = year - 1;
			}
		}
	}
	
	//달이 한자리 수인지 체크 (한자리 수 일 경우 앞에 0 추가)
	if (month < 10) {
		month = '0' + month;
	} 
	
	return year + ""+ month + "" + date + "";
}

function preSundayMaker(cal1) {
	
	var defaultDate = cal1.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() + 1;
	var date;
	
	//요일에 따른 일요일 계산
	var week = defaultDate.getDay();
	
	if (week == 0) {
		week = 7;
	}
	
	week = 7 - week;
	
	date = defaultDate.getDate() + week - 7;
	
	//다음 달로 넘어갔는지 체크
	var currentMaxDate = new Date(year, month, 0).getDate();
	
	if (currentMaxDate < date) {
		month = month + 1;
		date = date - currentMaxDate;		
	}
	
	//다음 년도로 넘어갔는지 체크
	if (month == 13) {
		year = year + 1;
		month = 1;
	}
	
	//달이 한자리 수인지 체크 (한자리 수 일 경우 앞에 0 추가)
	if (month < 10) {
		month = '0' + month;
	} 
	
	return year + ""+ month + "" + date + "";
}

/*
 * "당월" 버튼(btn3)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn3Click(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var btn3 = e.control;
	
	var cal1 = app.lookup("cal1");
	var cal2 = app.lookup("cal2");
	
	var defaultDate = cal1.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() + 1;
	
	var maxDate = new Date(year, month, 0).getDate();
	
	if (month < 10) {
		month = '0' + month;
	}
	
	var start = year + "" + month + "" + '01';
	var end = year + "" + month + "" + maxDate;
	
	cal1.putValues([start, end]);
	cal2.putValues([start, end]);
}


/*
 * "전월" 버튼(btn4)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn4Click(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var btn4 = e.control;
	
	var cal1 = app.lookup("cal1");
	var cal2 = app.lookup("cal2");
	
	var defaultDate = cal1.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth();
	
	if (month == 0) {
		year = year - 1;
		month = 12;
	}
	
	var maxDate = new Date(year, month, 0).getDate();
	
	if (month < 10) {
		month = '0' + month;
	}
	
	var start = year + "" + month + "" + '01';
	var end = year + "" + month + "" + maxDate;
	
	cal1.putValues([start, end]);
	cal2.putValues([start, end]);
}


/*
 * "당분기" 버튼(btn5)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn5Click(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var btn5 = e.control;
	
	var cal1 = app.lookup("cal1");
	var cal2 = app.lookup("cal2");
	
	var defaultDate = cal1.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() + 1;
	var startMonth;
	
	//분기 체크
	if (month % 3 == 0) {
		month = month - 2;
	} else if (month % 3 == 2) {
		startMonth = month - 1;
	}
	
	//month 2자리수로 만듬
	if (month < 10) {
		startMonth = '0' + month;
	}
	
	var endMonth = '0' + (month + 2);
	
	var maxDate = new Date(year, endMonth, 0).getDate();
	
	var start = year + '' + startMonth + '' + '01';
	var end = year + '' + endMonth + '' + maxDate;
	
	var navStart = year + '-' + startMonth + '-' + '01';
	
	cal1.putValues([start, end]);
	cal2.putValues([start, end]);
	cal1.navigate(new Date(navStart));
}



/*
 * "전분기" 버튼(btn6)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn6Click(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var btn6 = e.control;
	
	var cal1 = app.lookup("cal1");
	var cal2 = app.lookup("cal2");
	
	var defaultDate = cal1.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() - 2;
	var startMonth;
	
	//전 년도로 넘어갔을 경우
	if (month < 1) {
		year = year - 1;
		month = 12 + month;
	}
	
	//분기 체크
	if (month % 3 == 0) {
		startMonth = month - 2;
	} else if (month % 3 == 2) {
		startMonth = month - 1;
	} else {
		startMonth = month;
	}
	
	var endMonth = startMonth + 2;
	
	//month 2자리수로 만듬
	if (startMonth < 10) {
		startMonth = '0' + startMonth;
	}
	
	if (endMonth < 10) {
		var endMonth = '0' + month;
	}
	
	var maxDate = new Date(year, endMonth, 0).getDate();
	
	var start = year + '' + startMonth + '' + '01'
	var end = year + '' + endMonth + '' + maxDate;
	
	var navStart = year + '-' + startMonth + '-' + '01';
	
	cal1.putValues([start, end]);
	cal2.putValues([start, end]);
	cal1.navigate(new Date(navStart));
}


/*
 * "금년(전체)" 버튼(btn8)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn8Click(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var btn8 = e.control;
	
	var cal1 = app.lookup("cal1");
	var cal2 = app.lookup("cal2");
	
	var defaultDate = cal1.defaultDate;
	var year = defaultDate.getFullYear();
	
	var start = year + '0101';
	var end = year + '1231';
	
	var navStart = year + '-01-01';
	
	cal1.putValues([start, end]);
	cal2.putValues([start, end]);
	cal1.navigate(new Date(navStart));
}


/*
 * "전년(전체)" 버튼(btn10)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn10Click(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var btn10 = e.control;
	
	var cal1 = app.lookup("cal1");
	var cal2 = app.lookup("cal2");
	
	var defaultDate = cal1.defaultDate;
	var year = defaultDate.getFullYear() - 1;
	
	var start = year + '0101';
	var end = year + '1231';
	
	var navStart = year + '-01-01';
	
	cal1.putValues([start, end]);
	cal2.putValues([start, end]);
	cal1.navigate(new Date(navStart));
}