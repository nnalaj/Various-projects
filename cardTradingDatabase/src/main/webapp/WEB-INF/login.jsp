<jsp:useBean id="SessionBean" 
			 class="beans.SessionBean" 
			 scope="session" />

<!doctype html>
<html lang="en">
<head>
	<title>Card World Login</title>
	<link rel="stylesheet" href="styles/login.css" type="text/css"/>
</head>
<body>
	<h1>Card World</h1>
	<hr>
	<div id="loginBox">
	<form action="ProcessLogin">  <!-- head to ProcessLogin controller -->
		<label>user name<br>
			<input 	type="text" name="userName" 
					placeholder="enter username to register or to login"
					size="35"/>
		</label><br>
		<label>password<br>
			<input 	type="text" name="password" 
					placeholder="enter password"
					size="35"/>
		</label>
		<br>
		<input type="submit" value="Login" />
	</form>
	<p> status: <%= SessionBean.getMessage() %></p>
	<h3>Not registered? click <a href="register.jsp">here</a> to create an account</h3>
	</div>
	<hr>
	
</body>
</html>
	<% SessionBean.setMessage("");  %>  <!-- clear session message --> 