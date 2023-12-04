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
    ["Apple","Orange"],["Banana","Pear"],["Jackfruit","Durian","Pineapple"]
]

// user.length = 3
// fruits.length = 3

// Console.log format
// console.log("Name : " + user[i].name + "\nFavorite : " + user[i].favorite)

// -----------------------  Start your code here!   --------------------------
for (let i = 0; i < fruits.length; i++) {
    user[i].favorite = [fruits[i]]
    console.log("Name : " + user[i].name + "\nFavorite : " + user[i].favorite)
}














// ---------------------------  End of the code   -----------------------------

// Result ----------------------
// Name : Ying
// Favorite : Apple,Orange
// Name : Karn
// Favorite : Banana,Pear
// Name : Sun
// Favorite : Jackfruit,Durian,Pineapple