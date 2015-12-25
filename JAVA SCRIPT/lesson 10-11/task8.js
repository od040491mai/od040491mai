/**
 * Created by andrej on 25.12.15.
 */
var arr = ['link', 'menu', 'menu__item', 'menu', 'menu', 'menu', 'menu', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];

function getUniqueClasses (arr) {
    var classesObj = {};
    var classes = [];

    for (var i = 0; i < arr.length; i++){

        if (arr[i] in classesObj){
            classesObj[arr[i]]++;
        }
        else{
            classesObj[arr[i]] = 1;
        };

    };
    console.log(classesObj);

    for (var prop in classesObj){
        classes.push({ className: prop, count: classesObj[prop]});
    };
    console.log(classes);

    classes = classes.sort(function(a,b){return a.count < b.count;});
    classes = classes.map(function(obj){return obj.className;});

    return classes;
};

console.log(getUniqueClasses (arr));