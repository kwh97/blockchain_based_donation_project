$( document ).ready(function() {
    console.log( "ready!" );
    
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {

        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    }
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    /* Get Node Info */
    web3.eth.getNodeInfo(function(error, result){
        if(error){
            console.log( "error" ,error);
        }
        else{
            console.log( "result",result );
            $('#NodeInfo').val(result);
        }
    });
    
    /*Get Balance */
    web3.eth.getAccounts(function(error, accounts) {
        if(error) {
            console.log(error);
        }
        $('#Account').val(accounts[0]);
        web3.eth.getBalance(accounts[0]).then(function(result){
            console.log( "Balance : " ,web3.utils.fromWei(result, 'ether'));
            $('#Balance').val(web3.utils.fromWei(result, 'ether'));
        });
    });
    
    $('#checkBalance').click(function() {
        var _account = $('#Account').val();
        web3.eth.getBalance(_account).then(function(result){
            console.log( "Balance : " ,web3.utils.fromWei(result, 'ether'));
            $('#Balance').val(web3.utils.fromWei(result, 'ether'));
        });
    });
    
    
    /* Transfer */
    $('#Transfer').click(function() {
        $('#Tx').text('');
        var _from = $('#From').val();
        var _to = $('#To').val();
        var _Amount = $('#Amount').val();
        var txnObject = {
            "from":_from,
            "to": _to,
            "value": web3.utils.toWei(_Amount,'ether'),
            // "gas": 21000,         (optional)
            // "gasPrice": 4500000,  (optional)
            // "data": 'For testing' (optional)
            // "nonce": 10           (optional)
        }
    
        web3.eth.sendTransaction(txnObject, function(error, result){
            if(error){
                console.log( "Transaction error" ,error);
            }
            else{
                var txn_hash = result; //Get transaction hash
                $('#Tx').text(txn_hash);
            }
        });
        
    });
    

});
