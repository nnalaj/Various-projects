package controllers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.SessionBean;

@WebServlet({"/ProcessLogin"})
public class ProcessLogin
  extends HttpServlet
{
  private static final long serialVersionUID = 1L;
  String page = "";

  @Override
protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    HttpSession session = request.getSession(false);
    if (session == null)
    {
      response.sendRedirect("login.jsp");
      return;
    }
    SessionBean beanObject = (SessionBean)session.getAttribute("SessionBean");

    String userName = request.getParameter("userName");
    String userPassword = request.getParameter("password");
    if ((userName == "Bob") || (userName == "bob") || (userName == "pat") || (userName == "Pat"))
    {
      beanObject.setMessage("Username already taken. Please choose another username");
      page = "login.jsp";
    }
    else if ((beanObject.getPassword() == "") || ((userName == beanObject.getUsername()) && (userPassword == beanObject.getPassword())))
    {
      beanObject.setMessage("no account information detected. please register befroe loggin in");
      page = "login.jsp";
    }
    else
    {
      page = "CardTradingController.java";
    }
    response.sendRedirect(page);
  }

  @Override
protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    doGet(request, response);
  }
}