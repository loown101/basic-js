const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth (array, Depth = 1) { 
    let maxDepth = Depth;
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                let subArrayDepth = this.calculateDepth (array[i], Depth+1);
                    if (subArrayDepth > maxDepth) {
                        maxDepth = subArrayDepth;
                    }
            }
        }
    }
return maxDepth;
}
};