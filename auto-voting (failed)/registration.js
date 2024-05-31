// registration.js
// register
exports.register = function(v) {
    var inputs = document.querySelectorAll('input');
    if(inputs.length >= 4){
        [inputs[0], inputs[2], inputs[3]].forEach((input, index) => {
            input.value = v + (index > 0 ? 'a' : '');
            var event = new Event('input', { bubbles: true });
            input.dispatchEvent(event);
        });
    }
    $(".ivu-col-span-8 img").click();
    var checkInterval = setInterval(function() {
        var pictureCodeInput = inputs[1];
        if (pictureCodeInput && pictureCodeInput.value) {
            var button = document.querySelector('.ivu-form-item-content button');
            button.click();
            clearInterval(checkInterval);
        }
    }, 1000);
}
// sign in
exports.sign_in = function(v) {
    var usernameInput = document.querySelector('input[name="username"]');
    var passwordInput = document.querySelector('input[name="password"]');

    usernameInput.value = v;
    var event1 = new Event('input', { bubbles: true });
    usernameInput.dispatchEvent(event1);

    passwordInput.value = v + 'a';
    var event2 = new Event('input', { bubbles: true });
    passwordInput.dispatchEvent(event2);

    $(".ivu-col-span-8 img").click();
    var checkInterval = setInterval(function() {
        var pictureCodeInput = document.querySelector('input[name="pictureCode"]');
        if (pictureCodeInput && pictureCodeInput.value) {
            var button = document.querySelector('.ivu-login-submit button');
            button.click();
            clearInterval(checkInterval);
        }
    }, 1000);
}
// $("#home-goto-vote img").click();
// a(18873451454);
// $(".ivu-login-submit button").click();