const getFile = require('./src/getFile');
const convert = require('./src/convert');
const send = require('./src/send');

exports.handler = (event, context) => {
    getFile(event, context).then(convert).then(send);
};
