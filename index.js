const getFile = require('./src/getFile');
const convert = require('./src/convert');
const send = require('./src/send');
const check = require('./src/check');

exports.handler = (event, context) => {
    getFile(check(event, context)).then(convert).then(send);
};
