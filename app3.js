// quản lý số điện thoại
//  tạo 1 chương trình cho phép người dùng thêm, bớt, sửa, đọc số điện thoại
// nếu người dùng  nhập "C" => tạo mới 1 element
// nếu người dùng  nhập "D" => hỏi người dùng chỉ số index muốn xóa => xoa no
// nếu người dùng  nhập "U" => cập nhật 1 phần tử do người dùng nhập index
// nếu người dùng  nhập "R" => Cho người dùng nhập chỉ số INDEX, update nó

//let phoneNumber = [11,22,33]
// index,value,leghth
// create,read,update,delete
//console.log(phoneNumber)
// Đọc 1 số
//console.log(phoneNumber[0])
// Đọc nhiều số
// for (i = 0; i<phoneNumber.length; i++){
//     console.log(phoneNumber[i])
// }

// tạo phần tử
// Cách 1: 
// vd1: tạo phần tử thứ 4
// phoneNumber[3] = 33
// console.log(phoneNumber)

// // tạo phần tử chưa biết số tt
// phoneNumber[phoneNumber.length] =44
// console.log(phoneNumber)
// Cách 2:
//* tạo pần tử ở cuối mảng
// phoneNumber.push(23)
// console.log(phoneNumber)
// // Tạo phần tử ở đầu mảng
// phoneNumber.unshift(20)
// console.log(phoneNumber)

// UPDATE
// phoneNumber[1]=20
// //console.log(phoneNumber)
// console.table(phoneNumber)

//DELETE
 //let phoneNumber = [11,22,33]
// delete phoneNumber[1]
// console.log(phoneNumber)

// phoneNumber.pop (phoneNumber)//　xoá số cuối
// console.log(phoneNumber)

// phoneNumber.shift(phoneNumber)//xoá số dâdu
// console.log(phoneNumber)

//BAÌ TẬP: UPDATE 10 PHẦN TỬ TRONG MẢNG TĂNG LÊN 10 ĐƠN VỊ
 //let phoneNumber = [11,22,33,44]
//     // for(i=0;i<phoneNumber.length ; i++)
//     // console.log(phoneNumber[i]+10)

// let y=0
// while(y < phoneNumber.length){
//     console.log(phoneNumber[y]+10)
// phoneNumber[y] = phoneNumber[y] + 10
// y++
// console.log (phoneNumber);

// ÔN TẬP

/**sử dụng vòng lặp while.
// tạo 1 chương trình cho người dùng nhập thêm bớt sửa và đọc phone number
// khi hoàn thành 1 chức năng sẽ quay lại menu CRUD để người dùng chọn 
// nếu người dùng  nhập "C" => tạo mới 1 element ==> quay lại menu
// nếu người dùng  nhập "R" => Cho người dùng nhập chỉ số INDEX, in ra nó. ==> quay lại menu
// nếu người dùng  nhập "U" => cập nhật 1 phần tử do người dùng nhập index ==> quay lại menu
// nếu người dùng  nhập "D" => hỏi người dùng chỉ số index muốn xóa => xoa no ==> quay lại menu */

let a = prompt("Mời nhập")
if(a= "C"){
    console.log(phoneNumber[phoneNumber.leght]=88)
    console.log(phoneNumber)
}