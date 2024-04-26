console.log("//  Từ 1 đến 10");
// 1 đến 10
for(let i =1;i<=10;i++){
    console.log("i = ",i);
}


console.log("//  Từ 1 đến n");
// 1 đến n
//1. Tìm n
let n = Number(prompt("Mời bạn nhập n"));

//2. Khai báo vòng lặp 1 đến n
for( let i = 1; i<=n;i++){
    console.log("i = ",i);
}

let soChan=[];
// 3. In ra số chẵn
for(let i = 1; i<=n;i++){
    if(i%2==0){
       soChan.push(i);
    }
}
console.log("Danh sách số chẵn: ",soChan.join(", "));