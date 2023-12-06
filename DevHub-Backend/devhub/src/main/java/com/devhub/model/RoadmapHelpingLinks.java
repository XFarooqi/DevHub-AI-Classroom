package com.devhub.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "roadmap_helping_links", catalog = "devhub")
public class RoadmapHelpingLinks {

	private Integer id;
	private String linkText;
	private String link;
	private RoadmapContent roadmapContent;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column (name = "link_text")
	public String getLinkText() {
		return linkText;
	}

	public void setLinkText(String linkText) {
		this.linkText = linkText;
	}

	@Column (name = "link")
	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

    @ManyToOne
    @JoinColumn(name = "roadmap_content_id", referencedColumnName = "id")
	public RoadmapContent getRoadmapContent() {
		return roadmapContent;
	}

	public void setRoadmapContent(RoadmapContent roadmapContent) {
		this.roadmapContent = roadmapContent;
	}
//    @ManyToOne
//    @JoinColumn(name = "roadmap_nav_link_id", referencedColumnName = "id")
//	public RoadmapNavLinks getRoadmapNavLinks() {
//		return roadmapNavLinks;
//	}
//
//	public void setRoadmapNavLinks(RoadmapNavLinks roadmapNavLinks) {
//		this.roadmapNavLinks = roadmapNavLinks;
//	}

}
