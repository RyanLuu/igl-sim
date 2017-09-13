particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
  highlightParticle();
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
    var new_h0 = parseFloat(volume) * window.pJSDom[0].pJS.canvas.h;
    if (new_h0 > window.pJSDom[0].pJS.canvas.h0) {
        for (var i = 0; i < window.pJSDom[0].pJS.particles.array.length; i++) {
            var p = window.pJSDom[0].pJS.particles.array[i];
            p.y = Math.max(p.y, new_h0 + p.radius);
        }
    }
    window.pJSDom[0].pJS.canvas.h0 = new_h0;
}

function highlightParticle() {
    window.pJSDom[0].pJS.particles.array[0].color={value:"#FF0000",rgb:{r:255,g:0,b:0}}
}
