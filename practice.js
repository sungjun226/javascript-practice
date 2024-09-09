let person = {
    name = "임성준",
    age = "22"
}

console.log(person.name)
console.log(person.age)


let name = "sungjun"
let age = 22
let residence = "busan"

console.log(typeof name)
console.log(typeof age)
console.log(typeof residence)


let a = 30
let b = 10

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)


let firstName = "lim"
let lastName = "sungjun"

console.log(firstName , lastName)

let inputAge = 17

if (inputAge >= 18) {
    console.log("성인입니다")
}else {
    console.log("미성년자 입니다.")
}

let adult = "성인"
let child = "미성년자"

console.log(inputAge >= 18 ? adult : child)

let arr = ['yellow' , 'blue' , 'black']

console.log(arr[0],arr[1],arr[2])

let arr1 = [1,2,3,4]
let sum = arr1.reduce((a,b) => {
    return a+b
})

console.log(sum)

let boolean1 = true
let boolean2 = false

console.log(boolean1 && boolean2)
console.log(boolean1 || boolean2)
console.log(!boolean1, !boolean2)