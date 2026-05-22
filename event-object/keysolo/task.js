class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.timer__value');

    this.timeLeft = 0;
    this.timerId = null;

    this.reset();
    this.registerEvents();
  }

  reset() {
    this.stopTimer();         
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
  document.addEventListener('keyup', (event) => {
    if (!this.currentSymbol) return;
    const expected = this.currentSymbol.textContent;
    let pressed = event.key;
    if (pressed.length !== 1) return;
    if (!/^[a-zA-Z]$/.test(pressed)) return;
    if (expected.toLowerCase() === pressed.toLowerCase()) {
      this.success();
    } else {
      this.fail();
    }
  });
}

  success() {
    if (this.currentSymbol.classList.contains("symbol_current"))
      this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    this.stopTimer();

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  fail() {
    this.stopTimer();
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.startTimer(word.length);
  }

  getWord() {
    const words = [
      'bob', 'awesome', 'netology', 'hello', 'kitty',
      'rock', 'youtube', 'popcorn', 'cinema', 'love', 'javascript'
    ];
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map((s, i) => `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`)
      .join('');
    this.wordElement.innerHTML = html;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  startTimer(seconds) {
    if (this.timerId) clearInterval(this.timerId);
    this.timeLeft = seconds;
    this.updateTimerDisplay();
    this.timerId = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();
      if (this.timeLeft <= 0) {
        clearInterval(this.timerId);
        this.timerId = null;
        this.fail();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    if (this.timerElement) {
      this.timerElement.textContent = this.timeLeft;
    }
  }

  stopTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}

new Game(document.getElementById('game'));

