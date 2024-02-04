import axios from "axios";

export default axios.create({
    params: {
        baseURL: 'https://api.rawg.io/api',
        key: '6d925c63b2464907bd15222c125e8ef5'
    }
})