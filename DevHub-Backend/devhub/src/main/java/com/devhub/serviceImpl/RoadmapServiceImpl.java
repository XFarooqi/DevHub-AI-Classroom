package com.devhub.serviceImpl;

import org.apache.log4j.Logger;
import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devhub.dto.RoadmapContentDTO;
import com.devhub.model.RoadmapContent;
import com.devhub.repository.RoadmapContentRepository;
import com.devhub.service.RoadmapService;

@Service
public class RoadmapServiceImpl implements RoadmapService {

	private static final Logger logger = Logger.getLogger(RoadmapServiceImpl.class);

	@Autowired
	RoadmapContentRepository roadmapContentRepository;
	
    @Autowired
    private Mapper mapper;

	@Override
	public RoadmapContentDTO getRoadMapContent(String roadmapLabel) {
		RoadmapContentDTO roadmapContentDTO = new RoadmapContentDTO();
    	try {
    		RoadmapContent roadmapContent = roadmapContentRepository.getByRoadmapLabel(roadmapLabel.trim());
    		roadmapContentDTO = mapper.map(roadmapContent, RoadmapContentDTO.class);
    	} catch (Exception ex) {
    		logger.error("(RoadmapServiceImpl~getRoadMapContent) Exception occured while getting roadmap data: " + ex);
    	}
		return roadmapContentDTO;
	}

}
