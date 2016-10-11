package com.mxt.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.mxt.dao.FunDao;
import com.mxt.entity.Funs;
import com.mxt.entity.Menus;
import com.mxt.mapper.FunsMapper;
import com.mxt.mapper.VideoMapper;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-21 下午1:47:18
 */
@Service("FunDaoImpl")
public class FunDaoImpl implements FunDao {
	@Autowired(required=false)
    @Qualifier("funsmapper")
    private FunsMapper funsmapper;
	public Funs getFunsByFunid(Integer funid) throws Exception {
		return funsmapper.getFunsByFunid(funid);
	}
	public List<Funs> getAllFunid() {
		return funsmapper.getAllFuns();
	}
	public List<Menus> getAllMenus() {
		return funsmapper.getAllMenus();
	}

}
