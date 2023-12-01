package utils;

import beans.SessionBean;

public class SetSessionCards
{
  public SessionBean setSessionCards(SessionBean bean)
  {
    SessionBean beanObject = bean;
    beanObject.setCardCollection("1983 Topps Tony Gwynn RC", "482", "75.21", "1");
    beanObject.setCardCollection("1984 Fleer Update Roger Clemens", "27", "120.00", "2");
    beanObject.setCardCollection("1983 Topps Ryne Sandberg", "83", "20.00", "3");

    beanObject.setCardsForSale("1984 Donruss Don Mattingly", "248", "40");
    beanObject.setCardsForSale("1984 Donruss Joe Carter RC", "41", "8");
    beanObject.setCardsForSale("1984 Donruss Darryl Strawberry", "68", "12");

    return beanObject;
  }
}