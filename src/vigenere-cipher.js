const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor (mod) {
    this.mod = mod;
    this.dict = "abcdefghijklmnopqrstuvwxyz";
  }


  encrypt(message, key) {  
    let result = ""; 

    if (message == null || key == null) {
      throw new Error("Error")
    } else {
      let index = 0;
      message = message.toLowerCase();
      key = key.toLowerCase();

      for (let i = 0; i < message.length; i++) {
        let m = this.dict.indexOf(message[i]);
            if (m < 0) {
            result += message[i];
            continue;
          }
        let k = this.dict.indexOf(key[index%key.length]);
        let c = (m+k)%this.dict.length;
        result += this.dict[c];

        index ++;
      }    
    }
    if (this.mod == false) {
      return result.split("").reverse().join("").toUpperCase();
    } else {
      return result.toUpperCase();
    }
  }      


  decrypt(encryptedMessage, key) {
    let result = ""; 

    if (encryptedMessage == null || key == null) {
      throw new Error("Error")
    } else {
      let index = 0;
      encryptedMessage = encryptedMessage.toLowerCase();
      key = key.toLowerCase();
      
      for (let i = 0; i < encryptedMessage.length; i++) {
        let m = this.dict.indexOf(encryptedMessage[i]);
        if (m < 0) {
          result += encryptedMessage[i];
          continue;
        }
        let k = this.dict.indexOf(key[index%key.length]);
        let c = (m+this.dict.length-k)%this.dict.length;
        result += this.dict[c];

        index ++;
      }
    }
    if (this.mod == false) {
      return result.split("").reverse().join("").toUpperCase();
    } else {
      return result.toUpperCase();
    }
  }
}

module.exports = VigenereCipheringMachine;