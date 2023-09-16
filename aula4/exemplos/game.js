function jokenPO(play1, play2, callback) {

  if (play1 == play2) {
    return "Empate";
  }

  if (play1 == "pedra" && play2 == "tesoura") {
    return `${callback()} 1 Pedra ganha`;
  }

  if (play1 == "pedra" && play2 == "papel") {
    return `${callback()} Papel ganha`;
  }

  if (play1 == "tesoura" && play2 == "papel") {
    return `${callback()} Tesoura ganha`;
  }

  if (play1 == "tesoura" && play2 == "pedra") {
    return `${callback()} Pedra ganha`;
  }

  if (play1 == "papel" && play2 == "pedra") {
    return `${callback()} Papel ganha`;
  }

  if (play1 == "papel" && play2 == "tesoura") {
    return `${callback()} Tesoura ganha`;
  }
}

function player(name) {
  return name;
}

const player1 = "pedra";
const player2 = "tesoura";

console.log(
  jokenPO(player1, player2, function () {
    return player("Felipe");
  })
);
