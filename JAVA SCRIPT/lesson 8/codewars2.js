/**
 * Created by Андрей on 01.11.2015.
 */
function Calculator(){

    this.calculate = function(str){
        var argArr = str.split(' ');
        var operand_1 = +argArr[0];
        var operand_2 = +argArr[2];
        var operator = argArr[1];

        if(this.operations[operator]){
            return this.operations[operator](operand_1,operand_2);
        }
        else{
            return "I don't know what does it mean. Add this method!";
        };

    };

    this.operations = {
        '+': function(a, b){return a + b;},
    };

    this.addMethod = function(name, func){
        this.operations[name] = func;
    };
};

var powerCalc = new Calculator();

powerCalc.addMethod('*', function(a, b) {
    return a * b;
});