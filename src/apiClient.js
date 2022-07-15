import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {
  constructor(token, logoutHandler){
    this.token = token;
    this.logoutHandler = logoutHandler;
  }


  apiCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      if(error.response.status === 403){
        this.logoutHandler();
        return Promise.reject()
      } else {
      throw error;
      }
    });
  }

//https://www.youtube.com/watch?v=QUC5Lfw3W_Y&list=PLCxZN2AWRdpsoP64CZPEJ1wTeDMzeNGzq&index=48
// 08:54

authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.token
      },
      data,
    }).catch((error) => {
      throw error;
    });
  }

  async login(userName, password) {
    return await axios ({
      method: "post",
      url: `${url}auth`,
      data: {
        userName,
        password
      }
    });
  }

  getAds() {
    return this.authenticatedCall("get", url);
  }

  addAd(name, price) {
    return this.authenticatedCall("post", url, { name, price });
  }

  removeAd(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }

  updateAd(id, name, price) {
    return this.authenticatedCall("put", `${url}${id}`, { name, price });
  }
}
