particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
  highlightParticle();
  setInterval(pollPressure, 500)

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

      var filtered_values = filter(pressure_history, mean, 5);
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

function setMoles(moles) {
    if (moles > window.pJSDom[0].pJS.particles.array.length) {
        window.pJSDom[0].pJS.fn.modes.pushParticles(Math.round(moles * 10 - window.pJSDom[0].pJS.particles.array.length))
    } else if (moles < window.pJSDom[0].pJS.particles.array.length) {
        window.pJSDom[0].pJS.fn.modes.removeParticles(Math.round(window.pJSDom[0].pJS.particles.array.length - moles * 10))
    }

    if (moles > 0) {
        highlightParticle();
    }
    document.getElementById("moles-label").innerHTML = moles;
}

function setVolume(volume) {
    var new_h0 = (1 - parseFloat(volume) / 40) * window.pJSDom[0].pJS.canvas.h;
    if (new_h0 > window.pJSDom[0].pJS.canvas.h0) {
        for (var i = 0; i < window.pJSDom[0].pJS.particles.array.length; i++) {
            var p = window.pJSDom[0].pJS.particles.array[i];
            p.y = Math.max(p.y, new_h0 + p.radius);
        }
    }
    window.pJSDom[0].pJS.canvas.h0 = new_h0;
    document.getElementById("volume-label").innerHTML = volume;
}

function setTemperature(temperature) {
    window.pJSDom[0].pJS.particles.move.speed = temperature * 0.08;
    document.getElementById("temperature-label").innerHTML = temperature;
}

function setPressure(pressure) {
    document.getElementById("pressure-label").innerHTML = pressure;
}

/*function updatePressureLabel() {
    var V = parseFloat(document.getElementById("volume-label").innerHTML);
    var n = parseFloat(document.getElementById("moles-label").innerHTML);
    var T = parseInt(document.getElementById("temperature-label").innerHTML);
    var R = .08206;
    document.getElementById("pressure-label").innerHTML = round(n * R * T / V, 2);
}
*/

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

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
