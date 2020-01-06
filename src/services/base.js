import axios from 'axios';
import config from '@/configuration';

const instance = axios.create({
  baseURL: `${config.clubhouse.api.url}/clubhouse`,
  timeout: 1000,
});
export default instance;
