const getFile = require('./src/getFile');
const convert = require('./src/convert');
const send = require('./src/send');
const check = require('./src/check');

exports.handler = (event, context) => {
  const filePath = check(event, context);
  if (filePath !== '') {
    setTimeout(() => {
      getFile(filePath).then(convert).then(send);
    }, 5000);
  }
};