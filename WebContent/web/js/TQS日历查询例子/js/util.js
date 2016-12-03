/**
  * 方法名：toDefaultCursor
  * 输入参数：idName  _输出类型：无
  * 方法说明：将窗口(某元素)的鼠标变成默认状态
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function toDefaultCursor(idName)
{
    document.getElementById(idName).style.cursor = "default";
}

/**
  * 方法名：addDays
  * 输入参数：strDate,iNum  _输出类型：String
  * 方法说明：增加天数
  * 注意：// 返回值2005/12/09 00:00:00,其中第二参数可以做负值处理。参数要求年\月\日严格对应，格式为"YYYY/MM/DD",其间的边接符可以更换，但必须为一位。
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function addDays(strDate,iNum)
{
    var iYear = 1900 ;
    var iMonth = 1 ;
    var strYear = "" ;
    var strMonth  = "" ;
    var strDayTime = "" ;
    var iAllMonths = 0 ;
    iYear = Number(strDate.substr(0,4));
    iMonth = Number(strDate.substr(5,2));
    iDay = Number(strDate.substr(8,2));
    var iTmpMonth = iMonth;
    var iTmpYear = iYear;
    if(iNum<0)
    {
        if(iMonth==1)
        {
            iTmpMonth = 12;
            iTmpYear = iYear - 1;
        }
    }
    var iCurDayNum = parseInt(getDaysOfMonth(iTmpYear, iTmpMonth));
    if(iNum<0)
    {
        if( (iDay+iNum) < 1)
        {
            if(iMonth==1)
            {
                iMonth = 12;
                iYear = iYear -1;
            }
            else
                iMonth = iMonth - 1;
            iDay = iDay + iNum + iCurDayNum;
        }
        else
            iDay = iDay + iNum;
    }
    if(iNum>=0)
    {
        if( (iDay + iNum) > iCurDayNum)
        {
            if(iMonth==12)
            {
                iMonth = 1;
            }
            else
                iMonth = iMonth + 1;
            iDay = iDay + iNum - iCurDayNum;
        }
        else
        iDay = iDay + iNum;
    }
    strYear = String("0000") + parseInt(iYear);
    strYear = strYear.substring(strYear.length-4,strYear.length);
    strMonth="00"+parseInt(iMonth);
    strMonth = strMonth.substring(strMonth.length-2,strMonth.length);
    strDayTime = "00"+parseInt(iDay);
    strDayTime = strDayTime.substring(strDayTime.length-2,strDayTime.length);
    strDate = strYear+"-"+strMonth+"-"+strDayTime + " 00:00:00" ;
    return strDate;
}

/**
  * 方法名：addMonths
  * 输入参数：strDate,iNum  _输出类型：String
  * 方法说明：增加月份
  * 注意：// 返回值2005/12/9,其中第二参数可以做负值处理。参数要求年月严格对应，其间的要求一位或"-"或"/",格式为"YYYY-MM-",其后的天数位置可用一位，亦可用两位进行处理
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function addMonths(strDate,iNum)
{
    if(!isValidDate(strDate)){
        return strDate;
    }    
    var iYear = 1900 ;
    var iMonth = 1 ;
    var strYear = "" ;
    var strMonth  = "" ;
    var strDayTime = "" ;
    var iAllMonths = 0 ;
    iYear = Number(strDate.substr(0,4));
    iMonth = Number(strDate.substr(5,2));
    strDayTime = strDate.substr(8,strDate.length-8);
    iAllMonths = iYear * 12 + iMonth - 1 + iNum ;
    iYear = parseInt(iAllMonths / 12) ;
    iMonth = iAllMonths % 12 + 1;
    strYear = String("0000") + parseInt(iYear);
    strYear = strYear.substring(strYear.length-4,strYear.length);
    strMonth="00"+parseInt(iMonth);
    strMonth = strMonth.substring(strMonth.length-2,strMonth.length);
    strDate = strYear+"/"+strMonth+"/"+strDayTime ;
    return strDate;
}

/**
  * 方法名：getDaysOfMonth
  * 输入参数：strYear, strMonth  _输出类型：int
  * 方法说明：得到指定年月的当月最大天数
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
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

/**
  * 方法名：isRadioSelected
  * 输入参数：radObject  _输出类型：boolean
  * 方法说明：察看radio object的成员是否被选中，返回 boolean
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isRadioSelected(radObject)
{
    if(radObject.length == null)
    {
        return radObject.checked;
    }
    for(i = 0; i < radObject.length; i++)
    {
        if(radObject[i].checked)
        {
            return true;
        }
    }
    return false;
}

/**
  * 方法名：doCheckFormNum
  * 输入参数：vFormObjName, vCaption  _输出类型：boolean
  * 方法说明：校验Form中的数字域必填
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function doCheckFormNum(vFormObjName, vCaption)
{
    var objForm = eval(vFormObjName);
    if(isNaN(objForm.value))
    {
        alert("'" + vCaption + "'的值必须是数字！");
        objForm.focus();
        return false;
    }
    return true;
}

/**
  * 方法名：xmlEncode
  * 输入参数：str  _输出类型：String
  * 方法说明：对字符串进行XML编码
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function xmlEncode(str)
{
       str=trimBoth(str,' ');
       str=str.replace("&","&amp;");
       str=str.replace("<","&lt;");
       str=str.replace(">","&gt;");
       str=str.replace("'","&apos;");
       str=str.replace("\"","&quot;");
       return str;
}

/**
  * 方法名：toWaitCursor
  * 输入参数：idName  _输出类型：无
  * 方法说明：将窗口(某元素)的鼠标变成等待状态
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function toWaitCursor(idName)
{
    document.getElementById(idName).style.cursor = "wait";
}

/**
  * 方法名：getRadioValue
  * 输入参数：radObject  _输出类型：String
  * 方法说明：返回radio object被选中的成员的值，若没有被选中的则返回空（""），返回 string
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function getRadioValue(radObject)
{
    if(radObject.length == null)
    {
        if(radObject.checked)
        {
            return radObject.value;
        }
        return "";
    }
    for(i = 0; i < radObject.length; i++)
    {
        if(radObject[i].checked)
        {
            return radObject[i].value;
        }
    }
    return "";
}

/**
  * 方法名：removeOptionByText
  * 输入参数：selectObj, sText  _输出类型：无
  * 方法说明：在select中删除和sText相同的文本内容的选项
  * 注意：//通过selectBox中option的text进行删除
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function removeOptionByText(selectObj, sText)
{
    for(i = selectObj.options.length - 1; i >= 0; i--)
    {
        if(selectObj.options[i].text == sText)
        {
            selectObj.options[i] = null;
        }
    }
}

/**
  * 方法名：removeOptionByValue
  * 输入参数：selectObj, sText  _输出类型：无
  * 方法说明：在select中删除和sText相同的值内容的选项
  * 注意：//通过selectBox中option的value进行删除
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function removeOptionByValue(selectObj, sText)
{
    for(i = selectObj.options.length - 1; i >= 0; i--)
    {
        if(selectObj.options[i].value == sText)
        {
            selectObj.options[i] = null;
        }
    }
}

/**
  * 方法名：trimBoth
  * 输入参数：str, ch  _输出类型：String
  * 方法说明：在字符串左右两边同时略去指定的字符
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function trimBoth(str, ch)
{
    str = trimLeft(str, ch);
    str = trimRight(str, ch);
    return str;
}

/**
  * 方法名：doCheckForm
  * 输入参数：vFormObjName, vCaption  _输出类型：boolean
  * 方法说明：校验Form中的文本域必填
  * 注意：//用于对FORM表单的验证处理，只能针对元素项中的value值为null或""时处理。Value值并没有trim()处理;
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function doCheckForm(vFormObjName, vCaption)
{
    var objForm = eval(vFormObjName);
    if(objForm.value == null || objForm.value == "")
    {
        alert("'" + vCaption + "'的值必须填写！");
        objForm.focus();
        return false;
    }
    return true;
}

/**
  * 方法名：fillPrefixZeoString
  * 输入参数：value, size  _输出类型：String
  * 方法说明：按预设的位数格式化字串，不足位的，在字串前用"0"字符填充
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function fillPrefixZeoString(value, size)
{
    var number="";
    if(value.length >= size)
       return value;
    var added = size - value.length;
    for(i = 0; i <added; i++)
    {
    number = number + "0";
    }
    number = number + value;
    return number;
}

/**
  * 方法名：doKeyDown
  * 输入参数：nextObject  _输出类型：无
  * 方法说明：让光标跳到下一个控件
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function doKeyDown(nextObject)
{
    if(window.event.keyCode == 13)
    {
        if(null == nextObject)
        {
            return;
        }
        nextObject.focus();
    }
}

/**
  * 方法名：funNumberPress
  * 输入参数：无  _输出类型：无
  * 方法说明：限制用户只能数字输入
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function funNumberPress()
{
       if(!isNS4)
       {
                if ((event.keyCode < 48) || (event.keyCode > 57))event.returnValue = false;
       }
       else
       {
                if ((event.which < 48) || (event.which > 57)) return false;
       }
}

/**
  * 方法名：selectValue
  * 输入参数：objSelect, vValue  _输出类型：无
  * 方法说明：在select中选中其值与参数字串相同的Option
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function selectValue(objSelect, vValue)
{
    if(objSelect == null)
    {
        return;
    }
    iCount = objSelect.options.length;
    for(i = 0; i < iCount; i++)
    {
        if(vValue == objSelect.options[i].value)
        {
            objSelect.options[i].selected = true;
            return;
        }
    }
}

/**
  * 方法名：trimSuffixNumberString
  * 输入参数：value  _输出类型：String
  * 方法说明：去掉前缀数字
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function trimSuffixNumberString(value)
{
    if(value == null || value == "")
    {
      return "";
    }
    var iStart = -1;
    for(i = value.length-1; i >= 0; i--)
    {
        if(value.charAt(i)>='0' && value.charAt(i)<='9')
        {
          continue;
        }
        iStart = i;
        break;
    }
    if(iStart == -1)
        return value;
    return value.substring(iStart+1);
}

/**
  * 方法名：getByteLength
  * 输入参数：strTemp  _输出类型：int
  * 方法说明：获得字符串的长度
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function getByteLength(strTemp)
{
    var i,sum;
    sum=0;
    for(i=0;i<strTemp.length;i++)
    {
        if ((strTemp.charCodeAt(i)>=0) && (strTemp.charCodeAt(i)<=255))
            sum=sum+1;
        else
            sum=sum+2;
    }
    return sum;
}

/**
  * 方法名：trimPrefixZeoString
  * 输入参数：value  _输出类型：String
  * 方法说明：去掉某字符串中，前几位的"0"字符
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function trimPrefixZeoString(value)
{
    if(value == null || value == "")
    {
      return "";
    }
    var iStart = -1;
    for(i = 0; i < value.length; i++)
    {
        if(value.charAt(i) == "0")
        {
         continue;
        }
        iStart = i;
        break;
    }
    if(iStart == -1)
        return value;
    return value.substring(iStart);
}

/**
  * 方法名：funMoneyPress
  * 输入参数：无  _输出类型：无
  * 方法说明：限定用户只能金额输入
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function funMoneyPress()
{
        if(!isNS4)
        {
                if ((event.keyCode < 46) || (event.keyCode > 57)|| (event.keyCode == 47))event.returnValue = false;
        }
        else
        {
                if ((event.which < 46) || (event.which > 57)|| (event.which == 47)) return false;
        }
}

/**
  * 方法名：trimRight
  * 输入参数：str, ch  _输出类型：String
  * 方法说明：在字符串右边略去指定的字符
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function trimRight(str, ch)
{
    var end;
    if ( str.length == 0 )
    {
        return str;
    }
    end = findLastNotOf(str, ch);
    if ( end < 0 )
    {
        return "";
    }
    else
    {
        return str.substr(0, end+1);
    }
}

/**
  * 方法名：trimLeft
  * 输入参数：str, ch  _输出类型：String
  * 方法说明：在字符串左边略去指定的字符
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function trimLeft(str, ch)
{
    var begin;
    var end;
    if ( str.length == 0 )
    {
        return str;
    }
    begin = findFirstNotOf(str, ch);
    if ( begin == str.length )
    {
        return "";
    }
    else
    {
        return str.substr(begin, str.length - begin +1);
    }
}

/**
  * 方法名：findLastNotOf
  * 输入参数：str, ch  _输出类型：int
  * 方法说明：返回某字符在另一字符串中末一次不出现的位置
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function findLastNotOf(str, ch)
{
    for (var i = str.length - 1; i >= 0; --i)
    {
        if (str.substr(i,1) != ch)
        {
            return i;
        }
    }
    return -1;
}

/**
  * 方法名：findFirstNotOf
  * 输入参数：str, ch  _输出类型：int
  * 方法说明：返回某字符在另一字符串中第一次不出现的位置
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function findFirstNotOf(str, ch)
{
    for (var i = 0; i < str.length; ++i)
    {
        if (str.substr(i,1) != ch)
        {
            return i;
        }
    }
    return str.length;
}

/**
  * 方法名：trimDoubleBlankString
  * 输入参数：value  _输出类型：String
  * 方法说明：去掉左边右边空格字符
  * 注意：//当为多个空格时，左右两边除去所有空格字符
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function trimDoubleBlankString(value)
{
    if(value == null || value == "")
    {
      return "";
    }
    var iStart = -1;
    var iEnd  = -1;
    for(i = 0; i < value.length; i++)
    {
        if(value.charAt(i) == " ")
        {
         continue;
        }
        iStart = i;
        break;
    }
    for(i = value.length-1; i >= 0; i--)
    {
        if(value.charAt(i) == " ")
        {
          continue;
        }
        iEnd = i;
        break;
    }
    if(iEnd == -1 || iStart == -1)
        return "";
    return value.substring(iStart, iEnd+1);
}

