import request from './request'

export default {
    list: function (query) {
        let githubUsername = 'weblw'
        return request({
            url: `/users/${githubUsername}/gists?page=${query.page}&per_page=${query.pageSize}`
        })
    },
    single: function (id) {
      return request({
          url: '/gists/' + id
      })
    }
}