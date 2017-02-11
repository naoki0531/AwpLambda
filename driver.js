var event = {};
var context = {
    done: function(err,message){
        return;
    }
};
// env = 'local'!;
var lambd = require("./awp.js");
lambd.handler(event, context);
