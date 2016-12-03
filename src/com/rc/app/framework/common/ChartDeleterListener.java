package com.rc.app.framework.common;

import java.io.File;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;

/**
 * 对临时文件进行SESSION绑定，当注销SESSION时则删除临时文件
 *
 * @author wind
 */
public class ChartDeleterListener implements HttpSessionBindingListener {
    /** The chart names. */
    private List chartNames = new java.util.ArrayList();
    
    /**
     * Blank constructor.
     */
    public ChartDeleterListener() {
        super();
    }
    
    /**
     * Add a chart to be deleted when the session expires
     *
     * @param filename  the name of the chart in the temporary directory to be 
     *                  deleted.
     */
    public void addChart(String filename) {
        this.chartNames.add(filename);
    }

    /**
     * Checks to see if a chart is in the list of charts to be deleted
     *
     * @param filename  the name of the chart in the temporary directory.
     *
     * @return A boolean value indicating whether the chart is present in the 
     *         list.
     */
    public boolean isChartAvailable(String filename) {
        return (this.chartNames.contains(filename));
    }

    /**
     * Binding this object to the session has no additional effects.
     *
     * @param event  the session bind event.
     */
    public void valueBound(HttpSessionBindingEvent event) {
        return;
    }
    
    /**
     * When this object is unbound from the session (including upon session
     * expiry) the files that have been added to the ArrayList are iterated
     * and deleted.
     *
     * @param event  the session unbind event.
     */
    public void valueUnbound(HttpSessionBindingEvent event) {
        Iterator iter = this.chartNames.listIterator();
        while (iter.hasNext()) {
            String fileAbsolutePath = (String) iter.next();
            File file = new File(fileAbsolutePath);
            if (file.exists()) {
                file.delete();
            }
        }
        return;
    }
}