const fs = require('fs');
const logFile = './logs/app.log';

exports.log = message => {
    fs.appendFile(
        logFile,
        `[${getDate()}] ${message}\r\n`,
        err => {if (err) throw err}
    );
};

exports.clearLog = () => {
    fs.unlink(logFile, err => {
        if (err) throw err;

        console.log('Log is cleared.');
    });
};

function getDate() {
    const today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;

    if (date < 10) {
        date = '0' + date;
    }

    if (month < 10) {
        month = '0' + month;
    }

    return `${date}-${month}-${today.getFullYear()}`;
}
