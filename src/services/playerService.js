import axios from './base';

export default {
  getPlayer(playerId) {
    return axios.get(`/player/${playerId}`)
      .then(response => response.data);
  },
  updateBill(playerId, bill) {
    return axios.post(`/player/${playerId}/bill`, bill)
      .then(response => response.data);
  },
  loadPlayers() {
    return axios.get('/players')
      .then(response => response.data);
  },
  resetDrinks(playerId) {
    return axios.delete(`/player/${playerId}/drinks`)
      .then(response => response.data);
  },
};
