const roulette = document.getElementById("roulette");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resultVideo = document.getElementById("result-video");
const resultText = document.getElementById("result-text");
const result = document.getElementById("result");

let isSpinning = false;
let rotation = 0;
let spinInterval;
let colors = ["red", "blue", "yellow", "green", "pink", "purple", "orange", "black", "white"];
let segmentCount = colors.length;
let segmentAngle = 360 / segmentCount;

startBtn.addEventListener("click", () => {
  if (isSpinning) return;
  isSpinning = true;
  rotation = 0;
  roulette.style.transition = "none";
  roulette.style.transform = `rotate(${rotation}deg)`;
  result.style.display = "none";
  resultVideo.src = "";
  resultText.textContent = "";
  startBtn.disabled = true;
  stopBtn.disabled = false;

  spinInterval = setInterval(() => {
    rotation += 10;
    roulette.style.transform = `rotate(${rotation}deg)`;
  }, 16); // 約60fps
});

stopBtn.addEventListener("click", () => {
  if (!isSpinning) return;
  isSpinning = false;
  clearInterval(spinInterval);

  // ランダムに最終角度を加算（複数回転＋偏差）
  const randomRotation = 360 * 5 + Math.floor(Math.random() * 360);
  rotation += randomRotation;

  // 回転停止演出（CSSでスムーズに）
  roulette.style.transition = "transform 3s ease-out";
  roulette.style.transform = `rotate(${rotation}deg)`;

  // 最終的に止まる色の判定
  setTimeout(() => {
    const normalized = (rotation % 360 + 360) % 360;
    const index = Math.floor((segmentCount - (normalized / segmentAngle)) % segmentCount);
    const color = colors[index];

    result.style.display = "block";
    resultVideo.src = `mov/${color}.mov`;
    resultVideo.load(); // iOS対策
    resultText.textContent = `今日のラッキーカラーは ${color.toUpperCase()} だよ！`;

    startBtn.disabled = false;
    stopBtn.disabled = true;
  }, 3000); // CSSの3秒と合わせる
});
