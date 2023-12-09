const audio = document.createElement("audio");
audio.src = "assets/index.mp3";
audio.loop = true;
audio.volume = 0.5;
document.addEventListener("click", () => {
  audio.play();
});
