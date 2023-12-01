<jsp:useBean id="SessionBean" 
			 class="beans.SessionBean" 
			 scope="session" />

<!doctype html>
<html lang="en">
<head>
	<title>Card World Registration</title>
	<link rel="stylesheet" href="styles/login.css" type="text/css"/>
</head>
<body>
	<h1>Log Into Card World</h1>
	<hr>
	<div id="registerBox">
	<h2>Create a Card World account </h2>
	<%= SessionBean.getMessage() %>
	<form action="ProcessRegistration">
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
		<label>confirm password<br>
			<input 	type="text" name="confirm" 
					placeholder="confirm password"
					size="35"/>
		</label><br>
		
		<input type="submit" value="Submit form" />
	</form>
	</div>
	<hr>
</body>
</html>
	<% SessionBean.setMessage(""); %>