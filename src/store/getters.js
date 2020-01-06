function addBillTotal(player, drinks) {
  const transformedPlayer = player;
  if (player && player.bill && drinks) {
    transformedPlayer.bill.total = Object.keys(player.bill).reduce((accumulator, drinkId) => {
      const { price } = drinks.find(d => d.id === drinkId);
      return accumulator + price * player.bill[drinkId];
    }, 0);
  }
  return transformedPlayer;
}

export default {
  allDrinks: state => state.drinks,
  allPlayers: state => state.allPlayers
    && state.allPlayers.map(p => addBillTotal(p, state.drinks)),
  playersWithBill: (state, getters) => getters.allPlayers && getters.allPlayers.filter(p => p.bill),
  playerDrinksById: state => drinkId => state.player && state.player.bill[drinkId],
};
