function connectWallet() {
  (async () => {
    try {
      wallet = await window.solana.connect();
    } catch (err) {
      console.log(err);
    }
  })();
}

async function requestDatasetsAndTransactionSol() {

  $.ajax({
    ulr: 'someApiApplicationForGetCurrentUser/getCurrentUserpubKey',
    type: 'GET',
    success: function (currentUserpubkey) {
      wallet.publicKey = currentUserpubkey;
    },
    error: function (returnedFailed) {
      console.log(returnedFailed);
    }

  });
  const defaultPubKeyFromEvaldoAnchorApp = "AvrhZ54qXzwGF7H4xSJrXnfMjCeNqPr4Rc8MgHuEHia7";
  const defaultSolQuantityForTransaction = 1;
  await signInTransactionAndSendMoney(defaultPubKeyFromEvaldoAnchorApp, defaultSolQuantityForTransaction);
  redirectToIndex();
}

function signInTransactionAndSendMoney(destPubkeyStr, quantity) {
  (async () => {
    const network = "https://api.devnet.solana.com";
    const connection = new solanaWeb3.Connection(network);
    try {
      const lamports = quantity * lamports_per_sol;

      const destPubkey = new solanaWeb3.PublicKey(destPubkeyStr);

      const transferSolanaInstructionForDataset = solanaWeb3.SystemProgram.transfer({
        toPubkey: wallet.publicKey,
        fromPubkey: destPubkey,
        lamports,
      });
      const transactionSolByCurrentDataset = await setWalletTransaction(transferSolanaInstructionForDataset, connection);

      await signAndSendTransaction(wallet, transactionSolByCurrentDataset, connection);
    } catch (e) {
      console.warn("Failed", e);
    }

  })();

  async function setWalletTransaction(instruction, connection) {
    const transaction = new solanaWeb3.Transaction();
    transaction.add(instruction);
    transaction.feePayer = wallet.publicKey;
    const hash = await connection.getRecentBlockhash();
    transaction.recentBlockhash = hash.blockhash;
    return transaction;
  }

  async function signAndSendTransaction(wallet, transaction, connection) {
    const signature = await window.solana.signAndSendTransaction(
      transaction
    );
    await connection.confirmTransaction(signature);
    return signature;
  }
}

function redirectToIndex() {
  window.location.href = "index.html";
  localStorage.setItem("sentSuccessFunction","true");
}
