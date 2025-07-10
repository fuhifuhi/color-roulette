document.getElementById('startBtn').addEventListener('click', function () {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'black', 'white']; // 色の並びをルーレット画像に正確に合わせる
  const segments = colors.length;
  const anglePerSegment = 360 / segments;

  const roulette = document.getElementById('roulette');
  const video = document.getElementById('colorVideo');

  // 動画を一旦非表示に
  video.pause();
  video.style.display = 'none';
  video.src = '';

  // 回転角をランダムに決定（5回転以上 + 0〜359度）
  const extraRotation = Math.floor(Math.random() * 360);
  const totalRotation = 360 * 5 + extraRotation;

  // ルーレット画像を回転
  roulette.style.transition = 'transform 3s ease-out';
  roulette.style.transform = `rotate(${totalRotation}deg)`;

  // 最終停止角度からインデックスを算出（時計回りなので360から引く）
  const finalAngle = (360 - (totalRotation % 360)) % 360;
  const index = Math.floor(finalAngle / anglePerSegment);
  const selectedColor = colors[index];

  // 指定色の .mov を表示・再生
  setTimeout(() => {
    video.src = `${selectedColor}.mov`;
    video.style.display = 'block';
    video.play();
  }, 3000);
});
