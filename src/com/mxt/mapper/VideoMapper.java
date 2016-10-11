package com.mxt.mapper;



import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.Update;
import org.mybatis.spring.annotation.Mapper;

import com.mxt.entity.Chaptertable;
import com.mxt.entity.CodesTable;
import com.mxt.entity.CodesTablemp4;
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
@Mapper("videomapper")
public interface VideoMapper extends SqlMapper{

	
	@Select("SELECT a.videoid,a.audit,a.categorys,a.coursename,a.descript,a.filename,a.screenshotpath,a.tags,a.title,a.uptime,a.videopath,a.vtypes ,b.userid,b.username,c.playnumber,c.authority,c.clicknumber,c.commnumber,c.praisenumber,c.sharenumber,c.stepnumber FROM web_video_upload AS a LEFT JOIN web_video_comment  as c on a.videoid = c.videoid LEFT JOIN web_users AS b ON a.userid =b.userid where a.videoid = #{id}")  
	public Video queryVideoById(Integer id);
    @Insert("insert web_video_upload (filename,title,videopath,screenshotpath,userid,uptime,tags,descript,chapterId,coursename) values (#{filename},#{title},#{videopath},#{screenshotpath},#{userid},#{uptime},#{tags},#{descript},#{chapterId},#{coursename})")
	public void saveVideo(Video video);  
    @Select("SELECT a.videoid,a.audit,a.categorys,a.coursename,a.descript,a.filename,a.screenshotpath,a.tags,a.title,a.uptime,a.videopath,a.vtypes ,b.userid,b.username,c.playnumber,c.authority,c.clicknumber,c.commnumber,c.praisenumber,c.sharenumber,c.stepnumber FROM web_video_upload AS a LEFT JOIN web_video_comment  as c on a.videoid = c.videoid LEFT JOIN web_users AS b ON a.userid =b.userid where a.deletetype =0 and a.audit=1  order by a.uptime  desc limit #{firstResult},#{maxResult}") //SELECT a.videoid,a.audit,a.categorys,a.coursename,a.descript,a.filename,a.screenshotpath,a.tags,a.title,a.uptime,a.videopath,a.vtypes ,b.userid,b.username,c.playnumber,c.authority,c.clicknumber,c.commnumber,c.praisenumber,c.sharenumber,c.stepnumber FROM web_video_upload AS a LEFT JOIN web_video_comment  as c on a.videoid = c.videoid LEFT JOIN web_users AS b ON a.userid =b.userid 
	public List<Video> queryALlVideo(@Param("firstResult") int firstResult, @Param("maxResult") int maxResult);
    @Select("select * from funs ") 
    public List<Funs> getAllFuns();
    @Select("select * from columns") 
	public List<Columns> getAllColumns();
    @Select("select * from menus order by order_id asc") 
    public List<Menus> getAllMenus();
    @Select("select * from columns where funid = #{funid}") 
	public List<Columns> findColumnsById(Integer funid);
    @Update("update  web_video_upload set  title=#{title},screenshotpath=#{screenshotpath},descript=#{descript},categorys=#{categorys},coursename=#{coursename},tags=#{tags},vtypes=#{vtypes},chapterId=#{chapterId} where userid = #{userid} and title=#{filename}") 
	public void updateVideo(Video video);
    @Update("update  web_video_upload set  title=#{title},descript=#{descript},categorys=#{categorys},coursename=#{coursename},tags=#{tags},vtypes=#{vtypes},chapterId=#{chapterId} where userid = #{userid} and title=#{filename}") 
	public void updateVideo2(Video video);
    @Select("select * from web_video_upload  where deletetype =0 and coursename = #{coursename} and audit=1 and userid=#{userid}")  
	public List<Video> findVideosByCourse(@Param("coursename") String coursename,@Param("userid") Integer userid);
    @Delete("delete from web_video_upload  where  userid = #{userid} and  title = #{filename}")  
    public void deletevideo(Integer userid, String filename);
    @Select("select menuid from funs where funid = #{funid} ") 
    public String findMenuIDByFunID(Integer funid);
    //@Select("SELECT a.videoid,a.audit,a.categorys,a.coursename,a.descript,a.filename,a.screenshotpath,a.tags,a.title,a.uptime,a.videopath,a.vtypes ,b.userid,b.username,c.playnumber,c.authority,c.clicknumber,c.commnumber,c.praisenumber,c.sharenumber,c.stepnumber FROM web_video_upload AS a LEFT JOIN web_video_comment  as c on a.videoid = c.videoid LEFT JOIN web_users AS b ON a.userid =b.userid  where a.deletetype =0 and a.categorys=#{columnid} and a.audit=1 order by a.uptime  desc limit #{begin},#{pageSize}")
    @SelectProvider(type = CenSqls.class, method = "getVByCidandPage")
    public List<Video> getVByCidandPage(@Param("columnid") Integer columnid,@Param("begin") Integer begin,@Param("pageSize") Integer pageSize);
    //@Select("select count(*) from web_video_upload  where deletetype =0 and categorys=#{columnid} and audit=1")
    @SelectProvider(type = CenSqls.class, method = "getCountsToCidSql")
    public int getCountsToCid(@Param("columnid") Integer columnid);
    @Update("update web_video_comment set playnumber=playnumber+1 where videoid=#{videoid}")
	public void updatePlaynum(int videoid);
    @Update("update web_video_upload set codedown=1 where filename=#{filename}")
	public void updateVCodeByName(String filename);
    @Select("select * from cousetable  where userid =#{userid} and deleteInfo=0")
	public List<CounseTable> getCounseByUid(Integer userid);
    @Select("select * from chaptertable  where couseId =#{counseId} and deleteinfo=0")
	public List<Chaptertable> getChaptersById(Integer counseId);
    @Update("update cousetable set deleteInfo=1 where coursedId =#{counseId}")
	public void delCouseById(Integer counseId);
    @Update("update chaptertable set deleteinfo=1 where couseId =#{counseId}")
	public void delChapterById(Integer counseId);
    @Insert("insert cousetable (userid,couseTitle,createTime,level,couseCoverPath) values (#{userid},#{couseTitle},#{createTime},#{level},#{couseCoverPath})")
	public void addCounse(CounseTable counse);
    @Update("update cousetable set level=#{level} where coursedId =#{coursedId}")
    public void updateCounse(CounseTable counse);
    @Select("select coursedId from cousetable  where deleteInfo=0 and couseTitle =#{couseTitle} and userid=#{userid} order by createTime  desc")
    public int findCouIdTime(CounseTable counse);
    @Insert("insert chaptertable (couseId,chapterName) values (#{couseId},#{chapterName})")
	public void addChapter(Chaptertable chapter);
    //@Delete("delete from chaptertable where chapterId =#{chapterId}")
	@Update("update chaptertable set deleteinfo=1 where chapterId =#{chapterId}")
    public void delChapterByChapId(Integer chapterId);
    @Select("select chapterId from chaptertable  where  deleteinfo=0 and couseId =#{couseId} and chapterName=#{chapterName} order by chapterId  desc")
	public Integer findChaoterId(Chaptertable chapter);
    @Select("SELECT a.coursedId,a.couseTitle,a.couseCoverPath,b.username FROM cousetable AS a LEFT JOIN web_users as b on a.userid = b.userid where a.deleteInfo=0 and a.status=0 order by a.updateTime"
    		+ "  desc limit #{start},#{size}")
	public List<CounseTable> queryALlVideoCounse(@Param("start") int start,@Param("size") int size);
	@Select("SELECT a.videoid,a.audit,a.categorys,a.coursename,a.descript,a.filename,a.screenshotpath,a.tags,a.title,a.uptime,a.videopath,a.vtypes,a.chapterId,c.playnumber,c.authority,c.clicknumber,c.commnumber,c.praisenumber,c.sharenumber,c.stepnumber FROM web_video_upload AS a LEFT JOIN web_video_comment as c on a.videoid = c.videoid where a.chapterId=#{chapterId} and a.deletetype=0 and a.audit=1")
    public List<Video> getVideosBychapterId(int chapterId);
	@Select("select * from cousetable where coursedId =#{counseId} and deleteInfo=0 ")
	public CounseTable findCounseBycounseId(int counseId);
	@Select("select * from columns where columnid=#{columnid}") 
	public Columns getcolumnBycolumnId(int columnid);
	@Select("select * from funs where funid =#{funid}") 
	public Funs getfunByFunId(Integer funid);
	
	@Update("update web_video_comment set clicknumber=clicknumber+1 where videoid=#{videoid}")
	public void updateClicknum(Integer videoid);
	
	@SelectProvider(type = CenSqls.class, method = "getCounsesByCidandPage")
	public List<CounseTable> getCounsesByCidandPage(@Param("columnid") Integer columnid,@Param("begin") Integer begin,@Param("pageSize") Integer pageSize);
	
	@SelectProvider(type = CenSqls.class, method = "getCoursesCountsToCid")
	public int getCoursesCountsToCid(@Param("columnid") Integer columnid);
	
	//转码部分
	
	//查询
	@Select("select * from codestable where status=0 order by createtime ASC limit 1") 
	public CodesTable getOneCodeStr();
	@Select("select * from codestablemp4 where status=0 order by createtime ASC limit 1") 
	public CodesTablemp4 getOneCodeStrmp4();
	
	//添加
	@Insert("insert codestable (codeStrflv,createtime) values (#{codeStrflv},now())")
	public void addCodeStrFlv(CodesTable c);
	@Insert("insert codestablemp4 (codeStrmp4,createtime) values (#{codeStrmp4},now())")
	public void addCodeStrMP4(CodesTablemp4 m);
	
	//更新
	@Update("update codestablemp4 set status=#{status} where codeid=#{codeid}")
	public void updateCodesTable(CodesTablemp4 codes);
	@Update("update codestable set status=#{status} where codeid=#{codeid}")
	public void updateCodesTableflv(CodesTable codes);
	
	//查询刚批量上传的视频
	 @Select("select * from web_video_upload  where deletetype =0 and audit=0 and userid=#{userid} order by uptime desc limit #{filesize}") 
	public List<Video> findVideosByUidandSize(@Param("userid") Integer userid,@Param("filesize") Integer filesize);
   
    
	
}
