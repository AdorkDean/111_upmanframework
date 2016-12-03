function validateDate(strDate) {
	//alert("validateDate");
    var intYear;
    var intMonth;
    var intDay;
    var maxDay;
    var strSplit;
    if (strDate.length != 10) {
        alert("请输入正确的日期,格式为: YYYY-MM-DD 例如:'2007-01-01'");
        return false;
    }
    if (!isInt(strDate.substr(0, 4))) {
        alert("年份中包含有非法的数字字符!");
        return false;
    }
    intYear = parseInt(strDate.substr(0, 4), 10);
    if(intYear < 1901 || intYear > 2099)
    {
        alert("输入的年份应该为 (1901 ~ 2099)!");
        return false;
    }
    strSplit = strDate.substr(4, 1);
    if (strSplit != "-") {
        alert("日期分割符号应为 -！");
        return false;
    }
    if (!isInt(strDate.substr(5, 2))) {
        alert("月份中包含有非数字字符！");
        return false;
    }
    intMonth = parseInt(strDate.substr(5, 2), 10);
    if(intMonth < 1 || intMonth > 12)
    {
        alert("输入的月份应该为 (01 ~ 12)！");
        return false;
    }
    strSplit = strDate.substr(7, 1);
    if (strSplit != "-") {
        alert("日期分割符应为-！");
        return false;
    }
    if (!isInt(strDate.substr(8, 2))) {
        alert("日期中包含有非数字字符！");
        return false;
    }
    if (strDate.substr(8, 2) == "00") {
        alert("输入的日期不能为 00 ");
        return false;
    }
    /*
    intDay = parseInt(strDate.substr(8, 2),10);
    maxDay = getDaysOfMonth(intYear, intMonth);
    if(intDay < 1 || intDay > maxDay)
    {
        alert("输入的日期应为 (01 ~ " + maxDay +")！");
        return false;
    }
    */
    return true;
}
function validateDateRange(BeginDate,EndDate)
{		
	  if (!validateDate(BeginDate)){	  	  
	  	  form1.begindate.focus();
	  	  return false;
	  }
	  if (!validateDate(EndDate)){
	  		form1.enddate.focus();
	  	  return false;	  	 
	  }
    var strBegindate = BeginDate.substring(0,4)+BeginDate.substring(5,7)+BeginDate.substring(8,10);
    var strEnddate = EndDate.substring(0,4)+EndDate.substring(5,7)+EndDate.substring(8,10);
    if(parseInt(strBegindate)>parseInt(strEnddate))
    {
        alert("起始日期不能大于结束日期！");
        return false;
    }
    return true;
}
/*
date 大于当前日期时返回true
*/
function beforeNow(date){
	var now = new Date();   
   	var year = now.getFullYear();
   	var month = now.getMonth() +1;
   	var day = now.getDate();
   	if(month <10){
   		month = '0' + month;
   	}
   	if(day < 10 ){
   		day = '0' + day;
   	}   
   	nowStr = year + month  + day;
   	var dateStr = date.substring(0,4)+date.substring(5,7)+date.substring(8,10);  
   	return parseInt(dateStr)>parseInt(nowStr);
}
//脚本提示信息
var OrderAlert = {
		contentLen :"广告文本的长度不能大于50个字符,一个中文占两个字符长度",
		contentLen_kw :"广告文本的长度不能大于70个字符,一个中文占两个字符长度",
		urlLen:"链接地址的长度不能大于200个字符,一个中文占两个字符长度",
		keywordLen:"关键词的长度不能大于40个字符,一个中文占两个字符长度",
		subjectLen:"广告标题的长度不能大于25个字符,一个中文占两个字符长度",
		validUrl:"请输入正确的链接地址,例如 :http://www.xxx.com",
		beginDateNull:"开始时间不能为空",
		endDateNull:"结束时间不能为空",
		dateOrderError:"开始日期必须大于当前日期",
		contentNull:"广告文本不能为空",
		urlNull:"链接地址不能为空",
		keywordNull:"关键词不能为空",
		subjectNull:"广告标题不能为空",
		noChinese:"关键词不能为中文",
		wrongDateFormat:"错误的日期格式",
		afterNow:"开始日期必须大于当前日期",
		noObject:"没有选定操作对象",
		rawData:"促销活动含有未完成信息，请补充或删除选中的促销活动",
		contentLength:50,
		contentLength_kw:70,
		urlLength:200,
		subjectLength:25,
		keywordLength:40		
	}
var file2 = '<script language="JavaScript" src="validate.js"><\/script>'; 
document.write(file2);
var file3 = '<script language="JavaScript" src="util.js"><\/script>'; 
document.write(file3);