function Ordenar() {
	var num4 = document.getElementById("num4");
	var num5 = document.getElementById("num5");
	var num6 = document.getElementById("num6");

    arrayValores = [num4.value, num5.value, num6.value];
    arrayValores.sort();

    arrayValores.sort(function(num4, num5, num6){
        return num4 - num5 - num6;
    });

    alert("A ordem é: "+ arrayValores);
}

