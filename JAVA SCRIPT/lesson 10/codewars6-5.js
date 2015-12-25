/**
 * Created by andrej on 25.12.15.
 */
var typer = (function(thing) {
    return {
        isNumber: function(thing){return (Object.prototype.toString.call( thing ) === '[object Number]' && isFinite(thing));},
        isString: function(thing){return (Object.prototype.toString.call( thing ) === '[object String]');},
        isArray: function(thing){return (Array.isArray(thing));},
        isFunction: function(thing){return (Object.prototype.toString.call( thing ) === '[object Function]');},
        isDate: function(thing){return ({}.toString.call( thing ) === '[object Date]');},
        isRegExp: function(thing){return ({}.toString.call( thing ) === '[object RegExp]');},
        isBoolean: function(thing){return (Object.prototype.toString.call( thing ) === '[object Boolean]');},
        isError: function(thing){return ({}.toString.call( thing ) === '[object Error]');},
        isNull: function(thing){return (thing === null);},
        isUndefined: function(thing){return (Object.prototype.toString.call( thing ) === '[object Undefined]');}
    };
}(null));

