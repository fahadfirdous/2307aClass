
//TYPES
//1: system defined function
    // a: non-parametric  b: parametric

//2: user defined fucntion
    // a: non-parametric  b: parametric


// system defined function
// prompt()
// parseFloat()
// alert()


// function sum(){
//     var num1 =5;
//     var num2 =10;
//     var total=num1+num2;
//     document.write(total);
// }
// sum();



// function sumParametric(num1, num2){
//     var num1 = num1;
//     var num2 = num2;
//     var total=num1+num2;
//     document.write(total);
// }
// sumParametric(2,6);

        

//  var number  = prompt("Sdfsdfsd");

// if(!number){
//     document.write("behtareeen");
// }


function Student(stName = "Rohail", age = 20, city = "Lahore", country= "Pakisatn"){

    document.write("Student name is " +stName+ "<br>" );

    // document.write("Student name is stName <br>");
    document.write("Student age is  "+ age+ "<br>");
    document.write("Student city is  "+ city+" <br>");
    document.write("Student countrt is  "+ country+ "<br>");


}

Student("Ali" , 20 , "Karachi" , "Pakistan");

document.write("----------------------------------------<br>");
Student();