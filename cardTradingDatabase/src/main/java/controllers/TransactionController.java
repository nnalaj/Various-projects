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

@WebServlet({"/TransactionController"})
public class TransactionController
  extends HttpServlet
{
  private static final long serialVersionUID = 1L;
  Redirects redirector = new Redirects();

  @Override
protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    HttpSession session = request.getSession(false);

    SessionBean beanObject = (SessionBean)session.getAttribute("SessionBean");
    String cardName = request.getParameter("cardName");
    String cardNum = request.getParameter("cardNumber");
    String cardValue = request.getParameter("cardValue");
    int cardsToSell = 0;
    int cardsToBuy = 0;
    int cardsOwned = 0;
    String collectionAction = request.getParameter("Modify Collection");
    String marketAction = request.getParameter("buySell");
    if (marketAction == "sell")
    {
      if ((cardName == null) ||
        (cardNum == null) ||
        (cardValue == null) ||
        (cardsToSell <= 0) ||
        (cardsOwned <= 0) ||
        (cardsToSell > cardsOwned)) {
        System.out.println("collectionAction");
      }
      if (cardsToSell >= 0)
      {
        System.out.println("selling cards send to details");
        cardsToSell = Integer.parseInt(request.getParameter("sellBuyCards"));
        cardsOwned = Integer.parseInt(request.getParameter("cardQuantity"));
        if ((cardsOwned = cardsToSell - cardsOwned) <= 0)
        {
          beanObject.setMessage("*****CANNOT SELL MORE CARDS THAN OWNED******");
        }
        else
        {
          cardsOwned = cardsToSell - cardsOwned;
          beanObject.setCardsOwned(cardsOwned);
        }
        redirector.redirectToTransactionDetails(response, beanObject);
      }
    }
    else if (marketAction == "buy")
    {
      if (cardsToBuy > 0)
      {
        cardsToBuy = Integer.parseInt(request.getParameter("sellBuyCards"));
        cardsOwned += cardsToBuy + cardsOwned;
      }
      beanObject.setCardsOwned(cardsOwned);
      redirector.redirectToTransactionDetails(response, beanObject);
    }
  }

  @Override
protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    doGet(request, response);
  }
}