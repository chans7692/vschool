var shopper = {
    name: "Sarah",
    age: 3,
    hasList: true,
    groceryCart: ["Eggs, Bacon, Milk"],
    goShopping: function(){
        return this. name + " needs to pick up " + this.groceryCart;
    }
}

console.log(shopper.goShopping())