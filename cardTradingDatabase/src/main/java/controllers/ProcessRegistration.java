package controllers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.SessionBean;
import utils.Redirects;
import utils.SetSessionCards;

@WebServlet({"/ProcessRegistration"})
public class ProcessRegistration
  extends HttpServlet
{
  private static final long serialVersionUID = 1L;
  Redirects redirector = new Redirects();
  SetSessionCards activate = new SetSessionCards();

  @Override
protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    HttpSession session = request.getSession(false);
    if (session == null) {
      response.sendRedirect("register.jsp");
    }
    SessionBean beanObject = (SessionBean)session.getAttribute("SessionBean");

    String userName = request.getParameter("userName");
    String userPassword = request.getParameter("password");
    String userConfirm = request.getParameter("confirm");
    String page = "register.jsp";
    if ((userName == "Bob") || (userName == "bob") || (userName == "pat") || (userName == "Pat") || (userName == "peg") || (userName == "Peg"))
    {
      beanObject.setMessage("Username already taken. Please choose another username");
      redirector.redirectToResiter(response);
    }
    else if ((userName == "") || (userPassword == "") || (userConfirm == ""))
    {
      beanObject.setMessage("Fields cannot be blank.");
      redirector.redirectToResiter(response);
    }
    else if (!userConfirm.equalsIgnoreCase(userPassword))
    {
      beanObject.setMessage("Passwords must match. Please try again");
      System.out.println(userConfirm + " " + userPassword);
      redirector.redirectToResiter(response);
    }
    else if ((userName != "") && (userPassword.equalsIgnoreCase(userConfirm)))
    {
      beanObject.setUsername(userName);
      beanObject.setPassword(userPassword);
      beanObject = activate.setSessionCards(beanObject);

      redirector.redirectToCardTrading(response, beanObject);
    }
  }

  @Override
protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    doGet(request, response);
  }
}