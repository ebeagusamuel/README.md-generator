const readline = require("readline");
const fs = require('fs')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Hey there!, you will be prompted for inputs for the contents for your README.md file')

const questions = [
  'What is the title of your project?: \n',
  'Provide information on how to get started: \n',
  'What are the prerequisites needed to run this project?: \n',
  'What are the installation steps: \n',
  'How do you run the test?: \n',
  'How do you deploy the project?: \n',
  'What was used in building the project?: \n',
  'How can one contribute to the project?: \n',
  'Add the authors of the project: \n',
  'Add acknowledgement: \n'
]

const headers = [
  '## Project Title',
  '### Getting Started',
  '#### Prerequisites',
  '#### Installing',
  '#### Running the tests',
  '#### Deployment',
  '#### Built With',
  '#### Contributing',
  '#### Authors',
  '#### Acknowledgements'
]


fs.open('README.md', 'w', function (err, file) {
  if (err) throw err
});

function getUserInput(n = 0) {
  rl.question(questions[n], (ans) => {
    var reply = `${headers[n]}\n\t${ans}\n\n`
    fs.appendFile('README.md', reply, (err) => {
      if(err){
        console.error(error)
      }
    })
      if (n < questions.length - 1) {
        getUserInput(n+1);
      } else {
        rl.close();
      }
  }); 
}

rl.on("close", function() {
  console.log("\ncheck the generated README in this directory!!!");
  process.exit(0);
});

getUserInput()