<template>
    <div class="userchoice">
        <div @click="userActive = 0">User</div>
        <div @click="userActive = 1">Message</div>
    </div>
    <div class="users bounceInLeft animated
" v-show="!userActive">
        <div class="people" href="" v-for="peo in people" @click='startChart(peo)'>
            <div class="img"><img src="{{peo.url}}"></div>
            <div class="name">{{peo.name}}</div>
            <div class="title">{{peo.title}}</div>
            <div class="online" v-bind:class="{active:peo.online}"></div>
        </div>
    </div>
    <form v-show="userActive" class="form-inline submit" role="form" v-on:submit.prevent="addUser">
        <input class="form-control animated tada" width="10%" v-model="newUser.name">
        <input class="form-control" placeholder="请输入内容" v-model="newUser.message">
        <input class="btn btn-primary" type="submit" value="发送">
    </form>
    <div v-show="userActive" id="page3-content" class='bounceInDown animated'>
        <table class="table table-hover message-table ">
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
                keys: {},
                userActive: false,
                people: {
                    '1': {
                        name: '王羲之',
                        title: '工程师',
                        url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                        online: true
                    },
                    '2': {
                        name: '乾隆',
                        title: 'friend',
                        url: 'https://s3.amazonaws.com/uifaces/faces/twitter/markmushiva/128.jpg',
                        online: false
                    },
                    '3': {
                        name: '苏轼',
                        title: 'friend',
                        url: 'https://s3.amazonaws.com/uifaces/faces/twitter/scottohara/128.jpg',
                        online: true
                    },
                    '4': {
                        name: '王国维',
                        title: 'teacher',
                        url: 'https://s3.amazonaws.com/uifaces/faces/twitter/shalt0ni/128.jpg',
                        online: true
                    }
                }

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

            this.userActive = false;
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
            },
            startChart: function(peo) {
                this.newUser.name = peo.name;
                this.userActive = true
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

.userchoice {
    position: fixed;
    top: 90px;
    /*background-color: red;*/
    height: 40px;
    width: 80%;
    display: flex;
    color: white;
    text-align: center;
    font-size: 20px
}

.userchoice div {
    flex: 1
}

.users {
    margin-top: 50px;
    background-color: #a8bcf5;
    height: 100%;
    width: 350px;
}

.people {
    margin: 20px;
    height: 60px
}

.people .img {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 3px 2px rgba(0, 0, 0, .4);
}

.people .name {
    position: relative;
    left: 80px;
    top: -50px;
    font-size: 20px;
}

.people .title {
    position: relative;
    left: 80px;
    top: -50px;
    font-size: 15px;
}

.people .online {
    position: relative;
    left: 280px;
    top: -85px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 3px 2px rgba(0, 0, 0, .4);
    background-color: grey;
}

.people .online.active {
    background-color: green;
}

img {
    width: 100%
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
