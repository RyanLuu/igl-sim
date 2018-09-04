import { Particle } from './particle.js'
import { variables, options } from './data.js';
import { updateHistogram } from './chart.js';
import { hex2rgba } from './util.js';

let canvas = document.getElementById("canvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
let ctx = canvas.getContext('2d');

let padding = 20;
var cylinder = {
    width: 640,
    height: 360
}
let k = Math.min((document.body.clientHeight - document.getElementById("controls-card").clientHeight - 2 * padding) / cylinder.height, (document.body.offsetWidth - 2 * padding) / cylinder.width);
let transform = {
    s: k,
    tx: document.body.clientWidth / 2,
    ty: document.getElementById("controls-card").clientHeight + 1 * padding + cylinder.height * k / 2
}

let percentVolume, particles = [[],[],[]];
let walls = {};

function init() {
    updateVolume();
    updateMoles();
    updateTemperature();
}

init();
ctx = document.querySelector("#canvas").getContext("2d");
setInterval(tick, 1000 / 60);
drawLoop();

options.addEventListener('set', (evt) => {
    if (evt.variable == "trail") {
        if (evt.value) {
            applyTrail();
        } else {
            for (let i = 0; i < 3; i++) {
                if (particles[i].length) {
                    particles[i][0].trail(0);
                }
            }
        }
    }
});

variables.addEventListener('set', (evt) => {
    switch (evt.variable) {
        case "temperature":
            updateTemperature();
            break;
        case "moles0":
            updateMoles(0);
            break;
        case "moles1":
            updateMoles(1);
            break;
        case "moles2":
            updateMoles(2);
            break;
        case "species0":
            updateSpecies(0, evt.value);
            break;
        case "species1":
            updateSpecies(1, evt.value);
            break;
        case "species2":
            updateSpecies(2, evt.value);
            break;
        case "volume":
            updateVolume();
            break;
    }
});

function tick() {
    let particlesFlat = particles.reduce((acc, val) => acc.concat(val), []);
    let ke = 0;
    for (var i = 0; i < particlesFlat.length; i++) {
        particlesFlat[i].update();
        for (var j = i + 1; j < particlesFlat.length; j++) {
            particlesFlat[i].checkStaticCollide(particlesFlat[j]);
            particlesFlat[i].checkDynamicCollide(particlesFlat[j]);
        }
        particlesFlat[i].checkWallCollide(walls);

        ke += particlesFlat[i].mass * particlesFlat[i].speed() * particlesFlat[i].speed() * Particle.speedMultiplier * Particle.speedMultiplier;
    }

    // histogram stuff
    if (!options.lineChart) {
        let datasets = []
        for (let i = 0; i < 3; i++) {
            if (particles[i].length) {
                let n = 50;
                let bg = hex2rgba(particles[i][0].color, 0.5);
                let dataset = {
                    data: new Array(n),
                    backgroundColor: bg
                };
                dataset.data.fill(0);
                for (let p in particles[i]) {
                    dataset.data[Math.round(15*Math.log(1+(particles[i][p].speed() * Particle.speedMultiplier))).clamp(0, n-1)]++;
                }
                datasets.push(dataset);
            }
        }
        updateHistogram(datasets);
    }
}

function drawLoop() {
    draw();
    requestAnimationFrame(drawLoop);
}

function draw() {
    
    ctx.resetTransform();
    ctx.clear();
    ctx.scale(transform.s, transform.s);
    ctx.translate(transform.tx / transform.s, transform.ty / transform.s);
    
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--mdc-theme-surface");
    let wallWidth = 8;
    ctx.shadowBlur=20;
    ctx.shadowColor="rgba(0,0,0,.38)";
    ctx.rect((-cylinder.width >> 1) - wallWidth, (-cylinder.height >> 1) - wallWidth, cylinder.width + wallWidth * 2, cylinder.height + wallWidth * 2);
    ctx.rect(walls.left, walls.top, walls.right - walls.left, walls.bottom - walls.top);
    ctx.fill('evenodd');
    ctx.shadowBlur = 0;
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--mdc-theme-background");
    
    let particlesFlat = particles.reduce((acc, val) => acc.concat(val), []);
    for  (var i = 0; i < particlesFlat.length; i++) {
        particlesFlat[i].render(ctx);
    }

}

function updateWalls() {
    walls = {
        left: -cylinder.width / 2,
        top: -cylinder.height / 2,
        right: cylinder.width / 2,
        bottom: cylinder.height / 2,
    }
    walls.left += (walls.right - walls.left) * (1-percentVolume);
    walls.width = (() => walls.right - walls.left)();
    walls.height = (() => walls.bottom - walls.top)();
}

function updateTemperature() {
    Particle.speedMultiplier = Math.sqrt(variables.temperature);
}

function updateMoles(i) {
    function updateMoles(i, n, e) {
        let nParticles = Math.round(n * 10);
        if (n > 0) {
            nParticles = Math.max(1, nParticles);
        }
        let diff = particles[i].length - nParticles;
        if (diff > 0) {
            for (let j = 0; j < diff; j++) {
                let p = particles[i].pop();
                if (p.trailArray) { // if the user had a trail showing, transfer trail to another particle
                    applyTrail();
                }
            }
        } else if (diff < 0) {
            for (let j = 0; j > diff; j--) {
                particles[i].push(new Particle(walls.left + Math.random() * walls.width, Math.random() * walls.height + walls.top, e));
            }
        }
    }
    
    if (i == 0) {
        updateMoles(0, variables.moles0, variables.species0);
    } else if (i == 1) {
        updateMoles(1, variables.moles1, variables.species1);
    } else if (i == 2) {
        updateMoles(2, variables.moles2, variables.species2);
    } else {
        updateMoles(0, variables.moles0, variables.species0);
        updateMoles(1, variables.moles1, variables.species1);
        updateMoles(2, variables.moles2, variables.species2);
    }
}

function updateSpecies(i, sp) {
    if (particles[i].length && particles[i][0].species != sp) {
        for (let j = 0; j < particles[i].length; j++) {
            particles[i][j].setSpecies(sp);
        }
    }
}

function updateVolume() {
    var maxVolume = 40;
    percentVolume = variables.volume / maxVolume;
    updateWalls();
}

// Picks a particle to have a trail.
function applyTrail() {
    for (let i = 0; i < 3; i++) {
        if (particles[i].length) {
            particles[i][0].trail(512);
            break;
        }
    }
}

let draggin = false;
let lastPos = [];

window.addEventListener('resize', function(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});

canvas.addEventListener('mousedown', (event) => dragStart(event));
canvas.addEventListener('touchstart', (event) => dragStart(event));
document.addEventListener('mouseup', dragEnd);
document.addEventListener('touchend', dragEnd);

function dragStart(event) {
    draggin = true;
    document.addEventListener('selectstart', disableSelect);
    if (event instanceof MouseEvent) {
        lastPos[0] = event.clientX;
        lastPos[1] = event.clientY;
    } else if (event instanceof TouchEvent) {
        lastPos[0] = event.touches[0].clientX;
        lastPos[1] = event.touches[0].clientY;
    }
}

function dragEnd() {
    draggin = false;
    document.removeEventListener('selectstart', disableSelect);
}

function drag(event) {
    if (event instanceof MouseEvent) {
        if (draggin && event.buttons == 1) {
            transform.tx += event.clientX - lastPos[0];
            transform.ty += event.clientY - lastPos[1];
            lastPos[0] = event.clientX;
            lastPos[1] = event.clientY;
        }
    } else if (event instanceof TouchEvent) {
        if (draggin) {
            transform.tx += event.touches[0].clientX - lastPos[0];
            transform.ty += event.touches[0].clientY - lastPos[1];
            lastPos[0] = event.touches[0].clientX;
            lastPos[1] = event.touches[0].clientY;
        }
    }
}

let disableSelect = (event) => event.preventDefault();

canvas.addEventListener('mousemove', (event) => drag(event));

canvas.addEventListener('touchmove', (event) => drag(event));

canvas.addEventListener('wheel', function(event) {
    let scale = Math.exp(event.deltaY * 1e-3);
    transform.s *= scale;
});
