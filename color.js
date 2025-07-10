let currentRotation = 0; // 直前の角度を保持

document.getElementById('startBtn').addEventListener('click', function () {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'black', 'white'];
  const roulette = document.getElementById('roulette');
  const video = document.getElementById('colorVideo');
  const resultText = document.getElementById('resultText');

  // 動画非表示
  video.pause();
  video.style.display = 'none';
  video.src = '';

  // 回転角度の計算（ランダムで5〜8回転＋ランダム角度）
  const extraSpins = Math.floor(Math.random() * 3) + 5; // 5〜7回転
  const finalAngle = Math.floor(Math.random() * 360);
  const randomAngle = extraSpins * 360 + finalAngle;

  currentRotation += randomAngle; // 累積角度で回転（スムーズ）

  roulette.style.transition = 'transform 3s ease-out';
  roulette.style.transform = `rotate(${currentRotation}deg)`;

  // 色のインデックス取得
  const index = Math.floor(((currentRotation % 360) / 360) * colors.length);
  const selectedColor = colors[index];

  // ルーレット停止後の処理
  setTimeout(() => {
    document.body.style.backgroundColor = selectedColor; // 背景色変更
    resultText.textContent = `今日のラッキーカラーは ${selectedColor}！`;

    // ルーレット非表示、動画表示
    roulette.style.display = 'none';
    video.src = `${selectedColor}.mov`;
    video.style.display = 'block';
    video.play();
  }, 3000);
});
