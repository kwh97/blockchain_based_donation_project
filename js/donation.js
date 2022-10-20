//1. 암호화폐 송금 기능
$( document ).ready(function() {
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


// 2. 기타 기능(사용자 상호작용, 모달창, 영수증 출력)

const firstAddress = document.querySelector("#firstAddress");
const secondAddress = document.querySelector("#secondAddress");
const thirdAddress = document.querySelector("#thirdAddress");
const to = document.querySelector("#To");


/** 1번 사용자 계좌번호 클릭 시 실행되는 함수 */
function copyFirstAddress() {
    const walletAddress = firstAddress.innerText; 
    to.value = walletAddress;
}

/** 2번 사용자 계좌번호 클릭 시 실행되는 함수 */
function copySecondAddress() {
    const walletAddress = secondAddress.innerText;
    to.value = walletAddress;
}

/** 3번 사용자 계좌번호 클릭 시 실행되는 함수 */
function copyThirdAddress() {
    const walletAddress = thirdAddress.innerText;
    to.value = walletAddress;
}

firstAddress.addEventListener("click", copyFirstAddress); 
secondAddress.addEventListener("click", copySecondAddress);
thirdAddress.addEventListener("click", copyThirdAddress);

/** 모달 창 출력 관련 함수 */
window.onload = function() {
    function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
    }   
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }
    document.getElementById('modal_btn').addEventListener('click', onClick);
    document.querySelector('.modal_close').addEventListener('click', offClick);
};

const from = document.querySelector("#From");
const amount = document.querySelector("#Amount");
const popUpButton = document.querySelector("#modal_btn");
const receiptAccount = document.querySelector("#receiptAccount");
const receiptSelect = document.querySelector("#receiptSelect");
const receiptAmount = document.querySelector("#receiptAmount");
const hash = document.querySelector("#Tx");

/**hash가 비어있는 경우, showAlert() 함수 실행, 아닌 경우 getReceipt() 함수 실행*/
function handleRecipt() {
    if (hash.innerText == "") {
        showAlert();
    } else {
        getRecipt();
    }
}

/**hash가 비어있는 경우, 경고문 출력*/
function showAlert() {
    receiptAccount.innerText = "먼저 기부를 진행해주세요. (지갑 계좌를 입력하세요.)";
    receiptSelect.innerText = "먼저 기부를 진행해주세요. (기부 대상자를 선택하세요.)";
    receiptAmount.innerText = "먼저 기부를 진행해주세요. (기부 금액을 입력하세요.)";
}

/**hash가 정상적으로 생성된 경우, 영수증 출력 */
function getRecipt() {
    receiptAccount.innerText = from.value;
    receiptSelect.innerText = `${to.value}`;
    receiptAmount.innerText = `${amount.value} ETH`;
}

popUpButton.addEventListener("click", handleRecipt);
