// 제주 코딩 베이스캠프 코드 페스티벌 100제


// 문제 1. 배열의 삭제
// 다음 배열에서 400, 500을 삭제하는 code를 입력하세요.

var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();

console.log(nums);


// 문제 2. 배열의 내장함수
// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

// 데이터
var arr = [200, 100, 300];

//출력 [200,100,10000, 300]
arr.splice(2, 0, 10000); 

console.log(arr);


// 문제 10. 별찍기
// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

const n = prompt('숫자를 입력하세요.');
let tree = '';

for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);

// 문제 11. for를 이용한 기본 활용
// 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.

let s = 0;

for (let i=1; i<=100; i++){
    s += i;
}

console.log(s);