// Code your solution here
/* You'll be writing three functions:

* findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. 
The function should be case insensitive.

* fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, 
and returns all drivers whose names begin with the provided letters.

* matchName - This function takes an array of driver objects and a string as arguments. 
Each driver object has two properties: name and hometown. 
The function should return each element whose name property matches the provided string argument. */


/* findMatching()
      1) returns all drivers that match the passed in name
      2) returns matching drivers if case does not match but letters do
      3) returns an empty array if there is no match */

 const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']      

function findMatching(arrayOfDriversNames, name){
        let newArray = [];
    arrayOfDriversNames.filter( (driver) => {
        if( driver === name){
            newArray.push(driver);
        }else if (driver.charAt(0).toUpperCase() + driver.slice(1) === name || driver.charAt(0).toLowerCase() + driver.slice(1) === name ){
            newArray.push(driver);
        }else{
            return newArray;
        }
    })  
    return newArray;
}

findMatching(drivers, 'Bobby');

/* fuzzyMatch()
      4) returns a driver if beginning provided letters match
      5) does not return drivers if only middle or ending letters match
      6) does not return drivers if only middle or ending letters match */

function fuzzyMatch(arrayOfDriversNames, string){
    let newArray = [];
    arrayOfDriversNames.filter( (driver) => {
        if (driver.charAt(0) === string.charAt(0)){
            newArray.push(driver);
        }else if (driver.substring(0,2) === string.substring(0,2)){
            newArray.push(driver);
        }
    } )
    return newArray;
}      

/* matchName()
      7) accesses the data structure to check if name matches */

function matchName(driverObject, string){
    let newArray = [];
    driverObject.filter((driver) => {
        if(driver.name === string){
            newArray.push(driver);
        }
    })
    return newArray;
}      
