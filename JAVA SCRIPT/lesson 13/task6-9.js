function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

//task 7
function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];
    var foodMax = power/100;

    this.addFood = function(items){
        if( !this._enabled){
            throw new Error ("холодильник выключен");
        }
        else{
            for(var i=0; i < arguments.length; i++){
                if( (food.length +arguments.length) <= foodMax ){
                    food.push(arguments[i]);
                }
                else{
                    throw new Error ("слишком много еды");
                };
            };
        };

    };

    this.getFood = function(){
        return food.slice();
    };

//task 8
    this.filterFood = function(crit){
        return food.filter(crit);
    };

    this.removeFood = function(item){
        if(food.indexOf(item) > -1){
            food.splice(food.indexOf(item), 1)
        };
    };
//task 9
    var parentDisable = this.disable;
    this.disable = function(){
        if( !food.length ){
            parentDisable();
        }
        else{
            throw new Error("Сначала освободи холодильник");
        };
    };

};








var fridge = new Fridge(500);
fridge.enable();


var fridgeFood = fridge.getFood();
console.log( fridgeFood );


fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

fridge.removeFood("нет такой еды");
console.log( fridge.getFood().length );

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

dietItems.forEach(function(item) {
    console.log( item.title );
    fridge.removeFood(item);
});

console.log( fridge.getFood().length );