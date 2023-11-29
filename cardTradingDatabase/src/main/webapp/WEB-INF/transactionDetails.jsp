<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 
 <jsp:useBean id="SessionBean" 
			 class="beans.SessionBean" 
			 scope="session" />
			  
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Transaction Details</title>
</head>
<body>
	<h1>Transaction Details</h1>
	<hr>
	<div id=userCards>
		<h2>Cards for <%= SessionBean.getUsername() %>'s transaction</h2>
			<div class ="divTable">
				<%= SessionBean.getDetails() %>	
			</div>
	</div>
	<div>
	<form action = "cardWorld.jsp">
			<input type="submit" value="submit">
		</form>
	</div>
</body>
</html>