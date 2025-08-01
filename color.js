document.addEventListener("DOMContentLoaded", () => {
  const roulette = document.getElementById("roulette");
  const rouletteContainer = document.getElementById("roulette-container");
  const startButton = document.getElementById("start-button");
  const video = document.getElementById("result-video");
  const message = document.getElementById("result-message");

  const sectors = [
    { color: "赤", file: "red.mov", bg: "#ff4b4b", msg: "情熱の赤！" },
    { color: "青", file: "blue.mov", bg: "#4b6cff", msg: "冷静な青！" },
    { color: "黄", file: "yellow.mov", bg: "#fff04b", msg: "輝きの黄！" },
    { color: "緑", file: "green.mov", bg: "#4bff76", msg: "癒しの緑！" },
    { color: "紫", file: "purple.mov", bg: "#a04bff", msg: "神秘の紫！" },
    { color: "ピンク", file: "pink.mov", bg: "#ff4bb2", msg: "愛のピンク！" },
    { color: "オレンジ", file: "orange.mov", bg: "#ffa64b", msg: "元気なオレンジ！" },
    { color: "水色", file: "skyblue.mov", bg: "#4bdfff", msg: "爽やか水色！" },
    { color: "白", file: "white.mov", bg: "#ffffff", msg: "純白の白！" },
    { color: "？", file: "question.mov", bg: "#000000", msg: "謎のラッキーカラー！？" }
  ];

  let spinning = false;
  let currentState = "roulette"; // 状態管理：roulette or video

  startButton.addEventListener("click", () => {
    if (currentState === "video") {
      // MOV終了後 → 再スタートでルーレット復帰
      rouletteContainer.style.display = "block";
      message.textContent = "";
      document.body.style.backgroundColor = "#ffffff";
      currentState = "roulette";
      return;
    }

    if (spinning) return;
    spinning = true;
    startButton.disabled = true;
    video.style.display = "none";

    const selectedIndex = Math.floor(Math.random() * 10);
    const rotation =
      360 * 10 + selectedIndex * 36 + Math.floor(Math.random() * 10 - 5);

    roulette.style.transition = "transform 5s ease-out";
    roulette.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
      const result = sectors[selectedIndex];
      document.body.style.backgroundColor = result.bg;

      // 非表示切替
      rouletteContainer.style.display = "none";
      video.src = result.file;
      video.style.display = "block";
      video.play();
      message.textContent = result.msg;

      currentState = "video";
      spinning = false;
    }, 5000);
  });

  video.addEventListener("ended", () => {
    video.style.display = "none";
    startButton.disabled = false;
    // ルーレットは再スタート時に復活
  });
});
