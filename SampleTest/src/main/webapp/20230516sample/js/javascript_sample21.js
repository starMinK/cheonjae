function randomInt() { // 1~9의 십진 난수 리턴
    return Math.floor(Math.random() * 9) + 1;
}

// 구구단 문제 생성
const ques = randomInt() + "*" + randomInt();
// 사용자로부터 답 입력
const user = prompt(ques + " 값은 얼마입니까?", 0);
const ans = eval(ques);
if (user == null) { // 취소 버튼이 클릭된 경우
    document.write("구구단 연습을 종료합니다");
} else // 구구단 정답 계산
if (ans == user) // 정답과 사용자 입력 비교
    document.write("정답! ");
else
    document.write("아니오! ");

document.write(ques + "=" + "<strong>" + ans + "</strong>입니다<br>");