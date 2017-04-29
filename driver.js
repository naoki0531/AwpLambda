let event = {
  Records: [{Sns: {Message: {}}}]
};
let context = {
  done: function (err, message) {
    return;
  }
};
updateEnv = false;
const lambd = require('./index.js');
const fs = require('fs');

// set test json data name
let jsonName = './event/masterPush.json';
if (process.argv[2] !== undefined) {
  jsonName = './event/' + process.argv[2];
}

fs.readFile(jsonName, 'utf8', (err, data) => {
  event.Records[0].Sns.Message = data;
  lambd.handler(event, context);
})

