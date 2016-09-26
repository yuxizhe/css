<template>
    <div>
        <form v-on:submit.prevent="addPost">
            标题
            <input type="text" v-model="newBlog.title" name="">
            <br> 内容
            <input type="text" v-model="newBlog.blog" name="">
            <br> 作者
            <input type="text" v-model="newBlog.author" name="">
            <br>
            <input type="submit" name="" value="新建文章">
            </button>
        </form>
        <div>
            <table class="table table-hover">
                <thead>
                    <th>日期</th>
                    <th>标题</th>
                    <th>作者</th>
                    <th>赞</th>
                    <th>删除</th>
                </thead>
                <tbody v-for="blog in blogs">
                    <tr>
                        <td width="10%">{{blog.time}}</td>
                        <td width="60%" :href="'/#!/blog/' + blog.key">{{blog.title}}</td>
                        <td>{{blog.author}}</td>
                        <td @click="likes(blog)" class="like">{{blog.likes}}</td>
                        <td @click="removePost(blog)" class="delete">X</td>
                        <!-- <td>{{user.message}}</td> -->
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import {
    firebaseData
} from './request.js'
import Vue from "vue"

var usersRef = firebaseData('blog');

export default {

    data() {
            return {
                newBlog: {
                    title: '标题测试',
                    blog: '内容测试  内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试',
                    author: 'fire',
                    time: '',
                    commit: [],
                    likes: '3'
                },
                blogs: {}
            }
        },

        created() {
            var a = [];
            var aa;
            var _this = this;
            var keys;

            usersRef.on('value', snapshot => {
                a = snapshot.val();
                if (a == null) return;
                //终于把对象名存储为属性了，终于可以读出对象名了
                keys = Object.keys(a);

                _this.blogs = a;
                for (aa = 0; aa < keys.length; aa++) {
                    _this.blogs[keys[aa]].key = keys[aa];
                    Vue.set(_this.blogs[keys[aa]], 'showw', 0);
                };
            });
        },

        methods: {
            addPost: function() {
                var myDate = new Date();
                this.newBlog.time = myDate.toLocaleDateString();
                usersRef.push(this.newBlog)
                    // this.newBlog.blog = '';
                    // this.newBlog.title = ''

            },
            removePost: function(user) {
                usersRef.child(user.key).remove()
            },
            moveBottom: function() {
                var consoleText = document.getElementById("page3-content");
                consoleText.scrollTop = consoleText.scrollHeight;
            },
            likes: function(blog) {
                blog.likes++;
                usersRef.child(blog.key).update({
                    likes: blog.likes
                });
            }
        }
}
</script>
<style>
</style>
