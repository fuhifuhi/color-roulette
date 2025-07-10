const roulette = document.getElementById("roulette");
const resultVideo = document.getElementById("resultVideo");
const spinButton = document.getElementById("spinButton");
const message = document.getElementById("message");

const segments = [
  { color: "red", degree: 0, bg: "#ff4d4d", msg: "今日のラッキーカラーは赤！", video: "red.mov" },
  { color: "blue", degree: 36, bg: "#4d79ff", msg: "今日のラッキーカラーは青！", video: "blue.mov" },
  { color: "green", degree: 72, bg: "#33cc33", msg: "今日のラッキーカラーは緑！", video: "green.mov" },
  { color: "yellow", degree: 108, bg: "#ffff66", msg: "今日のラッキーカラーは黄色！", video: "yellow.mov" },
  { color: "purple", degree: 144, bg: "#cc66ff", msg: "今日のラッキーカラーは紫！", video: "purple.mov" },
  { color: "orange", degree: 180, bg: "#ff9933", msg: "今日のラッキーカラーはオレンジ！", video: "orange.mov" },
  { color: "pink", degree: 216, bg: "#ff99cc", msg: "今日のラッキーカラーはピンク！", video: "pink.mov" },
  { color: "gray", degree: 252, bg: "#cccccc", msg: "今日のラッキーカラーはグレー！", video: "gray.mov" },
  { color: "black", degree: 288, bg: "#333333", msg: "今日のラッキーカラーは黒！", video: "black.mov" },
  { color: "question", degree: 324, bg: "#ffffff", msg: "今日は何が起こるかお楽しみに！", video: "question.mov" }
];

let isSpinning = false;

spinButton.addEventListener("click", () => {
  if (isSpinning) return;
  isSpinning = true;

  // リセット
  roulette.style.display = "block";
  resultVideo.style.display = "none";
  resultVideo.pause();
  resultVideo.src = "";
  message.textContent = "";
  document.body.style.backgroundColor = "#ffffff";

  // 回転角を計算
  const spinIndex = Math.floor(Math.random() * segments.length);
  const baseDegree = 360 * 5; // 5回転
  const finalDegree = baseDegree + (360 - segments[spinIndex].degree);

  roulette.style.transform = `rotate(${finalDegree}deg)`;

  // 回転後の処理（アニメーション終了後）
  setTimeout(() => {
    // 背景色変更
    document.body.style.backgroundColor = segments[spinIndex].bg;

    // メッセージ表示
    message.textContent = segments[spinIndex].msg;

    // 動画表示
    roulette.style.display = "none";
    resultVideo.src = segments[spinIndex].video;
    resultVideo.style.display = "block";
    resultVideo.play();

    isSpinning = false;
  }, 4000);
});
