package controllers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.SessionBean;
import utils.CreateForm;
import utils.DataTools;
import utils.Redirects;
import utils.SetSessionCards;

@WebServlet({"/cardTradingController"})
public class cardTradingController
  extends HttpServlet
{
  private static final long serialVersionUID = 1L;
  Redirects redirector = new Redirects();
  SetSessionCards activate = new SetSessionCards();
  DataTools dataTool = new DataTools();
  CreateForm builder = new CreateForm();

  protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    HttpSession session = request.getSession(false);
    if (session == null)
    {
      redirector.redirectToLogin(response);
    }
    else if ((!DataTools.IfReferredBy(request, "register.jsp")) || (!DataTools.IfReferredBy(request, "login.jsp")))
    {
      SessionBean beanObject = (SessionBean)session.getAttribute("SessionBean");

      beanObject.setCollectionHTML(builder.buildCollection(beanObject));
      beanObject.setMarketHTML(builder.buildForSale(beanObject));
      beanObject.setMessage("from card trading <3");

      redirector.redirectToCardWorld(response, beanObject);
    }
  }

  protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    doGet(request, response);
  }
}