package com.cos.blog.test;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//사용자가 요청 -> 응답(Html 파일)
//@Controller

// 사용자가 요청 -> 응답(Data)
@RestController
public class HttpControllerTest {

	private static final String TAG = "HttpControllerTest : ";
	
	// http://localhost:8000/blog/http/lombok
	@GetMapping("/http/lombok")
	public String lombokTest() {
		//Member m = new Member(1,"ssar","1234","email");
		Member m= Member.builder().username("ssar").password("1234").email("email").build();
		System.out.println(TAG+ "getter : "+ m.getId());
		m.setId(5000);
		System.out.println(TAG+ "setter : "+ m.getId() );
		return "lombok test 완료";
	}
	
	//인터넷 브라우저 요청은 무조건 get밖에 안된다! 나머지는 405 에러
	// http://localhost:8080/http/get(select)
	@GetMapping("/http/get")
	public String getTest(Member m) {// ?id=1&username=ssar&password=1234&email=abcd@naver.com
		
		return "get 요청: "+m.getId()+" ,"+m.getUsername()+" ,"+m.getPassword()
		+" ,"+m.getEmail();
	}
	
	// http://localhost:8080/http/post(insert)
	@PostMapping("/http/post") //raw: text/plain, application/json
	public String postTest(@RequestBody Member  m) { // MessageConverter(스프링부트)
		return "post 요청: "+m.getId()+" ,"+m.getUsername()+" ,"+m.getPassword()
		+" ,"+m.getEmail();
	}

	// http://localhost:8080/http/put(update)
	@PutMapping("/http/put")
	public String putTest(@RequestBody Member  m) {
		return "put 요청: "+m.getId()+" ,"+m.getUsername()+" ,"+m.getPassword()
		+" ,"+m.getEmail();
	}

	// http://localhost:8080/http/delete(delete)
	@DeleteMapping("/http/delete")
	public String deleteTest() {
		return "delete 요청";
	}

}
