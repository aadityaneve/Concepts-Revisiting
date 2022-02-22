console.clear();

const EventEmitter = require('events');

const emitter = new EventEmitter();

// 1. Register a listener
emitter.on('messageLogged', function () {
    console.log('Listener Called');
});

// 2. Raise an event
emitter.emit('messageLogged');
