/**
 * Created by andrej on 25.12.15.
 */
function fibonacci(n) {
    if (n < 1){ return []; }
    else if (n === 1){ return [1]; }
    else if (n === 2){ return [0,1]; }
    else{
        var output = [0,1,1];
        var a = 1 , b = 1;

        for (var i = 1; i < n-2; i++){
            var fib = a + b;
            output.push(fib);
            b = a;
            a = fib;
        };
        return output;
    };
};

console.log(fibonacci(0));
console.log(fibonacci(4));
console.log(fibonacci(8));