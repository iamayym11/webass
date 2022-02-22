const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

function generateRandomNum() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  randomNum = Math.floor(Math.random() * parseInt(toNum));

  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNum");
    randomNumEl.innerHTML = randomNum;
  }
}
var anime =['Saitama', 'Gon', 'L', 'Lite', 'R', 'Killua', 'Tandjiro']
  function anime(){
   var anime =['Saitama', 'Gon', 'L', 'Lite', 'Rengoku', 'Killua', 'Tandjiro', 'Nezuko', 'Zenitsu']
    var randomAnime = Math.floor(Math.random() *(anime.length));
    document.getElementById('anime-display').innerHTML = anime[randomAnime];
  }
  
function randomSound() {
   mySounds = [ 'audio1', 'audio2', 'audio3', 'audio4']
    var index = Math.floor(Math.random() * 1000) % mySounds.length;
    var id = mySounds[index];
    var audioElement = document.getElementById(audio-play);
    audioElement.play();
}
