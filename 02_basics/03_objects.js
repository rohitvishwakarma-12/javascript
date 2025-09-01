// singleton
// Object.create 

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Rohit Vishwakarma",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "rohit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rohit@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "rohit@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);

