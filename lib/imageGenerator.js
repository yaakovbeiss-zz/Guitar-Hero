export const imageGenerator = () => {
  let allImages = document.getElementById('images')
  let images = new Array();
  images[0] = "assets/images/blue-buttonPressed.png";
  images[1] = "assets/images/green-buttonPressed.png";
  images[2] = "assets/images/orange-buttonPressed.png";
  images[3] = "assets/images/red-buttonPressed.png";
  images[4] = "assets/images/yellow-buttonPressed.png";

  images[5] = "assets/images/blue-buttonPressedLit.png";
  images[6] = "assets/images/green-buttonPressedLit.png";
  images[7] = "assets/images/orange-buttonPressedLit.png";
  images[8] = "assets/images/red-buttonPressedLit.png";
  images[9] = "assets/images/yellow-buttonPressedLit.png";

  images[10] = "assets/images/bluenote.png";
  images[11] = "assets/images/greennote.png";
  images[12] = "assets/images/orangenote.png";
  images[13] = "assets/images/rednote.png";
  images[14] = "assets/images/yellownote.png";

  for(let i = 0; i <= 14; i++){
    allImages.innerHTML += `<img src=${images[i]}>` 
  }

}
