package hu.back.kukorica.session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.UUID;

@Component
public class SessionRegistry {
    private static final HashMap<String,String> SESSIONS = new HashMap<>();


    public String registerSession(final String email){
        if(email == null){
            throw new RuntimeException("Username needs to be provided");
        }
        final String sessionId = generateSessionId();
        SESSIONS.put(sessionId, email);
        return sessionId;
    }

    public String getEmailForSession(final  String sessionId){
        return SESSIONS.get(sessionId);
    }

    private String generateSessionId(){
        return new String(
                Base64.getEncoder().encode(UUID.randomUUID().toString().getBytes(StandardCharsets.UTF_8))
        );
    }
}
