<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Кликай на призрака!</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background: #111;
      color: white;
      font-family: sans-serif;
    }

    #score {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 24px;
    }

    #ghost {
      position: absolute;
      font-size: 50px;
      cursor: pointer;
      transition: top 0.3s, left 0.3s;
      animation: float 2s ease-in-out infinite;
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
  </style>
</head>
<body>

  <div id="score">Очки: 0</div>
  <div id="ghost">👻</div>

  <script>
    const ghost = document.getElementById("ghost");
    const scoreText = document.getElementById("score");
    let score = 0;

    function moveGhost() {
      const x = Math.random() * (window.innerWidth - 50);
      const y = Math.random() * (window.innerHeight - 50);
      ghost.style.left = x + "px";
      ghost.style.top = y + "px";
    }

    ghost.onclick = () => {
      score++;
      scoreText.textContent = "Очки: " + score;
      moveGhost();
    };

    setInterval(moveGhost, 2000);
    moveGhost();
  </script>

</body>
</html>
