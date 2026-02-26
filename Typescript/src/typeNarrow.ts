//type narrowing: here we reduce the type of variable from a broader type to more specific type within a certain block or context

function getDetails(kind:string|number){
    if(typeof kind === "number"){
        return `person is ${kind} years` //in this block kind is number type
    }

    return `person is ${kind}` //here kind is string type
}


//another example
function welcome(name?:string){
    if(name){
        return `welcome ${name}`;
    }
    return `welcome default`;
}

//example
function orderChai(size:"small" | "medium" |"large" | number){
    if(size == "small"){
        return `small cutting chai`
    }
    if(size == "medium" || size == "large"){
        return `make extra chai`
    }

    return `chai order #${size}`
}


class KulhadChai{
    serve(){
        return `Serving Kulhad chai`;
    }
}

class Cutting{
    serve(){
        return `Serving cutting chai`;
        
    }
}

function serve(chai:KulhadChai |Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve;
    }
}

//custom type

type ChaiOrder = {
    type:string;
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}


type MasalaChai = {type:"masala";spicelevel:number};
type GingerChai = {type:"ginger";amount:number};
type ElaichiChai = {type:"elaichi";aroma:number};


type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order:Chai){
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
        case "elaichi":
            return `Elaichi chai`
            break;
        case "ginger":
            return `Ginger chai`
            break;
    }
}

function brew(order:MasalaChai | GingerChai){
    if("spicelevel" in order){
        //
    }

}


//unknown type: it is like i know there is something but dont know what is yet

// You can put anything INTO it: Just like any, you can assign a string, number, object, or function to an unknown variable.

// You cannot take anything OUT of it blindly: unlike any, you cannot access properties, call methods, or assign it to other variables unless you prove to TypeScript what it is first.

let value: any;

value = true; // We assigned a boolean
value.toUpperCase(); // ❌ Runtime Error! boolean has no toUpperCase()
// TypeScript stays silent because 'any' allows everything.

let val: unknown;

val = true;
// val.toUpperCase(); // ❌ Compile Error: 'val' is of type 'unknown'.
// TypeScript stops you before you crash the code.
