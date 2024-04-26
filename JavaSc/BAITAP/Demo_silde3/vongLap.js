// console.log("Demo vòng lặp");

// let tenArr = ["Anh","Bảo","Duy","Trung"];
// 1. Vòng lặp for bình thường
    // console.log("Demo vòng lặp for thường");
    // for(let i = 0;i<tenArr.length;i++){
    //     console.log(tenArr[i]);
    // }

    
// 2 . Vòng lặp for of

// console.log("Demo for of");
// for(let item of tenArr){
//     console.log(item);
// }

// 3. While
// console.log("Demo while");
// let i = 0;
// while(i<tenArr.length){
//     console.log(tenArr[i]);
//     i++
// }
// // 4. Do while
// let i2 = 0;
// do{
//     console.log(tenArr[i2]);
//     i2++;
// } while(i2<tenArr.length);



// ứng dụng do while
// let giaiDacBiet = Math.floor(Math.random()*100);
// let soNhapVao;
// do{
//     soNhapVao= Number(prompt("Mời nhập giải đặc biệt"))
// } while(giaiDacBiet!=soNhapVao);
// console.log("Giải đặc biệt: ",giaiDacBiet);

//Lưu ý:
//1. Nếu biết số lần chạy vòng lặp thì nên sử dụng for
//2. Nêu chưa xác định đc số lần chạy vòng lặp thì dùng while

// Demo break
console.log("Demo break for thường");
// Ví dụ: Kiểm tra xem trong danh sách điểm, có điểm trung bình 

let diemArr=[10,9,4,8,7,3,2];
for (let i = 0; i < diemArr.length; i++) {
    console.log(diemArr[i]);
    if(diemArr[i]<5){
        break;
    }
}

console.log("Demo break for of");
for (const item of diemArr) {
    console.log(item);
    if(item<5){
        break;
    }
}