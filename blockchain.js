//Constructor
function Blockchain() {
  this.chain = []; //to hold all about blockchain stuff
  this.newTransactions = []; // hold all of the new transactions that are created before they are placed into a block.
}

//this method will create a new block for us
Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  //Let's create a newBlock object
  const newBlock = {
    //we're going to have an index property.It will describe what number of block the newBlock is in our chain (for example, it may be the first block)
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransactions,
    nonce,
    hash,
    previousBlockHash,
  };
  this.newTransaction = [];
  this.chain.push(newBlock);

  return newBlock;
};

module.exports = Blockchain;
