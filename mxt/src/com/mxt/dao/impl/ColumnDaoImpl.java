package com.mxt.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.mxt.dao.ColumnDao;
import com.mxt.entity.Columns;
import com.mxt.mapper.ColumnsMapper;
import com.mxt.mapper.VideoMapper;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-21 下午2:41:55
 */
@Service
public class ColumnDaoImpl implements ColumnDao {
	@Autowired(required=false)
	@Qualifier("columnsmapper")
	private ColumnsMapper columnsMapper;
	public List<Columns> getcolumnsByFunid(Integer funid) throws Exception {
		return columnsMapper.getcolumnsByFunid(funid);
	}
	public List<Columns> getAllColumns() {
		return columnsMapper.columnsMapper();
	}

}
