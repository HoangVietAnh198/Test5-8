// Bài 1 :
// let str = prompt('Hãy nhập chuỗi bạn muốn');
// let strarray = str.split("");
// let outPut = "";
// for (i = strarray.length - 1; i >= 0; i--) {
//     outPut = outPut + strarray[i]
// }
// console.log(outPut);

// Bài 2:
// let str = prompt('Hãy nhập chuỗi bạn muốn').toLowerCase();
// let strarray = str.split(" ");
// for (i = 0; i < strarray.length; i++) {
//     strarray[i] = strarray[i][0].toUpperCase() + strarray[i].slice(1);
// }
// console.log(strarray.join(" "));

// Bài tập 3:



// Bài 4:
// let Arr=[5, 2, 3, 4, 1];
// let b = "";
// for (i=0;i<Arr.length;i++){
//     let a = Arr[i]
//     for(j=0;j<Arr.length;j++){
//         if (a<Arr[j]) {
//             b=b+Arr[j]
//         }
//     }
// }
// console.log(b)


// Bài tập 5
// let nhanVien = ["Anh", "Manh", "Phong"];
// let inPut = prompt("Hãy nhập R/C/U/D").toUpperCase();
// if (inPut === "R") {
//     for (let i = 0; i < nhanVien.length; i++) {
//         console.log(i+1, nhanVien[i])
//     }
// } else if (inPut === "C") {
//     let them = prompt("Hãy nhập tên nhân viên muốn thêm");
//     nhanVien.push(them);
//     for (let i = 0; i < nhanVien.length; i++) {
//         console.log(i+1, nhanVien[i])
//     }
// } else if (inPut === "U") {
//     let updatedNv = prompt("Nhập nhân viên muốn Update");
//     let findIndex = -1;
//     for (let i = 0; i <= nhanVien.length - 1; i = i + 1) {
//         if (updatedNv === nhanVien[i]) {
//             findIndex = i;
//         }
//     }
//     if (findIndex === -1) {
//         console.log("Không có nhân viên trong công ty");
//     } else{
//         let nhanVienmoi = prompt(`Hãy nhập tên nhân viên mới`)
//         nhanVien[findIndex]=`${nhanVienmoi}`
//         for (let i = 0; i < nhanVien.length; i++) {
//             console.log(i+1, nhanVien[i])
//         }
//     } 
// } else if (inPut=== "D") {
//     let deleteNv = prompt("Nhập nhân viên muốn Delete");
//     let findIndex = -1;
//     for (let i = 0; i <= nhanVien.length - 1; i = i + 1) {
//         if (deleteNv === nhanVien[i]) {
//             findIndex = i;
//         }
//     }
//     if (findIndex === -1) {
//         console.log("Không có nhân viên trong công ty");
//     } else {
//         let a = nhanVien.splice(findIndex,1)
//         for (let i = 0; i < nhanVien.length; i++) {
//             console.log(i+1, nhanVien[i])
//         }
//     }
// }