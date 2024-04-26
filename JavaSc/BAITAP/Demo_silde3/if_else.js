console.log("//1. Các phép so sánh");

// Demo if
// Ví dụ: Nhập vào điểm và thông báo kết quả
//let diemSo = Number(prompt("Nhập điểm số"));

// console.log("Demo if");
// if(diemSo>=5){
//     console.log("Chúc mừng bạn đã qua môn");
// }
// if(diemSo<5){
//     console.log("Chúc bạn may mắn lần sau");
// }

// console.log("Demo if else");
// if(diemSo>=5){
//     console.log("Chúc mừng bạn đã qua môn");
// }
// else{
//     console.log("Chúc bạn may mắn lần sau");
// }

// console.log("Demo if else if");
// ví dụng nhập số thì in ra chữ
//let thuNumber = Number(prompt("Nhập vào thứ trong tuần"));
// if(thuNumber==2){
//     console.log("Hôm nay là thứ hai");
// }
// else if(thuNumber==3){
//     console.log("Hôm nay là thứ ba");
// }
// else if(thuNumber==4){
//     console.log("Hôm nay là thứ bốn");
// }
// else if(thuNumber==5){
//     console.log("Hôm nay là thứ năm");
// }
// else if(thuNumber==6){
//     console.log("Hôm nay là thứ sáu");
// }
// else if(thuNumber==7){
//     console.log("Hôm nay là thứ bảy");
// }
// else if(thuNumber==8){
//     console.log("Hôm nay là Chủ nhật");
// }
// else {
//     console.log("Không thỏa mãn");
// }

// console.log("Demo switch");
// switch(thuNumber){
//     case 2:
//         console.log("Hôm nay là thứ Hai");
//         break;
//         case 3:
//             console.log("Hôm nay là thứ Ba");
//             break;
//             case 4:
//                 console.log("Hôm nay là thứ 4");
//                 break;
//                 case 5:
//                     console.log("Hôm nay là thứ năm");
//                     break;
//                     case 6:
//                         console.log("Hôm nay là thứ sáu");
//                         break;
//                         case 7:
//                             console.log("Hôm nay là thứ bảy");
//                             break;
//                             case 8:
//                                 console.log("Hôm nay là Chủ nhật");
//                                 break;
//                                 default :
//                                     console.log("Không thỏa mãn");
//                                     break;
//}

    // Lưu ý:
    // Dùng if else thay cho if nhiều lần
    // Nếu thứ bắt buộc if else if nhiều lần thì dùng switch 

    // Nâng cao 
    // Lệnh if rút gọn
    // console.log("Demo if rút gọn");
    // console.log(diemSo>=5 ?"Bạn đã qua môn": "Chúc may mắn lần sau");



    // so sánh ===
    // Ví dụ so sanh 10 == "10"
    //Ví dụ so sanh 10 === "10"

    if(10=="10"){
        console.log(true);
    }
    else{
        console.log(false);
    }

// == : so sánh giá trị

    if(10==="10"){
        console.log(true);
    }
    else{
        console.log(false);
    }
    
    // === : so sánh giá trị và kiểu dữ liệu

    if(10===Number("10")){
        console.log(true);
    }
    else{
        console.log(false);
    }