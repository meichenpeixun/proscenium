package com.mxt.entity;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-21 上午10:44:07
 */
public class Funs {
    private Integer funid;
    private Integer menuid;
    private String funname;
    private String funurl;
    private Integer isshow;
    private Integer order_id;
    private List<Columns> columns = new ArrayList<Columns>();
	public Integer getFunid() {
		return funid;
	}
	public void setFunid(Integer funid) {
		this.funid = funid;
	}
	public Integer getMenuid() {
		return menuid;
	}
	public void setMenuid(Integer menuid) {
		this.menuid = menuid;
	}
	public String getFunname() {
		return funname;
	}
	public void setFunname(String funname) {
		this.funname = funname;
	}
	public String getFunurl() {
		return funurl;
	}
	public void setFunurl(String funurl) {
		this.funurl = funurl;
	}
	public Integer getIsshow() {
		return isshow;
	}
	public void setIsshow(Integer isshow) {
		this.isshow = isshow;
	}
	public Integer getOrder_id() {
		return order_id;
	}
	public void setOrder_id(Integer order_id) {
		this.order_id = order_id;
	}
	public List<Columns> getColumns() {
		return columns;
	}
	public void setColumns(List<Columns> columns) {
		this.columns = columns;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Funs [funid=" + funid + ", menuid=" + menuid + ", funname="
				+ funname + ", funurl=" + funurl + ", isshow=" + isshow
				+ ", order_id=" + order_id + ", columns=" + columns + "]";
	}
	
}
