package com.mxt.entity;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：Aug 9, 2016 9:03:25 PM
 */
public class Consume  implements Serializable{
	private static final long serialVersionUID = -7970848646314840509L;  
    
	private Integer conid; //消费记录表id
	private Integer userid;//用户id
	private BigDecimal income;//收入
	private BigDecimal monout;//支出
	private BigDecimal pay;//充值
	private Integer mincome;//美豆收入
	private Integer mpay;//美豆支出
	private Integer mbalance;//剩余美豆
	private BigDecimal balance;//账户余额
	private Integer coupon100;//100元优惠券
	private Integer coupon50;//50元优惠券
	private Integer coupon20;//20元优惠券
	private Integer coupon10;//10元优惠券
	private Integer coupon5;//5元优惠券
	public Integer getConid() {
		return conid;
	}
	public void setConid(Integer conid) {
		this.conid = conid;
	}
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	public BigDecimal getIncome() {
		return income;
	}
	public void setIncome(BigDecimal income) {
		this.income = income;
	}
	public BigDecimal getMonout() {
		return monout;
	}
	public void setMonout(BigDecimal monout) {
		this.monout = monout;
	}
	public BigDecimal getPay() {
		return pay;
	}
	public void setPay(BigDecimal pay) {
		this.pay = pay;
	}
	public Integer getMincome() {
		return mincome;
	}
	public void setMincome(Integer mincome) {
		this.mincome = mincome;
	}
	public Integer getMpay() {
		return mpay;
	}
	public void setMpay(Integer mpay) {
		this.mpay = mpay;
	}
	public Integer getMbalance() {
		return mbalance;
	}
	public void setMbalance(Integer mbalance) {
		this.mbalance = mbalance;
	}
	public BigDecimal getBalance() {
		return balance;
	}
	public void setBalance(BigDecimal balance) {
		this.balance = balance;
	}
	public Integer getCoupon100() {
		return coupon100;
	}
	public void setCoupon100(Integer coupon100) {
		this.coupon100 = coupon100;
	}
	public Integer getCoupon50() {
		return coupon50;
	}
	public void setCoupon50(Integer coupon50) {
		this.coupon50 = coupon50;
	}
	public Integer getCoupon20() {
		return coupon20;
	}
	public void setCoupon20(Integer coupon20) {
		this.coupon20 = coupon20;
	}
	public Integer getCoupon10() {
		return coupon10;
	}
	public void setCoupon10(Integer coupon10) {
		this.coupon10 = coupon10;
	}
	public Integer getCoupon5() {
		return coupon5;
	}
	public void setCoupon5(Integer coupon5) {
		this.coupon5 = coupon5;
	}
	public Consume(Integer conid, Integer userid, BigDecimal income,
			BigDecimal monout, BigDecimal pay, Integer mincome, Integer mpay,
			Integer mbalance, BigDecimal balance, Integer coupon100,
			Integer coupon50, Integer coupon20, Integer coupon10,
			Integer coupon5) {
		super();
		this.conid = conid;
		this.userid = userid;
		this.income = income;
		this.monout = monout;
		this.pay = pay;
		this.mincome = mincome;
		this.mpay = mpay;
		this.mbalance = mbalance;
		this.balance = balance;
		this.coupon100 = coupon100;
		this.coupon50 = coupon50;
		this.coupon20 = coupon20;
		this.coupon10 = coupon10;
		this.coupon5 = coupon5;
	}
     	public Consume(Integer userid){
		this.userid =userid;
	    }
		public Consume(){
					
		}
		@Override
		public String toString() {
			return "Consume [conid=" + conid + ", userid=" + userid
					+ ", income=" + income + ", monout=" + monout + ", pay="
					+ pay + ", mincome=" + mincome + ", mpay=" + mpay
					+ ", mbalance=" + mbalance + ", balance=" + balance
					+ ", coupon100=" + coupon100 + ", coupon50=" + coupon50
					+ ", coupon20=" + coupon20 + ", coupon10=" + coupon10
					+ ", coupon5=" + coupon5 + "]";
		}
		
}
