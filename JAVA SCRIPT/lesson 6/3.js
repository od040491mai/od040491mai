/**
 * Created by Андрей on 21.10.2015.
 */
var arr = [1, 2, 3, 4, 5];

arr.sort( function(){
        return Math.random() - 0.5;
    }
);


console.log( arr );
