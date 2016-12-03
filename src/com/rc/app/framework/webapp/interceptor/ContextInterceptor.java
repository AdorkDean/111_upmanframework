package com.rc.app.framework.webapp.interceptor;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import com.opensymphony.webwork.ServletActionContext;
import com.opensymphony.xwork.ActionInvocation;
import com.opensymphony.xwork.interceptor.AroundInterceptor;
import com.opensymphony.xwork.util.OgnlValueStack;
/**
 * put context to parameters
 * @author wind
 * @version 2008-12-31
 */
public class ContextInterceptor extends AroundInterceptor {
    protected void after(ActionInvocation dispatcher, String result) throws Exception {
    }
    
    protected void before(ActionInvocation invocation) throws Exception {
       	HttpServletRequest request = ServletActionContext.getRequest();
       	String context = request.getContextPath();
        ServletContext servletContext = ServletActionContext.getServletContext();
        String realPath = servletContext.getRealPath("/");
        OgnlValueStack stack = invocation.getStack();
        stack.setValue("context", context);
        stack.setValue("realPath", realPath);
    }
}