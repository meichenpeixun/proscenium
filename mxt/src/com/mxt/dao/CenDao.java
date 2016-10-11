package com.mxt.dao;

import java.util.List;

import com.mxt.entity.Chaptertable;
import com.mxt.entity.CounseTable;
import com.mxt.entity.Funs;
import com.mxt.entity.Menus;
import com.mxt.entity.Video;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：Aug 11, 2016 10:35:11 AM
 */
public interface CenDao<T> {


	public List<Video> getVideo(Integer userid,Integer begin, Integer pageSize, Integer audit);

	public int getCountsToUid(Integer userid, Integer audit);

	public void deleteVideoByVID(Integer videoid);

	public List<Menus> getAllMenus();

	public List<Funs> getAllFuns();

	public Video getVideoByID(Integer videoid);

	public void updateVideo(Video video);

	public void addCounse(CounseTable counse);

	public int findCouIdTime(CounseTable counse);

	public Integer findChaoterId(Chaptertable chapter);

	public void addChapter(Chaptertable chapter);

	public void updateCounse(CounseTable counse);

	public List<CounseTable> getCounseByUid(Integer userid);

	public int getCounseCountsByUid(Integer userid);

	public List<CounseTable> getCounseByUid(Integer userid, Integer begin,
			int pageSize);

	public CounseTable getCounseBycoursedId(Integer coursedId);

	public List<Chaptertable> getChaptersBycoursedId(Integer counseId);

	public int getVCountsToChapterId(int chapterId);

	public void delCouseById(Integer counseId);

	public void delChapterById(Integer counseId);

	public List<Video> getVideoBychapterIdAndPage(Integer userid,int chapterId, Integer begin,
			int pageSize);

	public List<Video> getVideoByUid(Integer userid, List<Chaptertable> chapters);

	public void updateVChapterByID(Integer coursedId, List<Video> str);

	public CounseTable getCounseByCounse(CounseTable counse);

	public Chaptertable getchapterBychapter(Chaptertable ch);

	public Chaptertable getchapterBychapterID(Integer chapterId);






}
