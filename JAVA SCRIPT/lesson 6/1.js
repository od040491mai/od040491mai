/**
 * Created by Андрей on 21.10.2015.
 */
function getMissingElement(superImportantArray){
    var fullArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for(var i = 0; i < fullArray.length; i++){
        if(superImportantArray.indexOf(fullArray[i]) < 0){
            return fullArray[i];
        };
    };

}


getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] )
