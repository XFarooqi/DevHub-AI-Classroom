package com.devhub.utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.log4j.Logger;
import org.springframework.web.multipart.MultipartFile;

/**
 * 
 * @author Eatsam ul Haq
 *
 * Following class will have all the common methods that are
 * frequently required from different parts of our application
 * 
 */
public class CommonUtils {

	private static final Logger logger = Logger.getLogger(CommonUtils.class);
	/**
	 * Following metod downloads the file on the system
	 * @param file
	 * @throws IOException 
	 */
	public static void downladFile(MultipartFile file) {
		try {
			String fileName = file.getOriginalFilename();
			byte[] fileContent = file.getBytes();
		    String destination = System.getProperty("user.home") + File.separator + "Downloads" + File.separator;
		    // save the file in your system
		    Path filePath = Paths.get(destination, fileName);
		    Files.write(filePath, fileContent);
		    logger.info("(CommonUtils~downladFile) File downloaded successfully on path: " + destination);
		} catch (Exception ex) {
			logger.error("(CommonUtils~downladFile) Exception occured while downloading file: " + ex);
		}
	}
}
