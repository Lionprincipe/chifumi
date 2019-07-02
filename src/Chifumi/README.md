# Chifumi

first why chosing 'Chifumi': because it easy to write and suit better to folders and file than "Rock, paper, Scissor".
This class modelize the game "Rock, paper, Scissor".

In this game two players plays against each over. Each one select a value from a set. Ex player A & B selct one value from "Rock, paper, Scissor". Each choice has 1 predefine result against others.e.i Rock vs Paper or Paper vs Rock = paper wins...etc
These make it look like a circular flow : rock ----> scissor---->paper---->rock
the possible results of battles are : win, lose or tie.

#Result
All these behavior can be easily modelized with an inverted diagonal matrix.
So we use a function to build a matrix based on the size of the given choices list and are saving the result according to the rule describe earlier.
We use the index of the corresponding winner as placehoder fo wins, and tie rusult is represented by the array size.
.
example: [rock,paper, scissor] will generate the following matrix [[3,0,2],[0,3,1],[2,1,3]]

# init

Import the class to your js file.

1. create a new object from the class (ex: const game = new Chifumi(['A', 'B'],['rock','paper', 'scissor'] ))
2. then call the methode setPlayersChoices wit a list of players choices ex:['rock','paper']
   once the players names, choices and the matrix or result are setup the class can provide you with the result of the battle.
3. call the methode getResult

Although the class can help predict chifumi rusult from a list of multiple possibles choices, the game is more balance the list size number is odd.
