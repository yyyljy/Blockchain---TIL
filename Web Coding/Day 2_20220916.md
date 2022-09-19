# 기초반 특강

## h662 강사님

### prettier

- code formatter
  - 자동 줄맞춤
  - 확장설정에서 formatter 검색
  - Default -> Prettier - Code formatter 선택
  - Format On Save 체크

```json
// settings.json
{
	"editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```



### eslint

- javascript 문법 확인 extension

  

### Javascript

- node.js의 등장으로 웹브라우저 언어 이상의 가치를 갖게 됨

```javascript
// 콘솔창 출력
console.log("Hello, JS!")
// 팝업창 출력
alert("Hello, JS!")
// 변수 선언
let a = 1
```

- span 태그와 style display

```html
<!-- 줄 바꿈 없는 태그 -->
<span>What is your name?</span>

<!-- 줄 바꿈 속성 display: block -->
<span style="display: block">What is your name?</span>
```

- https://developer.mozilla.org/ko/docs/Web/CSS/display

- class 명으로 css 접근

```css
/* class명이 div2인 태그 */
.div2 {
  border: 10px solid lightblue;
}
```

- Object 변수

```javascript
let a = {myName: "TEST"}
alert(a.myName);
```

- const

```javascript
const a = 10;
```

- var와 let
  - 블록 스코프에서 차이
- 태그에 접근하기

```javascript
let span = document.getElementsByTagName("span");
span[0].innerHTML = "다 알고 있소이다";
```

