const {exec} = require("child_process")
const depends = require("./depends"); 

const knife = () => {
  console.log("dependencies", depends);
  exec('mkdir data')
  // clone each repo
  depends.forEach(repo => {
    let command = `cd repositories/${repo}; git log --pretty=format:"☕%h🔪%ad🔪%an🔪%s🔪%b" --date="iso" --no-merges --compact-summary > ../../data/${repo}.001.🔪sv`
    console.log(command);
    exec(command, (error, stdout, stderr) => {
      // TODO: handle errors.
      if (error) {
        console.log(error);
      }
    })
  });

}

module.exports = knife;