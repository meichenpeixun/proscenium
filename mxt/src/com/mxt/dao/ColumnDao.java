package com.mxt.dao;

import java.util.List;

import com.mxt.entity.Columns;
import com.mxt.entity.Funs;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-21 下午2:39:55
 */
public interface ColumnDao {
	public List<Columns> getcolumnsByFunid(Integer funid)throws Exception;

	public List<com.mxt.entity.Columns> getAllColumns();
}
