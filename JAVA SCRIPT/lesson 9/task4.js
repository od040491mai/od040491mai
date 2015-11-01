/**
 * Created by Андрей on 01.11.2015.
 */
function f(x) {
    return Math.random() * x;
}

function makeCaching(f) {
    var cash = {};

    return function(x){
        if (x in cash){
            return cash[x];
        }
        else{
            cash[x] = f.call(this, x);
            return cash[x];
        };

    };
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a == b );

b = f(2);
console.log( a == b );
