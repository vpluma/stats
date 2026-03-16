var stats = {
      homeGoals: 0,
      homeAssists: 0,
      homeShots: 0,
      homeShotsOnTarget: 0,
      awayGoals: 0,
      awayAssists: 0,
      awayShots: 0,
      awayShotsOnTarget: 0
    };

function change(stat, amount) {
  if (stats[stat] + amount >= 0) {
    stats[stat] = stats[stat] + amount;
    document.getElementById(stat).innerText = stats[stat];
  }
}