const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function setCanvasSize(width, height) {
    canvas.width = width;
    canvas.height = height;
}

function drawLine(percentage, lineWidth) {
    const lineLength = canvas.width * (percentage / 100);

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = 'black';
    
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(lineLength, canvas.height / 2);
    ctx.stroke();
}
