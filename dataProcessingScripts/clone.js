const fs = require("fs")
const {exec} = require("child_process")
const depends = require("./depends"); 

const clone = () => {
  // read package.json
  // loop through dependencies
  console.log("dependencies", depends)
  exec('mkdir repositories')
  // clone each repo
  depends.forEach(repo => {
    let command = `git clone https://github.com/d3/${repo}.git`
    console.log(command);
    exec(command, {cwd: './repositories'}, (error, stdout, stderr) => {
      // TODO: handle errors.
    })
  });
}

module.exports = clone