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
}

/*
 *elementId:	select对象的ID
 *value:		select的值
 */
function updateSelect(elementId, value){
	var obj = document.getElementById(elementId);
	//alert("value=" + value);
	for (var index=0;index <obj.length; index++)
	{
		var tempValue = obj.options[index].value;
		//alert("temp="+tempValue);
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

// 是否是正整数
function isPNum( str )
{
	var reg = /^[1-9]\d*$/;
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
此函数不允许使用，验证使用validate.js中的同名函数，否则同时引入两国js时会冲突。

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
