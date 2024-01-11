>## 사용한 font:
```css
@import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);
```
>
```css
body {
	font-family: 'Nanum Pen Script', cursive;
	font-size: 25px;
	width: 1920px;
	height: 1080px;
}
```
<br />

>## 1~31까지 테이블 자동 생성하기
1. 우선 월, 화, 수, 목, 금, 토, 일의 요일을 나타낼 헤더를 만든다.
```html
            <table class="calender">
                <thead>
                    <tr>
                        <th style="color: red;">日</th>
                        <th>月</th>
                        <th>火</th>
                        <th>水</th>
                        <th>木</th>
                        <th>金</th>
                        <th>土</th>
                    </tr>
                </thead>
```
2. 해당 월이 금요일부터 시작하기 때문에 앞에 먼저 5개를 든다.
```html
                <tbody>
                    <tr class="calender-dates">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
```
3. 내용이 들어갈 부분을 위해 다른 이름의 클라스로 tr태그를 하나 더 만든다.
```html
                    <tr class="calender-content1">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

```
4. 1부터 31까지 숫자가 달력에 출력되도록 for반복문을 이용한다. 비슷한 방법으로 내용이 들어갈 31칸을 만들어준다.
```javascript
for (let i = 1; i < 32; i++) {
	$('.calender-dates').append('<td>' + i + '</td>');

for (let i = 1; i < 32; i++) {
	$('.calender-content1').append('<td class=' + i + '></td>');
}
```
- 입력 날짜에 알맞게 내용이 들어가게 하려면 `.content1`에 추가되는 `td`태그에 날짜와 일치하는 숫자를 클래스명으로 지정해줘야한다.
<br />

5. css로 날짜와 내용에 들어갈 부분이 서로 겹치지 않도록 크기와 위치를 조정한다.
  
```css
calender,
h1 {
	top: 120px;
	width: 300px;
	display: flex;
	justify-content: center;
	font-size: 34px;
	color: rgb(32, 52, 49);
	height: 30px;
}

.calender {
	display: flex;
	flex-direction: column;
	width: 600px;
}

tr {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	width: 600px;
}

tr th {
	font-family: 'Courier New', Courier, monospace;
	font-size: 20px;
	display: flex;
	justify-content: center;
}

tr th,
tr td {
	margin-left: 20px;
	box-sizing: content-box;
	width: 53px;
}

tr th {
	height: 30px;
	border-bottom: 1px solid rgba(41, 48, 51, 0.327);
}

.calender-dates td {
	border: 1px solid transparent;
	height: 100px;
}
```
<br />

>## 토요일과 일요일의 색깔 다르게 지정해주기
- 토요일은 파란색으로, 일요일은 빨간색으로 자동으로 바뀌게끔 알고리즘을 작성한다.
```javascript
for (let i = 6; i < 35; i += 7) {
	let sat = document.getElementsByTagName('td')[i]; // 토요일은 파란색
	$(sat).css('color', 'blue');
}

for (let i = 7; i < 36; i += 7) {
	let sat = document.getElementsByTagName('td')[i]; //일요일은 빨간색
	$(sat).css('color', 'red');
}
```
<br />

>## 달력의 숫자를 클릭하면 날짜에 뜨도록 만들기
```javascript
$('td').on('click', function () {
	let content = $(this).text();
	$('#dates').val(content);
});
```
<br />

>## 버튼을 클릭했을 때 입력 날짜에 작성한 내용이 들어가도록 하기
```javascript
$('button').on('click', function () {
	let dates = $('#dates').val();
	let content2 = $('#contents').val();
	$('.' + dates).text(content2);
});
```
