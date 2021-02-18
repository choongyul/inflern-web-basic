// page 가 모두 로드된 시점부터 로직이 실행 될수 있도록 보장
window.addEventListener('load', function() {
    clearMessages();
    var formElem = document.querySelector('form');
    formElem.onsubmit = submitForm; // on[Event_Name]을 사용해서 이벤트 리스너를 등록하면 결과 값을 받을 수 있다.

    //동적으로 월 추가
    var selectInput = document.querySelector('select[name="birth-month"]');
    for(var i =1; i <=12; i++) {
        var option = document.createElement('option');
        option.innerHTML = i + '월';
        option.value = i;

        selectInput.appendChild(option);
    }

});

function clearMessages() {
    var messages = document.getElementsByClassName('alert-message');

    for(var i=0; i<messages.length ; i++) {
        messages[i].style.display = 'none';
    }
}

function showMessage(inputElement, message) {
    var messageElem = inputElement.parentNode.querySelector('span');
    messageElem.style.display = 'inline';
    messageElem.innerText = message;

    inputElement.focus(); // 틀렸던 필드로 돌아가게
}

function submitForm() {

    // account info
    var accountInput = document.querySelector('input[name="account"]');
    var passwordInput = document.querySelector('input[name="password"]');
    var passwordConfirmInput = document.querySelector('input[name="password-confirm"]');

    // select, radio, checkbox
    var selectInput = document.querySelector('select[name="birth-month"]');
    var radioInput = document.querySelector('input[name="gender"]:checked');
    var checkInput = document.querySelector('input[name="agree"]');

    console.log(accountInput.value);
    console.log(passwordInput.value);
    console.log(passwordConfirmInput.value);

    console.log(selectInput.value);
    console.log(radioInput.value);
    console.log(checkInput.value);

    var success = true;

    if(accountInput.value.length < 6) {
        showMessage(accountInput, '계정은 6자리 이상이어야 합니다.');
        success = false;
    }

    if(passwordInput.value.length < 10) {
        showMessage(passwordInput, '비밀번호는 10자리 이상이어야 합니다.');
        success = false;
    }

    if(passwordConfirmInput.value != passwordInput.value) {
        showMessage(passwordConfirmInput, '비밀번호를 동일하게 입력해주세요.');
        success = false;
    }

    return success;
}