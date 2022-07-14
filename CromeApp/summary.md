- js파일CSS파일: 브라우저 열기_그저 파일 열기임 실행하려면 html이용 _브라우저가 html실행하고 html이 js/css가져옴_css엔진과 JS엔진이 돌고 있음
- 
- Data Type
  - 숫자_ 입력하면 바로 인식
    - Integer
    - float
  - text_ ""안에 작성
    - "text"_ 단어
    - "String ..."_ 문장
    - 
- 변수
  - const: 값 변경 불가
  - let: 선언할 때만 let 사용, 값 변경시(name= value;)
  - var: 초기 변수, 보호받지 않음, 특정한 규칙이 없음
  - 
- Data Type2
  - boolean: True-False_ 따옴표 없이 value에 지정
  - null: 값이 존재하지 않음_false은 false이란 값임
  - undefined: 변수 공간을 생성했지만 값이 배당되지 않았을 경우

- Array: 데이터 정리
  - 한가지가 아닌 다양한 데이터 타입으로 구성 가능
  - push()로 데이터 추가

- Object
  - 특성-value
  - name.특성= value; 로 값 추가.수정 가능

- function
  - 코드를 캡슐화 하여 실행을 여러 번 할 수 있음
  - function 이름(인자){ 실행내용 }
    - 인자(argument):function을 실행하는 동안 정보를 보내는 방법임
      - 여러 인자를 받을 수 있고 함수 내에서 변수처럼 쓰임
      - 인자가 있는 함수를 인자없이 호출하면 undefined, 수식이 있는 함수의 경우 NaN(Not a Bumber)
    - Object안에 생성한 function에서도 인자 받아 사용 가능

- return
- 조건문
  - prompt(message, default): 사용자에게 창을 띄움, summit이 될 때까지 JS멈춤
    - 더 이상 사용 X: 스타일 적용 안됨, 메세지가 안예쁨, 어떤 브라우저에서 팝업을 차단함
  - parseInt() : 데이터 타입을 integer로 변경_숫자형태의 String을 변경
  ``` javaScript
    if(contition){// condition=== True/False
        // condition=== true
    } else{
        // condition=== false
    }

   ```
   - 논리 연산자
     - || OR 연산자: 두 조건 중 하나만  ture여도 true
     - && AND 연산자 두 조건 모두 true여야 true
     - = : value 할당
     - == : value 비교
     - === : value&type 비교



# document Ovject
   - html 요소에 접근할 수 있음
   - console.dir(document): document func 확인
     - document.getElementById(): 해당 id에 해당하는 요소 반환
     - document.getElementByClassName(): 해당 class에 해당하는 array반환
     - document.innerText= value: html내 value 변경
     - document.getElementsByTagName(): 해당 tag에 해당하는 array 반환
     - document.querSelector(): css 방식으로 검색 가능, 해당 요소 반환, 첫번째 요소만 반환
       - - document.querSelectorAll(): 모든 요소 반환

# Event
  
  2. EventListener
   -  addEventListener(type, function): 이벤트 추가, type이벤트가 감지되면 function 작동 
    - 해당 func를 이용해 event를 등록하면 removeEventListener 제거 가능
    - onClick 등의 방식보다 선호됨

  1. type
     - mouse....: 마우스 관련
     - window...: 창 관련

# CSS in JavaScript
- js에서 css를 직접적으로 변경하는 걸 선호하지 않음
- h1.className: getter이자 setter
- h1.classList: class를 List로 관리
  - .contain(): html 요소에 포함됬는지 확인
  - .remove(): class 제거
  - .add(): class 추가
  - .toggle(): class이름을 확인하여 추가하거나 제거함


# Login
1. InputValue: input form.value
2. Form Submission
  - form이  submit될 때 refresh
3. Events
   - function 뒤의 ()를 보면 바로 해당 function을 실행 
     - EventListener func의 첫번째 argument는 정보(이벤트가 발생했을 떄 일어난 일)을 가짐
   - preventDefault(): event의 기본행동이 발생되지 않도록 함_ 첫번째 인자에 포함된 func
     - 관행으로 첫번째 인자를 event라고 칭함
   - alert(): 모든 동작을 막음. ok 선택시 작동
- `string ${variableName}`=== "string"+ variavleName
4. localStorage
   - localStorage.setItem("key", "value"); 추가
   - .getItem("key"); 불러오기
   - .removeItem("Key"); 제거



# clock
1. interval
    - 매번 일어나느 무언 가, 매 시간마다 무슨일을 일어나게 하는 것
    - setInterval(func, ms);_ms: 실행 간격
2. timeStamp
    - setTimeout(func, ms);_ms: 얼마나 기다릴 지
3. Date
    - new Date();_ 오늘 날짜를 가져 옴
4. "text".padStart(num, "string");_ 길이가 num보다 작은 text(String)의 앞에 string 추가



# Quotes
  - Math.random();_0과 1사이 랜덤한 숫자 반환
  - Math.round();_ 반올림
  - Math.ceil();_ 올림
  - Math.floor();_내림
  - Math.floor(Math.random()*length);_ 해당 식으로 원하는 범위의 정수를 얻음

  - js로 tag 추가하기
  - document.createElement("tag");
  - document.body.appendChild();_ body에 요소 추가




- event.target.parentElement: 선택된 target의 부모 요소
- JSON-string 전환
  - JSON.stringift(); - HSON.parse();
- .filter();



- 