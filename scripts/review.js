const queryParams = new URLSearchParams(window.location.search);
const reviewReceived = queryParams.get('product-name')
    && queryParams.get('overall-rating')
    && queryParams.get('install-date');

let reviewCount = localStorage.getItem('reviewCount') ?? 0;

if (reviewReceived) {
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
}

document.querySelector('#times-reviewed').innerHTML = reviewCount;
