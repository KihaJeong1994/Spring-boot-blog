let index = {
	init: function(){
		$("#btn-save").on("click",()=>{//function(){}, ()=>{} 사용하는 이유: this를 바인딩 하기 위해서
			this.save();
		});
		$("#btn-delete").on("click",()=>{//function(){}, ()=>{} 사용하는 이유: this를 바인딩 하기 위해서
			this.deleteById();
		});
		$("#btn-reply-save").on("click",()=>{//function(){}, ()=>{} 사용하는 이유: this를 바인딩 하기 위해서
			this.replySave();
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
	replySave:function(){
		let data={
			userId:$("#userId").val(),
			boardId:$("#boardId").val(),
			content:$("#reply-content").val(),
		};
		console.log(data)
		$.ajax({
			type:"POST",
			url:`/api/board/${data.boardId}/reply`, //javascript 변수값이 문자열에 들어옴
			data: JSON.stringify(data), 
			contentType:"application/json; charset=utf-8", 
			dataType:"json"
		}).done(function(resp){
			//성공 시
			console.log(resp);
			alert("댓글작성이  완료되었습니다.")
			location.href=`/board/${data.boardId}`;
		}).fail(function(error){
			//실패 시
			alert(JSON.stringify(error));
		}); 
		
	},
	
	replyDelete:function(boardId,replyId){
		$.ajax({
			type:"DELETE",
			url:`/api/board/${boardId}/reply/${replyId}`, 
			dataType:"json"
		}).done(function(resp){
			//성공 시
			console.log(resp);
			alert("댓글삭제가  완료되었습니다.")
			location.href=`/board/${boardId}`;
		}).fail(function(error){
			//실패 시
			alert(JSON.stringify(error));
		}); 
		
	},
	
	
}

index.init();