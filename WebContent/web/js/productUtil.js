/**
  * author:	pablo
  * Time:	2007-03-06	17:36
  */

/**
  * 方法名：openwindow
  * 输入参数：url, winName, width, height
  * 方法说明：将淡出的窗口居中
  * 测试环境：IE6，IE7，Opera9。01，Netscape，FireFox2.002
  *	测试网页：on_center.html
  */
function openwindow( url, winName, width, height) 
{
	xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
	xposition = (screen.width - width) / 2;
	yposition = (screen.height - height) / 2;
	}
	theproperty= "width=" + width + "," 
	+ "height=" + height + "," 
	+ "location=0," 
	+ "menubar=0,"
	+ "resizable=1,"
	+ "scrollbars=1,"
	+ "status=0," 
	+ "titlebar=0,"
	+ "toolbar=0,"
	+ "hotkeys=0,"
	+ "resizable=no,"
	+ "screenx=" + xposition + "," //仅适用于Netscape
	+ "screeny=" + yposition + "," //仅适用于Netscape
	+ "left=" + xposition + "," //IE
	+ "top=" + yposition; //IE 
	window.open( url,winName,theproperty );
}

/*
 *elementId:	select对象的ID
 *array:		已经有值的数组
 */
function initSelectOption(elementId,array){
	var obj = document.getElementById(elementId);
	obj.options.length = 0;
	for (var i=0;i <array.length; i++)
	{
		obj.options[obj.options.length] = new Option(array[i][0], array[i][1]);
	}
}

/*
 *parentId:		select对象的ID(上一级)
 *childId:		select对象的ID(下一级)
 *parentArray:	select对象(上一级)对应数组（即初始化数组）
 *childArray:	select对象(下一级)对应数组（即初始化数组）
 *relationArray:上下级select对象的对应关系数组
 * 测试网页：SelectDownTest.html
 */
function changeOptionValue(parentId,childId,parentArray,childArray,relationArray)
{
	var parentObj = document.getElementById(parentId);
	var childObj = document.getElementById(childId);
	var value = parentObj.options[parentObj.selectedIndex].value;
	childObj.options.length = 0;
	for (var i=0;i <relationArray.length; i++)
	{
		if (relationArray[i][0] == value)
		{
			for(var j = 0; j < childArray.length; j++){
				if(childArray[j][1] == relationArray[i][1])
				childObj.options[childObj.options.length] = new Option(childArray[j][0], childArray[j][1]);
			}
		}
	}
	updateSelect(childId,'-1');
}

/*
 *更新级联的一，二，三级
 */
function changeOptionThreeLevelValue(parentParentId,parentId,childId,parentArray,childArray,relationArray)
{
	var parentParentObj = document.getElementById(parentParentId);
	var parentObj = document.getElementById(parentId);
	var childObj = document.getElementById(childId);
	var parentParentValue = parentParentObj.options[parentParentObj.selectedIndex].value;
	var parentValue = parentObj.options[parentObj.selectedIndex].value;	
	var value = parentObj.options[parentObj.selectedIndex].value;
	childObj.options.length = 0;

	if(parentParentValue != -1 && parentValue == -1 ){
		childObj.options[0] = new Option('全部','-1');
		for (var index=0;index <parentObj.length; index++){
			value = parentObj.options[index].value;
			for (var i=0;i <relationArray.length; i++)
			{
				if (relationArray[i][0] == value && value != -1)
				{
					for(var j = 0; j < childArray.length; j++){
						if(childArray[j][1] == relationArray[i][1] && childArray[j][1] != -1)
						childObj.options[childObj.options.length] = new Option(childArray[j][0], childArray[j][1]);
					}
				}
			}
		}
	}
	else{
		for (var i=0;i <relationArray.length; i++)
		{
			if (relationArray[i][0] == value)
			{
				for(var j = 0; j < childArray.length; j++){
					if(childArray[j][1] == relationArray[i][1])
					childObj.options[childObj.options.length] = new Option(childArray[j][0], childArray[j][1]);
				}
			}
		}
	}
	
	updateSelect(childId,'-1');
}

/*
 *elementId:	select对象的ID
 *value:		select的值
 */
function updateSelect(elementId, value){
	var obj = document.getElementById(elementId);
	for (var index=0;index <obj.length; index++)
	{
		var tempValue = obj.options[index].value;
		if (tempValue == value)
		{
      		//obj.selectedIndex=index;
			obj.options[index].selected = true;
      		break;			
		}
	}
}

/*
 *elementId:	select对象的ID
 *value:		select的值
 */
function getSelectInnerHTML(elementId){
	var obj = document.getElementById(elementId);
	return obj.options[obj.selectedIndex].innerHTML;
}

// 去掉两边的空格
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

// 根据id将一个Input对象的值赋给另一个Input对象
function setEleValueForOneToAnthor(idOne, idAnthor){
	var obj = document.getElementById(idOne);
	var value = obj.options[obj.selectedIndex].innerHTML;
	document.getElementById(idAnthor).value = value;
}

function showMsg(eleId){
	alert(document.getElementById(eleId).value);
}

function showNullMsg(msg){
	alert(msg + "不能为空");
}
function showCharOrNumMsg(msg){
	alert(msg + "不合法只能是字母或数字组成");
}
function showDCharOrNumMsg(msg){
	alert(msg + "不合法只能是大写字母和数字组成");
}

function getValue(id){
	return document.getElementById(id).value.trim();
}

function setEleValueById(id,value){
	document.getElementById(id).value=value;
}

function setEleFocus(id){
	document.getElementById(id).focus();
}

// 检测是否为数字
function isInts(str) 
{
    if (str == "")
    {
      	return false;
    }
    var r = /^[0-9]+$/;
    return r.test(str);
}

function Check( reg, str )
{
if( reg.test( str ) )
{
return true;
}
return false;
}

// 检测有value属性的对象的value值是否为空
function checkObjValueNull(obj,str){
	var value = obj.value.trim();
	if(value.length == 0){
		alert(str + "不能为空");
		return;
	}
}

// 检测Input值是否为空
function checkInputValue(id){
	var value =  document.getElementById(id).value.trim();
	if(value != "")
		return true;
	else
		return false;
}

// 大写字母和数字
function checkDCharAndNum(str)
{
	var reg = /^[A-Z0-9]+$/;
	return Check( reg, str );
}

// 字母或数字
function checkCharOrNum( str )
{
var reg = /^\w+$/;
return Check( reg, str );
}

// 是否是非负整数
function isPNum( str )
{
	var reg = /^[1-9]\d*|0$/;
	return Check( reg, str );
}

// Email
function checkEmail( str )
{
var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
return Check( reg, str );
} 

function setHostName(id1_from,id1_to,id2_from,id2_to){
setEleValueForOneToAnthor(id1_from,id1_to);
setEleValueForOneToAnthor(id2_from,id2_to);
}

function checkInput(id,nameDes){
	if(!checkInputValue(id)){
		showNullMsg(nameDes);
		document.getElementById(id).focus();
		return false;
	}
	return true;
}

function chooseAll(cb) 
{ 
	var cb = document.getElementsByName(cb);
	for(var i = 0;i < cb.length;i++)
	{
		cb[i].checked = true;
	}
}

function unChooseAll(cb) 
{
	var cb = document.getElementsByName(cb);
	for(var i = 0;i < cb.length;i++)
	{
		cb[i].checked = false;
	}
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

function changeCB(obj,cb){
	var chooseFlag = obj.checked;
	if(chooseFlag){
		chooseAll(cb);
	}else{
		unChooseAll(cb);
	}	
}

function submitFrm(frmId){
	document.getElementById(frmId).submit();
}

function checkForDelChecks(deleteId){
	var flag = true ;
	var idObjArr = document.getElementsByName(deleteId);
	var idStr = "" ;
	for(var i = 0 ; i<idObjArr.length ; i ++){
		if(idObjArr[i].checked){
			idStr += idObjArr[i].value+"/";
		}
	}
	var idArr = idStr.split("/");
	if(idArr == "" || idArr.length == 0 ){
		flag = false ;
		alert("请选择要删除的选项!");
	}
	return flag ;
}

/*
���������������������������������������validate.js���������������������������������������������js���������������
function isValidUrl(url){
	//var urlpatern =/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
   var urlpatern =/^https?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
	return urlpatern.test(url);
}
*/

function isValidUrl(url){
	var re = /^((http|https):\/\/){0,1}(([a-zA-Z0-9_-]|((\.){0,1}))+)(:[1-9][0-9]*)?(\/[^\/]+)*\/?$/;
	
	var array = url.substring(0,4);
	if(array.toLowerCase()!="http"){
		return false;
	}else{
		var u = url.substring(4,url.length);
		var ch = url.charAt(4); 

		if(ch=='s' || ch=='S'){
			u = url.substring(5,url.length);
			url="https"+u;
		}else{
			url=array.toLowerCase()+u;
		}
	}

	return re.test(url);
}

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

function checkIsChinese(value){
  if(value!=''&&/[^\x00-\xff]/g.test(value)){
    return true;
  }
  return false;
}


/**日期校验Begin**/
function checkCommonDate(beginDateId,beginDateName,endDateId,endDateName){
	var objBegin = document.getElementById(beginDateId);
	var objEnd = document.getElementById(endDateId);
	var strBegin = objBegin.value;
	var strEnd = objEnd.value;
	
	if(strBegin.trim() != "" && !isValidDate(strBegin,beginDateName)){
		objBegin.focus();
		return false;
	}
	
	if(strEnd.trim() != "" && !isValidDate(strEnd,endDateName)){
		objEnd.focus();
		return false;
	}
	
	if( strBegin.trim() != "" && strEnd.trim() != "" ){
		if(!checkDateRange(strBegin,strEnd,beginDateName,endDateName)){
			objBegin.focus();
			return false;
		}
	}
	
	return true;
}  
  
function checkFourDate(beginDateId,beginDateName,endDateId,endDateName,strActBegin,actBeginName,strActEnd,actEndName){
	var objBegin = document.getElementById(beginDateId);
	var objEnd = document.getElementById(endDateId);
	var strBegin = objBegin.value;
	var strEnd = objEnd.value;
	
	if(strBegin.trim() != "" && !isValidDate(strBegin,beginDateName)){
		objBegin.focus();
		return false;
	}
	
	if(strEnd.trim() != "" && !isValidDate(strEnd,endDateName)){
		objEnd.focus();
		return false;
	}
	
	if( strBegin.trim() != "" && strEnd.trim() != "" ){
		if(!checkDateRange(strBegin,strEnd,beginDateName,endDateName)){
			objBegin.focus();
			return false;
		}
		
		if(!checkDateRange(strActBegin,strBegin,actBeginName,beginDateName)){
			objBegin.focus();
			return false;
		}
		
		if(!checkDateRange(strEnd,strActEnd,endDateName,actEndName)){
			objEnd.focus();
			return false;
		}
	}
	
	if( strBegin.trim() != "" && strEnd.trim() == "" ){	
		if(!checkDateRange(strActBegin,strBegin,actBeginName,beginDateName)){
			objBegin.focus();
			return false;
		}
	}
	
	if( strBegin.trim() == "" && strEnd.trim() != "" ){	
		if(!checkDateRange(strEnd,strActEnd,endDateName,actEndName)){
			objEnd.focus();
			return false;
		}
	}
	
	return true;
}

function checkDateRange(BeginDate,EndDate,beginName,endName)
{
	  if (!isValidDate(BeginDate,beginName)){
	  	  return false;
	  }
	  if (!isValidDate(EndDate,endName)){
	  	  return false;	  	 
	  }
    var strBegindate = BeginDate.substring(0,4)+BeginDate.substring(5,7)+BeginDate.substring(8,10);
    var strEnddate = EndDate.substring(0,4)+EndDate.substring(5,7)+EndDate.substring(8,10);
    if(parseInt(strBegindate)>parseInt(strEnddate))
    {
        alert( beginName + "不能大于" + endName);
        return false;
    }
    return true;
}

function isValidDate(strDate,strName) {
    var intYear;
    var intMonth;
    var intDay;
    var maxDay;
    var strSplit;
    if (strDate.length != 10) {
        alert(strName + "中" + "请输入正确的日期，格式为: YYYY-MM-DD，例如: '2000-05-15'！");
        return false;
    }
    if (!isInt(strDate.substr(0, 4))) {
        alert(strName + "中" + "年份中包含有非数字字符！");
        return false;
    }
    intYear = parseInt(strDate.substr(0, 4), 10);
    if(intYear < 1901 || intYear > 2099)
    {
        alert(strName + "中" + "输入的年份应该为(1901 ~ 2099)！");
        return false;
    }
    strSplit = strDate.substr(4, 1);
    if (strSplit != "-") {
        alert(strName + "中" + "日期分隔符应为-！");
        return false;
    }
    if (!isInt(strDate.substr(5, 2))) {
        alert(strName + "中" + "月份中包含有非数字字符！");
        return false;
    }
    intMonth = parseInt(strDate.substr(5, 2), 10);
    if(intMonth < 1 || intMonth > 12)
    {
        alert(strName + "中" + "输入的月份应该为(01 ~ 12)！");
        return false;
    }
    strSplit = strDate.substr(7, 1);
    if (strSplit != "-") {
        alert(strName + "中" + "日期分隔符应为-！");
        return false;
    }
    if (!isInt(strDate.substr(8, 2))) {
        alert(strName + "中" + "日期中包含有非数字字符！");
        return false;
    }
    if (strDate.substr(8, 2) == "00") {
        alert(strName + "中" + "输入的日期不能为00！");
        return false;
    }
    intDay = parseInt(strDate.substr(8, 2),10);
    maxDay = getDaysOfMonth(intYear, intMonth);
    if(intDay < 1 || intDay > maxDay)
    {
        alert(strName + "中" + "输入的日期应该为(01 ~ " + maxDay +")！");
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
/**日期校验End**/
