package hu.back.kukorica.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.repository.NoRepositoryBean;

//@Configuration
public class RedisConfiguration {

//    @Bean
//    public LettuceConnectionFactory redisConnectionFactory(){
//        final RedisStandaloneConfiguration config = new RedisStandaloneConfiguration();
//        config.setHostName("localhost");
//        config.setPort(6379);
//
//        return new LettuceConnectionFactory(config);
//    }
//
//    @Bean
//    public RedisTemplate<String, Object> redisTemplate(){
//        final RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
//
//        redisTemplate.setConnectionFactory(redisConnectionFactory());
//
//        return redisTemplate;
//    }
}
