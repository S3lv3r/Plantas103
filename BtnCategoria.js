function SinFruta() {
    
    const Elemento = document.getElementById('SinFrutasS');
    const Posicion = Elemento.getBoundingClientRect().top;
    
    window.scrollTo({
        top: Posicion,
        behavior: 'smooth' 
    });
}
function ConFruta(){
    const Elemento = document.getElementById('ConFrutasS');
    const Posicion = Elemento.getBoundingClientRect().top;
    
    window.scrollTo({
        top: Posicion,
        behavior: 'smooth' 
    });
}