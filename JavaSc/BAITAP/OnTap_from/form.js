function validateForm() {
    console.log("// Gọi hàm validateForm");

    // Phần 1: Validate input text
    let nodetenSinhVienId = document.getElementById("tenSinhVienId");
    console.log(nodetenSinhVienId);  // Lấy ra thông tin node
    console.log(nodetenSinhVienId.value); // Lấy ra value củ input

    // VD: Validate bắt buộc nhập tên sinh viên
    // Nếu không nhập thì hiển thị text thông báo màu đỏ "Tên Sinh Viên là thông tin bắt buộc"
    // Ý tưởng:
    // 1. Khi ấn nút Lưu thì lấy value của input tên sinh viên
    // 2. Kiểm tra value. 
    // Nếu có giá trị thì nghĩa là người dùng đã nhập 
    // Không có gtri thì nghĩa là chưa nhập gì cả. Lúc này hienr thị thông tin text thông báo

    // 1. Lấy value của input sinh viên khi lưu
    let tenSinhVienValue = document.getElementById("tenSinhVienId").value;
    console.log("Tên sinh viên value", tenSinhVienValue);
    // 2. So sánh rồi hiển thị texr thông báo

    if (tenSinhVienValue === "") {
        // Sửa style của text
        document.getElementById("thongBaoLoi").style.display = "block";
    }
    else {
        // Nếu có dữ liệu thì ẩn thông báo
        document.getElementById("thongBaoLoi").style.display = "none";
    }

    // Phần 2 Validate selectbox
    let queQuan = document.getElementById("queQuan").value;
    console.log("Quê quán value", queQuan);
    if(queQuan===""){
        document.getElementById("queQuanThongBaoLoi").style.display = "block";
    }
    else{
        document.getElementById("queQuanThongBaoLoi").style.display = "none";
    }

    // Phần 3 : validate radio box

    // 1. Lấy thông tin nhập vào của người dùng
    let nodeGioiTinh = document.getElementsByName("gioiTinh"); // Trả về danh sách 3 phần tử
    let gioiTinhValue; // biến lưu lại value giới tính
    console.log("Node giới tính",nodeGioiTinh);
    for(let node of nodeGioiTinh){
        console.log(node.checked); // Kiểm tra trạng thái tích
        console.log(node.value);
        if(node.checked===true){
            gioiTinhValue=node.value;
            break; // đã tìm được giá trị
        }
    }
    // log ra giá trị giới tính
    console.log(gioiTinhValue);

    // hiển thị thông báo khi không lựa chọn giới tính
        if(gioiTinhValue===undefined){
            document.getElementById("gioiTinhThongBaoLoi").style.display = "block";
        }
        else{
            document.getElementById("gioiTinhThongBaoLoi").style.display = "none";
        }


    // Phần 4: Validate checkbox
    let nodeSoThich = document.getElementsByName("soThich");
    let arrSoThich=[];

    // for để duyệt danh sách
    for (let node of nodeSoThich) {
        if(node.checked){
            arrSoThich.push(node.value)
        }
    }
    console.log("Danh sách sở thích:",arrSoThich);


    // Nếu form thỏa mãn thì return true
    // Nếu form không thỏa mãn thì return false
    // Khi nào muốn gửi thông tin form lên server thì mới return true
    return false;
}