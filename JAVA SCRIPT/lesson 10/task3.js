/**
 * Created by andrej on 25.12.15.
 */
function abcSorter(startString){
    return startString.split('').sort().join('');
}

console.log(abcSorter('webmaster'));