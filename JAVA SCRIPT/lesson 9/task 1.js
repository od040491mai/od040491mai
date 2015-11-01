/**
 * Created by Андрей on 01.11.2015.
 */
function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    });
}

//alert( sum([1, 2, 3]) ); // 6 (=1+2+3)



function sumArgs() {
    return [].reduce.apply(arguments, [function(a, b){return a + b;}]);
}
