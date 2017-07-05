##  Project Proposal: Guitar Hero

### Background

Guitar Hero is a classic multi-platform game that challenges its players to keep to a beat and carry a tune. This version will feature a character that Players need move via the keyboard making sure to place the character in the right space(s) at the right time. Each place the character enters represents a piece of a song that will play. If the character successfully enters the rights zones, a entire song will play. The game will follow simple rules:
1) Should the player enter the right zone(s) and press the play key at the right time the note will play
2) If the player doesn't enter the zone and press the play key but is already in the zone the note will not play
3) Points will be awarded for each zone entered and successfully played

### Functionality & MVP  

With Guitar Hero, users will be able to:

- [ ] Enter and exit zones, playing notes
- [ ] Score points for correctly entering zones
- [ ] See a visual representation of their character entering and exiting zones


This project will include:

- [ ] A production README

### Wireframes

This app will consist of a single screen with game board, game controls, and nav links to the Github, my LinkedIn. Game controls will include moving the character Left and Right, a Play note button, and a Reset button and Pause button.

![wireframes]('https://github.com/yaakovbeiss/Guitar-Hero/blob/master/GuiterHeroWireframe.png')

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic, playing audio
- `Howler.js` for sound effects rendering,
- Canvas and WebGL for visual effects rendering,
- `Browserify` to bundle js files.

In addition to the entry file, there will be three scripts involved in this project:


`display.js`: this script will handle the logic for creating and updating the necessary Canvas and WebGL elements and rendering them to the DOM. This script will be responsible for the visual aspect of the game.

`playerControls.js` This script will keep track of the player location, and keep a tally of the points a player scores. It will also handle login to see if the player is in the right zone and presses the right key.

`musicPlayer.js`: this script will handle the music logic behind the scenes. The musicPlayer will hold an array of audio clips that will be conditionally played depending on where the character in the playerControls.js file is located, and if the play button was pressed.


### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Howler.js` installed. Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Howler.js`.  Goals for the day:

- Get a green bundle with `Browserify`
- Learn enough `Howler.js` deconstruct audio files
- Learn Canvas to render an object

**Day 2**: Dedicate this day to learning the `Howler.js` API and Canvas
- Learn how to create and manipulate Canvas elements
- Use Howler.js to deconstruct an audio file into smaller parts.
- Map those audio files to Canvas elements.

**Day 3**: Create player controller logic. Map keypresses to manipulating canvas elements.

**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:



### Bonus features

There are many directions this Guitar Hero could eventually go.  Some anticipated updates are:

- [ ] Add multiple songs
- [ ] Add different difficulty levels for game
- [ ] Add multiplayer
- [ ] Render different animations depending on score
