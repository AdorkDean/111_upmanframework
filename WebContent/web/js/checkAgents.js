  

	function check()
	{
		var accountAmount = document.getElementById("accountAmount");
		var product = document.getElementsByName("product");
		var companyName = document.getElementById("companyName");
		var bankName = document.getElementById("bankName");
		var accountHolder = document.getElementById("accountHolder");
		var bankAccount = document.getElementById("bankAccount");
		var address = document.getElementById("address");
		var zip = document.getElementById("zip");
		var legalRepresentative = document.getElementById("legalRepresentative");
		var telephone = document.getElementById("telephone");
		var contactPerson = document.getElementById("contactPerson");
		var fax = document.getElementById("fax");
		var email = document.getElementById("email");
		var mobile = document.getElementById("mobile");
		
		var acb = accountAmount.value.trim();
		if( acb.length==0)
		{
			alert("请输入预付款金额！");
			accountAmount.focus();
			return false;
		}		
		if( acb>99999999 || acb<=0 ||!isValidMoney(acb))
		{
			alert("请核实预付款金额！");
			accountAmount.focus();
			return false;
		}

		if(!isCheckBoxChecked(product))
		{
			alert("请选择代理产品！");
			return false;
		}
				
		var com = companyName.value.trim();
		if(com.getByteLength()==0 )
		{
			alert("请输入公司名称！");
			companyName.focus();
			return false;
		}		
		if(com.getByteLength()>60)
		{
			alert("公司名称的长度为30个字以内！");
			companyName.focus();
			return false;
		}
		if(!isChineseCharacterAndEnglish(com))
		{
			alert("公司名称由汉字和字母组成！");
			companyName.focus();
			return false;
		}
		
		
		var leg = legalRepresentative.value.trim();
		if(leg.getByteLength()==0)
		{
			alert("请输入公司法人！");
			legalRepresentative.focus();
			return false;			
		}		
		if(leg.getByteLength()>20)
		{
			alert("公司法人的长度在10个字以内！");
			legalRepresentative.focus();
			return false;			
		}
		if(!isChineseCharacterAndEnglish(leg))
		{
			alert("公司法人由汉字和字母组成！");
			legalRepresentative.focus();
			return false;
		}
										
		
		var bkn = bankName.value.trim();
		if(bkn.getByteLength()==0 )
		{
			alert("请输入开户行！");
			bankName.focus();
			return false;
		}		
		if(bkn.getByteLength()>80)
		{
			alert("开户行的长度为40个字以内！");
			bankName.focus();
			return false;
		}
		if(!isChineseCharacterAndEnglish(bkn))
		{
			alert("开户行由汉字和字母组成！");
			bankName.focus();
			return false;
		}

		
		var ach = accountHolder.value.trim();
		if(ach.getByteLength()==0 )
		{
			alert("请输入银行账户！");
			accountHolder.focus();
			return false;
		}		
		if( ach.getByteLength()>60)
		{
			alert("银行账户的长度为30个字以内！");
			accountHolder.focus();
			return false;
		}
		if(!isChineseCharacterAndEnglish(ach))
		{
			alert("银行账户由汉字和字母组成！");
			accountHolder.focus();
			return false;
		}
		
		var bka = bankAccount.value.trim();
		if(bka.length==0)
		{
			alert("请输入公司账号！");
			bankAccount.focus();
			return false;
		}		
		if(bka.length>40 || !bka.isValidAccount())
		{
			alert("请核实公司账号，公司账号由40位以内的数字，空格和'-'组成！");
			bankAccount.focus();
			return false;
		}
		
		var add = address.value.trim();
		if(add.getByteLength()!=0 )
		{
			if(!isChineseCharacterAndEnglish(add))
			{
				alert("公司地址的由字母和汉字组成！");
				address.focus();
				return false;
			}
			if( add.getByteLength()>80)
			{
				alert("公司地址的长度为40个字以内！");
				address.focus();
				return false;
			}			
		}
		
		var zi = zip.value.trim();
		if(zi.length!=0 && !zi.isValidPostalcode())
		{
			alert("请输入正确的邮编！");
			zip.focus();
			return false;			
		}
		
		var con = contactPerson.value.trim();
		if(con.getByteLength()==0)
		{
			alert("请输入联系人名称！");
			contactPerson.focus();
			return false;				
		}		
		if(con.getByteLength()>20)
		{
			alert("联系人名称的长度为10个字以内！");
			contactPerson.focus();
			return false;				
		}
		if(!isChineseCharacterAndEnglish(con))
		{
			alert("联系人由汉字和字母组成！");
			contactPerson.focus();
			return false;
		}			
		
		var tel = telephone.value.trim();
		if(tel.length==0)
		{
			alert("请输入联系电话！");
			telephone.focus();
			return false;
		}
		if(checkPhoneNo(tel))
		{
			alert("请核实输入的联系电话，不能包含特殊符号！");
			telephone.focus();
			return false;
		}		
		if(tel.getByteLength()<5 ||tel.getByteLength()>20)
		{
			alert("联系电话的长度为5到20位！");
			telephone.focus();
			return false;
		}					

				
		var fa = fax.value.trim();
			
		if(fa.length==0)
		{
			alert("请输入传真号码！");
			fax.focus();
			return false;
		}
		if(checkPhoneNo(fa))
		{
			alert("请核实输入传真号码，不能包含特殊符号！");
			fax.focus();
			return false;
		}		
		if(fa.getByteLength()<5 ||fa.getByteLength()>20)
		{
			alert("传真号码长度为5到20位！");
			fax.focus();
			return false;
		}				

		
		var mob = mobile.value;
		if(mob.length!=0 && !mob.isValidMobileNo())
		{
			alert("请核实手机号码！");
			mobile.focus();
			return false;
		}
		
		var ema = email.value.trim();
		if(ema.length==0)
		{
			alert("请输入E-mail！");
			email.focus();
			return false;		
		}		
		if(!ema.isValidEmail())
		{
			alert("请核实输入的E-mail！");
			email.focus();
			return false;		
		}
		if(ema.getByteLength()>60)
		{
			alert("请输入60位以内的E-mail！");
			email.focus();
			return false;		
		}			
		
		var bt = document.getElementById("submitButton");
		bt.disabled=true;				
		return true;

	}
	
	function isCheckBoxChecked(checkbox)
	{
		var box = checkbox;
		for(i=0;i<box.length;i++)
		{
			if(box[i].checked)
				return true;
		}
	}
	
	function checkMobile(mobileNo)
	{
			var reg0 = /^13\d{5,9}$/;   
			var reg1 = /^153\d{4,8}$/;  
			var reg2 = /^159\d{4,8}$/;  
 
			var my = false;
			if (reg0.test(mobileNo))my=true;
			if (reg1.test(mobileNo))my=true;
			if (reg2.test(mobileNo))my=true;
			
			return my;
	}
	
		
	function isValidMoney(money)
	{
		var reg = /^[0-9]*\.?[0-9]{0,2}$/;
		
		var isMonney = false;
		
		if(reg.test(money))
			isMonney = true;
		return isMonney;
	}
	
	function isChineseCharacterAndEnglish(str)
	{

		var myregexp = /^[\da-zA-Z\u4e00-\u9fa5\s]+$/ ;
		var match = myregexp.test(str) ;
		if(!match)
		{
			return false ; // 非中英文字符
		}
		else
		{
			return true ;	// 中英文字符
		}
	}
	
	function checkPhoneNo(str)
	{
		var pattern=/([!\'\$%^&*+|\\{}?<>`])+/;
		
		if(pattern.test(str))
			return true;
		else
			return false;
	}	
	String.prototype.isValidAccount=function()
	{
	    var result=this.match(/^[0-9\-\ ]+$/);
	    if(result==null) return false;
	    return true;
	}	

	
