console.log("//Arr năm sinh");
let arrNamSinh =[2005,2004,2006,2003,2002,2007,2000];

let namSinhChan = [];
let namSinhDu18 = [];
let namSinhDuoi18 = [];
for (let namSinh of arrNamSinh) {

    if(namSinh%2===0){
        namSinhChan.push(namSinh);
    }
    if(2023-namSinh>=18){
        namSinhDu18.push(namSinh);
    }
    if(2023-namSinh<18){
        namSinhDuoi18.push(namSinh);
    }

}
console.log("Danh sách năm sinh là số chẵn: "+namSinhChan);
console.log("Danh sách năm sinh đủ 18 tuổi: "+namSinhDu18);
console.log("Có "+namSinhDuoi18.length+" năm sinh dưới 18 tuổi ");
