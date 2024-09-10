// 문제 1: 숫자를 입력받아 그 숫자가 짝수이면 "짝수입니다"를, 홀수이면 "홀수입니다"를 출력하는 함수를 작성하세요.

// function checkEvenOdd(number) {
// 	if (number % 2 === 0) {
//         console.log("짝수입니다")
//     } else {
//         console.log("홀수입니다.")
//     }
// }

// 문제 2: 나이를 입력받아 18세 이상이면 "성인입니다", 그렇지 않으면 "미성년자입니다"를 출력하는 함수를 작성하세요.

// function checkAge(age) {
// 	if (age >= 18) {
//         console.log("성인입니다")
//     } else {
//         console.log("미성년자입니다")
//     }
// }

// 문제 3: switch문을 사용하여 요일(1~7)을 입력받고 해당 요일의 이름을 출력하는 프로그램을 작성하세요. (1은 월요일, 7은 일요일)

// function getDayName(dayNumber) {
// 	switch(dayNumber){
//         case 1:
//             console.log("월요일");
//             break
//         case 2:
//             console.log("화요일");
//             break
//         case 3:
//             console.log("수요일");
//             break
//         case 4:
//             console.log("목요일");
//             break
//         case 5:
//             console.log("금요일");
//             break
//         case 6:
//             console.log("토요일");
//             break
//         case 7:
//             console.log("일요일"); 
//             break 
//         default:
//             console.log("다른걸 입력하셨습니다");
//     }
// }

// 문제 4: 1부터 100까지의 숫자 중에서 짝수만 출력하는 for 반복문을 작성하세요

// function printEvenNumbers() {
// 	for (let i = 1; i < 101; i++) {
//         if (i%2===0) {
//             console.log(i)
//         }
//     }
// }

// 문제 5: while 문을 사용하여 5부터 15까지의 숫자를 출력하는 프로그램을 작성하세요.

// function printNumbers() {
// 	let i = 5
//     while (i <= 15) {
//         console.log(i)
//         i++
//     }
// }

// 문제 6: do-while 문을 사용하여 사용자가 입력한 숫자가 10이 될 때까지 숫자를 계속 입력받고, 입력된 숫자를 출력하는 프로그램을 작성하세요.

// 입력을 어떻게 받아야할까요...ㅠㅠ

// 문제 7: 두 개의 숫자를 더하는 함수 addNumbers를 선언하고, 해당 함수를 호출하여 결과를 출력하세요.

// function addNumbers(a, b) {
// 	return a+b
// }

// console.log(addNumbers(2,3))

// 문제 8: 세 개의 숫자를 곱한 결과를 반환하는 함수 multiplyNumbers를 선언하고 호출하여 결과를 출력하세요.

// function multiplyNumbers(a, b, c) {
// 	return a * b * c
// }

// console.log(multiplyNumbers(2,5,5))

// 문제 9: 이름을 인자로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수 greet를 선언하고 호출하세요.

// function greet(name) {
// 	console.log(`안녕하세요, ${name}님!`)
// }

// greet("성준")

// 문제 10: 두 숫자의 차를 구하는 함수 표현식을 작성하고 이를 호출하여 결과를 출력하세요.

// const subtract = function(a, b) {
// 	return a-b
// };

// console.log(subtract(7,3))

// 문제 11: 세 개의 숫자를 더한 값을 반환하는 함수 표현식을 작성하고, 이를 호출하여 결과를 출력하세요.

// const sum = function(a, b, c) {
// 	return a+b+c
// };

// console.log(sum(1,2,3))

// 문제 12: 두 숫자를 더한 값을 반환하는 화살표 함수를 작성하고 호출하여 결과를 출력하세요.

// const add = (a, b) => a+b
// console.log(add(1,2))

// 문제 13: 숫자를 제곱하여 반환하는 화살표 함수를 작성하고 호출하여 결과를 출력하세요.

// const square = (n) => n*n

// console.log(square(3))

// 문제 14: 배열을 입력받아 배열의 각 요소에 2를 곱한 새로운 배열을 반환하는 화살표 함수를 작성하세요. (map 메소드를 사용하세요)

// const doubleArray = (arr) => arr.map((a) => a*2)

// console.log(doubleArray([1,2,3,4,9]))

// 문제 15: 나이를 인자로 받아 "성인" 또는 "미성년자"를 반환하는 화살표 함수를 작성하세요.

// const checkAge = (age) => age >= 20 ? "성인" : "미성년자"

// checkAge(20)

// 문제 16: 두 개의 숫자를 입력받아, 큰 숫자를 출력하는 함수를 작성하세요.

// function findMax(a, b) {
// 	if (a>b) {
//         console.log(a)
//     }else if (a<b) {
//         console.log(b)
//     }else {
//         console.log("같은수를 입력하셨네요")
//     }
// }

// 문제 17: 학생의 점수를 입력받아 90점 이상은 'A', 80점 이상은 'B', 70점 이상은 'C', 그 이하는 'F'를 출력하는 프로그램을 작성하세요.

// function grade(score) {

//     let grade = ""

// 	if (score >= 90) {
//         grade = "A"
//     }else if (score >= 80) {
//         grade = "B"
//     }else if (score >= 70) {
//         grade = "C"
//     }else {
//         grade = "F"
//     }

//     return grade
// }

// console.log(grade(79))

// 문제 18: switch문을 사용하여 사용자가 입력한 달(month)에 맞는 계절을 출력하는 프로그램을 작성하세요. (예시: 3 ~ 5월은 봄, 6 ~ 8월은 여름, 9 ~ 11월은 가을, 12 ~ 2월은 겨울)

// function getSeason(month) {
//     let answer = "";
//     switch (month){
//         case 3: case 4: case 5:
//             answer = "봄"
//             break
//         case 6: case 7: case 8:
//             answer = "여름"
//             break
//         case 9: case 10: case 11:
//             answer = "가을"
//             break
//         case 12: case 1: case 2 :
//             answer = "겨울"
//             break
//     }
//     return answer
	
// }

// console.log(getSeason(4))

// 문제 19: for문을 사용하여 1부터 10까지의 숫자의 합을 구하는 프로그램을 작성하세요.

// function sumNumbers() {
// 	let sum = 0

//     for (let i = 1; i < 11; i++) {
//         sum += i
//     }

//     return sum
// }

// console.log(sumNumbers())

// 문제 20: while문을 사용하여 1부터 20까지의 숫자 중 3의 배수를 출력하는 프로그램을 작성하세요.

// function printMultiplesOfThree() {
//     let i = 1
// 	while (i < 20) {
//         if (i % 3 ===0) {
//             console.log(i)
//         }
//         i++
//     }
// }

// printMultiplesOfThree()

// 문제 21: do-while문을 사용하여 0부터 100까지의 숫자 중 10의 배수를 출력하는 프로그램을 작성하세요.

// function printMultiplesOfTen() {
//     let i = 1
// 	do {
//         if (i % 10 === 0) {
//             console.log(i)
//         }
//         i++
//     }while (i<101)
// }
// printMultiplesOfTen()

// 문제 22: 세 개의 숫자 중에서 가장 큰 숫자를 찾는 함수를 선언하고 호출하세요.

// function findMaxOfThree(a, b, c) {
// 	let answer = 0
//     answer = a>b ? a:b
//     answer = answer > c ? answer : c

//     return answer 
// }

// console.log(findMaxOfThree(20,20,13))

// 문제 23: 두 문자열을 입력받아 두 문자열이 동일하면 "동일함"을, 그렇지 않으면 "동일하지 않음"을 출력하는 함수를 작성하세요.

// function compareStrings(str1, str2) {
// 	if (str1 === str2) {
//         console.log("동일함")
//     }else {
//         console.log("동일하지 않음")
//     }
// }

// compareStrings("사과","사과1")

// 문제 24: 배열을 입력받아 배열에 있는 숫자들의 평균을 계산하는 함수를 작성하세요.

// function calculateAverage(numbers) {
// 	return numbers.reduce((a,b) => a+b) / numbers.length
// }

// console.log(calculateAverage([1,2,3,4,5,5]))

// 문제 25: 배열의 모든 요소를 제곱한 값을 반환하는 함수 표현식을 작성하고, 이를 호출하세요.

// const squareArray = function(arr) {
//     return arr.map((a) => a*a)
// };

// console.log(squareArray([1,2,3,4,5]))

// 문제 26: 두 문자열을 합친 후, 그 길이를 반환하는 함수 표현식을 작성하세요. (Hint: String.prototype.lengtn)

// const combineAndLength = function(str1, str2) {
//   return (str1 + str2).length
    
// };

// console.log(combineAndLength('사과',"바나나"))

// 문제 27: 배열에서 가장 큰 숫자를 찾는 함수 표현식을 작성하세요.

// const findMaxInArray = function(arr) {
// 	return Math.max(...arr)
// };

// console.log(findMaxInArray([1,2,3,4,5,3]))

// 문제 28: 두 문자열을 입력받아 그 길이를 비교하고, 더 긴 문자열을 반환하는 화살표 함수를 작성하세요.

// const getLongerString = (str1, str2) => str1.length > str2.length ? str1 : str2;

// console.log(getLongerString('사과','바나나'))

// 문제 29: 숫자로 이루어진 배열을 입력받아, 배열의 모든 요소에 5를 더한 새로운 배열을 반환하는 화살표 함수를 작성하세요.

// const addFiveToArray = (arr) => arr.map((a) => a+5)

// console.log(addFiveToArray([1,2,3,4,5]))

// 문제 30: 세 개의 숫자를 입력받아, 세 숫자의 합이 100 이상이면 "합격", 그렇지 않으면 "불합격"을 반환하는 화살표 함수를 작성하세요.

// const checkSum = (a, b, c) => a+b+c >=100 ? "합격" : "불합격"

// console.log(checkSum(50,30,20))