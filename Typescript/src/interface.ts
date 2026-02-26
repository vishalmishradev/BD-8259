type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

interface TeaRecipe {
  water: number;
  milk: number;
}

// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

// interface CupSize = "small" | "large";

//this incorrect way of declaring interface

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string; //"?" by adding this we are telling that its optional property
};

const u1: User = { username: "subha" };
const u2: User = { username: "subha", bio: "Software Engineer" };

//both are valid as here bio is optional

type config = {
  readonly appName: string;
  version: number;
};

const cfg: config = {
  appName: "vscode",
  version: 1,
};

// cfg.appName = "ChaiCode"
// //this will throw error as if i declare readonly so we can assign value one time only