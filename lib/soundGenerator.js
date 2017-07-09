class SoundGenerator{
  constructor(url, backingTrack){
    this.backtrack = backingTrack;
    this.song = null;
    this.url = url;
    this.playlist = [];
    // this.timing = [0];
  }

  generateSounds(n, callback){
      let k = 0;
      for(let i = 0; i < n; i++) {

        let sound = new Howl({
          buffer: true,
          html5: true,
          src: [this.url + `(${i + 2}).wav`]
        })
        let song = new Howl({
          buffer: true,
          html5: true,
          src: [this.backtrack]
        })


        sound.on('load',() =>{
          this.playlist[i] = sound
          k += 1;

          if (k === n && song.state() === "loaded") {
            this.song = song;
            console.log('callback being called')
            callback()

          }
        })
      }

    }


  }




export default SoundGenerator;
