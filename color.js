const colorList = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple', 'pink', 'orange'];

function getRandomColor() {
  const index = Math.floor(Math.random() * colorList.length);
  return colorList[index];
}

document.getElementById("startBtn").addEventListener("click", () => {
  const color = getRandomColor();
  const video = document.getElementById("colorVideo");
  video.src = `${color}.mov`;  // movファイルは直下にある前提
  video.style.display = "block";
  video.play();
});
