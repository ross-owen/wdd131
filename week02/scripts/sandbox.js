const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(`Value ${studentReport[i]} is below 30`);
    }
}

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(`Value ${studentReport[i]} is below 30`);
    }
    i++;
}

for (let j = 0; j < studentReport.length; j++) {
    if (studentReport[j] < LIMIT) {
        console.log(`Value ${studentReport[j]} is below 30`);
    }
}

studentReport.forEach(report => {
    if (report < LIMIT) {
        console.log(`Value ${report} is below 30`);
    }
})

const options = { weekday: 'long'};
for (let i = 0; i <= DAYS; i++) {
    console.log(new Intl.DateTimeFormat('en-US', options)
        .format(new Date().setDate(new Date().getDate() + i)));
}
