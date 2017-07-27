# Guitar-Hero

[Guitar-Hero live](www.yaakovbeiss.com/Guitar-Hero/)

Guitar-Hero is a JavaScript version of the amazing console game you know and love, Guitar-Hero. Guitar-Hero lets you feel what its like to be a rockstar. Players are challenged to keep with the beat as notes flow down the screen towards them. If a player presses a note at the correct time, the guitar plays, injecting a piece of the song into the audio currently playing. Play all the notes and you're a rockstar!

## Features & Implementation

### Generating the Playlist

Guitar-Hero uses asynchronous callbacks to load the backing track and all the sounds, and stores them in a array (playlist). Once loaded, sounds in the playlist are then sent to the channel.

### Sending Notes down a Channel

An asynchronous setTimeout callback is responsible for making the sure the notes are played with the right timing. Using the duration of each sound, setTimeout is continuously called for each sound in the playlist, accumulating each sounds' duration to ensure each sound only plays after the previous sounds have played. seTimeout hands off to the Channel. Five different channels are used to render all the Notes.

### Rendering Notes via the Channel

The channel is responsible for creating Note objects and rendering them at the correct time. A note object stores a sound, position on the HTML canvas, and an HTML context to render images on. As the channel receives a sound from the playlist, it wraps it in a Note object and sets the position to the top of the canvas on which it was rendered. The Note store information about its position and the Channel uses that information to check if the Note is aligned in the target area. A setInterval asynchronous function updates the position of Note which continuously moves the Note closer to the target area.

### Pressing Buttons

Five colored buttons are available for the player to press, one for each channel. Each button has two states, pressed and unpressed. When a button is pressed the current Note on that Channel will play if they are aligned. If not, an error sound will play. Notes are also only played if they are not already playing, preventing the player from pressing the button multiple times in quick succession. The player then scores points for the successful playing of Notes.
