describe("Calculadora:", function() {
    var calculadora, raizCubica;
    
    beforeEach(function() {
        raizCubica = {raizCubicaDe: function(){}}
        spyOn(raizCubica, 'raizCubicaDe');
        calculadora = new Calculadora(new CalculadorDeExponencial(), new Fatorial(), raizCubica);
    });
    
    it("calcula um exponencial", function() {
        var result = calculadora.calc(2,2,"exponencial");
        expect(result).toBe(4);
    });
    
    it("Deve chamar o metodo que calcula uma Raiz Cubica", function() {
        calculadora.calc(125,3,"raizCubica");
        expect(raizCubica.raizCubicaDe).toHaveBeenCalled();
    });
  
});