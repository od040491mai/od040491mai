/**
 * Created by andrej on 25.12.15.
 */
function pattern(n){
    var output = "";
    var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    if (n <= 0){
        return '';
    }
    else{
        var i = n;

        while ( i >= 1){
            for (var j = i-1; j > 0; j--){  //spaces befor numbers
                output += ' ';
            };

            for (var k = 1, l = 0; k <= n; k++, l++){  //numbers
                if(l === digits.length){
                    l = 0;
                }
                output += digits[l];
            };

            for (var m = n-1; m > i-1; m--){  //spaces after numbers
                output += ' ';
            };

            output += '\n';
            i--;
        };
    };

    return output.slice(0, -1);
};

console.log(pattern(13));