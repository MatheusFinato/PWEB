function baralho_normal() {

    var naipe = Math.floor(Math.random() * 4) + 1;
    switch (naipe) {
        case naipe = 1:
            naipe = "Paus"
            break;
        case naipe = 2:
            naipe = "Copas"
            break;
        case naipe = 3:
            naipe = "Espadas"
            break;
        case naipe = 4:
            naipe = "Ouros"
            break;
    }
    
    var numero = Math.floor(Math.random() * 13) + 1;
    switch (numero) {
        case numero = 1:
            numero = "Ás"
            break;
        case numero = 2:
            numero = "Dois"
            break;
        case numero = 3:
            numero = "Três"
            break;
        case numero = 4:
            numero = "Quatro"
            break;
        case numero = 5:
            numero = "Cinco"
            break;
        case numero = 6:
            numero = "Seis"
            break;
        case numero = 7:
            numero = "Sete"
            break;
        case numero = 8:
            numero = "Oito"
            break;
        case numero = 9:
            numero = "Nove"
            break;
        case numero = 10:
            numero = "Dez"
            break;
        case numero = 11:
            numero = "Valete"
            break;
        case numero = 12:
            numero = "Dama"
            break;
        case numero = 13:
            numero = "Rei"
            break;
    }

    alert("A carta tirada foi um " + numero + " de " + naipe);

    numero = null;
    naipe = null;
}
