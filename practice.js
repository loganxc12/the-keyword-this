//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //The "this" keyword is similaar to prononous in english (he, she) and, like pronouns, is used to refer to an object that the function is bound to. THIS gives you access to context.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //1. 
      //2. 
      //3.
      //4.

  // 3) What is the difference between call and apply?

      //Call and apply are very similar, both accept an object to use as context and other parameters. The difference is that apply lets you accept argurments as an ARRAY while call requires parameters to be listed.

  // 4) What does .bind do?

      //.bind explicitly binds a function to a specified object that, when called, will have the "this" keyword attached to it. It also accepts additional arguements that are passed into the bound function when it's invoked.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
        username: 'humples',
        email: 'humples@giblets.com',
        getUsername: function() {
            return this.username;
        }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

 function Car(make, model, year) {
     this.make = make;
     this.model = model;
     this.year = year; 
     this.move = 0;
     this.moveCar = function() {
         this.move += 10;
         return this.move;
     }
 }
         
         

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  var priusYear = getYear.bind(prius);
  priusYear();

  var mustangYear = getYear.bind(mustang);
  mustangYear();


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Nothing, because it's looking for a username in the global scope.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //The global window object.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.


setTimeout(getMyUsername.bind(myUser), 5000);




