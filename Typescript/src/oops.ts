// class Chai{
//     flavour:string;
//     price:number

//     constructor(flavour:string,price:number){
//         this.flavour = flavour
//         this.price = price

//     }
// }

// const masalaChai = new Chai("Ginger",20);

//access modifier

class Chai {
  public flavor: string = "Masala";

  private secretIngredients = "Cardamon";

  reveal() {
    return this.secretIngredients;
  }
}

const c = new Chai();
c.reveal();

class Shop {
  protected shopName = "chai corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName; //ok
  }
}

class Walet {
  #balance = 100; //this is also private syntax

  getBalance() {
    return this.#balance;
  }
}

const w = new Walet();

class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

//getter and setters
class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) {
      throw new Error("Too sweet");
    }
    this._sugar = value;
  }
}

const n = new ModernChai();
n.sugar = 3;

//static

class EkChai {
  static shopName = "Chaicode cafee";

  constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

//abstarct class

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {
    console.log("Brewing chai");
  }
}

//compostion
class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}

//keyword:  who can see it              Does it live on the object (this)?
// public:	Everyone	                Yes
// private	Only this Class	            Yes
// private	Only this Class	            Yes
//static    everyone via classname      No