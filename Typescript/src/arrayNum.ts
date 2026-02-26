const chaiFlavours: string[] = ["Masala", "Adrak"];

const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 3.8, 5.0];

type chai = {
  name: string;
  price: number;
};

const menu: chai[] = [
  {
    name: "Masala chai",
    price: 15,
  },
  {
    name: "Adrak chai",
    price: 25,
  },
  {
    name: "lemon chai",
    price: 10,
  },
];

const cities: readonly string[] = ["Delhi", "Kolkata", "Ahmedabad"];

// cities.push("Pune")
//this will throwugh errror as its readonly we can assign it once

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//tuple
let chaiTuple: [string, number];

chaiTuple = ["Masala", 20];
// chaiTuple = [20,"Masala"]; //this is not allowed as we declare that first elemnt will be string and 2nd will be number

//another example
let userInfo: [string, number, boolean?];
userInfo = ["subha", 25, true];

//readonly tuples

const location: readonly [number, number] = [28.66, 32.22];

//named tuple
const chaiItems: [name: string, price: number] = ["Masala", 25];

//enums

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making: ${type}`);
}

makeChai(ChaiType.MASALA);

//generally in enum all value is are same data type it is good practice
// but its possible to declare diffrent data type also

let t: [string, number] = ["chai", 10];
t.push("extra");