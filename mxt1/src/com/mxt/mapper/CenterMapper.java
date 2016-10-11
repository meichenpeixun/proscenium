package com.mxt.mapper;



import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.UpdateProvider;
import org.mybatis.spring.annotation.Mapper;
import org.springframework.stereotype.Repository;

import com.mxt.entity.Chaptertable;
import com.mxt.entity.Columns;
import com.mxt.entity.CounseTable;
import com.mxt.entity.Funs;
import com.mxt.entity.Menus;
import com.mxt.entity.User;
import com.mxt.entity.Video;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016年7月8日 下午1:06:17
 */
@Mapper("centermapper")
public interface CenterMapper extends SqlMapper{
     
	/*
	 * 动态绑定sql语句
	 * @Select("<script>select * from web_video_upload where <if test=\"userid !=null \">userid = #{userid} </if> <if test=\"phone !=null \">phone = #{phone} </if> <if test=\"usermail !=null \">usermail = #{usermail } </if></script>")
	 *@Select("select * from web_video_upload  where userid = #{userid} and audit=#{audit} order by uptime desc limit 0,#{pageSize}")  
	 */
	@SelectProvider(type = CenSqls.class, method = "getPVideoByUIdSql")  
	public List<Video> findPVideoByUId(@Param("userid") Integer userid, @Param("begin") Integer begin, @Param("pageSize") Integer pageSize,@Param("audit") Integer audit);
   
	//@Select("select count(*) from web_video_upload  where userid = #{userid} and audit=#{audit}")  
	@SelectProvider(type = CenSqls.class, method = "getCountsToUidsql")
    public int getCountsToUid(@Param("userid") Integer userid,@Param("audit") Integer audit);
	//删除单个视频update  web_video_upload set  title=#{title} where userid = #{userid} 
	@Update("update  web_video_upload  set  deletetype =1  where videoid = #{videoid}")
	public void deleteVideoByVID(Integer videoid);
	
	@Select("select * from menus order by order_id desc") 
	public List<Menus> getAllMenus();
    @Select("select * from funs order by order_id desc") 
	public List<Funs> getAllFuns();
    @Select("select * from web_video_upload where videoid = #{videoid}") 
	public Video getVideoByID(Integer videoid);
    
    @UpdateProvider(type = CenSqls.class, method = "updateVideoSql")
	public void updateVideo(@Param("video") Video video);
    
    @Insert("insert cousetable (userid,couseTitle,couseTag,couseDes,COLUMNID,couseCoverPath,createTime,level) values (#{userid},#{couseTitle},#{couseTag},#{couseDes},#{COLUMNID},#{couseCoverPath},now(),#{level})")
	public void addCounse(CounseTable counse);
    @UpdateProvider(type = CenSqls.class, method = "updateCounseSql")//"update cousetable set level=#{level} where coursedId =#{coursedId}"
	public void updateCounse(@Param("counse") CounseTable counse);
    @Select("select coursedId from cousetable  where couseTitle =#{couseTitle} and userid=#{userid} and deleteInfo=0 order by createTime desc LIMIT 1")
	public int findCouIdTime(CounseTable counse);
    @Select("select chapterId from chaptertable  where couseId =#{couseId} and chapterName=#{chapterName} and deleteinfo=0 order by chapterId  desc LIMIT 1")
	public Integer findChaoterId(Chaptertable chapter);
    @Insert("insert chaptertable (couseId,chapterName) values (#{couseId},#{chapterName})")
	public void addChapter(Chaptertable chapter);
    @Select("select * from cousetable  where userid =#{userid} and deleteInfo=0 order by createTime desc" )
	public List<CounseTable> getCounseByUid(Integer userid);
   // @SelectProvider(type = CenSqls.class, method = "getCounseCountsByUidSql")
    @Select("select count(*) from cousetable where userid = #{userid2} and deleteInfo=0") 
	public Integer getCounseCountsByUid(Integer userid2);
    @Select("select * from cousetable where userid = #{userid2} and deleteInfo=0 order by createTime desc limit #{begin2},#{pageSize2} ") 
	public List<CounseTable> getCounseByUidandPage(@Param("userid2") Integer userid2,@Param("begin2")  Integer begin2,
			@Param("pageSize2") int pageSize2);
    @Select("select * from cousetable where coursedId = #{coursedId} and deleteInfo=0") 
	public CounseTable getCounseBycoursedId(Integer coursedId);
    @Select("select * from chaptertable where couseId=#{counseId} and deleteinfo=0")
	public List<Chaptertable> getChaptersBycoursedId(Integer counseId);
    @Select("select count(*) from web_video_upload where chapterId=#{chapterId} and deletetype =0")
	public int getVCountsToChapterId(int chapterId);

    @Update("update cousetable set deleteInfo=1 where coursedId =#{counseId}")
   	public void delCouseById(Integer counseId);

	@Update("update chaptertable set deleteinfo=1 where chapterId =#{chapterId}")
	public void delChapterById(Integer chapterId);
	
	@Select("SELECT a.videoid,a.audit,a.categorys,a.coursename,a.descript,a.filename,a.screenshotpath,a.tags,a.title,a.uptime,a.videopath,a.vtypes ,b.userid,b.username,c.playnumber,c.authority,c.clicknumber,c.commnumber,c.praisenumber,c.sharenumber,c.stepnumber FROM web_video_upload AS a LEFT JOIN web_video_comment  as c on a.videoid = c.videoid LEFT JOIN web_users AS b ON a.userid =b.userid  where a.chapterId=#{chapterId} and a.deletetype =0 and a.userid =#{userid} order by a.chapterId desc limit #{begin},#{pageSize}")
	public List<Video> getVideoBychapterIdAndPage(@Param("userid") Integer userid, @Param("chapterId") int chapterId,@Param("begin") Integer begin,
			@Param("pageSize") int pageSize);
	
	@SelectProvider(type = CenSqls.class, method = "getVideoByUidSql")
	public List<Video> getVideoByUid(@Param("userid") Integer userid, @Param("chapters") List<Chaptertable> chapters);

	@UpdateProvider(type = CenSqls.class, method = "updateVChapterByIDSql")
	public void updateVChapterByID(@Param("coursedId") Integer coursedId,@Param("videosIds") List<Video> videosIds);
	
	@Select("select * from cousetable where couseTitle = #{couseTitle} and userid=#{userid} and deleteInfo=0 ")
	public CounseTable getCounseByCounse(CounseTable counse);
	
	@Select("select * from chaptertable where couseId=#{couseId} and deleteinfo=0 and chapterName =#{chapterName} order by chapterId desc limit 1 ")
	public Chaptertable getchapterBychapter(Chaptertable ch);
	@Select("select * from chaptertable where chapterId=#{chapterId} and deleteinfo=0")
	public Chaptertable getchapterBychapterID(Integer chapterId);

	
	
}
