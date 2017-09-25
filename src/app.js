particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
    highlightParticle();
    /*
    setInterval(pollPressure, 500)

    var canvas = document.getElementById("pressure-graph");

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
    */
});

var vars;

window.addEventListener('load',
    function() {
        vars = {
            pressure: parseFloat(document.getElementById("pressure-slider").value),
            volume: parseFloat(document.getElementById("volume-slider").value),
            moles: parseFloat(document.getElementById("moles-slider").value),
            temperature: parseFloat(document.getElementById("temperature-slider").value)
        };
    }, false);

function sliderUpdate(slider) {
    var prev_vars = vars;
    var value = slider.value;
    var iv_name = slider.id.slice(0, -7);
    var dv_name = getDependentVar();
    var iv_slider = slider;
    var dv_slider = document.getElementById(dv_name + "-slider");

    vars[iv_name] = value; // update independent variable
    var dv = calculateDependentVar(dv_name); // calculte dependent variable
    if (dv >= dv_slider.min && dv <= dv_slider.max) { // update dependent variable if within bounds
        vars[dv_name] = dv;
    } else { // otherwise revert to previous variables
        vars = prev_vars;
    }
    updateVar(iv_name);
    updateVar(dv_name);
    updateLabel(iv_name);
    updateLabel(dv_name);
    updateSlider(iv_name);
    updateSlider(dv_name);
}

function updateLabel(name) {
    document.getElementById(name + "-label").innerHTML = round(vars[name], 2);
}

function updateSlider(name) {
    document.getElementById(name + "-slider").value = vars[name];
}

function setPressure(pressure) {
}

function setMoles(moles) {
    var d_moles = Math.round(moles * 10 - window.pJSDom[0].pJS.particles.array.length);
    if (d_moles > 0) {
        window.pJSDom[0].pJS.fn.modes.pushParticles(d_moles)
    } else if (d_moles < 0) {
        window.pJSDom[0].pJS.fn.modes.removeParticles(-d_moles)
    }

    if (window.pJSDom[0].pJS.particles.array.length > 0) {
        highlightParticle();
    }
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
}

function setTemperature(temperature) {
    window.pJSDom[0].pJS.particles.move.speed = temperature * 0.05 + 12;
}

function updateVar(name) {
    switch (name) {
        case "pressure":
            setPressure(vars.pressure);
            break;
        case "volume":
            setVolume(vars.volume);
            break;
        case "moles":
            setMoles(vars.moles);
            break;
        case "temperature":
            setTemperature(vars.temperature);
            break;
        default:
            console.error("Illegal variable: " + name);
            break;
    }
}

function calculateDependentVar(dep_var) {
    var P = vars.pressure;
    var V = vars.volume;
    var n = vars.moles;
    var R = .08206;
    var T = vars.temperature;

    switch(dep_var) {
        case "pressure":
            return n * R * T / V;
            break;
        case "volume":
            return n * R * T / P;
            break;
        case "moles":
            return P * V / R / T;
            break;
        case "temperature":
            return P * V / n / R;
            break;
    }
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
/*
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
*/
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function getDependentVar() {
    var radios = document.getElementsByName('dep-var');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

function disableSlider(slider) {
    var sliders = document.getElementsByClassName("slider");
    for (var i = 0; i < sliders.length; i++) {
        if (sliders[i].id == slider + "-slider") {
            sliders[i].disabled = true;
        } else {
            sliders[i].disabled = false;
        }
    }
}
