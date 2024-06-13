let book=document.getElementsByClassName('book')[0],//选中的是数组
    leftPage=document.querySelector('.front-cover'),
    card=document.querySelector('.card'),
    shadow=document.querySelector('.shadow'),
    hold=false,
    clamp=function(val,min,max) {
      return Math.max(min,Math.min(val,max))
    }

// window.addEventListener('mousemove',function(){

// })

//鼠标是按住的状态
leftPage.onmousedown=function(){
  hold=true
}
window.addEventListener('mouseup',function(){
  hold=false
})
window.onmousemove = function(event){
  if(hold){
    console.log(event.pageX);

    var angle= clamp((window.innerWidth/2 - event.pageX + 300)/300* -90,-180,0)

    // leftPage.style.transform='rotate('+angle+'deg)'
    leftPage.style.transform=`rotateY(${angle}deg)`
    card.style.transform=`rotateX(${angle/2}deg)`
    shadow.style.transform=`skewX(${angle/10}deg)`
    book.style.transform=`rotateX(${60+angle/8}deg)`
  }
}