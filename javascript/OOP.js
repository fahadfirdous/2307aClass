//oop    object oriented programming

// Base of oop
    // 1: classes
    // 2: object

//CLASS
    // 1: propertfa
    // 2: methods


class Product{
    product_name;
    price;
    brand;
    description;

    constructor(p , pr , b , d){   // reference variable
        this.product_name = p;
        this.price = pr;
        this.brand = b;
        this.description = d;
    }
    
    intro(){
    
        console.log("hello");
    }

    productDetail(){
        console.log("product name is "+this.product_name+"<br>");
        console.log("product price is "+this.price+"<br>");
        console.log("product brancd is "+this.brand+"<br>");
        console.log("product descrtiopt is "+this.description+"<br>");
        
    }
    
    
    
}
var product1 = new Product("bike",50000,"honda","sdfsdfgsdg");
// var product2 = new Product("bike",50000,"honda","sdfsdfgsdg");
var product3 = new Product("bus",5000034,"honda","sdfssdgdgjdfgsdg");

//  console.log(product1.product_name);
// product1.productDetail();

var product2 = new Product("car",5120121,"toyota","thuis gahf ajhha");
// product2.productDetail();
product3.productDetail();
// var product1 = new Product();
// product1.product_name = "watch";
// product1.price = 5000;
// product1.brand = "casio";
// product1.description ="sdgdghfdj";


// console.log(product1.product_name);


// var product2 = new Product();
// product2.product_name = "mobile";
// product2.price = 50000;
// product2.brand = "samsung";
// product2.description = "sdfsdf";

// console.log(product2.product_name);

// product1.intro();