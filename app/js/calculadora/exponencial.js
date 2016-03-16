var CalculadorDeExponencial = function () {
    function exponencialDe(base, expoente) {
        return expoente >= 0 ? exponencialPositivo(base, expoente) : exponencialNegativo(base, expoente);
    }
    
    function exponencialPositivo(base, expoente) {
        var resultado = 1;
        for (var index = 0; index < expoente; index++) {
            resultado = resultado * base;
        }
        return resultado;
    }
    
    function exponencialNegativo(base, expoente) {
        var resultadoPositivo = exponencialPositivo(base, (-1 * expoente));
        return 1/resultadoPositivo;
    }
    
    return {
        exponencialDe: exponencialDe
    }
}