(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('LOVE'))
        .then(() => engine.shake())
        .then(() => engine.toText('Cheng'))
        .then(() => engine.shake())
        .then(() => engine.toText('From'))
        .then(() => engine.shake())
        .then(() => engine.toText('2011'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
