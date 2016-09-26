import App from './App'
import HomePage from './components/home.vue'
import ChartPage from './components/ThirdPage.vue'

Vue.config.debug = true;

Vue.use(VueRouter)

var router = new VueRouter({})

router.map({

    'chats': {
        component: ChartPage
    }

})

router.redirect({
    // 重定向任意未匹配路径到 /news
    '*': ''
})



router.start(App, '#app')
