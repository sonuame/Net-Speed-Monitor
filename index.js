const speedTest = require('speedtest-net');
const config = require('./config.json');
const fs = require('fs');
const moment = require('moment');
const mssql = require('mssql');

let log_file = () => config.outdir + '/' + 'log-' + moment().format('DD-MM-YYYY') + '.csv';

let check_log_file = () => {
    if(!fs.existsSync(log_file())){
        fs.writeFileSync(log_file(), "Time,Download,Upload");
    }
}

let log_to_file = async (data) => {
    if(config.log_file){
        check_log_file();
        fs.appendFileSync(log_file(),"\r\n" + moment().format('hh:mm A') + "," + data.speeds.download + "," + data.speeds.upload);
    }
}

let log_to_db = async (data) => {
    if(config.db_log){
        
    }
}

let log = async (data) => {
    
    await log_to_file(data);
    await log_to_db(data);

    if(config.duration && config.duration > 0)
        setTimeout(speed_check, config.duration);
};

let error = (error) => {
    console.log(error);
    if(config.duration && config.duration > 0)
        setTimeout(speed_check, config.duration);
}

let speed_check = () => speedTest().on('data', log).on('error', error);
speed_check();