package com.cos.blog.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller // file 을 return
public class TempControllerTest {

	//http://localhost:8000/blog/temp/home
	@GetMapping("/temp/home")
	public String tempHome() {
		System.out.println("/temp/home");
		// 파일 리턴 기본 경로: src/main/resources/static
		// 리턴명: /home.html
		return "/home.html";
	}
	
	@GetMapping("/temp/img")
	public String tempImg() {
		return "/a.png";
	}
	
	//http://localhost:8000/blog/temp/home
		@GetMapping("/temp/jsp")
		public String tempJsp() {
			System.out.println("/temp/jsp");
			// 파일 리턴 기본 경로: src/main/resources/static => yml에서 바꿔줘야한다
			//prifix: /WEB-INF/views/
			//suffix: .jsp
			// 풀네임: /WEB-INF/views/test.jsp
			return "test";
		}
}
