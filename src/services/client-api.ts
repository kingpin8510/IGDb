import axios from "axios";

export default axios.create({
    params: {
        baseURL: 'https://api.rawg.io/api',
        key: '04e4fac002134af3909928c58bb94e34'
    }
})