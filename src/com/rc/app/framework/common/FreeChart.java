package com.rc.app.framework.common;

import java.awt.Color;
import java.awt.RenderingHints;
import java.util.ArrayList;
import java.util.List;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.AxisLocation;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.labels.StandardCategoryItemLabelGenerator;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.renderer.category.BarRenderer3D;
import org.jfree.chart.renderer.category.LineAndShapeRenderer;
import org.jfree.data.category.DefaultCategoryDataset;

public class FreeChart {
	public FreeChart() {
	}
	/**
	 * 生成折线图
	 * 
	 * @param arr
	 * @param strMultipleItemList
	 * @param strCategoryList
	 * @param strMultipleDataList
	 * @return
	 */
	public JFreeChart createLineChart(String[] arr, List strMultipleItemList,
			List strCategoryList, List strMultipleDataList) {
		// 统计图名称
		String chartTitle = arr[0];
		// x轴名称
		String xName = arr[1];
		// y轴名称
		String yName = arr[2];

		String[] strMultipleItemArray = new String[strMultipleItemList.size()];
		String[] strCategoryArray = new String[strCategoryList.size()];

		for (int i = 0; i < strMultipleItemList.size(); i++) {
			strMultipleItemArray[i] = (String) strMultipleItemList.get(i);
		}
		for (int i = 0; i < strCategoryList.size(); i++) {
			strCategoryArray[i] = (String) strCategoryList.get(i);
		}

		Object[] iMultipleDataArray = strMultipleDataList.toArray();

		DefaultCategoryDataset dataset = new DefaultCategoryDataset();

		for (int mIndex = 0; mIndex < iMultipleDataArray.length; mIndex++) {
			List list = (ArrayList) iMultipleDataArray[mIndex];
			for (int nIndex = 0; nIndex < list.size(); nIndex++) {
				double value = Double.parseDouble((String) list.get(nIndex));
				String category = strCategoryArray[mIndex];
				String name = strMultipleItemArray[nIndex];
				dataset.addValue(value, category, name);
			}
		}

		JFreeChart chart = ChartFactory.createLineChart(chartTitle, xName,
				yName, dataset, PlotOrientation.VERTICAL, true, false, false);
		try {
			CategoryPlot categoryPlot = chart.getCategoryPlot();
			if (categoryPlot != null) {
				LineAndShapeRenderer lineAndShapeRenderer = new LineAndShapeRenderer();
				lineAndShapeRenderer.setBaseOutlinePaint(Color.GRAY);
				if (true) {
					// 设置线条颜色
					if (strCategoryArray.length > 0) {
						for (int iIndex = 0; iIndex < strCategoryArray.length; iIndex++) {
							lineAndShapeRenderer.setSeriesPaint(iIndex,
									new Color(0, 0 + iIndex
											* (255 / strCategoryArray.length),
											255));
							lineAndShapeRenderer.setSeriesOutlinePaint(0,
									Color.BLACK);
						}
					}

					// 设置X轴、Y轴的显示位置
					categoryPlot
							.setDomainAxisLocation(AxisLocation.TOP_OR_RIGHT);
					categoryPlot
							.setRangeAxisLocation(AxisLocation.BOTTOM_OR_RIGHT);
				}
				categoryPlot.setRenderer(lineAndShapeRenderer);
				// 背景表格线
				categoryPlot.setDomainGridlinesVisible(true);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return chart;
	}

	/**
	 * 生成堆积柱状图
	 * 
	 * @param arr
	 * @param strMultipleItemList
	 * @param strCategoryList
	 * @param strMultipleDataList
	 * @return
	 */
	public JFreeChart createBarChart3D(String[] arr, List strMultipleItemList,
			List strCategoryList, List strMultipleDataList) {
		// 统计图名称
		String chartTitle = arr[0];
		// x轴名称
		String xName = arr[1];
		// y轴名称
		String yName = arr[2];

		String[] strMultipleItemArray = new String[strMultipleItemList.size()];
		String[] strCategoryArray = new String[strCategoryList.size()];

		for (int i = 0; i < strMultipleItemList.size(); i++) {
			strMultipleItemArray[i] = (String) strMultipleItemList.get(i);
		}
		for (int i = 0; i < strCategoryList.size(); i++) {
			strCategoryArray[i] = (String) strCategoryList.get(i);
		}

		Object[] iMultipleDataArray = strMultipleDataList.toArray();

		DefaultCategoryDataset dataset = new DefaultCategoryDataset();

		for (int mIndex = 0; mIndex < iMultipleDataArray.length; mIndex++) {
			List list = (ArrayList) iMultipleDataArray[mIndex];
			for (int nIndex = 0; nIndex < list.size(); nIndex++) {
				double value = Double.parseDouble((String) list.get(nIndex));
				String category = strCategoryArray[mIndex];
				String name = strMultipleItemArray[nIndex];
				dataset.addValue(value, category, name);
			}
		}

		JFreeChart chart = ChartFactory.createBarChart3D(chartTitle, xName,
				yName, dataset, PlotOrientation.VERTICAL, true, false, false);

		// 是否关闭文字渲染，以便清晰显示
		chart.getRenderingHints().put(RenderingHints.KEY_TEXT_ANTIALIASING,
				RenderingHints.VALUE_TEXT_ANTIALIAS_ON);

		try {
			CategoryPlot vCategoryPlot = chart.getCategoryPlot();
			if (vCategoryPlot != null) {
				if (true) {
					BarRenderer3D vBarRenderer3D = new BarRenderer3D();
					vBarRenderer3D.setBaseOutlinePaint(Color.GRAY);
					// 设置X轴代表的柱的颜色
					if (strCategoryArray.length > 0) {
						for (int iIndex = 0; iIndex < strCategoryArray.length; iIndex++) {
							vBarRenderer3D.setSeriesPaint(iIndex, new Color(0,
									0 + iIndex
											* (255 / strCategoryArray.length),
									255));
							vBarRenderer3D
									.setSeriesOutlinePaint(0, Color.BLACK);
						}
					}

					ValueAxis rangeAxis = vCategoryPlot.getRangeAxis();
					// 设置最高的项与图片顶端的距离
					rangeAxis.setUpperMargin(0.15);
					// 设置最低项与图片底端的距离
					rangeAxis.setLowerMargin(0.15);

					// 设置每项所包含的平行柱的之间距离
					vBarRenderer3D.setItemMargin(0.1);

					vCategoryPlot.setRenderer(vBarRenderer3D);
					// 设置X轴、Y轴的显示位置
					vCategoryPlot
							.setDomainAxisLocation(AxisLocation.TOP_OR_RIGHT);
					vCategoryPlot
							.setRangeAxisLocation(AxisLocation.BOTTOM_OR_RIGHT);
				}
				// 设置柱的透明度
				vCategoryPlot.setForegroundAlpha(0.8f);

			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return chart;
	}

	/**
	 * 生成顶端带数值的堆积柱状图
	 * 
	 * @param arr
	 * @param strMultipleItemList
	 * @param strCategoryList
	 * @param strMultipleDataList
	 * @return
	 */
	public JFreeChart createBarChart3DWithValue(String[] arr,
			List strMultipleItemList, List strCategoryList,
			List strMultipleDataList) {
		// 统计图名称
		String chartTitle = arr[0];
		// x轴名称
		String xName = arr[1];
		// y轴名称
		String yName = arr[2];

		String[] strMultipleItemArray = new String[strMultipleItemList.size()];
		String[] strCategoryArray = new String[strCategoryList.size()];

		for (int i = 0; i < strMultipleItemList.size(); i++) {
			strMultipleItemArray[i] = (String) strMultipleItemList.get(i);
		}
		for (int i = 0; i < strCategoryList.size(); i++) {
			strCategoryArray[i] = (String) strCategoryList.get(i);
		}

		Object[] iMultipleDataArray = strMultipleDataList.toArray();

		DefaultCategoryDataset dataset = new DefaultCategoryDataset();

		for (int mIndex = 0; mIndex < iMultipleDataArray.length; mIndex++) {
			List list = (ArrayList) iMultipleDataArray[mIndex];
			for (int nIndex = 0; nIndex < list.size(); nIndex++) {
				double value = Double.parseDouble((String) list.get(nIndex));
				String category = strCategoryArray[mIndex];
				String name = strMultipleItemArray[nIndex];
				dataset.addValue(value, category, name);
			}
		}

		JFreeChart chart = ChartFactory.createBarChart3D(chartTitle, xName,
				yName, dataset, PlotOrientation.VERTICAL, true, false, false);

		// 是否关闭文字渲染，以便清晰显示
		chart.getRenderingHints().put(RenderingHints.KEY_TEXT_ANTIALIASING,
				RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
		try {
			CategoryPlot vCategoryPlot = chart.getCategoryPlot();
			if (vCategoryPlot != null) {
				if (true) {
					BarRenderer3D vBarRenderer3D = new BarRenderer3D();
					vBarRenderer3D.setBaseOutlinePaint(Color.GRAY);
					// 设置X轴代表的柱的颜色
					if (strCategoryArray.length > 0) {
						for (int iIndex = 0; iIndex < strCategoryArray.length; iIndex++) {
							vBarRenderer3D.setSeriesPaint(iIndex, new Color(0,
									0 + iIndex
											* (255 / strCategoryArray.length),
									255));
							vBarRenderer3D
									.setSeriesOutlinePaint(0, Color.BLACK);
						}
					}

					ValueAxis rangeAxis = vCategoryPlot.getRangeAxis();
					// 设置最高的项与图片顶端的距离
					rangeAxis.setUpperMargin(0.15);
					// 设置最低项与图片底端的距离
					rangeAxis.setLowerMargin(0.15);

					// 设置每项所包含的平行柱的之间距离
					vBarRenderer3D.setItemMargin(0.1);
					// 显示每个柱的数值，并修改该数值的字体属性
					vBarRenderer3D
							.setItemLabelGenerator(new StandardCategoryItemLabelGenerator());
					// 设置字体及大小
					// vBarRenderer3D.setItemLabelFont(new
					// Font("宋体",Font.PLAIN,12));
					vBarRenderer3D.setItemLabelsVisible(true);

					vCategoryPlot.setRenderer(vBarRenderer3D);
					// 设置X轴、Y轴的显示位置
					vCategoryPlot
							.setDomainAxisLocation(AxisLocation.TOP_OR_RIGHT);
					vCategoryPlot
							.setRangeAxisLocation(AxisLocation.BOTTOM_OR_RIGHT);

				}
				// 设置柱的透明度
				vCategoryPlot.setForegroundAlpha(0.8f);

			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return chart;
	}
}
