/**
 * Created by Андрей on 01.11.2015.
 */
function work(a, b) {
    console.log( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {
    return function(){
        var args = [].slice.call(arguments);
        log.push( args );
        return f.apply(this, arguments);
    };
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
