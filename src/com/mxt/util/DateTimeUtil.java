/**
 * 
 */
package com.mxt.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.log4j.Logger;



/**
 * @author kela
 * 
 */
public class DateTimeUtil {

	private static final Logger logger = Logger.getLogger(DateTimeUtil.class);

	/** 获取日期格式 yyyy/MM/dd */
	public static final int PATTERN_1 = 1;
	/** 获取日期格式 yyyy/MM/dd HH:mm:ss */
	public static final int PATTERN_2 = 2;
	/** 获取日期格式 yyyy/MM/dd HH:mm:ss:sss */
	public static final int PATTERN_3 = 3;
	/** 获取日期格式 yyyy-MM-dd */
	public static final int PATTERN_4 = 4;
	/** 获取日期格式 yyyy-MM-dd HH:mm:ss */
	public static final int PATTERN_5 = 5;
	/** 获取日期格式 yyyy-MM-dd HH:mm:ss:sss */
	public static final int PATTERN_6 = 6;
	/** 获取年 */
	public static final int PATTERN_7 = 7;
	/** 获取年终的月份 */
	public static final int PATTERN_8 = 8;
	/** 获取年终的周数 */
	public static final int PATTERN_9 = 9;
	/** 获取月份中的周数 */
	public static final int PATTERN_10 = 10;
	/** 获取年中的天数 */
	public static final int PATTERN_11 = 11;
	/** 获取月份中的天数 */
	public static final int PATTERN_12 = 12;
	/** 获取月份中的星期 */
	public static final int PATTERN_13 = 13;
	/** 获取星期中的天数 */
	public static final int PATTERN_14 = 14;
	/** 获取一天中的小时数(0-23) */
	public static final int PATTERN_15 = 15;
	/** 获取一天中的小时数(1-24) */
	public static final int PATTERN_16 = 16;
	/** 获取am/pm 中的小时数(0-11) */
	public static final int PATTERN_17 = 17;
	/** 获取am/pm 中的小时数(1-11) */
	public static final int PATTERN_18 = 18;
	/** 获取小时中的分钟数 */
	public static final int PATTERN_19 = 19;
	/** 获取分钟中的秒数 */
	public static final int PATTERN_20 = 20;
	/** 获取毫秒数 */
	public static final int PATTERN_21 = 21;

	/**
	 * 
	 * @param date
	 *            : 格式化的日期, 如果日期为null, 则代表当前日期
	 * @param pattern
	 *            : 格式化的日期模式
	 * @return: 返回字符串日期的格式.如果发生异常或格式不存在返回null
	 */
	public static String getStringDate(Date date, int pattern) {
		String strDate = null;
		SimpleDateFormat sdf = new SimpleDateFormat();

		if (date == null)
			date = new Date();

		try {
			switch (pattern) {
			case PATTERN_1:
				sdf.applyPattern("yyyy/MM/dd");
				break;
			case PATTERN_2:
				sdf.applyPattern("yyyy/MM/dd HH:mm:ss");
				break;
			case PATTERN_3:
				sdf.applyPattern("yyyy/MM/dd HH:mm:ss:sss");
				break;
			case PATTERN_4:
				sdf.applyPattern("yyyy-MM-dd");
				break;
			case PATTERN_5:
				sdf.applyPattern("yyyy-MM-dd HH:mm:ss");
				break;
			case PATTERN_6:
				sdf.applyPattern("yyyy-MM-dd HH:mm:ss:sss");
				break;
			case PATTERN_7:
				sdf.applyPattern("y");
				break;
			case PATTERN_8:
				sdf.applyPattern("M");
				break;
			case PATTERN_9:
				sdf.applyPattern("w");
				break;
			case PATTERN_10:
				sdf.applyPattern("W");
				break;
			case PATTERN_11:
				sdf.applyPattern("D");
				break;
			case PATTERN_12:
				sdf.applyPattern("d");
				strDate = sdf.format(date);
				break;
			case PATTERN_13:
				sdf.applyPattern("F");
				break;
			case PATTERN_14:
				sdf.applyPattern("E");
				break;
			case PATTERN_15:
				sdf.applyPattern("H");
				break;
			case PATTERN_16:
				sdf.applyPattern("k");
				break;
			case PATTERN_17:
				sdf.applyPattern("K");
				break;
			case PATTERN_18:
				sdf.applyPattern("h");
				break;
			case PATTERN_19:
				sdf.applyPattern("m");
				break;
			case PATTERN_20:
				sdf.applyPattern("s");
				break;
			case PATTERN_21:
				sdf.applyPattern("S");
				break;
			default:
				break;
			}

			strDate = sdf.format(date);

			sdf = null;
		} catch (Exception e) {
			strDate = null;
			logger.error("[getStringDate] 日期格式化失败，" + e.getMessage());

		}

		return strDate;
	}

	/**
	 * 
	 * @param date
	 *            : 格式化的日期, 如果日期为null, 则代表当前日期
	 * @param pattern
	 *            : 格式化日期的字符串模式, 例如:yyyy/MM/dd
	 * @return 返回字符串日期的格式.如果发生异常或格式不存在返回null
	 */
	public static String getStringDate(Date date, String pattern) {
		try {
			SimpleDateFormat sdf = new SimpleDateFormat();
			sdf.applyPattern(pattern);
			if (date == null)
				date = new Date();

			String strDate = sdf.format(date);

			sdf = null;
			return strDate;
		} catch (Exception e) {
			logger.error("[getStringDate] 日期格式化失败，" + e.getMessage());
			System.out.println(e);
			return null;
		}
	}

	/**
	 * 
	 * @param strDate
	 *            : 字符串日期
	 * @param pattern
	 *            : 转换的格式, 字符串日期要与转换的格式相匹配
	 * @return 返回把字符串日期转换成日期, 如果发生异常返回null
	 */
	public static Date getDate(String strDate, String pattern)
			throws ParseException {
		try {
			SimpleDateFormat sdf = new SimpleDateFormat();
			sdf.applyPattern(pattern);
			Date date = sdf.parse(strDate);

			sdf = null;
			return date;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			logger.error("[getStringDate] 日期格式化失败，" + e.getMessage());
		}

		return null;
	}

	/**
	 * 
	 * @param date
	 *            : 字符串日期
	 * @param pattern
	 *            : 字符串格式,字符串格式与日期匹配
	 * @return 返回日期加一天后的日期
	 */
	public static Date dateAddA(String strDate, String pattern)
			throws ParseException {
		Date date = getDate(strDate, pattern);
		if (date == null) {
			throw new ParseException("", 1);
		}

		return dateAddSub(date, '+');
	}

	/**
	 * 
	 * @param date
	 *            : 日期
	 * @return 返回日期加一天后的日期
	 * @throws Exception
	 */
	public static Date dateAddA(Date date) {
		
		try {
			if (date == null) {
				throw new Exception("");
			}

			return dateAddSub(date, '+');
		} catch (Exception e) {
			return null;
		}
		
	}

	/**
	 * 
	 * @param date
	 *            : 字符串日期
	 * @param pattern
	 *            : 字符串格式,字符串格式与日期匹配
	 * @return 返回日期减一天后的日期
	 */
	public static Date dateSubA(String strDate, String pattern) {
		
		try {
			Date date = getDate(strDate, pattern);
			if (date == null) {
				throw new ParseException("", 1);
			}

			return dateAddSub(date, '-');
		} catch (Exception e) {
			return null;
		}
		
	}

	/**
	 * 
	 * @param date: 日期
	 * @return 返回日期减一天后的日期
	 * @throws Exception
	 */
	public static Date dateSubA(Date date) {
		
		try {
			if (date == null) {
				throw new Exception("");
			}

			return dateAddSub(date, '-');
			
		} catch (Exception e) {
			return null;
		}
		
		
	}
	
	public static Date dateAddDay(Date date,int num){
		
		Calendar cal = Calendar.getInstance();
	    cal.setTime(date);
	    //加天
	    cal.add(Calendar.DATE, num);
		return cal.getTime();
	}

	private static Date dateAddSub(Date date, char ch) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);

		if (ch == '+') {
			calendar.set(Calendar.DAY_OF_YEAR, calendar
					.get(Calendar.DAY_OF_YEAR) + 1);
		} else if (ch == '-') {
			calendar.set(Calendar.DAY_OF_YEAR, calendar
					.get(Calendar.DAY_OF_YEAR) - 1);
		}

		return calendar.getTime();
	}

	/*
 // 获得本周星期一的日期
    public String getcurrentmonday() {
    	Calendar cal = Calendar.getInstance();
    	 System.out.println("今天的日期: " + cal.getTime());

    	 int day_of_week = cal.get(Calendar.DAY_OF_WEEK) - 2;
    	 cal.add(Calendar.DATE, -day_of_week);
    	 System.out.println("本周第一天: " + cal.getTime());

    	 //cal.add(Calendar.DATE, 6);
    	 //System.out.println("本周末: " + cal.getTime());
    	 
    	 return  cal.getTime();
    }
    */
	
	/**
	 * 
	 * 计算两个整型日期之间的天数
	 * @param startDate
	 * 
	 * @param endDate
	 * 
	 * @return
	 */

	public static Integer daysBetweenDate(Date startDate, Date endDate) {

		if (startDate == null || endDate == null)

		{
			return null;
		}

		Long interval = endDate.getTime() - startDate.getTime();

		interval = interval / (24 * 60 * 60 * 1000);

		return interval.intValue();

	}

	public static void main(String[] args) throws Exception {

		//Date startDate = DateTimeUtil.getDate("2010-11-10", "yyyy-MM-dd");
		//Date endDate = DateTimeUtil.getDate("2010-11-16", "yyyy-MM-dd");

		//System.out.println(daysBetweenDate(startDate, endDate));
		//System.out.println(getStringDate(null, DateTimeUtil.PATTERN_4));
		
//		Date today = DateTimeUtil.getDate(getStringDate(null, DateTimeUtil.PATTERN_4), "yyyy-MM-dd");
//		
//	Calendar cal = Calendar.getInstance();
//   	 System.out.println("今天的日期: " + cal.getTime());
//
//   	 int day_of_week = cal.get(Calendar.DAY_OF_WEEK) - 2;
//   	 cal.add(Calendar.DATE, -day_of_week);
//   	 System.out.println("本周第一天: " + getStringDate(cal.getTime(), DateTimeUtil.PATTERN_4));
//
//   	 cal.add(Calendar.DATE, 6);
//   	 System.out.println("本周末: " + getStringDate(cal.getTime(), DateTimeUtil.PATTERN_4));
//   	 
//   	Calendar cal1 = Calendar.getInstance();
//   	cal1.setTime(today);
//   	cal1.set(Calendar.DAY_OF_MONTH, 1);
//   	cal1.add(Calendar.MONTH, 1);
//   	cal1.add(Calendar.DATE, -1);
//
//    
//    System.out.println("本月最后一天: " + getStringDate(cal1.getTime(), DateTimeUtil.PATTERN_4));
//    
//    Calendar cal2 = Calendar.getInstance();
//   	cal2.setTime(today);
//    cal2.add(Calendar.DAY_OF_MONTH, 1);
//    System.out.println("本月第一天: " + getStringDate(cal2.getTime(), DateTimeUtil.PATTERN_4));
//
//    Calendar calendar = Calendar.getInstance();   
//    calendar.set(Calendar.DAY_OF_MONTH, calendar   
//            .getActualMinimum(Calendar.DAY_OF_MONTH));   
//  
//    //return dateFormat("yyyy-MM-dd", calendar.getTime());   
//    
//    System.out.println("本月第一天: " + getStringDate(calendar.getTime(), DateTimeUtil.PATTERN_4));
//    
//    
//    Calendar calendar2 = Calendar.getInstance();   
//    calendar2.set(Calendar.DAY_OF_MONTH, calendar2   
//            .getActualMaximum(Calendar.DAY_OF_MONTH));   
//    System.out.println("本月第一天: " + getStringDate(calendar2.getTime(), DateTimeUtil.PATTERN_4));
		
		
//		System.out.println( );
		
	}

}
