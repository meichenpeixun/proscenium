package com.mxt.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.mybatis.spring.annotation.Mapper;

import com.mxt.entity.Columns;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-21 上午11:43:36
 */
@Mapper("columnsMapper")
public interface ColumnsMapper  extends SqlMapper{

	@Select("select * from columns  where funid = #{funid}")  
	public List<Columns> getcolumnsByFunid(Integer funid);
	@Select("select * from columns ")  
	public List<Columns> columnsMapper();
}
