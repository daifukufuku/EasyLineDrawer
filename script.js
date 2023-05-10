const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function setCanvasSize(width, height) {
    canvas.width = width;
    canvas.height = height;
}

function drawLine(percentage, lineWidth) {
    // 描画する線の長さを計算
    const lineLength = canvas.width * (percentage / 100);

    // 描画設定
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = 'black';

    // 線を描画
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(lineLength, canvas.height / 2);
    ctx.stroke();
}
