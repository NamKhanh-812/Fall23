console.log("      Số lẻ từ 1 đến 20 theo giá trị giảm dần");

let i = 20;
let soLe = [];
while (i > 0) {
    if (i % 2 != 0 ) {
        soLe.push(i);
    }
    i--;
}

console.log("Số lẻ từ 1 đến 20 theo giá trị giảm dần: ", soLe.join(", "));