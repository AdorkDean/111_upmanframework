	function checkContract()
	{
		var contractNo = document.getElementById("contractNo");
		var contractName = document.getElementById("contractName");
		var agentNo = document.getElementById("agentId");
		var startTime = document.getElementById("startTime");
		var endTime = document.getElementById("endTime");
		
		var ctn = contractNo.value.trim();
		if(ctn.length>0)
		{
			if(!ctn.isValidAlphanumeric())
			{
				alert("合同编号由字母或数字组成！");
				contractNo.focus();	
				return false;
			}
			if(ctn.length>20)
			{
				alert("合同编号长度在20个字符以内！");
				contractNo.focus();	
				return false;
			}
		}
		
		var ctm = contractName.value.trim();
		if(ctm.length>0)
		{					
			if(!isChineseCharacterAndEnglish(ctm))
			{
				alert("合同名称由汉字、字母或数字组成！");
				contractName.focus();
				return false;
			}	
			if(ctm.getByteLength()>100)
			{
				alert("合同名称的长度为50个字以内！");
				contractName.focus();
				return false;
			}
		}			
		
		var agn = agentNo.value.trim();
		if(agn.length>0)
		{
			if(!agn.isValidAlphanumeric())
			{
				alert("渠道商ID由字母或数字组成！");
				agentNo.focus();	
				return false;
			}
			if(agn.length>7)
			{
				alert("渠道商ID在7个字符以内！");
				agentNo.focus();	
				return false;
			}
		}		
	
		
		var stt = startTime.value.trim();
		if(stt.length>0)
		{
			if(!isValidDate(stt))
			{
				startTime.focus();
				return false;
			}
		}
		
		var end = endTime.value.trim();
		if(end.length>0)
		{
			if(!isValidDate(end))
			{
				endTime.focus();
				return false;
			}
		}		
		
		if(stt.length>0 && end.length>0)
		{
			if(!checkDateRange(stt,end))
			{
				alert("结束日期不能大于起始日期！");
				endTime.focus();
				return false;		
			}
		}		
								
	}

	function checkDateRange(BeginDate,EndDate)
	{
	    var strBegindate = BeginDate.substring(0,4)+BeginDate.substring(5,7)+BeginDate.substring(8,10);
	    var strEnddate = EndDate.substring(0,4)+EndDate.substring(5,7)+EndDate.substring(8,10);
	    if(parseInt(strBegindate)>parseInt(strEnddate))
	    {
	       // alert( "起始日期不能大于结束日期！");
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
	
	function isChineseCharacterAndEnglish(str)
	{

		var myregexp = /^[\da-zA-Z\u4e00-\u9fa5\s]+$/ ;
		var match = myregexp.test(str) ;
		if(!match)
		{
			return false ; // 非中英文字符
		}
		else
		{
			return true ;	// 中英文字符
		}
	}		
	
	function addNew()
	{
		var url = "preAdContract.action"
		window.open(url);
	}
	
	function showAdContract(contractId)
	{
		url="showAdContract.action?id="+contractId;
		window.open(url);
		//openwindow(url,'',600,580);
		//window.open(url, 'newwindow','height=600,width=550,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no,top=300');
	}
	
	function editAdContractPre(contractId)
	{
		url="editAdContractPre.action?id="+contractId;
		window.open(url);
		//openwindow(url,'',600,580);
		//window.open(url, 'newwindow','height=600,width=550,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no,top=300');
	}
	
	function showAgentDetail(context,agentId)
	{
		url=context + "/agentManage/getOederAgentDetail.action?id="+agentId;
		openwindow(url,'',420,500);
		//window.open(url, 'newwindow','height=600,width=550,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no,top=300');
	}
	
	function showUserDetail(context,userId)
	{
		url=context + "/agentManage/showUserInfo.action?id="+userId;
		openwindow(url,'',518,332);
		//window.open(url, 'newwindow','height=600,width=550,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no,top=300');
	}		
	
	//删除
	function deleteContracts(){
		
		var ids = getChooseValue("ids");
		var idStr = "";
		for(var k=0;k<ids.length;k++){
				idStr = idStr+ids[k]+"/";
		}
		
		var result = idStr.substr(0,idStr.length-1);
		if(ids.length==0){
			window.alert("请选择要删除的合同!");
			return false;
		}
		
		if(window.confirm("您是确定要删除选择的合同?")){
			var url = "deleteContracts.action?id="+result;
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
				//updateSC();
				if(doc=="1")	
					alert("删除成功！");	
				else
				    alert("删除失败！");	
				var page = document.form1.NextPage.value;
				goPage(page);												
			}
		
		}
	}				
