function pesquisa(){
    if(document.forms.formulario1.elements.r1.checked){
        alert("Volte sempre");
        return
    }
    alert("Olá novamente");

}
function validarDados() {
    if (document.forms.formulario1.elements[0].value == "" || document.forms.formulario1.elements[0].length < 10) {
        alert("Por favor, verifique o preenchimento do campo 'Nome'");
        document.forms.formulario1.elements[0].focus();
        return false;
    };

    if (document.forms.formulario1.elements["idEmail"].value == "" || document.forms.formulario1.elements["idEmail"].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
        alert("Por favor, verifique o preenchimento do campo 'e-mail'");
        document.forms.formulario1.elements.idEmail.focus();
       return false;
    }

    if (document.forms.formulario1.elements.idMensagem.value == "" || document.forms.formulario1.elements.idMensagem.value.length < 20) {
        alert("O campo 'mensagem' precisa ter mais de 50 caracteres");
        document.getElementById("idMensagem").focus();
        return false;
    }
    if(!(document.forms.formulario1.elements.r1.checked || document.forms.formulario1.r2.checked)){
        alert("Preencha a pesquisa");
        return false;
    }
    pesquisa();
    return true;
}