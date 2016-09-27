package com.mxt.entity;

import java.util.Date;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：Sep 20, 2016 4:52:35 AM
 */
public class CodesTablemp4 {
       private int codeid;
       private String codeStrmp4;
       private Date createtime;
       private int status;
	public int getCodeid() {
		return codeid;
	}
	public void setCodeid(int codeid) {
		this.codeid = codeid;
	}
	
	public String getCodeStrmp4() {
		return codeStrmp4;
	}
	public void setCodeStrmp4(String codeStrmp4) {
		this.codeStrmp4 = codeStrmp4;
	}
	public Date getCreatetime() {
		return createtime;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
       
}
