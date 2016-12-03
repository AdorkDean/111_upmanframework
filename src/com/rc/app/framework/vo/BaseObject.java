package com.rc.app.framework.vo;

import java.io.Serializable;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;


/**
 * Base class for Model objects.  Child objects should implement toString(), 
 * equals() and hashCode();
 *
 * <p>
 * <a href="BaseObject.java.html"><i>View Source</i></a>
 * </p>
 *
 * @author <a href="mailto:matt@raibledesigns.com">Matt Raible</a>
 */

public abstract class BaseObject implements Serializable {
	
	public String toString() {
        return ToStringBuilder.reflectionToString(this,
                ToStringStyle.MULTI_LINE_STYLE, false, this.getClass());
    }
	
    public boolean equals(Object o) {
        return EqualsBuilder.reflectionEquals(this, o, false, this.getClass());
    }
    
    public int hashCode() {
        return HashCodeBuilder.reflectionHashCode(this, false);
    }
}