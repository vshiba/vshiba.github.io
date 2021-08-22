let images = ["/media/doge.gif", "/media/dogpet.gif"]; // For storing images
let counter = 0;
let petting = false; // so the user can't pet 2 times at once
const sound = new Audio('/media/pet.mp3');
function pet() {
  if (petting) return; // do not allow user to pet dog at the same time
  petting = true;
  counter++;
  let image = document.getElementById('pet');
  let petted = document.getElementById('amountpet')
  petted.innerText = `you have petted dog ${counter} times`;
  image.src = images[1]; // Will change to petting
  sound.play();
  setTimeout(function() {
    petting = false;
    image.src = images[0]; // will change back to originald
  }, 2000) // 2000 ms = 2 seconds
}
