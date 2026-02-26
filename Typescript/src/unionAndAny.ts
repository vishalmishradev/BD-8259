//union type: variable that can hold more than one type

let score: number | string = 33;

score = "44"; //this also valid

// realworld example with custom types

let apiResponse: "success" |"pending" | "error" = "success";

// apiResponse = "not valid"; //this will throw error because only above mentioned types are allowed


//any type: variable that can hold any type but it is not recommended to use any type because it defeats the purpose of typescript

let order:any;


