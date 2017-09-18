particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
  highlightParticle();
  setInterval(pollPressure, 1000)

  var canvas = document.getElementById("pressure-graph");
  //canvas.style.width = "100%";
  //canvas.style.height= "100%";
  var context = canvas.getContext("2d"),
	  width = canvas.width = document.getElementById("pressure").clientWidth,
	  height = canvas.height = document.getElementById("pressure").clientHeight;

  update();

  context.strokeStyle = "#000";
  function update() {
      context.clearRect(0, 0, width, height);
      var max_pressure = Math.max.apply(null, pressure_history);
      context.beginPath();
      var y0 = height * (1 - ((pressure_history[0] + pressure_history[1]) / 2) / max_pressure);
      context.moveTo(0, y0);
      for (var i = 1; i < pressure_history.length - 1; i++) {
          var x1 = width * (i / pressure_history.length);
          var y1 = height * (1 - ((pressure_history[i-1] + pressure_history[i] + pressure_history[i+1]) / 3) / max_pressure);
          context.lineTo(x1, y1);
      }
      var y2 = height * (1 - ((pressure_history[pressure_history.length-2] + pressure_history[pressure_history.length-1]) / 2) / max_pressure);
      context.lineTo(width, y2);
      context.stroke();
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

var pressure_history = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
var t_last = Date.now();

function pollPressure() {
    var now = Date.now();
    var dt = now - t_last;
    var pressure = window.pJSDom[0].pJS.pressure / dt;
    console.log(pressure);
    if (!isNaN(pressure)) {
        pressure_history.push(pressure);
        pressure_history.splice(0, 1);
    }
    window.pJSDom[0].pJS.pressure = 0;
    t_last = now;
}
