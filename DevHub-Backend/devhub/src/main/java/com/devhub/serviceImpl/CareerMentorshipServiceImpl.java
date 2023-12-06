package com.devhub.serviceImpl;

import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.devhub.dto.CareerMentorshipDTO;
import com.devhub.service.CareerMentorshipService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

@Service
public class CareerMentorshipServiceImpl implements CareerMentorshipService {

	private static final Logger logger = Logger.getLogger(WebDevInternshipServiceImpl.class);

	@Autowired
	private RestTemplate restTemplate;

	@Override
	public String getCareer(CareerMentorshipDTO careerMentorshipDTO) {

		String result = StringUtils.EMPTY;
		try {
			Map<String, String> jsonMap = new LinkedHashMap<String, String>();

			jsonMap.put("Database Fundamentals", careerMentorshipDTO.getDatabaseFundamental());
			jsonMap.put("Computer Architecture", careerMentorshipDTO.getComputerArchitecture());
			jsonMap.put("Distributed Computing Systems", careerMentorshipDTO.getDistributedComputingSystem());
			jsonMap.put("Cyber Security", careerMentorshipDTO.getCyberSecurity());
			jsonMap.put("Networking", careerMentorshipDTO.getComputerNetworking());
			jsonMap.put("Software Development", careerMentorshipDTO.getSoftwareDevelopment());
			jsonMap.put("Programming Skills", careerMentorshipDTO.getProgrammingSkills());
			jsonMap.put("Project Management", careerMentorshipDTO.getProjectManagment());
			jsonMap.put("Computer Forensics Fundamentals", careerMentorshipDTO.getComputerForensicsFundamentals());
			jsonMap.put("Technical Communication", careerMentorshipDTO.getTechnicalCommunication());
			jsonMap.put("AI ML", careerMentorshipDTO.getArtificialIntelligence());
			jsonMap.put("Software Engineering", careerMentorshipDTO.getSoftwareEngineering());
			jsonMap.put("Business Analysis", careerMentorshipDTO.getBusinessAnalysis());
			jsonMap.put("Communication skills", careerMentorshipDTO.getCommunicationSkills());
			jsonMap.put("Data Science", careerMentorshipDTO.getDataScience());
			jsonMap.put("Troubleshooting skills", careerMentorshipDTO.getTroubleShooting());
			jsonMap.put("Graphics Designing", careerMentorshipDTO.getGraphicDesigning());

			Gson gson = new GsonBuilder().create();
			String jsonData = gson.toJson(jsonMap);

			String careerMentorshipData = "{\"Inputs\": {\"data\": [" + jsonData
					+ "]},\"GlobalParameters\": {\"method\": \"predict\"}}";

			String azureUrl = "http://42ea9765-2b0d-4f6e-b835-446290dec462.eastus2.azurecontainer.io/score";

			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);

			HttpEntity<String> requestEntity = new HttpEntity<String>(careerMentorshipData, headers);

			// Executing Solr Post Request
			ResponseEntity<String> responseEntity = restTemplate.exchange(azureUrl, HttpMethod.POST, requestEntity,
					String.class);

			JsonElement jsonElement = new Gson().fromJson(responseEntity.getBody(), JsonElement.class);
			JsonObject jsonObject = jsonElement.getAsJsonObject();
			JsonArray jsonArray = jsonObject.getAsJsonArray("Results");
			result = jsonArray.get(0).getAsString();

		} catch (Exception ex) {
			logger.error("Error occured while getting Career: " + ex);
		}
		return result;
	}

}
