

        var isFamily = prompt("are you with family");

        if(isFamily == "yes"){
            var age = parseInt(prompt("enteryour age"));

            if(age >=5 && age <=12){
                alert("Your are eligible for first ride");
            }
            else if(age >=12 && age <=25)
            {
                alert("Your are eligible for 2nd ride");

            }
            else if(age >=25 && age <=35)
            {
                alert("Your are eligible for 3rd ride");

            }
            else{
                alert("you are not eligible for rides ice cream khao or ghr jao ");
            }
        }
        else{
            alert("you are not eligible baji ko sath ly k ao");

        }