const canvas = document.getElementById('cns');
const ctx = canvas.getContext('2d');

let i = 20;
setInterval(() => {
    i++
    ctx.clearRect(0, 0, 500, 500);

    for(y = 1; y < 9; y++){
        for (let x = i - 10; x < i; x++) {
            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.arc(250 + Math.sin((i + x) * (y * 0.01)) * (200 - y * 20), 250 + Math.cos((i + x) * (y * 0.01)) * (200 - y * 20), 10, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}, 20);