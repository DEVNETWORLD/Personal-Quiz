var readlineSync = require("readline-sync");

score = 0;
var userName = readlineSync.question("whats your name? ");
console.log("welcome to Quizdad " + userName + " lets see how well you know DEV");

console.log("Choose the right answer from the given options by entering the option number");
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("you are right congo!!!");
    score++;
  }
  else {
    console.log("you are wrong the correct answer is " + answer);
  }
  console.log("current score: " + score);
  if (score === 9) {
    console.log("Congratulations " + userName + " you know DEV very well.");
  }
}
const quizList = [{

  question: "1: Where do I live?\na: Mumbai \nb: Delhi \nc: Kolkata \nd: Banglore \n",
  answer: "a"
},

{
  question: "2: Who is my best friend?\na: Aditya \nb: Shubham \nc: Abhishek \nd: " + userName + "\n",
  answer: "d"
},

{
  question: "3: What is my age?\na:18 \nb:20 \nc:21 \nd:22\n",
  answer: "c"
},

{
  question: "4: Which sport am I most interested in?\na:Cricket \nb:Football \nc:Volleyball\nd:Basketball\n",
  answer: "b"
},
{
  question: "5: Who is my favourite footballer?\na:Messi \nb:Neymar \nc:Cr Ronaldo\nd:Haaland\n",
  answer: "c"
},

{
  question: "6: Which school did I attend?\na:Podar International \nb:Lourds \nc:H.M Muttha\nd:Meridian\n",
  answer: "a"
},

{
  question: "7: Which alcohol I had for the first time in my life?\na:White Russian \nb:Vodka with Orange juice \nc:Rum and Coke\nd:Whisky\n",
  answer: "b"
},

{
  question: "8: In which College do I study?(short form)\na:BVP \nb:CHM\nc:MPSTME\nd:MIT WPU\n",
  answer: "a"
},

{
  question: "9: What is my favourite dish?\na:ButterChicken \nb:Paani-Puri\nc:Naachos and Cheese\nd:Fish Fry,\n",
  answer: "a"
},

]


for (var i = 0; i < quizList.length; i++) {
  var currentQuestion = quizList[i];
  play(currentQuestion.question, currentQuestion.answer);
}




