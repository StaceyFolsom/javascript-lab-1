// let hours = 60;
// let wage = 12;

// if (hours > 40) {
//     let overtime = (hours - 40) * (wage * 1.5);
//     let regularPay = (40 * wage);
//     let pay = overtime + regularPay;
//     console.log(pay);
// } else {
//     let pay = hours * wage;
//     console.log(pay);
// }




let hours = 50;
let wage = 10;
let savings = "";
let weeks = 1;

while (savings < 1000000) {
    weeks++;
if (hours > 40) {
    let overtime = (hours - 40) * (wage * 1.5);
    let regularPay = (40 * wage);
    let pay = overtime + regularPay;
    let savings =+ weeks * pay;
    // console.log(pay);
    // console.log(weeks);
    console.log(savings);
} else {
    let pay = hours * wage;
    let savings =+ weeks * pay;
    // console.log(pay);
    // console.log(weeks);
    console.log(savings);
}
}