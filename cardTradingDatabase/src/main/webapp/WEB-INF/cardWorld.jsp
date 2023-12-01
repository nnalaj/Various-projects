<%@page import="utils.SetSessionCards"%>
<jsp:useBean id="SessionBean" 
			 class="beans.SessionBean" 
			 scope="session" />

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
  <% %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
	<link rel="stylesheet" href="styles/cardWorld.css" type="text/css"/>
<title>Card World</title>
</head>
<body>
	<h1>Card World</h1>
	<hr>
	<div id=userCards>
		<h2>Cards for <%= SessionBean.getUsername() %></h2>
			<div class ="divTable">
				<%= SessionBean.getCollectionHTML() %>	
			</div>
	</div>
	<div id=cardsForSale>
		<h2>Cards Available</h2>
			<div class="divTable">
				<%= SessionBean.getMarketHTML() %>
			</div>
	</div>
	<div>
		<form action = "logoutController.java">
			<input type="submit" value="logout">
		</form>
	</div>
</body>
</html>