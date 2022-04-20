
const form = document.querySelector('#formulario');                                             //Capturei o formulário (o form do html)

form.addEventListener('submit', function (e) {                                              //Adicionei um escutador, um evento no formulário de submit
    e.preventDefault();                                                                     //Previni o default, pra não deixar esse formulário ser enviado
    const inputPeso = e.target.querySelector('#peso');                                      //Aqui eu capturei os dados do input
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);                                                           //tentei converter esses inputs para numeros
    const altura = Number(inputAltura.value);                                                          //se caso retornar um Nan que avalia como falso

    if (!peso) {                                                                                    //Se o peso não for avaliado como verdadeiro
        setResultado('Peso inválido', false);                                                       //vc seta o resultado 'peso invalido'
        return;                                                                                     //a flag false para colocar a class e dps retorna
    }
    if (!altura) {
        setResultado('Altura inválida', false);                                                        //mesma coisa
        return;
    }
    const imc = getImc(peso, altura);                                                                //calculo do imc     getIMC é a função específica que calcula o imc
    const nivelImc = getNivelImc(imc);                                                              //a var nivelIMC é o texto

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);                                                                        //set do resultado e a tag true para colocar a cor verde
});

function getNivelImc(imc) {                                                                         //criei um array (uma lista de strings) e baseado no imc q vamos receber na função, vou fazer alguma coisa
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    if (imc >= 39.9) return nivel[5];                                                       //foi checado de trás para frente
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

function getImc(peso, altura) {      
    const imc = peso / altura ** 2;                                                     //isso aqui faz o calculo do IMC
    return imc.toFixed(2);
};


function criaP() {
    const p = document.createElement('p');                                                    //função que cria o parágrafo
    return p;
}

function setResultado(msg, isValid) {                                                       //essa função seta o resultado, ela recebe uma mensagem e se esse resultado for válido
    const resultado = document.querySelector('#resultado');                                 //seleciona a div resultado, zera o html
    resultado.innerHTML = '';                                                               

    const p = criaP();                                                                              //cria um p ,com a função criaP

    if (isValid) {                                                                              //aqui eu checo, essa flag foi enviada como verdadeira ou falso
        p.classList.add('paragrafo-resultado');                                                 //se for verdadeiro, adiciona a class
    } else {
        p.classList.add('bad');                                                             //se for falso, adiciona a outra class
    }

    p.innerHTML = msg;                                                                  //aqui eu seto o innerHTML do parágrafo com uma mensagem que tô recebendo do msg
    resultado.appendChild(p);                                                           //aqui eu adiciono esse parágrafo no resultado
}
