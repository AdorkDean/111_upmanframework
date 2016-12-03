	//客户登录
	function checkData()
	{
		var customerNo = document.getElementById('customerNo').value.replace(/(^\s*)|(\s*$)/g, "");
		var password = document.getElementById('password').value.replace(/(^\s*)|(\s*$)/g, "");
		var validateCode = document.getElementById('validateCode').value.replace(/(^\s*)|(\s*$)/g, "");
		
		if(customerNo == '')
		{
			alert("用户名不得为空或空格，请重新输入！");
			document.getElementById('customerNo').focus();
			return false;
		}
		
		var pwdReg = /^[0-9a-zA-Z]{7,7}$/;
		if(!pwdReg.test(customerNo)){
			alert("用户名不符合要求,\n0-9，a－z，A-Z，为7个字符!");
			return false;
		}
		
		if( password =='' || password.length < 5 || password.length > 16)
		{
			alert("密码不得为空或空格且大于等于5字符，小于等于16字符，请重新输入！");
			document.getElementById('password').focus();
			return false;
		}
		
		if( validateCode =='')
		{
			alert("验证码不得为空或空格，请重新输入！");
			document.getElementById('validateCode').focus();
			return false;
		}
		
		return true;
	}

	//验证码
	function changeCheckcodeImage(){
		var imagePath = "../makeImage" ;
		var date = new Date() ;
		var src = imagePath +"?time=" +date.getTime();
		document.getElementById("imageId").innerHTML = '<input id="validateCode" name="validateCode" type="text" class="input" size="10"><img src="'+src+'" width="75" height="25" /><a href="#" onclick="changeCheckcodeImage()">看不清？换一个！</a>' ;
	}
	
	//关键词查询
	function goSubmitSearch(){
		var keyword = document.form1.keyword.value.replace(/(^\s*)|(\s*$)/g, "");
		if(keyword == "")
		{
			alert("查询关键词不能为空!");
			document.form1.keyword.focus();
			return false;
		}
	  	if(keyword!=''&&/[^\x00-\xff]/g.test(keyword)){
		    alert('请使用英文!');
		    document.form1.keyword.focus();
		    return false;
	 	}
	 	if(keyword.length > 50)
	 	{
	 		alert("关键词长度不能超过50个字符!");
			document.form1.keyword.focus();
			return false;
	 	}
		document.form1.submit();
	}
	
	//修改密码
	function goSubmit(){
		if(comparePassword()){
			//document.form1.action="$model.context/adcustomer/changePassword.action";
			document.form1.submit();
		}
	}
	//验证密码
	function comparePassword(){
		var p0 = document.form1.password.value.replace(/(^\s*)|(\s*$)/g, "");
		var p1 = document.form1.passwordNew.value.replace(/(^\s*)|(\s*$)/g, "");
		var p2 = document.form1.passwordNew2.value.replace(/(^\s*)|(\s*$)/g, "");
		var msg = document.getElementById("msg");
		if(p0==""){
			msg.innerHTML = "旧密码不能为空或空格!";
			document.form1.password.focus();
			return false;
		}
		if(p1==""){
			msg.innerHTML = "新密码不能为空或空格!";
			document.form1.passwordNew.focus();
			return false;
		}
		if(p2==""){
			msg.innerHTML = "确认密码不能为空或空格!";
			document.form1.passwordNew2.focus();
			return false;
		}		
		if(p1!=p2){
			//alert("两次密码不一致");
			msg.innerHTML = "您输入的密码和第一次不一致！";
			document.form1.passwordNew2.focus();
			return false;
		}
		if(p0==p1){
			return  confirm("你的新旧密码一致,确认提交吗?");
		}
		var pwdReg = /^[0-9a-zA-Z]{5,16}$/;
		if(!pwdReg.test(p0)||!pwdReg.test(p1)||!pwdReg.test(p2)){
			alert("密码不符合要求,\n0-9，a－z，A-Z，大于等于5字符，小于等于16字符!");
			return false;
		}
		
		return true;
	}