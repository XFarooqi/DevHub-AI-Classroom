package com.devhub.controller;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devhub.dto.CareerMentorshipDTO;
import com.devhub.service.CareerMentorshipService;

@CrossOrigin
@RestController
public class CareerMentorship {

	@Autowired
	CareerMentorshipService careerMentorshipService;

	@PostMapping("/career/mentorship")
	public ResponseEntity<String> getCareerMentorship(@ModelAttribute CareerMentorshipDTO careerMentorshipDTO) {
		String predictedCareer = careerMentorshipService.getCareer(careerMentorshipDTO);
		if (predictedCareer == StringUtils.EMPTY) {
			return ResponseEntity.internalServerError().body("Exception occured while processing your request");
		}
		return ResponseEntity.ok(predictedCareer);
	}
}
