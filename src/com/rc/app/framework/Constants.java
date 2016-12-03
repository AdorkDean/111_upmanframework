package com.rc.app.framework;

public class Constants {
	/** The name of the ResourceBundle used in this application */
	public static final String BUNDLE_KEY = "ApplicationResources";
	
	/** The encryption algorithm key to be used for passwords */
	public static final String ENC_ALGORITHM = "algorithm";
	
	/** A flag to indicate if passwords should be encrypted */
	public static final String ENCRYPT_PASSWORD = "encryptPassword";
	
	/** File separator from System properties */
	public static final String FILE_SEP = System.getProperty("file.separator");
	
	/** User home from System properties */
	public static final String USER_HOME = System.getProperty("user.home")
			+ FILE_SEP;
	
	/** The application scoped attribute for persistence engine used */
	public static final String DAO_TYPE = "daoType";
	public static final String DAO_TYPE_HIBERNATE = "hibernate";
	
	public static final String HTTP_PORT = "80";
	public static final String HTTPS_PORT = "8443";
	
	/**
	 * The session scope attribute under which the User object for the currently
	 * logged in user is stored.
	 */
	public static final String USER_KEY = "currentUserForm";
	
	/**
	 * Name of cookie for "Remember Me" functionality.
	 */
	public static final String LOGIN_COOKIE = "sessionId";
	
	/**
	 * The name of the configuration hashmap stored in application scope.
	 */
	public static final String CONFIG = "appConfig";
}