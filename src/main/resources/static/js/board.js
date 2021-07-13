let index = {
	init: function(){
		$("#btn-save").on("click",()=>{//function(){}, ()=>{} 사용하는 이유: this를 바인딩 하기 위해서
			this.save();
		});
		$("#btn-delete").on("click",()=>{//function(){}, ()=>{} 사용하는 이유: this를 바인딩 하기 위해서
			this.deleteById();
		});
	},
	save:function(){
		let data={
			title:$("#title").val(),
			content:$("#content").val(),
		};
		$.ajax({
			type:"POST",
			url:"/api/board",
			data: JSON.stringify(data), 
			contentType:"application/json; charset=utf-8", 
			dataType:"json"
		}).done(function(resp){
			//성공 시
			console.log(resp);
			alert("글쓰기가  완료되었습니다.")
			location.href="/";
		}).fail(function(error){
			//실패 시
			alert(JSON.stringify(error));
		}); 
		
	},
	deleteById:function(){
		var id = $('#id').text();
		$.ajax({
			type:"DELETE",
			url:"/api/board/"+id,
			dataType:"json"
		}).done(function(resp){
			//성공 시
			console.log(resp);
			alert("삭제가  완료되었습니다.")
			location.href="/";
		}).fail(function(error){
			//실패 시
			alert(JSON.stringify(error));
		}); 
		
	},
	
	
}

index.init();