// Office Hours Questions on methods and functions within objects and constructors

//  what makes this be considerd a method
function BlogPost(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.comments = [];
    this.printMetaData = function () {
      console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    };
  }

//  what makes this a method or function
  function addTwo(){
    // make belief code here
    function addFive (){
    // make belief code here
    }
  };
// how come this is method as an object even tho above function constructor is set up as a function to begin with.
  const object = {
    propertOne: 'blabla',
    propertTwo: 'blabla',
    propertThree: 3,
    method(){

    }
  }
