import App from './App'

Vue.config.debug = true;

Vue.use(VueRouter)

var router = new VueRouter({})

router.map({

})

router.redirect({
    // 重定向任意未匹配路径到 /news
    '*': ''
})



router.start(App, '#app')
