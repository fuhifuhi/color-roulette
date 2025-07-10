const roulette = document.getElementById('roulette');
const pointer = document.getElementById('pointer');
const startButton = document.getElementById('start-button');
const message = document.getElementById('message');
const video = document.getElementById('color-video');

const segments = [
  { color: 'red', angle: 0, bg: '#ff4d4d', video: 'red.mov', message: '今日のラッキーカラーは赤！' },
  { color: 'orange', angle: 36, bg: '#ffa500', video: 'orange.mov', message: '今日のラッキーカラーはオレンジ！' },
  { color: 'yellow', angle: 72, bg: '#ffff66', video: 'yellow.mov', message: '今日のラッキーカラーは黄色！' },
  { color: 'green', angle: 108, bg: '#66ff66', video: 'green.mov', message: '今日のラッキーカラーは緑！' },
  { color: 'blue', angle: 144, bg: '#66b3ff', video: 'blue.mov', message: '今日のラッキーカラーは青！' },
  { color: 'purple', angle: 180, bg: '#cc66ff', video: 'purple.mov', message: '今日のラッキーカラーは紫！' },
  { color: 'pink', angle: 216, bg: '#ff99cc', video: 'pink.mov', message: '今日のラッキーカラーはピンク！' },
  { color: 'brown', angle: 252, bg: '#cc9966', video: 'brown.mov', message: '今日のラッキーカラーは茶色！' },
  { color: 'black', angle: 288, bg: '#333333', video: 'black.mov', message: '今日のラッキーカラーは黒！' },
  { color: '?', angle: 324, bg: '#ffffff', video: 'question.mov', message: '今日は何が起こるかお楽しみに！' }
];

let spinning = false;
let currentRotation = 0;

startButton.addEventListener('click', () => {
  if (spinning) return;
  spinning = true;

  // 初期化
  roulette.style.display = 'block';
  pointer.style.display = 'block';
  video.pause();
  video.currentTime = 0;
  video.style.display = 'none';
  startButton.style.display = 'none';
  message.textContent = '';
  document.body.style.backgroundColor = '#f0f0f0';

  // 色をランダム選択
  const result = segments[Math.floor(Math.random() * segments.length)];
  const fullRotations = 5 * 360;
  const totalRotation = fullRotations + (360 - result.angle);

  currentRotation += totalRotation;
  roulette.style.transition = 'transform 3s ease-out';
  roulette.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    document.body.style.backgroundColor = result.bg;
    message.textContent = result.message;

    roulette.style.display = 'none';
    pointer.style.display = 'none';

    video.src = result.video;
    video.style.display = 'block';
    video.play();

    // 動画再生終了後にボタン復活
    video.onended = () => {
      startButton.style.display = 'inline-block';
    };

    spinning = false;
  }, 3000);
});
