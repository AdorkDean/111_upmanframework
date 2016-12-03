package com.rc.app.framework.webapp.action;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.mail.SimpleMailMessage;

import com.opensymphony.webwork.ServletActionContext;
import com.opensymphony.xwork.ActionSupport;
import com.opensymphony.xwork.ModelDriven;
import com.rc.app.framework.Constants;
import com.rc.app.framework.service.MailEngine;
import com.rc.app.framework.webapp.model.BaseModel;
import com.rc.app.framework.webapp.util.JsonUtils;

/**
 * 
 * @author wind
 * @version 1.0.0.1  2008-12-15
 */

public abstract class BaseAction extends ActionSupport implements ModelDriven{
	private static final long serialVersionUID = -1495026132945839258L;
	public static final String CANCEL = "cancel";
    protected transient final Log log = LogFactory.getLog(getClass());
    protected String from = null;
    protected String cancel = null;
    protected String delete = null;
    protected String save = null;
    protected MailEngine mailEngine = null;
    protected SimpleMailMessage message = null;
    protected String templateName = null;
    private final String ACTION_LIST_SESSION = "ACTION_LIST_SESSION";
    private String errorMessage="";
    
    public void saveMessage(String msg) {
        List messages = (List) getRequest().getSession().getAttribute("messages");
        if (messages == null) {
            messages = new ArrayList();
        }
        messages.add(msg);
        getRequest().getSession().setAttribute("messages", messages);
    }
    
    /**
     * 
     * 在某页进行操作后返回该页
     *
     */
    public void returnPage(BaseModel model){
		if(StringUtils.isNotEmpty(model.getUseSession())){
			BaseModel sessionModel = (BaseModel)this.getSession().getAttribute(ACTION_LIST_SESSION);
			if( sessionModel != null ){
				sessionModel.setResult(model.getResult());
				this.setModel(sessionModel);
			}
		}else{
			this.getSession().setAttribute(ACTION_LIST_SESSION, model);
		}
    }
    
    /**
     * Convenience method to get the Configuration HashMap
     * from the servlet context.
     *
     * @return the user's populated form from the session
     */
    public Map getConfiguration() {
        Map config = (HashMap) getRequest().getSession().getServletContext()
                               .getAttribute(Constants.CONFIG);
        // so unit tests don't puke when nothing's been set
        if (config == null) {
            return new HashMap();
        }
        return config;
    }
    
    /**
     * Convenience method to get the request
     * @return current request
     */
    public HttpServletRequest getRequest() {
        return ServletActionContext.getRequest();  
    }
    
    /**
     * Convenience method to get the response
     * @return current response
     */
    public HttpServletResponse getResponse() {
        return ServletActionContext.getResponse();
    }
    
    /**
     * Convenience method to get the session
     */
    public HttpSession getSession() {
    	return getRequest().getSession();
    }
    
    public void setMailEngine(MailEngine mailEngine) {
        this.mailEngine = mailEngine;
    }
    
    public void setMessage(SimpleMailMessage message) {
        this.message = message;
    }
    
    public void setTemplateName(String templateName) {
        this.templateName = templateName;
    }
    
    /**
     * Convenience method for setting a "from" parameter to indicate the last
     * page.
     * @param from
     */
    public void setFrom(String from) {
        this.from = from;
    }
    
    public void setCancel(String cancel) {
    	this.cancel = cancel;
    }
    
    public void setDelete(String delete) {
        this.delete = delete;
    }
    
    public void setSave(String save) {
        this.save = save;
    }
    
    /* (non-Javadoc)
     * @see com.opensymphony.xwork.ModelDriven#getModel()
     */
    public abstract Object getModel();
    
    /**
     * @Desc ADD THIS METHOD FOR UNITTEST
     */
    public abstract void setModel( Object o);

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}  
	
	/**
	 * 将对象转换为
	 * @param Object
	 */
	public enum ContentType{
		text_html,
		text_plain,		
		application_json,
		
	}
	
	/**
	 * 将对象或者数据通过流的方式写到客户端(异步调用时候使用)
	 * @param Object
	 * @param contentType
	 */
	public void writeObjectToResponse(Object object,ContentType contentType){
		try{
			if(contentType==null ||contentType == ContentType.text_html){
				this.getResponse().setContentType("text/html;charset=UTF-8");
			}			
			if(contentType == ContentType.text_plain){
				this.getResponse().setContentType("text/plain;charset=UTF-8");		
			}
			if(contentType == ContentType.application_json){
				this.getResponse().setContentType("application/json;charset=UTF-8");		
			}
			HttpServletResponse response = this.getResponse();
			PrintWriter writer = response.getWriter();
			writer.write(JsonUtils.toJson(object));
			this.getResponse().getWriter().flush();
			this.getResponse().getWriter().close();
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 实体对象数据验证必填
	 * 
	 * @param target
	 *            验证对象
	 * @param fileNames
	 *            字段验证组
	 * @throws InvocationTargetException 
	 * @throws IllegalArgumentException 
	 * @throws IllegalAccessException 
	 */
	protected boolean isValid(Object target, String [] fileNames) throws IllegalAccessException, IllegalArgumentException, InvocationTargetException  {
		
		if(fileNames==null ||fileNames.length ==0){
			return true;
		}
	
		List<String> validFileNames = new ArrayList<String>();
		
		Class<? extends Object> targetClass = target.getClass();
		
		Method[] declaredMethods = targetClass.getDeclaredMethods();
		for (String name : fileNames) {
			for (Method method : declaredMethods) {
				if(method.getName().equalsIgnoreCase("get"+name)){
					Object invoke = method.invoke(target, null);
					if(invoke==null || invoke.toString().equals("")){
						validFileNames.add(name);
						break;
					}
				}
			}
		}
		
		if (validFileNames.size()==0) {
			this.getSession().removeAttribute("FlashMessageMethod.FLASH_MESSAGE_ATTRIBUTE_NAME");
			return true;
			
		} else {
			this.getSession().setAttribute("FlashMessageMethod.FLASH_MESSAGE_ATTRIBUTE_NAME", validFileNames);
			return false;
		}
	
	}
	
	
	/**
	 * 添加瞬时消息
	 * 
	 * @param redirectAttributes
	 *            RedirectAttributes
	 * @param message
	 *            消息
	 */
	protected void addFlashMessage(boolean message) {
		this.getRequest().getSession().setAttribute("FlashMessageMethod.FLASH_MESSAGE", message);
	}
}