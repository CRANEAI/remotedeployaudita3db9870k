const axios = require("axios")

axios.defaults.headers.common["Authorization"] = ""

module.exports = {
  client: axios.create({
    baseURL: "",
    responseType: "json",
    timeout: 5000
  }),
  url: "",
  setToken: () => {
    axios.defaults.headers.common["Authorization"] = ""
  }
}
