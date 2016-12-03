package com.rc.app.framework.webapp.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class NoCacheFilter implements javax.servlet.Filter{
	public void init(FilterConfig cfg) throws ServletException
	{
	}

	public final void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain)
			throws ServletException, IOException{
		if (!(request instanceof HttpServletRequest) || !(response instanceof HttpServletResponse)){
			throw new ServletException("This filter just supports HTTP requests");
		}
		
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		// HTTP 1.1
		httpResponse.setHeader("Cache-Control", "no-cache");
		// HTTP 1.0
		httpResponse.setHeader("Pragma", "no-cache");
		// 防止代理服务器缓存
		httpResponse.setDateHeader("Expires", 0L);
		filterChain.doFilter(request, response);
	}
	
	public void destroy(){
	}
}
