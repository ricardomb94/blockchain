//Constructor
function Blockchain() {
  this.chain = []; //to hold all about blockchain stuff
  this.pendingTransactions = []; // hold all of the new transactions that are created before they are placed into a block.
  // this.createNewBlock();
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
    transactions: this.pendingTransactions,
    nonce,
    hash,
    previousBlockHash,
  };
  this.newTransaction = [];
  this.chain.push(newBlock);

  return newBlock;
};

//Create a new method: getLAstBlock
Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1]; //This method defines the position of the block in the chain
};

//Create a new method: createNewTransaction
Blockchain.prototype.createNewTransaction = function (
  amount,
  sender,
  recipient
) {
  const newTransaction = {
    amount,
    sender,
    recipient,
  };
  this.pendingTransactions.push(newTransaction);
  return this.getLastBlock()['index'] + 1;
};

//Create a new method: hashBlock.
//What this method will do is take in a block from our blockchain and hash its data into a fixed length string.
//blockdata parameter will be the input data of our block from which we want to generate the hash.
Blockchain.prototype.hashBlock = function (blockdata) {};

module.exports = Blockchain;
