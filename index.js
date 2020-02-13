var speedTest = require('speedtest-net');
var config = require('./config.json');
var fs = require('fs');
var moment = require('moment');
var log_file = () => config.outdir + '/' + 'log-' + moment().format('DD-MM-YYYY') + '.csv';
var check_log_file = () => {
    if(!fs.existsSync(log_file())){
        fs.writeFileSync(log_file(), "Time,Download,Upload");
    }
}

var log = (data) => {
    console.log(data.speeds.download, data.speeds.upload)
    check_log_file();
    fs.appendFileSync(log_file(),"\r\n" + moment().format('hh:mm A') + "," + data.speeds.download + "," + data.speeds.upload);
    if(config.duration && config.duration > 0)
        setTimeout(speed_check, config.duration);
};

var error = (error) => {
    console.log(error);
    if(config.duration && config.duration > 0)
        setTimeout(speed_check, config.duration);
}

var speed_check = () => {
    speedTest().on('data', log).on('error', error);
}

speed_check();