console.log("Demo object");

// Cấu trúc object
let tenObject = {
    tenThuocTinh: "Giá trị thuộc tính",
    tenThuocTinh2: "Gtri thuộc tính 2",
    tenThuocTinh3: 2345,
    tenPhuongThuc: function () {
        console.log("Đây là phương thức 01");
    }
}

// In ra object
console.log(tenObject);

// Gọi phương thức của object
tenObject.tenPhuongThuc();

// In ra thuộc tính
console.log(tenObject.tenThuocTinh);
console.log(tenObject["tenThuocTinh2"]);

// Ví dụ về mảng Object
// [object1,object2,object3]
// object1 = {ten:"đây là tên",tuoi: 20}
//object2 = {ten:"đây là tên",tuoi: 20}

//Ví dụ 
let sinhVien01 = {
    ten: "Nguyễn Hoàng Long",
    namSinh: "2004",
    diaChi: "Lào Cai"
}
let sinhVien02 = {
    ten: "Trần Văn Quang",
    namSinh: "2004",
    diaChi: "Hà Nam"
}
let sinhVien03 = {
    ten: "Trần Tuấn Anh",
    namSinh: "2004",
    diaChi: "Nam Định"
}

let sinhVienArr = [sinhVien01, sinhVien02, sinhVien03];
console.log(sinhVienArr);

console.log("//Ứng dụng for in");
// Duyệt các gtri thuộc tính của object
// Ứng dụng for in
for (let thuocTinh in sinhVien01) {
    // In ra tên thuộc tính
    console.log(thuocTinh); // KQ: ten thuộc tính

    // In ra giá trị từng thuộc tính
    console.log(sinhVien01[thuocTinh]);
}

// Đổi gtri của thuộc tính
sinhVien01.diaChi="Hà Nội 2";
console.log(sinhVien01);

// Duyệt qua tất cả gtri của 1 mảng object
// mảng object: sinhvienArr
for (let sinhvien of sinhVienArr) {
    // In ra gtri của từng phần tử trong mảng sinhVienArr
    console.log(sinhvien);
    // Đổi tất cả địa chỉ của sinh viên về Hà Nội
    sinhvien.diaChi= "Hà Nội";

}
console.log(sinhVienArr);


