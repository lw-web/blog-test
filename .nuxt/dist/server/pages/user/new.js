exports.ids = [3];
exports.modules = {

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


const service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://api.github.com",
  timeout: 15000
}); // service.interceptors.request.use(
//     config => {
//         return config
//     },
//     error => {}
// )

service.interceptors.response.use(response => {
  let responseJson = response.data;
  return response;
}, error => {
  let message;

  switch (error.response.status) {
    case 401:
      message = "Token错误";
      break;

    default:
      message = error.response.data.message;
      break;
  }

  vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$message({
    message: message,
    type: 'error'
  });
  return Promise.reject('error');
});
/* harmony default export */ __webpack_exports__["a"] = (service);

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/new.vue?vue&type=template&id=addc57a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"min-height":"600px"}},[(_vm.blog.id)?_c('el-card',{staticStyle:{"min-height":"400px"},attrs:{"shadow":"never"}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v(_vm._s(_vm.blog.title))])]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"0.9rem","line-height":"1.5","color":"#606c71"}},[_vm._v("\n            发布 "+_vm._s(_vm.blog.createTime)+"\n            "),_c('br'),_vm._v(" 更新 "+_vm._s(_vm.blog.updateTime)+"\n        ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"1.1rem","line-height":"1.5","color":"#303133","border-bottom":"1px solid #E4E7ED","padding":"5px 0px 5px 0px"}},[_c('pre',{staticStyle:{"font-family":"'微软雅黑'"}},[_vm._v(_vm._s(_vm.blog.description))])]),_vm._v(" "),_c('div',{staticClass:"markdown-body",staticStyle:{"padding-top":"20px"},domProps:{"innerHTML":_vm._s(_vm.blog.content)}})]):_vm._e(),_vm._ssrNode(" "),(!_vm.blog.id)?_c('el-card',{staticStyle:{"margin-bottom":"20px","padding":"20px 0px 20px 0px","text-align":"center"},attrs:{"shadow":"never"}},[_c('font',{staticStyle:{"font-size":"30px","color":"#dddddd"}},[_c('b',[_vm._v("没有更新 ╮(๑•́ ₃•̀๑)╭")])])],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/new.vue?vue&type=template&id=addc57a4&

// EXTERNAL MODULE: ./api/request.js
var request = __webpack_require__(92);

// CONCATENATED MODULE: ./api/gist.js

/* harmony default export */ var gist = ({
  list: function (query) {
    let githubUsername = 'weblw';
    return Object(request["a" /* default */])({
      url: `/users/${githubUsername}/gists?page=${query.page}&per_page=${query.pageSize}`
    });
  },
  single: function (id) {
    return Object(request["a" /* default */])({
      url: '/gists/' + id
    });
  }
});
// EXTERNAL MODULE: external "mavon-editor"
var external_mavon_editor_ = __webpack_require__(91);
var external_mavon_editor_default = /*#__PURE__*/__webpack_require__.n(external_mavon_editor_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/new.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var newvue_type_script_lang_js_ = ({
  data() {
    return {
      query: {
        page: 1,
        pageSize: 1
      },
      loading: false,
      blog: {
        id: "",
        title: "",
        content: "",
        description: "",
        createTime: "",
        updateTime: ""
      }
    };
  },

  mounted() {
    this.loading = true;
    gist.list(this.query).then(response => {
      let result = response.data;

      if (!result || result.length == 0) {
        this.loading = false;
        return;
      }

      for (let key in result[0].files) {
        this.blog.id = result[0]['id'];
        break;
      }

      gist.single(this.blog.id).then(response => {
        let result = response.data;

        for (let key in result.files) {
          this.blog['title'] = key;
          this.blog['content'] = this.markdown(result.files[key]['content']);
          this.blog['description'] = result['description'];
          this.blog['createTime'] = this.utcToLocal(result['created_at']);
          this.blog['updateTime'] = this.utcToLocal(result['updated_at']);
          break;
        }
      }).then(() => this.loading = false);
    });
  },

  methods: {
    utcToLocal(time) {
      let formatNum = num => {
        return num >= 10 ? num : '0' + num;
      };

      let arr = time.split(/[^0-9]/);
      let worldDate = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
      let localDate = new Date(worldDate.getTime() + 8 * 60 * 60 * 1000);
      return formatNum(localDate.getFullYear()) + "-" + formatNum(localDate.getMonth() + 1) + "-" + formatNum(localDate.getDate()) + " " + formatNum(localDate.getHours()) + ":" + formatNum(localDate.getMinutes()) + ":" + formatNum(localDate.getSeconds());
    },

    markdown(value) {
      return external_mavon_editor_default.a.markdownIt.render(value);
    }

  }
});
// CONCATENATED MODULE: ./pages/user/new.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_newvue_type_script_lang_js_ = (newvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/new.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_newvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "051a7e5a"
  
)

/* harmony default export */ var user_new = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=new.js.map