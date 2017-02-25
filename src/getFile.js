// git install
require('lambda-git')({updateEnv: typeof(updateEnv) === undefined ? true : updateEnv});

// git setting
config = require('config');
const id = config.id;
const pass = config.pass;
const repogitory = config.repogitory;
const repogitoryUrl = 'https://' + id + ':' + pass + '@' + repogitory;
const localDir = '/tmp/awp/';

module.exports = function(event, context){
    const fs = require('fs');
    const simpleGit = require('simple-git');
    var date = new Date();
    var cloneDir = localDir + date.getTime() + '/';

    return new Promise(function(resolve, reject){
        simpleGit().clone(repogitoryUrl, cloneDir, '', function(){
            fs.readFile(cloneDir + '20170203.txt', 'utf-8', function(err, data){
                resolve(data);
            });
        });
    });
};
