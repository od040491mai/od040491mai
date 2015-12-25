function sum (a, b){
    if(!isNaN(b)){return a + b;}
    else{
        return function (b){return a + b;};
    };
};


console.log(sum(3,3));
//or
console.log(sum(4)(3));