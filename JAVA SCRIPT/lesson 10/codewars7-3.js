/**
 * Created by andrej on 25.12.15.
 */
function descendingOrder(n){
    return parseInt(n.toString().split('').sort(function(a,b){return b-a;}).join(''), 10);
};

console.log (descendingOrder(1254859723));