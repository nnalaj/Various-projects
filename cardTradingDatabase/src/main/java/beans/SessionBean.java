package beans;

import java.util.HashMap;

public class SessionBean
{
  private String message = "";
  private String userName = "";
  private String password = "";
  private HashMap<String, String[]> cardCollection = new HashMap();
  private HashMap<String, String[]> cardsForSale = new HashMap();
  private String marketBoard = " nothing to show yet - hash map empty";
  private String collection = " nothing to show yet - hash map empty";
  private String action = "nothing";
  private String cardName = "";
  private int cardNum;
  private float cardValue;
  private int cardsOwned;
  private int cardsToSell;
  private String transDetails = "";

  public SessionBean clear(SessionBean bean)
  {
    SessionBean beanObject = bean;
    message = "";
    userName = "";
    password = "";
    cardCollection = new HashMap();
    cardsForSale = new HashMap();
    marketBoard = " nothing to show yet - hash map empty";
    collection = " nothing to show yet - hash map empty";
    action = "nothing";
    cardName = "";
    cardNum = 0;
    cardValue = 0.0F;
    cardsOwned = 0;
    cardsToSell = 0;
    transDetails = "";

    return beanObject;
  }

  public String getMessage()
  {
    return message;
  }

  public void setMessage(String message)
  {
    this.message = message;
  }

  public void setUsername(String user)
  {
    userName = user;
  }

  public String getUsername()
  {
    return userName;
  }

  public String getPassword()
  {
    return password;
  }

  public void setPassword(String pass)
  {
    password = pass;
  }

  public void setCardCollection(String cardName, String cardNum, String value, String owned)
  {
    cardCollection.put(cardName, new String[] { cardNum, value, owned });
  }

  public HashMap<String, String[]> getcardCollection()
  {
    return cardCollection;
  }

  public void setCardsForSale(String cardName, String cardNum, String value)
  {
    cardsForSale.put(cardName, new String[] { cardNum, value });
  }

  public HashMap<String, String[]> getcardsForSale()
  {
    return cardsForSale;
  }

  public void setCollectionHTML(String passedHTML)
  {
    collection = passedHTML;
  }

  public String getCollectionHTML()
  {
    return collection;
  }

  public void setMarketHTML(String passedHTML)
  {
    marketBoard = passedHTML;
  }

  public String getMarketHTML()
  {
    return marketBoard;
  }

  public String getCardName()
  {
    return cardName;
  }

  public void setCardName(String cardName)
  {
    this.cardName = cardName;
  }

  public int getCardNum()
  {
    return cardNum;
  }

  public void setCardNum(int cardNum)
  {
    this.cardNum = cardNum;
  }

  public float getCardValue()
  {
    return cardValue;
  }

  public void setCardValue(float cardValue)
  {
    this.cardValue = cardValue;
  }

  public int getCardsOwned()
  {
    return cardsOwned;
  }

  public void setCardsOwned(int cardsOwned)
  {
    this.cardsOwned = cardsOwned;
  }

  public int getCardsToSell()
  {
    return cardsToSell;
  }

  public void setCardsToSell(int cardsToSell)
  {
    this.cardsToSell = cardsToSell;
  }

  public void setDetails(String details)
  {
    transDetails = details;
  }

  public String getDetails()
  {
    return transDetails;
  }
}