<template>
    <div class="weatherleft slideInLeft animated">
        <div class="city">{{weather.city}} </div>
        <div class="week">{{weather.today.week}}</div>
        <div class="date">{{weather.today.date}}</div>
    </div>
    <div class="weatherright slideInRight animated">
        <div class="type">{{weather.today.type}}</div>
        <div class="curTemp">{{weather.today.curTemp}}</div>
        <div class="feng">{{weather.today.fengxiang}}</div>
        <div class="fengli">{{weather.today.fengli}}</div>
        <div class="hightemp">--{{weather.today.hightemp}}</div>
        <div class="lowtemp">{{weather.today.lowtemp}}</div>
    </div>
    <div class="fore slideInRight animated">
        <div class="forecast">
            <i class="date">{{weather.forecast[0].date}}</i>
            <i>{{weather.forecast[0].hightemp}}</i>
            <i>{{weather.forecast[0].lowtemp}}</i>
            <i>{{weather.forecast[0].type}}</i>
        </div>
        <div class="forecast">
            <i class="date">{{weather.forecast[1].date}}</i>
            <i>{{weather.forecast[1].hightemp}}</i>
            <i>{{weather.forecast[1].lowtemp}}</i>
            <i>{{weather.forecast[1].type}}</i>
        </div>
        <div class="forecast">
            <i class="date">{{weather.forecast[2].date}}</i>
            <i>{{weather.forecast[2].hightemp}}</i>
            <i>{{weather.forecast[2].lowtemp}}</i>
            <i>{{weather.forecast[2].type}}</i>
        </div>
        <div class="forecast">
            <i class="date">{{weather.forecast[3].date}}</i>
            <i>{{weather.forecast[3].hightemp}}</i>
            <i>{{weather.forecast[3].lowtemp}}</i>
            <i>{{weather.forecast[3].type}}</i>
        </div>
    </div>
</template>
<script type="text/javascript">
import {
    request
} from './request.js'

export default {
    data() {
            return {
                weather: []
            }
        },
        route: {
            data(trans) {
                var _this = this;
                request('http://apis.baidu.com/apistore/weatherservice/recentweathers?cityname=濮阳').then(result => {
                    _this.weather = result.retData;
                    console.log(_this.weather)
                });
                trans.next();
            }
        },
}
</script>
<style type="text/css">
.weatherright {
    right: 10px;
    position: absolute;
    top: 0px;
    color: white;
    width: 100px;
}

.weatherright .type {
    float: left;
    font-size: 20px;
}

.weatherright .curTemp {
    display: inline;
    font-size: 20px;
    float: right;
}

.weatherright .feng {
    float: left;
}

.weatherright .fengli {
    display: inline;
    float: right;
    /*right: 10px*/
}

.weatherright .hightemp {
    float: right;
    display: inline;
}

.weatherright .lowtemp {
    float: right;
    display: inline;
}

.weatherleft {
    /*margin: 30px;*/
    margin-left: 20px;
    color: white;
    width: 200px;
}

.weatherleft .city {
    /*float: left;
*/
    font-size: 20px;
}

.weatherleft .week {
    /*margin-left: 30px;
    display: inline;
    font-size: 20px;*/
}

.fore {
    margin: 30px;
    color: white;
    text-align: center;
    /*width: 100%*/
}

.forecast {
    margin-bottom: 10px;
    display: flex;
    width: 100%;
}

.forecast i {
    flex: 1;
}

.forecast .date {
    flex: 2;
}
</style>
