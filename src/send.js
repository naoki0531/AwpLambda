const aws = require('aws-sdk');
const ses = new aws.SES({
    apiVersion: '2010-12-01',
    region: 'us-west-2'
});

const config = require('config');
const to = [config.to];
const from = config.from;

module.exports = function(text, context, event) {
    const eParams = {
        Destination: {
            ToAddresses: to
        },
        Message: {
            Body: {
                Text: {
                    Data: text,
                    Charset: 'utf-8'
                },
                Html: {
                    Data: text,
                    Charset: 'utf-8'
                }
            },
            Subject: {
                Data: 'hello lambda',
                Charset: 'utf-8'
            }
        },
        Source: from
    };

    const email = ses.sendEmail(eParams, function(err, data) {
        if (err) {
            console.log(err);

        } else {
            console.log(data);
        }
    });
};