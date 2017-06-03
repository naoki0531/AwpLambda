// git install
require('lambda-git')({
  updateEnv: typeof updateEnv === 'undefined' ? true : updateEnv,
});

// git setting
const config = require('config');

const id = config.id;
const pass = config.pass;
const repository = config.repository;
const repositoryUrl = `https://${id}:${pass}@${repository}`;
const localDir = '/tmp/awp/';

const fs = require('fs');
const simpleGit = require('simple-git');

module.exports = (filePath) => {
  const date = new Date();
  const cloneDir = `${localDir}${date.getTime()}/`;

  return new Promise((resolve) => {
    simpleGit().clone(repositoryUrl, cloneDir, '', () => {
      fs.readFile(cloneDir + filePath, 'utf-8', (err, data) => {
        resolve(data);
      });
    });
  });
};
