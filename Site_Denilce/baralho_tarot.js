function baralho_tarot() {

    var arcana = Math.floor(Math.random() * 21) + 1;
    switch (arcana) {
        case arcana = 1:
            arcana = "O Louco"
            break;
        case arcana = 2:
            arcana = "O Mago"
            break;
        case arcana = 3:
            arcana = "A Suma Sacerdotisa"
            break;
        case arcana = 4:
            arcana = "A Imperatriz"
            break;
        case arcana = 5:
            arcana = "O Hierofante"
            break;
        case arcana = 6:
            arcana = "Os Namorados"
            break;
        case arcana = 7:
            arcana = "A Carruagem"
            break;
        case arcana = 8:
            arcana = "A Justiça"
            break;
        case arcana = 9:
            arcana = "O Eremita"
            break;
        case arcana = 10:
            arcana = "A Roda da Fortuna"
            break;
        case arcana = 11:
            arcana = "A Força"
            break;
        case arcana = 12:
            arcana = "O Enforcado"
            break;
        case arcana = 13:
            arcana = "A Morte"
            break;
        case arcana = 14:
            arcana = "A Temperança"
            break;
        case arcana = 15:
            arcana = "O Diabo"
            break;
        case arcana = 16:
            arcana = "A Torre"
            break;
        case arcana = 17:
            arcana = "A Estrela"
            break;
        case arcana = 18:
            arcana = "A Lua"
            break;
        case arcana = 19:
            arcana = "O Sol"
            break;
        case arcana = 20:
            arcana = "O Julgamento"
            break;
        case arcana = 21:
            arcana = "O Mundo"
            break;
    }

    alert("A carta tirada foi " + arcana);

    arcana = null;
    naipe = null;
}
