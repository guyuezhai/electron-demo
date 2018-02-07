var Oscilloscope = require('oscilloscope')

var audioContext = new window.AudioContext()

oscillator = audioContext.createOscillator()
oscillator.type = 'since' 
oscillator.frequency.vue = 400
oscillator.start()

// create source from html5 audio element 
//var source = audioContext.createMediaElementSource(audioElement)

var oscilloscope = new Oscilloscope('.js-oscialloscope', audioContext);
oscillator.connect(oscilloscope.analyserNode);

oscilloscope.start()

// attach oscilloscope 
//var scope = new Oscilloscope(source)

// start default animation loop 
//scope.animate(canvas.getContext("2d"))