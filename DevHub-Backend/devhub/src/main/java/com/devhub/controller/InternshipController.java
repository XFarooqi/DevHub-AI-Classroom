package com.devhub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devhub.dto.WebDevInternshipDTO;
import com.devhub.service.WebDevInternshipService;

@RestController
@RequestMapping(value = "/internship")
@CrossOrigin
public class InternshipController {

	@Autowired
	WebDevInternshipService webDevInternshipService;

	@PostMapping("/web-development")
	public ResponseEntity<String> postWebDevelopmentForm(@ModelAttribute WebDevInternshipDTO webDevelopmentDTO) {
		return webDevInternshipService.saveWebDevInternshipData(webDevelopmentDTO);
	}
}
