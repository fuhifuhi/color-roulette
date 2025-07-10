document.getElementById('startBtn').addEventListener('click', function () {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'black', 'white'];
  const anglePerSegment = 360 / colors.length;
  const roulette = document.getElementById('roulette');
  const video = document.getElementById('colorVideo');
  const resultText = document.getElementById('resultText');
  const body = document.body;

  // 初期化
  video.pause();
  video.style.display = 'none';
  video.src = '';
  roulette.style.display = 'block';
  resultText.textContent = '';

  // 回転計算
  const extraRotation = Math.floor(Math.random() * 360);
  const totalRotation = 360 * 5 + extraRotation;
  const finalAngle = (360 - (totalRotation % 360)) % 360;
  const index = Math.floor(finalAngle / anglePerSegment);
  const selectedColor = colors[index];

  // ルーレット回転
  roulette.style.transition = 'transform 3s ease-out';
  roulette.style.transform = `rotate(${totalRotation}deg)`;

  // 結果表示と背景変更・動画再生
  setTimeout(() => {
    resultText.textContent = `今日のラッキーカラーは ${selectedColor}！`;
    body.style.backgroundColor = selectedColor;

    // 動画切替
    roulette.style.display = 'none';
    video.src = `${selectedColor}.mov`;
    video.style.display = 'block';
    video.play();
  }, 3000);
});
