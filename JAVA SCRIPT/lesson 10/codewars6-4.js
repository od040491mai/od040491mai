/**
 * Created by andrej on 25.12.15.
 */
function count (string) {
    var output = {};
    var letters = string.split('');

    for (var i = 0; i < letters.length; i++){
        if (letters[i] in output){
            output[letters[i]] += 1;
        }
        else {
            output[letters[i]] = 1;
        };
    };
    return output;
}