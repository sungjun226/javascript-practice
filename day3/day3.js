// 객체 리터럴을 사용하여 이름이 "홍길동", 나이가 25인 person 객체를 만들어보세요.

// let person = {
//     name : '홍길동',
//     age : 25
// }

// 아래 car 객체의 brand 속성에 접근하여 콘솔에 출력해보세요.

// const car = { brand: "Toyota", model: "Corolla" };

// console.log(car.brand)

// person 객체가 sayHello 메소드를 가지고 있습니다. 이를 호출하여 콘솔에 "Hello, I am Alice."를 출력하세요.

// const person = {
//     name: "Alice",
//     sayHello: function() {
//       console.log("Hello, I am " + this.name + ".");
//     }
//   };

// person.sayHello()


// person 객체에 greet 메소드를 추가하여 "Hi, I'm [name]"을 출력하도록 만들어보세요

// const person = { 
//     name: "Bob" ,
//     greet : function(){
//         console.log(`Hi, I'm ${this.name}`)
//     }

//  };

//  person.greet()

// Person이라는 생성자 함수를 사용하여 이름과 나이를 속성으로 가진 객체를 만들고, 해당 객체로 이름이 "John", 나이가 30인 객체를 생성하세요

// function Person (name,age) {
//     this.name = name;
//     this.age = age;
// }

// let person1 = new Person('john',30)

// 이름과 나이를 속성으로 가진 객체 배열에서 나이가 18 이상인 사람만 필터링하세요.

// const people = [
//     { name: "John", age: 17 },
//     { name: "Jane", age: 20 },
//     { name: "Paul", age: 15 },
//     { name: "Mark", age: 25 }
//   ];

// console.log(people.filter((a) => a.age >= 18))

// "Apple", "Banana", "Orange"를 요소로 가진 배열을 만들어보세요.

// let fruits = ["Apple", "Banana", "Orange"]

// 아래 배열의 두 번째 요소를 출력해보세요.

// const fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits[1])

// numbers 배열에 숫자 5를 추가해보세요.

// const numbers = [1, 2, 3, 4];
// numbers.push(5)

// colors 배열에서 마지막 요소를 제거하세요.

// const colors = ["Red", "Green", "Blue"];

// colors.pop()

// days 배열의 첫 번째 요소를 제거하세요.

// const days = ["Monday", "Tuesday", "Wednesday"];

// days.shift()

// console.log(days)

// names 배열의 맨 앞에 "Alice"를 추가하세요.

// const names = ["Bob", "Charlie"];

// names.unshift('Alice')
// console.log(names)

// numbers 배열의 각 요소를 forEach를 사용하여 출력하세요.
// const numbers = [1, 2, 3];

// numbers.forEach(function(a){
//     console.log(a)
// })

// numbers 배열의 각 요소를 2배로 변환한 새로운 배열을 만드세요.
// const numbers = [1, 2, 3, 4];
// let numbers1 = numbers.map((a) => a*2)

// console.log(numbers1)

// ages 배열에서 18세 이상인 숫자만 필터링하세요.

// const ages = [12, 18, 20, 14, 25];

// console.log(ages.filter((a) => a>=18))

// prices 배열의 합계를 구하세요.

// const prices = [10, 20, 30, 40];

// console.log(prices.reduce((a,b) => a+b))

// 아래 배열에 "Banana"가 포함되어 있는지 확인하세요.

// const fruits = ["Apple", "Orange", "Grapes"];

// console.log(fruits.includes('Banana'))

// numbers 배열을 오름차순으로 정렬하세요.

// const numbers = [5, 2, 8, 1, 3];

// numbers.sort()

// console.log(numbers)

// letters 배열을 뒤집어보세요.

// const letters = ["a", "b", "c", "d"];

// letters.reverse()

// console.log(letters)

// animals 배열에서 첫 번째와 두 번째 요소를 잘라내어 새로운 배열을 만드세요.

// const animals = ["Cat", "Dog", "Elephant", "Lion"];

// let animals1 = animals.slice(2)

// console.log(animals1)

// fruits 배열의 두 번째 위치에 "Strawberry"를 추가하세요.
// const fruits = ["Apple", "Banana", "Orange"];

// fruits.splice(1,0,'Strawberry')

// console.log(fruits)

// arr1과 arr2 배열을 합쳐 새로운 배열을 만드세요.

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// let arr3 = arr1.concat(arr2)

// console.log(arr3)

// products 배열에서 가격이 100 이상인 첫 번째 상품을 찾으세요.

// const products = [
//     { name: "Shirt", price: 50 },
//     { name: "Shoes", price: 120 },
//     { name: "Hat", price: 80 }
//   ];

// console.log(products.find((a)=>a.price >= 100))

// numbers 배열의 모든 요소가 짝수인지 확인하세요.

// const numbers = [2, 4, 6, 8];

// console.log(numbers.every((a) => a%2 ===0))

// ages 배열의 요소 중 하나라도 21세 이상인지 확인하세요.

// const ages = [16, 20, 18, 19];

// console.log(ages.some((a) => a >= 21))


// 아래 배열에 중복된 값이 있는지 확인하는 코드를 작성하세요.

// const numbers = [1, 2, 3, 4, 2, 5];

// let newNumbers = [...new Set(numbers)]

// console.log(newNumbers.length == numbers.length ? "중복 없음" : "중복 있음")

// 아래 배열을 나이(age)를 기준으로 오름차순 정렬하세요.

// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Mark", age: 35 },
//     { name: "Mark", age: 10 }
// ];

// people.sort((a,b) => a.age - b.age)

// console.log(people)

// ages 배열에서 21세 이상의 요소의 인덱스를 찾으세요.

// const ages = [16, 18, 22, 20];

// console.log(ages.findIndex((a) => a>=21))

// words 배열을 쉼표로 구분된 문자열로 변환하세요.

// const words = ["Hello", "World", "JavaScript"];

// let word = words.join()

// console.log(word)

// 중첩된 배열을 평탄화하여 하나의 배열로 만드세요.

// const nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];

// let newArray = nestedArray.flat(2)

// console.log(newArray)

