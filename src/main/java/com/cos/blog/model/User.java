package com.cos.blog.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

//ORM -> Java(다른언어) Object -> 테이블로 매핑해주는 기술

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity //User 클래스가 Mysql에 테이블이 생성이 된다.
//@DynamicInsert // 이 어노테이션을 사용해야 null값인 데이터는 insert문 에 포함 안 시킨다=> default값이 제대로 작동해서 들어감
public class User {

	@Id //Primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)//프로젝트에서 연결된 DB의 넘버링 전략을 따라간다.
	private int id; // 시퀀스, auto-increment
	
	@Column(nullable = false, length = 100,unique = true)
	private String username;
	
	@Column(nullable = false, length = 100) // 해쉬를 통한 암호화
	private String password;
	
	@Column(nullable = false, length = 50) 
	private String email;
	
	//@ColumnDefault("'user'") // 안에 홑 따옴표를 줘야함
	//DB는 RoleType이라는게 없다
	@Enumerated(EnumType.STRING) // RoleType이라는 Enum의 타입은 String이다
	private RoleType role; // Enum을 쓰는게 좋다.(도메인 설정이 가능하므로)
	
	private String oauth; // kakao, google
	
	@CreationTimestamp //시간이 자동 입력
	private Timestamp createDate;
}
