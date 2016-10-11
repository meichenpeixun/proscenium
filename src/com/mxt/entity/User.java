package com.mxt.entity;

import java.io.Serializable;

import javax.persistence.Transient;

/**
* 实体类
* @author：wubiao
* @date：2016年7月10日 下午3:27:25
*/
public class User implements Serializable{
	private static final long serialVersionUID = -7970848646314840509L;  

       private Integer userid;
       private String username;
       private String password;
       private String idnumber;
       private String fullname;
       private String email;
       private String phone;
       private String state;
       private String idmark;
       private String photoname;
       private String photopath;
       private String code;
       private int usersex;
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getIdnumber() {
		return idnumber;
	}
	public void setIdnumber(String idnumber) {
		this.idnumber = idnumber;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getIdmark() {
		return idmark;
	}
	public void setIdmark(String idmark) {
		this.idmark = idmark;
	}
	public String getPhotoname() {
		return photoname;
	}
	public void setPhotoname(String photoname) {
		this.photoname = photoname;
	}
	public String getPhotopath() {
		return photopath;
	}
	public void setPhotopath(String photopath) {
		this.photopath = photopath;
	}
	@Transient 
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}
	
	public int getUsersex() {
		return usersex;
	}
	public void setUsersex(int usersex) {
		this.usersex = usersex;
	}
	public User(Integer userid, String username, String password,
			String idnumber, String fullname, String email, String phone,
			String state, String idmark, String photoname, String photopath,int usersex) {
		super();
		this.userid = userid;
		this.username = username;
		this.password = password;
		this.usersex =usersex;
		this.idnumber = idnumber;
		this.fullname = fullname;
		this.email = email;
		this.phone = phone;
		this.state = state;
		this.idmark = idmark;
		this.photoname = photoname;
		this.photopath = photopath;
	}
	public User(String username, String password){
		this.username = username;
		this.password = password;
	
	}
	public User(){
		
	}
	
}
