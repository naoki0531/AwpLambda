var event = {
    'filePath': '2017/0321.md'
};
var context = {
    done: function(err,message){
        return;
    }
};
updateEnv = false;
var lambd = require("./index.js");
lambd.handler(event, context);
