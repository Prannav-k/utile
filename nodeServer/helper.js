var log4js = require('log4js');
var config = require('./config.json')
var logger = log4js.getLogger('Helper');
logger.setLevel('INFO');



var getLogger = function(moduleName) {
	log4js.loadAppender('file');
	log4js.addAppender(log4js.appenders.file(config.log_filepath), moduleName);
	var logger = log4js.getLogger(moduleName);
	logger.setLevel('INFO');
	return logger;
};


exports.getLogger = getLogger;
