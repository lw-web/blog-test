<template>
  <div>
    <section class="page-header" :style="'background-image: linear-gradient(120deg, '+backgroundColorLeft+', '+backgroundColorRight+');color: '+fontColor+';'">
        <div style="position:absolute; top:20px; right:20px; z-index:2;">
            <el-tooltip effect="dark" :content="fullButton.full?'退出':'全屏'" placement="bottom-end">
                <el-button @click="full" :icon="fullButton.full?'el-icon-close':'el-icon-rank'" circle></el-button>
            </el-tooltip>
        </div>
        <div v-for="(item,index) in randomIcon" :key="'ri'+index" :style="'position:absolute; top:'+item.top+'px; left:'+item.left+'px; z-index:1;'">
            <font :style="'font-size: '+item.size+'px;color:#fff;'">
                <b>♪</b>
            </font>
        </div>
        <h1 class="project-name">{{blogTitle}}</h1>
        <h2 class="project-tagline">{{blogDescribe}}</h2>
        <a :href="'https://github.com/'+githubUsername" class="btn" target="_blank">GitHub主页</a>
        <a href="https://github.com/weblw" class="btn" target="_blank" v-if="!mini">博客源码</a>
    </section>
    <section class="main-content">
        <el-row>
            <el-col :span="4" style="padding-right:10px">
                <sidebar></sidebar>
            </el-col>
            <el-col :span="20" style="padding-left:10px">
                <app-main></app-main>
            </el-col>
        </el-row>
    </section>
    <section class="foot">
        <foot></foot>
    </section>
  </div>
</template>

<script>
import Foot from './components/foot'
import Sidebar from './components/side-bar'
import AppMain from './components/app-main'
export default {
  components: {
    Foot,
    Sidebar,
    AppMain
  },
  data() {
    return {
      backgroundColorLeft: "#155799",
      backgroundColorRight: "#159957",
      fontColor: "#ffffff",
      fullButton: {
        full: false
      },
      randomIcon: [],
      blogTitle: '李伟个人博客',
      blogDescribe: '李伟使用Vue服务端nuxt框架创建的博客',
      githubUsername: 'weblw',
      mini: false
    }
  },
  methods: {
    full() {
      alert('全屏！')
    },
    randomInt(s, e) {
        let d = e - s
        if (d < 0) {
            return s
        }
        let r = Math.random() * d + s
        r = parseInt(r, 10)
        return r
    },
  },
  mounted() {
    let width = window.innerWidth
    for (let i = 0; i < 12; i++) {
        let temp = {}
        let left = this.randomInt(10, width - 310)
        if(left > width/2-150){
            left+=300
        }
        temp["left"] = left
        temp["top"] = this.randomInt(20, 300)
        temp["size"] = this.randomInt(20, 40)
        this.randomIcon.push(temp)
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
<style>
    .page-header {
        padding: 5rem 6rem;
        color: #fff;
        text-align: center;
        background-color: #159957;
        background-image: linear-gradient(120deg, #155799, #159957);
    }

    .project-name {
        font-size: 3.25rem;
        margin-top: 0;
        margin-bottom: 0.1rem;
    }

    .project-tagline {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        font-weight: normal;
        opacity: 0.7;
    }

    .btn:hover {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
    }

    a:hover {
        text-decoration: underline;
    }

    a:active,
    a:hover {
        outline: 0;
    }

    .btn {
        padding: 0.75rem 1rem;
        display: inline-block;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.7);
        background-color: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        border-style: solid;
        border-width: 1px;
        border-radius: 0.3rem;
        transition: color 0.2s, background-color 0.2s, border-color 0.2s;
    }

    a {
        color: #1e6bb8;
        text-decoration: none;
    }

    .btn+.btn {
        margin-left: 1rem;
    }

    .main-content {
        max-width: 100rem;
        padding: 30px 0px 30px 0px;
        margin: 0 auto;
        font-size: 1.1rem;
        word-wrap: break-word;
        min-height: calc(100vh - 480px);
    }

    .foot {
        max-width: 110rem;
        margin: 0 auto;
        font-size: 12px !important;
        color: #586069 !important;
        word-wrap: break-word;
    }
</style>
