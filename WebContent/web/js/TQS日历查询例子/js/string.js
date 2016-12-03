// Function Name: trim
// Function Description: ȥ���ַ�������β�Ŀո�
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
// Function Name: ltrim
// Function Description: ȥ���ַ��������Ŀո�
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.ltrim=function()
{
    return this.replace(/(^\s*)/g, "");
}
// Function Name: rtrim
// Function Description: ȥ���ַ������Ҳ�Ŀո�
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.rtrim=function()
{
    return this.replace(/(\s*$)/g, "");
}
// Function Name: len
// Function Description: �����ַ�����ʵ�ʳ���, һ��������2������
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.getByteLength=function()
{
    var str=this;
    return str.replace(/[^\x00-\xff]/g, "**").length
}
// Function Name: isValidDate
// Function Description: �ж������Ƿ�����Ч�Ķ����ڸ�ʽ - "YYYY-MM-DD"
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidDate=function()
{
    var result=this.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if(result==null) return false;
    var d=new Date(result[1], result[3]-1, result[4]);
    return (d.getFullYear()==result[1]&&d.getMonth()+1==result[3]&&d.getDate()==result[4]);
}
// Function Name: isValidTime
// Function Description: �ж������Ƿ�����Ч��ʱ���ʽ - "HH:MM:SS"
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidTime=function()
{
    var result=this.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
    if (result==null) return false;
    if (result[1]>24 || result[3]>=60 || result[4]>=60) return false;
    return true;
}
// Function Name: isValidEmail
// Function Description: �ж������Ƿ�����Ч�ĵ����ʼ�
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidEmail=function()
{
	  var result=this.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    if(result==null) return false;
    return true;
}
// Function Name: isValidDatetime
// Function Description: �ж������Ƿ�����Ч�ĳ����ڸ�ʽ - "YYYY-MM-DD HH:MM:SS"
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidDatetime=function()
{
    var result=this.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
    if(result==null) return false;
    var d= new Date(result[1], result[3]-1, result[4], result[5], result[6], result[7]);
    return (d.getFullYear()==result[1]&&(d.getMonth()+1)==result[3]&&d.getDate()==result[4]&&d.getHours()==result[5]&&d.getMinutes()==result[6]&&d.getSeconds()==result[7]);
}
// Function Name: isValidInteger
// Function Description: �ж������Ƿ���һ������
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidInteger=function()
{
    var result=this.match(/^(-|\+)?\d+$/);
    if(result==null) return false;
    return true;
}
// Function Name: isValidPositiveInteger
// Function Description: �ж������Ƿ���һ��������
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidPositiveInteger=function()
{
    var result=this.match(/^\d+$/);
    if(result==null) return false;
    if(parseInt(this)>0) return true;
    return false;
}
// Function Name: isValidNegativeInteger
// Function Description: �ж������Ƿ���һ��������
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidNegativeInteger=function()
{
    var result=this.match(/^-\d+$/);
    if(result==null) return false;
    return true;
}
// Function Name: isValidNumber
// Function Description: �ж������Ƿ���һ������
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidNumber=function()
{
    return !isNaN(this);
}
// Function Name: isValidLetters
// Function Description: �ж������Ƿ���һ���� A-Z / a-z ��ɵ��ַ���
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidLetters=function()
{
    var result=this.match(/^[a-zA-Z]+$/);
    if(result==null) return false;
    return true;
}
// Function Name: isValidDigits
// Function Description: �ж������Ƿ���һ���� 0-9 ��ɵ�����
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidDigits=function()
{
    var result=this.match(/^[1-9][0-9]+$/);
    if(result==null) return false;
    return true;
}
// Function Name: isValidAlphanumeric
// Function Description: �ж������Ƿ���һ���� 0-9 / A-Z / a-z ��ɵ��ַ���
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidAlphanumeric=function()
{
    var result=this.match(/^[a-zA-Z0-9]+$/);
    if(result==null) return false;
    return true;
}
// Function Name: isValidString
// Function Description: �ж������Ƿ���һ���� 0-9 / A-Z / a-z / . / _ ��ɵ��ַ���
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidString=function()
{
    var result=this.match(/^[a-zA-Z0-9\s.\-_]+$/);
    if(result==null) return false;
    return true;
}
// Function Name: isValidStrings
// Function Description: �ж������Ƿ���һ���� 0-9 / A-Z / a-z  / _ ��ɵ��ַ���
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidStrings=function()
{
    var result=this.match(/^[a-zA-Z0-9\_]+$/);
    if(result==null) return false;
    return true;
}
// Function Name: isValidPostalcode
// Function Description: �ж������Ƿ���һ����Ч����������
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidPostalcode=function()
{
    var result=this.match(/(^[0-9]{6}$)/);
    if(result==null) return false;
    return true;
}
// Function Name: isValidPhoneNo
// Function Description: �ж������Ƿ���һ����Ч�ĵ绰����
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidPhoneNo=function()
{
    var result=this.match(/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)/);
    if(result==null) return false;
    return true;
}
// Function Name: isValidMobileNo
// Function Description: �ж������Ƿ���һ����Ч���ֻ�����
// Creation Date: 2005-9-28 15:30
// Last Modify By: Weiwenqi
// Last Modify Date: 2005-09-30
String.prototype.isValidMobileNo=function()
{
    var result=this.match(/(^0{0,1}13[0-9]{9}$)/);
    if(result==null) return false;
    return true;
}

function HTMLEncode(text){
	text = text.replace(/&/g, "&amp;") ;
	text = text.replace(/"/g, "&quot;") ;
	text = text.replace(/</g, "&lt;") ;
	text = text.replace(/>/g, "&gt;") ;
	text = text.replace(/'/g, "&#146;") ;
	text = text.replace(/\ /g,"&nbsp;");
	text = text.replace(/\n/g,"<br>");
	text = text.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");
	return text;
}