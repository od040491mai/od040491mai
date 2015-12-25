/**
 * Created by andrej on 25.12.15.
 */
function isPangram(string){
    var stringLetters = string.toLowerCase().split('');
    var letters = "abcdefghijklmnopqrstuvwxyz".split('');
    for (var i =0; i < letters.length; i++){
        if (stringLetters.indexOf(letters[i]) < 0){
            return false;
        };

    };
    return true;
}


var string =  "The quick brown fox jumps over the lazy dog";
console.log(isPangram(string));