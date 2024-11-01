const generateRandomIndex = (length) => Math.floor(Math.random() * 10) % length;

const getRandomWord = () => {
  const words = [
    "dream",
    "guard",
    "flood",
    "adult",
    "novel",
    "quill",
    "prose",
    "world",
    "zesty",
    "gleam",
    "zappy",
    "story",
    "brisk",
    "broad",
    "broil",
    "broke",
    "brood",
    "bylaw",
    "sight",
    "alarm",
    "force",
    "hello",
  ];

  const randomIndex = generateRandomIndex(words.length);
  return words[randomIndex];
};

const setupGame = () => {
  const guessButton = document.querySelector("#guess-button");
  const guessedWordElement = document.querySelector("#guess-area");

  const word = getRandomWord();
  console.log(word);
  
  const totalChance = 6;
  const wordle = new Wordle(word);
  const game = new Game(wordle, totalChance);
  const renderer = new Renderer();
  const gameStorage = new GameStorage();
  const controller = new GameController(game, renderer, gameStorage);
  controller.renderPreviousScore();

  guessButton.onclick = () => {
    const guessedWord = guessedWordElement.value.toUpperCase();
    controller.takeGuess(guessedWord);
  };
};

window.onload = () => {
  setupGame();
};
