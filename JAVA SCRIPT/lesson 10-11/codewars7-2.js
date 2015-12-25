/**
 * Created by andrej on 25.12.15.
 */
function swap (str){
    var output = '';
    for (var i=0; i < str.length; i++){
        if(str[i] !== str[i].toUpperCase()){
            output += str[i].toUpperCase();
        }
        else{
            output += str[i].toLowerCase();
        };
    }
    return output;
};

console.log(swap ('CodEwArs'));