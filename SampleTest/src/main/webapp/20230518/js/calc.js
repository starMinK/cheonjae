var timerID=null;
var countDown=31; // 10 초동안
function startTimer() {
    document.getElementById("score").innerHTML = 0; // score 초기화
    var clock = document.getElementById("clock");
    countDown = 31; // 10초 동안. 초기화
    if(timerID != null)
        clearTimeout(timerID);
    timeout(clock);
}
function timeout(obj) {
    countDown--;
    obj.innerHTML = countDown;
    if(countDown == 0)
        calc();
    else
        timerID = setTimeout("timeout(clock)", 1000); // 1초 후 timeout() 호출
}
​
function calc() {
    var total = 0;
    var qArray = document.getElementsByClassName("question");
    var aArray = document.getElementsByClassName("answer");
    for(i=0; i<qArray.length; i++) {
        var question = qArray[i].innerHTML;
        var correctAnswer = Math.floor(eval(question));
        var userAnswer = aArray[i].value;
        if(userAnswer=="" || isNaN(userAnswer)) {// 답이 없거나 문자가 입력된 경우
            total += 0;
            qArray[i].style.textDecoration = "line-through";
        }
        else if(parseInt(userAnswer) == correctAnswer) { // 답이 맞는 경우
            total += 1;
            qArray[i].style.textDecoration = "none"; // 혹시 이전에 틀린 문제에 다시 답을 하고 채점버튼을 누르는 경우를 위해
        }
        else {// 답이 틀린 경우
            total += 0;
            qArray[i].style.textDecoration = "line-through";
        }
    }
    document.getElementById("score").innerHTML = total;
}
​
function makeExpression() {
    var qArray = document.getElementsByClassName("question");
    var aArray = document.getElementsByClassName("answer");
    for(i=0; i<qArray.length; i++) {
        var number1 = Math.floor(Math.random()*20)+1;
        var number2 = Math.floor(Math.random()*20)+1; // 결코 0이 될 수 없음
        var op = Math.floor(Math.random()*4);
        var operator="+"; // 디폴트
        switch(op) {
            case 0 : operator = "+"; break;
            case 1 : operator = "-"; break;
            case 2 : operator = "*"; break;
            case 3 : operator = "/"; break;
        }
        qArray[i].innerHTML = number1 + operator + number2;
        qArray[i].style.textDecoration = "none";

        aArray[i].value=""; // 답 입력 난 지우기
    }
}