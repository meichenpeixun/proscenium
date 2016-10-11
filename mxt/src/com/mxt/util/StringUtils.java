package com.mxt.util;

public class StringUtils {
	public static boolean notNull(String rs){
		if(rs != null && rs != "null" && rs != "" && !"".equals(rs) && !"".equals(rs.trim()) && !"null".equals(rs)){
			return true;
		}
		return false;
	}
}
