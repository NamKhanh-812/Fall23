var a =6;
let b =9;
c = 17;
console.log(`a = ${a}, b = ${b}, c = ${c}`);

function HamTT (){
    // phạm vi
    var x =9;
    let y =18;
    kk=111;
    // sd biến
    console.log(`Trong hàm x = ${x}, y = ${y}, kk = ${kk}`);
    console.log(`Trong hàm a = ${a}, b = ${b}, c = ${c}`);
}
HamTT();
// ngoài
// console.log(`Ngoài hàm x = ${x}, y = ${y}, kk = ${kk}`);
    console.log(`Ngoài hàm a = ${a}, b = ${b}, c = ${c}`);