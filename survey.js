const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = ['What\'s your name? Nicknames are also acceptable :) ', 'What\'s an activity you like doing? ', 'What do you listen to while doing that? ', 'Which meal is your favourite (eg: dinner, brunch, etc.) ', 'What\'s your favourite thing to eat for that meal? ', 'Which sport is your absolute favourite? ', 'What is your superpower? In a few words, tell us what you are amazing at! '];
let answers = [];

const askQuestions = (index) => {
  return new Promise((resolve) => {
    rl.question(questions[index], (input) => {
      answers.push(input);
      resolve();
    })
  })
}


const ask = async () => {
  for (const index in questions){
    await askQuestions(index);
  }
  rl.close()
  console.log(`Name: ${answers[0]} \nHobby: ${answers[1]} \nMusic: ${answers[2]} \nMeal: ${answers[3]} \nFood: ${answers[4]} \nSport: ${answers[5]} \nSuperPower: ${answers[6]}`);
}

ask()