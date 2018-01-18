const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

let temp = ipcRenderer.sendSync('profile-ready-get', 'ping')

const options = JSON.parse(temp)
// 创建图表
Highcharts.chart('container', options);

