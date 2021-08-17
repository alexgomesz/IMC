const calcular = document.getElementById("botao");



function imc(){
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const imc = document.getElementById("imc");
    const resultado = document.getElementById("resultado");

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorImc = (peso/(altura*altura)).toFixed(2);

        let res ='';
        resultado.textContent = valorImc;

        if(valorImc < 18.5){
            res = 'abaixo do peso!';
        }else if(valorImc < 25){
          res = 'com o peso ideal!';
        }else if(valorImc < 30){
          res = 'um pouco acima do peso';
        }else if(valorImc < 35){
            res = 'com obesidade grau I!';
        }else if(valorImc < 40){
            res = 'com obesidade grau II!';
        }else{
            res = 'com obesidade grau III!';
        }
        resultado.textContent = `${nome}, seu IMC é ${valorImc} e você está ${res}`;
    } else{
        resultado.textContent = 'Preencha os dados';
    }
    
   
}

calcular.addEventListener('click', imc);