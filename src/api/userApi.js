import axiosCilent from "./axiosCilent";

const userApi = {
  register(data) {
    const url = "POST /auth/local/register";
    return axiosCilent.post(url, data);
  },
  login(data) {
    const url = "/auth/local/";
    return axiosCilent.post(url, data);
  },
};
export default userApi;
