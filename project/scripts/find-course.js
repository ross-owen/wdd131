const searchButton = document.querySelector('#search-button');
const postalCodeInput = document.querySelector('#postal-code');
const budgetInput = document.querySelector('#budget');
const skillLevelInput = document.querySelector('#skill-level');
const searchResultsDiv = document.querySelector('#search-results');

searchButton.addEventListener('click', () => {
    searchResultsDiv.innerHTML = '';
    getPostalCodeDetail(postalCodeInput.value);
});

function getPostalCodeDetail(postalCode) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE && this.status === 200) {
            const locations = JSON.parse(this.responseText).details;
            const usLocation = locations.find(l => l.country_code === 'US')
            if (!usLocation) {
                alert('Could not find a USA location');
            } else {
                callGolfApi(usLocation.lat, usLocation.lng);
            }
        }
    });

    xhr.open('GET', `https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/validate?code=${postalCode}`);
    xhr.setRequestHeader('x-rapidapi-key', '6f9865ea24msh2bf6421e368af87p1899c3jsn2be62ac917e3');
    xhr.setRequestHeader('x-rapidapi-host', 'global-zip-codes-with-lat-and-lng.p.rapidapi.com');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:63342');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    
    xhr.send();
}

function callGolfApi(lat, lng) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE && this.status === 200) {
            handleCourseResults(JSON.parse(this.responseText));
        }
    });

    xhr.open('GET', `https://golf-course-finder.p.rapidapi.com/api/golf-clubs/?miles=50&latitude=${lat}&longitude=${lng}`);
    xhr.setRequestHeader('x-rapidapi-key', '6f9865ea24msh2bf6421e368af87p1899c3jsn2be62ac917e3');
    xhr.setRequestHeader('x-rapidapi-host', 'golf-course-finder.p.rapidapi.com');

    xhr.send();
}

function handleCourseResults(results) {
    let filtered = [];
    let budget = parseInt(budgetInput.value);
    if (budget === 0) {
        budget = 20;
    } else if (budget === 125) {
        budget = 500;
    } 
    const includePublic = budget > 100; 
    for (const course of results) {
        if (isOpen(course) && (includePublic || isInBudget(budget, course))) {
            filtered.push(course);
        }
    }
    
    if (filtered.length === 0) {
        let error = document.createElement('h3')
        error.className = 'error';
        error.innerHTML = 'No results found...'
        searchResultsDiv.appendChild(error);
    }
    else {
        let table = document.createElement('table');
        table.innerHTML = `
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Membership</th>
                    <th># of Holes</th>
                    <th>Weekday $</th>
                    <th>Weekend $</th>
                    <th>Twilight $</th>
                </tr>
            </tbody>
        `;
        for (const course of filtered) {
            let row = document.createElement('tr');
            const detail = course.golf_courses[0];
            row.innerHTML = `
                <td>${course.club_name}</td>
                <td>
                    ${course.address}<br>
                    ${course.city}, ${course.state}
                </td>
                <td>
                    ${course.phone}<br>
                    ${course.email_address.toLowerCase()}<br>
                    ${course.website.toLowerCase()}
                </td>
                <td>${course.club_membership}</td>
                <td>${course.number_of_holes}</td>
                <td>$${detail.weekday_price}</td>
                <td>$${detail.weekend_price}</td>
                <td>$${detail.twilight_price}</td>
            `;
            table.appendChild(row);
        }
        searchResultsDiv.appendChild(table);
    }
}

function isInBudget(budget, course) {
    if (course.club_membership !== 'Private' && course.golf_courses) {
        const courseDetail = course.golf_courses[0];

        const twilightPrice = parseInt(courseDetail.twilight_price);
        const weekdayPrice = parseInt(courseDetail.weekday_price);
        const weekendPrice = parseInt(courseDetail.weekend_price);

        if (budget > twilightPrice || budget > weekdayPrice || budget > weekendPrice) {
            return true;
        }
    }
    return false;
}

function isOpen(course) {
    const details = course.golf_courses[0];
    return !!(details && details.guest_policy.toLowerCase() !== 'closed');
    
}
