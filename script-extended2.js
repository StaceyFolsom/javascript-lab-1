hours = 50;
wage = 10;
weeks = 0;
savings = 0;

while (savings <= 1000000) {
    if (hours > 40) {
        let overtime = (hours - 40) * (wage * 1.5);
        let regularPay = (40 * wage);
        let pay = overtime + regularPay;
        savings =+ weeks * pay;
        weeks++;
    } else {
        let pay = hours * wage;
        savings =+ weeks * pay;
        weeks++;
    }
  }
console.log(weeks);