// =========================
// 질문 데이터
// =========================

const questions = [
{
    question: "용돈 5만원이 생겼다!",
    a: "갖고 싶었던 물건을 바로 산다",
    b: "통장에 넣어둔다",
    resultA: "용돈증발 공원",
    resultB: "흰둥이 산책 공원"
},
{
    question: "친구들이 갑자기 놀자고 한다.",
    a: "무조건 나간다",
    b: "집에서 쉰다",
    resultA: "집가기싫은 공원",
    resultB: "숙제는내일할게 공원"
},
{
    question: "선생님이 하지 말라고 한 일이 있다.",
    a: "궁금해서 해본다",
    b: "안 한다",
    resultA: "엄마한테혼나는 공원",
    resultB: "흰둥이 산책 공원"
},
{
    question: "SNS 알고리즘에 가장 많이 뜨는 것은?",
    a: "먹방, 맛집, 간식",
    b: "운동, 자기관리",
    resultA: "떡볶이냄새나는 공원",
    resultB: "초콜릿 복근의 돌고래 공원"
},
{
    question: "처음 보는 사람들과 있는 자리다.",
    a: "먼저 말을 건다",
    b: "조용히 있는다",
    resultA: "라면 나왔어요 공원",
    resultB: "초코비 공원"
},
{
    question: "길에서 이상한 벌레를 발견했다.",
    a: "가까이 가서 관찰한다",
    b: "멀리서 본다",
    resultA: "대왕쥐며느리 공원",
    resultB: "흰둥이 산책 공원"
},
{
    question: "친구와 게임을 한다.",
    a: "무조건 이기고 싶다",
    b: "재밌으면 된다",
    resultA: "팔 꺾어 삼각조르기 공원",
    resultB: "초코비 공원"
},
{
    question: "누군가 계산하려고 한다.",
    a: "제가 낼게요!",
    b: "감사히 얻어먹는다",
    resultA: "오늘은 제가 내겠습니다 아닙니다 김 사장님 오늘은 제가 낼게요 공원",
    resultB: "용돈증발 공원"
},
{
    question: "주말이 생겼다.",
    a: "새로운 곳에 간다",
    b: "늘 가던 곳에 간다",
    resultA: "유치원 탈출 공원",
    resultB: "흰둥이 산책 공원"
},
{
    question: "푹신한 인형을 보면?",
    a: "만져본다",
    b: "그냥 지나간다",
    resultA: "엉덩이탐험대 공원",
    resultB: "팔 꺾어 삼각조르기 공원"
},
{
    question: "거울을 봤는데 오늘 좀 괜찮다.",
    a: "사진부터 찍는다",
    b: "별 생각 없다",
    resultA: "말엉덩이 공원",
    resultB: "초코비 공원"
},
{
    question: "해야 할 숙제가 있다.",
    a: "지금 한다",
    b: "내일의 나를 믿는다",
    resultA: "흰둥이 산책 공원",
    resultB: "숙제는내일할게 공원"
},
{
    question: "친구들이 말한다. '너 없으면 재미없어.'",
    a: "자주 듣는다",
    b: "가끔 듣는다",
    resultA: "집가기싫은 공원",
    resultB: "초코비 공원"
},
{
    question: "운동할 시간이 생겼다.",
    a: "몸을 움직인다",
    b: "침대에 눕는다",
    resultA: "초콜릿 복근의 돌고래 공원",
    resultB: "숙제는내일할게 공원"
},
{
    question: "당신에게 더 중요한 것은?",
    a: "결과보다 경험",
    b: "경험보다 안정",
    resultA: "유치원 탈출 공원",
    resultB: "흰둥이 산책 공원"
}
];

// =========================
// 결과 데이터
// =========================

const results = {

"말엉덩이 공원":
"섹시하고 주변에 이성들이 많이 꼬이는 유혹적인 사람.",

"라면 나왔어요 공원":
"당돌하고 목소리가 크며 사교적이고 당찬 사람.",

"대왕쥐며느리 공원":
"호기심이 많으며 크고 단단한 외강내유 스타일인 사람.",

"팔 꺾어 삼각조르기 공원":
"승부욕이 강하며 늦은 밤 골목에서 급습 당해도 두 발로 집으로 올라올 사람.",

"초콜릿 복근의 돌고래 공원":
"운동을 평소에 많이 하며 복식호흡이 좋아 돌고래의 주파수처럼 유리잔을 깨버릴 수 있는 사람.",

"오늘은 제가 내겠습니다 아닙니다 김 사장님 오늘은 제가 낼게요 공원":
"배려심이 많으며 사회생활을 잘하고 마음에도 없는 말을 할 수 있는 사람.",

"엄마한테혼나는 공원":
"모험적이며 혼날 것을 알고도 하는 사람이라 다음번에도 혼날 사람.",

"숙제는내일할게 공원":
"느긋하며 하루살이와 다르게 내일의 내가 살아있다는 것을 믿고 내일의 나는 무엇이든 할 수 있는 슈퍼맨이라고 착각할 사람.",

"떡볶이냄새나는 공원":
"인스타 알고리즘에 엽떡과 마라탕이 가득하며 도파민에 절여져 있는 사람.",

"용돈증발 공원":
"돈이 나가야 들어오는 것을 알고 있으며 항시 지갑에 돈은 5만원 이하인 사람. 어른이 되어서도 자신이 돈을 많이 쓸까 봐 걱정하면서 취미생활에 돈을 쓰는 사람.",

"집가기싫은 공원":
"외향적이며 이 사람과 한번 놀고 집에 가면 진이 빠진다. 감당할 수 없는 텐션을 가진 사람.",

"엉덩이탐험대 공원":
"모험적이며 엉덩이를 좋아하고 말랑한 것을 좋아하는 사람.",

"초코비 공원":
"작은 행복에도 만족하며 초코비 하나만 있어도 행복할 수 있는 순수한 사람.",

"흰둥이 산책 공원":
"귀차니즘을 이기고 밖을 나와서 흰둥이와 산책을 완수함. 무엇이든지 해낼 수 있는 사람.",

"유치원 탈출 공원":
"도전적이며 결과 중심이 아니라 경험 중심으로 모든 것을 시작해보는 사람."
};

// =========================
// DOM
// =========================

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const loadingScreen = document.getElementById("loadingScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");

const questionTitle = document.getElementById("questionTitle");
const currentQuestion = document.getElementById("currentQuestion");
const totalQuestion = document.getElementById("totalQuestion");
const progressFill = document.getElementById("progressFill");

const parkName = document.getElementById("parkName");
const parkDescription = document.getElementById("parkDescription");

const restartBtn = document.getElementById("restartBtn");
const shareBtn = document.getElementById("shareBtn");

const savedResult = document.getElementById("savedResult");

// =========================
// 상태
// =========================

let current = 0;
let scores = {};

// =========================
// 최근 결과 불러오기
// =========================

const lastResult = localStorage.getItem("parkResult");

if(lastResult){
    savedResult.textContent = lastResult;
}

// =========================
// 화면 변경
// =========================

function showScreen(screen){

    document
        .querySelectorAll(".screen")
        .forEach(s => s.classList.remove("active"));

    screen.classList.add("active");
}

// =========================
// 질문 표시
// =========================

function renderQuestion(){

    const q = questions[current];

    questionTitle.textContent = q.question;

    answerA.textContent = q.a;
    answerB.textContent = q.b;

    currentQuestion.textContent = current + 1;

    totalQuestion.textContent = questions.length;

    const percent =
        ((current) / questions.length) * 100;

    progressFill.style.width = percent + "%";
}

// =========================
// 점수
// =========================

function addScore(park){

    if(!scores[park]){
        scores[park] = 0;
    }

    scores[park]++;
}

// =========================
// 답변
// =========================

function choose(type){

    const q = questions[current];

    if(type === "A"){
        addScore(q.resultA);
    }else{
        addScore(q.resultB);
    }

    current++;

    if(current >= questions.length){

        showScreen(loadingScreen);

        setTimeout(showResult, 2500);

        return;
    }

    renderQuestion();
}

// =========================
// 결과 계산
// =========================

function showResult(){

    let winner = "";
    let max = -1;

    for(let park in scores){

        if(scores[park] > max){

            max = scores[park];
            winner = park;
        }
    }

    parkName.textContent = winner;
    parkDescription.textContent = results[winner];

    localStorage.setItem(
        "parkResult",
        `최근 결과 : ${winner}`
    );

    savedResult.textContent =
        `최근 결과 : ${winner}`;

    showScreen(resultScreen);
}

// =========================
// 공유
// =========================

shareBtn.addEventListener("click", () => {

    const text =
`나는 "${parkName.textContent}" 나왔어 😂
너도 해봐!

당신의 공원은?`;

    if(navigator.share){

        navigator.share({
            title:"당신의 공원은?",
            text:text
        });

    }else{

        navigator.clipboard.writeText(text);

        alert("결과가 복사되었어요!");
    }
});

// =========================
// 시작
// =========================

startBtn.addEventListener("click", () => {

    current = 0;
    scores = {};

    showScreen(quizScreen);

    renderQuestion();
});

// =========================
// 다시하기
// =========================

restartBtn.addEventListener("click", () => {

    current = 0;
    scores = {};

    showScreen(startScreen);
});

// =========================
// 답변 버튼
// =========================

answerA.addEventListener("click", () => choose("A"));
answerB.addEventListener("click", () => choose("B"));
