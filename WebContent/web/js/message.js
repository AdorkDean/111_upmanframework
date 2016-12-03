	//验证是否是汉字,英文和数字
	function isChineseCharacterAndEnglish(str){
	
		var regexp = /^[\da-zA-Z\u4e00-\u9fa5\s]+$/ ;
		var match = regexp.test(str) ;
		if(!match){
			return false ; // 非中英文字符数字
		}else{
			return true ;	// 中英文字符数字
		}
	}
	
	//去除空格
	function strTrim(str){
			var strTemp = str.replace(/(^\s*)|(\s*$)/g, "") ;
			return strTemp ;
	}
	//包含汉字的长度计算
	function computerLength(str)
	{		
		var len = 0;
		
		for(var i = 0; i < str.length; i++)
		{
			if(/^[^\0-\255]$/.test(str.charAt(i)))
			{
				len += 2;
			}
			else
			{
				len += 1;
			}
		}
		return len;
	}
	
	//弹出窗口居中
	function openwindow(url, winName, height, width) 
	{
		xposition=0; yposition=0;
		if ((parseInt(navigator.appVersion) >= 4 ))
		{
		xposition = (screen.width - width) / 2;
		yposition = (screen.height - height) / 2;
		}
		theproperty= "width=" + width + "," 
		+ "height=" + height + "," 
		+ "location=no," 
		+ "menubar=no,"
		+ "resizable=no,"
		+ "scrollbars=yes,"
		+ "status=no," 
		+ "titlebar=no,"
		+ "toolbar=no,"
		+ "hotkeys=no,"
		+ "screenx=" + xposition + "," //仅适用于Netscape
		+ "screeny=" + yposition + "," //仅适用于Netscape
		+ "left=" + xposition + "," //IE
		+ "top=" + yposition; //IE 
		window.open( url,winName,theproperty);
	}
	
	//日期的检测	
	function checkDate(){
		var flag = true ;
		var beginDate = document.getElementById("begindateId").value.replace(/(^\s*)|(\s*$)/g, "") ;
		var endDate = document.getElementById("enddateId").value.replace(/(^\s*)|(\s*$)/g, "") ;
		if(beginDate != "" && beginDate.length != 0){
			if(endDate != "" && endDate.length != 0){
				if(!checkDateRange(beginDate,endDate)){
					flag = false ;
				}
			}
		}
		
		if(beginDate == "" && beginDate.length == 0){
			if(endDate != "" && endDate.length != 0){
				if(!isValidDate(endDate)){
					flag = false ;
				}
			}
		}
		
		if(endDate == "" && endDate.length == 0){
			if(beginDate != "" && beginDate.length != 0){
				if(!isValidDate(beginDate)){
					flag = false ;
				}
			}
		}
		
		//其它数据的简单检测
		if(!checkQueryCondition()){
			flag = false ;
		}
		return flag ;
	}
	
	function checkDateRange(BeginDate,EndDate)
	{
		  if (!isValidDate(BeginDate)){
		  	  //alert("起始日期错误");
		  	  return false;
		  }
		  if (!isValidDate(EndDate)){
		  	  //alert("结束日期错误");
		  	  return false;	  	 
		  }
	    var strBegindate = BeginDate.substring(0,4)+BeginDate.substring(5,7)+BeginDate.substring(8,10);
	    var strEnddate = EndDate.substring(0,4)+EndDate.substring(5,7)+EndDate.substring(8,10);
	    if(parseInt(strBegindate)>parseInt(strEnddate))
	    {
	        alert( "起始日期不能大于结束日期！");
	        return false;
	    }
	    return true;
	}
	
	function isValidDate(strDate) {
	    var intYear;
	    var intMonth;
	    var intDay;
	    var maxDay;
	    var strSplit;
	    if (strDate.length != 10) {
	        alert("请输入正确的日期，格式为: YYYY-MM-DD，例如: '2000-05-15'！");
	        return false;
	    }
	    if (!isInt(strDate.substr(0, 4))) {
	        alert("年份中包含有非数字字符！");
	        return false;
	    }
	    intYear = parseInt(strDate.substr(0, 4), 10);
	    if(intYear < 1901 || intYear > 2099)
	    {
	        alert("输入的年份应该为(1901 ~ 2099)！");
	        return false;
	    }
	    strSplit = strDate.substr(4, 1);
	    if (strSplit != "-") {
	        alert("日期分隔符应为-！");
	        return false;
	    }
	    if (!isInt(strDate.substr(5, 2))) {
	        alert("月份中包含有非数字字符！");
	        return false;
	    }
	    intMonth = parseInt(strDate.substr(5, 2), 10);
	    if(intMonth < 1 || intMonth > 12)
	    {
	        alert("输入的月份应该为(01 ~ 12)！");
	        return false;
	    }
	    strSplit = strDate.substr(7, 1);
	    if (strSplit != "-") {
	        alert("日期分隔符应为-！");
	        return false;
	    }
	    if (!isInt(strDate.substr(8, 2))) {
	        alert("日期中包含有非数字字符！");
	        return false;
	    }
	    if (strDate.substr(8, 2) == "00") {
	        alert("输入的日期不能为00！");
	        return false;
	    }
	    intDay = parseInt(strDate.substr(8, 2),10);
	    maxDay = getDaysOfMonth(intYear, intMonth);
	    if(intDay < 1 || intDay > maxDay)
	    {
	        alert("输入的日期应该为(01 ~ " + maxDay +")！");
	        return false;
	    }
	    return true;
	}
	
	
	function isInt(str) {
	    if (str == "") {
	        return false;
	    }
	    for(var i = 0; i < str.length; ++i) {
	        if((str.charAt(i)<'0') || (str.charAt(i)>'9')) {
	                return false;
	        }
	    }
	    return true;
	}
	
	function getDaysOfMonth(strYear, strMonth)
	{
	   switch (strMonth)
	    {
	        case 1:
	        case 3:
	        case 5:
	        case 7:
	        case 8:
	        case 10:
	        case 12:
	            return 31;
	        case 4:
	        case 6:
	        case 9:
	        case 11:
	            return 30;
	        case 2:
	            if (isLeapYear(strYear)) {
	                return 29;
	            } else {
	                return 28;
	            }
	    }
	}
	//查询条件 简单的验证
	function checkQueryCondition(){
		
		var subject = document.getElementById("subjectId").value ;
		var createBy= document.getElementById("createById").value ;
		
		if(subject.indexOf("'")!=-1 || subject.indexOf("\"")!=-1){
			alert('搜索输入框内不能含有非法字符!'); 
			return false ;
		}
		
		if(createBy.indexOf("'")!=-1 || createBy.indexOf("\"")!=-1){
			alert('搜索输入框内不能含有非法字符!'); 
			return false ;
		}
		return true ;
	}
	
	//全选 
	function getAllId(){
		var isSelectAll = document.getElementById("selectAllId").checked ;
		if(isSelectAll){
			var checkboxArr = document.getElementsByName("idToDel") ;
			//alert(checkboxArr.length) ;
			for(var i = 0 ; i < checkboxArr.length ; i ++){
				checkboxArr[i].checked = true ;
			}
		}else{
			var checkboxArr = document.getElementsByName("idToDel") ;
			//alert(checkboxArr.length) ;
			for(var i = 0 ; i < checkboxArr.length ; i ++){
				checkboxArr[i].checked = false ;
			}			
		}
	}
	
	function isSelected(id){
		var isSelectAll = document.getElementById("selectAllId").checked ;
		var isSelected = document.getElementById(id).checked ;
		if(isSelectAll){
			if(!isSelected){
				document.getElementById("selectAllId").checked = false ;
			}
		}
	}
	
	function reflush(num){
		var pageNum = num;
			goPage(pageNum==''?1:parseInt(pageNum));
	}
	
	function checkMessageInfo(){
		var flag = true ;
		var subject = document.getElementById("subjectId").value ;
		var content = document.getElementById("contentAreaId").value ;
		//alert(content);
		if( strTrim(subject) == '' || strTrim(subject).length == 0){
			flag = false ;
			document.getElementById("subjectSpan").innerHTML = "<font color='red'>请填写公告标题</font>" ;
			//alert("请填写公告标题");
		}else{
			if(computerLength(subject) > 80){
				flag = false ;
				document.getElementById("subjectSpan").innerHTML = "<font color='red'>公告标题长度不能超过40个中文字符(80个英文字符)</font>"
			}else{
				document.getElementById("subjectSpan").innerHTML = "" ;
			}
		}

		if( strTrim(content) == '' || strTrim(content).length == 0){
			flag = false ;
			document.getElementById("contentSpan").innerHTML = "<font color='red'>请填写公告内容</font>" ;
		}else{
			if(computerLength(content) > 4000){
				flag = false;
				document.getElementById("contentSpan").innerHTML = "<font color='red'>公告内容长度不能超过2000个中文字符(4000个英文字符)</font>" ;
			}else{
				document.getElementById("contentSpan").innerHTML = "" ;	
			}			
		}
		return flag ;
	}
	//删除条件
	function deleteAnno(num){
		//var flag = true ;
		var idObjArr = document.getElementsByName("idToDel");
		var idStr = "" ;
		var pageNum = num ;
		
		for(var i = 0 ; i<idObjArr.length ; i ++){
			if(idObjArr[i].checked){
				idStr += idObjArr[i].value+"/";
			}
		}
		
		var idArr = idStr.split("/");
		if(idArr == "" || idArr.length == 0 ){
			//flag = false ;
			alert("请选择要删除的选项!");
			return false ;
		}else{
			if(confirm("确定要删除数据?")){
				document.getElementById("form1").action="delete.action?pageNum="+pageNum
				document.getElementById("form1").submit();
			}else{
				return ;
			}
		}
	}
	
	