
/* Activity 1: Object Creation and Access */

// task1
const ObjBook = {
    title: "Atmosphere",
    author: "john",
    year: 1995,
}
// console.log(ObjBook);

// task2
// console.log(ObjBook.title);
// console.log(ObjBook.author);


/* Activity 2: Object Methods*/

// task3
const ObjBook1 = {
    title: "English Atmosphere",
    author: "john",
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    }
}

// console.log(ObjBook1.getDetails());

// task4
const ObjBook2 = {
    title: "English Atmosphere",
    author: "john",
    year: 1995,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updatedYear: function(newYear) {
        this.year = newYear ;   // year ko update kiya hai
    }
}

ObjBook2.updatedYear(2024);
// console.log(ObjBook2);


/* Activity 3: Nested Objects*/

// task5
const NestedObj = {
    title: "English Atmosphere",
    author: "john",
    library: {
        name:'Sir Mansoor',
        book: "English",
    }
}

// task6
// console.log(NestedObj.library.book);


/* Activity 4: Object Iteration*/

// task8
const Obj = {
    title: "English Atmosphere",
    author: "john",
    year: 2024,
}

// task9
for (const key in Obj) {
    console.log(key, Obj[key]);    
}