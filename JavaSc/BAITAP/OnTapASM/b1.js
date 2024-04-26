console.log("// Bài 1: Khai báo & sử dụng hàm có tham số và giá trị trả về");

// Cú pháp khai báo có hàm tham số và giá trị trả về
function tenHam(thamSo) {
    let ketQua;

    return ketQua;
}


// Khai báo hàm tính chu vi

function tinhChuVi(banKinh) {
    let ketQua = banKinh*2*3.14;
    return ketQua;
}
// 2. Sử dụng hàm
let banKinh = Number(prompt("Nhập vào bán kính"));
let chuVi = tinhChuVi(banKinh);
console.log("Chu vi là: ",chuVi);