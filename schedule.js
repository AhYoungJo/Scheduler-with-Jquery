let date = 0;

// 백틱기호로 다 묶어버리니까 문자로 인식하는 오류가 생김. javascript처럼 ${}를 중간에 감싸주면 될까? 싶었는데 이것도 안됨. 그럼 +기호는 될까? 싶어서 시도해보니 변수가 제대로 활성화되면서 1부터 31까지의 숫자가 순서대로 31개의 td태그에 잘 들어가짐.append에 변수와 같이 사용하려면 + 기호를 사용해주면 되는 것이었군!!
for (let i = 1; i < 32; i++) {
	$('.calender-dates').append('<td>' + i + '</td>');
}

for (let i = 1; i < 32; i++) {
	$('.calender-content1').append('<td class=' + i + '></td>');
}

for (let i = 6; i < 35; i += 7) {
	let sat = document.getElementsByTagName('td')[i]; // 토요일은 파란색
	$(sat).css('color', 'blue');
}

for (let i = 7; i < 36; i += 7) {
	let sat = document.getElementsByTagName('td')[i]; //일요일은 빨간색
	$(sat).css('color', 'red');
}

$('td').on('click', function () {
	let content = $(this).text(); // $('#dates').val(this)를 하면 'this'에는 클릭된 'td'요소이 JavasScript 객체가 전달되고, 이것이 다시 문자열로 변환해 'val()'에 전달되어 `[object HTMLTableCellElement]`이 출력되는 것이다.

	// 그렇다면 td 태그의 element를 새로운 변수에 불러온 후, 이 변수를 value값으로 지정해주면 되지 않을까 싶어서 이처럼 해봤다.
	// `$(this).text()`를 이용해서 `td` 텍스트 콘텐츠를 변수에 저장
	// 이 변수를 value값으로 지정.
	$('#dates').val(content);
});

$('button').on('click', function () {
	let dates = $('#dates').val();
	let content2 = $('#contents').val();
	$('.' + dates).text(content2);
});

// function submitButt() {
// 	let content2 = document.getElementById('contents');
// 	let dates = document.getElementById('dates').value;
// 	console.log(content2, dates);
// }
