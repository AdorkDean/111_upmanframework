package com.rc.app.framework.common;

import java.io.File;

import javax.servlet.http.HttpSession;

public class ChartUtil {
	public static final String JPEG_PREFIX = ".jpg";

	// //获得图片临时保存路径
	// public static String getChartSavePath(String realPath,String fileName){
	// String tempDir = realPath + Constants.FREECHART_TEMP;
	// File tempDirFile = new File(tempDir);
	// if (!tempDirFile.exists()) {
	// tempDirFile.mkdir();
	// }
	// String filePath = realPath + Constants.FILE_SEP +
	// Constants.FREECHART_TEMP + Constants.FILE_SEP + fileName + JPEG_PREFIX;
	// return filePath;
	// }
	//	
	// //获得图片WEB访问路径
	// public static String getChartUrl(String context, String fileName){
	// String fileUrl = context + "/" + Constants.FREECHART_TEMP + "/" +
	// fileName + JPEG_PREFIX;
	// return fileUrl;
	// }

	// /**
	// * 生成临时图形文件
	// * @param chart
	// * @param width
	// * @param height
	// * @param session
	// * @return
	// * @throws IOException
	// */
	// public static String saveChartAsJPEG(
	// JFreeChart chart,
	// int width,
	// int height,
	// String realPath,
	// String context,
	// HttpSession session
	// )
	// throws IOException
	// {
	// return saveChartAsJPEG(chart, width, height, realPath, context, null,
	// session);
	// }

	// /**
	// * 生成临时图形文件
	// * @param chart
	// * @param width
	// * @param height
	// * @param info
	// * @param session
	// * @return
	// * @throws IOException
	// */
	// public static String saveChartAsJPEG(
	// JFreeChart chart,
	// int width,
	// int height,
	// String realPath,
	// String context,
	// ChartRenderingInfo info,
	// HttpSession session
	// )
	// throws IOException
	// {
	// if (chart == null) {
	// throw new IllegalArgumentException("Null 'chart' argument.");
	// }
	//        
	// // 生成图片的名称
	// String fileName = (new UUIDHexGenerator()).getId();
	//		
	// File tempFile = new File( getChartSavePath(realPath,fileName) );
	// ChartUtilities.saveChartAsJPEG(tempFile, chart, width, height, info);
	// if (session != null)
	// {
	// //进行SESSION绑定
	// registerChartForDeletion(tempFile, session);
	// }
	// return getChartUrl(context,fileName);
	//
	// }

	/**
	 * 对临时图形文件进行SESSION绑定，当SESSION注销的同时删除临时文件
	 * 
	 * @param tempFile
	 * @param session
	 */
	protected static void registerChartForDeletion(File tempFile,
			HttpSession session) {
		// Add chart to deletion list in session
		if (session != null) {
			ChartDeleterListener chartDeleter = (ChartDeleterListener) session
					.getAttribute("Chart_Deleter_Listener");
			if (chartDeleter == null) {
				chartDeleter = new ChartDeleterListener();
				session.setAttribute("Chart_Deleter_Listener", chartDeleter);
			}
			chartDeleter.addChart(tempFile.getAbsolutePath());
		} else {
			System.out.println("Session is null - chart will not be deleted");
		}
	}
}
