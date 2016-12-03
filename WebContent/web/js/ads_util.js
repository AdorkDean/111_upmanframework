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
	+ "scrollbars=0,"
	+ "status=0," 
	+ "titlebar=0,"
	+ "toolbar=0,"
	+ "hotkeys=0,"
	+ "screenx=" + xposition + "," //仅适用于Netscape
	+ "screeny=" + yposition + "," //仅适用于Netscape
	+ "left=" + xposition + "," //IE
	+ "top=" + yposition; //IE 
	window.open( url,winName,theproperty );
}

/*
// Velocity 中根据list初始化javascript数组例子
var hostName1Array = new Array();
#set($index = 0)
#foreach($item in $hostName1List)
	hostName1Array[$index] = new Array('$!item.get(0)','$!item.get(1)');
	#set($index = $index + 1)
#end
*/
/*
 *elementId:	select对象的ID
 *array:		已经有值的数组
 */
function initSelectOption(elementId,array){
	var obj = document.getElementById(elementId);
	//obj.length = 0;
	//obj.children.length = 0;
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
	//childObj.length = 0;
	childObj.options.length = 0;
	for (var i=0;i <relationArray.length; i++)
	{
		if (relationArray[i][0] == value)
		{
			childObj.options[childObj.options.length] = new Option(childArray[i][0], childArray[i][1]);
		}
	}
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
      		obj.selectedIndex=index;
      		break;			
		}
	}
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

function getValue(id){
	return document.getElementById(id).value.trim();
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


// 字母或数字
function CheckCharOrNum( str )
{
var reg = /^\w+$/;
return Check( reg, str );
}

// Email
function CheckEmail( str )
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


var chooseFlag = false;
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

function changeCB(cb){
	if(!chooseFlag){
		chooseAll(cb);
		chooseFlag = true;
	}else{
		unChooseAll(cb);
		chooseFlag = false;
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
