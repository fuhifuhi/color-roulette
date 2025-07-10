document.getElementById('startBtn').addEventListener('click', function() {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'black', 'white'];
  const roulette = document.getElementById('roulette');
  const video = document.getElementById('colorVideo');

  // 動画を一旦非表示に
  video.pause();
  video.style.display = 'none';
  video.src = '';

  // ランダムな角度で回転（5回転＋0〜360度）
  const randomAngle = 360 * 5 + Math.floor(Math.random() * 360);
  roulette.style.transition = 'transform 3s ease-out';
  roulette.style.transform = `rotate(${randomAngle}deg)`;

  // 色のインデックスを取得
  const index = Math.floor((randomAngle % 360) / (360 / colors.length));
  const selectedColor = colors[index];

  // ルーレット停止後に動画再生
  setTimeout(() => {
    video.src = `${selectedColor}.mov`;
    video.style.display = 'block';
    video.play();
  }, 3000); // 3秒後に再生
});
