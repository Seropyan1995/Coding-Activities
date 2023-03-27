// TODO: Add a comment describing what kind of function this is
// this is a constructor function that takes in the paramaeters of authorName, title, text and createdOn  with a variable comment that creates an empty array as well as there being a method called printMetaData that console.logs a template literal referencing authorName and createdOn using the this.
// its good to mention that the printMetaData is a method when it is put inside of an constructor object otherwise on its own would be a funciton.
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

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
//this code is to add a comment to a BlogPost object comments []
BlogPost.prototype.addComent = function(comment) {
  this.comments.push(comment);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);
post.addComent('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
//  the post.addComent('Nice post, I like it!'); will be put in the console as an array
console.log(post.comments);
