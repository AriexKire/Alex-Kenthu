document.getElementById('startBtn').addEventListener('click', startGame);

function startGame() {
  const chambers = 7;
  let bullet = Math.floor(Math.random() * chambers) + 1;
  let spunChamber;
  let shot = false;

  document.getElementById('output').innerText = `Chambers: ${chambers}\nYour turn now`;

  function spinChamber() {
    spunChamber = Math.floor(Math.random() * chambers) + 1;
    document.getElementById('output').innerText = 'Spinning the chamber...\nClick...';

    if (spunChamber === bullet) {
      document.getElementById('output').innerText = 'BANG! You got shot. Game over!';
      shot = true;
    } else {
      document.getElementById('output').innerText = 'Lucky bastard';
    }
  }

  function pullTrigger() {
    document.getElementById('output').innerText = 'Pulling the trigger...';

    if (Math.random() < 0.5) {
      document.getElementById('output').innerText = 'BANG! Bad luck. You may Rest In Hell';
      shot = true;
    } else {
      document.getElementById('output').innerText = 'Click... Phew! Lucky bastard';
    }
  }

  while (!shot) {
    let choice = prompt('1. Spin\n2. Shoot\n3. Run');

    switch (parseInt(choice)) {
      case 1:
        spinChamber();
        break;
      case 2:
        pullTrigger();
        break;
      case 3:
        document.getElementById('output').innerText = 'Uh-oh, you get shot from behind by the game master';
        return;
      default:
        document.getElementById('output').innerText = 'UH OH. WHAT DID YOU DO!!!!!';
    }
  }
}
