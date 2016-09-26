<template>
    <div class="row">
        <div v-for="question in cook" class="col-sm-6 col-md-3" @click="jump(question)">
            <div class=" thumbnail ">
                <img class="img2 " src="http://tnfs.tngou.net/image{{question.img}} ">
                <div class="caption ">
                    <h3>{{question.name}}</h3>
                    <p>{{question.keywords}}</p>
                    <p>
                        <a class="btn btn-primary " role="button " @click="jump(question)">
                        详细
                    </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    request
} from './request.js'

export default {

    //新建的data还必须用这种形式呢，之前的形式添加不进去
    data() {
            return {
                cook: []
            }
        },

        route: {
            data(trans) {
                var _this = this;
                request('http://apis.baidu.com/tngou/cook/list').then(result => {
                    _this.cook = result.tngou;
                    console.log(result)
                });
                trans.next();
            }
        },
        methods: {
            jump: function(q) {
                // JS页面跳转
                window.location.href = '/#!/food/' + q.id;
            }
        }


}
</script>
</style>
