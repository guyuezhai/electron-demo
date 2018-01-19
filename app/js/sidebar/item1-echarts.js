const echarts = require('echarts')
require('echarts/lib/chart/map')
require('../map/world.js')

const nodegrass = require('nodegrass')

var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
let app = {}
app.title = '65k+ 飞机航线';

myChart.showLoading();

nodegrass.get('../../db/data/flights.json', function(data) {

    myChart.hideLoading();

    function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }
    var routes = data.routes.map(function (airline) {
        return [
            getAirportCoord(airline[1]),
            getAirportCoord(airline[2])
        ];
    });

    myChart.setOption(option = {
        title: {
            text: 'World Flights',
            left: 'center',
            textStyle: {
                color: '#eee'
            }
        },
        backgroundColor: '#003',
        tooltip: {
            formatter: function (param) {
                var route = data.routes[param.dataIndex];
                return data.airports[route[1]][1] + ' > ' + data.airports[route[2]][1];
            }
        },
        geo: {
            map: 'world',
            left: 0,
            right: 0,
            silent: true,
            roam: true,
            itemStyle: {
                normal: {
                    borderColor: '#003',
                    color: '#005'
                }
            }
        },
        series: [{
            type: 'lines',
            coordinateSystem: 'geo',
            data: routes,
            large: true,
            largeThreshold: 100,
            lineStyle: {
                normal: {
                    opacity: 0.05,
                    width: 0.5,
                    curveness: 0.3
                }
            },
            // 设置混合模式为叠加
            blendMode: 'lighter'
        }]
    });
});
// 使用刚指定的配置项和数据显示图表。
//myChart.setOption(option);