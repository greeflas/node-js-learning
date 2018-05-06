const os = require('os');
const mem = require('./mem-helper');

console.log('Arch is ' + os.arch());
console.log('CPUs count: ' + os.cpus().length);
console.log('Total mem: ' + mem.getMemHelper(os.totalmem()).toGb() + 'GB');
console.log('Free mem: ' + mem.getMemHelper(os.freemem()).toMb() + 'MB');
console.log('Platform is ' + os.platform());
console.log('OS temp dir is ' + os.tmpdir());
console.log('Current user ');
console.log(os.userInfo()); // uid, gid, username, homedir, shell
console.log(os.EOL); // OS EOL symbols
