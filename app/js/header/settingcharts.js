const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/highcharts-3d.js')(Highcharts);
const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

// const Data = require('../../db/data/charts-data')
// let options = Data.setData

let temp = ipcRenderer.sendSync('setting-ready-get', 'ping')

const options = JSON.parse(temp)
// 创建图表
Highcharts.chart('container', options);
