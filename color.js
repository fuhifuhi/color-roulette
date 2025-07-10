document.getElementById('startBtn').addEventListener('click', function () {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'black', 'white'];
  const segments = colors.length;
  const anglePerSegment = 360 / segments;

  const roulette = document.getElementById('roulette');
  const video = document.getElementById('colorVideo');
  const result = document.getElementById('result');

  // 初期化
  video.pause();
  video.style.display = 'none';
  video.src = '';
  result.textContent = '';

  // ランダム回転
  const extraRotation = Math.floor(Math.random() * 360);
  const totalRotation = 360 * 5 + extraRotation;

  roulette.style.transition = 'transform 3s ease-out';
  roulette.style.transform = `rotate(${totalRotation}deg)`;

  // 色の特定
  const finalAngle = (360 - (totalRotation % 360)) % 360;
  const index = Math.floor(finalAngle / anglePerSegment);
  const selectedColor = colors[index];

  // 3秒後に動画再生＆結果表示
  setTimeout(() => {
    result.textContent = `選ばれた色は「${selectedColor}」です！`;
    video.src = `${selectedColor}.mov`;
    video.style.display = 'block';
    video.play();
  }, 3000);
});
