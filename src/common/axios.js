import axios from "axios";

let store;

const instance = axios.create({
  baseURL: "https://salty-temple-87001.herokuapp.com",
});
instance.defaults.headers.common["Authorization"] = "3dzes21erf";

export { instance };
