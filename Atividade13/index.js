function entrada_texto() {

    var radio = document.forms.formulario1.elements.converte.value; 
    var texto = document.forms.formulario1.elements.idTexto.value;
    
    if (texto == "") {
        alert("Campo obrigatório");
        document.forms.formulario1.elements[0].focus();
        return false;
    };

    if (radio == 1) {
        texto = texto.toLowerCase();
    } else if (radio == 2) {
        texto = texto.toUpperCase();
    } else {
        alert("Selecione entre maiúscula e minúscula");
        return false;
    }
    
    alert(texto);
    return true;
}