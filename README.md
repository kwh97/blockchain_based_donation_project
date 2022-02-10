<h1>블록체인 기반 기부 서비스</h1>

<h3>암호 화폐를 이용한 1대1 송금 기반의 투명한 기부 플랫폼</h3><br>
<strong>세종대학교 전자정보통신공학과 2021/2학기 데이터통신설계 8조 프로젝트</strong><br><br><br>

🛠<strong> 사용 툴 및 라이브러리 </strong>🛠   

<img src="https://img.shields.io/badge/VisualStudioCode-32AAFF?style=flat-square&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/Ganache-8B4F1D?style=flat-square&logo=Ganache&logoColor=CD1039"/> <img src="https://img.shields.io/badge/Web3.js-FF8C0A?style=flat-square&logo=web3.js&logoColor=white"/><br>
(Ganache - 가상의 암호화폐(이더리움) 및 계좌번호를 부여하는 프로그램으로 web3.js 와 연동하여 사용) 

<br>

📒<strong> 사용 기술 </strong>📒

<img src="https://img.shields.io/badge/HTML-red?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-blue?style=flat-square&logo=css3&logoColor=로고색"/> <img src="https://img.shields.io/badge/JAVASCRIPT-yellow?style=flat-square&logo=javascript&logoColor=white"/>

<br>


🔗<strong> 사이트 예시 : </strong>  https://kwh97.github.io/blockchain_based_donation_project/ <br><br>
🔗<strong> 참고 오픈소스 : </strong>  https://github.com/kennethhutw/Web3JsPractice <br><br>
📧<strong> Contact : </strong> zzzang0512@naver.com <br><br>
🔖<strong> Blog : </strong> <a href="kwh97.tistory.com">kwh97.tistory.com</a> 




<br><br>

<h2>프로젝트 목적</h2>
<img src="https://user-images.githubusercontent.com/82254874/153393686-02dd93d3-63e1-4d86-9a89-e7a3a4dfa60d.jpg" width="800" height="400">
<br>
<strong>1. 기존에 우려되었던 기부금 횡령 및 비리 문제를 방지</strong><br><br>
<strong>2. 거래내역 및 영수증 조회를 통해 과정의 투명성을 보장</strong><br><br>
<strong>3. 최소한의 정보와 과정으로 누구나 쉽게 기부할 수 있는 낮은 접근성 형성</strong><br><br>

<br><br>

<h2>페이지 구성</h2>
<br>
<h3>1. 상단 메인 페이지</h3>
<img src="https://user-images.githubusercontent.com/82254874/153410829-9d0dce22-6409-4415-8986-5bb59a191f45.jpg" width="800" height="400">
<br><strong>>>기부페이지로 이동 가능한 'GIVE NOW' 메뉴, 클릭 시 해당하는 설명을 확인할 수 있는 나머지 '소개, 서비스, 팀원, CONTACT' 메뉴</strong>
<br><br><br>
<h3>2. INTRO</h3>
<img src="https://user-images.githubusercontent.com/82254874/153410888-aef07cb5-e0bf-437a-8619-a0bcd8f83367.jpg" width="800" height="400">
<img src="https://user-images.githubusercontent.com/82254874/153410930-43586829-853d-404f-a767-8824778f1d16.jpg" width="800" height="400">
<br><strong>>>기존 기부 서비스가 가지고 있는 문제 ----> 문제에 대한 해결책</strong>
<br><br><br>
<h3>3. SERVICE</h3>
<img src="https://user-images.githubusercontent.com/82254874/153410969-c5cb64cd-3437-4d3e-9ca0-b65bde8d36f0.jpg" width="800" height="600">
<br><strong>>>Q&A 방식으로 서비스 및 수익 창출 계획 설명</strong>
<br><br><br>
<h3>4. TEAM & CONTACT</h3>
<img src="https://user-images.githubusercontent.com/82254874/153411022-04967917-cffa-4ab8-ae14-3592e0f34450.jpg" width="800" height="600">
<br><strong>>>팀원 소개 및 CONTACT</strong>
<br><br><br>
<h3>5. 기부페이지</h3>
<img src="https://user-images.githubusercontent.com/82254874/153415073-61ceb8a3-9dfd-4e34-bd88-1370c700f847.jpg" width="800" height="600">
<br><strong>>>기부 대상 선택 및 기부 진행, 영수증 조회
<br><br><br>
  
<h2>기부 방법</h2>
<strong>1. Ganache 실행하여, 가상의 암호화폐 계좌 및 키를 부여받는다.</strong><br><br>
<strong>2. 홈페이지와 Ganache를 연동하여, 계좌 정보를 홈페이지로 가져온 뒤 잔액조회를 통해 계좌 잔액을 확인한다. </strong><br><br>
<strong>3. 기부 대상을 선택하여 기부 진행 뒤, Hash와 영수증 조회를 통해 정상 기부 여부를 확인한다.</strong><br><br>
  
<br><br><br>
<h2>코드 설명</h2>
<strong>index.html , main.css - 홈페이지 구성</strong><br><br>
<strong>donation.html , donation.css - 기부페이지 구성</strong><br><br>
<strong>web3.min.js - web3js에 대해 간단하게 만들어진 라이브러리 파일, web3를 서버에 설치할 필요없이 파일만을 이용</strong><br><br>
<strong>donation.js - 암호화폐 잔액조회, 기부금 송금을 위한 파일(오픈소스 활용)</strong><br><br>
<strong>click.js - 페이지내 다양한 동적 기능을 구현하기 위한 파일(영수증 조회 등)</strong><br><br>

```c
//영수증 팝업창 출력 부분
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

//영수증 내용 출력 부분
const from = document.querySelector("#From");
const amount = document.querySelector("#Amount");
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

```
<img src="https://user-images.githubusercontent.com/82254874/153420267-53bf2278-7d90-4e75-ba54-8c1ef6225587.jpg" width="500" height="400">
  
  


  
  



  








