let selection = prompt("Select, Stone/Paper/Scissor");
let compSel = Math.floor(Math.random() * 3) + 1;
if (selection == "Stone" && compSel == 1) {
	alert("tie") 
} else if (selection == "Stone" && compSel == 2) {
	alert("computer Wins") 
} else if (selection == "Stone" && compSel == 3) {
	alert("You Won") 
} else if (selection == "Paper" && compSel == 1) {
	alert("You Won") 
}  else if (selection == "Paper" && compSel == 2) {
	alert("Tie") 
} else if (selection == "Paper" && compSel == 3) {
	alert("Computer Won") 
} else if (selection == "Scissor" && compSel == 1) {
	alert("Computer Won") 
} else if (selection == "Scissor" && compSel == 2) {
	alert("You Won") 
} else if (selection == "Scissor" && compSel == 3) {
	alert("Tie") 
}
if (compSel == 1) {
	compSel = "Stone";
}
if (compSel == 2) {
	compSel = "Paper";
}
if (compSel == 3) {
	compSel = "Scissor";
}
console.log(`You Selected ${selection}`,"and computer selected " + compSel) 