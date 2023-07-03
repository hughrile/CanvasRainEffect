var canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
setInterval(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}, 1000);

var c = canvas.getContext('2d');

var generateShapes = function(q) {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for(i=0;i<q;i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var xwidth  = Math.random() * 3;
        var xheight  = Math.random() * 100;
        var rainAlpha = Math.random() * 0.8;
        var rainHue = `rgba(0,0,150,${rainAlpha}`;

        c.fillStyle = `${rainHue}`;
        c.fillRect(x, y, xwidth, xheight);
    };
}

//generateShapes(1000);
var q = 10; // quantity of drops
var i = 1; // quantity increase
var s = 5; // forced speed of ramp up
setInterval(() => {
    generateShapes(q);
    if (q < 100)  {
        i = Math.random() * s; // randomised increase
        q = q + i
        console.log(`${q}, ${i}`);
    }
    
}, 1000 / 24);