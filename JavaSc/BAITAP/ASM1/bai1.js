// khai báo hàm tính chu vi
function chuViCN(chieuDai, chieuRong) {
    let chuVi = (chieuDai + chieuRong) * 2;
    console.log("Chu vi hình chữ nhật là:", chuVi);
    return chuVi;
}

// tính chu vi
let chieuDai = Number(prompt("Nhập chiều dài"));
let chieuRong = Number(prompt("Nhập chiều rộng"));
chuViCN(chieuDai, chieuRong);
