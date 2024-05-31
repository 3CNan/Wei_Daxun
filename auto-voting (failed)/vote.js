var inputs = document.querySelectorAll('.ivu-checkbox-input');
var values = [ '20460788324044806', '20460788324044800', '20460788324044805', '20460788324044804', '20460788324044809', '20460788324044811'];
var bianju = ['20460788324044814','20460788324044818','20460788324044819','20460788324044820','20460788324044822','20460788324044823','20460788324044825','20460788324044826','20460788324044827'];
var daoyan = ['20460788324044828','20460788324044830','20460788324044832','20460788324044833','20460788324044835','20460788324044836','20460788324044837','20460788324044839','20460788324044840'];
var randomValue = values[Math.floor(Math.random() * values.length)];
var randomBianju = bianju[Math.floor(Math.random() * bianju.length)];
var randomDaoyan = daoyan[Math.floor(Math.random() * daoyan.length)];
for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].value == randomValue){
        inputs[i].click();
    }
    if(inputs[i].value == randomBianju){
        inputs[i].click();
    }
    if(inputs[i].value == randomDaoyan){
        inputs[i].click();
    }
    if(inputs[i].value == '20460788324044897'){
        inputs[i].click();
    }
}
//②点提交
$("#user-vote-opt img").click();