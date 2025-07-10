document.getElementById('startBtn').addEventListener('click', function () {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'black', 'white'];
  const segments = colors.length;
  const anglePerSegment = 360 / segments;

  const roulette = document.getElementById('roulette');
  const video = document.getElementById('colorVideo');
  const resultMessage = document.getElementById('resultMessage');

  video.pause();
  video.style.display = 'none';
  video.src = '';
  resultMessage.style.display = 'none';

  // 回転アニメーションをつける（強制再描画）
  roulette.style.transition = 'none';
  roulette.style.transform = 'rotate(0deg)';
  void roulette.offsetWidth; // ←これが大事！

  const extraRotation = Math.floor(Math.random() * 360);
  const totalRotation = 360 * 5 + extraRotation;

  setTimeout(() => {
    roulette.style.transition = 'transform 3s ease-out';
    roulette.style.transform = `rotate(${totalRotation}deg)`;
  }, 10);

  const finalAngle = (360 - (totalRotation % 360)) % 360;
  const index = Math.floor(finalAngle / anglePerSegment);
  const selectedColor = colors[index];

  setTimeout(() => {
    video.src = `${selectedColor}.mov`;
    video.style.display = 'block';
    video.play();
    resultMessage.textContent = `今日のラッキーカラーは ${selectedColor}！`;
    resultMessage.style.display = 'block';
  }, 3000);
});
