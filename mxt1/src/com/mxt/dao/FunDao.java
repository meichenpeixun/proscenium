package com.mxt.dao;

import java.util.List;

import com.mxt.entity.Funs;
import com.mxt.entity.Menus;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-21 下午1:46:18
 */
public interface FunDao {
	 /**
     * 根据FunId查询菜单
     * @param funid
     * @return funs
     * @throws Exception
     */
   public Funs getFunsByFunid(Integer funid)throws Exception;

	public List<Funs> getAllFunid();

	public List<Menus> getAllMenus();

}
