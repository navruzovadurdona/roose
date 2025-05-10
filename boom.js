<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Игра Бомба</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background: #000;
      color: white;
      text-align: center;
      overflow: hidden;
    }

    #bomba {
      font-size: 80px;
      cursor: pointer;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    #message {
      margin-top: 20px;
      font-size: 28px;
    }

    #timer {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 24px;
    }
  </style>
</head>
<body>

  <div id="timer">⏱️ 3</div>
  <div id="bomba">💣</div>
  <div id="message"></div>

  <script>
    const bomba = document.getElementById('bomba');
    const timerDisplay = document.getElementById('timer');
    const message = document.getElementById('message');

    let countdown = 3;
    let timer = setInterval(() => {
      countdown--;
      timerDisplay.textContent = `⏱️ ${countdown}`;
      if (countdown === 0) {
        clearInterval(timer);
        bomba.textContent = '💥';
        message.textContent = 'Бомба взорвалась! Ты проиграл 😵';
        bomba.style.pointerEvents = 'none';
      }
    }, 1000);

    bomba.onclick = () => {
      clearInterval(timer);
      bomba.textContent = '✅';
      message.textContent = 'Успел! Бомба обезврежена! 🎉';
      bomba.style.pointerEvents = 'none';
    };
  </script>

</body>
</html>
