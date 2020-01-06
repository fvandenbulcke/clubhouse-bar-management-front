import MUTATION_TYPE from './mutation-types';
import drinkService from '@/services/drinkService';
import playerService from '@/services/playerService';

export default {
  /* authentificateUser({ commit }, { login }) {
    return userService.authenticateUser(login)
      .then((user) => {
        commit(MUTATION_TYPE.UPDATE_USER, user);
      });
  }, */
  loadDrinks({ commit }) {
    return drinkService.loadDrinks()
      .then((drinks) => {
        commit(MUTATION_TYPE.UPDATE_DRINKS, drinks);
      });
  },
  getPlayer({ commit }) {
    const playerId = '5dff691b14d4da3a28906b59';
    return playerService.getPlayer(playerId)
      .then((player) => {
        commit(MUTATION_TYPE.UPDATE_PLAYER, player);
      });
  },
  updatePlayerBill({ state, commit }, { drink, quantity }) {
    const playerId = state.player._id;
    const bill = {
      drinkId: drink,
      quantity,
    };
    return playerService.updateBill(playerId, bill)
      .then((player) => {
        commit(MUTATION_TYPE.UPDATE_PLAYER, player);
      });
  },
  loadPlayers({ commit }) {
    return playerService.loadPlayers()
      .then((players) => {
        commit(MUTATION_TYPE.UPDATE_PLAYERS, players);
      });
  },
  resetDrinks({ dispatch }, playerId) {
    console.log('reset drinks');
    return playerService.resetDrinks(playerId)
      .then(() => dispatch('loadPlayers'));
  },
};
