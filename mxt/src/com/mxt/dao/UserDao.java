package com.mxt.dao;

import com.mxt.entity.Consume;
import com.mxt.entity.User;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016年7月8日 下午1:38:13
 */
public interface UserDao<T> {

	T getUser(String username);

	Object addUser(User user);

	void addconsume(Consume co);

	Consume addUser(Integer userid);

	int getCountsToUid(Integer userid, int audit);

	public User findUserByPhone(String phone);					//根据手机号查询用户
	
	public void appendUser(User user);				//添加用户
	
	public void updateLoginInfo(User user);		//修改登录信息
}
