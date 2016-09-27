package com.mxt.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Select;

import com.mxt.entity.Chaptertable;
import com.mxt.entity.CounseTable;
import com.mxt.entity.Video;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：Aug 12, 2016 10:23:48 AM
 */
public class CenSqls {
	 public String getPVideoByUIdSql(Map<Integer, Object> parameters){  
		 	Integer audit = (Integer)parameters.get("audit");
	        String sql = "SELECT a.videoid,a.audit,a.categorys,a.coursename,a.descript,a.filename,a.screenshotpath,a.tags,a.title,a.uptime,a.videopath,a.vtypes ,b.userid,b.username,c.playnumber,c.authority,c.clicknumber,c.commnumber,c.praisenumber,c.sharenumber,c.stepnumber FROM web_video_upload AS a LEFT JOIN web_video_comment  as c on a.videoid = c.videoid LEFT JOIN web_users AS b ON a.userid =b.userid where a.deletetype =0 and a.userid =#{userid} ";  
	        switch (audit) {
			case 10:
				sql += " and (a.audit=0 or a.audit=1 or a.audit=2 or a.audit=3 or a.audit=4 or a.audit=5 or a.audit=6)";  
				break;
			case 26:
				sql += " and (a.audit=2 or a.audit=3 or a.audit=4 or a.audit=5 or a.audit=6)";  
				break;
			case 0:
				sql += " and a.audit=0 ";  
				break;
			case 1:
				sql += " and a.audit=1 ";  
				break;
			case 11:
				sql += " and (a.descript IS NULL OR a.categorys IS NULL OR a.coursename IS NULL OR a.tags IS NULL)";  
				break;
			default:
				break;
			}
	        sql += " order by uptime desc limit #{begin},#{pageSize} ";   
	        System.out.println(sql);
	        return sql;  
	    }  
	 
	 public String getCountsToUidsql(Map<Integer, Object> parameters){  
		 	Integer audit = (Integer)parameters.get("audit");
	        String sql = "select count(*) from web_video_upload  where deletetype =0 and userid = #{userid} ";  
	        switch (audit) {
			case 10:
				sql += " and (audit=0 or audit=1 or audit=2 or audit=3 or audit=4 or audit=5 or audit=6 )";  
				break;
			case 26:
				sql += " and (audit=2 or audit=3 or audit=4 or audit=5 or audit=6)";  
				break;
			case 0:
				sql += " and audit=0";  
				break;
			case 1:
				sql += " and audit=1";  
				break;
			case 11:
				sql += " and (descript IS NULL OR categorys IS NULL OR coursename IS NULL OR tags IS NULL)";  
				break;
			default:
				break;
			}
	        System.out.println(sql);
	        return sql;  
	    }  
	    
	     
	    //更新视频
	 public String updateVideoSql(Map<Integer, Object> parameters){  
		 Video video = (Video)parameters.get("video");
		 System.out.println(video.getDescript());
		 //"update  web_video_upload set  title=#{title},screenshotpath=#{screenshotpath},descript=#{descript},categorys=#{categorys},coursename=#{coursename},tags=#{tags} where userid = #{userid} and title=#{filename}"
	        String sql = "update  web_video_upload set audit="+video.getAudit()+",vtypes="+video.getVtypes()+", title='"+video.getTitle()+"',descript='"+video.getDescript()+"',categorys="+video.getCategorys()+",coursename='"+video.getCoursename()+"',tags='"+video.getTags()+"',chapterId="+video.getChapterId()+"";
	        if(video.getScreenshotpath()!=null&&""!=video.getScreenshotpath()){
	        	sql+=" ,screenshotpath='"+video.getScreenshotpath()+"'";
	        }
	        sql+=" where videoid = "+video.getVideoid();
	        System.out.println(sql);
	        return sql;  
	    }  
	   //更新课程
		 public String updateCounseSql(Map<Integer, Object> parameters){  
			 CounseTable counse = (CounseTable)parameters.get("counse");
			 //"update cousetable set level=#{level} where coursedId =#{coursedId}"
		        String sql = "update  cousetable set level="+counse.getLevel();//+",couseTitle="+counse.getCouseTitle()+", couseTag='"+counse.getCouseTag()+"',couseDes='"+counse.getCouseDes()+"',COLUMNID="+counse.getCOLUMNID();
		        if(counse.getCouseCoverPath()!=null&&""!=counse.getCouseCoverPath()){
		        	sql+=" ,couseCoverPath='"+counse.getCouseCoverPath()+"'";
		        }
		        if(counse.getCouseTitle()!=null&&""!=counse.getCouseTitle()){
		        	sql+=" ,couseTitle='"+counse.getCouseTitle()+"'";
		        }
		        if(counse.getCouseTag()!=null&&""!=counse.getCouseTag()){
		        	sql+=" ,couseTag='"+counse.getCouseTag()+"'";
		        }
		        if(counse.getCouseDes()!=null&&""!=counse.getCouseDes()){
		        	sql+=" ,couseDes='"+counse.getCouseDes()+"'";
		        }
		        if(counse.getCOLUMNID()!=0){
		        	sql+=" ,COLUMNID="+counse.getCOLUMNID();
		        }
		        sql+=" ,updateTime=now()";
		        sql+=" where coursedId = "+counse.getCoursedId();
		        System.out.println(sql);
		        return sql;  
		    }  
	//@Select("SELECT a.videoid,a.audit,a.categorys,a.coursename,a.descript
	 //,a.filename,a.screenshotpath,a.tags,a.title,a.uptime,a.videopath,a.vtypes
	 //,b.userid,b.username,c.playnumber,c.authority,c.clicknumber,c.commnumber,
	 //c.praisenumber,c.sharenumber,c.stepnumber FROM web_video_upload AS a LEFT 
	 //JOIN web_video_comment  as c on a.videoid = c.videoid LEFT JOIN web_users AS b 
	 //ON a.userid =b.userid  where a.deletetype =0 and a.categorys=#{columnid} 
	 //and a.audit=1 order by a.uptime  desc limit #{begin},#{pageSize}")
	 public String getVByCidandPage(Map<Integer, Object> parameters){  
		 	Integer columnid = (Integer)parameters.get("columnid");
	        String sql = "SELECT a.videoid,a.audit,a.categorys,a.coursename,a.descript,a.filename,a.screenshotpath,a.tags,a.title,a.uptime,a.videopath,a.vtypes ,b.userid,b.username,c.playnumber,c.authority,c.clicknumber,c.commnumber,c.praisenumber,c.sharenumber,c.stepnumber FROM web_video_upload AS a LEFT JOIN web_video_comment  as c on a.videoid = c.videoid LEFT JOIN web_users AS b ON a.userid =b.userid ";  
	        if(columnid==9999){
	        	sql+=" where a.deletetype =0 and a.audit=1";
	        }else{
	        	sql+=" where a.deletetype =0 and a.categorys=#{columnid} and a.audit=1";
	        }
	        sql+=" order by a.uptime  desc limit #{begin},#{pageSize}";
	        return sql;  
	    }  
	 //@Select("SELECT a.coursedId,a.couseTitle,a.couseTag,a.couseDes,a.couseCoverPath,b.username FROM cousetable AS a LEFT JOIN web_users as b on a.userid = b.userid where a.COLUMNID =#{COLUMNID} and a.deleteInfo=0  order by a.updateTime"
	//	+ "  desc limit #{start},#{size}")
	 public String getCounsesByCidandPage(Map<Integer, Object> parameters){  
		 	Integer columnid = (Integer)parameters.get("columnid");
	        String sql = "SELECT a.coursedId,a.couseTitle,a.couseTag,a.couseDes,a.couseCoverPath,b.username FROM cousetable AS a LEFT JOIN web_users as b on a.userid = b.userid ";  
	        if(columnid==9999){
	        	sql+=" where a.deleteInfo =0 and a.status=0 ";
	        }else{
	        	sql+=" where a.deleteInfo=0 and a.status=0 and a.COLUMNID=#{columnid} ";
	        }
	        sql+=" order by a.updateTime  desc limit #{begin},#{pageSize}";
	        return sql;  
	    }  
	 
	 public String getCountsToCidSql(Map<Integer, Object> parameters){  
		 	Integer columnid = (Integer)parameters.get("columnid");
	        String sql = "select count(*) from web_video_upload ";  
	        if(columnid==9999){
	        	sql+=" where deletetype =0 and audit=1";
	        }else{
	        	sql+=" where deletetype =0 and categorys=#{columnid} and audit=1";
	        }
	        return sql;  
	    }  
	 
	 
	 public String getCoursesCountsToCid(Map<Integer, Object> parameters){  
		 	Integer columnid = (Integer)parameters.get("columnid");
	        String sql = "select count(*) from cousetable ";  
	        if(columnid==9999){
	        	sql+=" where deleteInfo =0 ";
	        }else{
	        	sql+=" where deleteInfo =0 and COLUMNID=#{columnid} ";
	        }
	        return sql;  
	    }  
	 
	 public String getCounseCountsByUidSql(){  
	        String sql = "select count(*) from cousetable where userid = #{userid2} and deleteInfo=0";  
	        return sql;  
	    }  
	 
	 public String getVideoByUidSql(Map<Integer, Object> parameters){  
		 List<Chaptertable> chapters = (List<Chaptertable>)parameters.get("chapters");
	        
		 String sql = "SELECT * FROM web_video_upload where userid =#{userid} and deletetype =0 ";  
	        for(int i=0;i<chapters.size();i++){
	        	sql+=" and chapterId!="+chapters.get(i).getChapterId();
	        }
	        sql += " order by uptime desc";   
	        System.out.println(sql);
	        return sql;  
	    }  
	 
	 public String updateVChapterByIDSql(Map<Integer, Object> parameters){  
		 List<Video> videosIds =  (List<Video>) parameters.get("videosIds");
 		 String sql = "update web_video_upload set chapterId=#{coursedId} ";  
	        for(int i=0;i<videosIds.size();i++){
	        	if(i==0){
	        		sql+=" where videoid="+videosIds.get(i).getVideoid();
	        	}else{
	        		sql+=" or videoid="+videosIds.get(i).getVideoid();
	        	}
	        	
	        }
	        System.out.println(sql);
	        return sql;  
	    }  
	 
}
