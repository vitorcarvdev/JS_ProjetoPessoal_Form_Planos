var valorTotal = document.querySelector('#ResultadoSoma');
        function FazerCalculo(){

            var tipoEmpresa = document.getElementById("tipoEmpresa");
            var valortipEmpresa = tipoEmpresa.value;
            valortipEmpresa = parseFloat(valortipEmpresa);
        
            var quantFunc = document.getElementById("quantFunc");
            var valorquantFunc = quantFunc.value;
            valorquantFunc = parseFloat(valorquantFunc);

            console.log(valortipEmpresa);
            console.log(valorquantFunc);

            if(valortipEmpresa === 0){
                 alert("Escolha Tipo de Empresa");
                 valorTotal.innerHTML = '';
            } if(valorquantFunc === 0){
                alert("Escolha quantidade de Funcionarios");
            } else {
                var total = 'R$ ' + (valortipEmpresa + valorquantFunc) + ',00';
                valorTotal.innerHTML = total;
            }
        }