# __Mini-Mandala__

Color coded card game of skill and chance.

## __Game Outline__

The goal of mini-mandala is to get the high score. Play against the CPU by chosing one of four cards to play in the play field. The CPU will also play one of four colors to the play field. Play continues until all four colors are played. Then the players take turns picking a color and taking the corresponding cards.

Scoring will be counted by the amount of each color the players have, compared to their personal scoreboard. The order of the colors determines the value of that color for that player. 

### __Page Design__

![Page Design](E95764FB-362B-4234-B1B6-36CA8A0B5886.jpeg)


#### __MVP goals__

1. Create a function to pick a random color (red, blue, green, yellow).

2. Create a function to control CPU moves. After player moves, CPU produces a random color to the board.

3. Create a function for controling the scoring.
    1. Set the color to the corresponding point value.
    2. Create an object to contain player "cards" for scoring at the end.
    3. Create a function for counting score.
    4. Determine winner.

4. Create function for player moves.
    1. Click for selecting card to play.
    2. Click for selecting color when clearing the play field.
    3. Create a function to draw player's hand back up to four cards.

5. Design gameboard.
    1. Scoreboard for CPU.
    2. Scoreboard for Player.
    3. Field for playing cards.
    4. Area for player's cards.
    5. Display for final score.

6. Formulate the end game.

##### __Stretch Goals__

1. Add two more colors to gameplay.
    1. Add colors (purple, orange).
    2. Add point structures for 5 pt, and 6 pt.

2. Create three seperate play fields. 
    1. Create play field for CPU (CPU only).
    2. Create community play field (CPU, Player).
    3. Create play field for player (Player only).

3. Make CPU decision tree intelligent instead of random.

4. Drag and drop the players cards to the play field.

###### __Challenges__

1. The overall complexity of the game seems like it will be difficult to organize and design all the logic.

2. Scoring is going to be a big challenge.