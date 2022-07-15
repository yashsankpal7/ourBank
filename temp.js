

// Functional Programming

// First class variable
// Higher Order Funtions



//rest operator

function add(...a){
  console.log(a)
}


add(10,20,30)
add(10,20,30,10,20,30,10,20,30,10,20,30)
add()


//spread operator

let emp = ["Ravi",25,3000,"Tester"]

function display(name,age,salary,desig){
  console.log(name,age,salary,desig);
}

display(...emp);

let emp1 = ["Ravi",25,3000,"Tester"]
let emp2= ["Ravi",25,3000,"Tester"]
let emp3 = ["Ravi",25,3000,"Tester"]


console.log([...emp1,...emp2,...emp3]);


