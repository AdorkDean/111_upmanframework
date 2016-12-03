package com.rc.app.framework.webapp;

import java.io.Serializable;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.web.context.WebApplicationContext;

import com.opensymphony.webwork.WebWorkStatics;
import com.opensymphony.xwork.ActionContext;

public class ApplicationContext implements WebWorkStatics, Serializable {
	private static final long serialVersionUID = -7887264461492639097L;
	
	/**
	 * 获取HttpRequest.
	 */
	public static HttpServletRequest getRequest() {
		return (HttpServletRequest) ActionContext.getContext()
				.get(HTTP_REQUEST);
	}
	
	/**
	 * 获取HttpSession.
	 */
	public static HttpSession getSession() {
		return getRequest().getSession();
	}
	
	/**
	 * 
	 * 获取ServletContext.
	 * */
	public static ServletContext getServletContext(){
		return getSession().getServletContext();
	}
	
	/**
	 * 获取SpringContext.
	 * */
	public static WebApplicationContext getSpringContext(){
		WebApplicationContext ctx = (WebApplicationContext)getServletContext().getAttribute(WebApplicationContext.ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE);
		return ctx;
	}
}