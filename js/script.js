const tipoEmpresa = document.getElementById("tipoEmpresa");
const faixamei = document.getElementById("faixamei");
const faixasimples = document.getElementById("faixasimples");
const faixalpresumido = document.getElementById("faixalpresumido");

function ativarModalidade(elemento){
    if(elemento.value == 1){
        if (faixamei.classList) {
            faixamei.classList.add("red")
            tipoEmpresa.classList.add("ocultar")
    }
        else faixamei.className += " red";
    } if(elemento.value == 2){
        if (faixasimples.classList) {
            faixasimples.classList.add("green")
            tipoEmpresa.classList.add("ocultar")
    }
        else faixasimples.className += " green";
    } if(elemento.value == 3){
        if (faixalpresumido.classList){
            faixalpresumido.classList.add("blue")
            tipoEmpresa.classList.add("ocultar")
        }
        else faixalpresumido.className += " blue";
    }  
}


var valorTotal = document.querySelector('#ResultadoSoma');

function FazerCalculo(){

    var tipoEmpresa = document.getElementById("tipoEmpresa");
    var tipoEmpresaFunc = tipoEmpresa.value;
    tipoEmpresaFunc = parseFloat(tipoEmpresaFunc);

    var tipoSeg = document.getElementById("tipoSeg");
    var tipoSegFunc = tipoSeg.value;
    tipoSegFunc = parseFloat(tipoSegFunc);

    var tipoSegSimples = document.getElementById("tipoSegSimples");
    var tipoSegSimplesFunc = tipoSegSimples.value;
    tipoSegSimplesFunc = parseFloat(tipoSegSimplesFunc);

    var quantFunc = document.getElementById("quantFunc");
    var valorquantFunc = quantFunc.value;
    valorquantFunc = parseFloat(valorquantFunc);

    var faturM = document.getElementById("faturM");
    var faturMFunc = faturM.value;
    faturMFunc = parseFloat(faturMFunc);

    var qntFlpres2 = document.getElementById("qntFlpres");
    var qntFlpresFunc = qntFlpres2.value;
    qntFlpresFunc = parseFloat(qntFlpresFunc);

    var faMlpres2 = document.getElementById("faMlpres");
    var faMlpresFunc = faMlpres2.value;
    faMlpresFunc = parseFloat(faMlpresFunc);

    if(tipoEmpresaFunc == 0){
        alert("Escolha um tipo de empresa")
    }  else {
        var total = 'R$ ' + (tipoSegFunc + tipoSegSimplesFunc + valorquantFunc + qntFlpresFunc + faMlpresFunc) + ',00 por mês';
        valorTotal.innerHTML = total;
    }
}
