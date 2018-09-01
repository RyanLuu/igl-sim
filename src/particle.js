import { distance } from './util.js';
import { isNullOrUndefined } from 'util';
import { variables } from './data.js';
let muted = false;

let velocityScale = 0.1;
let lengthScale = 0.02;

var Element = {
    He: {
        name: "Helium",
        number: 2,
        radius: 140,
        mass: 4.002602,
        color: "#F9AA33"
    },
    Ne: {
        name: "Neon",
        number: 10,
        radius: 154,
        mass: 20.1797,
        color: "#DD2C00"
    },
    Ar: {
        name: "Argon",
        number: 18,
        radius: 188,
        mass: 39.948,
        color: "#AA00FF"
    },
    Kr: {
        name: "Krypton",
        number: 36,
        radius: 202,
        mass: 83.798,
        color: "#2962FF"
    },
    Xe: {
        name: "Xenon",
        number: 54,
        radius: 216,
        mass: 131.293,
        color: "#40C4FF"
    },
    Rn: {
        name: "Radon",
        number: 86,
        radius: 220,
        mass: 222,
        color: "#344955"
    }

};


function Particle(x, y, species) {

    this.angle = function() {
        return Math.atan2(this.dy, this.dx);
    };

    this.setSpecies = function(sp) {
        this.species = sp;
        this.radius = Element[sp].radius * lengthScale;

        this.dx *= Math.sqrt(this.mass || 1);
        this.dy *= Math.sqrt(this.mass || 1);

        this.mass = Element[sp].mass;

        this.dx /= Math.sqrt(this.mass);
        this.dy /= Math.sqrt(this.mass);

        this.color = Element[sp].color;
    }
    
    this.setSpecies(species);
    this.x = x;
    this.y = y;

    let a = Math.random() * Math.PI * 2;
    this.dx = (1+Math.nrand()/10) * Math.cos(a) * velocityScale * Math.sqrt((variables.temperature) / this.mass);
    this.dy = (1+Math.nrand()/10) * Math.sin(a) * velocityScale * Math.sqrt((variables.temperature) / this.mass);
    
    this.render = function(ctx) {
        ctx.fillStyle = ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();

        if (!isNullOrUndefined(this.trailArray)) {
            ctx.beginPath();
            for (let i = this.trailArray.length - 1; i >= 0; i--) {
                if (this.trailArray[i] != null) {
                    ctx.lineTo(this.trailArray[i][0], this.trailArray[i][1]);
                }
                this.trailArray[i] = i > 0 ? this.trailArray[i - 1] : [this.x, this.y];
            }
            ctx.globalAlpha = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
        }
    };

    this.trail = function(length) {
        if (!length) {
            if (this.trailArray) {
                delete this.trailArray;
            }
            return;
        }
        if (!this.trailArray && length) {
            this.trailArray = new Array(length);
            this.trailArray.fill(null);
        }
    }
    
    this.speed = function() {
        return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    };

    this.update = function() {
        this.x += this.dx * Particle.speedMultiplier;
        this.y += this.dy * Particle.speedMultiplier;
    };
    
    this.checkStaticCollide = function(that) {
        var overlap = this.radius + that.radius - distance(this, that);
        if (overlap > 0) {
            var theta = Math.atan2(this.y - that.y, this.x - that.x);
            var smaller = this.radius < that.radius ? this : that;
            smaller.x -= overlap * Math.cos(theta);
            smaller.y -= overlap * Math.sin(theta);
        }
    };

    this.checkDynamicCollide = function(that) {
        var thisNextPos = { x: this.x + this.dx * Particle.speedMultiplier, y: this.y + this.dy * Particle.speedMultiplier };
        var thatNextPos = { x: that.x + that.dx * Particle.speedMultiplier, y: that.y + that.dy * Particle.speedMultiplier };
        var overlapNextFrame = this.radius + that.radius - distance(thisNextPos, thatNextPos);

        if (overlapNextFrame >= 0) {
            var theta1 = this.angle();
            var theta2 = that.angle();
            var phi = Math.atan2(that.y - this.y, that.x - this.x);
            var m1 = this.mass;
            var m2 = that.mass;
            var v1 = this.speed();
            var v2 = that.speed();

            var dx1F = (v1 * Math.cos(theta1 - phi) * (m1-m2) + 2*m2*v2*Math.cos(theta2 - phi)) / (m1+m2) * Math.cos(phi) + v1*Math.sin(theta1-phi) * Math.cos(phi+Math.PI/2);
            var dy1F = (v1 * Math.cos(theta1 - phi) * (m1-m2) + 2*m2*v2*Math.cos(theta2 - phi)) / (m1+m2) * Math.sin(phi) + v1*Math.sin(theta1-phi) * Math.sin(phi+Math.PI/2);
            var dx2F = (v2 * Math.cos(theta2 - phi) * (m2-m1) + 2*m1*v1*Math.cos(theta1 - phi)) / (m1+m2) * Math.cos(phi) + v2*Math.sin(theta2-phi) * Math.cos(phi+Math.PI/2);
            var dy2F = (v2 * Math.cos(theta2 - phi) * (m2-m1) + 2*m1*v1*Math.cos(theta1 - phi)) / (m1+m2) * Math.sin(phi) + v2*Math.sin(theta2-phi) * Math.sin(phi+Math.PI/2);

            this.dx = dx1F;
            this.dy = dy1F;
            that.dx = dx2F;
            that.dy = dy2F;
        }
    };
            
    this.checkWallCollide = function(walls) {
        if (this.x - this.radius < walls.left) {
            this.x = walls.left + this.radius;
        } else if (this.x + this.radius > walls.right) {
            this.x = walls.right - this.radius;
        }
        if (this.y - this.radius < walls.top) {
            this.y = walls.top + this.radius;
        } else if (this.y + this.radius > walls.bottom) {
            this.y = walls.bottom - this.radius;
        }

        if (this.x - this.radius + this.dx * Particle.speedMultiplier < walls.left || this.x + this.radius + this.dx * Particle.speedMultiplier > walls.right) {
            this.dx *= -1;
            if (!muted) {
                // playNote(this.species, this.speed());
            }
        }
        if (this.y - this.radius + this.dy * Particle.speedMultiplier < walls.top || this.y + this.radius + this.dy * Particle.speedMultiplier > walls.bottom) {
            this.dy *= -1;
            if (!muted) {
                // playNote(this.species, this.speed());
            }
        }
    };
}

export { Particle, Element };