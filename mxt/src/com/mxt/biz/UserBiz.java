package com.mxt.biz;
import java.util.*;

import org.springframework.dao.DataAccessException;

import com.mxt.entity.Consume;
import com.mxt.entity.User;

/**
*
* @author：wubiao
* @date：2016年7月10日 下午3:27:25
*/
public interface UserBiz<T> {
   
   public T getUser(String username) throws DataAccessException;

   public Object addUser(User user)throws DataAccessException;

   public void addconsume(Consume co);

   public Consume getConsume(Integer userid);

   public int getCountsToUid(Integer userid, int audit);

   public User findUserByPhone(String phone);					//根据手机号查询用户

   public void appendUser(User user);								//添加用户
   
   public void updateLoginInfo(User user);		//修改登录信息
   
   public void updatePassword(User user);		//修改密码
   
   public void updateUserName(User user);		//修改用户名
}
