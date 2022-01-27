// console.log('Test');

//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/

// Create our Person Prototype (Person class)
newPerson={}
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    printInfo(person){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
    addingAge(age){
        this.age+=3
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
    
}
const Gerardo = new Person('Gerardo,25');
const Tom = new Person ('Tom,30');
console.log(Gerardo);
console.log(Tom)

Gerardo.addingAge();
Gerardo.printInfo()
Tom.addingAge();
Tom.printInfo();


//=======Exercise #2=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


function replaceEvens(arr){
    //code goes here
    for (let i =0; i < arr.length; i++ )
    {
        if(i % 2 == 0)
        {
        arr.splice(i,1,'even index');
        }
         }  return arr
}
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
//Expected output

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]));