package com.mxt.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.ModelAttribute;


/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016年7月10日 下午3:27:25
 */
public class BaseController {
	protected HttpServletRequest request; 
    protected HttpServletResponse response; 
    protected HttpSession session; 
     
    @ModelAttribute 
    public void setReqAndRes(HttpServletRequest request, HttpServletResponse response) throws IOException{ 
    	response.setContentType("text/html");
    	response.setCharacterEncoding("utf-8");
    	request.setCharacterEncoding("utf-8");
        this.request = request; 
        this.response = response; 
        this.session = request.getSession(); 
    
    }
}
