package com.mxt.controller;

import javax.servlet.http.HttpServletRequest;

import org.mybatis.spring.annotation.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mxt.dao.FunDao;
import com.mxt.entity.Funs;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-21 下午1:52:21
 */
@Controller
@RequestMapping("/Adver")
public class AdverController extends BaseController {
	
	//用来隐藏表头信息，传递filename和id
    @RequestMapping("/head_ad")
    public String head_ad() throws Exception{
    	
	   	
   	 return "forward:/gywm.jsp";
    }
    @ExceptionHandler(Exception.class)
    public String exception(Exception e,HttpServletRequest request)
    {
 	   request.setAttribute("exception", e);
 	   return  "/500"; 
    }

}
