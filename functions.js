let oneVectorDraw = (ctx, radius, a) => {
    ctx.beginPath();
    ctx.arc(radius + 35, 195, radius, 0, Math.PI, true);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(19.49 * a * 2 + 35 + 6, 195 - 15);
    ctx.lineTo(19.49 * a * 2 + 35, 195);
    ctx.lineTo(19.49 * a * 2 + 35 - 6, 195 - 15);
    ctx.fillStyle = 'red';
    ctx.fill();
}

let twoVectorDraw = (ctx, radius2, radius,a,b) => {
    ctx.beginPath();
    ctx.arc(radius2 + radius * 2 + 35, 195, radius2, 0, Math.PI, true);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'orange';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(19.49 * a * 2 + 19.49 * b * 2 + 35 + 6, 195 - 15);
    ctx.lineTo(19.49 * a * 2 + 19.49 * b * 2 + 35, 195);
    ctx.lineTo(19.49 * a * 2 + 19.49 * b * 2 + 35 - 6, 195 - 15);
    ctx.fillStyle = 'orange';
    ctx.fill();
}