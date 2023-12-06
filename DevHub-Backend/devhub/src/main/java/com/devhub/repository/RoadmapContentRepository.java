package com.devhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devhub.model.RoadmapContent;

@Repository
public interface RoadmapContentRepository extends JpaRepository<RoadmapContent, Integer> {

	RoadmapContent getByRoadmapLabel(String roadmapLabel);

}
