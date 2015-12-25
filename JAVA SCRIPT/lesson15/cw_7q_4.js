/**
 * Created by pastushenko-av on 25.11.2015.
 */
Array.prototype.reverse = function() {
    for(var i=0, j = this.length-1; i<j; i++, j--){
        var tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
    }
    return this;
};