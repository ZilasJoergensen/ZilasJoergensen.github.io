setTimeout(loadindDisplayNone, 5500);

let loadingCon = document.getElementById("loadingCon");

function loadindDisplayNone() {
  loadingCon.style.opacity = "0";
  setTimeout(() => {
    loadingCon.style.display = "none";
  }, 1000); // Wait for fade-out transition
}

var envelope = document.getElementById("envelope");
var intervalId;
const heartButton = document.getElementById("heartButton");

function openEnvi() {
    envelope.classList.add("open");
        envelope.classList.remove("close");
        intervalId = setInterval(displayLetter, 2000);
        heartButton.style.transition = "opacity 0.5s ease";
        heartButton.style.opacity = "0";
        heartButton.style.pointerEvents = "none";
}

function displayLetter() {
  clearInterval(intervalId);
  
  let letter = document.getElementById('letterId');
  let introText = document.createElement("div");
  introText.id = "introText";
  introText.innerHTML = "<span>Hey Emi, I have question for you...</span>";
  introText.style.position = "absolute";
  introText.style.top = "50%";
  introText.style.left = "50%";
  introText.style.transform = "translate(-50%, -50%)";
  introText.style.fontFamily = "'Delicious Handrawn', cursive";
  introText.style.fontSize = "24px";
  introText.style.color = "#EF3167";
  introText.style.textAlign = "center";
  
  letter.appendChild(introText);

  setTimeout(() => {
      introText.style.opacity = "0";
      setTimeout(() => {
          introText.remove();
          document.getElementById('letterTextCon').style.display = 'block';
          letter.style.zIndex = '3';
          letter.classList.add("openedLetter");
      }, 500); // Wait for fade out before showing the letter
  }, 2000); // Delay before hiding the intro text
}

function yesMie(){
    let letterCon = document.getElementById('letterId');
    letterCon.innerHTML = '<div class="imgConGift"><img id="gifImg" src="imgs/milk-and-mocha-hug.gif" alt=""></div><div class="ilyText"><span>I Love You Always Emi💗</span></div>';
}
let yesBtn = document.getElementById('yesButton');
function noMie(){
    const gif = ["imgs/mimibubu.gif", "imgs/milk-mocha.gif", "imgs/cry-baby.gif", "imgs/dirt-alone.gif", "imgs/broken.gif", "imgs/sad-bunny.gif", "imgs/cry.gif", "imgs/cute-sad.gif"];
    const randomIndex = Math.floor(Math.random() * gif.length);
    document.getElementById('gifImg').src = gif[randomIndex];
    yesBtn.style.width = `${yesBtn.offsetWidth + 5}px`;
    yesBtn.style.height = `${yesBtn.offsetHeight + 5}px`;
    const currentFontSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentFontSize + 3}px`;
}

function unmuteAudio() {
  var audio = document.getElementById("player");
  audio.volume = 0;
  audio.muted = false;
  audio.play();

  let volume = 0;
  let fadeInterval = setInterval(function () {
    if (volume < 1) {
      volume += 0.01; 
      audio.volume = Math.min(volume, 0.2); 
    } else {
      clearInterval(fadeInterval);
    }
  }, 250);
}

heartButton.addEventListener("click", function () {
    this.classList.toggle("liked");
    showMusicNote();

    this.style.transition = "opacity 0.5s ease";
    this.style.opacity = "0";
    this.style.pointerEvents = "none";
});


function showMusicNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = "&#9835;"; // Music note symbol
    document.body.appendChild(note);

    const rect = heartButton.getBoundingClientRect();
    note.style.left = `${rect.left + rect.width / 2}px`;
    note.style.top = `${rect.top}px`;

    setTimeout(() => {
        note.remove();
    }, 1000);
}

