	function checkContract()
	{
		save();
		var contractType = document.getElementById("contractType");
		var agentId = document.getElementById("agentId");
		var contractNo = document.getElementById("contractNo");
		var contractName = document.getElementById("contractName");
		var businessMan = document.getElementById("businessMan");
		var amount = document.getElementById("amount");
		var signDate = document.getElementById("signDate");
		var validFrom = document.getElementById("validFrom");
		var validTo = document.getElementById("validTo");
		var content = document.getElementById("maincontent");
		var companya = document.getElementById("companya");
		var signera = document.getElementById("signera");
		var companyb = document.getElementById("companyb");
		var signerb = document.getElementById("signerb");
		
		var greatThan = "greatThan";
		var greatOrEqual = "greatOrEqual";
		
		var coe = contractType.value.trim();
		if(coe.length==0)
		{
			alert("请选择合同类型！");
			return false;
		}
		
		var agd = agentId.value.trim();
		if(agd.length==0)
		{
			alert("请选择渠道商ID！");
			return false;
		}		
		
		var ctn = contractNo.value.trim();
		if(ctn.length==0)
		{
			alert("请输入合同编号！");
			contractNo.focus();
			return false;
		}	
		if(!ctn.isValidAlphanumeric())
		{
			alert("合同编号由字母和数字组成！");
			contractNo.focus();	
			return false;
		}
		if(ctn.length<4 || ctn.length>20)
		{
			alert("合同编号长度在4到20个字符之间！");
			contractNo.focus();	
			return false;
		}
		
		
		var ctm = contractName.value.trim();
		if(ctm.length==0)
		{
			alert("请输入合同名称！");
			contractName.focus();
			return false;
		}
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
		
		var man = businessMan.value.trim();
		if(man.length==0)
		{
			alert("请选择维护人！");
			return false;
		}		
		
		var acb = amount.value.trim();
		if( acb.length==0)
		{
			alert("请输入合同金额！");
			amount.focus();
			return false;
		}		
		if( acb>999999999.99 || acb<0 ||!isValidMoney(acb))
		{
			alert("请核实合同金额！");
			amount.focus();
			return false;
		}		
	
		
		var sid = signDate.value.trim();
		if(sid.length==0)
		{
			alert("请输入签订日期！");
			signDate.focus();
			return false;
		}
		if(!isValidDate(sid))
		{
			signDate.focus();
			return false;
		}
		
		var vdf = validFrom.value.trim();
		if(vdf.length==0)
		{
			alert("请输入生效日期！");
			validFrom.focus();
			return false;
		}
		if(!isValidDate(vdf))
		{
			validFrom.focus();
			return false;
		}
		if(!checkDateRange(sid,vdf,greatOrEqual))
		{
			alert("生效日期应大于或等于签订日期！");
			validFrom.focus();
			return false;		
		}
		
		var vdt = validTo.value.trim();
		if(vdt.length==0)
		{
			alert("请输入截止日期！");
			validTo.focus();
			return false;
		}
		if(!isValidDate(vdt))
		{
			validTo.focus();
			return false;
		}
		if(!checkDateRange(vdf,vdt,greatThan))
		{
			alert("截止日期应大于生效日期！");
			validTo.focus();
			return false;		
		}		
		

		var ctt = content.value.trim();
		if(ctt.length==0)
		{
			alert("请输入主要内容！");
			//content.focus();
			return false;
		}

		var cpa = companya.value.trim();
		if(cpa.length==0)
		{
			alert("请输入甲方单位！");
			companya.focus();
			return false;
		}
		if(!isChineseCharacterAndEnglish(cpa))
		{
			alert("甲方单位由汉字、字母或数字组成！");
			companya.focus();
			return false;
		}	
		if(cpa.getByteLength()>100)
		{
			alert("甲方单位的长度为50个字以内！");
			companya.focus();
			return false;
		}
	
		
		var sga = signera.value.trim();
		if(sga.length==0)
		{
			alert("请输入甲方负责人！");
			signera.focus();
			return false;
		}
		if(!isChineseCharacterAndEnglish(sga))
		{
			alert("甲方负责人由汉字、字母或数字组成！");
			signera.focus();
			return false;
		}	
		if(sga.getByteLength()>20)
		{
			alert("甲方负责人的长度为10个字以内！");
			signera.focus();
			return false;
		}
		
		var cpb = companyb.value.trim();
		if(cpb.length==0)
		{
			alert("请输入乙方单位！");
			companyb.focus();
			return false;
		}
		if(!isChineseCharacterAndEnglish(cpb))
		{
			alert("乙方单位由汉字、字母或数字组成！");
			companyb.focus();
			return false;
		}	
		if(cpb.getByteLength()>100)
		{
			alert("乙方单位的长度为50个字以内！");
			companyb.focus();
			return false;
		}
	
		
		var sgb = signerb.value.trim();
		if(sgb.length==0)
		{
			alert("请输入乙方负责人！");
			signerb.focus();
			return false;
		}
		if(!isChineseCharacterAndEnglish(sgb))
		{
			alert("乙方负责人由汉字、字母或数字组成！");
			signerb.focus();
			return false;
		}	
		if(sgb.getByteLength()>20)
		{
			alert("乙方负责人的长度为10个字以内！");
			signerb.focus();
			return false;
		}
		
		var bt = document.getElementById("submitButton");
		bt.disabled=true;		
		return true;									
	}
	
	function isValidMoney(money)
	{
		var reg = /^[0-9]*\.?[0-9]{0,2}$/;
		
		var isMonney = false;
		
		if(reg.test(money))
			isMonney = true;
		return isMonney;
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

	function checkDateRange(BeginDate,EndDate,status)
	{
	    var strBegindate = BeginDate.substring(0,4)+BeginDate.substring(5,7)+BeginDate.substring(8,10);
	    var strEnddate = EndDate.substring(0,4)+EndDate.substring(5,7)+EndDate.substring(8,10);
	    
	    if(status=="greatOrEqual")
	    {
		    if(parseInt(strBegindate)>parseInt(strEnddate))
		    {
		       // alert( "起始日期不能大于结束日期！");
		        return false;
		    }
	    }
	    else
	    {
		    if(parseInt(strBegindate)>=parseInt(strEnddate))
		    {
		       // alert( "起始日期不能大于结束日期！");
		        return false;
		    }	    
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
