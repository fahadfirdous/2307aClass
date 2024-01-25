// function  sum(a,b){
//     var total = a+b;


//     return total;
//     // document.write(total);
//     // document.write("<br>");

// }

// // sum(5,1);


// var result = sum(5,5)*2;
// document.write("sdfsd"+result);




// document.write(salary);

function salaryBonus(salary, noOfYears){
    if(noOfYears == 2){
        var salary_bonus = (salary*10)/100;

    }
    else if(noOfYears == 3){
        var salary_bonus = (salary*15)/100;

    }
    else if(noOfYears == 5){
        var salary_bonus = (salary*25)/100;

    }
    else if(noOfYears > 5){
        var salary_bonus = (salary*30)/100;
        
    }
    else{
        var salary_bonus = 0;
        
    }
    // document.write(salary_bonus);
    return salary_bonus;
}

// salaryBonus(salary);
var salary = parseInt(prompt("Enter YOur salary"));
var no_of_year = parseInt(prompt("Enter YOur no of years"));


document.write("Ypur updated salary is "+ (salaryBonus(salary,no_of_year) + salary));









