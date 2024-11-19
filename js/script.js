function imprimir(text) {
    display.innerHTML += text;
}

function p(text,className=''){
    return `<p class='${className}'>${text}</p>`;
}

function tudoIncluso(lista, teste){
    return teste.every(i=>lista.includes(i));
}

function main() {
    let arreia = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    imprimir(arreia);

    arreia.splice(5, 1);

    imprimir(arreia);

    arreia = arreia.slice(2);

    imprimir(arreia);

    arreia.splice(0, 0, 0);

    imprimir(arreia);

    imprimir(tudoIncluso(arreia, [1,2,3]));

    imprimir(arreia.indexOf(7));
}

// main();