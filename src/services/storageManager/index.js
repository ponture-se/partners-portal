import Cookies from "js-cookie";


export default class Storage {

  static set(name, value, days = 1) {
    Cookies.set(name, value, { expires: days });
  }
  static get(name) {
    return Cookies.get(name);
  }
  static remove(name) {
    Cookies.remove(name);
  }

  
}
