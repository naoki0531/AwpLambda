// git install
require('lambda-git')({updateEnv: updateEnv == undefined ? true : updateEnv});

// git setting
config = require('config');
const id = config.id;
const pass = config.pass;
const repogitory = 'https://' + id + ':' + pass + '@github.com/naoki0531/AwpCms.git';
const localDir = '/tmp/awp/';

var convert = require('./convert.js');
var send = require('./send.js');

exports.handler = function(event, context){
    const fs = require('fs');
    const simpleGit = require('simple-git');
    var date = new Date();
    var cloneDir = localDir + date.getTime() + '/';

    simpleGit().clone(repogitory, cloneDir, '', function(){
        // マークダウンファイルをHTMLへ変換
        fs.readFile(cloneDir + '20170203.txt', 'utf-8', function(err, data){
            send(event, context, convert(data));
        });
    });
};
