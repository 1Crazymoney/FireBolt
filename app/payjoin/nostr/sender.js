const nostr = require('nostr-tools');
const payjoin = require('payjoinjs-lib');
const bitcoin = require('bitcoinjs-lib');

const NETWORK = bitcoin.networks.testnet;

    const relay = NostrTools.relayInit('wss://nos.lol');
      relay.connect();

      relay.on('connect', () => {
        console.log(`connected to ${relay.url}`);
      });
      relay.on('error', () => {
        console.log(`failed to connect to ${relay.url}`);
      });

      const privateKey = NostrTools.generatePrivateKey();
      const publicKey = NostrTools.getPublicKey(privateKey);

    async function generatePSBT(input) {
      const [inputTxId, inputIndex] = input.split(':');

      const psbt = new bitcoin.Psbt({ network: NETWORK, maximumFeeRate: 1000 });
      psbt.addInput({
        hash: inputTxId,
        index: parseInt(inputIndex),
        sighashType: bitcoin.Transaction.SIGHASH_NONE | bitcoin.Transaction.SIGHASH_ANYONECANPAY,
      });

      const outputs = [
  { 'tb1qwwr95vf488glajmlqcm3fyhplurq8tpk0wjs5x': '0' },
];

      outputs.forEach(output => {
    const address = Object.keys(output)[0];
    psbt.addOutput({
      address: address,
      value: 0,
    });
  });

      return psbt.toBase64();
    }

    async function handleFormSubmit(event) {
      event.preventDefault();
      
      const input = document.getElementById('input').value;
      const psbtBase64 = await generatePSBT(input);

      const signedPsbtTextarea = document.getElementById('signed-psbt');
      signedPsbtTextarea.value = psbtBase64;

    }

      const sendMessage = async (event) => {
        console.log("sendMessage function called");
        event.preventDefault();


        const recipientNostrID = document.getElementById("recipient-id").value;
          console.log("Recipient Nostr ID:", recipientNostrID);

        const psbtBase64 = JSON.stringify({
      PSBT: document.getElementById("signed-psbt").value
    });

        const encryptedMessageData = await NostrTools.nip04.encrypt(privateKey, recipientNostrID, psbtBase64);

      const dmEvent = {
        kind: 4,
        pubkey: publicKey,
        tags: [['p', recipientNostrID]],
        content: encryptedMessageData,
        created_at: Math.floor(Date.now() / 1000),
      };

      const dmEventId = NostrTools.getEventHash(dmEvent);
      const dmEventSig = NostrTools.signEvent(dmEvent, privateKey);
      dmEvent.id = dmEventId;
      dmEvent.sig = dmEventSig;

      const dmPub = relay.publish(dmEvent);
      dmPub.on('ok', () => {
        console.log(`${relay.url} has accepted our dm event`);
        alert('\n Event ID:' + dmEventId);
      });
      dmPub.on('seen', () => {
        console.log(`we saw the dm event on ${relay.url}`);
      });
      dmPub.on('failed', reason => {
        console.log(`failed to publish dm to ${relay.url}: ${reason}`);
        alert(`Failed to send message: ${reason}`);
      });
    };

    function resetFormFields() {
      document.getElementById('input').value = '';
      document.getElementById('signed-psbt').value = '';
      document.getElementById('recipient-id').value = '';
    }

    document.getElementById('create-psbt').addEventListener('click', handleFormSubmit);
    document.getElementById('submit-psbt').addEventListener('click', sendMessage);
    window.addEventListener('load', resetFormFields);
