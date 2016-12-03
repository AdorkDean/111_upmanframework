package com.rc.app.framework.webapp.model.page;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;

/**
 * 
 * @author wind
 *
 */
public class PageManager{
	public PageManager()
	{
	}
	/**
	 * @param query
	 * @param countQuery
	 * @param page
	 * @param pageSize
	 */
	public static PageWraper getPageWraper(Query query, Query countQuery, int page, int pageSize) throws Exception{
		PageInfo pageInfo = new PageInfo();
		PageWraper pageWraper = new PageWraper();
		if (page <= 0) page = 1;
		try
		{
			// 取得总条数
			int count = getPageCount(countQuery);
			// 请求的页面范围，如果传入的pageSize=0则返回全部
			int start = 0;
			int end = 0;
			int prePage = 0;
			int nextPage = 0;
			int pages = 0;
			if (pageSize != 0)
			{
				start = (page - 1) * pageSize;
				end = page * pageSize;
				pages = count / pageSize;
				// if(pages==0)pages=1;
				if ((count % pageSize) > 0)
				{
					pages += 1;
				}
				if (pages <= 0)
				{
					pages = PageConst.DEF_CURRENT_PAGE;
				}
				if (page > 1)
				{
					prePage = page - 1;
				}
				else
				{
					prePage = page;
				}
				if (page < pages)
				{
					nextPage = page + 1;
				}
				else
				{
					nextPage = page;
				}
				if (end > count)
				{
					end = count;
					start = (page - 1) * pageSize;
					page = pages;
					prePage = pages - 1;
					nextPage = pages;
				}
				if (start > count)
				{
					/*
					 * start = 0; end = start + pageSize; if (end > count) { end =
					 * count; } page = 1; prePage = 1; if (pages > 1) { nextPage =
					 * 2; } else { nextPage = 1; }
					 */
					end = count;
					page = pages;
					start = (page - 1) * pageSize;
					if (pages > 1)
					{
						prePage = pages - 1;
						nextPage = pages;
					}
					else
					{
						prePage = 1;
						nextPage = 1;
					}
				}
			}

			// 取出页面列表
			List results = getPageList(query, start, end, pageSize);

			// 保存翻页信息对象
			pageInfo.setPage(page);
			pageInfo.setPageSize(pageSize);
			pageInfo.setCount(count);
			pageInfo.setPages(pages);
			pageInfo.setPrePage(prePage);
			pageInfo.setNextPage(nextPage);
			pageInfo.setStart(start + 1);
			pageInfo.setEnd(end);

			// 生成Vector
			pageWraper.setPageInfo(pageInfo);
			pageWraper.setResult(results);

		}
		catch (Exception he)
		{
			// if (tx != null) {
			// tx.rollback();
			// he.printStackTrace();
			// }
			throw he;
		}

		// 返回对象
		return pageWraper;
	}

	
	/**
	 * @param iSql
	 * @param countSql
	 * @param page
	 * @param pageSize
	 * @param session
	 * @param sqlType
	 *            查询语句类型: 0 hsql, 1 原生sql
	 * @param countSqlType
	 *            查询语句类型: 0 hsql, 1 原生sql
	 */
	public static PageWraper getPageWraper(String iSql, String countSql, int page, int pageSize, Session session,
			int sqlType, int countSqlType) throws Exception
	{
		// Transaction tx = null;
		PageInfo pageInfo = new PageInfo();
		PageWraper pageWraper = new PageWraper();
		// Vector vResults = new Vector(2);
		String sql = iSql.toString().trim();

		if (page <= 0) page = 1;
		try
		{
			// 取得总条数
			int count = getPageCount(countSql, session, countSqlType);

			// 请求的页面范围，如果传入的pageSize=0则返回全部
			int start = 0;
			int end = 0;
			int prePage = 0;
			int nextPage = 0;
			int pages = 0;

			if (pageSize != 0)
			{
				start = (page - 1) * pageSize;
				end = page * pageSize;
				pages = count / pageSize;
				// if(pages==0)pages=1;
				if ((count % pageSize) > 0)
				{
					pages += 1;
				}
				if (pages <= 0)
				{
					pages = PageConst.DEF_CURRENT_PAGE;
				}
				if (page > 1)
				{
					prePage = page - 1;
				}
				else
				{
					prePage = page;
				}
				if (page < pages)
				{
					nextPage = page + 1;
				}
				else
				{
					nextPage = page;
				}
				if (end > count)
				{
					end = count;
					start = (page - 1) * pageSize;
					page = pages;
					prePage = pages - 1;
					nextPage = pages;
				}
				if (start > count)
				{
					/*
					 * start = 0; end = start + pageSize; if (end > count) { end =
					 * count; } page = 1; prePage = 1; if (pages > 1) { nextPage =
					 * 2; } else { nextPage = 1; }
					 */
					end = count;
					page = pages;
					start = (page - 1) * pageSize;
					if (pages > 1)
					{
						prePage = pages - 1;
						nextPage = pages;
					}
					else
					{
						prePage = 1;
						nextPage = 1;
					}
				}
			}
			// FileLogger.info("page :"+page+" pageSize :"+pageSize+" pages
			// :"+pages+" start :"+start+" end :"+end);
			// 取出页面列表
			List results = getPageList(sql.toString(), start, end, pageSize, session, sqlType);
			// SessionUtil.closeSession(session);

			// 保存翻页信息对象
			pageInfo.setPage(page);
			pageInfo.setPageSize(pageSize);
			pageInfo.setCount(count);
			pageInfo.setPages(pages);
			pageInfo.setPrePage(prePage);
			pageInfo.setNextPage(nextPage);
			pageInfo.setStart(start + 1);
			pageInfo.setEnd(end);

			// 生成Vector
			pageWraper.setPageInfo(pageInfo);
			pageWraper.setResult(results);

		}
		catch (Exception he)
		{
			// if (tx != null) {
			// tx.rollback();
			// he.printStackTrace();
			// }
			throw he;
		}
		// 返回对象
		return pageWraper;
	}

	// 根据传入的countQuery获得记录总数
	private static int getPageCount(Query countQuery) throws Exception
	{
		int count = 0;
		try
		{
			List list = countQuery.list();
			if (list.size() > 0)
			{
				count = Integer.parseInt(list.get(0).toString());
			}
			else
			{
				count = 0;
			}
		}
		catch (Exception he)
		{
			throw he;
		}
		finally
		{
		}
		return count;
	}

	// 根据SQL语句获得记录总数
	private static int getPageCount(String sql, Session s, int countSqlType) throws Exception
	{
		// FileLogger.info("getPageCounttimes :"+getPageCounttimes++);
		// Transaction tx = null;
		int count = 0;
		try
		{
			// tx = s.beginTransaction();
			Query q = null;
			if (countSqlType == 0)
			{
				q = s.createQuery(sql);
			}
			else
			{
				q = s.createSQLQuery(sql);
			}
			List list = q.list();
			if (list.size() > 0)
			{
				count = Integer.parseInt(list.get(0).toString());
			}
			else
			{
				count = 0;
			}
			// tx.commit();
		}
		catch (Exception he)
		{
			// if (tx != null) {
			// tx.rollback();
			// }
			// FileLogger.printStackTrace(he);
			// he.printStackTrace();
			throw he;
		}
		finally
		{
		}
		return count;
	}

	//根据传入的query获得记录
	private static List getPageList(Query query, int start, int end, int pageSize)
			throws HibernateException
	{
		List results = null;
		try
		{
			// 如果传入的pageSize=0则返回全部
			if (pageSize != 0)
			{
				query.setFirstResult(start);
				query.setMaxResults(end - start);
			}
			results = query.list();
			
		}
		catch (HibernateException he)
		{
			throw he;
		}
		return results;
	}

	// 根据传入SQL语句获得记录
	private static List getPageList(String sql, int start, int end, int pageSize, Session s, int sqlType)
			throws HibernateException
	{
		// FileLogger.info("getPageListtimes :"+getPageListtimes++);
		// Transaction tx = null;
		List results = null;
		try
		{
			// tx = s.beginTransaction();
			Query q = null;
			if (sqlType == 0)
			{
				q = s.createQuery(sql);
			}
			else
			{
				q = s.createSQLQuery(sql);
			}
			// 如果传入的pageSize=0则返回全部
			if (pageSize != 0)
			{
				// System.out.println(start + "*to*" + end);
				q.setFirstResult(start);
				q.setMaxResults(end - start);
			}
			results = q.list();
			// System.out.println("results size:" + results.size());
			// tx.commit();
		}
		catch (HibernateException he)
		{
			// if (tx != null) {
			// tx.rollback();
			he.printStackTrace();
			// }
			throw he;
		}
		finally
		{
		}
		return results;
	}

	/**
	 * 删除order by
	 * 
	 * @param sql
	 *            String
	 * @return String
	 */
	private static String delOrderBy(String sql)
	{
		StringBuffer temp = new StringBuffer();
		sql = "(" + sql + ")";
		int position;
		String[] strArray = sql.split("order by");
		for (int i = 1; i < strArray.length; i++)
		{
			strArray[i] = ")";
		}
		for (int i = 0; i < strArray.length; i++)
		{
			temp.append(strArray[i]);
		}
		String result = temp.toString();
		if (temp.length() >= 2)
		{
			result = result.substring(1, result.length() - 1);
		}
		return result;
	}

	/**
	 * @desc  针对分页查询的 分页信息的包装
	 * @param pageInfo		修改设置 当前页/页面大小/页面分组大小  默认为PageConst中设定
	 * @param pageResult	当前页的查询结果
	 * @param count			满足查询条件 的总记录数
	 * @return
	 */
	public static PageWraper getPageWraper(PageInfo pageInfo, List pageResult, int count){
	  PageWraper pageWraper = new PageWraper();
	  pageWraper.setPageInfo(new PageInfo());
	  
	  if(pageResult == null || pageResult.size() < 1){
		  return pageWraper;
	  }
	  else{
		  pageInfo.setCount(count);
		  pageInfo = PageInfo.resetPageInfo(pageInfo);
		  pageWraper.setResult(pageResult);
		  pageWraper.setPageInfo(pageInfo);
	  }
	  return pageWraper;
	}
}
