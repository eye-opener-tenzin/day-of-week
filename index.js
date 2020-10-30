// DEFINE YOUR FUNCTION BELOW:
const days = {
    1: 'Monday',
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}
 
function returnDay(snum){
    if(snum < 1 || snum > 7) {
        return null;
    }
    return (days[snum])
}

console.log(returnDay(1));
console.log(returnDay(7));
console.log(returnDay(4));
console.log(returnDay(0));
console.log(returnDay(-45));