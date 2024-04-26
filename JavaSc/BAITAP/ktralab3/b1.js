
// Hàm tính chu vi
function tinhChuVi(duongKinh) {
    let pi = 3.14;
    chuVi = 2 * duongKinh * pi;
    console.log("Chu vi hình tròn là: ", chuVi);
    return chuVi;

}

let duongKinh = Number(prompt("Nhập vào đường kính hình tròn"));
tinhChuVi(duongKinh);




