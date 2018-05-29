var Neb = require("nebulas").Neb;
var Account = require("nebulas").Account;
var neb = new Neb();
var NebPay = require("nebpay");
var nebPay = new NebPay();

//test net
neb.setRequest(new nebulas.HttpRequest("https://testnet.nebulas.io"));
var dappAdress="";

//main net
// neb.setRequest(new HttpRequest("https://mainnet.nebulas.io"));
// var dappAdress="";

$("#btnGetPW").click(function(){
    var sOrigin = $("#original").val();
    
});

function getPW(sOrigin){
	var from = Account.NewAccount().getAddressString();
    var value = "0";
    var nonce = "0"
    var gas_price = "1000000"
    var gas_limit = "2000000"
    var callFunction = "getPW";
    var callArgs = JSON.stringify([sOrigin]);
    var contract = {
        "function": callFunction,
        "args": callArgs
    }
	neb.api.call(from, dappAdress, value, nonce, gasprice, gas_limit, contract).then(function(resp){
		cbGet(resp)
	}).catch(function(err){
		console.log("error:"+err.message);
	});
}

var serialNumber;
function generatePW(sOrigin){
    var callArgs = JSON.stringify([sOrigin]);
    serialNumber = nebPay.call(dappAdress, "0", "generatePW", callArgs, {    //使用nebpay的call接口去调用合约,
            listener: cbGenerate
        });
}

function cbGet(resp){
	var result = resp.result;
	console.log("return of rpc call:" + JSON.stringify(result));

	if(!result || result === "null"){	//no existing string, call generate function

	}
	else{	//string has been used, pop up warning

	}
}

function cbGenerate(resp){

}