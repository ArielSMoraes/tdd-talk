describe( "Calcula Exponencias:", function() {
    it("exponencial de 2 na 2 deve ser 4", function(){
        var calculadorDeExponencial = new CalculadorDeExponencial();
        
        var resultado = calculadorDeExponencial.exponencialDe(2,2);
        
        expect(resultado).toBe(4);
    });
    
    it("exponencial de 2 na 2 deve ser 4", function(){
        var calculadorDeExponencial = new CalculadorDeExponencial();
        
        var resultado = calculadorDeExponencial.exponencialDe(2,3);
        
        expect(resultado).toBe(8);
    });
    
    it("exponencial de qualquer numero na 0 é 1", function(){
        var calculadorDeExponencial = new CalculadorDeExponencial();
        
        var resultadoDe5na0 = calculadorDeExponencial.exponencialDe(5,0);
        var resultadoDe15na0 = calculadorDeExponencial.exponencialDe(15,0);
        
        expect(resultadoDe5na0).toBe(1);
        expect(resultadoDe15na0).toBe(1);
    });
    
    it("exponencial de 2 na -3 deve ser 0.125", function(){ 
        var calculadorDeExponencial = new CalculadorDeExponencial();
        
        var resultado = calculadorDeExponencial.exponencialDe(2,-3);
        
        expect(resultado).toBe(0.125);
    });
});