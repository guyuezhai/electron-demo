require('highcharts/highcharts-3d.js')(Highcharts);

const echarts = require('echarts')
const migriteService = require('./app/serve/migrateService.js')

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: './app/component/head.html',
        controller: 'chart3D'
    })
    .when('/chartbar',{
        templateUrl:'./app/component/chart-bar.html',
        controller: 'chartBar'
    })
    .when('/migrate',{
        templateUrl: './app/component/migrate.html',
        controller: 'migrate'
    })
    .otherwise({redirectTo:'/'});
}]);

app.controller('chartBar', function($scope, $route){

    $scope.$route = $route

    let options = {
        chart: {
            type: 'bar'
        },
        title: {
            text: '世界各地区历史人口'
        },
        subtitle: {
            text: '来源：<a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['非洲', '美洲', '亚洲', '欧洲', '澳洲'],
            title: { text: null }
        },
        yAxis: {
            min: 0,
            title: {
                text: '人口（亿）',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' 亿'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:'#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '1800年',
            data: [107, 31, 635, 203, 2]
        }, {
            name: '1900年',
            data: [133, 156, 947, 408, 6]
        }, {
            name: '2012年',
            data: [1052, 954, 4250, 740, 38]
        }]
    }

    Highcharts.chart('container', options)
})

app.controller('chart3D', function($scope, $route){

    $scope.$route = $route;

    let options = {
        chart : {      
            type: 'pie',     
            options3d: {
                enabled: true,
                alpha: 45         
            }
        },
        title : {
            text: '每周水果配送量'   
        },   
        subtitle : {
            text: 'Highcharts 3D圆环图'
        }, 
    
        plotOptions : {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },   
        series : [{
                name: '配送量',
                data: [
                ['Bananas', 8],
                ['Kiwi', 3],
                ['Mixed nuts', 1],
                ['Oranges', 6],
                ['Apples', 8],
                ['Pears', 4],
                ['Clementines', 4],
                ['Reddish (bag)', 1],
                ['Grapes (bunch)', 1]
                ]
        }]
    }

    Highcharts.chart('container', options)
})

app.controller('migrate', function($scope, $route){
    
    let myChart = echarts.init(document.getElementById('main'));
    let option = migriteService.option
    myChart.setOption(option);

})