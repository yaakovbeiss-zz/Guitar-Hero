import Note from './note.js';

class Channel{
  constructor(color){
    this.color = color;
    this.canvas = document.getElementById(`${this.color}`)
    this.targetPosition = 0;
    this.moveContext = this.moveContext.bind(this);
    this.notes = [];
  }

  fillContext(note){

    note.ctx = this.canvas.getContext('2d');
    note.ctx.fillStyle = `${this.color}`
    note.ctx.fillRect(0, note.pos, 300, 10)
    note.ctx.clearRect(0, note.pos - 10, 300, 10)
  }

  moveContext(timing){

    let note = new Note();
    this.notes.push(note);

    let timer = setInterval( ()=> {

      this.fillContext(note);

      note.pos += 10;

      if(note.pos > 160){
        this.notes.shift();
        clearInterval(timer)

      }
    }, timing)

  }

  aligned() {
    if(this.notes.length > 0){
      return (this.notes[0].pos > 120 && this.notes[0].pos < 150)
    }
  }

}








// let red = document.getElementById('red');
// let yellow = document.getElementById('yellow');
// let blue = document.getElementById('blue');
// let ctx = red.getContext('2d');
// let ctx2 = yellow.getContext('2d');
// let ctx3 = blue.getContext('2d');
// // let ctx2 = red.getContext('2d');
//
// // red.width = 100;
// // red.height = 100;
// ctx.fillStyle = 'red';
// let time = new Date();
//
// let i = 0;
// window.addEventListener('keydown', ()=>{
//   ctx.fillRect(0, i, 400, 10)
//   i += 5;
// })

export default Channel
