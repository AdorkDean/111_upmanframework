	function check()
	{
  		
		var agentNoOrName = document.getElementById("agentNoOrName");
		var createName = document.getElementById("createName");
		var manageName = document.getElementById("manageName");
		//var startTime = document.getElementById("startTime");
		//var endTime = document.getElementById("endTime");
		
		var pattern=/([!\@\#\'\$%^&*+|\\{}?<>`])+/;
		
		var age = agentNoOrName.value.trim();
		if(age.length!=0 && (pattern.test(age)))
		{
			alert("请检查您的输入，不能包含特殊字符！");
			agentNoOrName.focus();
			return false;
		}
		
		if(checkDate()==false)
			return false;

		var cre = createName.value.trim();
		if(cre.length!=0 && (pattern.test(cre)))
		{
			alert("请检查您的输入，不能包含特殊字符！");
			createName.focus();
			return false;
		}
		
		var mag = manageName.value.trim();
		if(mag.length!=0 && (pattern.test(mag)))
		{
			alert("请检查您的输入，不能包含特殊字符！");
			manageName.focus();
			return false;
		}
		
	
		return true;
						
	}
	
	function checkDate(){
//		var flag = true ;
		var beginDate = document.getElementById("startTime").value.replace(/(^\s*)|(\s*$)/g, "") ;
		var endDate = document.getElementById("endTime").value.replace(/(^\s*)|(\s*$)/g, "") ;
	
		if(endDate == "" && endDate.length == 0){
			if(beginDate != "" && beginDate.length != 0){
				if(!isValidDate(beginDate)){
					document.getElementById("startTime").focus();
					return false;
				}
			}
		}

		if(beginDate == "" && beginDate.length == 0){
			if(endDate != "" && endDate.length != 0){
				if(!isValidDate(endDate)){
					document.getElementById("endTime").focus();
					return false;
				}
			}
		}
		
		if(beginDate != "" && beginDate.length != 0){
			if(endDate != "" && endDate.length != 0){
				if(!checkDateRange(beginDate,endDate)){
					document.getElementById("endTime").focus();
					return false;
				}
			}
		}				
		
//		return flag ;
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
		function dateCompare1(startDate, endDate) 
		{
	    	var strBegindate = startDate.substring(0,4)+startDate.substring(5,7)+startDate.substring(8,10);
	    	var strEnddate = endDate.substring(0,4)+endDate.substring(5,7)+endDate.substring(8,10);
	    	return parseInt(strBegindate)>parseInt(strEnddate);
		}
		
		function userDetail(userid)
		{
			var url="showUserInfo.action?id="+userid;
			openwindow(url,'',518,350);
			//window.open(url, 'newwindow','height=350,width=650,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no,top=300');
		}
	
	function updateAgent(agentId)
	{
		url="editAgent.action?id="+agentId;
		openwindow(url,'',600,580);
		//window.open(url, 'newwindow','height=600,width=550,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no,top=300');
	}
	
	function orderDetail(agentId)
	{
		url="getAgentOrders.action?id="+agentId;
		openwindow(url,'',700,550);
		//window.open(url, 'newwindow','height=550,width=700,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no,top=300');
	}	

	function editPassword(agentId)
	{
		url="editAgentPassword.action?id="+agentId;
		openwindow(url,'',500,300);
		//window.open(url, 'newwindow','height=300,width=500,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no,top=300');
	}	
	
	var idSatatuArray = new Array();
	var i = 0;
	var reCheckArray = new Array();
	var z = 0;	
	function checkUnityStatus(id,array,status){
		var ids = getChooseValue(id);
		if(ids.length == 0){
			alert("请选择要操作的记录");
			return false;
		}
		for(var i = 0; i < ids.length; i=i+1){
			var idValue = ids[i];
			for(var j = 0; j < array.length; j=j+1){
				if(idValue == array[j][0]){
					if(array[j][1] != 1 || array[j][1] != 2){
						//if(status == '1')
							//alert("选项中不能包含已经启用的记录");
						//else if(status == '2')
						//	alert("选项中不能包含已经禁用的记录");
						//else if(status == '0')
							alert("选项中不能包含已经删除的记录");
						return false;
					}
				}
			}
		}
		return true;
	}
	
	function getChooseValue(c){
		var array = new Array();
		var i = 0;
		var cb = document.getElementsByName(c);
		for(var j = 0;j < cb.length;j++)
		{
			if(cb[j].checked == true)
				array[i++] = cb[j].value;
		}
		return array;
	}

	//指定维护人
	function assignManager(){
		
		var idStr = "";
		var ids = getChooseValue("ids");
		if(ids.length==0){
			window.alert("请选择要操作的记录!");
			return false;
		}
		var manager = document.getElementById("manager").value;
		if(manager=="")
		{
			alert("请选择维护人！");
			return false;
		}		
		/*
		for(var i=0;i<ids.length;i++){
			var idValue = ids[i];
			for(var j=0;j<idSatatuArray.length;j++){
				if(idValue == idSatatuArray[j][0]){
					if(!(4==idSatatuArray[j][1] || 6==idSatatuArray[j][1])){
						window.alert("您的选择中包含已经被分配审核人的代理商");
						return false;
					}
				}
			}
		}
		*/
		for(var k=0;k<ids.length;k++){
				idStr = idStr+ids[k]+"/";
				
		}
		var result = (idStr.substr(0,idStr.length-1));

		var url = "updateAgentManager.action?manager="+manager+"&id="+result;
		//window.location.href=url;
		runByAjax(url,handleUpdateManager);
	}
	
	//禁用
	function disableAgent(){
		
		var ids = getChooseValue("ids");
		var idStr = "";
		for(var k=0;k<ids.length;k++){
				idStr = idStr+ids[k]+"/";
		}
		
		var result = idStr.substr(0,idStr.length-1);
		if(ids.length==0){
			window.alert("请选择禁用的渠道商!");
			return false;
		}
		
		
		for(var i=0;i<ids.length;i++){
			var idValue = ids[i];
			
			for(var j=0;j<idSatatuArray.length;j++){
				if(idValue == idSatatuArray[j][0]){
					if(6!=(idSatatuArray[j][1])){
						window.alert("您的选择中包含不能被禁用的渠道商");
						return false;
					}
				}
			}
			
		}
		
		if(window.confirm("您是否要禁用选择的渠道商?")){
			var url = "disableStatus.action?id="+result+"&status=7";
			//window.location.href=url;
			runByAjax(url,handleDelAgent);
		}

	}		
		
	

	//启用
	function enableAgent(){
		var ids = getChooseValue("ids");
		var idStr = "";
		for(var k=0;k<ids.length;k++){
				idStr = idStr+ids[k]+"/";
		}
		var result = idStr.substr(0,idStr.length-1);
		if(ids.length==0){
			window.alert("请选择要启用的渠道商!");
			return false;
		}
		
		for(var i=0;i<ids.length;i++){
			var idValue = ids[i];
			for(var j=0;j<idSatatuArray.length;j++){
				if(idValue == idSatatuArray[j][0]){
					if((7!=idSatatuArray[j][1])){
						window.alert("您的选择中包含不能被启用的渠道商");
						return false;
					}
				}
			}
		}
		
		if(window.confirm("您是否要启用选择的渠道商?")){
			var url = "enableStatus.action?id="+result+"&status=6";
			//window.location.href=url;
			runByAjax(url,handleDelAgent);
		}
	}		
	
	
	//终止合作
	function stopWork(){
		
		var ids = getChooseValue("ids");
		var idStr = "";
		for(var k=0;k<ids.length;k++){
				idStr = idStr+ids[k]+"/";
		}
		
		var result = idStr.substr(0,idStr.length-1);
		if(ids.length==0){
			window.alert("请选择终止合作的渠道商!");
			return false;
		}
		
		
		for(var i=0;i<ids.length;i++){
			var idValue = ids[i];
			
			for(var j=0;j<idSatatuArray.length;j++){
				if(idValue == idSatatuArray[j][0]){
					if(7!=(idSatatuArray[j][1]) && 6!=(idSatatuArray[j][1])){
						window.alert("您的选择中包含不能被终止合作的渠道商");
						return false;
					}
				}
			}
			
		}
			
		if(window.confirm("您是否要与选择的渠道商终止合作?")){
			var url = "deleteStatus.action?id="+result+"&status=8";
			//window.location.href=url;
			runByAjax(url,handleDelAgent);
		}

	}		
	
	//删除
	function delAgent(){
		var ids = getChooseValue("ids");
		var idStr = "";
		for(var k=0;k<ids.length;k++){
				idStr = idStr+ids[k]+"/";
		}
		var result = idStr.substr(0,idStr.length-1);
		if(ids.length==0){
			window.alert("请选择要删除的渠道商!");
			return false;
		}
		
		/*
		for(var i=0;i<ids.length;i++){
			var idValue = ids[i];
			for(var j=0;j<idSatatuArray.length;j++){
				if(idValue == idSatatuArray[j][0]){
					if(4!=idSatatuArray[j][1]){
						window.alert("您的选择中包含不能被删除项");
						return false;
					}
				}
			}
		}
		*/
		
		if(window.confirm("您是否要删除选择的数据?")){
			var url = "deleteStatus.action?id="+result+"&status=0";
			//window.location.href=url;
			runByAjax(url,handleDelAgent);
			
		}
	}
	
var xmlHttpRequest = false;
			
	function createXMLHttpRequest()
	{
		try
		{
			xmlHttpRequest = new XMLHttpRequest();
		}
		catch (Microsoft)
		{
			try
			{
				xmlHttpRequest = new ActiveXOjbect("Msxml2.XMLHTTP");
			}
			catch (Microsoft2)
			{
				try
				{
					xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (failed)
				{
					xmlHttpRequest = false;
				}
			}
		}
		
		if(!xmlHttpRequest)
		{
			window.alert("error in initializing XMLHttpRequest");
		}
		else
		{
			
		}
	}
	
	function runByAjax(url,methodName)
	{
		createXMLHttpRequest();
		xmlHttpRequest.open("POST",url,true);
		xmlHttpRequest.onreadystatechange = methodName;
		xmlHttpRequest.send(null);
	}

	function handleDelAgent()
	{
		if(xmlHttpRequest.readyState==4&&xmlHttpRequest.status==200)
		{	
			var doc = xmlHttpRequest.responseText;

			if(doc == "error")
			{
				alert("对不起，操作失败.");
				return;
			}
			else
			{				
				/*
				var ids = getChooseValue("ids");
				for(var i=0;i<ids.length;i++)
				{
					var id = ids[i]+"Status";
					var status = document.getElementById(id);
						if(doc=="0")
							status.innerHTML="删除";
						if(doc=="4")
							status.innerHTML="已审核";
						if(doc=="6")
							status.innerHTML="启用";
						if(doc=="7")
							status.innerHTML="冻结";
						if(doc=="8")
							status.innerHTML="终止合作";				
				}
				*/
				//updateSC();
				if(doc=='logined')
					alert("您的选项中有不能被删除的渠道商！");
				else
				{	
					alert("操作成功！");	
					var page = document.form1.NextPage.value;
					goPage(page);	
				}											
			}
		
		}
	}
	
	function handleUpdateManager()
	{
		if(xmlHttpRequest.readyState==4&&xmlHttpRequest.status==200)
		{	
			var doc = xmlHttpRequest.responseText;

			if(doc == "error")
			{
				alert("对不起，操作失败.");
				return;
			}
			else
			{				
				var ids = getChooseValue("ids");
				for(var i=0;i<ids.length;i++)
				{
					var id = ids[i]+"Manager";
					var status = document.getElementById(id);
					var manager = document.getElementById("manager");
					var managerId = manager.value;
					var managerName = manager.options[manager.selectedIndex].innerText;
					managerName = managerName.replace(/\(.*\)$/,"");
					var urlchange="<a href='#' onclick='userDetail(" + managerId +")' >" + managerName + "</a>";
					status.innerHTML=urlchange;			
				}
				//updateSC();	
				alert("操作成功！");									
			}
		
		}
	}