

function grade_avg () {
    const subjects = ["HTML", "CSS", "JavaScript"];
    let total = 0;

    for (let i = 0; i < subjects.length; i++) {
        let score;
        while (true) {
            const input = prompt(`${subjects[i]} 점수를 입력하세요`);
            if (input === null) {
                alert("계산을 취소합니다")
                return;
            }
            score = Number(input);

            if (input.trim() === "" || !Number.isInteger(score) || score < 0 || score > 100) {
                alert("다시 입력해주세요");
                continue;
            }
            break

        }
        total += score;
    }

    const avg = total / subjects.length;
    let result;

    if (avg >= 60) {
        result = "합격";
    }
    else {
        result = "불합격"
    }
    alert(`총점 : ${total}, 평균 : ${avg}, 결과 : ${result} 입니다!`)
}
document.querySelector("#grade").addEventListener("click", grade_avg)