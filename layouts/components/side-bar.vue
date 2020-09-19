<template>
    <div>
        <el-card shadow="never">
            <el-menu :default-active="active" @select="onSelect">
                <el-menu-item v-for="item in constantRouterMap"
                    :key="item.path" :index="item.path">
                    <template v-if="item.meta&&item.meta.type=='user'&&(token||!item.meta.LoginRequired)&&(!mini||!item.meta.mini)">
                      <i :class="item.meta.icon"></i>
                      <span slot="title">{{item.meta.title}}</span>
                    </template>                    
                </el-menu-item>
            </el-menu>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                constantRouterMap: [
                    {
                        path: '/user/new',
                        meta: {
                            type: "user",
                            icon: 'el-icon-star-off',
                            title: '最新动态'
                        },
                    },
                    {
                        path: '/user/social',
                        meta: {
                            type: "user",
                            icon: 'el-icon-mobile-phone',
                            title: '社交圈'
                        },
                    },
                    {
                        path: '/user/blog',
                        meta: {
                            type: "user",
                            icon: 'el-icon-edit-outline',
                            title: '博客列表'
                        },
                    },
                    {
                        path: '/user/project',
                        meta: {
                            type: "user",
                            icon: 'el-icon-service',
                            title: '开源项目'
                        },
                    },
                ],
                active: "",
                parentUrl: "",
                menuList: [],
                token: '',
                githubUsername: 'weblw',
                mini: true
            }
        },
        mounted() {
            let arr = this.$route.path.split("/")
            this.active = "/" + arr[1] + "/" + arr[2]
        },
        methods: {
            onSelect(index) {
                this.$router.push(index)
            }
        }
    }
</script>