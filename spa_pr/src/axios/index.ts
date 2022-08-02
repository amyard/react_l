import axios from "axios"

// одна точка входа для всех запросов axios
export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})