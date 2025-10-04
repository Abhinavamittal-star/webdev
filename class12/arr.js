let arr = [10,20,true,null,'hello',100]
console.log(arr)//full array
console.log(arr.length)//only length

console.log(arr[3])
console.log(typeof arr[4])

console.log(arr[6])
//undefined

//modify elements
arr[6]='new'
console.log(arr)

arr[10]='new'
console.log(arr)
//will add at 10th position but 7,8,9 are empty

console.log(arr[8])//undefined

let fruits=['pear','apple','kiwi','melon']
for(let i = 0;i<fruits.length;i++)
{
    console.log(fruits[i])
}

//common array methods
fruits.push('mango') //insert elment at the end
console.log(fruits)

fruits.pop() //remove 1 elemnt from the end
console.log(fruits)

fruits.shift() //remove 1 elemnt from the start
console.log(fruits)

fruits.unshift('banana','green apple' ) //insert elment at the end
console.log(fruits)

//using push and unshift multiple elments can be added {IMP} 
