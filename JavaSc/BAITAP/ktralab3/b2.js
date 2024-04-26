//Nhập số nguyên dương
let soBatKy = Number(prompt("Nhập số nguyên dương n bất kỳ"));

// In ra số chẵn từ 1 đến n

let i = 1;
let soChan = [];
while (i <= soBatKy) {
    if (i % 2 === 0) {
        soChan.push(i);
    }
    i++;
}
console.log("Số chẵn từ 1 đến n là: ", soChan.join(", "));