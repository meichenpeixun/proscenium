package com.mxt.biz.impl;

import java.util.List;
























import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.mxt.biz.CenBiz;
import com.mxt.biz.UserBiz;
import com.mxt.dao.CenDao;
import com.mxt.dao.UserDao;
import com.mxt.entity.Chaptertable;
import com.mxt.entity.CounseTable;
import com.mxt.entity.Funs;
import com.mxt.entity.Menus;
import com.mxt.entity.User;
import com.mxt.entity.Video;

import org.springframework.dao.DataAccessException;
/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：Aug 11, 2016 10:30:00 AM
 */
@Service("CenBizImpl")
public class CenBizImpl<T extends Video> implements CenBiz<T> {
	@Autowired
	@Qualifier("CenDaoImpl")
	private CenDao<T> cendao;
	//通过userid和审核状态查找
	public List<Video> getVideo(Integer userid, Integer begin, Integer pageSize,Integer audit) {
		System.out.println("userid:"+userid+"pagesize:"+pageSize);
		return cendao.getVideo(userid,begin, pageSize,audit);
	}
	//通过userid和审核状态查找
	public int getCountsToUid(Integer userid,Integer audit) {
	    return cendao.getCountsToUid(userid,audit);
	}
	public void deleteVideoByVID(Integer videoid) {
		
		cendao.deleteVideoByVID(videoid);
	}
	public List<Menus> getAllMenus() {
		return cendao.getAllMenus();
	}
	public List<Funs> getAllFuns() {
		return cendao.getAllFuns();
	}
	public Video getVideoByID(Integer videoid) {
		return cendao.getVideoByID(videoid);
	}
	public void updateVideo(Video video) {
		cendao.updateVideo(video);
		
	}
	public void addCounse(CounseTable counse) {
		cendao.addCounse(counse);
		
	}
	public int findCouIdTime(CounseTable counse) {
		// TODO Auto-generated method stub
		return cendao.findCouIdTime(counse);
	}
	public Integer findChaoterId(Chaptertable chapter) {
		// TODO Auto-generated method stub
		return cendao.findChaoterId(chapter);
	}
	public void addChapter(Chaptertable chapter) {
		// TODO Auto-generated method stub
		cendao.addChapter(chapter);
	}
	public void updateCounse(CounseTable counse) {
		// TODO Auto-generated method stub
		cendao.updateCounse(counse);
	}
	public List<CounseTable> getCounseByUid(Integer userid) {
		// TODO Auto-generated method stub
		return cendao.getCounseByUid(userid);
	}
	public int getCounseCountsByUid(Integer userid) {
		// TODO Auto-generated method stub
		return cendao.getCounseCountsByUid(userid);
	}
	public List<CounseTable> getCounseByUid(Integer userid, Integer begin,
			int pageSize) {
		// TODO Auto-generated method stub
		return cendao.getCounseByUid(userid,begin,pageSize);
	}
	public CounseTable getCounseBycoursedId(Integer coursedId) {
		// TODO Auto-generated method stub
		return cendao.getCounseBycoursedId(coursedId);
	}
	public List<Chaptertable> getChaptersBycoursedId(Integer counseId) {
		// TODO Auto-generated method stub
		return cendao.getChaptersBycoursedId(counseId);
	}
	public int getVCountsToChapterId(int chapterId) {
		// TODO Auto-generated method stub
		return cendao.getVCountsToChapterId(chapterId);
	}
	public void delCouseById(Integer counseId) {
		// TODO Auto-generated method stub
		cendao.delCouseById(counseId);
	}
	public void delChapterById(Integer counseId) {
		// TODO Auto-generated method stub
		cendao.delChapterById(counseId);
	}
	public List<Video> getVideoBychapterIdAndPage(Integer userid,int chapterId, Integer begin,
			int pageSize) {
		// TODO Auto-generated method stub
		return cendao.getVideoBychapterIdAndPage(userid,chapterId,begin,pageSize);
	}
	public List<Video> getVideoByUid(Integer userid, List<Chaptertable> chapters) {
		// TODO Auto-generated method stub
		return cendao.getVideoByUid(userid, chapters);
	}
	public void updateVChapterByID(Integer coursedId, List<Video> videosIds) {
		// TODO Auto-generated method stub
		cendao.updateVChapterByID(coursedId, videosIds);
	}
	public CounseTable getCounseByCounse(CounseTable counse) {
		// TODO Auto-generated method stub
		return cendao.getCounseByCounse(counse);
	}
	public Chaptertable getchapterBychapter(Chaptertable ch) {
		// TODO Auto-generated method stub
		return  cendao.getchapterBychapter(ch);
	}
	public Chaptertable getchapterBychapterID(Integer chapterId) {
		// TODO Auto-generated method stub
		return cendao.getchapterBychapterID(chapterId);
	}

	

	
		
	
	
	

}
