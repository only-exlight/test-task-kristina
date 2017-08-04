//События загрузки страницы
window.onload = ()=> {
    //Получение элементов документа
    let aBox = document.getElementById('a'),
        bBox = document.getElementById('b'),
        resBox = document.getElementById('res'),
        inputResult = document.getElementById('result'),
        inputAblock = document.getElementById('input-a-block'),
        inputBblock = document.getElementById('input-b-block'),
        inputA = document.getElementById('input-a'),
        inputB = document.getElementById('input-b');
    //Инициализация canvas
    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d"),//Задание и сохранение контекста
        img = new Image();
    img.src = 'sprite.png';
    //Математика
    let a = Math.floor(Math.random() * (9 - 6 + 1)) + 6, //Получаем число а в диапозоне [6-9]
        result = Math.floor(Math.random() * (14 - 11 + 1)) + 11, //Получаем число b в диапозоне [11-14]
        b = result - a; //Получаем число b
    //Вывод в соответсвующие блоки
    aBox.innerText = a; bBox.innerText = b;
    //Задание отступов для полей ввода a,b
    inputAblock.style.left = radiusCalculate(a) + 12 + 'px';
    inputBblock.style.left = radiusCalculate(b) + radiusCalculate(a) * 2 - 36 + 'px';
    //Событие окончания загрузки изображения
    img.onload = () => {
        ctx.drawImage(img, 0, 80); //Отрисовка изображения
        ctx.scale(1, 0.5); //Сужение последущих отрисовок по оси y, 0.5 от первоночального
        vectorDraw(ctx, a, 0, 'purple'); //Рисуем первую стрелку
    }
    //Событие нажатия поля ввода числа a
    inputA.onkeyup = () => {
        if (inputA.value != a){
            inputA.style.color = 'brown';
            aBox.style.background = 'wheat';
        } else {
            let div = document.createElement("div"); //Создание нового div
            div.innerText = a; //Добавим текст
            inputAblock.appendChild(div); //Поместим созданный div в блок inputAblock
            inputAblock.removeChild(inputA); //Удалим в inputAblock input;
            aBox.style.background = 'white'; //Вернем background в white на случай если цвет менялся 
            vectorDraw(ctx, b, radiusCalculate(a) * 2,'purple'); //Отрисуем стрелочку 2
        }
    }
    //Событие нажатия поля ввода числа b
    inputB.onkeyup = () => {
        if (inputB.value != b) {
            inputB.style.color = 'firebrick';
            bBox.style.background = 'wheat';
        } else {
            let div = document.createElement('div');
            div.innerText = b;
            inputBblock.appendChild(div);
            inputBblock.removeChild(inputB);
            bBox.style.background = 'white';
            resBox.style.display = 'none'; //Скроем блок результата
            inputResult.style.display = 'block'; //Покажем поле ввода
        }
    }
    //Событие нажатия поля ввода результата
    inputResult.onkeyup = () => {
        if (inputResult.value != result) {
            inputResult.style.color = 'firebrick';
        } else {
            resBox.innerText = result;
            inputResult.style.display = 'none'; 
            resBox.style.display = 'block';
        }
    }
}