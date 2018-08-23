// 首先可以将整体封装成一个匿名自运行函数
(function(){
    // 规定每张图片处于的位置和状态
var states = [{Zindex:1,width:120,height:150,top:69,left:134,opacity:0.2},
    {Zindex:2,width:130,height:170,top:59,left:0,opacity:0.5},
    {Zindex:3,width:170,height:218,top:36,left:110,opacity:0.7},
    {Zindex:4,width:224,height:288,top:0,left:263,opacity:1},
    {Zindex:3,width:170,height:218,top:36,left:470,opacity:0.7},
    {Zindex:2,width:130,height:170,top:59,left:620,opacity:0.5},
    {Zindex:1,width:120,height:150,top:69,left:500,opacity:0.2}
];

// 将状态和位置赋给li标签
var lis = $('#box li')
function move(){
lis.each(function(index,ele){
var state = states[index];
// $(ele).css({
//     'z-index':state.Zindex,
//     'width':state.width,
//     'height':state.height
// })
$(ele).css('z-index',state.Zindex).finish().animate(state,1000).find('img').css('opacity',state.opacity)

})

}
move();



// 下一张
$('#box .next').click(function(){
// 原理：把数组中的最后一个元素移动到数组中的第一个元素
states.unshift(states.pop());
        move();

})

$('#box .prev').click(function(){
// 上一张原理：把数组第一个元素移动到最后一位
states.push(states.shift())
move();
})


function next(){
states.unshift(states.pop());
        move();

}

var time = null;
function autoPlay(){
time = setInterval(function(){
    next()
},3000)
}
autoPlay();

// 停止轮播
$('#box section').add('#box li').hover(function(){
clearInterval(time);
},function(){
autoPlay();
})


})()

// 变量的作用域问题
// 1.全局域[window]  2.函数域[function] 
// 1.全局域：从页面被打开之后到页面关闭之前始终都是存在的
// 2.函数域：存在函数被调用的一瞬间，（但是也不一定，要考虑闭包存在）

// 闭包作用：可以保留函数作用域(所以move可以使用当前自运行函数中的states)
// 闭包产生的必要条件：函数里面套函数（内层函数要使用外层函数的变量）
// 全局变量会产生闭包吗？
// 不会，因为全局变量存在全局域里面

