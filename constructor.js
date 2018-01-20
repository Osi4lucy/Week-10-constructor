console.log("JS loaded");
class Person {
    // your code here
  constructor (name, phone, call, birthday) {
    this.name = name;
    this.phone = phone;
//     this.call = call;
//     this.birthday = birthday;
   }
   greetings () {
     return "Hello, my name is " + this.name + ".";
   }
   addPhone () {
     return "";
   }
   call () {
     return "Calling " + this.name + "at " + this.phone;
   }
   birthday () {
     return "Wishing " + this.name + "a happy 29th " + this.birthday;
   }
};
// // remember to write a constructor function
 let jimmy = new Person("Jimmy");
jimmy.greetings ();

jimmy.addPhone("55551234");

console.log(jimmy.call());
// should say "Calling Jimmy at 55551234..."

console.log(jimmy.birthday());
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new Person("Jill");

jill.call();
// should say "Jill has no phone number saved."
