/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = function(employeeRecord){
    return {
        firstName: employeeRecord[0],
        familyName: employeeRecord[1],
        title: employeeRecord[2],
        payPerHour: employeeRecord[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(arrOfArrs){
    return arrOfArrs.map(employee => createEmployeeRecord(employee))
}

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })

    return this
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    })

    return this
}

let hoursWorkedOnDate = function(givenDate){

    let timeInRecord = this.timeInEvents.filter(timeInCard => timeInCard.date === givenDate)
    let timeOutRecord = this.timeOutEvents.filter(timeOutCard => timeOutCard.date === givenDate)

    return (timeOutRecord[0].hour - timeInRecord[0].hour) / 100
}


let wagesEarnedOnDate = function(givenDate){

        return hoursWorkedOnDate.call(this, givenDate) * this.payPerHour
}

const findEmployeeByFirstName = function (srcArray, firstName) {
   return srcArray.find(employee => employee.firstName === firstName)
}

const calculatePayroll = function (arrayofEmployees) {
    return arrayofEmployees.reduce(function(total, employee) {
        return total + allWagesFor.call(employee)
    },0)
} 
