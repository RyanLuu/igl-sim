function distance(a, b) {
    var dx = a.x - b.x,
        dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}

CanvasRenderingContext2D.prototype.clear = function() {
    this.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
};

Math.nrand = function() {
	var x1, x2, rad, y1;
	do {
		x1 = 2 * this.random() - 1;
		x2 = 2 * this.random() - 1;
		rad = x1 * x1 + x2 * x2;
	} while(rad >= 1 || rad == 0);
	var c = this.sqrt(-2 * Math.log(rad) / rad);
	return x1 * c;
};

function hex2rgba(hex, alpha) {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
}

export { distance, hex2rgba };
