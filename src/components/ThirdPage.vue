<template>
    <form class="form-inline submit" role="form" v-on:submit.prevent="addUser">
        <input class="form-control" width="10%" v-model="newUser.name">
        <input class="form-control" placeholder="请输入内容" v-model="newUser.message">
        <input class="btn btn-primary" type="submit" value="发送">
    </form>
    <div id="page3-content">
        <table class="table table-hover message-table">
            <thead>
                <tr>
                    <th width="15%">人物</th>
                    <th>消息</th>
                </tr>
            </thead>
            <tbody v-for="user in users">
                <tr>
                    <td>{{user.name}}</td>
                    <td>{{user.message}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import {
    firebaseData
} from './request.js'


var a;
// var usersRef = firebase.database().ref('/message');

var usersRef = firebaseData('message');

usersRef.on('value', function(value) {
    a = value.val()
});

export default {

    data() {
            return {
                newUser: {
                    // 获取浏览器前几个字符
                    name: navigator.userAgent.slice(13, 19),
                    message: ''
                },
                users: {},
                keys: {}

            }
        },
        // firebase:{
        //    users: usersRef
        //  },
        // 从hacker news学来的 终于知道怎么修改data数据了
        created() {
            var a = [];
            var aa;
            var _this = this;

            usersRef.on('value', snapshot => {
                a = snapshot.val();
                //终于把对象名存储为属性了，终于可以读出对象名了
                _this.keys = Object.keys(a);

                _this.users = a;
                for (aa = 0; aa < _this.keys.length; aa++) {
                    _this.users[_this.keys[aa]].key = this.keys[aa];
                };
                // 实例方法  实现 数据更新后，并且DOM更新完成后，执行的函数
                _this.$nextTick(function() {
                    _this.moveBottom();
                });
            });
        },

        methods: {
            addUser: function() {
                // if (this.isValid) {
                usersRef.push(this.newUser)
                    // this.newUser.name = ''
                this.newUser.message = ''
                    // }
            },
            removeUser: function(user) {
                usersRef.child(user.key).remove()
            },
            moveBottom: function() {
                var consoleText = document.getElementById("page3-content");
                //移动能用
                consoleText.scrollTop = consoleText.scrollHeight;
                console.log(consoleText.scrollHeight);
                //桌面能用
                window.scroll(0, consoleText.scrollHeight);
            }
        }
}
</script>
<style>
.message-table {
    margin-bottom: 40px
}

.form-inline.submit {
    position: fixed;
    bottom: 3%;
    width: 70%;
}

#page3-content {
    overflow: auto;
    height: 100%;
}

@media (max-width: 768px) {
    .form-inline .form-control {
        display: inline-block;
        width: auto;
        vertical-align: middle;
    }
}
</style>
