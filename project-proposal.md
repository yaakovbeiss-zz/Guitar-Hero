##  Project Proposal: Guitar Hero

### Background

Guitar Hero is a classic multi-platform game that challenges its players to keep to a beat and carry a tune. This version will imitate the original version. The game will follow simple rules:
1) Should the player press the right note at the right time, a sound will play and the players score will increase
2) If the player presses the note before or after the right time, an error sound will play, and the player will not recieve points

### Functionality & MVP  

With Guitar Hero, users will be able to:

- [ ] Enter and exit zones, playing notes
- [ ] Score points for correctly entering zones

This project will include:

- [ ] A production README

### Wireframes

This app will consist of a single screen with game board, game controls, and nav links to the Github, my LinkedIn. Game controls will include moving the character Left and Right, a Play note button, and a Reset button and Pause button.

![wireframes](https://github.com/yaakovbeiss/Guitar-Hero/blob/master/GuiterHeroWireframe.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic, playing audio
- `Howler.js` for sound effects rendering,
- Canvas and WebGL for visual effects rendering,
- `Browserify` to bundle js files.

In addition to the entry file, there will be three scripts involved in this project:


`channel.js`: This script will handle the logic for creating and updating the necessary Canvas and WebGL elements and rendering them to the DOM. It will also keep track of the location of the current note.

`button.js` This script will keep track of the players input via the button. Should the player press the button while the channel is aligned, a sound will play. It will also be responsible for the button image to be rendered, depending on where the button is pressed or not.

`SoundGenerator.js`: this script will handle the music logic behind the scenes. The musicPlayer will hold an array of audio clips that will be conditionally played depending on where the note in the channel.js file is located, and if the play button was pressed.


### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Howler.js` installed. Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Howler.js`.  Goals for the day:

- Get a yellow bundle with `webpack`
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
- [ ] Render different animations depending on score
