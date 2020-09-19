exports.ids = [5];
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

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/social.vue?vue&type=template&id=1bf20608&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}]},[_c('el-row',[_c('el-col',{attrs:{"span":8}},[_c('el-card',{staticStyle:{"min-height":"400px","margin-bottom":"20px"},attrs:{"shadow":"never"}},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v(_vm._s(_vm.githubUsername))])]),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"padding":"0px 10px 20px 0px"},attrs:{"span":9}},[_c('img',{staticStyle:{"width":"100%","border-radius":"5px"},attrs:{"src":_vm.avatarUrl}}),_vm._v(" "),_c('div',{staticStyle:{"padding":"10px"}},[_c('font',{staticStyle:{"font-size":"26px","line-height":"40px","font-weight":"600"}},[_vm._v(_vm._s(_vm.name)+"\n                        "),_c('br')]),_vm._v(" "),_c('font',{staticStyle:{"font-size":"20px","font-style":"normal","font-weight":"300","line-height":"35px","color":"#666"}},[_vm._v(_vm._s(_vm.githubUsername)+"\n                        "),_c('br')]),_vm._v(" "),(_vm.location)?_c('font',{staticStyle:{"font-size":"14px","line-height":"20px","color":"#606266"}},[_c('i',{staticClass:"el-icon-location-outline"}),_vm._v("  "+_vm._s(_vm.location)+"\n                        "),_c('br')]):_vm._e(),_vm._v(" "),(_vm.email)?_c('font',{staticStyle:{"font-size":"14px","line-height":"20px","color":"#606266"}},[_c('i',{staticClass:"el-icon-message"}),_vm._v("  "+_vm._s(_vm.email)+"\n                        "),_c('br')]):_vm._e(),_vm._v(" "),(_vm.blog)?_c('font',{staticStyle:{"font-size":"14px","color":"#606266"}},[_c('i',{staticClass:"el-icon-edit-outline"}),_vm._v("  \n                        "),_c('a',{attrs:{"target":"_blank"}},[_vm._v(_vm._s(_vm.blog))]),_vm._v(" "),_c('br')]):_vm._e()],1)]),_vm._v(" "),_c('el-col',{staticStyle:{"padding":"0px 20px 20px 10px"},attrs:{"span":15}},[(_vm.bio)?_c('div',{staticStyle:{"width":"100%","min-height":"300px","border-radius":"5px","border":"1px solid #EBEEF5","padding":"10px","font-size":"16px","color":"#6a737d"}},[_vm._v("\n                    "+_vm._s(_vm.bio)+"\n                ")]):_c('div',{staticStyle:{"width":"100%","min-height":"300px","border-radius":"5px","border":"1px solid #EBEEF5","padding":"30px","text-align":"center","font-size":"30px","color":"#dddddd"}},[_c('b',[_vm._v("◔ ‸◔？没有简介")])])])],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/social.vue?vue&type=template&id=1bf20608&

// EXTERNAL MODULE: ./api/request.js
var request = __webpack_require__(92);

// CONCATENATED MODULE: ./api/user.js

/* harmony default export */ var user = ({
  info: function (githubUsername) {
    return Object(request["a" /* default */])({
      url: `/users/${githubUsername}`
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/social.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//

/* harmony default export */ var socialvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      githubUsername: 'weblw',
      name: null,
      avatarUrl: null,
      htmlUrl: null,
      blog: null,
      location: null,
      email: null,
      bio: null,
      followers: null,
      following: null,
      publicRepos: null
    };
  },

  mounted() {
    this.loading = true;
    user.info(this.githubUsername).then(response => {
      let result = response.data;
      this.name = result["name"];
      this.avatarUrl = result["avatar_url"];
      this.htmlUrl = result["html_url"];
      this.blog = result["blog"];
      this.location = result["location"];
      this.bio = result["bio"];
      this.email = result["email"];
      this.followers = result["followers"];
      this.following = result["following"];
      this.publicRepos = result["publicRepos"];
    }).then(() => this.loading = false);
  }

});
// CONCATENATED MODULE: ./pages/user/social.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_socialvue_type_script_lang_js_ = (socialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/social.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_socialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e7c5e5ec"
  
)

/* harmony default export */ var social = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=social.js.map