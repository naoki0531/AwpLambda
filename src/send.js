const aws = require('aws-sdk');
const config = require('config');

const to = [config.to];
const cc = [config.cc];
const from = config.from;
const ses = new aws.SES({
  apiVersion: '2010-12-01',
  region: 'us-west-2',
});


module.exports = (text) => {
  const eParams = {
    Destination: {
      ToAddresses: to,
      CcAddresses: cc,
    },
    Message: {
      Body: {
        Text: {
          Data: text,
          Charset: 'utf-8',
        },
        Html: {
          Data: text,
          Charset: 'utf-8',
        },
      },
      Subject: {
        Data: 'hello lambda',
        Charset: 'utf-8',
      },
    },
    Source: from,
  };

  ses.sendEmail(eParams, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};
