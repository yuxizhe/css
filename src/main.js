import App from './App'
import HomePage from './components/home.vue'
import ChartPage from './components/ThirdPage.vue'
import FoodPage from './components/food.vue'
import CookDetailPage from './components/CookDetailPage.vue'

Vue.config.debug = true;

Vue.use(VueRouter)

var router = new VueRouter({})

router.map({

    'chats': {
        component: ChartPage
    },
    'food': {
        component: FoodPage
    },
    '/food/:id': {
        component: CookDetailPage
    }

})

router.redirect({
    // 重定向任意未匹配路径到 /news
    '*': ''
})



router.start(App, '#app')
