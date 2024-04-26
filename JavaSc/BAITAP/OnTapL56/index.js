console.log("     Ôn tập silde");

// khởi tạo các biến cần thiết
let arrAnh = ["img/g.jpg", "img/o.jpg", "img/th.jpg"];
let indexHienTai = 0; // biến lưu lại vị trí ảnh hiện tại
let nodeSildeShow = document.getElementById("anh");

// p2
nodeSildeShow.src = arrAnh[0];

// xử lý logic

function chonAnh(index) {
    indexHienTai = index;
    nodeSildeShow.src = arrAnh[indexHienTai];
}
// lùi tiến
function tienAnh() {
    indexHienTai++;
    if (indexHienTai >= arrAnh.length) {
        indexHienTai = 0
    }
    nodeSildeShow.src = arrAnh[indexHienTai];
}

function luiAnh() {
    indexHienTai--;
    if (indexHienTai < arrAnh.length) {
        indexHienTai = 2
    }
    nodeSildeShow.src = arrAnh[indexHienTai];
}
function duyet() {

    // hiển thị ảnh 1
    indexHienTai = 0;
    nodeSildeShow.src = arrAnh[indexHienTai];

    // hiển thị ảnh 2
    setTimeout(
        () => {
            indexHienTai = 1;
            nodeSildeShow.src = arrAnh[indexHienTai];
        }
        , 1000
    )

    // hiển thị ảnh 3
    setTimeout(
        () => {
            indexHienTai = 2;
            nodeSildeShow.src = arrAnh[indexHienTai];
        }
        , 2000)
}
let interValDuyetVoHan;
 // duyệt vô hạn
 function duyetVoHan(){
    let boDem =0;

    // dùng setInterval
    interValDuyetVoHan=setInterval(
        ()=>{
           // Tìm index
           indexHienTai=boDem%arrAnh.length;
           // Thay đổi ảnh
           nodeSildeShow.src = arrAnh[indexHienTai];
           // tang bộ đếm
           boDem++;
        }
        ,1000
    )
}

function dungVoHan() {
    clearInterval(interValDuyetVoHan);
}

function ngauNhien() {
    // ý tưởng: tìm số ngẫu nhiên từ 0 đến length
    let soNgauNhienTu1den10=Math.random()*10;

    let soDuChia3=soNgauNhienTu1den10%3;

    let chiLayPhanNguyen = Math.floor(soDuChia3);
    

    // code ngắn lại
    indexHienTai=Math.floor((Math.random()*10)%3);
    nodeSildeShow.src = arrAnh[indexHienTai];
}