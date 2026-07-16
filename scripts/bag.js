

function showMyBag (event) {
    const bagButton = event.currentTarget;
    const bagStatus = document.querySelector("#bag-status");

    const myBag = [
        {name: "스마트폰", count : 1},
        {name: "지갑", count: 1},
        {name: "airPod", count: 1}
    ]
    console.log("추가 전", myBag);

    myBag.push({
        name: "애플워치",
        count: 1
    })
    console.log("추가 후:", myBag);

    let printText = "What's in my bag?!!\n-----------------\n"

    for (let item of myBag) {
        printText = printText + "- " + item.name + " : " + item.count + "개\n"
    }
    printText = printText + "-----------------------\n"
    printText = printText + "총 물품 종류 : " + myBag.length + "가지"

    bagButton.value = "가방 여는 중...";
    bagButton.disabled = true;

    bagStatus.textContent = "가방을 확인하고 있습니다...";
    bagStatus.classList.add("loading");

    setTimeout(function () {
        alert(printText);
        bagButton.value = "내 가방 보기";
        bagButton.disabled = false;

        bagStatus.textContent = "가방 확인이 완료되었습니다!";
        bagStatus.classList.remove("loading");
        bagStatus.classList.add("complete");
    }, 1000);
}

document.querySelector("#whatsInMyBag").addEventListener('click', showMyBag);
