// console에 출력_ 괄호 안의 값
console.log(123);




//// 변수
const name = "value"; // 바뀌지 않는 값
console.log(name);
const a= 1; 
// a= 2; 오류발생_ const는 값 변경 불가
let b= a; // update 가능
b= b;
var c= "ㄱ"; // 초기 사용법, 값이 보호 받지 못함




//// Array
const mon= "mon";
const tue= "tue";
const wed= "wed";
const thu= "thu";
const fri= "fri";
const sat= "sat";
const sun= "sun";

const daysOfWeek= mon+ tue+ wed+ thu+ fri+ sat+ sun;// 단순 문자열 합치기
console.log(daysOfWeek); 
const daysOfWeekArray= [mon, tue, wed, thu, fri, sat];
const nonsense= [1, 2, "hello", null, false, true, undefined, "name"]//data type에 제약이 없음
console.log(daysOfWeekArray, nonsense);
console.log(daysOfWeekArray[5]);// 한가지 요소만 호출할 때

daysOfWeekArray.push(sun); //기존 array에 value추가
console.log(daysOfWeekArray);

daysOfWeekArray[0]= "MonDay";// 수정
console.log(daysOfWeekArray); 
 



//// Object
const playerName= "name";
const playerPoints= 123321;
const platerHandsome= true;
const playerFat= "little bit";

const player= {
    name: playerName, 
    point: playerPoints, 
    handsome: platerHandsome, 
    fat: playerFat 
};//key:value구조
console.log(player);
console.log(player.name); //console.log(player["name"]); 같음
player.fat= "very much";
console.log(player.fat);
// object만 const객체임, object 안 fat은 string  객체여서 변경 가능
//  player를 변경하려고 하면 변경 불가
player.lastName= "last "; //요소 추가
player.point= player.point+400; // 값 변경
console.log(player);




//// function
console.log("Hello my name is AA");
console.log("Hello my name is BB");
console.log("Hello my name is CC");
console.log("Hello my name is DD");
// -비추하는 방식, 바뀌는 부분은 이름뿐 다른 항목들으 단순 복사임 
//  so make function
function sayHello(){
    console.log("Hello");
}
sayHello();
function sayName(name){
    console.log("Hello my name is "+ name);
}
sayName("Hello");
function introduce(name, age){
    console.log("Hello my name is "+ name+ " and I'm "+ age);
}
introduce("Hello", 23);
function plus(a, b){

    console.log(a + b);
}
plus(); // NaN
plus(1, 2);
function divide(a, b){
    console.log(a/ b);
}
divide(2,2);
const player={
    name:"ABC",
    sayHello: function(name) {
        console.log("Hello "+ name);
    }
};
console.log(player.name);
player.sayHello("DEF");



//// Return
const calculator= {
    plus: function(a, b){
        console.log(a+ b);
    },
    minus: function(a, b){
        console.log(a- b);
    },
    times: function(a, b){
        console.log(a* b);
    },
    divide: function(a, b){
        console.log(a/ b);
    },
    power: function(a, b){
        console.log(a** b);
    }
}
calculator.plus(2, 3);
calculator.minus(2, 3);
calculator.times(2, 3);
calculator.divide(2, 3);
calculator.power(2, 3);
const age= 96;
function claAge(age){
    return age+ 2;
}
const krAge= claAge(age);
console.log(krAge) // return 없으면 undefined



// // conditional_조건문
const age= prompt("How old ard you?");//prompt는 사용자에게 창을 띄울 수 있도록 함.
console.log(age);
console.log(typeof age);// age의 type출력
console.log(typeof age, typeof parseInt(age));
console.log(isNaN(age)); // NaN인지 boolean으로 반환
const age=  parseInt(prompt("How old ard you?"));
if(isNaN(age) || age< 0){
    console.log("Please write a real positive number.");
} else if(age< 18){
    console.log("You are too young.");
}else if (age >= 18 && age<= 50){
    console.log("You can drink.");
} else if(age> 50 && age<= 80){
    console.log("You should exercise");
}else if(age> 70){
    console.log("You can do whatever you want");
}

