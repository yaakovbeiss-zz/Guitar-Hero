class SoundGenerator{
  constructor(url, backingTrack){
    this.backtrack = backingTrack;
    this.song = null;
    this.url = url;
    this.playlist = [];
    this.crowd = null;
  }

  generateSounds(n, callback){
      let k = 0;
      for(let i = 0; i < n; i++) {

        let sound = new Howl({
          buffer: true,
          html5: true,
          src: [this.url + `(${i + 2}).wav`]
        })
        let backtrack = new Howl({
          buffer: true,
          html5: true,
          src: [this.backtrack]
        })
        let crowd = new Howl({
          buffer: true,
          html5: true,
          loop: true,
          volume: 0.0,
          src: ["https://s3.us-east-2.amazonaws.com/guitar-hero/crowd.mp3"]
        })


        sound.on('load',() =>{
          this.playlist[i] = sound
          k += 1;

          if (k === n && backtrack.state() === "loaded" && crowd.state() === "loaded") {

            this.song = backtrack;
            this.crowd = crowd;
            console.log('callback being called')
            callback()

          }
        })
      }

    }


  }




export default SoundGenerator;
