package com.devhub.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "roadmap_content", catalog = "devhub")
public class RoadmapContent {

	private Integer id;
	private String content;
	private String roadmapLabel;
	private List<RoadmapHelpingLinks> roadmapHelpingLinks;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "content")
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content.replace("\n", "<br>").replace("\r", "");
	}

	@Column(name = "roadmap_label")
	public String getRoadmapLabel() {
		return roadmapLabel;
	}

	public void setRoadmapLabel(String roadmapLabel) {
		this.roadmapLabel = roadmapLabel;
	}

	@OneToMany(mappedBy = "roadmapContent", cascade = CascadeType.ALL)
	public List<RoadmapHelpingLinks> getRoadmapHelpingLinks() {
		return roadmapHelpingLinks;
	}

	public void setRoadmapHelpingLinks(List<RoadmapHelpingLinks> roadmapHelpingLinks) {
		this.roadmapHelpingLinks = roadmapHelpingLinks;
	}

}
