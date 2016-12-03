/**
  * ��������isInt
  * ���������str  _������ͣ�boolean
  * ����˵��������ַ����Ƿ�Ϊ�����ַ���(ֻ����������)
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������isMoneyFormat
  * ���������MoneyObj,prefix,suffix,vCaption,flag  _������ͣ�boolean
  * ����˵����������ʽ
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
        alert("'" + vCaption + "'��ֵ���ܿ�");
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
            alert("'" + vCaption + "'����ֵ���������ֺ�С����");
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
          alert("'" + vCaption + "'����ֵ�����ֻ����һ��С����");
          objForm.focus();
          return false;
    }
    if(iPoint == 0)
    {
        if(((iEnd-iStart)+1)>prefix)
        {
          alert("'" + vCaption + "'����ֵ���������ֳ���\n"+"����λ��:"+prefix+"\n"+"С��λ������:"+suffix);
          objForm.focus();
          return false;
        }
    }
    else
    {
       var pointindex = objForm.value.indexOf(".");
        if((pointindex-iStart)>prefix)
        {
          alert("'" + vCaption + "'����ֵ���������ֳ���\n"+"����λ��:"+prefix+"\n"+"С��λ������:"+suffix);
          objForm.focus();
          return false;
        }
        if((iEnd-pointindex)>suffix)
        {
          alert("'" + vCaption + "'����ֵ��С�����ֳ���\n"+"����λ��:"+prefix+"\n"+"С��λ������:"+suffix);
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
  * ��������isLeapYear
  * ���������strYear  _������ͣ�boolean
  * ����˵��������Ƿ�Ϊ����
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������isIPSegment
  * ���������ip  _������ͣ�boolean
  * ����˵������鵥��IP��ַ���Σ��ĺϷ���
  * ע�⣺//4�����У�ÿ���ο�����"*"��������"2-30"����ʽ
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������checkValidEmail
  * ���������vName,vCaption  _������ͣ�boolean
  * ����˵�����������email��ʽ�Ƿ�Ϸ�
  * ע�⣺//�������ڼ򵥣��д��ڽ�һ�����д���
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function checkValidEmail(vName,vCaption)
{
    var objForm = eval(vName);
    if ((objForm.value.indexOf("@"))<=0 || (objForm.value.indexOf("."))<=0)
    {
        alert("'" + vCaption + "'��ֵ���Ϸ�!");
        objForm.focus();
        return false;
    }
    return true;
}

/**
  * ��������checkIDCard
  * ���������value,desc,isMust  _������ͣ�boolean
  * ����˵�����ж��Ƿ�����ȷ�����֤����
  * ע�⣺//������ֻ�����֤��λ��������Ӧ�Ĵ�����isMustΪ0ʱ���������֤�Ų���Ҫ�󣬵�ֻ��Ϊ��ʱ����ͨ��
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������isValidMobileNo
  * ���������strMobileNo  _������ͣ�boolean
  * ����˵��������ֻ������Ƿ�Ϸ�
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function isValidMobileNo(strMobileNo) {
    var networkSegment;
    if (strMobileNo == "") {
        alert("�ֻ��Ų���Ϊ��!");
        return false;
    }
    if (!isInt(strMobileNo)) {
        alert("�ֻ��ű���Ϊ���֣�");
        return false;
    }
    networkSegment = parseInt(strMobileNo.substr(0, 3));
    if (networkSegment < 134 || networkSegment > 139) {
        alert("�ֻ��Ų���ȷ,���ű�����134~139֮�䣡");
        return false;
    }
    if (strMobileNo.length != 11) {
        alert("�ֻ��ű���Ϊ11λ��");
        return false;
    }
    return true;
}

/**
  * ��������isValidTime
  * ���������strTime  _������ͣ�boolean
  * ����˵�������ʱ���Ƿ�Ϸ�(ֻ�����ʽΪHH:MM:SS��ʱ��)
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function isValidTime(strTime) {
    var strSplit;
    if(strTime.length != 8)
    {
        window.alert("ʱ�䳤�Ȳ��ԣ�����ȷ����ʱ�䣺HH:MM:SS\n\n���У�HH(0-23)��MM(0-59)��SS(0-59)��");
        return false;
    }
    intHour = parseInt(strTime.substr(0, 2), 10);
    if(intHour < 0 || intHour > 23)
    {
        window.alert("ʱ�䲻�ԣ�Сʱ��Χ��0 ~ 23");
        return false;
    }
    strSplit = strTime.substr(2, 1);
    if (strSplit != ":") {
        alert("ʱ��ָ���ӦΪ':'��");
        return false;
    }
    intMin = parseInt(strTime.substr(3, 2), 10);
    if(intMin < 0 || intMin > 59)
    {
        window.alert("ʱ�䲻�ԣ����ӷ�Χ��0 ~ 59");
        return false;
    }
    strSplit = strTime.substr(5, 1);
    if (strSplit != ":") {
        alert("ʱ��ָ���ӦΪ':'��");
        return false;
    }
    intSec = parseInt(strTime.substr(6, 2), 10);
    if(intSec < 0 || intSec > 59)
    {
        window.alert("ʱ�䲻�ԣ��뷶Χ��0 ~ 59");
        return false;
    }
    return true;
}

/**
  * ��������checkMoney
  * ���������strmoney,maxlength  _������ͣ�boolean
  * ����˵�������Խ�����  ��ȷ2λС��
  * ע�⣺//���ȿ������ڣ�����С������λ�����ơ�MaxValue��������λ��ЧС��
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function checkMoney(strmoney,maxlength){
  var floatmoney = parseFloat(strmoney);
  var maxValue = 21474836.47;
  if (floatmoney>maxValue){
    alert("���������̫��!���ܴ���"+maxValue);
    return false;
  }
  floatmoney = floatmoney*100;
  strmoney = ""+floatmoney;
  if (strmoney.length>maxlength){
    alert("ĳЩ�������򳤶ȳ���,����");
    return false;
  }
  return true;
}

/**
  * ��������isValidPostCode
  * ���������strPostCode  _������ͣ�boolean
  * ����˵��������ʱ��Ƿ�Ϸ�
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function isValidPostCode(strPostCode) {
    if (strPostCode.length != 6) {
        alert("�ʱ೤�ȱ���Ϊ��λ!");
        return false;
    }
    if (!isInt(strPostCode)) {
        alert("�ʱ����Ϊ����!");
        return false;
    }
    return true;
}

/**
  * ��������compareMonth
  * ���������vBeginMonth, vEndMonth  _������ͣ�boolean
  * ����˵�����·ݱȽ�
  * ע�⣺//��ڲ������붼�Ǳ�׼�����¸�ʽ(YYYYMM)
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������checkTextAreaCaption
  * ���������value,vCaption,maxlength  _������ͣ�boolean
  * ����˵��������ı��ĳ���(�ı���һ�����ֳ��ȼ�Ϊ 2)
  * ע�⣺//һ�����ֳ��Ȱ�2���㣬��Ҫ�û��������ݿ����Ϣ�ļ�鴦����
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function checkTextAreaCaption(value,vCaption,maxlength){
  if (value.replace(/[^\x00-\xff]/g, "**").length>maxlength){
    alert("��ע��:"+vCaption+"�ĳ��Ȳ�Ҫ���� "+maxlength+"�������ַ���");
    return false;
  }
  return true;
}

/**
  * ��������checkTextArea
  * ���������value,maxlength  _������ͣ�boolean
  * ����˵�������һ�ַ����ĳ����Ƿ񳬳�
  * ע�⣺//һ�����ֵĳ��Ȱ�1����
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function checkTextArea(value,maxlength){
  if (value.length>maxlength){
    alert("��ע��:�ı���ĳ��Ȳ�Ҫ���� "+maxlength+"�������ַ���");
    return false;
  }
  return true;
}

/**
  * ��������isNotNull
  * ���������value  _������ͣ�boolean
  * ����˵�������ֵ�Ƿ�Ϊ��
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������isFloat
  * ���������str  _������ͣ�boolean
  * ����˵�����ж��Ƿ���С������/��������������/������֧��
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function isFloat(str){
    if (str == ""||str.length==0) {
        alert("������������ֵĳ����Ƿ�Ϊ��?!");
        return false;
    }
    if (str == "-"){
    	  alert("����ֻ���븺��!");
    	  return false;
    }
    var pointnumber = 0;
    for(var i = 0; i < str.length; ++i) {
        if (str.charAt(i)=="."){
          pointnumber=pointnumber+1;
        }else if(((str.charAt(i)<'0') || (str.charAt(i)>'9'))&&(str.charAt(i) !='-')) {
          alert("��������!");
          return false;
        }
    }
    if (pointnumber>1){
      alert("С����̫��!");
      return false;
    }
    return true;
}

/**
  * ��������checkChinese
  * ���������value  _������ͣ�boolean
  * ����˵�����ж��Ƿ������ַ�
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function checkChinese(value){
  if(value!=''&&/[^\x00-\xff]/g.test(value)){
    alert('��ʹ��Ӣ��!');
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
  * ��������isValidNumber
  * ���������str  _������ͣ�boolean
  * ����˵��������ַ����Ƿ�Ϊ�Ϸ��������ַ���(�����������͸������������ڿ�ѧ��������ʾ������)
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function isValidNumber(str)
{
    return !isNaN(str);
}

/**
  * ��������isValidDate
  * ���������strDate  _������ͣ�boolean
  * ����˵������������Ƿ�Ϸ�(ֻ�����ʽΪYYYY/MM/DD������)
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function isValidDate(strDate) {
    var intYear;
    var intMonth;
    var intDay;
    var maxDay;
    var strSplit;
    if (strDate.length != 10) {
        alert("��������ȷ�����ڣ���ʽΪ: YYYY/MM/DD������: '2000/05/15'��");
        return false;
    }
    if (!isInt(strDate.substr(0, 4))) {
        alert("����а����з������ַ���");
        return false;
    }
    intYear = parseInt(strDate.substr(0, 4), 10);
    if(intYear < 1901 || intYear > 2099)
    {
        alert("��������Ӧ��Ϊ(1901 ~ 2099)��");
        return false;
    }
    strSplit = strDate.substr(4, 1);
    if (strSplit != "/") {
        alert("���ڷָ���ӦΪ/��");
        return false;
    }
    if (!isInt(strDate.substr(5, 2))) {
        alert("�·��а����з������ַ���");
        return false;
    }
    intMonth = parseInt(strDate.substr(5, 2), 10);
    if(intMonth < 1 || intMonth > 12)
    {
        alert("������·�Ӧ��Ϊ(01 ~ 12)��");
        return false;
    }
    strSplit = strDate.substr(7, 1);
    if (strSplit != "/") {
        alert("���ڷָ���ӦΪ/��");
        return false;
    }
    if (!isInt(strDate.substr(8, 2))) {
        alert("�����а����з������ַ���");
        return false;
    }
    if (strDate.substr(8, 2) == "00") {
        alert("��������ڲ���Ϊ00��");
        return false;
    }
    intDay = parseInt(strDate.substr(8, 2),10);
    maxDay = getDaysOfMonth(intYear, intMonth);
    if(intDay < 1 || intDay > maxDay)
    {
        alert("���������Ӧ��Ϊ(01 ~ " + maxDay +")��");
        return false;
    }
    return true;
}

/**
  * ��������checkDateRange
  * ���������BeginDate,EndDate  _������ͣ�boolean
  * ����˵����У�����ڷ�Χ
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function checkDateRange(BeginDate,EndDate)
{
	  if (!isValidDate(BeginDate)){
	  	  alert("��ʼ���ڴ���");
	  	  return false;
	  }
	  if (!isValidDate(EndDate)){
	  	  alert("�������ڴ���");
	  	  return false;	  	 
	  }
    var strBegindate = BeginDate.substring(0,4)+BeginDate.substring(5,7)+BeginDate.substring(8,10);
    var strEnddate = EndDate.substring(0,4)+EndDate.substring(5,7)+EndDate.substring(8,10);
    if(parseInt(strBegindate)>parseInt(strEnddate))
    {
        alert( "��ʼ���ڲ��ܴ��ڽ������ڣ�");
        return false;
    }
    return true;
}

/**
  * ��������checkDateRangeCaption
  * ���������BeginDate,BeginCaption,EndDate,EndCaption  _������ͣ�boolean
  * ����˵����У�����ڷ�Χ�����ж������ڴ����пɸĶ�����ʾ��Ϣ
  * ע�⣺���ڲ������������������˼�����ʾ��˵������
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function checkDateRangeCaption(BeginDate,BeginCaption,EndDate,EndCaption)
{
	  if (!isValidDate(BeginDate)){
	  	  alert("��ʼ���ڴ���");
	  	  return false;
	  }
	  if (!isValidDate(EndDate)){
	  	  alert("�������ڴ���");
	  	  return false;	  	 
	  }
    var strBegindate = BeginDate.substring(0,4)+BeginDate.substring(5,7)+BeginDate.substring(8,10);
    var strEnddate = EndDate.substring(0,4)+EndDate.substring(5,7)+EndDate.substring(8,10);
    if(parseInt(strBegindate)>parseInt(strEnddate))
    {
        alert(BeginCaption +"���ܴ���"+EndCaption +"��");
        return false;
    }
    return true;
}

/**
  * ��������compareDate
  * ���������startDate, endDate  _������ͣ�boolean
  * ����˵�����Ƚ��������ڵĴ�С
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function compareDate(startDate, endDate) {
    return (Date.parse(startDate) > Date.parse(endDate));
}

/**
  * ��������dateCompare
  * ���������startDate, endDate  _������ͣ�boolean
  * ����˵�����Ƚ��������ڵĴ�С
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function dateCompare(startDate, endDate) {
    var strBegindate = startDate.substring(0,4)+startDate.substring(5,7)+startDate.substring(8,10);
    var strEnddate = endDate.substring(0,4)+endDate.substring(5,7)+endDate.substring(8,10);
    return parseInt(strBegindate)>parseInt(strEnddate);
}

/**
  * ��������isValidYearMonth
  * ���������strDate  _������ͣ�boolean
  * ����˵������������Ƿ�Ϸ�
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function isValidYearMonth(strDate) {
var intYear;
var intMonth;
if (strDate.length != 7) {
alert("��������λ������,��:'2003/01'��");
return false;
}
if (!isInt(strDate.substring(0,4)+strDate.substring(5,7))) {
alert("�����а����з������ַ���");
return false;
}
intYear = parseInt(strDate.substr(0, 4), 10);
if(intYear < 1901 || intYear > 2099)
{
alert("��������Ӧ��Ϊ(1901 ~ 2099)��");
return false;
}
intMonth = parseInt(strDate.substr(5, 2), 10);
if(intMonth < 1 || intMonth > 12)
{
alert("������·�Ӧ��Ϊ(01 ~ 12)��");
return false;
}
return true;
}

/**
  * ��������isValidDateTime
  * ���������strDateTime  _������ͣ�boolean
  * ����˵�����������ʱ���Ƿ�Ϸ�(YYYY/MM/DD HH:MM:SS)
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
  */
function isValidDateTime(strDateTime) {
    var strSplit;
    if (strDateTime.length != 19) {
        alert("�������ʽ���µ����ڣ�YYYY/MM/DD HH:MM:SS!");
        return false;
    }
    if(!isValidDate(strDateTime.substr(0, 10))) {
        return false;
    }
    strSplit = strDateTime.substr(10, 1)
    if (strSplit != " ") {
        alert("���ڸ�ʽ����,ӦΪ��YYYY/MM/DD HH:MM:SS!");
        return false;
    }
    if (!isValidTime(strDateTime.substr(11, 8))) {
        return false;
    }
    return true;
}

/**
  * ��������isPNumber
  * ���������strInput  _������ͣ�boolean
  * ����˵�����ж��Ƿ���������
  * �汾��Ϣ��2005-09-30 _BY_Weiwenqi
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
  * ��������lawlessStr
  * ���������subStr  _������ͣ�boolean
  * ����˵�����ж��Ƿ��зǷ����ַ�
  * �汾��Ϣ��2006-03-13 _BY_Liuxu
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
  * ��������isValidUrl
  * 
  * �������:url:Ҫ��֤��URL
  * ������ͣ�boolean
  * ����˵�����ж��Ƿ��ǺϷ���url
  * ����:������http:// �� https:// ��ͷ, �˿ںű���Ϊ����
  * �汾��Ϣ��2006-08-01 _BY_Yangyueshan
  */ 
function isValidUrl(url){
	//var urlpatern =/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
    var urlpatern =/^https?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
	return urlpatern.test(url);
}