package com.mxt.biz;

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
 * @date：Aug 11, 2016 10:28:15 AM
 */
public interface CenBiz<T> {


	List<Video> getVideo(Integer userid, Integer begin, Integer pageSize,Integer audit);

	int getCountsToUid(Integer userid, Integer audit);

	void deleteVideoByVID(Integer videoid);

	List<Menus> getAllMenus();

	List<Funs> getAllFuns();

	Video getVideoByID(Integer videoid);

	void updateVideo(Video video);

	void addCounse(CounseTable counse);

	int findCouIdTime(CounseTable counse);

	Integer findChaoterId(Chaptertable chapter);

	void addChapter(Chaptertable chapter);

	void updateCounse(CounseTable counse);

	List<CounseTable> getCounseByUid(Integer userid);

	int getCounseCountsByUid(Integer userid);

	List<CounseTable> getCounseByUid(Integer userid, Integer begin, int pageSize);

	CounseTable getCounseBycoursedId(Integer coursedId);

	List<Chaptertable> getChaptersBycoursedId(Integer counseId);

	int getVCountsToChapterId(int chapterId);

	void delCouseById(Integer counseId);

	void delChapterById(Integer counseId);

	List<Video> getVideoBychapterIdAndPage(Integer userid,int chapterId, Integer begin,
			int pageSize);

	List<Video> getVideoByUid(Integer userid, List<Chaptertable> chapters);

	void updateVChapterByID(Integer coursedId, List<Video> videosIds);

	CounseTable getCounseByCounse(CounseTable counse);

	Chaptertable getchapterBychapter(Chaptertable ch);

	Chaptertable getchapterBychapterID(Integer chapterId);





	

}
