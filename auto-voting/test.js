// async function register(v) {
//     var inputs = document.querySelectorAll('input');
//     if(inputs.length >= 4){
//         [inputs[0], inputs[2], inputs[3]].forEach((input, index) => {
//             input.value = v + (index > 0 ? 'a' : '');
//             var event = new Event('input', { bubbles: true });
//             input.dispatchEvent(event);
//         });
//     }
//     $(".ivu-col-span-8 img").click();
//     var checkInterval = setInterval(function() {
//         var pictureCodeInput = inputs[1];
//         if (pictureCodeInput && pictureCodeInput.value) {
//             var button = document.querySelector('.ivu-form-item-content button');
//             button.click();
//             clearInterval(checkInterval);
//         }
//     }, 1000);
// }

async function sign_in(v) {
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
const registration = require('./registration.js'); // Import the function from function.js

const puppeteer = require('puppeteer');
(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://bhvt.cflac.org.cn/');
  const button = await page.$("#home-goto-vote img");
  await button.click();
  // await registration.register(13398893312);
  // await page.waitForNavigation();
  console.log("button was clicked");
})();

// // readline tool
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // open webpage from browser tool
// const { exec } = require('child_process');
// const url = 'https://bhvt.cflac.org.cn/'; // 替换为您想要打开的网址
// exec(`open ${url}`, (error) => {
//   if (error) {
//     console.error(`无法打开网页: ${error}`);
//     return;
//   }
//   console.log('网页已打开。');
// });

// setTimeout(() => {
//     console.log('hello');
// }, 1000);


// // main loop
// rl.question('请输入一些文字: ', (answer) => {
//   console.log(`您输入的内容是: ${answer}`);
 
//   // 关闭readline接口
//   rl.close();
// });

