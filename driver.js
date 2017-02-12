var event = {};
var context = {
    done: function(err,message){
        return;
    }
};
updateEnv = false;
var lambd = require("./awp.js");
lambd.handler(event, context);
