### h662 강사님

EMMET

# VISUAL STUDIO CODE 단축키

ALT + 방향키 : 행 복사

ALT + 마우스 클릭 : 동시 여러 위치 수정



### HTML 기초

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <h2>Hello, World!</h2>
    <h3>Hello, World!</h3>
    <h4>Hello, World!</h4>
    <h5>Hello, World!</h5>
    <h6>Hello, World!</h6>
</body>
</html>
```

- lang -> language

- h 태그는 h1 ~ h6 까지 존재함



### CSS

- Cascading Style Sheet

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <div style="color: #52f213;">HTML!</div>
    <div style="color: rgb(222, 111, 5);">HTML!</div>
    <div style="color: rgba(red, green, blue, alpha)">HTML!</div>
</body>
</html>
```

- rgba : a는 투명도 (값 범위 : 0~1)



- Style

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            background-color: coral;
        }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <div style="color: #52f213;">HTML!</div>
</body>
</html>
```



- 시멘틱
  - 컴퓨터가 코드를 읽는다

#### padding

```css
padding: 10px 40px 20px 30px;
```

- 하나만 적으면 4방향 모두 적용. 값 4개 적으면 시계방향으로 적용



### 폰트

[눈누 폰트다운 싸이트](https://noonnu.cc/)



#### box-shadow

```css
box-shadow: -4px -4px 0 -2px #fa780a, 4px 4px 0 -2px #fa780a;
```

왼쪽, 왼쪽상단, 그림자 세기(흐림정도), 두께, 컬러

[참고링크](https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow)



#### :hover

```css
button:hover {
    box-shadow: -4px -4px 0 0px #fa780a, 4px 4px 0 0px #fa780a;
}
```

[참고링크](https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes)



#### transition

```css
transition: all 0.5s;
```

점차적 변화 적용



### :active

```css
button:active {
    box-shadow: -4px -4px 0 0px #ff6108, 4px 4px 0 0px #ff6108;
}
```

