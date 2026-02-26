let response: any = "42";

//forceful type assertion
let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"Rich dad poor dad"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

//html check

const inputElement = document.getElementById("username") as HTMLInputElement;

//example of try catch block

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

//example

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirect to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirect to user dashboard");
    return;
  }

  role;
}

function neverReturn(): never {
  while (true) {}
}