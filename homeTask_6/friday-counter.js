const dayOfWeek = 5;
const definedDate = 13;
const numberDaysInWeek = 7;
const dayMilliseconds = 24*60*60*1000;

let fromDate = new Date(Date.UTC(2000, 0, 1));
let todayDate = new Date();

let fridaysCounter = 0;

let fromDateDay = fromDate.getUTCDay();
let days = dayOfWeek - fromDateDay;
if(days < 0) days += numberDaysInWeek;
fromDate.setTime(+fromDate + days*dayMilliseconds);

while(+fromDate <= +todayDate) {
    if(fromDate.getDate() === definedDate) fridaysCounter++;
    fromDate.setTime(+fromDate + numberDaysInWeek*dayMilliseconds);
}

console.log(`Number of Fridays 13: ${fridaysCounter}`);