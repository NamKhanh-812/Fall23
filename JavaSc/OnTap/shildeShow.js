//
let danhSachAnh = ["img/1.jpeg","img/2.jpeg","img/3.jpeg","img/4.jpg","img/5.png"];
let indexAnhHienTai =0;
let nodeAnh = document.getElementById("anh");

let duyet;
function start(){
nodeAnh.src=danhSachAnh[0];
    duyet=setInterval(
        ()=>{
            tien();
        }
    ,1000);
}
start();

function stop(){
    clearInterval(duyet);
}

function tien(){
    indexAnhHienTai++;
    if(indexAnhHienTai>=danhSachAnh.length){
        indexAnhHienTai=0;
    }
    nodeAnh.src=danhSachAnh[indexAnhHienTai];
}
function lui(){
    indexAnhHienTai--;
    if(indexAnhHienTai<0){
        indexAnhHienTai=danhSachAnh.length-1;
    }
    nodeAnh.src=danhSachAnh[indexAnhHienTai];
}
function auto(){
    indexAnhHienTai=(Math.floor(Math.random()*100))%5;
    nodeAnh.src=danhSachAnh[indexAnhHienTai];
    console.log(indexAnhHienTai);
}
