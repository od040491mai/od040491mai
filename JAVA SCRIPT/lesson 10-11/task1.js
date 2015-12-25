/**
 * Created by andrej on 25.12.15.
 */
var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

function extractNumbers (obj){
    var numbers = [];

    for(var key in obj){
        if(typeof(obj[key]) === 'number'){
            numbers.push(obj[key]);
        };
    }

    return numbers;
};

var ages = extractNumbers (obj);
console.log(ages);