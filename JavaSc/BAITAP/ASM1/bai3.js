// Mảng Object
danhSachDiemLop12A = [
    {
        ten: "Nguyễn Mai Phương",
        diemToan: 8,
        diemVan: 8
    },
    {
        ten: "Nguyễn Hoàng My",
        diemToan: 10,
        diemVan: 7
    },
    {
        ten: "Đỗ Mỹ Linh",
        diemToan: 8,
        diemVan: 9
    }
];

// In thông tin danh sách
console.log(" 1.              Danh sách điểm lớp 12A");
for (let hocSinh of danhSachDiemLop12A) {
    console.log("Tên học sinh: ", hocSinh.ten);
    console.log("Điểm toán: ", hocSinh.diemToan);
    console.log("Điểm văn: ", hocSinh.diemVan);
    console.log("----------------------------------");
}

console.log(" 2.            Do học sinh chăm chỉ nên được công 1 điểm toán//");
console.log("             Danh sách điểm lớp 12A sau khi cộng");

for (let hocSinh of danhSachDiemLop12A) {
    hocSinh.diemToan += 1;
    if (hocSinh.diemToan > 10) {
        hocSinh.diemToan = 10;
    }
    console.log("Tên học sinh: ", hocSinh.ten);
    console.log("Điểm toán: ", hocSinh.diemToan);
    console.log("Điểm văn: ", hocSinh.diemVan);
    console.log("----------------------------------");
}

console.log(" 3.               Học sinh giỏi nhất lớp");

let tongDiemMax = 0;
for (let hocSinh of danhSachDiemLop12A) {
    let tongDiem = hocSinh.diemToan + hocSinh.diemVan;
    if (tongDiem > tongDiemMax) {
        tongDiemMax = tongDiem;
    }
}
let hocSinhGioi = [];
for (let hocSinh of danhSachDiemLop12A) {
    let tongDiem = hocSinh.diemToan + hocSinh.diemVan;
    if (tongDiem == tongDiemMax) {
        hocSinhGioi.push(hocSinh.ten);
    }
}
console.log("Học sinh giỏi nhất lớp là", hocSinhGioi.join(", "));
let hocSinhGiang = {
    ten: "Vũ Hương Giang",
    diemToan: Number(prompt("Nhập điểm toán của Vũ Hương Giang")),
    diemVan: Number(prompt("Nhập điểm văn của Vũ Hương Giang"))
};
danhSachDiemLop12A.push(hocSinhGiang);
console.log(" 4.            Danh sách điểm lớp 12A khi thêm Vũ Hương Giang");
for (let hocSinh of danhSachDiemLop12A) {
    console.log("Tên học sinh: ", hocSinh.ten);
    console.log("Điểm toán: ", hocSinh.diemToan);
    console.log("Điểm văn: ", hocSinh.diemVan);
    console.log("----------------------------------");
}

