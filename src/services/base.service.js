import axios from 'axios';

const BaseService = axios.create ({
    baseURL: 'http://localhost:3000/api/v1',
})

export default BaseService;