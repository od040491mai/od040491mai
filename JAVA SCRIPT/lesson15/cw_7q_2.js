/**
 * Created by pastushenko-av on 25.11.2015.
 */
var Singleton = function(){
    if(Singleton.__instance){
        return Singleton.__instance;
    }

    Singleton.__instance = this;
};

//return Singleton.ins = Singleton.ins ? Singleton.ins : this;

var obj1 = new Singleton();
var obj2 = new Singleton();

console.log(obj1 === obj2);
obj1.test = 1;

console.log(obj2.test);