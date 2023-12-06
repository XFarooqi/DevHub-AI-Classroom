package com.devhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devhub.model.WebDevInternship;

@Repository
public interface WebDevInternshipRepository extends JpaRepository<WebDevInternship, Integer> {

}
