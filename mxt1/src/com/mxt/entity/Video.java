package com.mxt.entity;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-12 下午2:04:28
 */
public class Video implements Serializable{
	private static final long serialVersionUID = -8970848646314840509L;  
   
	
   private Integer videoid ;
   private String  filename;
   private String  title;
   private String  videopath;
   private String  screenshotpath;
   private String  descript;
   private String  uptime;
   private Integer categorys;
   private String  coursename;
   private Integer userid;
   private String  tags;
   private Integer audit;
   private Integer vtypes;
   private Integer chapterId;
   private Integer codedown;
   private String  username;
   private Integer commnumber;
   private Integer sharenumber;
   private Integer stepnumber;
   private Integer playnumber;
   private Integer praisenumber;
   private Integer clicknumber;
   private String  authority;
   
   
	public Integer getVideoid() {
		return videoid;
	}
	public void setVideoid(Integer videoid) {
		this.videoid = videoid;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getVideopath() {
		return videopath;
	}
	public void setVideopath(String videopath) {
		this.videopath = videopath;
	}
	public String getScreenshotpath() {
		return screenshotpath;
	}
	public void setScreenshotpath(String screenshotpath) {
		this.screenshotpath = screenshotpath;
	}
	public String getDescript() {
		return descript;
	}

	public void setDescript(String descript) {
		this.descript = descript;
	}
	public String getUptime() {
		return uptime;
	}
	public void setUptime(String uptime) {
		this.uptime = uptime;
	}
	public Integer getCategorys() {
		return categorys;
	}
	public void setCategorys(Integer categorys) {
		this.categorys = categorys;
	}
	public String getCoursename() {
		return coursename;
	}
	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
   
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	
	public Integer getChapterId() {
		return chapterId;
	}
	public void setChapterId(Integer chapterId) {
		this.chapterId = chapterId;
	}
	public Integer getAudit() {
		return audit;
	}
	public void setAudit(Integer audit) {
		this.audit = audit;
	}
	public Integer getVtypes() {
		return vtypes;
	}
	public void setVtypes(Integer vtypes) {
		this.vtypes = vtypes;
	}
	public Integer getCodedown() {
		return codedown;
	}
	public void setCodedown(Integer codedown) {
		this.codedown = codedown;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Integer getCommnumber() {
		return commnumber;
	}
	public void setCommnumber(Integer commnumber) {
		this.commnumber = commnumber;
	}
	public Integer getSharenumber() {
		return sharenumber;
	}
	public void setSharenumber(Integer sharenumber) {
		this.sharenumber = sharenumber;
	}
	public Integer getStepnumber() {
		return stepnumber;
	}
	public void setStepnumber(Integer stepnumber) {
		this.stepnumber = stepnumber;
	}
	public Integer getPlaynumber() {
		return playnumber;
	}
	public void setPlaynumber(Integer playnumber) {
		this.playnumber = playnumber;
	}
	public Integer getPraisenumber() {
		return praisenumber;
	}
	public void setPraisenumber(Integer praisenumber) {
		this.praisenumber = praisenumber;
	}
	public Integer getClicknumber() {
		return clicknumber;
	}
	public void setClicknumber(Integer clicknumber) {
		this.clicknumber = clicknumber;
	}
	public String getAuthority() {
		return authority;
	}
	public void setAuthority(String authority) {
		this.authority = authority;
	}
public Video(){
	   
   }
public Video(String title,String filename, String videopath,
		String screenshotpath, String descript, String uptime) {
	super();
	this.filename=filename;
	this.title = title;
	this.videopath = videopath;
	this.screenshotpath = screenshotpath;
	this.descript = descript;
	this.uptime = uptime;
}
public Video(Integer videoid, String filename, String title, String videopath,
		String screenshotpath, String descript, 
		Integer categorys, String coursename, Integer userid, String tags,Integer vtypes) {
	super();
	this.videoid = videoid;
	this.filename = filename;
	this.title = title;
	this.videopath = videopath;
	this.screenshotpath = screenshotpath;
	this.descript = descript;
	this.categorys = categorys;
	this.coursename = coursename;
	this.userid = userid;
	this.tags = tags;
	this.vtypes = vtypes;
}
   
}
