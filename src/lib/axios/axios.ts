import Axios from "axios"

const instance = Axios.create({})

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (Axios.isAxiosError(err)) {
      if (err.response?.status === 401) {
        if (window.location.pathname !== "/login") {
          window.location.href = "/login"
        }
      }
      return Promise.reject(err.message)
    }
  }
)

export default instance
