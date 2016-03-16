var Fatorial = function () {
    function fatorialDe( numero ) {
        var operando = 1,
            total = 1;
            
        while ( operando <= numero ) {
            total = total * operando;
            operando = operando + 1;
        }
        
        return total;
    }
        
    return{
        fatorialDe: fatorialDe
    }
}