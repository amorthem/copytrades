$(".navbar").load("components/header.html");
const web3 = new Web3(
  Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545"
);

const ROBOBankAddress = "0x18b10858E0082049Cf71bBCB431623eFffe8b50C";
const ROBOBank = new web3.eth.Contract(ROBOBankABI, ROBOBankAddress);
let WalletAccounts = "0x0";

const web3getAccount = async () => {
        
    // await window.ethereum.enable();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    // const accounts = await web3.eth.getAccounts(); 
    WalletAccounts = accounts[0];
    console.log(`%c    Metamask Account : ${WalletAccounts}   `, "color: yellow; background-color: #333;");
    totalFund(WalletAccounts);


    // Time to reload your interface with accounts[0]!
    ethereum.on('accountsChanged', function (accounts) {
      WalletAccounts = accounts[0];
      console.log(`%c    Metamask Account : ${WalletAccounts}   `, "color: yellow; background-color: #333;");
      document.querySelector("#fundCard").innerHTML = ``;
      totalFund(WalletAccounts);
    });

    
    
}
let totalFunds;

const totalFund = async (metamaskAccount) => {
    await ROBOBank.methods
    .TotalFundmanager()
    .call((err, res) => {
      if (err) {
        console.log("An error occured", err)
        return
      }
        console.log(`%c    Total Funds = ${res}   `, "color: white; background-color: #333;");
        totalFunds = res;
        fetchAllFundByMaster(metamaskAccount);
      });
    
}
const fetchFund = async (fundId) => {
        await ROBOBank.methods
        .FundStorages(fundId)
        .call((err, res) => {
          if (err) {
            console.log("An error occured", err)
            return
          }
            console.log(res);
          });
}
const fetchFundByMaster = async (fundId, metamaskAccount) => {
    await ROBOBank.methods
    .FundInfo(fundId)
    .call((err, res) => {
      if (err) {
        console.log("An error occured", err)
        return
      }
      console.log(res);
        let btnInvested;
        let fundMasterAddress0 = String(metamaskAccount).toLowerCase();
        let fundMasterAddress1 = String(res.masterAddress).toLowerCase();
        fundMasterAddress0 === fundMasterAddress1
        ? btnInvested = `
        <input type="number" class="form-control text-center text-light bg-info" value="">
        <p><button class="btn btn-success btn-md">Withdraw</button></p>
        `
        : btnInvested = `
        <input type="number" class="form-control text-center bg-light" placeholder="Amount to Copy">
        <p><button class="btn btn-warning btn-md">Copy ( Fee ${res.BUSDfee} BUSD )</button><p>
        `
        

        document.querySelector("#fundCard").innerHTML += `
        <div class="card">
            
            <div class="card-title" style="padding: 15px;">
                <b>${res.fundName}</b>
                <br>
                <small>${res.fundAddress}</small>
            </div>
            <div class="card-body" style="padding: 15px;">
                <p class="card-title"><b>Master Address : </b><small>${res.masterAddress}</small></p>
                <p class="card-text"><b>Balance Master : </b><span id="masterBalance${res.fundAddress}"></span></p>
                <p class="card-text"><b>Balance Total : </b><span id="fundBalance${res.fundAddress}"></span></p>
            </div>
            <div class="card-footer text-center" style="padding: 15px;">
                <p>${btnInvested}</p>
            </div>
        </div>
        `;
    });

    await ROBOBank.methods
        .FundBalance(fundId)
        .call((err, res) => {
          if (err) {
            console.log("An error occured", err)
            return
          }
            console.log(res);
            let masterBalance = document.querySelector(`#masterBalance${res.fundAddress}`);
            let fundBalance = document.querySelector(`#fundBalance${res.fundAddress}`);
            masterBalance.innerHTML += res.masterBalance;
            fundBalance.innerHTML += res.fundBalance;
          });
}

const fetchAllFund = () => {
    for(i = 1; i <= totalFunds; i++){
        fetchFund((i-1));
    }
}
const fetchAllFundByMaster = (metamaskAccount) => {
    for(i = 1; i <= totalFunds; i++){
        //fetchFundByMaster((i-1));
        fetchFundByMaster((i-1), metamaskAccount);
    }


}

  web3getAccount();