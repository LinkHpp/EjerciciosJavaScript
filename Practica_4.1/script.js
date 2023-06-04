//ejercicio1();
//ejercicio2();
//ejercicio3();
//ejercicio4();
//ejercicio5();
//ejercicio6();
ejercicio7();


function ejercicio1(){

    var num1 = prompt("Dime el primer numero");
    var num2 = prompt("Dime el segundo numero");
    var num3 = prompt("Dime el tercer numero");

    if(num1 > num2){
        if(num1 > num3){
            document.write("El numero mas grande es " + num1);
        }
    }else if(num2 > num3){
        document.write("El numero mas grande es " + num2);
    }else{
        document.write("El numero mas grande es " + num3);
    }
}

function ejercicio2(){

    var num1 = prompt("Dime un numero");

    if (num1 > 0){
        if (num1%2 == 0){
            document.write("El numero " + num1 + " es par");
        }else{
            document.write("El numero " + num1 + " es impar");
        }
    }else{
        document.write("El numero es negativo");
    }
}

function ejercicio3(){

    var num1 = 0;

    for(var i = 0; i <= 100; i++){
        num1 = i + num1;
    }

    document.write(num1);
}

function ejercicio4(){
    
    var numeroInicial = parseInt(prompt("Ingrese un número entero positivo:"));

    var suma = 0;
  for (var i = numeroInicial + 1; i <= numeroInicial + 100; i++) {
    suma += i;
  }

    document.write(suma);

}

function ejercicio5(){

    var array = new Array();

    array[0] = prompt("Dime el primer numero");
    array[1] = prompt("Dime el segundo numero");
    array[2] = prompt("Dime el tercer numero");

    array.sort();

    document.write("El numero mas pequeño es " + array[0] + " y el mas grande es " + array[2]);


}

function ejercicio6(){

    var vector = new Array();
    var num1 = 1;
    var i = 0;

    while(num1 > 0){
        num1 = prompt("Dime un numero");
        vector[i] = num1;
        i++;

    }

    num2 = vector.length;

    vector.sort();

    document.write("El numero mas pequeño es " + vector[1] + " y el mas grande es " + vector[num2-1]);

}

function ejercicio7(){

    var faren = 0;
    var vector = new Array();
    var i = 0;

    while(faren != 999){
        faren = prompt("Dime un numero");

        var cel = 5/9*(faren-32);

        vector[i] = cel;

        i++;
    }

    vector.pop();

    document.write(vector);



}