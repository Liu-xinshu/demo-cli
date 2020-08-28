import axios from 'axios';

const newAxios = axios.create({
	baseURL:BASE_API,
	// timeout: 3000
})


newAxios.interceptors.request.use((config) => {
	return { ...config
	}
}, (err) => Promise.reject(err))


newAxios.interceptors.response.use((res) => {
	// console.log(res, "响应拦截 ！！！")
	return res.data;
}, (err) => Promise.reject(err))
export default newAxios;
