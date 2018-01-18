const Highcharts = require('highcharts')
require('highcharts/modules/exporting')(Highcharts)

const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

let line = Highcharts.chart('container', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },
    title: {
        text: 'Live random data'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Random data'
        
    }]
});


setInterval(function () {
    
      ipcRenderer.send('report-ready-get')
    
  }, 2000);
  
  ipcRenderer.on('report-get', (event, args) => {
      
      let point = line.series[0]
      //let newVal = JSON.parse(args)
      point.setData(JSON.parse(args))
      console.log(JSON.parse(args))
  
  })