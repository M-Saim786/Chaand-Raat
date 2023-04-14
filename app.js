let i = 0;
let section = document.getElementById("section");
while (i <= 100) {
  // const element = array[i];
  let star = document.createElement("i");
  star.classList.add("star");
  section.appendChild(star);
  i++;
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  console.log(window.innerWidth);
  // console.log(y)
  let size = Math.random() * 4;
  let duration = Math.random() * 2;

  star.style.left = x + "px";
  star.style.top = y + "px";
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.animationDuration = 2 + duration + "s";
  star.style.animationDelay = duration + "s";
}

// // create an audio element
// window.onload=function (){
//

//   document.querySelector('button').addEventListener('click', function() {
//     audio.resume().then(() => {
//       console.log('Playback resumed successfully');
//     });
//   });

window.onplay = () => {
  // console.log('window')
  const audio = new Audio();

  console.log(audio);
  // set the source of the audio file
  audio.src =
    "./Music/Happy Eid Al Fitr - Ramol (Official Audio) (online-audio-converter.com).mp3";
  // loop the audio playback
  audio.loop = true;
  console.log(audio);

  // set the volume level to 50%
  audio.volume = 0.5;

  // play the audio
  audio.play();
};

//   playAudio()

// get the current timestamp
var timestamp = new Date().getTime();

// create a new Audio object with a timestamped URL
var audio = new Audio("audio-file.mp3?t=" + timestamp);

// play the audio
audio.play();

console.log(window.innerHeight);
console.log(window.innerWidth);

let eid = new Date("apr 12, 2023 00:00:00").getTime();
console.log(eid);
let now = new Date().getTime();
console.log(now);
let diffInMili = eid - now;
console.log(diffInMili);
let dayinMilisec = 1000 * 60 * 60 * 24;
let days = Math.floor(diffInMili / dayinMilisec);

let hours = Math.floor((diffInMili % dayinMilisec) / (1000 * 60 * 60));
console.log(`House ${hours}`);

let mint = Math.floor((diffInMili % (1000 * 60 * 60)) / (1000 * 60));
console.log(`MINT ${mint}`);

let sec = Math.floor((diffInMili % (1000 * 60)) / 1000);
console.log(`SEC ${sec}`);

console.log(days);
