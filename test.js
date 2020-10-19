const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

// bitcoin.hashBlock();

// bitcoin.createNewBlock(789457, 'OIUOEDJETH8754DHKD', '78SHNEG45DER56');

// bitcoin.createNewTransaction(100, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');

// bitcoin.createNewBlock(548764, 'AKMC875E6S1RS9', 'WPLS214R7T6SJ3G2');
// bitcoin.createNewBlock(130279, 'AYMA979E6S1RC7', 'RICA214R7T6SJ3H3');

// bitcoin.createNewTransaction(50, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
// bitcoin.createNewTransaction(2000, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
// bitcoin.createNewTransaction(300, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
// bitcoin.createNewTransaction(500, 'SHELDT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');

const previousBlockHash = '87765DA6CCF0668238C1D27C35692E11';
const currentBlockData = [
  {
    amount: 10,
    recipient: '3V3F6E462D48E9',
    sender: 'M4USA9C0E5CD571',
  },
  {
    amount: 30,
    recipient: '093ANSE462D48E9',
    sender: 'A4CEE9C0E5CD571',
  },
  {
    amount: 200,
    recipient: '7Z3F6E462D48E9',
    sender: 'A4RIC9C0E5CD571',
  },
];
const nonce = 106707;

bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

//log out the bitcoin blockchain
// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
console.log(bitcoin);
