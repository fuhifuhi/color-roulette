document.getElementById('startBtn').addEventListener('click', function () {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'black', 'white'];
  const bgColors = {
    red: "#ffd6d6",
    blue: "#d6eaff",
    green: "#d6ffd6",
    yellow: "#fffacd",
    pink: "#ffd6f0",
    purple: "#ead6ff",
    orange: "#ffe5b4",
    black: "#eeeeee", // 黒に近い背景だとUIが見えないので灰色で代用
    white: "#ffffff"
  };

  const segments = colors.length;
  const anglePerSegment = 360 / segments;

  const roulette = document.getElementById('roulette');
  const video = document.getElementById('colorVideo');
  const resultMessage = document.getElementById('resultMessage');

  // 動画をリセット
  video.pause();
  video.style.display = 'none';
  video.src = '';

  // ランダムな回転角度（5回転以上＋0〜359度）
  const extraRotation = Math.floor(Math.random() * 360);
  const totalRotation = 360 * 5 + extraRotation;

  // 回転アニメーション
  roulette.style.transition = 'transform 3s ease-out';
  roulette.style.transform = `rotate(${totalRotation}deg)`;

  // 停止位置の色を特定
  const finalAngle = (360 - (totalRotation % 360)) % 360;
  const index = Math.floor(finalAngle / anglePerSegment);
  const selectedColor = colors[index];

  // 結果を3秒後に反映
  setTimeout(() => {
    // 背景色変更
    document.body.style.backgroundColor = bgColors[selectedColor] || "#ffffff";

    // メッセージ表示
    resultMessage.textContent = `今日のラッキーカラーは ${selectedColor}！`;

    // 動画再生
    video.src = `${selectedColor}.mov`;
    video.style.display = 'block';
    video.play();
  }, 3000);
});
