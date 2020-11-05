let hours = 60;
let wage = 12;

if (hours > 40) {
    let overtime = (hours - 40) * (wage * 1.5);
    let regularPay = (40 * wage);
    let pay = overtime + regularPay;
    console.log(pay);
} else {
    let pay = hours * wage;
    console.log(pay);
}