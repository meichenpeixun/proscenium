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



  
}
