
var Ghost = function() {
    var colors = ["white", "yellow", "purple", "red"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
};

var test1 = new Ghost();
var test2 = new Ghost();

console.log(test1.color);
console.log(test2.color);