package com.devhub.dto;

import java.util.List;

public class RoadmapContentDTO {

	private String content;
	private List<RoadmapHelpingLinksDTO> roadmapHelpingLinks;

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public List<RoadmapHelpingLinksDTO> getRoadmapHelpingLinks() {
		return roadmapHelpingLinks;
	}

	public void setRoadmapHelpingLinks(List<RoadmapHelpingLinksDTO> roadmapHelpingLinks) {
		this.roadmapHelpingLinks = roadmapHelpingLinks;
	}

}
