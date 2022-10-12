import axios from "axios";
const connectionURL = import.meta.env.VITE_REACT_APP_BASE_URL;

const Axios = axios.create({
  baseURL: connectionURL,
});

export default Axios;
