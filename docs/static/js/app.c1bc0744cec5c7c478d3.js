webpackJsonp([2,0],[function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var n=o(87),i=s(n),a=o(93),r=(s(a),o(91)),c=s(r),u=o(92),d=s(u),l=o(88),p=s(l),f=o(89),v=s(f),m=o(90),h=s(m);Vue.config.debug=!0,Vue.use(VueRouter);var b=new VueRouter({});b.map({chats:{component:c["default"]},food:{component:d["default"]},"/food/:id":{component:p["default"]},movie:{component:v["default"]},SMZDM:{component:h["default"]}}),b.redirect({"*":""}),b.start(i["default"],"#app")},,,,,,function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function n(e){return c?wilddog.sync().ref("/"+e):firebase.database().ref("/"+e)}function i(e){return new r["default"](function(t){var o=new XMLHttpRequest;o.open("GET",e),o.setRequestHeader("apikey","e4288f19fe0231d205fd43745d7b15fe"),o.send(),o.addEventListener("load",function(){t(JSON.parse(this.response))})})}Object.defineProperty(t,"__esModule",{value:!0});var a=o(42),r=s(a);t.firebaseData=n,t.request=i;var c=1;if(c){var u={syncDomain:"yuxizhe.wilddog.com",syncURL:"https://yuxizhe.wilddogio.com"};wilddog.initializeApp(u)}else{var u={apiKey:"AIzaSyD4az7go2CWyb-Yy_2wHISnfoytLEzUg-4",authDomain:"yuxizhe2008.firebaseapp.com",databaseURL:"https://yuxizhe2008.firebaseio.com",storageBucket:""};firebase.initializeApp(u)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{sidebar_show:!1,nav_show:!1}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(6);t["default"]={data:function(){return{CookBook:{}}},route:{data:function(e){var t=e.to,o=this;(0,s.request)("http://apis.baidu.com/tngou/cook/show?id="+t.params.id).then(function(e){o.CookBook=e,console.log(e)}),console.log("HI")}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(6),n=(0,s.firebaseData)("rss");t["default"]={data:function(){return{movies:{}}},created:function(){var e,t=[],o=this;n.on("value",function(s){if(t=s.val(),null!=t)for(o.movies=t,e=0;e<t.length;e++)o.movies[e].key=e})},methods:{}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(6),n=(0,s.firebaseData)("SMZDM");t["default"]={data:function(){return{movies:{}}},created:function(){var e,t=[],o=this;n.on("value",function(s){if(t=s.val(),null!=t)for(o.movies=t,e=0;e<t.length;e++)o.movies[e].key=e})},methods:{}}},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n,i=o(41),a=s(i),r=o(6),c=(0,r.firebaseData)("message");c.on("value",function(e){n=e.val()}),t["default"]={data:function(){return{newUser:{name:navigator.userAgent.slice(13,19),message:""},users:{},keys:{},userActive:!1,people:{1:{name:"王羲之",title:"工程师",url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",online:!0},2:{name:"乾隆",title:"friend",url:"https://s3.amazonaws.com/uifaces/faces/twitter/markmushiva/128.jpg",online:!1},3:{name:"苏轼",title:"friend",url:"https://s3.amazonaws.com/uifaces/faces/twitter/scottohara/128.jpg",online:!0},4:{name:"王国维",title:"teacher",url:"https://s3.amazonaws.com/uifaces/faces/twitter/shalt0ni/128.jpg",online:!0}}}},created:function(){var e,t=this,o=[],s=this;this.userActive=!1,c.on("value",function(n){for(o=n.val(),s.keys=(0,a["default"])(o),s.users=o,e=0;e<s.keys.length;e++)s.users[s.keys[e]].key=t.keys[e];s.$nextTick(function(){s.moveBottom()})})},methods:{addUser:function(){c.push(this.newUser),this.newUser.message=""},removeUser:function(e){c.child(e.key).remove()},moveBottom:function(){var e=document.getElementById("page3-content");e.scrollTop=e.scrollHeight,console.log(e.scrollHeight),window.scroll(0,e.scrollHeight)},startChart:function(e){this.newUser.name=e.name,this.userActive=!0}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(6);t["default"]={data:function(){return{cook:[]}},route:{data:function(e){var t=this;(0,s.request)("http://apis.baidu.com/tngou/cook/list").then(function(e){t.cook=e.tngou,console.log(e)}),e.next()}},methods:{jump:function(e){window.location.href="/#!/food/"+e.id}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports=' <div class=mobile> <div class=header> <span @click="sidebar_show=1" class=sidebar-icon> <i class=ion-navicon-round></i> <span>Home</span> </span> </div> <div class=routerview> <router-view></router-view> </div> <div class=sidebar v-bind:class={active:sidebar_show}> <div class=sidebar-overlay @click="sidebar_show=0"> </div> <div class=sidebar-content> <h3>明其道不计其功 <div class=nav-left @click="sidebar_show=0"> <a href=#home><span class=ion-ios-home-outline></span> 主页 </a> <a href=#chats><span class=ion-ios-chatboxes-outline></span> 聊天室</a> <a href=#food><span class=ion-pizza></span> 菜谱</a> <a href=#movie><span class=ion-ios-film-outline></span> 电影</a> <a href=#SMZDM><span class=ion-ios-cart-outline></span> 值得买</a> </div> </h3></div> </div> <div class=nav v-bind:class={active:nav_show}> <a href=#home class="nav-item nav-count-1"> <i class=ion-ios-home-outline></i> </a> <a href=#food class="nav-item nav-count-2"> <i class=ion-pizza></i> </a> <a href=#chats class="nav-item nav-count-3"> <i class=ion-ios-chatboxes-outline></i> </a> <a href=#movie class="nav-item nav-count-4"> <i class=ion-ios-film-outline></i> </a> <a href=#SMZDM class="nav-item nav-count-5"> <i class=ion-ios-cart-outline></i> </a> <a @click="nav_show=!nav_show" class=musk> <i class=ion-ios-plus-empty> </i></a> </div> </div> '},function(e,t){e.exports=" {{CookBook.name}} <br> <img width=500 class=card-cover src=http://tnfs.tngou.net/image{{CookBook.img}}> <br> {{CookBook.description}} <br> <br> {{{CookBook.message}}} "},function(e,t){e.exports=' <div> <table class="movie table table-hover"> <thead> </thead> <tbody v-for="movie in movies"> <tr> <td>{{movie.title}}</td> </tr> </tbody> </table> </div> '},function(e,t){e.exports=' <div> <table class="table table-hover"> <thead> </thead> <tbody v-for="movie in movies"> <tr> <td>{{movie.title}}</td> </tr> </tbody> </table> </div> '},function(e,t){e.exports=' <div class=userchoice> <div @click="userActive = 0">User</div> <div @click="userActive = 1">Message</div> </div> <div class="users bounceInLeft animated" v-show=!userActive> <div class=people href="" v-for="peo in people" @click=startChart(peo)> <div class=img><img src={{peo.url}}></div> <div class=name>{{peo.name}}</div> <div class=title>{{peo.title}}</div> <div class=online v-bind:class={active:peo.online}></div> </div> </div> <form v-show=userActive class="form-inline submit" role=form v-on:submit.prevent=addUser> <input class="form-control animated tada" width=10% v-model=newUser.name> <input class=form-control placeholder=请输入内容 v-model=newUser.message> <input class="btn btn-primary" type=submit value=发送> </form> <div v-show=userActive id=page3-content class="bounceInDown animated"> <table class="table table-hover message-table"> <thead> <tr> <th width=15%>人物</th> <th>消息</th> </tr> </thead> <tbody v-for="user in users"> <tr> <td>{{user.name}}</td> <td>{{user.message}}</td> </tr> </tbody> </table> </div> '},function(e,t){e.exports=' <div class=row> <div v-for="question in cook" class="col-sm-6 col-md-3" @click=jump(question)> <div class=thumbnail> <img class=img2 src=http://tnfs.tngou.net/image{{question.img}}> <div class=caption> <h3>{{question.name}}</h3> <p>{{question.keywords}}</p> <p> <a class="btn btn-primary" role="button " @click=jump(question)> 详细 </a> </p> </div> </div> </div> </div> '},function(e,t,o){var s,n,i={};o(77),s=o(35),n=o(81),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(a.template=n),a.computed||(a.computed={}),Object.keys(i).forEach(function(e){var t=i[e];a.computed[e]=function(){return t}})},function(e,t,o){var s,n,i={};s=o(36),n=o(82),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(a.template=n),a.computed||(a.computed={}),Object.keys(i).forEach(function(e){var t=i[e];a.computed[e]=function(){return t}})},function(e,t,o){var s,n,i={};o(78),s=o(37),n=o(83),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(a.template=n),a.computed||(a.computed={}),Object.keys(i).forEach(function(e){var t=i[e];a.computed[e]=function(){return t}})},function(e,t,o){var s,n,i={};o(79),s=o(38),n=o(84),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(a.template=n),a.computed||(a.computed={}),Object.keys(i).forEach(function(e){var t=i[e];a.computed[e]=function(){return t}})},function(e,t,o){var s,n,i={};o(80),s=o(39),n=o(85),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(a.template=n),a.computed||(a.computed={}),Object.keys(i).forEach(function(e){var t=i[e];a.computed[e]=function(){return t}})},function(e,t,o){var s,n,i={};s=o(40),n=o(86),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(a.template=n),a.computed||(a.computed={}),Object.keys(i).forEach(function(e){var t=i[e];a.computed[e]=function(){return t}})},function(e,t){var o,s,n={};e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(i.template=s),i.computed||(i.computed={}),Object.keys(n).forEach(function(e){var t=n[e];i.computed[e]=function(){return t}})}]);
//# sourceMappingURL=app.c1bc0744cec5c7c478d3.js.map