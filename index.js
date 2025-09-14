console.log("mark")
let moment = require("moment")
function getCurrentDay(){
    console.log(moment().date())
}
function getCurrentMonth(){
    console.log(moment().month())
}
function getCurrentYear(){
    console.log(moment().year())
}
function getDate() {
    console.log(moment().format("YYYY/DD/MM HH:mm:ss"));
}
function getDayofMonth(){
    console.log(moment().isoWeekday())
}
// getDate();
// getCurrentDay()
// getCurrentMonth()
// getCurrentYear()
getDayofMonth()