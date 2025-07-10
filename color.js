document.getElementById('startBtn').addEventListener('click', function () {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'black', 'white'];
  const backgroundColors = {
    red: '#ff9999',
    blue: '#99ccff',
    green: '#99ff99',
    yellow: '#ffffcc',
    pink: '#ffccff',
    purple: '#cc99ff',
    orange: '#ffcc66',
    black: '#333333',
    white: '#ffffff'
  };

  const roulette = document.getElementById('roulette');
  const pointer = document.getElementById('pointer');
  const video = document.getElementById('colorVideo');
  const resultText = document.getElementById('resultText');

  // 動画停止＆非表示、ルーレット再表示
  video.pause();
  video.style.display = 'none';
  video.src = '';
  roulette.style.display = 'block';
  pointer.style.display = 'block';

  // 回転角を決定
  const totalRotation = 360 * 5 + Math.floor(Math.random() * 360);
  roulette.style.transition = 'transform 3s ease-out';
  roulette.style.transform = `rotate(${totalRotation}deg)`;

  // 回転終了後の処理
  setTimeout(() => {
    const finalAngle = (360 - (totalRotation % 360)) % 360;
    const index = Math.floor(finalAngle / (360 / colors.length));
    const selectedColor = colors[index];

    // テキスト表示
    resultText.textContent = `今日のラッキーカラーは ${selectedColor}！`;

    // 背景色変更
    document.body.style.backgroundColor = backgroundColors[selectedColor];

    // ルーレット非表示、動画表示
    roulette.style.display = 'none';
    pointer.style.display = 'none';
    video.src = `${selectedColor}.mov`;
    video.style.display = 'block';
    video.play();
  }, 3000);
});
