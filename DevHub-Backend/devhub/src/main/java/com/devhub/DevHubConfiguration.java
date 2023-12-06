package com.devhub;

import org.dozer.DozerBeanMapper;
import org.dozer.Mapper;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class DevHubConfiguration {

    @Bean
    public Mapper mapper() {
        return new DozerBeanMapper();
    }
    
    @Bean
    public RestTemplate getRestTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }
}
