import axios from 'axios';

const shopsService = axios.create({
  baseURL: 'http://localhost:3001/api/shops',
  timeout: 8000,
});

const service = {};

service.get = params => shopsService.get('', { params });
service.getFilters = () => shopsService.get('/filters');

export default service;
