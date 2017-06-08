const event = {
  Records: [{ Sns: { Message: {} } }],
};
const context = {
  done: (err, message) => {},
};

updateEnv = false;
const lambda = require('./index.js');
const fs = require('fs');

// set test json data name
let jsonName = process.argv[2];
if (typeof jsonName === 'undefined') {
  jsonName = 'masterPush.json';
}

fs.readFile(`./event/${jsonName}`, 'utf8', (err, data) => {
  event.Records[0].Sns.Message = data;
  lambda.handler(event, context);
});
