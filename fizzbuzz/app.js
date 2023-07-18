    //Fizzbuzz
    for( var i=1; i <=100; i++){

        if (i % 3 === 0 && i % 5 === 0){
            document.write("<b> FizzBuzz</b> "+ i + "<br>")
        }
        else if (i % 5 === 0){
           document.write("Buzz" + i + "<br>");
        }
        else if(i % 3 === 0){
            document.write("Fizz"+ i + "<br>");
        }
    }