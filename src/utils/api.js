import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://be-homework.vercel.app/api",
  paramsSerializer(params) {
    const _params = new URLSearchParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key];
        if (Array.isArray(value)) {
          value.forEach(v => _params.append(key, v));
        } else if (typeof value === "object") {
          _params.append(key, JSON.stringify(value));
        } else {
          _params.append(key, value);
        }
      });
    }
    return _params;
  }
});

export default axiosInstance;
