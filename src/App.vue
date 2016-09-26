<template>
    <div class="mobile">
        <div class="header" @click="sidebar_show=1">
            <span class="sidebar-icon">
                <i class="ion-navicon-round"></i>
                <span>Home</span>
            </span>
        </div>
        <div class="routerview">
            <router-view></router-view>
        </div>
        <div class="sidebar" v-bind:class="{active:sidebar_show}">
            <div class="sidebar-overlay" @click="sidebar_show=0">
            </div>
            <div class="sidebar-content">
                <h3>明其道不计其功</h1>

                <div class="nav-left" @click="sidebar_show=0"> 
                        <a href="#home"><span class="ion-ios-home-outline"></span> Home
                        </a>
                        <a href="#alarm"><span class="ion-ios-list-outline"></span>    Alarm</a>
                        <a href="#compose"><span class="ion-ios-compose-outline"></span>    Compose</a>
                        <a href="#chats"><span class="ion-ios-chatboxes-outline"></span>    Chats</a>
                        <a href="#profile"><span class="ion-ios-person-outline"></span>    Profile</a>
                        <a href="#settings"><span class="ion-ios-gear-outline"></span>    Settings</a>
                        <a href="#credits"><span class="ion-ios-information-outline"></span> Credits</a>
                    </div>

            </div>
        </div>
        <div class="nav" v-bind:class="{active:nav_show}">
            <a class="nav-item nav-count-1">
                <i class="ion-ios-person-outline"></i>
            </a>
            <a class="nav-item nav-count-2">
                <i class="ion-ios-compose-outline"></i>
            </a>
            <a href="#chats" class="nav-item nav-count-3">
                <i class="ion-ios-chatboxes-outline"></i>
            </a>
            <a class="nav-item nav-count-4">
                <i class="ion-ios-alarm-outline"></i>
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
    background-color: #a8bcf5;
    position: absolute;
    /*解决内容撑大的问题*/
    overflow: hidden;
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
    z-index: 2;
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
    position: fixed;
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
    transform: translate(-50px, -110px)
}

.nav.active .nav-count-3 {
    transform: translate(-110px, -50px)
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
}

</style>
