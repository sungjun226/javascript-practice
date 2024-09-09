// 1.	var, let, const를 사용하여 각각 변수를 선언하고 값을 할당하세요.
// let i = 10;
// console.log(i);

// 2.	다음 변수들의 데이터 타입을 콘솔에 출력하세요.

// let a = 42;
// let b = 'hello';
// let c = true;
// let d = null;
// let e;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);

// 3.	두 개의 숫자를 더하고, 뺄셈, 곱셈, 나눗셈을 하는 코드를 작성하세요.

// let num1 = 10;
// let num2 = 5;

// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1/num2)
// console.log(num1%num2)

// 4.	두 개의 숫자를 비교하고 결과를 콘솔에 출력하세요.

// let num1 = 10;
// let num2 = 5;

// console.log(num1 > num2)

// 5.	논리 연산자를 사용하여 두 개의 불리언 변수를 조합하세요.

// let a = true;
// let b = false;

// console.log(a && b)
// console.log(a || b)

// 6.	할당 연산자를 사용하여 변수에 값을 더하고 빼세요.
// let a = 0

// a += 10;
// console.log(a)

// a -= 10;
// console.log(a)

// 7.	두 개의 문자열을 연결하고 결과를 출력하세요.

// let str1 = "Hello";
// let str2 = "World";
// let result = str1 + str2

// 8.	템플릿 리터럴을 사용하여 변수를 문자열에 포함하세요.

// let name = "Alice";
// let age = 25;
// let message = `name: ${name} , age: ${age}`

// console.log(message)

// 9.	배열을 선언하고 요소에 접근하여 출력하세요.

// let fruit = ["Apple", "Banana", "Cherry"];

// console.log(fruit[0],fruit[1].fruit[2])

// 10.	객체를 선언하고 속성에 접근하여 출력하세요.

// let person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// console.log(person.name,person.age,person.city)

// 문제 11: 함수 선언 및 호출

// 11.	두 수를 더하는 함수를 선언하고 호출하여 결과를 출력하세요.

// function add(a, b) {
//     return a+b
// }
// console.log(add(2,6)); // 8

// 12. 주어진 수가 짝수인지 홀수인지 판단하는 조건문을 작성하세요.
let num = 7;

if (num % 2 == 0) {
    console.log('짝수')
}else {
    console.log('홀수')
}

// 13. 1부터 10까지의 숫자를 출력하는 for 반복문을 작성하세요.

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// 14. 1부터 10까지의 숫자를 출력하는 while 반복문을 작성하세요.

// let i = 1
// while (true) {
//     console.log(i)
//     i++
//     if (i == 11) {
//         break
//     }
// }

// 15. 배열의 각 요소를 출력하는 forEach 반복문을 작성하세요.
// let fruits = ['Apple', 'Banana', 'Cherry'];

// fruits.forEach((a)=> {
//     console.log(a)
// })



// 16. 배열의 각 요소에 2를 곱한 새로운 배열을 반환하는 코드를 작성하세요.
// let numbers = [1, 2, 3, 4];
// let arr1 = []
// numbers.forEach((a) => {
//     arr1.push(a*2)
// })

// console.log(arr1)

// 17. 배열에서 짝수만 필터링하는 코드를 작성하세요.
// let numbers = [1, 2, 3, 4, 5, 6];
// let arr1 = []

// numbers.forEach((a) => {
//     if (a%2 == 0) {
//         arr1.push(a)
//     }
// })

// console.log(arr1)

// 18. 문자열을 대문자로 변환하고 출력하는 코드를 작성하세요.
// let str = 'hello world';
// console.log(str.toUpperCase())

// 19. 현재 날짜와 시간을 출력하는 코드를 작성하세요.

// let now = new Date()
// console.log(now)

// 20. Math 객체를 사용하여 주어진 수의 제곱근을 구하는 코드를 작성하세요.
// let a = 16
// console.log(Math.sqrt(a))

