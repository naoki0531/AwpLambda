const getFile = require('./src/getfile.js');
const convert = require('./src/convert.js');
const send = require('./src/send.js');

exports.handler = function(event, context){
    getFile(event, context).then(convert).then(send);
};
