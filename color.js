document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  const roulette = document.getElementById('roulette');
  const pointer = document.getElementById('pointer');
  const video = document.getElementById('colorVideo');
  const message = document.getElementById('resultMessage');
  let isSpinning = false;

  const segments = [
    { color: 'red', bg: '#ff4d4d', msg: '今日のあなたは情熱的！' },
    { color: 'blue', bg: '#4d79ff', msg: '冷静な判断が吉' },
    { color: 'green', bg: '#33cc33', msg: '自然体が幸運を呼ぶ' },
    { color: 'yellow', bg: '#ffff66', msg: 'ひらめきが鍵になる' },
    { color: 'purple', bg: '#b266ff', msg: '感性が冴え渡る一日' },
    { color: 'orange', bg: '#ff9933', msg: '元気ハツラツに行動しよう！' },
    { color: 'pink', bg: '#ff99cc', msg: '優しさが運を呼び込む' },
    { color: 'brown', bg: '#a0522d', msg: '堅実な行動が吉' },
    { color: 'black', bg: '#333333', msg: 'クールに決めて運気上昇' },
    { color: 'question', bg: '#ffffff', msg: '何が起きるか、全ては運次第…！' }
  ];

  const totalSegments = segments.length;
  const degPerSegment = 360 / totalSegments;

  startButton.addEventListener('click', () => {
    if (isSpinning) return;
    isSpinning = true;

    // 初期化
    video.style.display = 'none';
    message.textContent = '';
    pointer.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.backgroundColor = '#f0f0f0';
    roulette.style.display = 'block';

    // 回転ロジック
    const selectedIndex = Math.floor(Math.random() * totalSegments);
    const extraRotation = 360 * 5;
    const rotateTo = extraRotation + (360 - selectedIndex * degPerSegment - degPerSegment / 2);

    roulette.style.transition = 'transform 5s ease-out';
    roulette.style.transform = `rotate(${rotateTo}deg)`;

    setTimeout(() => {
      const result = segments[selectedIndex];
      roulette.style.display = 'none';
      video.src = `./${result.color}.mov`;
      video.style.display = 'block';
      document.body.style.backgroundColor = result.bg;
      pointer.style.display = 'none';
      message.textContent = result.msg;

      video.play();

      video.onended = () => {
        video.style.display = 'none';
        pointer.style.display = 'block';
        document.body.style.overflow = 'auto';
        isSpinning = false;
      };
    }, 5000);
  });
});
