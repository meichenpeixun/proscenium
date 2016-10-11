package com.mxt.dao;
import java.util.List;  
import org.springframework.dao.DataAccessException;

/**
*
* @author：wubiao
* @date：2016年7月10日 下午3:27:25
*/
public interface AccountDao<T> {
	public boolean addAccount(T entity) throws DataAccessException;
	public T getAccount(Integer id) throws DataAccessException; 
	public List<T> getList() throws DataAccessException;

}
