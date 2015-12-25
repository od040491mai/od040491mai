/**
 * Created by andrej on 25.12.15.
 */

function solution(number){
    var output = [];

    for (var i = 0; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            output.push(i);
        };
    };
    return output.reduce(function(a, b){return a + b;});
}