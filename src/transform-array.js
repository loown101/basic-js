const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arrTrans = [];

  if (!Array.isArray(arr)) {
      throw new Error('Error');
  }

  if (arr == null || arr.length == 0) {
    return arrTrans;
  }

    for (let i = 0; i < arr.length; i++) {
        let result = '';

        if (arr[i] == '--discard-next') {
            i++;
        } else if (arr[i] == '--discard-prev' ) {
            if (arr[i-2] !== '--discard-next') {
            arrTrans.pop();
            }
        } else if (arr[i] == '--double-next') {
            if (i !== arr.length-1) {
             arrTrans.push(arr[i+1]);
            }       
        } else if (arr[i] == '--double-prev') {
            if (i > 0 && arr[i-2] !== '--discard-next') {
                arrTrans.push(arr[i-1])
            }
        } else {
            result = arr[i];
            arrTrans.push(result);
        }
    }
  
    return arrTrans;
};