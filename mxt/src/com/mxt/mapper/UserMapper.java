package com.mxt.mapper;



import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.Update;
import org.mybatis.spring.annotation.Mapper;

import com.mxt.entity.Consume;
import com.mxt.entity.User;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016年7月8日 下午1:06:17
 */
@Mapper("mapper")
public interface UserMapper extends SqlMapper{
	
	@Select("select * from web_users  where username = #{username} or phone = #{username}")  
	public User getUserByName(String username);
    @Insert("insert web_users (username,password) values (#{username},#{password})")
	public void insertUser(User user);
    @Insert("insert web_consume (userid) values (#{userid})")
	public void addconsume(Consume co);
    @Select("select * from web_consume  where userid = #{userid}")  
	public Consume getConsume(Integer userid);
	@SelectProvider(type = CenSqls.class, method = "getCountsToUidsql")
    public int getCountsToUid(@Param("userid") Integer userid,@Param("audit") Integer audit);
	
	@Select("select * from web_users  where phone = #{phone}")  
	public User findUserByPhone(String phone);					//根据手机号查询用户
	
	@Insert("insert web_users (username,phone,password,createTime,createIp) values (#{username},#{phone},#{password},#{createTime},#{createIp})")
	public void appendUser(User user);								//添加用户
	
	@Update("update web_users set lastlogintime=#{lastlogintime},ip=#{ip} where userid = #{userid}")
	public void updateLoginInfo(User user);		//修改登录信息
}
