import axios from "../setup/axios";
const API_URL = "/api/v1/"
const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};

const register = (email, password, name, phonenumber) => {
  return axios.post("/api/v1/register", { email, password, name, phonenumber });
};
const authService = {
  register,
  login,
  logout,
};

export default authService;
