/* eslint no-param-reassign: ["error", { "props": false }] */
import MUTATION_TYPE from './mutation-types';

export default {
  [MUTATION_TYPE.UPDATE_DRINKS](state, drinks) {
    state.drinks = drinks;
  },
  [MUTATION_TYPE.UPDATE_PLAYER](state, player) {
    state.player = player;
  },
  [MUTATION_TYPE.UPDATE_PLAYERS](state, players) {
    state.allPlayers = players;
  },
};
