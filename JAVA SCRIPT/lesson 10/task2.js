/**
 * Created by andrej on 25.12.15.
 */
function getMaxNumber(arr){
    return Math.max.apply(null,arr);
};


console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15
