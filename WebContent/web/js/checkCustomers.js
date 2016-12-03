
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
	function openwindow( url, winName, height, width) 
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
	
	//查询条件
	function checkQueryCondition(){
		
		var keyword = document.getElementById("keywordId").value ;
		var agentNo= document.getElementById("agentNoId").value ;
		
		if(keyword.indexOf("'")!=-1 || keyword.indexOf("\"")!=-1){
			alert('搜索输入框内不能含有非法字符!'); 
			return false ;
		}
		
		if(agentNo.indexOf("'")!=-1 || agentNo.indexOf("\"")!=-1){
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
	//禁用条件	
	function disableCustomers(num){
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
			alert("请选择要禁用的选项!");
			return false ;
		}else{
			document.getElementById("form1").action="disable.action?pageNum="+pageNum
			document.getElementById("form1").submit();
		}
	}
	
	//启用条件
	function enableCustomers(num){
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
			alert("请选择要启用的选项!");
			return false ;
		}else{
			document.getElementById("form1").action="enable.action?pageNum="+pageNum
			document.getElementById("form1").submit();
		}
	}
	//更新数据检测
	function checkUpdateDate(){
		var flag = true ;
		
		var companyName = document.getElementById("companyNameId").value;
		var contactPerson = document.getElementById("contactPersonId").value;
		var email = document.getElementById("emailId").value;
		var telephone = document.getElementById("telephoneId").value;
		
		var fax = document.getElementById("faxId").value;
		var address = document.getElementById("addressId").value;
		var zip = document.getElementById("zipId").value;
		
		//company name 
		if(strTrim(companyName) == "" || strTrim(companyName).length == 0){
			flag = false ;
			document.getElementById("companyNameSpan").innerHTML = "<font color='red'>请输入公司名称</font>" ;
		}else{
			var myregexp = /^[\da-zA-Z\u4e00-\u9fa5\s]+$/ ;
			var match = myregexp.test(companyName) ;
			if(!match){
				flag = false ;				
				document.getElementById('companyNameSpan').innerHTML = "<font color='red'>公司名称只能由中英文,数字组成</font>" ;
			}else{
				var len = computerLength(companyName);
				//alert(len);
				if(len > 60){
					flag = false ;		
					document.getElementById('companyNameSpan').innerHTML = "<font color='red'>公司名称长度不能大于60个字符(30个中文)</font>" ;
				}else{
					document.getElementById('companyNameSpan').innerHTML = "";
				}
			}
		}
		// contact person
		if(strTrim(contactPerson) == "" || strTrim(contactPerson).length == 0){
			flag = false ;
			document.getElementById("contactPersonSpan").innerHTML = "<font color='red'>请输入联系人</font>" ;
		}else{
			var myregexp = /^[\da-zA-Z\u4e00-\u9fa5\s]+$/ ;
			var match = myregexp.test(contactPerson) ;
			if(!match){
				flag = false ;				
				document.getElementById('contactPersonSpan').innerHTML = "<font color='red'>联系人名称只能由中英文,数字组成</font>" ;
			}else{
				var len = computerLength(contactPerson);
				//alert(len);
				if(len > 20){
					flag = false ;		
					document.getElementById('contactPersonSpan').innerHTML = "<font color='red'>联系人名称长度不能大于20个字符(10个中文)</font>" ;
				}else{
					document.getElementById('contactPersonSpan').innerHTML = "";
				}
			}
		}
		//email
		if(strTrim(email) == "" || strTrim(email).length == 0){
			flag = false ;
			document.getElementById('emailSpan').innerHTML="<font color = 'red'>请填写E-mail</font>";
		}else{
			if(!strTrim(email).isValidEmail()){				
				flag = false ;
				document.getElementById('emailSpan').innerHTML="<font color = 'red'>请输入正确的邮箱</font>"
			}else{
				if(email.length > 60){
					flag = false ;
					document.getElementById('emailSpan').innerHTML="<font color = 'red'>邮箱长度不能超过60个字符</font>"
				}else{
					document.getElementById('emailSpan').innerHTML="";
				}
			}
			
		}
		//telephone
		if(strTrim(telephone) == "" || strTrim(telephone).length == 0){
			flag = false ;
			document.getElementById('telephoneSpan').innerHTML="<font color = 'red'>请输入联系电话</font>";
		}else{
			if(!strTrim(telephone).isValidPhoneNo()){
				flag = false ;
				document.getElementById("telephoneSpan").innerHTML = "<font color='red'>请核实联系电话</font>";
			}else{
				if( telephone.length < 5 || telephone.length > 30){
					flag = false ;
					document.getElementById("telephoneSpan").innerHTML = "<font color='red'>联系电话长度只能在5-30位</font>";
				}else{
					document.getElementById("telephoneSpan").innerHTML = "";
				}
			}
		}
		//fax
		if(strTrim(fax) != "" &&  strTrim(fax).length != 0){
			if(!strTrim(fax).isValidPhoneNo()){
				flag = false ;
				document.getElementById("faxSpan").innerHTML = "<font color='red'>请核实传真</font>";
			}else{
				if(fax.length < 5 || fax.length > 30){
					flag = false ;
					document.getElementById("faxSpan").innerHTML = "<font color='red'>传真长度只能在5-30位</font>";
				}else{
					document.getElementById("faxSpan").innerHTML = "";
				}
			}
		}
		//address
		if(strTrim(address) != "" && strTrim(address).length != 0){
			var myregexp = /^[\da-zA-Z\u4e00-\u9fa5\s]+$/ ;
			var match = myregexp.test(address) ;
			if(!match){
					flag = false ;
					document.getElementById("addressSpan").innerHTML = "<font color='red'>请核实地址</font>";			
			}else{
				if(computerLength(address) > 100){
					flag = false ;
					document.getElementById("addressSpan").innerHTML = "<font color='red'>地址长度不能超过100个字符(50个中文)</font>";
				}else{
					document.getElementById("addressSpan").innerHTML = "";
				}
			}
		}
		//zip
		if(strTrim(zip) != "" && strTrim(zip).length != 0){
			var myregexp = /^[0-9]+$/
			var match = myregexp.test(strTrim(zip));	
			if(!match){
				flag = false ;
				document.getElementById("zipSpan").innerHTML = "<font color='red'>请核实邮编</font>";				
			}else{
				if(zip.legth > 10){
					flag = false ;
					document.getElementById("zipSpan").innerHTML = "<font color='red'>邮编长度不能超过10个字符</font>";
				}else{
					document.getElementById("zipSpan").innerHTML = "";
				}
			}
		}
		return flag ;
	}
	
	function reflush(num){
		var pageNum = num;
			goPage(pageNum==''?1:parseInt(pageNum));

	}
	//初始化密码的检测
	function checkPassword(){
		var flag = true ;
		var password = document.getElementById("passwordId").value ;
		var affirmPassword = document.getElementById("affirmPasswordId").value ;
		
		
		if(password == "" ||password.length == 0){
			flag = false ;
			document.getElementById("passwordSpan").innerHTML = "<font color='red'>请输入密码</font>";
		}else{
			var myregexp = /[^\w0-9]/;     //匹配所有非法字符
			var match = myregexp.test(password);
			if(match){
				flag = false ;
				document.getElementById("passwordSpan").innerHTML = "<font color='red'>密码只能由字母,数字组成</font>";
			}else{
				if(password.length < 5 || password.length > 16){
					flag = false ;
					document.getElementById("passwordSpan").innerHTML = "<font color='red'>密码长度为5-16个字符</font>";
				}else{
					document.getElementById("passwordSpan").innerHTML = "";
				}
			}
		}
		
		if(affirmPassword == "" || affirmPassword.length == 0){
			flag = false ;
			document.getElementById("affirmPasswordSpan").innerHTML = "<font color='red'>请输入确认密码</font>";
		}else{
			if(affirmPassword != password){
				flag = false ;
				document.getElementById("affirmPasswordSpan").innerHTML = "<font color='red'>确认密码错误</font>";
			}else{
				document.getElementById("affirmPasswordSpan").innerHTML = "";
			}
		}
		
		return flag ;
	}
	
	function gotoShowroom(){
		var url = document.getElementById("localShowroomUrl").value ;
		//alert(url);
		if(url != ""){
			window.open(url);
		}
	}
