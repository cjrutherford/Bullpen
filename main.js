const Bull = require('bull');

console.log('Starting Bull Queue');
const firstQueue = new Bull('HelloQueue', 'redis://192.168.1.49:6379');

try {
    firstQueue.add('primaryTask', {
        foo: 'bar', bar: 'baz'
    }, {
        repeat: {
            cron: '5 * * * * *'
        }
    });


    firstQueue.add('secondTask', {
        foo: 'bar', bar: 'baz'
    }, { repeat: { cron: '15 * * * * *' } });

    firstQueue.on('active', () => console.log('first queue Active.'));
    firstQueue.on('process', () => console.log('first queue added a task.'));
    firstQueue.on('complete', () => console.log('first queue completed a task.' + Date.now()));

    console.log("bull queues created.");
} catch (e) {
    console.error(e);
}

module.exports = {
    firstQueue
};