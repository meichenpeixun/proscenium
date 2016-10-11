package com.mxt.dao;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mxt.entity.Chaptertable;
import com.mxt.entity.CodesTable;
import com.mxt.entity.CodesTablemp4;
import com.mxt.entity.Columns;
import com.mxt.entity.CounseTable;
import com.mxt.entity.Funs;
import com.mxt.entity.Menus;
import com.mxt.entity.Video;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-12 下午4:13:13
 */

public interface VideoDao<T> {
	  /**
     * 视频转码
     * @param ffmpegPath    转码工具的存放路径
     * @param upFilePath    用于指定要转换格式的文件,要截图的视频源文件
     * @param codcFilePath    格式转换后的的文件保存路径
     * @param mediaPicPath    截图保存路径
     * @return
     * @throws Exception
     */
    public StringBuffer executeCodecs(String ffmpegPath,String upFilePath, String codcFilePath, String mediaPicPath)throws Exception;
    
    /**
     * 保存文件
     * @param media
     * @return
     * @throws Exception
     */
    public boolean saveVideo(Video video)throws Exception;

    /**
     * 查询本地库中所有记录的数目
     * @return
     * @throws Exception
     */
    public int getAllVideoCount()throws Exception;
    
    /**
     * 带分页的查询
     * @param firstResult
     * @param maxResult
     * @return
     */
    public List<Video> queryALlVideo(int firstResult, int maxResult)throws Exception;
    
    /**
     * 根据Id查询视频
     * @param id
     * @return
     * @throws Exception
     */
    public Video queryVideoById(int id)throws Exception;

	public List<Funs> getAllFuns();

	public List<com.mxt.entity.Columns> getAllColumns();

	public List<Menus> getAllMenus();

	public List<Columns> findColumnsById(Integer funid);

	public void updateVideo(Video video);

	public void updateVideo2(Video video);

	public List<Video> findVideosByCourse(String coursename, Integer userid);

	public void deletevideo(Integer valueOf, String parameter);

	public String getMenuIDByFunID(Integer funid);

	public List<Video> getVByCidandPage(Integer columnid, Integer begin,Integer pageSize);

	public int getCountsToCid(Integer columnid);

	public void updatePlaynum(int videoid);

	public StringBuffer executeCodecMP4(String ffmpegpath, String uploadFilepath,
			String mP4FilePath) throws Exception;

	public void updateVCodeByName(String filename);

	public List<CounseTable> getCounseByUid(Integer userid);

	public List<Chaptertable> findChaptersById(Integer counseId);

	public void delCouseById(Integer counseId);

	public void delChapterById(Integer counseId);

	public void addCounse(CounseTable counse);

	public int findCouIdTime(CounseTable counse);

	public void addChapter(Chaptertable chapter);

	public void delChapterByChapId(Integer chapterId);

	public Integer findChaoterId(Chaptertable chapter);

	public void updateCounse(CounseTable counse);

	public List<CounseTable> queryALlVideoCounse(int start, int size);

	public List<Video> getVideosBychapterId(int chapterId);

	public CounseTable findCounseBycounseId(int counseId);

	public Columns getcolumnBycolumnId(int columnid);

	public Funs getfunByFunId(Integer funid);

	public void updateClicknum(Integer videoid);

	public List<CounseTable> getCounsesByCidandPage(Integer columnid,
			Integer begin, int pageSize);

	public int getCoursesCountsToCid(Integer columnid);

	public CodesTable getOneCodeStr();

	public CodesTablemp4 getOneCodeStrmp4();
	
	public void addCodeStrFlv(CodesTable c);

	public void addCodeStrMP4(CodesTablemp4 m);

	public void updateCodesTableflv(CodesTable codes);
	
	public void updateCodesTablemp4(CodesTablemp4 codesmp4);

   
}


