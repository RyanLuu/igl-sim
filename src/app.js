particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
  highlightParticle();
  setInterval(pollPressure, 50)

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

      var filtered_values = filter(pressure_history, median, 7);
      var max_pressure = Math.max.apply(null, filtered_values);
      context.beginPath();
      for (var i = 0; i < pressure_history.length; i++) {
          var x = width * (i / pressure_history.length);
          var y = height * (1 - filtered_values[i] / max_pressure);

          if (i == 0) {
              context.moveTo(x, y)
          }
          context.lineTo(x, y);
      }
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

function filter(a, f, w) {
    if (w % 2 == 0 || !Number.isInteger(w)) {
        console.error("Invalid width passed into filter: " + w);
        return a;
    }

    ret = [];

    for (var i = 0; i < a.length; i++) {
        var sliced = a.slice(Math.max(0, i - Math.floor(w/2)), Math.min(a.length - 1, i + Math.floor(w/2)));
        ret.push(f(sliced))
    }

    return ret;
}

function mean(values) {
    var total = 0;
    for (var i = 0; i < values.length; i++) {
        total += values[i];
    }
    return total / values.length;
}

function median(values) {

    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}
