<template>
    <div class="mobile">
        <div class="header">
            <span @click="sidebar_show=1" class="sidebar-icon">
                <i class="ion-navicon-round"></i>
                <span>Home</span>
            </span>
        </div>
        <div class="routerview">
            <router-view></router-view>
        </div>
        <div class="sidebar " v-bind:class="{active:sidebar_show}">
            <div class="sidebar-overlay" @click="sidebar_show=0">
            </div>
            <div class="sidebar-content">
                <h3>明其道不计其功</h1>

                <div class="nav-left" @click="sidebar_show=0"> 
                        <a href="#home"><span class="ion-ios-home-outline"></span> 主页
                        </a>
                        <!-- <a href="#alarm"><span class="ion-ios-list-outline"></span>    Alarm</a> -->
                        <!-- <a href="#compose"><span class="ion-ios-compose-outline"></span>    Compose</a> -->
                        <a href="#chats"><span class="ion-ios-chatboxes-outline"></span>    聊天室</a>
                        <a href="#food"><span class="ion-pizza"></span>    菜谱</a>
                        <a href="#movie"><span class="ion-ios-film-outline"></span>    电影</a>
                        <a href="#SMZDM"><span class="ion-ios-cart-outline"></span> 值得买</a>
                    </div>

            </div>
        </div>
        <div class="nav" v-bind:class="{active:nav_show}">
            <a href="#home" class="nav-item nav-count-1">
                <i class="ion-ios-home-outline"></i>
            </a>
            <a href="#food" class="nav-item nav-count-2">
                <i class="ion-pizza"></i>
            </a>
            <a href="#chats" class="nav-item nav-count-3">
                <i class="ion-ios-chatboxes-outline"></i>
            </a>
            <a href="#movie" class="nav-item nav-count-4">
                <i class="ion-ios-film-outline"></i>
            </a>
            <a href="#SMZDM" class="nav-item nav-count-5">
                <i class="ion-ios-cart-outline"></i>
            </a>
            <a @click="nav_show=!nav_show" class="musk">
                <i class="ion-ios-plus-empty">
            </a>
        </div>
    </div>
   

</template>
<script>


export default {
    
    data(){
      return{
        sidebar_show:false,
        nav_show:false
      }
    }
   
}

</script>
<style>
.mobile {
    /*margin: 50px auto;*/
    /*width: 100%;*/
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: url(http://www.bz55.com/uploads/allimg/151030/139-151030111Q4.jpg) center no-repeat;
    position: absolute;
    /*解决内容撑大的问题*/
    overflow: hidden;
}
@media (min-width: 736px){
    .mobile{
        height: 736px;
        width: 414px;
        left: 50%;
        top: 50%;
        margin-top: -368px;
        margin-left:-207px;
        position: absolute;;
        overflow: hidden;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
    }
    .sidebar-overlay {
    top: 50%;
    /*bottom: 0px;*/
    left: 50%;
    /*right: 0px;*/
    background-color: black;
    position: absolute;
    opacity: 0.5;
    z-index: 5;
    transform: translateX(-100%);
    transition: all .5s ease-in-out 0s;
    }
}

.header {
    position: absolute;
    margin-left: 10%;
    margin-top: 30px;
    width: 80%;
    height: 100px;
    /*background-color: white;*/
    font-size: 30px;
    color: #fff;
    /*z-index: 2;*/
}

.sidebar {}

.sidebar.active .sidebar-content,
.sidebar.active .sidebar-overlay {
    transform: translateX(0);
}

.sidebar-overlay {
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: black;
    position: absolute;
    opacity: 0.5;
    z-index: 5;
    transform: translateX(-100%);
    transition: all .5s ease-in-out 0s;
}

.sidebar-content {
    position: absolute;
    top: 0px;
    width: 80%;
    height: 100%;
    background-color: white;
    z-index: 100;
    font-size: 20px;
    padding: 30px;
    transform: translateX(-100%);
    transition: all .3s ease-in-out 0s;
}

.nav-left {
    position: absolute;
    top: 150px;
    line-height: 50px;
}

.nav-left a {
    display: block;
}

.nav-left span {
    font-size: 30px;
    padding: 10px;
}

.nav {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    background-color: #f23363;
    line-height: 50px;
    border-radius: 50%;
    transition: all .1s ease-in-out 0s;
}

.nav:after {
    position: absolute;
    content: '';
    right: 0px;
    bottom: 0px;
    width: 50px;
    height: 50px;
    background-color: #f23363;
    line-height: 50px;
    border-radius: 50%;
    transition: all .1s ease-in-out 0s;
    z-index: 2;
}

.musk {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    font-size: 30px;
    border-radius: 50%;
    transition: all .3s cubic-bezier(.68, 1.55, .265, 1);
    text-align: center;
    z-index: 4;
}

.nav.active .musk {
    background: #cf0e3f;
    -webkit-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    transform: rotate(-135deg);
}


/*实现增加属性后 动画*/


/*用after 实现的是 背景动的效果*/

.nav.active:after {
    /*position: absolute;
    content: '';*/
    right: -150px;
    bottom: -150px;
    width: 350px;
    height: 350px;
    /*background-color: #f23363;
    line-height: 50px;
    border-radius: 50%;
    z-index: 1;*/
}

.nav-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    color: #fff;
    font-size: 30px;
    transition: all .3s cubic-bezier(.68, 1.55, .265, 1);
    text-align: center;
    z-index: 1;
}

.nav-item:hover {}

.nav.active .nav-item {
    z-index: 3;
}

.nav.active .nav-count-1 {
    transform: translate(10px, -130px);
}

.nav.active .nav-count-2 {
    transform: translate(-42px, -117px)
}

.nav.active .nav-count-5{
    transform: translate(-88px, -88px)
}

.nav.active .nav-count-3 {
    transform: translate(-117px, -42px);
}

.nav.active .nav-count-4 {
    transform: translate(-130px, 10px)
}

.routerview{
  position: absolute;
    top: 17%;
    bottom: 13%;
    margin-left: 8%;
    margin-right: 8%;
    overflow: auto;
    overflow-x: hidden;
    width: 84%;
}

</style>
