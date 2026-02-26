//interface main goal is to give shape object or data

interface Chai {
  flavor: string;
  price: number;
}

const masala: Chai = {
  flavor: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = { id: 1, name: "chaicode cafee" };

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

interface ChaiRatings {
  [flavor: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
};

//interface property merges

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "subha",
  age: 25,
};
//here interfaces merges so we have to provide both propery

interface A {
  a: string;
}
interface B {
  a: string;
}

interface C extends A, B {}