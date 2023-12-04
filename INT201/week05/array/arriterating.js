const str = [...'hello world']
for (const entry of str.entries()) {//.entries() is method of array to return index and value
    console.log(entry);

}
// [ 0, 'h' ]
// [ 1, 'e' ]
// [ 2, 'l' ]
// [ 3, 'l' ]
// [ 4, 'o' ]
// [ 5, ' ' ]
// [ 6, 'w' ]
// [ 7, 'o' ]
// [ 8, 'r' ]
// [ 9, 'l' ]
// [ 10, 'd' ]
for (const [ind,value] of str.entries()) {
    console.log(ind);
    console.log(value);
}
// 0
// h
// 1
// e
// 2
// l
// 3
// l
// 4
// o
// 5

// 6
// w
// 7
// o
// 8
// r
// 9
// l
// 10
// d