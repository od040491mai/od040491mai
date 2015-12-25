/**
 * Created by andrej on 25.12.15.
 */
function add() {
    var sum = 0;

    if (arguments){
        for (var i=0; i < arguments.length; i++){
            sum += arguments[i] * (i+1);
        };
    };

    return sum;
};

console.log(add(1,2,3));