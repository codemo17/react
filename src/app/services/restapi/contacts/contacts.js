// @flow
import contacts from './data';
import wait from '../wait';

class Contacts {
  static loadAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve({payload: [...contacts] });
      }, wait);
    })
  }
}

export default Contacts;
