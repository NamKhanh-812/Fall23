
//1 
// Nhập số nguyên dương n
let soN = Number(prompt("Nhập số nguyên dương n bất kì"));

// 2
// In ra số chẵn từ 1 đến n
let soChan = [];
let so4 = [];
for (let i = 1; i <= soN; i++) {
    if (i % 2 == 0) {
        soChan.push(i);
    }
    if (i % 4 == 0) {
        so4.push(i);
    }
}
// 3
console.log("            Số chẵn");
console.log("Các số chẵn từ 1 đến", soN + " là:", soChan.join(", "));
console.log("            Số chia hết cho 4");
console.log("Các số chia hết cho 4 từ 1 đến", soN + " là:", so4.join(", "));