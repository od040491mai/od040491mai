/**
 * Created by andrej on 25.12.15.
 */
function capitalizer(inputString){
    var arrayToCapitalize = inputString.split('');

    arrayToCapitalize[0] = arrayToCapitalize[0].toUpperCase();
    for(var i=1; i<arrayToCapitalize.length; i++){
        if(arrayToCapitalize[i] === ' '){
            arrayToCapitalize[i+1] = arrayToCapitalize[i+1].toUpperCase();
        };
    };

    return arrayToCapitalize.join('');
};

console.log(capitalizer('the quick brown fox'));