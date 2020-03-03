module.exports = class deepestCalculator {
    calculateDepth(arr) {
        let depth = 1;
        let deepest = 0;
        for (let arrElement of arr) {
            if (Array.isArray(arrElement)) {
                depth = this.calculateDepth(arrElement);
                if (deepest < depth) {
                    deepest = depth;
                } 
            }
        }
    
        return deepest + 1;
    }
};

