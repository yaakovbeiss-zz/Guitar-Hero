class SoundGenerator{
  constructor(color, url){
    this.color = color;
    this.url = url;
    this.playlist = [];
    this.timing = [0];
  }

  generateSounds(n, callback){

      for(let i = 0; i < n; i++) {

        let sound = new Howl({
          buffer: true,
          html5: true,
          src: [this.url + `${i + 1}.wav`]
        })

        sound.on('load',() =>{
          this.playlist.push(sound);
          let prev = this.timing[this.timing.length - 1] 
          this.timing.push( sound.duration() + prev );
          if (this.playlist.length === n ) {

            callback(this.playlist)
          }
        })
      }

    }


  }




export default SoundGenerator;
