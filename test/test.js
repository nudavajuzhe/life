const list = [1, 2, 3, 4, 5]

list.forEach(function(element) {
    console.log(element)
})



//test
const test = {
    name: 'Dima',
    status: false,
    age: 20,
    getYearOfBirth: function(printYear) {
        return printYear(2021 - test.age)
    }
}


const printCoolYear = function(year) {
    return 'Cool: ' + year
}


const printCoolYearG = function(printFunc) {
    return printFunc(123) + ' G'
}

console.log(printCoolYearG(printCoolYear))



//const printYear = test.getYearOfBirth()


//console.log(printYear)