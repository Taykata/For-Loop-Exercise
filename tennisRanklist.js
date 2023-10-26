function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let winPoints = 0;
    let wins = 0;

    for (let index = 2; index < input.length; index++) {

        let currentStage = input[index];

        switch (currentStage) {
            case "W": winPoints += 2000; wins++; break;
            case "F": winPoints += 1200; break;
            case "SF": winPoints += 720; break;
        }

    }
    let avgPoints = winPoints / tournaments;

    console.log(`Final points: ${startingPoints + winPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${(wins / tournaments * 100).toFixed(2)}%`);

}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);