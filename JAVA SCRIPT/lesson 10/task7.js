/**
 * Created by andrej on 25.12.15.
 */
function suffle(arr) {

    for (var i = 0; i < arr.length; i++){
        var randomI = Math.floor(Math.random() * arr.length);
        var temp = arr[i];

        arr[i] = arr[randomI];
        arr[randomI] = temp;
    };
    return arr;
};

var sortArr = [1,2,3,4,5,6,7,8,9];

console.log(suffle(sortArr));