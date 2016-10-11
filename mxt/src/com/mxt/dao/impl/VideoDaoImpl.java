package com.mxt.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.mxt.dao.VideoDao;
import com.mxt.entity.Chaptertable;
import com.mxt.entity.CodesTable;
import com.mxt.entity.CodesTablemp4;
import com.mxt.entity.Columns;
import com.mxt.entity.CounseTable;
import com.mxt.entity.Funs;
import com.mxt.entity.Menus;
import com.mxt.entity.Video;
import com.mxt.mapper.FunsMapper;
import com.mxt.mapper.UserMapper;
import com.mxt.mapper.VideoMapper;
import com.mxt.util.VideoCode;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-12 下午4:17:09
 */
@Service("VideoDaoImpl")
public class VideoDaoImpl<T extends Video> implements VideoDao<T> {
   
    @Autowired(required=false)
	@Qualifier("videomapper")
	private VideoMapper videomapper;
	public StringBuffer executeCodecs(String ffmpegPath, String upFilePath,
			String codcFilePath, String mediaPicPath) throws Exception {
		VideoCode v =new VideoCode();
		return v.executeCodecs(ffmpegPath, upFilePath, codcFilePath, mediaPicPath);
	}

	public boolean saveVideo(Video video) throws Exception {
		videomapper.saveVideo(video);
		return true;
	}

	public int getAllVideoCount() throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	public List<Video> queryALlVideo(int firstResult, int maxResult){
		System.out.println("#F："+firstResult+"#M："+maxResult);

		return videomapper.queryALlVideo(firstResult, maxResult);
	}

	public Video queryVideoById(int id) throws Exception {
		
		return videomapper.queryVideoById(id);
	}

	public List<Funs> getAllFuns() {
		// TODO Auto-generated method stub
		return videomapper.getAllFuns();
	}

	public List<Columns> getAllColumns() {
		// TODO Auto-generated method stub
		return videomapper.getAllColumns();
	}

	public List<Menus> getAllMenus() {
		// TODO Auto-generated method stub
		return videomapper.getAllMenus();
	}

	public List<Columns> findColumnsById(Integer funid) {
		// TODO Auto-generated method stub
		return  videomapper.findColumnsById(funid);
	}

	public void updateVideo(Video video) {
		// TODO Auto-generated method stub
		videomapper.updateVideo(video);
	}
	public void updateVideo2(Video video) {
		// TODO Auto-generated method stub
		videomapper.updateVideo2(video);
	}

	public List<Video> findVideosByCourse(String coursename,Integer userid) {
		System.out.println("$"+coursename+userid);
		return videomapper.findVideosByCourse(coursename,userid);
	}

	public void deletevideo(Integer userid, String filename) {
		// TODO Auto-generated method stub
		 videomapper.deletevideo(userid,filename);
	}

	public String getMenuIDByFunID(Integer funid) {
		// TODO Auto-generated method stub
		return videomapper.findMenuIDByFunID(funid);
	}

	public List<Video> getVByCidandPage(Integer columnid, Integer begin,Integer pageSize) {
		// TODO Auto-generated method stub
		return videomapper.getVByCidandPage(columnid,begin,pageSize);
	}

	public int getCountsToCid(Integer columnid) {
		// TODO Auto-generated method stub
		return videomapper.getCountsToCid(columnid);
	}

	public void updatePlaynum(int videoid) {
		// TODO Auto-generated method stub
		 videomapper.updatePlaynum(videoid);
	}

	public StringBuffer executeCodecMP4(String ffmpegpath, String uploadFilepath,String mP4FilePath) throws Exception {
		// TODO Auto-generated method stub
		VideoCode v =new VideoCode();
		return v.executeCodecsMP4(ffmpegpath, uploadFilepath, mP4FilePath);
	}

	public void updateVCodeByName(String filename) {
		videomapper.updateVCodeByName(filename);
	}

	public List<CounseTable> getCounseByUid(Integer userid) {
		// TODO Auto-generated method stub
		return videomapper.getCounseByUid(userid);
	}

	public List<Chaptertable> findChaptersById(Integer counseId) {
		// TODO Auto-generated method stub
		return videomapper.getChaptersById(counseId);
	}

	public void delCouseById(Integer counseId) {
		videomapper.delCouseById(counseId);
	}

	public void delChapterById(Integer counseId) {
		videomapper.delChapterById(counseId);
	}

	public void addCounse(CounseTable counse) {
		videomapper.addCounse(counse);
		
	}

	public int findCouIdTime(CounseTable counse) {
		// TODO Auto-generated method stub
		return videomapper.findCouIdTime(counse);
	}

	public void addChapter(Chaptertable chapter) {
		videomapper.addChapter(chapter);
	}

	public void delChapterByChapId(Integer chapterId) {
		videomapper.delChapterByChapId(chapterId);
		
	}

	public Integer findChaoterId(Chaptertable chapter) {
		// TODO Auto-generated method stub
		return	videomapper.findChaoterId(chapter);
	}

	public void updateCounse(CounseTable counse) {
		// TODO Auto-generated method stub
		videomapper.updateCounse(counse);
	}

	public List<CounseTable> queryALlVideoCounse(int start, int size) {
		// TODO Auto-generated method stub
		return videomapper.queryALlVideoCounse(start,size);
	}

	public List<Video> getVideosBychapterId(int chapterId) {
		// TODO Auto-generated method stub
		return videomapper.getVideosBychapterId(chapterId);
	}

	public CounseTable findCounseBycounseId(int counseId) {
		// TODO Auto-generated method stub
		return videomapper.findCounseBycounseId(counseId);
	}

	public Columns getcolumnBycolumnId(int columnid) {
		// TODO Auto-generated method stub
		return videomapper.getcolumnBycolumnId(columnid);
	}

	public Funs getfunByFunId(Integer funid) {
		// TODO Auto-generated method stub
		return videomapper.getfunByFunId(funid);
	}

	public void updateClicknum(Integer videoid) {
		// TODO Auto-generated method stub
		videomapper.updateClicknum(videoid);
	}

	public List<CounseTable> getCounsesByCidandPage(Integer columnid,
			Integer begin, int pageSize) {
		// TODO Auto-generated method stub
		return videomapper.getCounsesByCidandPage(columnid,begin,pageSize);
	}

	public int getCoursesCountsToCid(Integer columnid) {
		// TODO Auto-generated method stub
		return videomapper.getCoursesCountsToCid(columnid);
	}

	public CodesTable getOneCodeStr() {
		// TODO Auto-generated method stub
		return videomapper.getOneCodeStr();
	}
	public CodesTablemp4 getOneCodeStrmp4() {
		// TODO Auto-generated method stub
		return videomapper.getOneCodeStrmp4();
	}

	public void addCodeStrFlv(CodesTable c) {
		// TODO Auto-generated method stub
		videomapper.addCodeStrFlv(c);
	}

	public void addCodeStrMP4(CodesTablemp4 M) {
		// TODO Auto-generated method stub
		videomapper.addCodeStrMP4(M);
	}

	public void updateCodesTablemp4(CodesTablemp4 codes) {
		// TODO Auto-generated method stub
		videomapper.updateCodesTable(codes);
	}

	public void updateCodesTableflv(CodesTable codes) {
		// TODO Auto-generated method stub
		videomapper.updateCodesTableflv(codes);
	}

	public void updateCodesTableflv(CodesTablemp4 codesmp4) {
		// TODO Auto-generated method stub
		
	}




	

}
