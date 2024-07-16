const searchBox = document.querySelector("#search-text");
const tipsWrapper = document.querySelector("#tips-wrapper");
const filterButton = document.querySelector("#search-button");

filterButton.addEventListener("click", search);
searchBox.addEventListener("keypress", (e) => {
   if (e.keyCode === 13) {
       filterButton.click();
   } 
});

function search() {
    const searchTerm = searchBox.value?.toLowerCase();
    tipsWrapper.innerHTML = '';
    for (const tip of tipsQAndA) {
        if (searchTerm === ''
            || tip.question.toLowerCase().includes(searchTerm)
            || tip.abbreviation.toLowerCase().includes(searchTerm)
            || answersContain(tip.answers, searchTerm)) {
            addTip(tip);
        }
    }
}4

function answersContain(answers, searchTerm) {
    for (const answer of answers) {
        if (answer.toLowerCase().includes(searchTerm)) {
            return true;
        }
    }
    return false;
}

function addTip(tip) {
    let divTip = document.createElement('div');
    divTip.className = 'tip';
    divTip.innerHTML = `
    <div>
        <p>${tip.question}</p>
        <ul>${getAnswers(tip.answers)}</ul>
    </div>
    `;
    tipsWrapper.appendChild(divTip);
}

function getAnswers(answers) {
    let result = '';
    for (const answer of answers) {
        result += `<li>${answer}</li>`;
    }
    return result;
}

search();
