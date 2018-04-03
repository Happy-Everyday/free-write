//  等差数列求和

// 计算1-100的自然数的和

// for循环算法
var len = 100;
var sum = 0;
for (var i = 1; i <= len; i++) {
    sum += i
}

console.log(sum)

// 递归算法
function num(n){
    if(n==1) return 1;
    return num(n-1)+n;
}
num(100);