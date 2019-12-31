var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();
var ond = 1;

if (ond == 1) {
    jeu.on('start', function(message) {
        console.log(message);
        var ond = ond - 1;
    });
} else if (ond == 0) {
    jeu.on('gameover', function(message) {
        console.log(message);
    });
}



jeu.emit('gameover', 'Vous avez perdu !');
jeu.emit('start', 'Que la game commence !');