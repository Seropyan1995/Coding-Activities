// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
    constructor(authorName, title, text, createdOn){
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
// TODO: Give BlogPost a property called 'comments' that is set to an empty array.
        this.comments = [];

    }
// TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.
    printMetaData(){
        console.log(`Created by ${this.authorName} on ${this.createdOn}`)
    }
// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
    addComment(comment){
        this.comments.push(comment)
    }
}
// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.
class Comment{
    constructor(authorName, text, createdOn, reaction){
        this.authorName = authorName;
        this.text = text;
        this.createdOn = createdOn;
        this.reaction = reaction;
    }
// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.
    printMetaData(){
        console.log(`Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`)
    }
}
// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment(
    'Authos Name:',
    'Text:',
    '12/12/2022',
    '🐶😺',
    )
// TODO: Create a new object using the BlogPost class constructor.
const newBlog = new BlogPost(
    'Authors Name 2:',
    'Authors Title:',
    'Authors Text:',
    '12/18/2022'
)
// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
newBlog.addComment(newComment)
// TODO: Print the meta data for both the BlogPost and the Comment to the console.
newBlog.printMetaData()
newComment.printMetaData()
