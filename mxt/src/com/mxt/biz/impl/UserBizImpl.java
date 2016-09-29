package com.mxt.biz.impl;

import java.util.List;

import org.springframework.dao.DataAccessException;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.mxt.biz.UserBiz;
import com.mxt.dao.*;
import com.mxt.entity.*;
import com.mxt.exception.BizException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

/**
*
* @author：wubiao
* @date：2016年7月10日 下午3:27:25
*/
@Service("userBizImpl")
public class UserBizImpl<T extends User> implements UserBiz<T> {

	@Autowired
	@Qualifier("userDaoImpl")
	private UserDao<T> dao;
	

	public T getUser(String username) throws DataAccessException {
		return dao.getUser(username);
	}


	public Object addUser(User user) throws DataAccessException {
		return dao.addUser(user);
	}


	public void addconsume(Consume co) {
		dao.addconsume(co);
		
	}


	public Consume getConsume(Integer userid) {
		return dao.addUser(userid);
	}


	public int getCountsToUid(Integer userid, int audit) {
		// TODO Auto-generated method stub
		return dao.getCountsToUid(userid,audit);
	}

	/**
	 * 根据手机号查询用户
	 */
	public User findUserByPhone(String phone){
		return dao.findUserByPhone(phone);
	}
	
	/**
	 * 添加用户
	 */
	public void appendUser(User user){
		dao.appendUser(user);
	}
	
	/**
	 * 修改登录信息
	 */
	public void updateLoginInfo(User user){
		dao.updateLoginInfo(user);
	}
}

