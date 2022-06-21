const telaCalc = document.querySelector("#tela")

let operacaoAtual=""
let quantidadeMaxSinal= operacaoAtual.length+1;
let casaDecimal= 0;
let expressao="";

const num7 = document.querySelectorAll(".numeros")[0]
const num8 = document.querySelectorAll(".numeros")[1]
const num9 = document.querySelectorAll(".numeros")[2]

const num4 = document.querySelectorAll(".numeros")[3]
const num5 = document.querySelectorAll(".numeros")[4]
const num6 = document.querySelectorAll(".numeros")[5]

const num1 = document.querySelectorAll(".numeros")[6]
const num2 = document.querySelectorAll(".numeros")[7]
const num3 = document.querySelectorAll(".numeros")[8]

const num0 = document.querySelectorAll(".numeros")[9]

function adicionarTela(tecla){
    telaCalc.value+=tecla.innerText;
    if(quantidadeMaxSinal==1){
        quantidadeMaxSinal--
    }
    if(casaDecimal==0){
        casaDecimal++
    };
}
function limparTela(){
    telaCalc.value="";
    operacaoAtual="";
    quantidadeMaxSinal=1;
}
function deleteTela(){
    telaCalc.value=telaCalc.value.slice(0,telaCalc.value.length-1)
}
function somar(){
    if(quantidadeMaxSinal<1){
        operacaoAtual="+";
        quantidadeMaxSinal++
    telaCalc.value+=operacaoAtual;
    }
    casaDecimal--

}
function subtrair(){
    if(quantidadeMaxSinal<1){
        operacaoAtual="-";
        quantidadeMaxSinal++
    telaCalc.value+=operacaoAtual;
    }
    casaDecimal--
}
function multiplicar(){
    if(quantidadeMaxSinal<1){
        operacaoAtual="*";
        quantidadeMaxSinal++
    telaCalc.value+=operacaoAtual;
    }
    casaDecimal--
}
function dividir(){
    if(quantidadeMaxSinal<1){
        operacaoAtual="/";
        quantidadeMaxSinal++
    telaCalc.value+=operacaoAtual;
    }
    casaDecimal--
}
function pontoFlutuante(){
    if(casaDecimal==1){
        telaCalc.value+=".";
        casaDecimal++;
    }
}
function resultado(){
    expressao=eval(telaCalc.value);
    telaCalc.value=expressao;
}

