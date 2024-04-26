console.log("Demo hàm");
// Có 3 loại hàm
//1. Hàm bình thường(Không có giá trị trả về)
//2. Hàm có tham số ( có thể có 1 hoặc nhiều tham số)
//3. Hàm có giá trị trả về

console.log("Demo hàm cơ bản");
//Cấu trúc khai báo hàm
function xinChao (){
    console.log("Xin chào");
    console.log("Kon ni chi wa");
    console.log("Ní hảo");
}
xinChao(); // gọi hàm, sử dụng hàm

console.log("Demo hàm có tham số");

function xinChaoCoThamSo(thamSo01,thamSo02){
    console.log(thamSo01);
    console.log(thamSo02);
}
// Gọi hàm và truyền vào tham số
xinChaoCoThamSo("Đây là tham số truyền vào","Long ngu quá");

//Ví dụ
function xinChaoTheoQuocGia(quocGiaParam) {
    if(quocGiaParam=="vi"){
        console.log("Xin chào");
    }
    else if (quocGiaParam=="jp"){
        console.log("Kon ni chi wa");
    }
    else if (quocGiaParam=="ch"){
        console.log("Ní hảo");
    }
    else {
        console.log("Mày là ai?");
    }
}



// Gọi hàm
let quocGia=prompt("Mời bạn nhập quốc gia(vi,jp,ch)");
xinChaoTheoQuocGia(quocGia);

console.log("Demo hàm có giá trị trả về");
function hamCoGiaTriTraVe() {
    return "Nhìn cái gì"
}

let giaTriNhanDuoc = hamCoGiaTriTraVe();
console.log("Giá trị nhận được từ hàm: ",giaTriNhanDuoc);

// ví dụ: viết hàm trả về "tên" khi người dùng nhập "họ và tên"
// ví dụ nhập vào "Nguyễn Anh Duy"
function timTen(hoVaTen) {
    //Cách 1: tìm last index of dấu cách
    // sau đó dùng substring để cắt chuỗi

    //Làm sạch dữ liệu
    hoVaTen = hoVaTen.trim();
    // tìm 
    let lastInDexOfSpace = hoVaTen.lastInDexOf(" ");

    let ten = hoVaTen.substring(lastInDexOfSpace + 1, hoVaTen.lenght);
    return ten;
}
let hoTen = prompt("Nhập họ và tên");
let ten = timTen(hoTen);
console.log(ten);