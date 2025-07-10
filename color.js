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
  video.style.display = 'none';
  video.pause();
  video.src = '';

  const totalSlices = colors.length;
  const selected = Math.floor(Math.random() * totalSlices);
  const degreesPerSlice = 360 / totalSlices;
  const offset = degreesPerSlice / 2;
  const endDeg = 360 * 5 + (360 - selected * degreesPerSlice - offset);

  roulette.style.transition = 'transform 5s ease-out';
  roulette.style.transform = `rotate(${endDeg}deg)`;

  setTimeout(() => {
    const result = colors[selected];
    document.body.style.backgroundColor = result.color;
    message.textContent = result.message;
    video.src = result.video;
    video.style.display = 'block';
    video.play();

    video.onended = () => {
      startButton.style.display = 'inline-block';
      pointer.style.display = 'block';
      spinning = false;
    };
  }, 5200);
});
