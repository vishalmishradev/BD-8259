let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak chai",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};

//duck typing
type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup;

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "subha",
  password: "123456",
};

//splitout datatype

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("updateing chai with", updates);
};

//here by using partial we make all value optional

updateChai({ price: 25 }); //here we dont get error as we make all value optional
//note: also empty object will not give any error

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

//Required keyword makes all value required it doesnot care about if in the type defination any thing was optional

// placeOrder({name:"masala chai"})
//it will through error as we make all value required in the function though it was optional in the type defination

placeOrder({ name: "ginger chai", quantity: 2 }); //correct