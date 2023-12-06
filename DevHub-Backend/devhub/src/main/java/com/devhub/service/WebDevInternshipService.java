package com.devhub.service;

import org.springframework.http.ResponseEntity;

import com.devhub.dto.WebDevInternshipDTO;

public interface WebDevInternshipService {

	ResponseEntity<String> saveWebDevInternshipData(WebDevInternshipDTO webDevInternshipDTO);
}
