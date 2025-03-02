// we want check for the no of wins that user and computer have so we have two variables;
let userScore=0;
let compScore=0;

// to find which choice you are goimg to make we need the choices.
let choices=document.querySelectorAll(".images");
let msg=document.querySelector(".msg");
let userScoreVal=document.querySelector("#val1");
let compScoreVal=document.querySelector("#val2");

// to generate choice randomly for a computer we use math class to get random values.
const genCompChoice=()=>{
    const options=["rock","paper","scissor"]; // since we direcctly can't generate random values from strings so make it an array.
    const radIdx = Math.floor(Math.random() * 3);  // since we have only 3 index values and this math function will give " 0,1,2 " values only.
    return options[radIdx];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin === true){
        //console.log(`you win.`);
        userScore++;          // this will increment the score value everytime the condition is true.
        userScoreVal.innerText=userScore; // this will give the updated userscore value everytime.
        msg.innerText=`you win. your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
    }
    else{
        //console.log("you lose.");
        compScore++;            // this will increment the score value everytime the condition is true.
        compScoreVal.innerText=compScore;// this will give the updated compscore value everytime.
        msg.innerText=`you lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red";
    }
}

// to play we need both both userchoice and also computerchoice, so
const playGame= (userChoice) => { // checks and determines the winner by comparing both user&comp choices and also update the win Count.
   
    //console.log("user choice :",userChoice); // for userchoice
    const compChoice=genCompChoice();      // for computer choice
    //console.log("comp choice :",compChoice);

 // here we check what are the choices of user and comp.
  if(userChoice === compChoice){
   // console.log(" Game is a Draw");
    msg.innerText="Game was draw. play again."
    msg.style.backgroundColor="blue";
  }
  else{
    let userWin=true;    // this will track whether the user is winning or not.

    if(userChoice === "rock"){    // instead of another if-else we use ternary operators here.
         // for userchoice "rock" compchoice will be "paper"/"scissor" but not "rock" because it will give a draw. 
        userWin = compChoice === "paper"?false:true;
    }
    else if(userChoice === "paper"){
        // for userchoice "paper" compchoice will be "rock"/"scissor" but not "paper" because it will give a draw.
        userWin = compChoice === "scissor"?false:true;
    }
    else{
        // for userchoice "scissor" compchoice will be "paper"/"rock" but not "scissor" because it will give a draw.
        userWin = compChoice === "rock"?false:true;
    }

    showWinner(userWin,userChoice,compChoice);// here we are  trying to show the winner and also the choices made by user & comp.
  }
}

// to access each image we are using this for-each loop.
choices.forEach((choice) => {
    //console.log(choice);  this will each individual image div.
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");  // this will give individual "id-value/ id-name" given to that choice.
        //console.log('choice was clicked',userChoice);

        playGame(userChoice);
    });
});