/**
 * Created by andrej on 25.12.15.
 */
function reverseIt(data){
    if(typeof(data) === 'string'){
        return data.split('').reverse().join('');
    }
    else if (typeof(data) === 'number'){
        return +data.toString().split('').reverse().join('');
    };
    return data;
}