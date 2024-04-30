let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

for (let property in statistics) {
    var letterR = property.charAt(0) == 'r';
    var oddValue = statistics[property] % 2 == 1;

    if (letterR || oddValue) {
        console.log(`${property}: ${statistics[property]}`);
    }
}