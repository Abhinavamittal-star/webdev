let fruits=['pear','apple','kiwi','melon']
let arr = [10,20,true,null,'hello',100]
console.log(fruits)

console.log(fruits.indexOf('apple')) //index

console.log(fruits.includes('banana')) //boolean checking of element - true
console.log(fruits.includes('water melon')) //boolean checking of element - false

// merging two arrays
let merge = arr.concat(fruits); 
console.log(merge);

//string to array
let str = 'hello world, nice to meet you good luck'
let sp1 = str.split('o'); // similar to stringTokenizer
console.log(sp1); // ['hell', ' w', 'rld, nice t', ' meet y', 'u g', '', 'd luck']

let sp2=str.split(''); // for converting a string into char array
console.log(sp2) // single character array

//Reverse a String
//doesnot modify the original array
console.log(sp2.reverse()) // reversed array

// Combining all elements into a string
let combine=sp2.join()
console.log(combine) // by default joined by comma

let combine1=sp2.join(' ')
console.log(combine1) // by default joined by space

let combine2=sp2.join('')
console.log(combine2) // by default joined by directly

//function to reverse a string
function reverse(s)
{
    let s1 = s.split('')
    let s2=s1.reverse()
    console.log(s2.join(''))
}

console.log(reverse('hello'))

//Deleting an element
//modify the original
let remove = fruits.splice(1,2) // fruits.splice(start index , number of elemnts)
console.log(remove)//prints the removed elements
console.log(fruits)// prints modified array

//adding a element
fruits.splice(2,0,'mango','water melon')
console.log(fruits)

//replacing elemnets
fruits.splice(1,2,'jackfruit','lichi') //replace melon and mango with jackfruit and lichi
console.log(fruits)

//for printing a substring array (from start index to end index)
let arr1 = [10,20,true,null,'hello',100]
let newarr = arr1.slice(1,3) //substring for array
console.log(newarr) // [20, true]
// can metion negative and outOfBound indexes also
// but negative will count from last
console.log(arr1.slice(-4,-1)) // [true, null, 'hello']

console.log(arr1.slice()) // full array