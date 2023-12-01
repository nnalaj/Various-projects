package utils;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import beans.SessionBean;

public class Redirects
  extends HttpServlet
{
  private static final long serialVersionUID = 1L;
  String page = "";

  public void redirectToLogin(HttpServletResponse res)
    throws ServletException, IOException
  {
    page = "login.jsp";
    res.sendRedirect(page);
  }

  public void redirectToResiter(HttpServletResponse res)
    throws ServletException, IOException
  {
    page = "register.jsp";
    res.sendRedirect(page);
  }

  public void redirectToCardWorld(HttpServletResponse res, SessionBean bean)
    throws ServletException, IOException
  {
    page = "cardWorld.jsp";
    res.sendRedirect(page + "?" + bean);
  }

  public void redirectToCardTrading(HttpServletResponse res, SessionBean bean)
    throws ServletException, IOException
  {
    page = "CardTradingController";
    res.sendRedirect(page + "?" + bean);
  }

  public void redirectToTransactionDetails(HttpServletResponse res, SessionBean bean)
    throws ServletException, IOException
  {
    page = "transactionDetails.jsp";
    res.sendRedirect(page + "?" + bean);
  }
}