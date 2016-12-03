/**
  * 方法名：isInt
  * 输入参数：str  _输出类型：boolean
  * 方法说明：查测字符串是否为数字字符串(只适用于整数)
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
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
/**
  * 方法名：isMoneyFormat
  * 输入参数：MoneyObj,prefix,suffix,vCaption,flag  _输出类型：boolean
  * 方法说明：检查金额格式
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isMoneyFormat(MoneyObj,prefix,suffix,vCaption,flag)
{
    var objForm = eval(MoneyObj);
    if(objForm.value == null || objForm.value == "")
    {
    if(flag == false)
        {
          return true;
        }
        alert("'" + vCaption + "'的值不能空");
        objForm.focus();
        return false;
    }
    var iStart = 0;
    var iEnd  = 0;
    for(i = 0; i < objForm.value.length; i++)
    {
        if(objForm.value.charAt(i) == " ")
        {
         continue;
        }
        iStart = i;
        break;
    }
    for(i = objForm.value.length-1; i > iStart; i--)
    {
        if(objForm.value.charAt(i) == " ")
        {
          continue;
        }
        iEnd = i;
        break;
    }

    if((objForm.value.charAt(iStart) == '+') || (objForm.value.charAt(iStart) == '-'))
    {
        iStart = (iStart+1);
    }

    var iPoint = 0;
    var iOffSet = -1;
    for(i = iStart; i <= iEnd; i++)
    {
        if((objForm.value.charAt(i)<'0') || (objForm.value.charAt(i)>'9'))
        {
          if(objForm.value.charAt(i) != '.')
          {
            alert("'" + vCaption + "'的数值必须是数字和小数点");
            objForm.focus();
            return false;
          }
          iPoint = iPoint + 1;
          if(iPoint == 1)
              iOffSet = i;
        }
    }
    if(iPoint > 1)
    {
          alert("'" + vCaption + "'的数值是最多只能有一个小数点");
          objForm.focus();
          return false;
    }
    if(iPoint == 0)
    {
        if(((iEnd-iStart)+1)>prefix)
        {
          alert("'" + vCaption + "'的数值的整数部分超长\n"+"整数位数:"+prefix+"\n"+"小数位数长度:"+suffix);
          objForm.focus();
          return false;
        }
    }
    else
    {
       var pointindex = objForm.value.indexOf(".");
        if((pointindex-iStart)>prefix)
        {
          alert("'" + vCaption + "'的数值的整数部分超长\n"+"整数位数:"+prefix+"\n"+"小数位数长度:"+suffix);
          objForm.focus();
          return false;
        }
        if((iEnd-pointindex)>suffix)
        {
          alert("'" + vCaption + "'的数值的小数部分超长\n"+"整数位数:"+prefix+"\n"+"小数位数长度:"+suffix);
          objForm.focus();
          return false;
        }
    }
    var iZero = -1;
    for(i = iStart; i <= iEnd; i++)
    {
        if(objForm.value.charAt(i) != '0' && objForm.value.charAt(i) != '.' )
        {
           iZero = 1;
           break;
        }
    }
    return true;
}

/**
  * 方法名：isLeapYear
  * 输入参数：strYear  _输出类型：boolean
  * 方法说明：检测是否为闰年
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isLeapYear(strYear)
{
	  if (!isInt(strYear)){
	  	  return false;
	  }
    if(((strYear % 4 == 0) && (strYear % 100 != 0)) || (strYear % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}

/**
  * 方法名：isIPSegment
  * 输入参数：ip  _输出类型：boolean
  * 方法说明：检查单个IP地址（段）的合法性
  * 注意：//4个段中，每个段可以是"*"，可以是"2-30"的形式
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isIPSegment(ip) {
    var ipseg=ip.split('.');
    if (4!=ipseg.length) {
        return false;
    }
//  alert('four segment test passed')
    for (var i=0;i<ipseg.length;i++) {
        if ('*'!=ipseg[i]) {
//          alert('not * seg');
            if (ipseg[i].indexOf('-')<0) {
//                alert('not a range seg');
                if (isNaN(ipseg[i])||ipseg[i]<0||ipseg[i]>255) {
//                  alert('not number or over range');
                    return false;
                }
            }
            else {
//              alert('a range seg:'+ipseg[i]);
            var sects=ipseg[i].split('-');
            if (sects.length!=2)
            {
//              alert('invalid range');
                return false;
            }
//          alert(sects);
            for (var j=0;j<sects.length;j++) {
//          alert(new Number(sects[j]));
                if (isNaN(new Number(sects[j]))) {
                    return false;
                }
                var sect=parseInt(sects[j]);
                if (isNaN(sect)||sect<0||sect>255) {
                    return false;
                }
            }
            }
        }
    }
    return true;
}

/**
  * 方法名：checkValidEmail
  * 输入参数：vName,vCaption  _输出类型：boolean
  * 方法说明：检查输入email格式是否合法
  * 注意：//方法过于简单，有待于进一步进行处理
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function checkValidEmail(vName,vCaption)
{
    var objForm = eval(vName);
    if ((objForm.value.indexOf("@"))<=0 || (objForm.value.indexOf("."))<=0)
    {
        alert("'" + vCaption + "'的值不合法!");
        objForm.focus();
        return false;
    }
    return true;
}

/**
  * 方法名：checkIDCard
  * 输入参数：value,desc,isMust  _输出类型：boolean
  * 方法说明：判断是否是正确的身份证号码
  * 注意：//方法中只对身份证的位数做出相应的处理。当isMust为0时，即对身份证号不作要求，但只能为空时才能通过
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function checkIDCard(value,desc,isMust)
{
  if(isMust == "0")
  {
    if(value.length == 0 || value.length == 18 || value.length == 15)
    {
      return true;
    }
    else
    {
      alert(desc);
      return false;
    }
  }
  else
  {
    if(value.length == 18 || value.length == 15)
    {
      return true;
    }
    else
    {
      alert(desc);
      return false;
    }
  }
  return true;
}

/**
  * 方法名：isValidMobileNo
  * 输入参数：strMobileNo  _输出类型：boolean
  * 方法说明：检测手机号码是否合法
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isValidMobileNo(strMobileNo) {
    var networkSegment;
    if (strMobileNo == "") {
        alert("手机号不能为空!");
        return false;
    }
    if (!isInt(strMobileNo)) {
        alert("手机号必须为数字！");
        return false;
    }
    networkSegment = parseInt(strMobileNo.substr(0, 3));
    if (networkSegment < 134 || networkSegment > 139) {
        alert("手机号不正确,网号必须在134~139之间！");
        return false;
    }
    if (strMobileNo.length != 11) {
        alert("手机号必须为11位！");
        return false;
    }
    return true;
}

/**
  * 方法名：isValidTime
  * 输入参数：strTime  _输出类型：boolean
  * 方法说明：检测时间是否合法(只处理格式为HH:MM:SS的时间)
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isValidTime(strTime) {
    var strSplit;
    if(strTime.length != 8)
    {
        window.alert("时间长度不对，请正确输入时间：HH:MM:SS\n\n其中：HH(0-23)，MM(0-59)，SS(0-59)！");
        return false;
    }
    intHour = parseInt(strTime.substr(0, 2), 10);
    if(intHour < 0 || intHour > 23)
    {
        window.alert("时间不对，小时范围：0 ~ 23");
        return false;
    }
    strSplit = strTime.substr(2, 1);
    if (strSplit != ":") {
        alert("时间分隔符应为':'！");
        return false;
    }
    intMin = parseInt(strTime.substr(3, 2), 10);
    if(intMin < 0 || intMin > 59)
    {
        window.alert("时间不对，分钟范围：0 ~ 59");
        return false;
    }
    strSplit = strTime.substr(5, 1);
    if (strSplit != ":") {
        alert("时间分隔符应为':'！");
        return false;
    }
    intSec = parseInt(strTime.substr(6, 2), 10);
    if(intSec < 0 || intSec > 59)
    {
        window.alert("时间不对，秒范围：0 ~ 59");
        return false;
    }
    return true;
}

/**
  * 方法名：checkMoney
  * 输入参数：strmoney,maxlength  _输出类型：boolean
  * 方法说明：金额越界控制  精确2位小数
  * 注意：//长度控制在于，限制小数点后的位数按制。MaxValue保留了两位有效小数
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function checkMoney(strmoney,maxlength){
  var floatmoney = parseFloat(strmoney);
  var maxValue = 21474836.47;
  if (floatmoney>maxValue){
    alert("输入的数字太大!不能大于"+maxValue);
    return false;
  }
  floatmoney = floatmoney*100;
  strmoney = ""+floatmoney;
  if (strmoney.length>maxlength){
    alert("某些金额输入框长度超长,请检查");
    return false;
  }
  return true;
}

/**
  * 方法名：isValidPostCode
  * 输入参数：strPostCode  _输出类型：boolean
  * 方法说明：检测邮编是否合法
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isValidPostCode(strPostCode) {
    if (strPostCode.length != 6) {
        alert("邮编长度必须为六位!");
        return false;
    }
    if (!isInt(strPostCode)) {
        alert("邮编必须为数字!");
        return false;
    }
    return true;
}

/**
  * 方法名：compareMonth
  * 输入参数：vBeginMonth, vEndMonth  _输出类型：boolean
  * 方法说明：月份比较
  * 注意：//入口参数必须都是标准的年月格式(YYYYMM)
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function compareMonth(vBeginMonth, vEndMonth)
{
    if(!isValidYearMonth(vBeginMonth.substr(0,4)+"/"+vBeginMonth.substr(4,2)) || !isValidYearMonth(vEndMonth.substr(0,4)+"/"+vEndMonth.substr(4,2)))
    {
        return false;
    }
    return (parseInt(vBeginMonth) < parseInt(vEndMonth))
}

/**
  * 方法名：checkTextAreaCaption
  * 输入参数：value,vCaption,maxlength  _输出类型：boolean
  * 方法说明：检查文本的长度(文本中一个汉字长度计为 2)
  * 注意：//一个汉字长度按2计算，主要用户对入数据库的信息的检查处理上
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function checkTextAreaCaption(value,vCaption,maxlength){
  if (value.replace(/[^\x00-\xff]/g, "**").length>maxlength){
    alert("请注意:"+vCaption+"的长度不要大于 "+maxlength+"个中文字符！");
    return false;
  }
  return true;
}

/**
  * 方法名：checkTextArea
  * 输入参数：value,maxlength  _输出类型：boolean
  * 方法说明：检查一字符串的长度是否超出
  * 注意：//一个汉字的长度按1计算
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function checkTextArea(value,maxlength){
  if (value.length>maxlength){
    alert("请注意:文本域的长度不要大于 "+maxlength+"个中文字符！");
    return false;
  }
  return true;
}

/**
  * 方法名：isNotNull
  * 输入参数：value  _输出类型：boolean
  * 方法说明：检查值是否为空
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isNotNull(value)
{
    if(value != null && value != "")
    {
        return true;
    }
    return false;
}

/**
  * 方法名：isFloat
  * 输入参数：str  _输出类型：boolean
  * 方法说明：判断是否是小数类型/或者是整数类型/两个都支持
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isFloat(str){
    if (str == ""||str.length==0) {
        alert("请检查输入的数字的长度是否为零?!");
        return false;
    }
    if (str == "-"){
    	  alert("不可只输入负号!");
    	  return false;
    }
    var pointnumber = 0;
    for(var i = 0; i < str.length; ++i) {
        if (str.charAt(i)=="."){
          pointnumber=pointnumber+1;
        }else if(((str.charAt(i)<'0') || (str.charAt(i)>'9'))&&(str.charAt(i) !='-')) {
          alert("不是数字!");
          return false;
        }
    }
    if (pointnumber>1){
      alert("小数点太多!");
      return false;
    }
    return true;
}

/**
  * 方法名：checkChinese
  * 输入参数：value  _输出类型：boolean
  * 方法说明：判断是否中文字符
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function checkChinese(value){
  if(value!=''&&/[^\x00-\xff]/g.test(value)){
    alert('请使用英文!');
    return false;
  }
  return true;
}
function checkChineseE(value){
  if(value!=''&&/[^\x00-\xff]/g.test(value)){
    alert('only include english.');
    return false;
  }
  return true;
}

/**
  * 方法名：isValidNumber
  * 输入参数：str  _输出类型：boolean
  * 方法说明：查测字符串是否为合法的数据字符串(适用于整数和浮点数不适用于科学计数法表示的数据)
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isValidNumber(str)
{
    return !isNaN(str);
}

/**
  * 方法名：isValidDate
  * 输入参数：strDate  _输出类型：boolean
  * 方法说明：检测日期是否合法(只处理格式为YYYY/MM/DD的日期)
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isValidDate(strDate) {
    var intYear;
    var intMonth;
    var intDay;
    var maxDay;
    var strSplit;
    if (strDate.length != 10) {
        alert("请输入正确的日期，格式为: YYYY/MM/DD，例如: '2000/05/15'！");
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
    if (strSplit != "/") {
        alert("日期分隔符应为/！");
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
    if (strSplit != "/") {
        alert("日期分隔符应为/！");
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

/**
  * 方法名：checkDateRange
  * 输入参数：BeginDate,EndDate  _输出类型：boolean
  * 方法说明：校验日期范围
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function checkDateRange(BeginDate,EndDate)
{
	  if (!isValidDate(BeginDate)){
	  	  alert("起始日期错误");
	  	  return false;
	  }
	  if (!isValidDate(EndDate)){
	  	  alert("结束日期错误");
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

/**
  * 方法名：checkDateRangeCaption
  * 输入参数：BeginDate,BeginCaption,EndDate,EndCaption  _输出类型：boolean
  * 方法说明：校验日期范围，其中对于日期错误有可改动的提示信息
  * 注意：对于不符合条件的日期有了加入提示的说明文字
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function checkDateRangeCaption(BeginDate,BeginCaption,EndDate,EndCaption)
{
	  if (!isValidDate(BeginDate)){
	  	  alert("起始日期错误");
	  	  return false;
	  }
	  if (!isValidDate(EndDate)){
	  	  alert("结束日期错误");
	  	  return false;	  	 
	  }
    var strBegindate = BeginDate.substring(0,4)+BeginDate.substring(5,7)+BeginDate.substring(8,10);
    var strEnddate = EndDate.substring(0,4)+EndDate.substring(5,7)+EndDate.substring(8,10);
    if(parseInt(strBegindate)>parseInt(strEnddate))
    {
        alert(BeginCaption +"不能大于"+EndCaption +"！");
        return false;
    }
    return true;
}

/**
  * 方法名：compareDate
  * 输入参数：startDate, endDate  _输出类型：boolean
  * 方法说明：比较两个日期的大小
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function compareDate(startDate, endDate) {
    return (Date.parse(startDate) > Date.parse(endDate));
}

/**
  * 方法名：dateCompare
  * 输入参数：startDate, endDate  _输出类型：boolean
  * 方法说明：比较两个日期的大小
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function dateCompare(startDate, endDate) {
    var strBegindate = startDate.substring(0,4)+startDate.substring(5,7)+startDate.substring(8,10);
    var strEnddate = endDate.substring(0,4)+endDate.substring(5,7)+endDate.substring(8,10);
    return parseInt(strBegindate)>parseInt(strEnddate);
}

/**
  * 方法名：isValidYearMonth
  * 输入参数：strDate  _输出类型：boolean
  * 方法说明：检测年月是否合法
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isValidYearMonth(strDate) {
var intYear;
var intMonth;
if (strDate.length != 7) {
alert("请输入七位的年月,如:'2003/01'！");
return false;
}
if (!isInt(strDate.substring(0,4)+strDate.substring(5,7))) {
alert("年月中包含有非数字字符！");
return false;
}
intYear = parseInt(strDate.substr(0, 4), 10);
if(intYear < 1901 || intYear > 2099)
{
alert("输入的年份应该为(1901 ~ 2099)！");
return false;
}
intMonth = parseInt(strDate.substr(5, 2), 10);
if(intMonth < 1 || intMonth > 12)
{
alert("输入的月份应该为(01 ~ 12)！");
return false;
}
return true;
}

/**
  * 方法名：isValidDateTime
  * 输入参数：strDateTime  _输出类型：boolean
  * 方法说明：检测日期时间是否合法(YYYY/MM/DD HH:MM:SS)
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isValidDateTime(strDateTime) {
    var strSplit;
    if (strDateTime.length != 19) {
        alert("请输入格式如下的日期：YYYY/MM/DD HH:MM:SS!");
        return false;
    }
    if(!isValidDate(strDateTime.substr(0, 10))) {
        return false;
    }
    strSplit = strDateTime.substr(10, 1)
    if (strSplit != " ") {
        alert("日期格式不对,应为：YYYY/MM/DD HH:MM:SS!");
        return false;
    }
    if (!isValidTime(strDateTime.substr(11, 8))) {
        return false;
    }
    return true;
}

/**
  * 方法名：isPNumber
  * 输入参数：strInput  _输出类型：boolean
  * 方法说明：判断是否是正整数
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isPNumber(strInput)
{
  for(var i = 0; i< strInput.length; i++)
  {
    var oneChar = strInput.charAt(i)
    if(oneChar == '.' || oneChar == '-' || oneChar < '0' || oneChar > '9')
    {
      return false
    }
  }
  return true
}
/**
  * 方法名：lawlessStr
  * 输入参数：subStr  _输出类型：boolean
  * 方法说明：判断是否含有非法的字符
  * 版本信息：2006-03-13 _BY_Liuxu
  */
function lawlessStr(subStr){
	subStr=subStr.toLowerCase();
	var resultNum=-1;
	var arrayObj = new Array();
	arrayObj[0]="<br>";
	arrayObj[1]="<p>";
	arrayObj[2]="<input";
	arrayObj[3]="<table";
	arrayObj[4]="<tr";
	arrayObj[5]="<td";
	for(var i=0;i<arrayObj.length;i++)
	{
		resultNum=subStr.indexOf(arrayObj[i]);
		if(resultNum!=-1)
		{
			return true;
		}
	}
	return false;
}

/**
  * 方法名：isValidUrl
  * 
  * 输入参数:url:要验证的URL
  * 输出类型：boolean
  * 方法说明：判断是否是合法的url
  * 条件:必须以http:// 或 https:// 开头, 端口号必须为数字
  * 版本信息：2006-08-01 _BY_Yangyueshan
  */ 
function isValidUrl(url){
	//var urlpatern =/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
    var urlpatern =/^https?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
	return urlpatern.test(url);
}