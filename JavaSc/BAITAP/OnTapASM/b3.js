console.log("Bài 3: Vòng lặp ngược từ n đến 1");


// Từ 10 đến 1
console.log("// Từ 10 đến 1");
for(let i =10;i>=1;i--){
    console.log("i = ",i);
}

console.log("// Ứng dụng, in ra số lẻ từ 1 đến 20 theo thứ tự giảm dần");
// Ứng dụng, in ra số lẻ từ 1 đến 20 theo thứ tự giảm dần
let arr= [];
for(let i =20;i>=1;i--){
   if(i%2!=0){
    arr.push(i);
   }
}
console.log("Danh sách số lẻ:",arr.join(", "));