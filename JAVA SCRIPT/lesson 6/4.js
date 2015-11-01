/**
 * Created by Андрей on 21.10.2015.
 */
function sum(array) {
    return array.reduce(function(sum, current){
            return sum + current;
        }
    );
}