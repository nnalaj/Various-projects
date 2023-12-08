
package utils;

import javax.servlet.http.HttpServletRequest;

public class DataTools
{
  public static boolean IfReferredBy(HttpServletRequest request, String cameFrom)
  {
    if (request.getHeader("Referer") == null) {
      return false;
    }
    String Referer = request.getHeader("Referer");
    if (Referer.contains(cameFrom)) {
      return true;
    }
    return false;
  }
}