class SoundGenerator{
  constructor(color, url){
    this.color = color;
    this.url = url;
    this.playlist = [];
  }

  generateSounds(n){

    for(let i = 0; i < n; i++) {
        let sound = new Howl({
          buffer: true,
          html5: true,
          src: [this.url + `${i + 1}.wav`]
        })

        sound.on('load',() =>{
          this.playlist.push(sound)
        })
    }
    
  }

}

export default SoundGenerator;
