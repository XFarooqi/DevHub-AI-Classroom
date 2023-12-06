package com.devhub.serviceImpl;

import org.apache.log4j.Logger;
import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.devhub.dto.WebDevInternshipDTO;
import com.devhub.model.WebDevInternship;
import com.devhub.repository.WebDevInternshipRepository;
import com.devhub.service.WebDevInternshipService;
import com.devhub.utils.CommonUtils;

@Service
public class WebDevInternshipServiceImpl implements WebDevInternshipService {

	private static final Logger logger = Logger.getLogger(WebDevInternshipServiceImpl.class);

    @Autowired
    private Mapper mapper;

    @Autowired
    private WebDevInternshipRepository webDevInternshipRepository;

    @Override
	public ResponseEntity<String> saveWebDevInternshipData(WebDevInternshipDTO webDevInternshipDTO) {
    	try {
    		CommonUtils.downladFile(webDevInternshipDTO.getResume());
    		WebDevInternship webDevInternship = mapper.map(webDevInternshipDTO, WebDevInternship.class);
    		webDevInternshipRepository.save(webDevInternship);
    		return ResponseEntity.ok("Success");
    	} catch (Exception ex) {
    		logger.error("(WebDevInternshipServiceImpl~saveWebDevInternshipData) Exception occured while saving web internship form data: " + ex);
    		return ResponseEntity.internalServerError().body("Exception occured");
    	}
	}

}
