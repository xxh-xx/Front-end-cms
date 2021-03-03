import axios from "axios";
import { Message } from "element-ui";

const request = function request(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8001",
    timeout: 5000,
  });

  // 添加响应拦截器
  instance.interceptors.response.use(
    function(response) {
      // 对响应数据做点什么
      if (response.data.code == 2000) {
        return response;
      }

      Message.error({
        message: response.data.message,
      });

      return response;
    },
    function(error) {
      // 对响应错误做点什么
      Message.error({
        message: error,
      });
      return Promise.reject(error);
    }
  );

  return instance(config);
};

export default request;
