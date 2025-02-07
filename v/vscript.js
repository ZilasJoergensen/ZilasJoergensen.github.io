setInterval(loadindDisplayNone, 5500);
let loadingCon = document.getElementById("loadingCon");
function loadindDisplayNone() {
  loadingCon.style.opacity = "0";
  setInterval(displaynone, 1000);
  function displaynone() {
    loadingCon.style.display = "none";
  }
}

var envelope = document.getElementById("envelope");
var intervalId;

function openEnvi() {
    envelope.classList.add("open");
        envelope.classList.remove("close");
        intervalId = setInterval(displayLetter, 2000);
}

function displayLetter() {
    clearInterval(intervalId);
    document.getElementById('letterId').style.zIndex = '3';
    document.getElementById('letterId').classList.add("openedLetter");
    document.getElementById('letterTextCon').style.display = 'block';
    envelope.onclick = null;
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

const heartButton = document.getElementById("heartButton");
        heartButton.addEventListener("click", function() {
            this.classList.toggle("liked");
            showMusicNote();
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