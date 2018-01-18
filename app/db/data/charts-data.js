
const profileDate = {
    title : {
        text: '城市平均气温'   
     },
    subtitle : {
        text: 'Source: runoob.com'
     },
    xAxis : {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
           'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis : {
        title: {
           text: 'Temperature (\xB0C)'
        },
        plotLines: [{
           value: 0,
           width: 1,
           color: '#808080'
        }]
    }, 
  
    tooltip : {
        valueSuffix: '\xB0C'
    },
  
    legend : {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
  
    series :  [
        {
           name: 'Tokyo',
           data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
              26.5, 23.3, 18.3, 13.9, 9.6]
        }, 
        {
           name: 'New York',
           data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,
              24.1, 20.1, 14.1, 8.6, 2.5]
        },
        {
           name: 'London',
           data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 
              16.6, 14.2, 10.3, 6.6, 4.8]
        }
     ]
}

const helpData = {
	/* Highcharts 配置 */
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

const setData = {
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

const dashboardData = {

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
        
    }],
    chartFunction : function (chart) {
        setInterval(function () {
            var point = chart.series[0].points[0],
            newVal,
            inc = Math.round((Math.random() - 0.5) * 20);
    
            newVal = point.y + inc;
            if (newVal < 0 || newVal > 200) {
            newVal = point.y - inc;
            }
            point.update(newVal);
        }, 3000);
    }
        
}

const generateData = function(){

    var temp 
    var loop = function (){
        return innerFunc(temp)
    }
    var innerFunc = function(){
        return temp = Math.round(Math.random()*200)
    }
  
    setInterval(loop, 1000)
    
   return loop()

}

const reportData = function () {
    // generate an array of random data
    var data = [],
        time = (new Date()).getTime(),
        i;

    for (i = -19; i <= 0; i += 1) {
        data.push({
            x: time + i * 1000,
            y: Math.random()
        });
    }
    return data;
}

module.exports = {
    profileDate,
    helpData,
    setData,
    dashboardData,
    generateData,
    reportData
}

 //generateData();
 //console.log(generateData())

