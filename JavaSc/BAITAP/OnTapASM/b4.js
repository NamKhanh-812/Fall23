console.log("             Khai báo mảng Object");

// Khai báo
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
    }
];

// Duyệt Object để in giữ liệu

let donGiaMax = 0;

for (const sanPham of thongKeBanHang) {
    // In ra giá trị của phần tử
    // console.log("Thông tin sản phẩm:",sanPham);

    // In đẹp

    console.log("Tên sản phẩm: ", sanPham.sanPham);
    console.log("Số lượng: ", sanPham.soLuong);
    console.log("Đơn giá: ", sanPham.donGia);
    console.log("----------------------------------");

    // Đơn giá lớn nhất
    if (sanPham.donGia > donGiaMax) {
        donGiaMax = sanPham.donGia;
    }
}


console.log("                   Đơn giá lớn nhất");
for (const sanPham of thongKeBanHang) {
    if (sanPham.donGia == donGiaMax) {
        console.log("Sản phẩm có đơn giá lớn nhất là:", sanPham.sanPham);
    }
}




// Thêm phần tử vào mảng
// cách 1
thongKeBanHang.push({
    sanPham: "iPhone 15 Plus",
    soLuong: 5,
    donGia: 25000000
})

// cách 2
let iPhone15Plus ={
    sanPham: "iPhone 15 Plus 2",
    soLuong: 5,
    donGia: 25000000
}
thongKeBanHang.push(iPhone15Plus);

let doanhThuMax = 0;
let arrIP=[];
for (let sanPham of thongKeBanHang) {
    let doanhThu = sanPham.donGia*sanPham.soLuong;
    if(doanhThu>doanhThuMax){
        doanhThuMax=doanhThu;
    }
}
for (let sanPham of thongKeBanHang) {
    let doanhThu = sanPham.donGia*sanPham.soLuong;
    if(doanhThu==doanhThuMax){
        arrIP.push(sanPham.sanPham);
    }
}
console.log("Sản phẩm có doanh thu lớn nhất là:", arrIP.join(", "));



