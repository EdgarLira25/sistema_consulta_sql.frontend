import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', 

  headers: {
    'Content-Type': 'application/json',
    "ngrok-skip-browser-warning": "69420"
  }

});

export default api;
