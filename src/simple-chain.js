const chainMaker = {
  theChain: [],

  getLength() {
    return theChain.length;
  },
  addLink(value = '') {
    this.theChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.theChain.length || Number.isInteger(position) == false) {
      this.theChain = [];
      throw new Error(); 
    } else {
      this.theChain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.theChain.reverse();
    return this;
  },
  finishChain() {
    const result = this.theChain;
    this.theChain = [];
    return result.join('~~');
  }  
};

module.exports = chainMaker;
