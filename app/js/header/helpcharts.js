const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;
var options = {};
let background = String(Highcharts.theme && Highcharts.theme.legendBackgroundColor)

let temp = ipcRenderer.sendSync('help-ready-get', background);
options = JSON.parse(temp)

// 创建图表
Highcharts.chart('container', options);

//backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),