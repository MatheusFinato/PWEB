var Objeto1 = {
  tamanho: 'grande',
  peso: 'pesado'
}
alert("Tamanho: " + Objeto1.tamanho + "\nPeso: " + Objeto1.peso);

Objeto1.tamanho = 'mais grande';
Objeto1.peso = 'mais pesado';
alert("Tamanho: " + Objeto1.tamanho + "\nPeso: " + Objeto1.peso);

Objeto1['tamanho'] = ' muito grande';
Objeto1['peso'] = 'muito pesado';
alert("Tamanho: " + Objeto1.tamanho + "\nPeso: " + Objeto1.peso);