package com.mxt.mapper;



import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.mybatis.spring.annotation.Mapper;

import com.mxt.entity.Funs;
import com.mxt.entity.Menus;
import com.mxt.entity.User;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016年7月8日 下午1:06:17
 */
@Mapper("funsmapper")
public interface FunsMapper extends SqlMapper{

	
	@Select("select * from funs  where funid = #{funid}")  
	public Funs getFunsByFunid(Integer funid);
	@Select("select * from funs")  
	public List<Funs> getAllFuns();
	@Select("select * from menus")  
	public List<Menus> getAllMenus();
  
	
}
