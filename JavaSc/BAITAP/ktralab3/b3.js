// Hóa đơn

let thongKeBanHang = [
    {
        sanPham: "iPhone 15",
        soLuong: 5,
        donGia: 21000000
    },
    {
        sanPham: "iPhone 15 Pro",
        soLuong: 2,
        donGia: 28000000
    },
    {
        sanPham: "iPhone 15 Pro Max",
        soLuong: 2,
        donGia: 34000000
    },
];

// In dữ liệu
console.log("/////   In dữ liệu");
let tongHoaDon = 0;
for (let item of thongKeBanHang) {
    console.log(item);
    tongHoaDon += item.donGia * item.soLuong;

}
console.log("////    Tổng hóa đơn\n");
console.log("Tổng hóa đơn là: ", tongHoaDon);

// Thêm

console.log("\n Thêm iphone 15 plus \n");

let soLuongNhap = Number(prompt("Nhập số lượng iPhone 15 Plus"));
let donGiaNhap = Number(prompt("Nhập đơn giá"));
let iphon15Plus = {
    sanPham: "iPhone 15 Plus",
    soLuong: soLuongNhap,
    donGia: donGiaNhap
}

thongKeBanHang.push(iphon15Plus);
for (let item of thongKeBanHang) {
    console.log(item);
}

// in sản phẩm doanh thu lớn nhất
// let doanhThu =0;
// let arrDoanhThu[]
// for (let item of thongKeBanHang) {
//     doanhThu=item.soLuong*item.donGia;

// }



