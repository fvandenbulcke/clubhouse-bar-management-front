import axios from './base';

export default {
  loadDrinks() {
    return axios.get('/drinks')
      .then(response => response.data);
  },
};
