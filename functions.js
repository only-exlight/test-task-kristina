/**
 * 
 * @param {Canvas Context} ctx 
 * @param {Number} a 
 * @param {Number} margin 
 * @param {String} color 
 */
let vectorDraw = (ctx, a, margin, color) => {
    const segment = 19.49,
        startLine = 35, //Начало линейки (подобрано эксперементально)
        yLine = 195; // Линия линейки по y 
    let radius = radiusCalculate(a);
    //Рисуем дугу
    ctx.beginPath();
    ctx.arc(startLine + margin + radius, yLine, radius, Math.PI, 0); //Аргументы x,y,R,начальный угол, конечный угол
    ctx.lineWidth = 3;
    ctx.strokeStyle = color; //Цвет контуров
    ctx.stroke();
    //Рисуем триугольник в конечной точке
    ctx.beginPath();
    ctx.moveTo(radius * 2 + startLine + margin + 6, yLine - 15); //Переместить перо в точку (x,y) x = диаметр + startLine + margin, по y выше на 15
    ctx.lineTo(radius * 2 + startLine + margin, yLine); //Нарисовать линию из предыдущей точки по диагонили вниз
    ctx.lineTo(radius * 2 + startLine + margin - 6, yLine - 15); //Нарисовать линию из предыдущей точки по диагонили вверх
    ctx.fillStyle = color; //Цвет закраски
    ctx.fill();
}

/**
 * 
 * @param {Number} value 
 */
let radiusCalculate = (value) => {
    const segment = 19.49; //Ширина одного деления (подобрано эксперементально)
    return value * segment;
}