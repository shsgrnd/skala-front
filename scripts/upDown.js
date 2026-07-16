

function upDown () {
    const comNum = Math.floor(Math.random() * 50) + 1;
    let count = 0;

    while (true) {
        const input = prompt("1 ~ 50 사이 숫자 중 하나를 적으시오. 종료를 원하면 0");

        if (input === "0" || input === null) {
            alert("게임 종료");
            break;
        }

        const perNum = Number(input);

        if (!Number.isInteger(perNum) || perNum < 1 || perNum > 50) {
            alert("1~50 사이의 숫자를 입력하세요.");
            continue;
        }
        
        count++;

        if (comNum === perNum) {
            alert(`축하합니다! ${count}번 만에 맞추셨습니다.`);
            break;
        }
        else if (comNum > perNum) {
            alert("UP!");
        }
        else if (comNum < perNum) {
            alert("DOWN!");
        }
        else {
            alert("잘못 입력함. 재시도 필요")
        }
    }
}

document.querySelector("#upDown").addEventListener("click", upDown)