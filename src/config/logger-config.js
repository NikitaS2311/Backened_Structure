const {createLogger, format, transports} = require('winston');
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({level, message,  timestamp})=>{
    return `${timestamp} : ${level} :  ${message}`;   

});

 const logger = createLogger({
  format: combine(
    
    timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    customFormat
  ),
   transports: [new transports.Console(), // this make the log display on console
    new transports.File({filename:'combines.log'}) // this will not only print on console but will save them in combines.log file
   ],
});
module.exports = logger;