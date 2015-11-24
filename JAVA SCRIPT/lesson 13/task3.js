function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    function onReady() {
        console.log( 'Кофе готов!' );
    }

    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };

    this.run = function() {
        setTimeout(function() {
            onReady();
        }, getTimeToBoil());
    };

}