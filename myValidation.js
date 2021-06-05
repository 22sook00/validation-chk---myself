/* 규칙
 * 'user-id' / user-pw / user-pw-chk 의 인풋 창을 입력했을 때 
 *  콘솔창에 value 값이 잘 나오는지 확인해보기.
 *  밸류값이 내가 정한 조건과 부합할 경우 나타날 문구 함수 onkeyup
 * failure-message / succeess-message 
 */
//! id 유효성검사 : onkeyup
const userId = document.querySelector('.user-id');
const failureMsgForId = document.querySelector('.failure-message')
const successMsgForId = document.querySelector('.succeess-message')

userId.onkeyup = function(){
  if(validatorForId(userId)){
    successMsgForId.classList.remove('hide');
    failureMsgForId.classList.add('hide');
  }else if(!validatorForId(userId)){
    successMsgForId.classList.add('hide');
    failureMsgForId.classList.remove('hide');
    if(userId.value === ''){
      successMsgForId.classList.add('hide');
      failureMsgForId.classList.add('hide');
    }
  }
}
//! id 유효성검사 : 5자리보다 길때 -> 유효성검사로 바꿀예정.
function validatorForId(inputSomething){
  return inputSomething.value.length >= 5;
  // 정규표현식으로 바꿔보기.
}
//! pw 유효성검사 : onkeyup
const userPw = document.querySelector('.user-pw');
const failureMsgForPw = document.querySelector('.failure-message-pw');
const successMsgForPw = document.querySelector('.succeess-message-pw');

userPw.onkeyup = function(){
  if(validatorForPw(userPw)){
    successMsgForPw.classList.remove('hide');
    failureMsgForPw.classList.add('hide');
  }else if(!validatorForPw(userPw)){
    successMsgForPw.classList.add('hide');
    failureMsgForPw.classList.remove('hide');
    if(userPw.value === ''){
    successMsgForPw.classList.add('hide');
    failureMsgForPw.classList.add('hide');
    }
  }
}

//! pw 유효성검사 : 8~16자리. -> 유효성검사로 바꿀예정.
function validatorForPw(inputSomething){
  return inputSomething.value.length >= 4 && inputSomething.value.length <= 16
}

//! pwchk 유효성 검사
const userPwChk = document.querySelector('.user-pw-chk');
const failureMsgForPwChk = document.querySelector('.failure-message-pwchk');
const successMsgForPwChk = document.querySelector('.succeess-message-pwchk');

userPwChk.onkeyup = function(){
  if(isMatch(userPw,userPwChk)){
    failureMsgForPwChk.classList.add('hide');
  }else if(!isMatch(userPw,userPwChk)){
    failureMsgForPwChk.classList.remove('hide');
    if(userPwChk.value === ''){
      failureMsgForPwChk.classList.add('hide');
    }
  }
}
//! pwchk 유효성 검사 : pw 와 맞아야한다.
function isMatch(pw1,pw2){
  if(pw1.value === pw2.value){
    return true;
  }else{
    return false
  }
}
isMatch(userPw,userPwChk)


//!버튼 클릭 시 벨로그 주소로 이동하기. -> 각 id /pw /pwchk 에 넣어준다.
const signinBtn = document.querySelector('.signin-btn');
signinBtn.onclick = function(){
  if(!validatorForId(userId)){
    alert('아이디를 확인해주세요!')
  }else if(!validatorForPw(userPw)){
    alert('비밀번호를 확인해주세요!')
  }else if(!isMatch(userPw,userPwChk)){
    alert('비밀번호가 서로 다릅니다!')
  }else{
    open ('about:blank').location.href='https://velog.io/@22soook00'
  }
}