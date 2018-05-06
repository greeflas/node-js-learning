const cluster = require('cluster');
const cpus = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running...`);

    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died.`);
    });
} else {
    console.log(`Worker ${process.pid} started...`);

    setTimeout(() => cluster.worker.kill(), 3000);
}
