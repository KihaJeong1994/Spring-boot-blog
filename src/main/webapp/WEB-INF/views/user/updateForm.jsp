<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ include file="../layout/header.jsp"%>

<div class="container">

	<form>
	<input type="hidden"  id="id" value = "${principal.user.id }">
		<div class="form-group">
			<label for="username">Username:</label> <input type="text" class="form-control" placeholder="Enter username" id="username" readonly value="${principal.user.username }">
		</div>
		<div class="form-group">
		<c:if test="${ empty principal.user.oauth }">
			<label for="password">Password:</label> <input type="password" class="form-control" placeholder="Enter password" id="password" >
		</c:if>
			
		</div>
		<div class="form-group">
			<label for="email">Email:</label> <input type="email" class="form-control" placeholder="Enter email" id="email" value="${principal.user.email }" >
		</div>

	</form>
	<button id="btn-update" class="btn btn-primary">ȸ������ �Ϸ�</button>
</div>

<script src="/js/user.js"></script>
<%@ include file="../layout/footer.jsp"%>


