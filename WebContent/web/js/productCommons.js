/**
  * 统计的页面js
  */
 
function checkStatOrderItemDate(strActBeginDate,strActEndDate){
	return checkFourDate('beginDate','开始日期','endDate','结束日期',strActBeginDate,'发布日期',strActEndDate,'截止日期');
}
function checkStatKeyworkInfo(){
	var id = 'keyword';
	if(getValue(id).trim() != "" && checkIsChinese(getValue(id))){
		alert('关键词中不能包含中文');
		document.getElementById(id).focus();
		return false;
	}
	if(getValue(id).trim() != "" && computerLength(getValue(id)) > 60){
		alert('关键词的长度不能大于60个字符');
		document.getElementById(id).focus();
		return false;
	}
	return true;
}

function checkStatOrderInfo(){
	var id = 'orderNo';
	if(getValue(id).trim() != "" && checkIsChinese(getValue(id))){
		alert('订单号中不能包含中文');
		document.getElementById(id).focus();
		return false;
	}
	if(getValue(id).trim() != "" && computerLength(getValue(id)) > 10){
		alert('订单号的长度不能大于10个字符');
		document.getElementById(id).focus();
		return false;
	}
	
	var id = 'customerNo';
	if(getValue(id).trim() != "" && checkIsChinese(getValue(id))){
		alert('客户名中不能包含中文');
		document.getElementById(id).focus();
		return false;
	}
	if(getValue(id).trim() != "" && computerLength(getValue(id)) > 10){
		alert('客户名的长度不能大于10个字符');
		document.getElementById(id).focus();
		return false;
	}
	
	var id = 'companyName';
	if(getValue(id).trim() != "" && computerLength(getValue(id)) > 100){
		alert('公司名的长度不能大于100个字符');
		document.getElementById(id).focus();
		return false;
	}
	
	if(!checkCommonDate('beginDate','开始日期','endDate','结束日期')){
		return false;
	}
	return true;
}

function submitForm(element){
	element.parentNode.parentNode.submit();
	return false;
}

function viewStatKeywordDateItem(keyword,keywordTypeDes,orderSum,statYearId,link,windowName,width,height){
  	var actionLink = link + "?keyword=" + keyword;
  	actionLink = actionLink + "&keywordTypeDes=" + keywordTypeDes;
  	actionLink = actionLink + "&orderSum=" + orderSum;
  	actionLink = actionLink + "&statYear=" + document.getElementById(statYearId).value;
	openwindow(actionLink,windowName,width,height);
}
function viewStatProductItem(link,statType,productId,productType,windowName,width,height){
  	var actionLink = link + "?productId =" + productId;
  	actionLink = actionLink + "&productType=" + productType;
  	actionLink = actionLink + "&productStatType=" + statType;
	openwindow(actionLink,windowName,width,height);
}

function viewStatOrderDateItem(statClass,link,orderItemId,windowName,width,height){
  	var actionLink = link + "?queryType=1&statClass=" + statClass;
  	actionLink = actionLink + "&orderItemId=" + orderItemId;
	openwindow(actionLink,windowName,width,height);
}

function viewStatOrderTimeItem(link,orderItemId,windowName,width,height){
  	var actionLink = link + "?queryType=1&orderItemId=" + orderItemId;
	openwindow(actionLink,windowName,width,height);
}


/**
  * 产品操作的页面js
  */
function checkForm3(numberId,name){
	var id = numberId;
	if(getValue(id).trim() != "" && computerLength(getValue(id)) > 40){
		alert(name + '的长度不能大于40个字符');
		document.getElementById(id).focus();
		return false;
	}
	return true;
}

function checkForm4(numberId,name){
	var id = numberId;
	if(getValue(id).trim() != "" && checkIsChinese(getValue(id))){
		alert(name + '中不能包含中文');
		document.getElementById(id).focus();
		return false;
	}
	if(getValue(id).trim() != "" && computerLength(getValue(id)) > 40){
		alert(name + '的长度不能大于40个字符');
		document.getElementById(id).focus();
		return false;
	}
	return true;
}

function checkForm2(numberId,name,pId,pName){
	var id = numberId;
	if(getValue(id).trim() != "" && !checkCharOrNum(getValue(id))){
		showCharOrNumMsg(name);
		document.getElementById(id).focus();
		return false;
	}
	else if(getValue(id).trim() != "" && computerLength(getValue(id)) > 8){
		alert('产品编号的长度不能大于8个字符');
		document.getElementById(id).focus();
		return false;
	}
	id = pId;
	if(getValue(id).trim() != "" && computerLength(getValue(id)) > 40){
		alert(pName + '的长度不能大于40个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}
	return true;
}
function checkForm(numberId,name){
	var id = numberId;
	if(getValue(id).trim() != "" && !checkCharOrNum(getValue(id))){
		showCharOrNumMsg(name);
		document.getElementById(id).focus();
		return false;
	}
	else if(getValue(id).trim() != "" && computerLength(getValue(id)) > 8){
		alert(name + '的长度不能大于8个字符');
		document.getElementById(id).focus();
		return false;
	}
	return true;
}

function checkUnityStatus(id,array,status){
	var ids = getChooseValue(id);
	if(ids.length == 0){
		alert("请选择要操作的记录");
		return false;
	}
	for(var i = 0; i < ids.length; i=i+1){
		var idValue = ids[i];
		for(var j = 0; j < array.length; j=j+1){
			if(idValue == array[j][0]){
				if(array[j][1] == status){
					if(status == '1')
						alert("选项中不能包含已经启用的记录");
					else if(status == '2')
						alert("选项中不能包含已经禁用的记录");
					else if(status == '0')
						alert("选项中不能包含已经删除的记录");
					return false;
				}
			}
		}
	}
	
	if(status == '1')
		return confirm("是否确定启用已经选中的记录");
	else if(status == '2')
		return confirm("是否确定禁用已经选中的记录");
	else if(status == '0')
		return confirm("是否确定删除已经选中的记录");
	else
		return false;
}

function changeAllStatus(cbID, cbName){
	var cb = document.getElementsByName(cbName);
	var allCheckBox = document.getElementById(cbID);
	var	flag = true;
	for(var i = 0;i < cb.length;i=i+1)
	{
		if(cb[i].checked == false)
			flag = false;	
	}
	
	if(flag)
		allCheckBox.checked = true;
	else
		allCheckBox.checked = false;
}

function deleteProduct(frmId,link,statusId,statusValue){
	var frmObj = document.getElementById(frmId);
	setEleValueById(statusId,statusValue);
	frmObj.action = link;
	//frmObj.submit();
}

function viewProduct(link,id,productType,viewFrom,width,height){
	var actionLink = link + "?id=" + id + "&productType=" + productType + "&viewFrom=" + viewFrom;
	openwindow(actionLink,"viewProduct",width,height);
}

function editProductType(link,id,width,height){
	var actionLink = link + "?id=" + id;
	openwindow(actionLink,"editProductType",width,height);
}

function eidtProduct(link,id,productType,width,height){
	var actionLink = link + "?id=" + id + "&productType=" + productType;
	openwindow(actionLink,"eidtProduct",width,height);
}

function eidtProductPrice(link,id,productType,width,height){
	var actionLink = link + "?id=" + id + "&adProduct.productType=" + productType;
	openwindow(actionLink,"eidtProductPrice",width,height);
}

function eidtProductDiscount(link,id,productType,width,height){
	var actionLink = link + "?id=" + id + "&adProduct.productType=" + productType;
	openwindow(actionLink,"eidtProductDiscount",width,height);
}


function eidtProductKeyword(link,id,width,height){
	var actionLink = link + "?id=" + id;
	openwindow(actionLink,"eidtProductKeyword",width,height);
}

function addProduct(link,productType,width,height){
	var actionLink = link + "?productType=" + productType;
	openwindow(actionLink,"addProduct",width,height);
}

function addProductKeyword(link,width,height){
	var actionLink = link;
	openwindow(actionLink,"addProductKeyword",width,height);
}


function checkEditProdectType(){		
	var id = 'productType';
	
	if(!checkInputValue(id)){
		showNullMsg("产品类型名称");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 40){
		alert('产品类型名称的长度不能大于40个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}

	id = "desccription";
	if(!checkInputValue(id)){
		showNullMsg("类型描述");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 200){
		alert('类型描述的长度不能大于200个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}
	return true;
}

function checkEditProdectDiscount(){
	var id = 'agentType';
	if(!checkInputValue(id)){
		showNullMsg("折扣");
		document.getElementById(id).focus();
		return false;
	}
	if(!isPNum(getValue(id))){
		alert("折扣只能是正整数");
		document.getElementById(id).focus();
		return false;
	}
	num = parseInt(getValue(id));
	if(num < 0){
		alert("折扣不能小于0");
		document.getElementById(id).focus();
		return false;
	}
	if(num > 100){
		alert("折扣不能大于100");
		document.getElementById(id).focus();
		return false;
	}
	return true;	

}


function checkEditProdectPrice(){
	var id = 'unitPrice';
	if(!checkInputValue(id)){
		showNullMsg("价格");
		document.getElementById(id).focus();
		return false;
	}
	if(!isPNum(getValue(id))){
		alert("价格只能是正整数");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 8){
		alert('价格长度过长');
		document.getElementById(id).focus();
		return false;
	}
	return true;	

}

function checkEditProductKeywordAll(){
	var id = 'keyword';
	if(!checkInputValue(id)){
		showNullMsg("关键词");
		document.getElementById(id).focus();
		return false;
	}
	if(checkIsChinese(getValue(id))){
		alert('关键词中不能包含中文');
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 60){
		alert('关键词的长度不能大于60个字符');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'accessVolume';
	if(!checkInputValue(id)){
		showNullMsg("搜索量");
		document.getElementById(id).focus();
		return false;
	}
	if(!isPNum(getValue(id))){
		alert("搜索量只能是正整数");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 32){
		alert('搜索量长度过长');
		document.getElementById(id).focus();
		return false;
	}

	var keywordType = getSelectInnerHTML('keywordTypeId');
	document.getElementById('keywordTypeValue').value = keywordType;
	return true;

}

function checkEditProdectKWAll(adType){
	var id = 'productNo';
	if(!checkInputValue(id)){
		showNullMsg("广告位编号");
		document.getElementById(id).focus();
		return false;
	}
	if(!checkDCharAndNum(getValue(id))){
		showDCharOrNumMsg("广告位编号");
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'productName';
	if(!checkInputValue(id)){
		showNullMsg("广告位名称");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 40){
		alert('广告位名称的长度不能大于40个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}

	if(adType == '2' || adType == '3'){
		id = 'sizeWidth';
		if(!checkInputValue(id)){
			showNullMsg("图片宽度");
			document.getElementById(id).focus();
			return false;
		}
		if(!isPNum(getValue(id))){
			alert("图片宽度只能是正整数");
			document.getElementById(id).focus();
			return false;
		}
		if(computerLength(getValue(id)) > 3){
			alert('图片宽度不能大于3位数字');
			document.getElementById(id).focus();
			return false;
		}
	
		id = 'sizeHeight';
		if(!checkInputValue(id)){
			showNullMsg("图片高度");
			document.getElementById(id).focus();
			return false;
		}
		if(!isPNum(getValue(id))){
			alert("图片高度只能是正整数");
			document.getElementById(id).focus();
			return false;
		}
		if(computerLength(getValue(id)) > 3){
			alert('图片高度不能大于3位数字');
			document.getElementById(id).focus();
			return false;
		}
	}
	
	id = 'adQty';
	if(!checkInputValue(id)){
		showNullMsg("数量");
		document.getElementById(id).focus();
		return false;
	}
	if(!isPNum(getValue(id))){
		alert("数量只能是正整数");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 32){
		alert('数量长度过长');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'cmsSeq';
	if(!checkInputValue(id)){
		showNullMsg("位置排序");
		document.getElementById(id).focus();
		return false;
	}
	if(!isPNum(getValue(id))){
		alert("位置排序只能是正整数");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 32){
		alert('位置排序长度过长');
		document.getElementById(id).focus();
		return false;
	}
	var saleRuleValue = getSelectInnerHTML('saleRuleId');
	document.getElementById('saleRuleValue').value = saleRuleValue;
	
	return true;
}


function checkAddProductTCAll(){
	var id = 'productNo';
	if(!checkInputValue(id)){
		showNullMsg("广告位编号");
		document.getElementById(id).focus();
		return false;
	}
	if(!checkDCharAndNum(getValue(id))){
		showDCharOrNumMsg("广告位编号");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 8){
		alert('广告位编号的长度不能大于8个字符');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'productName';
	if(!checkInputValue(id)){
		showNullMsg("广告位名称");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 40){
		alert('广告位名称的长度不能大于40个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}

	var id = 'beginDate';
	if(!checkInputValue(id)){
		showNullMsg("开始日期");
		document.getElementById(id).focus();
		return false;
	}
	var id = 'endDate';
	if(!checkInputValue(id)){
		showNullMsg("结束日期");
		document.getElementById(id).focus();
		return false;
	}

	if(!checkCommonDate('beginDate','开始日期','endDate','结束日期')){
		return false;
	}
	
	var saleStartTimeStr = document.getElementById('beginDate').value;
	document.getElementById('saleStartTimeStr').value = saleStartTimeStr;
	
	var saleEndTimeStr = document.getElementById('endDate').value;
	document.getElementById('saleEndTimeStr').value = saleEndTimeStr;


	id = 'saleRate';
	if(!checkInputValue(id)){
		showNullMsg("销售周期");
		document.getElementById(id).focus();
		return false;
	}
	if(!isPNum(getValue(id))){
		alert("销售周期只能是正整数");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 32){
		alert('销售周期长度过长');
		document.getElementById(id).focus();
		return false;
	}

	id = 'productDesc';
	if(!checkInputValue(id)){
		showNullMsg("产品信息");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 2000){
		alert('产品信息的长度不能大于2000个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}
	
	var saleRuleValue = getSelectInnerHTML('saleRuleId');
	document.getElementById('saleRuleValue').value = saleRuleValue;

	return true;
}

function checkAddProductSRAll(){
	var id = 'productNo';
	if(!checkInputValue(id)){
		showNullMsg("广告位编号");
		document.getElementById(id).focus();
		return false;
	}
	if(!checkDCharAndNum(getValue(id))){
		showDCharOrNumMsg("广告位编号");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 8){
		alert('广告位编号的长度不能大于8个字符');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'productName';
	if(!checkInputValue(id)){
		showNullMsg("广告位名称");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 40){
		alert('广告位名称的长度不能大于40个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'adQty';
	if(!checkInputValue(id)){
		showNullMsg("数量");
		document.getElementById(id).focus();
		return false;
	}
	if(!isPNum(getValue(id))){
		alert("数量只能是正整数");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 32){
		alert('数量长度过长');
		document.getElementById(id).focus();
		return false;
	}
	var saleRuleValue = getSelectInnerHTML('saleRuleId');
	document.getElementById('saleRuleValue').value = saleRuleValue;
	
	return true;
}


function checkAddProdectKWAll(){
	var id = 'productNo';
	if(!checkInputValue(id)){
		showNullMsg("广告位编号");
		document.getElementById(id).focus();
		return false;
	}
	if(!checkDCharAndNum(getValue(id))){
		showDCharOrNumMsg("广告位编号");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 8){
		alert('广告位编号的长度不能大于8个字符');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'productName';
	if(!checkInputValue(id)){
		showNullMsg("广告位名称");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 40){
		alert('广告位名称的长度不能大于40个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}

	var WHNull = 0;
	var WHNotNUll = 0;
	id = 'sizeWidth';
	if(!checkInputValue(id)){
		WHNull = WHNull + 1;
	}
	if(checkInputValue(id) && !isPNum(getValue(id))){
		alert("图片宽度只能是正整数");
		document.getElementById(id).focus();
		WHNotNUll = WHNotNUll + 1;
		return false;
	}
	if(computerLength(getValue(id)) > 3){
		alert('图片宽度不能大于3位数字');
		document.getElementById(id).focus();
		return false;
	}

	id = 'sizeHeight';
	if(!checkInputValue(id)){ 
		WHNull = WHNull + 1;
	}
	if(checkInputValue(id) && !isPNum(getValue(id))){
		alert("图片高度只能是正整数");
		document.getElementById(id).focus();
		WHNotNUll = WHNotNUll + 1;
		return false;
	}
	if(computerLength(getValue(id)) > 3){
		alert('图片高度不能大于3位数字');
		document.getElementById(id).focus();
		return false;
	}
	
	if(WHNull == 1 || WHNotNUll == 1){
		alert("图片的宽度和高度填写要统一，要么全部填写，要么全部不填写");
		return false;
	}
	else if(!checkInputValue(id)){
		document.getElementById('adType').value="1";
	}
	else if(checkInputValue(id)){
		document.getElementById('adType').value="2";
	}
	
	id = 'adQty';
	if(!checkInputValue(id)){
		showNullMsg("数量");
		document.getElementById(id).focus();
		return false;
	}
	if(!isPNum(getValue(id))){
		alert("数量只能是正整数");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 32){
		alert('数量长度过长');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'cmsSeq';
	if(!checkInputValue(id)){
		showNullMsg("位置排序");
		document.getElementById(id).focus();
		return false;
	}
	if(!isPNum(getValue(id))){
		alert("位置排序只能是正整数");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 32){
		alert('位置排序长度过长');
		document.getElementById(id).focus();
		return false;
	}
	
	var saleRuleValue = getSelectInnerHTML('saleRuleId');
	document.getElementById('saleRuleValue').value = saleRuleValue;
	
	return true;
}


function checkAddProdectFBAll(){
	var id = 'productNo';
	if(!checkInputValue(id)){
		showNullMsg("广告位编号");
		document.getElementById(id).focus();
		return false;
	}
	if(!checkDCharAndNum(getValue(id))){
		showDCharOrNumMsg("广告位编号");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 8){
		alert('广告位编号的长度不能大于8个字符');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'productName';
	if(!checkInputValue(id)){
		showNullMsg("广告位名称");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 40){
		alert('广告位名称的长度不能大于40个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'productDesc';
	if(!checkInputValue(id)){
		showNullMsg("所在频道");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 40){
		alert('所在频道的长度不能大于40个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'pageName';
	if(!checkInputValue(id)){
		showNullMsg("所在页面");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 40){
		alert('所在页面的长度不能大于40个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}

	id = 'pageUrl';
	if(!checkInputValue(id)){
		showNullMsg("所在页面地址");
		document.getElementById(id).focus();
		return false;
	}
	if(!isValidUrl(getValue(id))){
		alert("所在页面地址格式不正确，格式如下http://format.excample.com");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 200){
		alert('所在页面的长度不能大于200个字符');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'sizeWidth';
	if(!checkInputValue(id)){
		showNullMsg("图片宽度");
		document.getElementById(id).focus();
		return false;
	}
	if(!isPNum(getValue(id))){
		alert("图片宽度只能是正整数");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 3){
		alert('图片宽度不能大于3位数字');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'sizeHeight';
	if(!checkInputValue(id)){
		showNullMsg("图片高度");
		document.getElementById(id).focus();
		return false;
	}
	if(!isPNum(getValue(id))){
		alert("图片高度只能是正整数");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 3){
		alert('图片宽度不能大于3位数字');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'cmsSeq';
	if(!checkInputValue(id)){
		showNullMsg("位置排序");
		document.getElementById(id).focus();
		return false;
	}
	if(!isPNum(getValue(id))){
		alert("位置排序只能是正整数");
		document.getElementById(id).focus();
		return false;
	}
	if(computerLength(getValue(id)) > 32){
		alert('位置排序长度过长');
		document.getElementById(id).focus();
		return false;
	}
	
	/*
	id = 'cmsPhoto';
	if(getValue(id).trim() != "" && computerLength(getValue(id)) > 50){
		alert('默认图片名称的长度不能大于50个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}
	*/
	id = 'cmsUrl';
	
	if(getValue(id).trim() != "" && !isValidUrl(getValue(id))){
		alert("默认链接格式不正确, 格式如下http://format.excample.com");
		document.getElementById(id).focus();
		return false;
	}
	if(getValue(id).trim() != "" && computerLength(getValue(id)) > 200){
		alert('默认链接的长度不能大于200个字符');
		document.getElementById(id).focus();
		return false;
	}
	
	id = 'cmsContent';
	if(getValue(id).trim() != "" && computerLength(getValue(id)) > 2000){
		alert('默认广告内容的长度不能大于2000个字符,一个中文占两个字符长度');
		document.getElementById(id).focus();
		return false;
	}
		
	
	var admAdDictIdValue = getSelectInnerHTML('admAdDictId');
	document.getElementById('admAdDictIdValue').value = admAdDictIdValue;
	
	var saleRuleValue = getSelectInnerHTML('saleRuleId');
	document.getElementById('saleRuleValue').value = saleRuleValue;
	return true;
}