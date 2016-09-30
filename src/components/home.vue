<template>
    <div class="weatherleft">
        <div>{{weather.city}} </div>
        <div>{{weather.today.date}}</div>
        <div>{{weather.today.week}}</div>
    </div>
    <div class="weatherright">
        <div>{{weather.today.type}}</div>
        <div>{{weather.today.curTemp}}</div>
        <div>{{weather.today.fengxiang}}</div>
        <div>{{weather.today.fengli}}</div>
        <div>{{weather.today.hightemp}}</div>
        <div>{{weather.today.lowtemp}}</div>
    </div>
    <div class="forecast">
        <i>{{weather.forecast[0].date}}</i>
        <i>{{weather.forecast[0].hightemp}}</i>
        <i>{{weather.forecast[0].lowtemp}}</i>
        <i>{{weather.forecast[0].type}}</i>
    </div>
    <div class="forecast">
        <i>{{weather.forecast[1].date}}</i>
        <i>{{weather.forecast[1].hightemp}}</i>
        <i>{{weather.forecast[1].lowtemp}}</i>
        <i>{{weather.forecast[1].type}}</i>
    </div>
    <div class="forecast">
        <i>{{weather.forecast[2].date}}</i>
        <i>{{weather.forecast[2].hightemp}}</i>
        <i>{{weather.forecast[2].lowtemp}}</i>
        <i>{{weather.forecast[2].type}}</i>
    </div>
    <div class="forecast">
        <i>{{weather.forecast[3].date}}</i>
        <i>{{weather.forecast[3].hightemp}}</i>
        <i>{{weather.forecast[3].lowtemp}}</i>
        <i>{{weather.forecast[3].type}}</i>
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
    right: 40px;
    position: absolute;
    top: 0px;
}
</style>
