let drink = "Hello"

let age = Math.random()  > 0.5 ?20:"10";

//type Inference: type script automatically determines the tpes based on assigned value so if we againg assign it to diffrent ttpe it will throw error

//  age = true;  //here it will throw error because age is inferred as number | string

//tyype annotation: we can explicitly specify the type of variables

let course : string = "TypeScript"