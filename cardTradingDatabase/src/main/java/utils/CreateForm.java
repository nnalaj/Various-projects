package utils;

import javax.servlet.http.HttpServlet;

import beans.SessionBean;

public class CreateForm
  extends HttpServlet
{
  private static final long serialVersionUID = 1L;

  public String buildCollection(SessionBean bean)
  {
    SessionBean beanObject = bean;
    String buildHTML = "";
    int i = 0;
    String form = "<div class=\"divTableRow\" >\n<div class=\"divTableCol\">Card </div><div class=\"divTableCol\">Card Number </div><div class=\"divTableCol\">Card Value </div><div class=\"divTableCol\">Cards Owned </div><div class=\"divTableCol\">Total Value </div><div class=\"divTableCol\">Quantity </div><div class=\"divTableCol\">Buy or Sell </div></div>";
    for (String cardName : beanObject.getcardCollection().keySet())
    {
      String[] keyValueArray = beanObject.getcardCollection().get(cardName);
      int cardQuantity = Integer.parseInt(keyValueArray[2]);
      float cardPrice = Float.parseFloat(keyValueArray[1]);
      int cardNumber = Integer.parseInt(keyValueArray[0]);
      float totalValue = cardPrice * cardQuantity;
      form = form + "<form action=\"TransactionController\">\n <div class=\"divTableRow\">\n<div class=\"divTableCol\">" +

        cardName + "</div>\n" +
        "<input type=\"hidden\" name=\"cardName\" value=\"" + cardName + "\">\n" +
        "<div class=\"divTableCol\">" + keyValueArray[0] + "</div><!-- Card num -->\n" +
        "<input type=\"hidden\" name=\"cardNumber\" value=\"" + keyValueArray[0] + "\">\n" +
        "<div class=\"divTableCol\">" + keyValueArray[1] + "</div><!-- Card cardValue -->\n" +
        "<input type=\"hidden\" name=\"cardValue\" value=\"" + keyValueArray[1] + "\">\n" +
        "<div class=\"divTableCol\">" + keyValueArray[2] + "</div><!-- cardQuantity -->\n" +
        "<input type=\"hidden\" name=\"cardQuantity\" value=\"" + cardQuantity + "\">\n" +
        "<div class=\"divTableCol\">" + totalValue + "</div><!-- totalvalue -->\n" +
        "<input type=\"hidden\" name=\"toalValue\" value=\"" + totalValue + "\">\n" +
        "<div class=\"divTableCol\">" + "<input  name=\"sellBuyCards\" value=\"" + 0 + "\"></div>\n" +
        "<div class=\"divTableCol\">" +
        "<div id=\"actionDrop\">\n" +
        "<select name=\"buySell\" >\n" +
        "<option value=\"buy\">buy</option>\n" +
        "<option value=\"sell\">sell</option>\n" +
        "</select>\n" +
        "</div>\n" +
        "</div>" +
        "<div class=\"divTableColCalc\"><input type=\"submit\" value=\"Modify Collection\"></div>\n" +
        "</div>\n" +
        "</form>";
    }
    buildHTML = form;
    return buildHTML;
  }

  public String buildForSale(SessionBean bean)
  {
    SessionBean beanObject = bean;
    String buildHTML = "";

    String form = "<div class=\"divTableRow\" >\n<div class=\"divTableCol\">Card </div><div class=\"divTableCol\">Card Number </div><div class=\"divTableCol\">Card Value </div><div class=\"divTableCol\">Buy Or Sell </div><div class=\"divTableCol\">Quantity </div></div>";

    beanObject.setMarketHTML("");
    for (String cardName : beanObject.getcardsForSale().keySet())
    {
      String[] keyValueArray = beanObject.getcardsForSale().get(cardName);

      int quantity = Integer.parseInt(keyValueArray[0]);
      float cardValue = Float.parseFloat(keyValueArray[1]);
      float cardNumber = Integer.parseInt(keyValueArray[0]);

      form = form + "<form action=\"TransactionController\">\n<div class=\"divTableRow\">\n<input type=\"hidden\" name=\"cardName\" value=\"" +

        cardName + "\">\n" +
        "<div class=\"divTableCol\">" + cardName + "</div><!-- Card name -->\n" +
        "<input type=\"hidden\" name=\"cardNumber\" value=\"" + cardName + "\">\n" +
        "<div class=\"divTableCol\">" + keyValueArray[0] + "</div><!-- Card num -->\n" +
        "<input type=\"hidden\" name=\"cardNumber\" value=\"" + keyValueArray[0] + "\">\n" +
        "<div class=\"divTableCol\">" + keyValueArray[1] + "</div><!-- Card cardValue -->\n" +
        "<input type=\"hidden\" name=\"cardValue\" value=\"" + keyValueArray[1] + "\">\n" +
        "<div class=\"divTableCol\">" +
        "<div id=\"actionDrop\">\n" +
        "<select name=\"buySell\" >\n" +
        "<option value=\"buy\">buy</option>\n" +
        "<option value=\"sell\">sell</option>\n" +
        "</select>\n" +
        "</div>\n" +
        "</div>\n" +
        "<div class=\"divTableCol\">" + "<input  name=\"sellBuyCards\" value=\"" + 0 + "\"></div>\n" +
        "<div class=\"divTableColCalc\"><input type=\"submit\" value=\"Submit Transaction\"></div>\n" +
        "</div>\n" +
        "</form>";
    }
    buildHTML = form;
    return buildHTML;
  }

  public String buildDetails(SessionBean bean)
  {
    SessionBean beanObject = bean;
    String buildHTML = "";

    String form = "<div class=\"divTableRow\" >\n<div class=\"divTableCol\">Card </div><div class=\"divTableCol\">Card Number </div><div class=\"divTableCol\">Card Value </div><div class=\"divTableCol\">Buy Or Sell </div><div class=\"divTableCol\">Quantity </div></div>";

    form = form + "<div class=\"divTableRow\">\n<div class=\"divTableCol\">" +
      beanObject.getCardName() + "</div><!-- Card name -->\n" +
      "<input type=\"hidden\" name=\"cardNumber\" value=cardName>\n" +
      "<div class=\"divTableCol\">" + beanObject.getCardNum() + "</div><!-- Card num -->\n" +
      "<input type=\"hidden\" name=\"cardNumber\" value=cardNum>\n" +
      "<div class=\"divTableCol\">" + beanObject.getCardValue() + "</div><!-- Card cardValue -->\n" +
      "<input type=\"hidden\" name=\"cardValue\" value=cardValue>\n" +
      "<div class=\"divTableCol\">" +
      "<div id=\"actionDrop\">\n" +
      "<select name=\"buySell\" >\n" +
      "<option value=\"buy\">buy</option>\n" +
      "<option value=\"sell\">sell</option>\n" +
      "</select>\n" +
      "</div>\n" +
      "</div>\n";
    buildHTML = buildHTML + form;
    return buildHTML;
  }
}