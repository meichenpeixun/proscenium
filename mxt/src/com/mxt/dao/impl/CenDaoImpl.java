package com.mxt.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.mxt.dao.CenDao;
import com.mxt.dao.UserDao;
import com.mxt.entity.Chaptertable;
import com.mxt.entity.CounseTable;
import com.mxt.entity.Funs;
import com.mxt.entity.Menus;
import com.mxt.entity.User;
import com.mxt.entity.Video;
import com.mxt.mapper.CenterMapper;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：Aug 11, 2016 10:36:22 AM
 */

@Repository("CenDaoImpl")
public class CenDaoImpl<T extends Video> implements CenDao<T> {
	@Autowired(required=false)
	@Qualifier("centermapper")
	private CenterMapper centermapper;

	public List<Video> getVideo(Integer userid,Integer begin, Integer pageSize,Integer audit) {
		System.out.println("useriddao:"+userid+"pagesize:"+pageSize);
		
		return centermapper.findPVideoByUId(userid,begin,pageSize,audit);
	}


	public int getCountsToUid(Integer userid,Integer audit) {
		return centermapper.getCountsToUid(userid,audit);
	}


	public void deleteVideoByVID(Integer videoid) {
		centermapper.deleteVideoByVID(videoid);
	}


	public List<Menus> getAllMenus() {
		return centermapper.getAllMenus();
	}


	public List<Funs> getAllFuns() {
		return centermapper.getAllFuns();
	}


	public Video getVideoByID(Integer videoid) {
		return centermapper.getVideoByID(videoid);
	}


	public void updateVideo(Video video) {
		centermapper.updateVideo(video);		
	}


	public void addCounse(CounseTable counse) {
		// TODO Auto-generated method stub
		centermapper.addCounse(counse);	
	}


	public int findCouIdTime(CounseTable counse) {
		// TODO Auto-generated method stub
		return centermapper.findCouIdTime(counse);	
	}


	public Integer findChaoterId(Chaptertable chapter) {
		// TODO Auto-generated method stub
		return centermapper.findChaoterId(chapter);	
	}


	public void addChapter(Chaptertable chapter) {
		// TODO Auto-generated method stub
		 centermapper.addChapter(chapter);	
			
	}


	public void updateCounse(CounseTable counse) {
		// TODO Auto-generated method stub
		centermapper.updateCounse(counse);	
	}


	public List<CounseTable> getCounseByUid(Integer userid) {
		// TODO Auto-generated method stub
		return centermapper.getCounseByUid(userid);	
	}


	public int getCounseCountsByUid(Integer userid) {
		// TODO Auto-generated method stub
		return centermapper.getCounseCountsByUid(userid);	
	}


	public List<CounseTable> getCounseByUid(Integer userid, Integer begin,
			int pageSize) {
		// TODO Auto-generated method stub
		return centermapper.getCounseByUidandPage(userid,begin,pageSize);	
	}


	public CounseTable getCounseBycoursedId(Integer coursedId) {
		// TODO Auto-generated method stub
		return centermapper.getCounseBycoursedId(coursedId);	
	}


	public List<Chaptertable> getChaptersBycoursedId(Integer counseId) {
		// TODO Auto-generated method stub
		return centermapper.getChaptersBycoursedId(counseId);	
	}


	public int getVCountsToChapterId(int chapterId) {
		// TODO Auto-generated method stub
		return centermapper.getVCountsToChapterId(chapterId);	
	}


	public void delCouseById(Integer counseId) {
		// TODO Auto-generated method stub
		centermapper.delCouseById(counseId);
	}


	public void delChapterById(Integer counseId) {
		// TODO Auto-generated method stub
		centermapper.delChapterById(counseId);
	}


	public List<Video> getVideoBychapterIdAndPage(Integer userid,int chapterId, Integer begin,
			int pageSize) {
		// TODO Auto-generated method stub
		return centermapper.getVideoBychapterIdAndPage(userid,chapterId,begin,pageSize);
	}


	public List<Video> getVideoByUid(Integer userid, List<Chaptertable> chapters) {
		// TODO Auto-generated method stub
		return  centermapper.getVideoByUid(userid,chapters);
	}


	public void updateVChapterByID(Integer coursedId, List<Video> videosIds) {
		// TODO Auto-generated method stub
		centermapper.updateVChapterByID(coursedId,videosIds);
	}


	public CounseTable getCounseByCounse(CounseTable counse) {
		// TODO Auto-generated method stub
		return centermapper.getCounseByCounse(counse);
	}


	public Chaptertable getchapterBychapter(Chaptertable ch) {
		// TODO Auto-generated method stub
		return centermapper.getchapterBychapter(ch);
	}


	public Chaptertable getchapterBychapterID(Integer chapterId) {
		// TODO Auto-generated method stub
		return centermapper.getchapterBychapterID(chapterId);
	}


	




	

	
}
