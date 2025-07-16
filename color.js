const startButton = document.getElementById('startButton');
const roulette = document.getElementById('roulette');
const pointer = document.getElementById('pointer');
const message = document.getElementById('message');
const video = document.getElementById('colorVideo');

const colors = [
  { color: '#ff0000', name: '赤', video: 'red.mov', message: '情熱の赤！' },
  { color: '#ffa500', name: 'オレンジ', video: 'orange.mov', message: '元気いっぱいオレンジ！' },
  { color: '#ffff00', name: '黄色', video: 'yellow.mov', message: '幸せの黄色！' },
  { color: '#008000', name: '緑', video: 'green.mov', message: '癒しの緑！' },
  { color: '#00ffff', name: '水色', video: 'cyan.mov', message: '爽やかな水色！' },
  { color: '#0000ff', name: '青', video: 'blue.mov', message: '冷静な青！' },
  { color: '#800080', name: '紫', video: 'purple.mov', message: 'ミステリアスな紫！' },
  { color: '#ffc0cb', name: 'ピンク', video: 'pink.mov', message: 'ラブリーなピンク！' },
  { color: '#000000', name: '黒', video: 'black.mov', message: 'クールな黒！' },
  { color: '#ffffff', name: '?', video: 'question.mov', message: '超ラッキー！何かが起きる！？' }
];

let spinning = false;

startButton.addEventListener('click', () => {
  if (spinning) return;

  spinning = true;
  startButton.style.display = 'none';
  pointer.style.display = 'none';
  message.textContent = '';
  video.pause();
  video.src = '';
  video.style.display = 'none';

  roulette.style.display = 'block';
  roulette.style.transform = 'rotate(0deg)';
  roulette.style.transition = 'none';

  const total = colors.length;
  const selected = Math.floor(Math.random() * total);
  const degPerSlice = 360 / total;
  const offset = degPerSlice / 2;
  const rotation = 360 * 5 + (360 - selected * degPerSlice - offset);

  setTimeout(() => {
    roulette.style.transition = 'transform 5s ease-out';
    roulette.style.transform = `rotate(${rotation}deg)`;
  }, 50);

  setTimeout(() => {
    const result = colors[selected];

    // ルーレットを非表示
    roulette.style.display = 'none';

    document.body.style.backgroundColor = result.color;
    message.textContent = result.message;

    video.src = result.video;
    video.style.display = 'block';
    video.play();

    video.onended = () => {
      video.style.display = 'none';
      roulette.style.display = 'block';
      pointer.style.display = 'block';
      startButton.style.display = 'inline-block';
      spinning = false;
    };
  }, 5200);
});
