console.log("// Ôn Tập Form");

// Bắt sự kiện người dùng click
function validateForm() {
    console.log("// Bắt đầu validate form");
    // Chú ý: display none tất cả thông báo lỗi

    // 1. Lấy value người dùng nhập form
    let hoVaTen = document.getElementById("ho-va-ten").value;
    let namSinh = document.getElementById("nam-sinh").value;
    let soDienThoai = document.getElementById("so-dien-thoai").value;
    let danhSachNodeGioiTinh = document.getElementsByName("gioi-tinh");

    
    // Log thử thông tin value, node
    console.log("hoVaTen", hoVaTen);
    console.log("namSinh", namSinh);
    console.log("soDienThoai", soDienThoai);
    console.log("danhSachNodeGioiTinh", danhSachNodeGioiTinh);


    // 2.1 Bắt đầu validate họ và tên
    // Dễ quá bỏ qua nhé

    // 2.2 Bắt đầu validate năm sinh
    validateNamSinh(namSinh);

    // 2.3 Bắt đầu validate số điện thoại
    validateSoDienThoai(soDienThoai);

}


// Hàm nhận vào giá trị năm sinh và trả về true, false
// true khi input hợp lệ
// false khi input không hợp lệ 
function validateNamSinh(namSinh) {

    // 2.2 Bắt đầu validate năm sinh
    // Ẩn hết thông báo lỗi năm sinh
    document.getElementById("loi-ns-bat-buoc").style['display'] = "none";
    document.getElementById("loi-ns-number").style['display'] = "none";
    document.getElementById("loi-ns-tuong-lai").style['display'] = "none";

    // Trim dữ liệu năm sinh
    namSinh = namSinh.trim();

    // Xử lý logic để hiển thị lỗi
    if (namSinh === "") {
        // Kiểm tra bắt buộc
        document.getElementById("loi-ns-bat-buoc").style['display'] = "block";
        return false;
        
    } else if (isNaN(namSinh)) {
        // Kiểm tra có phải số hay không
        document.getElementById("loi-ns-number").style['display'] = "block";
        return false;

    } else if (Number(namSinh) > 2023) {
        // Kiểm tra với năm 2023
        document.getElementById("loi-ns-tuong-lai").style['display'] = "block";
        return false;

    } else {
        // Năm sinh hợp lệ
        document.getElementById("loi-ns-bat-buoc").style['display'] = "none";
        document.getElementById("loi-ns-number").style['display'] = "none";
        document.getElementById("loi-ns-tuong-lai").style['display'] = "none";
        return true
    }
}


// Hàm nhận vào giá trị số điện thoại và trả về true, false
// true khi input hợp lệ
// false khi input không hợp lệ 
function validateSoDienThoai(soDienThoai) {
    // 1. Ẩn hết thông báo lỗi về số điện thoại
    // Mời mọi người làm

    // 2. Trim dữ liệu số điện thoại
    // Mời mọi người làm

    // 3. Bắt đầu xử lý logic để hiển thị lỗi
    if (soDienThoai === "") {
        // Hiển thị lỗi bắt buộc
        // TODO

        return false;
    } else if(isNaN(soDienThoai)) {
        // Hiển thị lỗi number
        // TODO

        return false
    } else if(soDienThoai.length !== 10) {
        // Hiển thị lỗi khác 10 ký tự
        // TODO

        return false
    } else {
        // Form hợp lệ, ẩn hết thông báo lỗi
        // TODO

        return true
    }

}


/**
 * Ý Tưởng Validate Tên Đăng Nhập:
 * 
 * 1. Validate bắt buộc: Dễ rồi, từ xử lý
 * 
 * 2. Validate chỉ nhận chữ và số
 * 2.1. Tạo 1 mảng chứa các ký tự thỏa mãn ["a", "A", "b", "B", ..."z", "Z", "0", ..."9"]
 * 2.2. Dùng vòng for để duyệt lần lượt từng ký tự của string tên đăng nhập
 * 2.3. Sau đó dùng array.indexOf để kiểm tra index của ký tự. Nếu vị trí < 0 nghĩa là ký tự không nằm trong dánh sách ký tự thỏa mãn ==> Báo lỗi thôi
 * 
 */
function validateTenDangNhap () {

    // Thiết kế HTML

}