const getFile = require('./getfile.js');
const convert = require('./convert.js');
const send = require('./send.js');

exports.handler = function(event, context){
    getFile(event, context).then(convert).then(send);
};
