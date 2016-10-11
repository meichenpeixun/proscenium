package com.mxt.entity;
/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-21 上午10:40:08
 */
public class Menus {
    private Integer menuid;
    private String  menuname;
    private String  menuurl;
    private Integer isshow;
    private Integer order_id;
	public Integer getMenuid() {
		return menuid;
	}
	public void setMenuid(Integer menuid) {
		this.menuid = menuid;
	}
	public String getMenuname() {
		return menuname;
	}
	public void setMenuname(String menuname) {
		this.menuname = menuname;
	}
	public String getMenuurl() {
		return menuurl;
	}
	public void setMenuurl(String menuurl) {
		this.menuurl = menuurl;
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
    
}
