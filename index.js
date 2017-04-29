const getFile = require('./src/getFile');
const convert = require('./src/convert');
const send = require('./src/send');
const check = require('./src/check');

exports.handler = (event, context) => {
  let filePath = check(event, context);
  if (filePath !== '') {
    getFile(filePath).then(convert).then(send);
  }
};