# nodejs
//ROCK PAPER SCISSOR GAME

let rlSync=require('readline-sync');


console.log("ROCK PAPER SCISSOR GAME");
let computer_move=['rock','paper','scissor'];
let random_moves_computer=computer_move[Math.floor(Math.random()*computer_move.length)];

let player_name=rlSync.question('what is your name?\n');
console.log('hi'+player_name+'welcome to the game!');
console.log("Please read the instructions below");
console.log("INSTRUCTIONS: Choose any move in rock , paper , scissors");
console.log("NOTE: Remember the letters are casesensitve,so please use lower case only!")
players_move=rlSync.question("which move you want to choose?\n");

if(players_move==random_moves_computer){
    console.log("Match Draw");

}
else if(players_move=="rock" && random_moves_computer=="paper"){
    console.log("AWWW!! Computer Won the Match");
    console.log("The Game Ends!");
}
else if(players_move=="paper" && random_moves_computer=="scissor"){
    console.log("HURRAY!! "+player_name+" Won the Match");
    console.log("The Game Ends!");
}
else if(players_move=="scissor" && random_moves_computer=="paper"){
    console.log("HURRAY "+player_name+" Won the Match");
    console.log("The Game Ends!");
}
else if(players_move=="paper" && random_moves_computer=="rock"){
    console.log("HURRAY!!"+player_name+" Won the Match");
    console.log("The Game Ends!");
}
else if(players_move=="paper" && random_moves_computer=="scissor"){
    console.log("AWWW!! Computer Won the Match");
    console.log("The Game Ends!");
}
