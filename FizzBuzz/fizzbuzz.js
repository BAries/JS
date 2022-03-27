var numeros = 100;

for(var i = 1; i <= 100; i++){
    if(i%3 == 0 && i%5 == 0){ //¿Es divisible entre 3 Y entre 5?
        document.write("FizzBuzz <br>");
    }else if(i%3 == 0){ //¿Es divisible SOLAMENTE entre 3?
        document.write("Fizz <br>");
    }else if(i%5 == 0){ //¿Es divisible SOLAMENTE entre cinco?
        document.write("buzz <br>");
    }else{ //Si llegamos hasta acá, no es divisible ni entre 3 ni entre 5.
        document.write(i + "<br>");
    }
}