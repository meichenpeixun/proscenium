package com.mxt.exception;
import org.springframework.dao.DataAccessException;

/**
*
* @author：wubiao
* @date：2016年7月10日 下午3:27:25
*/
public class BizException extends DataAccessException {
   private static final long serialVersionUID=1L;
   public BizException(String msg){
	   super(msg);
   }
   public BizException(String msg,Throwable cause)
   {
	   super(msg,cause);
   }
}
