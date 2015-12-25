/**
 * Created by andrej on 25.12.15.
 */
function duplicates(arr) {
    var output = [];

    for(var i = 0; i < arr.length; i++){
        if( arr.filter(function(num){return num === arr[i];}).length > 1 ){
            if(output.indexOf(arr[i]) === -1){
                output.push(arr[i]);
            }
        }
    };
    return output;
};

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']));