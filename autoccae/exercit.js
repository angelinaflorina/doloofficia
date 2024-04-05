class Game {
  constructor(title, releaseYear, developer = 'Nintendo') {
    this.title = title;
    this.releaseYear = releaseYear;
    this.developer = developer;
  }
}

let games = [
  new Game("Super Mario Bros.", 1985),
  new Game("The Legend of Zelda", 1986),
  new Game("Metroid", 1986),
  new Game("Castlevania", 1986, "Konami"),
  new Game("Mega Man", 1987, "Capcom")
];

const platform = "NES";
