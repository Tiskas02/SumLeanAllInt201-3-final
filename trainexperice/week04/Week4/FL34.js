let user = [
    {
        id:1,
        name:"Ying",
        favorite:[]
    },
    {
        id:2,
        name:"Karn",
        favorite:[]
    },
    {
        id:3,
        name:"Sun",
        favorite:[]
    },
]

let fruits = [
    {
        toID:1,
        fruit:"Apple"
    },
    {
        toID:1,
        fruit:"Orange"
    },
    {
        toID:2,
        fruit:"Banana"
    },
    {
        toID:2,
        fruit:"Pear"
    },
    {
        toID:3,
        fruit:"Jackfruit"
    },
    {
        toID:3,
        fruit:"Durian"
    },
    {
        toID:3,
        fruit:"Pineapple"
    },
    {
        toID:2,
        fruit:"Strawberry"
    },
    {
        toID:1,
        fruit:"Grape"
    },
    {
        toID:3,
        fruit:"Longan"
    },
]

// user.length = 3
// fruits.length = 10
// Note : Nested ForLoop.

// Console.log format
// console.log("Name : " + user[i].name + "\nFavorite : " + user[i].favorite)

// -----------------------  Start your code here!   --------------------------

for (let i = 0; i < user.length; i++) {
    for (let j = 0; j < fruits.length; j++) {
       if(user[i].id === fruits[j].toID){
        // user[i].favorite = [...user[i].favorite,...fruits[j].fruit]//can't do this
        // user[i].favorite = [...user[i].favorite,fruits[j].fruit]
        user[i].favorite.push(fruits[j].fruit)
       }
        
    }
    console.log("Name : " + user[i].name + "\nFavorite : " + user[i].favorite)
}












// ---------------------------  End of the code   -----------------------------

// Result ----------------------
// Name : Ying
// Favorite : Apple,Orange,Grape
// Name : Karn
// Favorite : Banana,Pear,Strawberry
// Name : Sun
// Favorite : Jackfruit,Durian,Pineapple,Longan