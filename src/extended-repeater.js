const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";

    if (typeof(str) !== "string") {
        str = String(str);
    }

    if (options.addition === undefined) {
        options.additionRepeatTimes = 0;
    }

    if (typeof(options.addition) !== "string") {
        options.addition = String(options.addition);
    }

    if (options.repeatTimes == null || options.repeatTimes == undefined) {
        options.repeatTimes = 1;
    }

    if (options.additionRepeatTimes == null || options.additionRepeatTimes == undefined) {
        options.additionRepeatTimes = 1;
    }

    if (options.separator == undefined) {
        options.separator = "+";
    }

    if (options.additionSeparator == undefined) {
        options.additionSeparator = "|";
    }


    for (let i = 1; i <= options.repeatTimes; i++) {
        let resultAddition = "";

        for (let j = 1; j <= options.additionRepeatTimes; j++) {
            if (j < options.additionRepeatTimes) {
                resultAddition = resultAddition + options.addition + options.additionSeparator;
            } else {
                resultAddition = resultAddition + options.addition;
            }
        }
            if (i < options.repeatTimes) {
                result = result + str + resultAddition + options.separator;
            } else {
                result = result + str + resultAddition;
            }
    }
    return result;
};