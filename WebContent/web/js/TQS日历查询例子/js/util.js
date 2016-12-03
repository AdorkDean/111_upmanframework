/**
  * ��������toDefaultCursor
  * ���������idName  _������ͣ���
  * ����˵����������(ĳԪ��)�������Ĭ��״̬
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function toDefaultCursor(idName)
{
    document.getElementById(idName).style.cursor = "default";
}

/**
  * ��������addDays
  * ���������strDate,iNum  _������ͣ�String
  * ����˵������������
  * ע�⣺// ����ֵ2005/12/09 00:00:00,���еڶ�������������ֵ��������Ҫ����\��\���ϸ��Ӧ����ʽΪ"YYYY/MM/DD",���ı߽ӷ����Ը�����������Ϊһλ��
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������addMonths
  * ���������strDate,iNum  _������ͣ�String
  * ����˵���������·�
  * ע�⣺// ����ֵ2005/12/9,���еڶ�������������ֵ��������Ҫ�������ϸ��Ӧ������Ҫ��һλ��"-"��"/",��ʽΪ"YYYY-MM-",��������λ�ÿ���һλ���������λ���д���
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������getDaysOfMonth
  * ���������strYear, strMonth  _������ͣ�int
  * ����˵�����õ�ָ�����µĵ����������
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������isRadioSelected
  * ���������radObject  _������ͣ�boolean
  * ����˵�����쿴radio object�ĳ�Ա�Ƿ�ѡ�У����� boolean
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������doCheckFormNum
  * ���������vFormObjName, vCaption  _������ͣ�boolean
  * ����˵����У��Form�е����������
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function doCheckFormNum(vFormObjName, vCaption)
{
    var objForm = eval(vFormObjName);
    if(isNaN(objForm.value))
    {
        alert("'" + vCaption + "'��ֵ���������֣�");
        objForm.focus();
        return false;
    }
    return true;
}

/**
  * ��������xmlEncode
  * ���������str  _������ͣ�String
  * ����˵�������ַ�������XML����
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������toWaitCursor
  * ���������idName  _������ͣ���
  * ����˵����������(ĳԪ��)������ɵȴ�״̬
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function toWaitCursor(idName)
{
    document.getElementById(idName).style.cursor = "wait";
}

/**
  * ��������getRadioValue
  * ���������radObject  _������ͣ�String
  * ����˵��������radio object��ѡ�еĳ�Ա��ֵ����û�б�ѡ�е��򷵻ؿգ�""�������� string
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������removeOptionByText
  * ���������selectObj, sText  _������ͣ���
  * ����˵������select��ɾ����sText��ͬ���ı����ݵ�ѡ��
  * ע�⣺//ͨ��selectBox��option��text����ɾ��
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������removeOptionByValue
  * ���������selectObj, sText  _������ͣ���
  * ����˵������select��ɾ����sText��ͬ��ֵ���ݵ�ѡ��
  * ע�⣺//ͨ��selectBox��option��value����ɾ��
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������trimBoth
  * ���������str, ch  _������ͣ�String
  * ����˵�������ַ�����������ͬʱ��ȥָ�����ַ�
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function trimBoth(str, ch)
{
    str = trimLeft(str, ch);
    str = trimRight(str, ch);
    return str;
}

/**
  * ��������doCheckForm
  * ���������vFormObjName, vCaption  _������ͣ�boolean
  * ����˵����У��Form�е��ı������
  * ע�⣺//���ڶ�FORM������֤����ֻ�����Ԫ�����е�valueֵΪnull��""ʱ����Valueֵ��û��trim()����;
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function doCheckForm(vFormObjName, vCaption)
{
    var objForm = eval(vFormObjName);
    if(objForm.value == null || objForm.value == "")
    {
        alert("'" + vCaption + "'��ֵ������д��");
        objForm.focus();
        return false;
    }
    return true;
}

/**
  * ��������fillPrefixZeoString
  * ���������value, size  _������ͣ�String
  * ����˵������Ԥ���λ����ʽ���ִ�������λ�ģ����ִ�ǰ��"0"�ַ����
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������doKeyDown
  * ���������nextObject  _������ͣ���
  * ����˵�����ù��������һ���ؼ�
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������funNumberPress
  * �����������  _������ͣ���
  * ����˵���������û�ֻ����������
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������selectValue
  * ���������objSelect, vValue  _������ͣ���
  * ����˵������select��ѡ����ֵ������ִ���ͬ��Option
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������trimSuffixNumberString
  * ���������value  _������ͣ�String
  * ����˵����ȥ��ǰ׺����
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������getByteLength
  * ���������strTemp  _������ͣ�int
  * ����˵��������ַ����ĳ���
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������trimPrefixZeoString
  * ���������value  _������ͣ�String
  * ����˵����ȥ��ĳ�ַ����У�ǰ��λ��"0"�ַ�
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������funMoneyPress
  * �����������  _������ͣ���
  * ����˵�����޶��û�ֻ�ܽ������
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������trimRight
  * ���������str, ch  _������ͣ�String
  * ����˵�������ַ����ұ���ȥָ�����ַ�
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������trimLeft
  * ���������str, ch  _������ͣ�String
  * ����˵�������ַ��������ȥָ�����ַ�
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������findLastNotOf
  * ���������str, ch  _������ͣ�int
  * ����˵��������ĳ�ַ�����һ�ַ�����ĩһ�β����ֵ�λ��
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������findFirstNotOf
  * ���������str, ch  _������ͣ�int
  * ����˵��������ĳ�ַ�����һ�ַ����е�һ�β����ֵ�λ��
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������trimDoubleBlankString
  * ���������value  _������ͣ�String
  * ����˵����ȥ������ұ߿ո��ַ�
  * ע�⣺//��Ϊ����ո�ʱ���������߳�ȥ���пո��ַ�
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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

