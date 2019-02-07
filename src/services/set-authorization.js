import axios from 'axios';

function setAuthorization(token) {
  localStorage.setItem("token", token);
  axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
}

export default setAuthorization;