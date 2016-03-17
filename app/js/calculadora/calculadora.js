var Calculadora = function (exponencial, fatorial, raizCubica) {
    
    function calc(number1, number2, operacao) {
        if(operacao == "exponencial") {
            return exponencial.exponencialDe(number1, number2);
        }
        if(operacao == "raizCubica") {
            return raizCubica.raizCubicaDe(number1, number2);
        }
    }
    
    return {
        calc: calc
    }
}