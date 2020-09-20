import request from './request'

export default {
    list: function (query) {
        let githubUsername = 'weblw'
        return request({
            url: `/list/?githubUsername=${githubUsername}&page=${query.page}&pageSize=${query.pageSize}`
        })
    },
    single: function (id) {
      return request({
          url: '/single/?id=' + id
      })
    }
}