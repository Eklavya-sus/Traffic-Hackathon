const user = document.forms['form']['username'];
const pass = document.forms['form']['password'];

const usrerror = document.getElementById("login-error-msg");
const passerror = document.getElementById("error-msg-second-line");
// adding event listener
user.addEventListener('textInput', username_Verify);
pass.addEventListener('textInput', password_Verify);

function validated(){
	if (user.value.length < 8) {
		user.style.border = "1px solid red";
		usrerror.style.display = "block";
		user.focus();
		return false;
	}
	if (pass.value.length < 5) {
		pass.style.border = "1px solid red";
		passerror.style.display = "block";
		pass.focus();
		return false;
	}

}
function username_Verify(){
	if (user.value.length >= 8) {
		user.style.border = "1px solid silver";
		usrerror.style.display = "none";
		return true;
	}
}
function password_Verify(){
	if (pass.value.length >= 5) {
		pass.style.border = "1px solid silver";
		passerror.style.display = "none";
		return true;
	}
}
