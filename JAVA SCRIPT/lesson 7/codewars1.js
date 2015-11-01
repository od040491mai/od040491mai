/**
 * Created by Андрей on 01.11.2015.
 */
var callbacks = [];

function createFunctions(n) {

    for (var i=0; i<n; i++) {
        callbacks.push(
            (function(j){
                return function(){return j;};
            })(i)
        );
    }

    return callbacks;
}

createFunctions(328);
//console.log(callbacks);
console.log(callbacks[256]());
