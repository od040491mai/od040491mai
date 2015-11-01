/**
 * Created by Андрей on 01.11.2015.
 */
function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
};

function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
};

console.log( applyAll(sum, 1, 2, 3) );