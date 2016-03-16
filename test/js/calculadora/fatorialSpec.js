describe( "Calcula Fatorial:", function() {
    it("fatorial de 4 deve ser 24", function(){
        var fatorial = new Fatorial();
        
        var fatorialDe4 = fatorial.fatorialDe(4);
        
        expect(fatorialDe4).toBe(24);
    });
});