package com.mxt.dao.impl;

import java.util.List;

import javax.inject.Inject;

import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;

import com.mxt.dao.UserDao;
import com.mxt.entity.*;
import com.mxt.mapper.*;

import org.springframework.beans.factory.annotation.Qualifier;
/**
*
* @author：wubiao
* E-mail: 892591048@qq.com
* @date：2016年7月8日 下午1:38:13
*/
@SuppressWarnings("unchecked")
@Repository("userDaoImpl")
public class UserDaoImpl<T extends User> implements UserDao<T> {

	@Autowired(required=false)
	@Qualifier("mapper")
	private UserMapper mapper;
	

	public T getUser(String username) throws DataAccessException {
		T entity =null;
		try{
		 entity = (T)mapper.getUserByName(username);
		}catch(DataAccessException e){
		 throw e;	
		}
		 return entity;
	}


	public Object addUser(User user) {
		mapper.insertUser(user);
		return "ok";
	}


	public void addconsume(Consume co) {
		mapper.addconsume(co);
		
	}


	public Consume addUser(Integer userid) {
		return mapper.getConsume(userid);
	}


	public int getCountsToUid(Integer userid, int audit) {
		// TODO Auto-generated method stub
		return mapper.getCountsToUid(userid,audit);
	}

}
