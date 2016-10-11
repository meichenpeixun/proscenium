package com.mxt.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mxt.controller.BaseController;
import com.mxt.dao.VideoDao;
import com.mxt.entity.CodesTable;
import com.mxt.entity.CodesTablemp4;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：Sep 19, 2016 11:15:54 PM
 */
	
	@Component
	public class CodeThread {
		@Autowired
		@Qualifier("VideoDaoImpl")
		private VideoDao videoDao;
		
	    @Scheduled(cron="0 0/1 * * * ? ") //间隔5秒执行
	    public void taskCycle(){
	    	System.out.println("*******************定时器开始*********************");
	    	//flv
	    	CodesTable codes =videoDao.getOneCodeStr();
	    	if(codes!=null&&null!=codes.getCodeStrflv()){
	    	    try {
	    	    	VideoCode  v = new VideoCode();
	    	    	System.out.println("***********codeflv***********"+codes.getCodeStrflv());
	    	    	boolean mark =true;
	    	    	mark=v.DoCodes(codes.getCodeStrflv());
	    	     if(mark){
	    	    		codes.setStatus(1);
	    	    	}else{
	    	    		codes.setStatus(2);
	    	    	}
				videoDao.updateCodesTableflv(codes);
				} catch (Exception e) {
				codes.setStatus(2);
				videoDao.updateCodesTableflv(codes);	
					e.printStackTrace();
				}
	    	}
	    	//mp4
	    	CodesTablemp4 codesmp4 =videoDao.getOneCodeStrmp4();
	    	if(codesmp4!=null&&null!=codesmp4.getCodeStrmp4()){
	    	    try {
	    	    	VideoCode  v = new VideoCode();
	    	    	System.out.println("***********codemp4***********"+codesmp4.getCodeStrmp4());
	    	    	boolean mark =true;
	    	    	mark=v.DoCodes(codesmp4.getCodeStrmp4());
				if(mark){
					codesmp4.setStatus(1);
    	    	}else{
    	    		codesmp4.setStatus(2);
    	    	}
				
				videoDao.updateCodesTablemp4(codesmp4);
				} catch (Exception e) {
					codesmp4.setStatus(2);
				videoDao.updateCodesTablemp4(codesmp4);	
					e.printStackTrace();
				}
	    	}
	    	System.out.println("*******************定时器结束*********************");
	    }
	}
