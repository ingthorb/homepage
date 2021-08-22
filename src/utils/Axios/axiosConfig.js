import axios from "axios";
const axiosConfig = axios.create({
	baseURL: `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API}&q=Bern&aqi=no`,
	xsrfCookieName: "csrftoken",
	xsrfHeaderName: "X-CSRFTOKEN"
});

axiosConfig.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default axiosConfig;