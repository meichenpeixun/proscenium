package com.mxt.util;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-12 下午2:20:56
 */
public class VideoCode {
    /**
     * 视频转码
     * @param ffmpegPath      转码工具的存放路径
     * @param upFilePath      用于指定要转换格式的文件,要截图的视频源文件
     * @param codcFilePath    格式转换后的的文件保存路径
     * @param mediaPicPath    截图保存路径
     * @return
     * @throws Exception
     */
    public StringBuffer executeCodecs(String ffmpegPath, String upFilePath, String codcFilePath,
            String mediaPicPath) throws Exception {
        // 创建一个List集合来保存转换视频文件为flv格式的命令
        List<String> convert = new ArrayList<String>(); 
        convert.add(ffmpegPath);
        convert.add("-i");
        convert.add(upFilePath); // 添加要转换格式的视频文件的路径
//        convert.add("-qscale");     //指定转换的质量
//        convert.add("6"); 
        convert.add("-vcodec");
        convert.add("libx264");
//        convert.add("-ab");        //设置音频码率
//        convert.add("64");
//        convert.add("-ac");        //设置声道数
//        convert.add("2");
        convert.add("-ar");        //设置声音的采样频率
        convert.add("22050");
//        convert.add("-r");        //设置帧频
//        convert.add("24");
        convert.add("-y"); // 添加参数＂-y＂，该参数指定将覆盖已存在的文件
        convert.add(codcFilePath);
        
        
        // 创建一个List集合来保存从视频中截取图片的命令
        List<String> cutpic = new ArrayList<String>();
        cutpic.add(ffmpegPath);
        cutpic.add("-i");
        cutpic.add(upFilePath); // 同上（指定的文件即可以是转换为flv格式之前的文件，也可以是转换的flv文件）
        cutpic.add("-y");
        cutpic.add("-f");
        cutpic.add("image2");
        cutpic.add("-ss"); // 添加参数＂-ss＂，该参数指定截取的起始时间
        cutpic.add("00:00:10"); // 添加起始时间为第10秒
        cutpic.add("-t"); // 添加参数＂-t＂，该参数指定持续时间
        cutpic.add("00:00:01"); // 添加持续时间为1毫秒
        cutpic.add("-s"); // 添加参数＂-s＂，该参数指定截取的图片大小
        cutpic.add("800*280"); // 添加截取的图片大小为350*240
        cutpic.add(mediaPicPath); // 添加截取的图片的保存路径
        
        //"ffmpeg -i " + inFile + " -y -f image2 -ss 00:00:10 -t 00:00:01 -s 176x144 " + outFile; 
        boolean mark = true;
       // ProcessBuilder builder = new ProcessBuilder();
        StringBuffer vstr=new StringBuffer(); //转视频字符串命令
        StringBuffer pstr=new StringBuffer(); //截图视频命令
        for(int i=0;i<convert.size();i++)      
        	vstr.append(convert.get(i)+" "); 
        for(int i=0;i<cutpic.size();i++)      
        	pstr.append(cutpic.get(i)+" "); 
        System.out.println(vstr); 
        try {
//            builder.command(convert);
//            builder.redirectErrorStream(true);
//            builder.start();
//            
//            builder.command(cutpic);
//            builder.redirectErrorStream(true);
//            // 如果此属性为 true，则任何由通过此对象的 start() 方法启动的后续子进程生成的错误输出都将与标准输出合并，
//            //因此两者均可使用 Process.getInputStream() 方法读取。这使得关联错误消息和相应的输出变得更容易
//            builder.start();
        	//执行图片截图
        	Runtime rt = Runtime.getRuntime();  
        	
        	Process proc2 = rt.exec(pstr.toString());  
        	InputStream stderr2 = proc2.getErrorStream();  
        	InputStreamReader isr2 = new InputStreamReader(stderr2);  
        	BufferedReader br2 = new BufferedReader(isr2);  
        	String line2 = null;  
        	while ( (line2 = br2.readLine()) != null);  
        	/*//转flv
             Process proc = rt.exec(vstr.toString());  
			 InputStream stderr = proc.getErrorStream();  
			 InputStreamReader isr = new InputStreamReader(stderr);  
			 BufferedReader br = new BufferedReader(isr);  
			 String line = null;  
			 while ( (line = br.readLine()) != null);  */
        } catch (Exception e) {
            mark = false;
            System.out.println(e);
            e.printStackTrace();
        }
        return vstr;
    }
    public StringBuffer executeCodecsMP4(String ffmpegPath, String upFilePath,String mp4Path) throws Exception {
        
        
        List<String> mp4code = new ArrayList<String>();
        mp4code.add(ffmpegPath); // 添加转换工具路径
        mp4code.add("-i"); // 添加参数＂-i＂，该参数指定要转换的文件
        mp4code.add(upFilePath); // 添加要转换格式的视频文件的路径
        mp4code.add("-f");     //指定转换的质量
        mp4code.add("mp4");
        mp4code.add("-vcodec");
        mp4code.add("libx264");
        mp4code.add("-y");
        mp4code.add(mp4Path);
        
        //"ffmpeg -i " + inFile + " -y -f image2 -ss 00:00:10 -t 00:00:01 -s 176x144 " + outFile; 
        boolean mark = true;
       // ProcessBuilder builder = new ProcessBuilder();
        StringBuffer mp4Str=new StringBuffer(); //截图视频命令
        for(int i=0;i<mp4code.size();i++)      
        	mp4Str.append(mp4code.get(i)+" "); 
        System.out.println("mp4path:"+mp4Str);
        /*try {
         	//转flv
        	 Runtime rt = Runtime.getRuntime();  
			 //执行MP4转码
			 Process proc3 = rt.exec(mp4Str.toString());  
			 InputStream stderr3 = proc3.getErrorStream();  
			 InputStreamReader isr3 = new InputStreamReader(stderr3);  
			 BufferedReader br3 = new BufferedReader(isr3);  
			 String line3 = null;  
			 while ( (line3 = br3.readLine()) != null);
        } catch (Exception e) {
            mark = false;
            System.out.println(e);
            e.printStackTrace();
        }*/
        return mp4Str;
    }
    
    
 public boolean DoCodes(String str) {
	  boolean mark = true;
        
	  try {
		  	//执行转码
		 	 Runtime rt = Runtime.getRuntime();  
				 //执行MP4转码
				 Process proc = rt.exec(str);  
				 InputStream stderr = proc.getErrorStream();  
				 InputStreamReader isr = new InputStreamReader(stderr);  
				 BufferedReader br = new BufferedReader(isr);  
				 String line = null;  
				 while ( (line = br.readLine()) != null);
				 System.out.println(line);
				 int exitVal = proc.waitFor();
				 if(exitVal==1){
					 mark = false; 
				 }
		         System.out.println("Process exitValue: " + exitVal);
		 } catch (Exception e) {
		     mark = false;
		     System.out.println(e);
		     e.printStackTrace();
		 }
        
        return mark;
    }
    
}