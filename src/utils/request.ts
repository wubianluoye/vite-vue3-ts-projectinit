import axios from "axios"

const request = axios.create({
  // baseURL: '',
  timeout: 6000,
})

export default request
