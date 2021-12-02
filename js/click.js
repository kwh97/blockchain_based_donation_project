'use strict';

//기부 대상자를 선택하는 부분 
// firstAddress = 1번대상자의 지갑 주소 영역
// secondAddress = 2번 대상자의 지갑 주소 영역
// thirdAddress = 3번 대상자의 지갑 주소 영역
// 코드 내용 : 기부 대상자의 지갑을 클릭 시, 바로 복사가 되는 기능 구현.

const firstAddress = document.querySelector("#firstAddress");
const secondAddress = document.querySelector("#secondAddress");
const thirdAddress = document.querySelector("#thirdAddress");
const to = document.querySelector("#To");

function copyFirstAddress() {
    const walletAddress = firstAddress.innerText; 
    to.value = walletAddress;
}

function copySecondAddress() {
    const walletAddress = secondAddress.innerText;
    to.value = walletAddress;
}

function copyThirdAddress() {
    const walletAddress = thirdAddress.innerText;
    to.value = walletAddress;
}

// user가 지정한 영역을 click시 copy....Address() 함수를 실행
firstAddress.addEventListener("click", copyFirstAddress); 
secondAddress.addEventListener("click", copySecondAddress);
thirdAddress.addEventListener("click", copyThirdAddress);
//----------------------------------------------------------------------------------

//영수증 팝업창 출력 부분
//코드 내용 : '영수증 조회' 버튼 클릭시 팝업창으로 영수증 출력을 하는 코드

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
//---------------------------------------------------------------------------------

//영수증 출력 부분
//코드 내용 : 페이지에서 송금하기를 끝내고 hash가 생성되었을 경우, 영수증 출력, 만약 hash가 형성이 안되었을 경우 경고문 출력
//영수증에 안내 및 경고문을 출력함.

const from = document.querySelector("#From");
const amount = document.querySelector("#Amount");
//const to = document.querySelector("#To");
const popUpButton = document.querySelector("#modal_btn");

const receiptAccount = document.querySelector("#receiptAccount");
const receiptSelect = document.querySelector("#receiptSelect");
const receiptAmount = document.querySelector("#receiptAmount");
const hash = document.querySelector("#Tx");

//hash가 비어있는 경우, showAlert() 함수 실행, 아닌 경우 getReceipt() 함수 실행
function handleRecipt() {
    if (hash.innerText == "") {
        showAlert();
    } else {
        getRecipt();
    }
}

//hash가 비어있는 경우, 아래와 같은 경고문 출력
function showAlert() {
    receiptAccount.innerText = "먼저 기부를 진행해주세요. (지갑 계좌를 입력하세요.)";
    receiptSelect.innerText = "먼저 기부를 진행해주세요. (기부 대상자를 선택하세요.)";
    receiptAmount.innerText = "먼저 기부를 진행해주세요. (기부 금액을 입력하세요.)";
}

//hash가 정상적으로 생성된 경우, 영수증 출력
function getRecipt() {
    receiptAccount.innerText = from.value;
    receiptSelect.innerText = `${to.value}`;
    receiptAmount.innerText = `${amount.value} ETH (수수료: ${amount.value * 0.02} ETH)`;
}

popUpButton.addEventListener("click", handleRecipt);










