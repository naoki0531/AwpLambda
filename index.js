const getFile = require('./src/getFile');
const convert = require('./src/convert');
const send = require('./src/send');

exports.handler = (event, context) => {
    getFile(event.filePath).then(convert).then(send);
};
