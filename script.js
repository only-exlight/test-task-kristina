window.onload = ()=> {
    let doc = document,
        a_span = doc.getElementById('a'),
        b_span = doc.getElementById('b'),
        res_inp = doc.getElementById('result'),
        inputAblock = doc.getElementById('input-a-block'),
        inputBblock = doc.getElementById('input-b-block'),
        ask = doc.getElementById('ask'),
        inputA = doc.getElementById('input-a'),
        inputB = doc.getElementById('input-b');

    let a = Math.floor(Math.random() * (9 - 6 + 1)) + 6,
        result = Math.floor(Math.random() * (14 - 11 + 1)) + 11,
        b = result - a,
        radius = 19.49 * a,
        radius2 = 19.49 * b;

    a_span.innerHTML = a;
    b_span.innerHTML = b;

    inputAblock.style.left = radius + 12 + 'px';
    inputBblock.style.left = radius2 + radius *2 -36 + 'px';

    let canvas = doc.getElementById('canvas'),
        ctx = canvas.getContext("2d"),
        img = new Image();
    img.src = 'sprite.png';
    canvas.height = '170';
    canvas.width = '875';

    img.onload = ()=>{
        ctx.drawImage(img,0,80);
        ctx.scale(1,0.5);
        oneVectorDraw(ctx,radius,a);
    }


    inputA.onchange = () => {
        if (inputA.value != a){
            inputA.style.color = 'red';
            a_span.style.background = 'yellow';
        } else {
            let span = document.createElement("SPAN");
            span.innerText = a;
            inputAblock.appendChild(span);
            inputAblock.removeChild(inputA);
            a_span.style.background = 'white';
            twoVectorDraw(ctx,radius2,radius,a,b);
        }
    }

    inputB.onchange = () => {
        if (inputB.value != b) {
            inputB.style.color = 'red';
            b_span.style.background = 'yellow';
        } else {
            let span = document.createElement("SPAN");
            span.innerText = b;
            inputBblock.appendChild(span);
            inputBblock.removeChild(inputB);
            a_span.style.background = 'white';
            ask.style.display = 'none';
            res_inp.style.display = 'inline-block';
        }
    }

    res_inp.onchange = () => {
        if (res_inp.value != result) {
            res_inp.style.color = 'red';
        } else {
            ask.style.display = 'inline-block';
            ask.innerHTML = result;
            res_inp.style.display ='none';
        }
    }
}