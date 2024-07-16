function getRandomIndex(topRange) {
    const randomDecimal = Math.random();
    return Math.floor(randomDecimal * topRange);
}

function getTipAbbreviation() {
    return tipsQAndA[getRandomIndex(tipsQAndA.length - 1)].abbreviation;
}

document.querySelector("#thought1").innerHTML = getTipAbbreviation();
document.querySelector("#thought2").innerHTML = getTipAbbreviation();
document.querySelector("#thought3").innerHTML = getTipAbbreviation();
