const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/highcharts-more.js')(Highcharts);

const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

// const Data = require('../../db/data/charts-data')
// let options = Data.setData


  //let temp = ipcRenderer.sendSync('dashboard-ready-get')



    // let options = JSON.parse(temp)

    //let chartFunction = options.chartFunction

//===========================================================
const options = {
    
        chart : {      
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false     
        },
        credits : {
            enabled: false
        },
        
        title : {
            text: '双轴车速表'
        },
        
        pane : {
            startAngle: -150,
            endAngle: 150
        },
        
        // the value axis
        yAxis : [{
            min: 0,
            max: 200,
            lineColor: '#339',
            tickColor: '#339',
            minorTickColor: '#339',
            offset: -25,
            lineWidth: 2,
            labels: {
                distance: -20,
                rotation: 'auto'
            },
            tickLength: 5,
            minorTickLength: 5,
            endOnTick: false
        }, {
            min: 0,
            max: 124,
            tickPosition: 'outside',
            lineColor: '#933',
            lineWidth: 2,
            minorTickPosition: 'outside',
            tickColor: '#933',
            minorTickColor: '#933',
            tickLength: 5,
            minorTickLength: 5,
            labels: {
                distance: 12,
                rotation: 'auto'
            },
            offset: -20,
            endOnTick: false
        }],
        
        series : [{
            name: 'Speed',
            data: [80],
            dataLabels: {
                formatter: function () {
                var kmh = this.y,
                mph = Math.round(kmh * 0.621);
                return '<span style="color:#339">' + kmh + ' km/h</span><br/>' +
                    '<span style="color:#933">' + mph + ' mph</span>';
                },
                backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#DDD'],
                    [1, '#FFF']
                ]
                }
            },
            tooltip: {
                valueSuffix: ' km/h'
            }
            
        }]
            
    }
// Add some life



// 创建图表
var test = Highcharts.chart('container', options);

setInterval(function () {
  
    ipcRenderer.send('dashboard-ready-get')
  
}, 2000);

ipcRenderer.on('dashboard-get', (event, args) => {
    
    let point = test.series[0].points[0]
    let newVal = args
    if (newVal < 0 ) {
        newVal = 0
    } else if(newVal > 200){
        newVal = 200
    }
    point.update(newVal);

})

