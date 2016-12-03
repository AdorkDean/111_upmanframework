	function strTrim(str){
			var strTemp = str.replace(/(^\s*)|(\s*$)/g, "") ;
			return strTemp ;
	}

	function check(){
		//alert("enter");
		document.getElementById("loginErrSpan").innerHTML = "" ;
		var flag = true ;
		//var agentNo = document.getElementById("agentNo").value.replace(/(^\s*)|(\s*$)/g, "") ;
		var loginName = document.getElementById("loginNameid").value;
		var password = document.getElementById("passwordid").value ;
		var checkcod = document.getElementById("checkcodeid").value;

		if(strTrim(loginName) == "" || strTrim(loginName).length == 0 ){
			flag = false ;
			document.getElementById("loginNameSpan").innerHTML = "<font color='red'>请填写用户名</font>";
		}else{
			var myregexp = /[^\w0-9\-_.]/;
			var match = myregexp.test(loginName) ;
			if(match){
				flag = false ;				
				document.getElementById('loginNameSpan').innerHTML = "<font color='red'>用户名只能由a-zA-Z,0-9,-,.,_,等组成</font>" ;
			}else{
				//var len = computerLength(loginName);
				//alert(len);
				if(checkStartAndEndLetter(loginName)){
					if(loginName.length > 18 || loginName.length < 4 ){
						flag = false ;		
						document.getElementById('loginNameSpan').innerHTML = "<font color='red'>用户名长度只能在4-18个字符之间</font>" ;
					}else{
						document.getElementById('loginNameSpan').innerHTML = "";
					}
				}else{
					flag = false ;
					document.getElementById('loginNameSpan').innerHTML = "<font color='red'>用户名只能以字母或者数字开头和结尾</font>" ;
				}
			}
		}
		
		if(password == "" || password.length == 0){
			flag = false ;
			document.getElementById("passwordSpan").innerHTML = "<font color='red'>请填写密码</font>";
		}else{
			var myregexp = /[^\w0-9]/;     //匹配所有非法字符
			var match = myregexp.test(password);
			if(match){
				flag = false ;
				document.getElementById("passwordSpan").innerHTML = "<font color='red'>密码只能由字母,数字组成</font>";
			}else{
				if(password.length < 5 || password.length > 16){
					flag = false ;
					document.getElementById("passwordSpan").innerHTML = "<font color='red'>密码长度为5-16个字符</font>";
				}else{
					document.getElementById("passwordSpan").innerHTML = "";
				}
			}
		}
		
		if(strTrim(checkcod) == "" || strTrim(checkcod).length == 0 ){
			flag = false ;
			document.getElementById("checkCodeSpan").innerHTML = "<font color='red'>请填写验证码</font>";
		}else{
			document.getElementById("checkCodeSpan").innerHTML = "" ;
		}
		
		return flag ;
	}


	function submitInfo(sessionId){
		//alert(sessionId);
		var id = sessionId
		if(check()){
			document.form1.action="login.action?jsessionid=" + id  ;
			//alert(document.getElementById("userInfo").action);
			document.getElementById("userInfo").submit();
		}
	}
	
	//检测是否以字母数字开头结尾
	function checkStartAndEndLetter(str){
		var flag = false ;
		var cs = str.charAt(0);
		//alert(cs);
		var ce = str.charAt(str.length-1)
		//alert(ce) ;
		if((cs >= 'a' && cs <= "z") || (cs >='A' && cs <= 'Z') || ( parseInt(cs) >= 0 && parseInt(cs) <= 9)){
			if((ce >= 'a' && ce <= "z") || (ce >='A' && ce <= 'Z') || ( parseInt(ce) >= 0 && parseInt(ce) <= 9)){
				flag = true ;
			}
			
		}
		return flag ;
	}
	
		function passwordcheck(){	
		var flag = true ;
		var password = document.getElementById("passwordId").value ;
		var newPassword1 = document.getElementById("newPassword1Id").value;
		var newPassword2 = document.getElementById("newPassword2Id").value;
		
		if(password == "" || password.length == 0){
			flag = false ;
			document.getElementById("passwordSpan").innerHTML = "<font color='red'>请填写原始密码</font>";
		}else{
			var myregexp = /[^\w0-9]/;     //匹配所有非法字符
			var match = myregexp.test(password);
			if(match){
				flag = false ;
				document.getElementById("passwordSpan").innerHTML = "<font color='red'>密码只能由字母,数字组成</font>";
			}else{
				if(password.length < 5 || password.length > 16){
					flag = false ;
					document.getElementById("passwordSpan").innerHTML = "<font color='red'>密码长度为5-16个字符</font>";
				}else{
					document.getElementById("passwordSpan").innerHTML = "";
				}
			}
		}
		if(newPassword1 == "" || newPassword1.length == 0){
			flag = false ;
			document.getElementById("newPassword1Span").innerHTML = "<font color='red'>请填写新密码</font>";
		}else{
			var myregexp = /[^\w0-9]/;     //匹配所有非法字符
			var match = myregexp.test(newPassword1);
			if(match){
				flag = false ;
				document.getElementById("newPassword1Span").innerHTML = "<font color='red'>密码只能由字母,数字组成</font>";
			}else{
				if(newPassword1.length < 5 || newPassword1.length > 16){
					flag = false ;
					document.getElementById("newPassword1Span").innerHTML = "<font color='red'>密码长度为5-16个字符</font>";
				}else{
					document.getElementById("newPassword1Span").innerHTML = "";
				}
			}
		}
		
		if(newPassword2 == "" || newPassword2.length == 0){
			flag = false ;
			document.getElementById("newPassword2Span").innerHTML = "<font color='red'>请输入确认密码</font>";
		}else{
			if(newPassword2 != newPassword1){
				flag = false ;
				document.getElementById("newPassword2Span").innerHTML = "<font color='red'>确认密码错误</font>";
			}else{
				document.getElementById("newPassword2Span").innerHTML = "";
			}
		}
		
		return flag  ;
	}
	
	
	function changeImage(context){
		var imagePath = context+"/makeImage" ;
		var date = new Date() ;
		var src = imagePath +"?time=" +date.getTime();
		document.getElementById("codeImage").innerHTML = "<img src="+src+" width='60' height='25' align='absmiddle' /><a href='#' onclick=changeImage('"+context+"')>看不清？换一个！</a>" ;
	}

	function getFocus(){
	 	document.getElementById("loginNameid").focus();
	}	
	 