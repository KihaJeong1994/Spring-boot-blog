let index = {
	init: function(){
		$("#btn-save").on("click",()=>{//function(){}, ()=>{} 사용하는 이유: this를 바인딩 하기 위해서
			this.save();
		});
	},
	save:function(){
		//alert("user의 save함수");
		let data={
			username:$("#username").val(),
			password:$("#password").val(),
			email:$("#email").val(),
		};
		//console.log(data);
		
		//ajax 호출 시 default가 비동기 호출
		//ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환
		$.ajax({
			//회원가입 수행 요청
			type:"POST",
			url:"/blog/api/user",
			data: JSON.stringify(data), //http body 데이터 /그냥 data는 자바스크립트 오브젝트
			contentType:"application/json; charset=utf-8", // body데이터가 어떤 타입인지(MIME)
			dataType:"json"//요청을 서버로 해서 응답이 왔을 때 기본적으로 모든 것이 문자열(생긴게 json이라면)=>javascript오브젝트로 변경해줌
		}).done(function(resp){
			//성공 시
			console.log(resp);
			alert("회원가입이 완료되었습니다.")
			location.href="/blog";
		}).fail(function(error){
			//실패 시
			alert(JSON.stringify(error));
		}); // ajax통신을 이용해서 3개의 데이터를 json으로 변경하여 insert요청
		// ajax를 이용하는 이유
		// 1. html 파일이 아닌 data(json)을 받기 위해서 => 브라우저, 앱 모두 적용가능(앱은 html 응답x)
		// 2. 비동기 통신 => 사용자 경험(UX) 증진 / callback: 하던일을 멈추고 다른일로 돌아감
		
	}
}

index.init();