function handleClick() {
  var buttonhtml = this.innerHTML;
  makeSound(buttonhtml);
  buttonAnimation(buttonhtml);
};

function makeSound(key) {
  buttonAnimation(key);
  switch (key) {
    case "A":
      var audio = new Audio('sounds/clap.wav');
      audio.play();
      break;
    case "S":
      var audio = new Audio('sounds/hihat.wav');
      audio.play();
      break;
    case "D":
      var audio = new Audio('sounds/kick.wav');
      audio.play();
      break;
    case "F":
      var audio = new Audio('sounds/openhat.wav');
      audio.play();
      break;
    case "G":
      var audio = new Audio('sounds/boom.wav');
      audio.play();
      break;
    case "H":
      var audio = new Audio('sounds/ride.wav');
      audio.play();
      break;
    case "J":
      var audio = new Audio('sounds/snare.wav');
      audio.play();
      break;
    case "K":
      var audio = new Audio('sounds/tom.wav');
      audio.play();
      break;
    case "L":
      var audio = new Audio('sounds/tink.wav');
      audio.play();
      break;
    default:
      return;
  }
}

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("playing");

  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("playing");
  }, 100);
};

var totalButtons = document.querySelectorAll('.key').length;
for (var i = 0;i < totalButtons;i++)
{
  document.querySelectorAll('.key')[i].addEventListener('click', handleClick);
}

document.addEventListener('keydown', function (event) {
  makeSound(event.key.toUpperCase());
});