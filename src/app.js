particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
  highlightParticle();
  setInterval(pollPressure, 1000)

  var canvas = document.getElementById("pressure-graph"),
	  context = canvas.getContext("2d"),
	  width = canvas.width,
	  height = canvas.height;

  update();

  context.strokeStyle = "#000";
  function update() {
      var max_pressure = Math.max.apply(null, pressure_history);
      for (var i = 1; i < pressure_history.length; i++) {
          context.beginPath();
          var x0 = width * ((i - 1) / pressure_history.length);
          var y0 = height * (pressure_history[i - 1] / max_pressure);
          var x1 = width * (i / pressure_history.length);
          var y1 = height * (pressure_history[i] / max_pressure);
          context.moveTo(x0, y0);
          context.lineTo(x1, y1);
          context.stroke();
      }
      requestAnimationFrame(update);
  }
});

function updateMoles(moles) {
    if (moles > window.pJSDom[0].pJS.particles.array.length) {
        window.pJSDom[0].pJS.fn.modes.pushParticles(moles - window.pJSDom[0].pJS.particles.array.length)
    } else if (moles < window.pJSDom[0].pJS.particles.array.length) {
        window.pJSDom[0].pJS.fn.modes.removeParticles(window.pJSDom[0].pJS.particles.array.length - moles)
    }

    if (moles > 0) {
        highlightParticle();
    }
}

function updateVolume(volume) {
    var new_h0 = (1 - parseFloat(volume)) * window.pJSDom[0].pJS.canvas.h;
    if (new_h0 > window.pJSDom[0].pJS.canvas.h0) {
        for (var i = 0; i < window.pJSDom[0].pJS.particles.array.length; i++) {
            var p = window.pJSDom[0].pJS.particles.array[i];
            p.y = Math.max(p.y, new_h0 + p.radius);
        }
    }
    window.pJSDom[0].pJS.canvas.h0 = new_h0;
}

function updateTemperature(temperature) {
    window.pJSDom[0].pJS.particles.move.speed = temperature;
}

function highlightParticle() {
    window.pJSDom[0].pJS.particles.array[0].color={value:"#FF0000",rgb:{r:255,g:0,b:0}}
}

var pressure_history = [];
var t_last = Date.now();

function pollPressure() {
    var now = Date.now();
    var dt = now - t_last;
    var pressure = window.pJSDom[0].pJS.pressure / dt;
    console.log(pressure);
    if (!isNaN(pressure)) {
        pressure_history.push(pressure);
    }
    window.pJSDom[0].pJS.pressure = 0;
    t_last = now;
}
