package com.rc.app.framework.webapp.util;


import java.math.BigDecimal;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import freemarker.template.SimpleScalar;
import freemarker.template.TemplateMethodModel;
import freemarker.template.TemplateModelException;

public class CurrencyMethod implements TemplateMethodModel{

	
	private static CurrencyMethod currencyMethod = null;
	
	static{
		currencyMethod = new CurrencyMethod();
	}
	
	public static CurrencyMethod getInstance(){
		return currencyMethod;
	}
	
	@SuppressWarnings("rawtypes")
	public Object exec(List arguments) throws TemplateModelException {
		if (arguments != null && !arguments.isEmpty() && arguments.get(0) != null && StringUtils.isNotEmpty(arguments.get(0).toString())) {
			boolean showSign = false;
			boolean showUnit = false;
			if (arguments.size() == 2) {
				if (arguments.get(1) != null) {
					showSign = Boolean.valueOf(arguments.get(1).toString());
				}
			} else if (arguments.size() > 2) {
				if (arguments.get(1) != null) {
					showSign = Boolean.valueOf(arguments.get(1).toString());
				}
				if (arguments.get(2) != null) {
					showUnit = Boolean.valueOf(arguments.get(2).toString());
				}
			}
			BigDecimal amount = new BigDecimal(arguments.get(0).toString());			
			//四舍五入
			int roundingMode = BigDecimal.ROUND_HALF_UP;
				
			String price = amount.setScale(2, roundingMode).toString();
			
			if (showSign) {
				price = "￥" + price;
			}
			if (showUnit) {
				price += "元";
			}
			return new SimpleScalar(price);
		}
		return null;
	}
}
