/**
  * 方法名：isVDate
  * 输入参数：strDate  _输出类型：boolean
  * 方法说明：检测日期是否合法(只处理格式为YYYY/MM/DD的日期)
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isVDate(strDate) {
    var intYear;
    var intMonth;
    var intDay;
    var maxDay;
    var strSplit;
    if (strDate.length != 10) {
        alert("请输入正确的日期，格式为: YYYY-MM-DD，例如: '2000-05-15'！");
        return false;
    }
    if (!isInt(strDate.substr(0,4))) {
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
    if (strSplit != "-") {
        alert("日期分隔符应为-！");
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
    if (strSplit != "-") {
        alert("日期分隔符应为-！");
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
  * 方法名：isInt
  * 输入参数：str  _输出类型：boolean
  * 方法说明：查测字符串是否为数字字符串(只适用于整数)
  * 版本信息：2005-09-30 _BY_Weiwenqi
  */
function isInt(str) {
	var re = /^\d*$/;
    if(str=="")
		return false;
    return re.test(str);
}