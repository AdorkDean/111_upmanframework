
/** 
  *生成所有的产品列 
  */
function productListAllFun11(){
	var p = document.getElementById("productListAll").innerHTML;

	var pr = p.split("@@@@");
	//alert("length:"+pr.length);
	
	var type = document.getElementById("bing_type_id");
	var product = document.getElementById("productId");
	product.length = 0;
	var length = pr.length;
	for(i=0;i<length;i++){
		var str = pr[i].split("@@@");
		var text = str[1]+" ("+str[2]+")";
		var opt = new Option(text,str[0]);
		product.options.add(opt);
	}
	
}

/** 
  * 生成套餐的产品列
  */
function productListAllFun(){

	var p = document.getElementById("productListBind").innerHTML;

	var pr = p.split("@@@@");
	//alert("length:"+pr.length);
	
	var type = document.getElementById("bing_type_id");
	var product = document.getElementById("productId");
	product.length = 0;
	var length = pr.length;
	for(i=0;i<length;i++){
		var str = pr[i].split("@@@");
		var text = str[1]+" ("+str[2]+")";
		var opt = new Option(text,str[0]);
		product.options.add(opt);
	}

}

function changeM(){

	var bind_type = document.getElementById("bing_type_id").value ;
	
	if(bind_type == 1){ //同期
		document.getElementById("actpart").style.display = '';
		document.getElementById("part").style.display = 'none';
		document.getElementById("ratePart").style.display = 'none';	
		productListAllFun11();	
	}
	if(bind_type == 2){ //分期
		document.getElementById("actpart").style.display = '';
		document.getElementById("part").style.display = '' ;
		document.getElementById("ratePart").style.display = 'none';
		productListAllFun11();
	}
	if(bind_type == 3){ //套餐
		document.getElementById("part").style.display = 'none';
		document.getElementById("actpart").style.display = 'none';
		document.getElementById("ratePart").style.display = '';
		productListAllFun();
	}
	
}

	//去除空格
	function strTrim(str){
			var strTemp = str.replace(/(^\s*)|(\s*$)/g, "") ;
			return strTemp ;
	}

function validateNum(){
	
	var p = document.getElementById("productListAll").innerHTML;
	var pr = p.split("@@@@");
	//alert("length:"+pr.length);
	
	var type = document.getElementById("bing_type_id");
	var product = document.getElementById("bindProductId");
	var index = product.selectedIndex;
	var opt = pr[index].split("@@@");
	if(opt[3]=="1"){
		var bindNum = document.getElementById("bindNum").value.replace(/(^\s*)|(\s*$)/g, "") ;
		if(bindNum != 1){
			alert("您选择的“绑定产品”是固定位广告，固定位广告绑定数量只能为1！");
			return false;
		}		
	}else if(opt[3]=="6"){
		alert("您选择的“绑定产品”是套餐。套餐不能绑定套餐！");
		return false;
	}	
	return true;
}

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
//验证是否为纯数字
function isNumber(str){
    str = strTrim(str);
	var  numberRegExp =/^[0-9]+$/ ;
	var match = numberRegExp.test(str);
	if(!match){
		return false; //非纯数字	
	}else{
		return true ; //纯数字
	}
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
	
//日期的检测	
	function checkDate(){
		var beginDate = document.getElementById("begindateId").value.replace(/(^\s*)|(\s*$)/g, "") ;
		var endDate = document.getElementById("enddateId").value.replace(/(^\s*)|(\s*$)/g, "") ;
		
		var promotionType = document.getElementById("bing_type_id").value ;
		
		if(promotionType != 3){
			if(beginDate != "" && beginDate.length != 0){
				if(endDate != "" && endDate.length != 0){
					if(!checkDateRange(beginDate,endDate)){
						return false ;
					}
				}else{
					alert("请选择活动终止日期");
					return false ;
				}
			}else{
				alert("请选择活动起始日期");
				return false ;
			}
		}
		
		if(promotionType == "2"){
			var bindBeginDate = document.getElementById("bindbegindateId").value.replace(/(^\s*)|(\s*$)/g, "") ;
			var bindEndDate = document.getElementById("bindenddateId").value.replace(/(^\s*)|(\s*$)/g, "") ;
			if(bindBeginDate != "" && bindBeginDate.length != 0){
				if(bindEndDate != "" && bindEndDate.length != 0){
					if(!checkDateRange(bindBeginDate,bindEndDate)){
						return false ;
					}
				}else{
					alert("请选择分期绑定终止日期");
					return false ;
				}
			}else{
				alert("请选择分期绑定起始日期");
				return false ;
			}
		}
				
		
		return true ;
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
	
	function promotionDataCheck(){
	
		var bindNum = document.getElementById("bindNumId").value.replace(/(^\s*)|(\s*$)/g, "");
		var promotionDesc = document.getElementById("promotionDescId").value ;
		var brate = document.getElementById("rate").value.replace(/(^\s*)|(\s*$)/g, ""); 
		var bind_type = document.getElementById("bing_type_id").value.replace(/(^\s*)|(\s*$)/g, "") ;
		
		var i = parseInt(bindNum) ;
		if(bindNum == "" || bindNum.length == 0){
			alert("请输入数量");
			document.getElementById("bindNumId").focus();
			return false;
		}else{
			if(isNumber(bindNum)){
				if(i < 1){
					alert("数量不能少于1")
					document.getElementById("bindNumId").focus();
					return false;
				}
			}else{
				alert("绑定数量必须是数字")
				document.getElementById("bindNumId").focus();
				return false;
			}
			
		}
		if(bind_type == "3"){
			if(brate==null || brate==""){
				alert("绑定产品周期不能为空");
				document.getElementById("rate").focus();
				return false;
			}else{
				
				if(isNumber(brate)){
					i = parseInt(brate) ;
					if(i < 1){
						alert("绑定产品周期不能少于1")
						document.getElementById("rate").focus();
						return false;
					}
				}else{
					alert("绑定产品周期必须是数字")
					document.getElementById("rate").focus();
					return false;
				}
			}
		}
		
		if(strTrim(promotionDesc) == '' || strTrim(promotionDesc).length == 0){
			alert("请输入内容");
			document.getElementById("promotionDescId").focus();
			return false ;
		}else{
//			if(!isChineseCharacterAndEnglish(promotionDesc)){
//				alert("请核实输入的内容");
//				document.getElementById("promotionDescId").focus();
//				return false ;
//			}else{
				if(promotionDesc.length > 400){
					alert("活动内容需要400个字符以内");
					document.getElementById("promotionDescId").focus();
					return false ;
				}
//			}
		}
		if(!validateNum())
			return false;
		changeProductNo();
		if(!checkDate()){
			return false ;
		}
		return true ;
	}
	
	function changeProductNo(){
		/*
		<input type="hidden" name="productNoAndName" id="productNoAndName" />
	  	<input type="hidden" name="bindProductNoAndName" id="bindProductNoAndName" />
		*/
		var v_s = document.getElementById("bindProductId");
		var index = v_s.selectedIndex;
		var opt = v_s.options[index];
		var v_d = document.getElementById("bindProductNoAndName");
		v_d.value = opt.text;

		
		v_s = document.getElementById("productId");
		index = v_s.selectedIndex;
		opt = v_s.options[index];	
		v_d = document.getElementById("productNoAndName");
		v_d.value = opt.text;
		
	}