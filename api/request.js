import axios from 'axios'
import Vue from 'vue'


const service = axios.create({
    baseURL: "https://vercel-server.vercel.app/api",
    timeout: 15000
})

// service.interceptors.request.use(
//     config => {
//         return config
//     },
//     error => {}
// )


service.interceptors.response.use(
    response => {
        let responseJson = response.data
        return response
    },
    error => {
        let message
        switch (error.response.status) {
            case 401:
                message = "Token错误"
                break
            default:
                message = error.response.data.message
                break
        }
        Vue.prototype.$message({
            message: message,
            type: 'error'
        })
        return Promise.reject('error')
    }
)

export default service
