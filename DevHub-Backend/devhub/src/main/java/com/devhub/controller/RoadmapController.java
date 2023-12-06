package com.devhub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devhub.dto.RoadmapContentDTO;
import com.devhub.service.RoadmapService;

@RestController
@RequestMapping(value = "/roadmap")
@CrossOrigin
public class RoadmapController {

	@Autowired
	RoadmapService roadmapService;

	@GetMapping
	public RoadmapContentDTO getRoadMapContent(@RequestParam("roadmapLabel") String roadmapLabel) {

		RoadmapContentDTO roadmapContentDTO = roadmapService.getRoadMapContent(roadmapLabel);
		return roadmapContentDTO;
	}
}
