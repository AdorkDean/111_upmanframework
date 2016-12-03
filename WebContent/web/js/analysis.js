//���ڵļ��	
function checkDate(){
	var flag = true ;
	var beginDate = document.getElementById("start").value.replace(/(^\s*)|(\s*$)/g, "") ;
	var endDate = document.getElementById("end").value.replace(/(^\s*)|(\s*$)/g, "") ;
	
	if(beginDate != "" && beginDate.length != 0){
		if(endDate != "" && endDate.length != 0){
			if(!checkDateRange(beginDate,endDate)){
				flag = false ;
			}
		}
	}
	
	if(beginDate == "" && beginDate.length == 0){
		if(endDate != "" && endDate.length != 0){
			if(!isValidDate(endDate)){
				flag = false ;
			}
		}
	}
	
	if(endDate == "" && endDate.length == 0){
		if(beginDate != "" && beginDate.length != 0){
			if(!isValidDate(beginDate)){
				flag = false ;
			}
		}
	}
	
	
	return flag ;
}
function checkDateRange(BeginDate,EndDate)
{
	  if (!isValidDate(BeginDate)){
	  	  //alert("��ʼ���ڴ���");
	  	  return false;
	  }
	  if (!isValidDate(EndDate)){
	  	  //alert("�������ڴ���");
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

function checkDateRange(BeginDate,EndDate)
{
	  if (!isValidDate(BeginDate)){
	  	  //alert("��ʼ���ڴ���");
	  	  return false;
	  }
	  if (!isValidDate(EndDate)){
	  	  //alert("�������ڴ���");
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

function isValidDate(strDate) {
    var intYear;
    var intMonth;
    var intDay;
    var maxDay;
    var strSplit;
    if (strDate.length != 10) {
        alert("��������ȷ�����ڣ���ʽΪ: YYYY-MM-DD������: '2000-05-15'��");
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
    if (strSplit != "-") {
        alert("���ڷָ���ӦΪ-��");
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
    if (strSplit != "-") {
        alert("���ڷָ���ӦΪ-��");
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

/*
  �Ƚ����������Ƿ���ȡ�
  first>second  -1;
  first=second   0;
  first<second   1
 */
function compareDate(first,second){
	//alert("dddddddddd");
	
	try{
		var d1 = new Date(first);
		var d2 = new Date(second);
		
		if(d1.Milliseconds()>d2.Milliseconds()){
			return -1;
		}else if(d1.Milliseconds()=d2.Milliseconds()){
			return 0;
		}else if(d1.Milliseconds()>d2.Milliseconds()){
			return 1;
		}
	}catch(e){
		return 1000;
	}	
	
}