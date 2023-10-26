function cleverLily(input) {

    let lilisAge = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;
    let evenDaysCounter = 0;

    for (let currentBday = 1; currentBday <= lilisAge; currentBday++) {

        if (currentBday % 2 === 0) {
            evenDaysCounter += 10;
            savedMoney += evenDaysCounter;
            stolenMoney++;
        } else {
            toysCounter++;
        }

    }

    let totalMoneyFromToys = toysCounter * toyPrice;
    let totalSavedMoney = totalMoneyFromToys + savedMoney - stolenMoney;

    if (totalSavedMoney >=  washingMashinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMashinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMashinePrice - totalSavedMoney).toFixed(2)}`);
    }

}

cleverLily(["10", "170.00", "6"]);