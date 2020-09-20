import request from './request'

export default {
    info:function (githubUsername) {
        return request({
            url: `/user?githubUsername=${githubUsername}`
        })
    }
}