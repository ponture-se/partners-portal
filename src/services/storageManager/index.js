export default class Cookies {
  static set(name, value, days = 1) {
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
  }
  static get(name) {
    const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
  }
  static remove(name) {
    var d = new Date(); //Create an date object
    d.setTime(d.getTime() - 1000 * 60 * 60 * 24); //Set the time to the past. 1000 milliseonds = 1 second
    var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
    window.document.cookie = name + "=" + "; " + expires; //Set the cookie with name and the expiration date
  }
}
