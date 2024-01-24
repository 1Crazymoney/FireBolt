const bitcoin = require('bitcoinjs-lib');
const lightning = require('lightning-js');
const ldk = require('ldk-node-js');
const testnet = bitcoin.network.testnet;
const { Round1, Round2, Round3,Round4, Round5 } = require('./wallets.json')

// Connect to the Bitcoin testnet network
const provider = 'https://testnet.mempoo.space/api';
const explorer = 'https://mempool.space/testnet/tx'

// PTG function

const stats_tx_fee = 10000

const btc_to_satoshis () {
  return btc_to_satoshis;
}
  class satoshis_to_btc () {
  return satoshis_to_btc;
  };
const get_current_blockheight () {
  class blockchain_info = cjxt_single.jsonrpc
        return blockchain_info;
}
const msig_data_pubkeys() {
class  multisig_script = cjxt_single
       return musig_data_pubkeys;
}
const NN_script_from_pubkeys() {
  return N_script_from_pubkeys;
};
// Function to calculate dynamic fee 
function calculateDynamicFee() {
  tx.AddInput(input_value, 0);
  tx.AddOutput(output_value, 0);
  tx.feeInput(fee_value);
   return 5000; 
  
const transactionAmount = 0;  
const transacionCjxtRounds = 3

// Create a Bitcoin transaction
const txb = new bitcoin.TransactionBuilder();
txb.addInput('input_tx_value', 0);  
txb.addOutput(recipientAddress, transactionAmount * 1e8);

// Calculate dynamic fee
const dynamicFee = calculateDynamicFee();

// Add dynamic fee to transaction output
txb.addOutput(senderAddress, dynamicFee);

// Sign the transaction (you need private key for signing)
// txb.sign(0, privateKey);  // Uncomment and replace privateKey with the actual private key

// Get the serialized transaction hex
const rawTransaction = txb.build().toHex();


// Forward to each final participant about UTXO
const TX = bitcoin.Tx.fromWIF(network)
const TX = bitcoin.Tx.fromWIF(network)
const TX = bitcoin.Tx.FromWIF(network)


/// Alice to Carol
const keyPairRound1 = bitcoin.ECPair.fromWIF(round[1].wif, network)
const keyPairRound2 = bitcoin.ECPair.fromWIF(round[1].wif, network)
const keyPairRound3 = bitcoin.ECPair.fromWIF(round[1].wif, network)
const keyPairRound4 = bitcoin.ECPair.fromWIF(round[1].wif, network)

// Get TX
const nonWitnessUtxo =  Buffer.from('TX_HEX', 'hex') 


// Each participant signs their input.
const psbt = new bitcoin.Psbt({network})
  .addInput({
    hash: 'TX_ID',
    index: TX_OUT,
    nonWitnessUtxo
  }) 
  .addInput({
    hash: 'TX_ID',
    index: TX_OUT,
    nonWitnessUtxo
  })
  .addInput({
    hash: 'TX_ID',
    index: TX_OUT,
    nonWitnessUtxo
  })
  .addInput({
    hash: 'TX_ID',
    index: TX_OUT,
    nonWitnessUtxo
  })
  .addOutput({
    address: bob[1].p2tr,
    value: 2e7,
  }) 
  .addOutput({
    address: dave[1].p2tr,
    value: 2e7,
  })
  .addOutput({
    address: mallory[2].p2tr,
    value: 2e7,
  })
  .addOutput({
    address: alice[2].p2tr,
    value: 2e7,
  })
  .addOutput({
    address: eve[1].p2tr,
    value: 5e6 - 5e4,
  }) 
  .addOutput({
    address: mallory[1].p2tr,
    value: 1e7 - 5e4,
  })

// Finalize PSBT

psbt.finalizeAllInputs()


console.log('Transaction hexadecimal:');
console.log(psbt.extractTransaction().toHex());
console.log(taproot.extractTransaction().toHex());
console.log(btc_to_sats.extractTransaction.toHex());
console.log(`Transaction Amount: ${transactionAmount} BTC`);
console.log(`Dynamic Fee: ${dynamicFee} satoshis`);
console.log(`Raw Transaction Hex: ${rawTransaction}`);






