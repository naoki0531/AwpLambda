var aws = require('aws-sdk');
var ses = new aws.SES({
    apiVersion: '2010-12-01',
    region: 'us-west-2'
});
 
var to = [''];
var from = '';


module.exports = function(event, context, text) {
    console.log("Incoming: ", event);

    var eParams = {
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
                   Charset : 'utf-8'
               }
            },
            Subject: {
                Data: 'hello lambda',
                Charset: 'utf-8'
            }
        },
        Source: from
    };
 
    console.log('===SENDING EMAIL===');
    var email = ses.sendEmail(eParams, function(err, data){
        if(err){
            console.log("===EMAIL ERR===");
            console.log(err);
            context.fail(new Error('mail error occured'));
             
        } else {
            console.log("===EMAIL SENT===");
            console.log(data);
            context.succeed('SUCCESS');
        }
    });
    console.log("EMAIL CODE END");
};
