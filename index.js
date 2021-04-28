// Code your solution in this file!
const returnFirstTwoDrivers = (driverArray) =>  driverArray.slice(0,2)


const returnLastTwoDrivers = (driverArray) => {
    return driverArray.slice(-2)
}


const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplyBy) => {
    return function(fare) {
        return fare * multiplyBy;
    }
}

const fareDoubler = (fare) => { 
return createFareMultiplier(2)(fare);
}

const fareTripler= (fare) => { 
return createFareMultiplier(3)(fare);
}   

const selectDifferentDrivers = (driverArray, cb) => {
    return cb(driverArray);
}
