// BÀI 1:Write a script to ask users enter a sequence of numbers,
// the Numbers are separated by commas, calculate the sum of the numbers and show it to users

// let input = []
// let a = prompt(" Mời nhập dãy số:(,)")
// input = a.split(",")
// let sum = 0
//  for(i=0; i<input.length; i++){
//  input[i] = Number(input[i])
//  sum+=input[i]
// //  }
//  console.table(input)
//  alert(`tổng là: ${sum}`)

// BÀI 2:Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users

// let input = [];
// let str = prompt("Mời nhập dãy số (,)");
// input = str.split(",")
// for (let i=0; i < input.length; i++){
//     input[i] = Number(input[i]);
//     small = input[0]
//     if (input[i]<small){
//         small = input[i]
//     }
// }
// console.table(input);
// alert(`số nhỏ nhất là ${small}`)
// b1
//   let arr = prompt(" Enter yor arr")
//   let newArr = arr.split(',') // chuyển str sang mảng
//   console.log(newArr)
//   let sum = 0
//   for (let i = 0; i < newArr.length; i++){
//       sum += Number(newArr[i])// sum = sum + ar[i]
//   }
//   console.log(sum);


// b2
// let arr = prompt(" Enter yor arr")
// let newArr = arr.split(',')

// let minNumber = Math.min.apply(Math,newArr)//  tìm số nhỏ nhất 
// console.log(minNumber)

// b3
// let arr = [2,4,6,7,3,1,99]// mảng nên ngoặc vuông
// console.log(arr)
// let inputNumber = Number(prompt( "Enter your number:"))
// let check = false
// let index = 0
// for (let i = 0; i < arr.length; i++){
//     if (inputNumber===arr(i){
//         index = icheck = true
//     }
// }

// if (check){
//     alert(`${inputNumber}have in arr, and index is ${index}`)
// }else{
//     alert(`${inputNumber} not found` )
// }

// let array = [3, 4, 6, -9, 10, -88, 2];
// let n = Number(prompt("Enter a number"));
// let check = array.includes(n); // lệnh lấy 1 số trong mảng array.includes(element,start)
// if (check===true){
//     for (let i=0; i < array.length; i++){
//        if (n===array[i]){
//            alert(`${n} is found in my array at index ${i}`)
//        }
//     }
// }
// else{
//     alert(`${n} is NOT found in my array`)
//        }


//b4
// // a.
// let arr = [ 5,7,300,90,24,50,75]
// console.log(`Hello, my name is Huyen and here is my sheep sizes 
// ${arr.join(" ")}`) //join để liên kết, để bỏ phẩy, nếu có phẩy thì hiện ra có phẩy
// //= console.log(...arr) in ra số, còn lệnh trên là string
// //b.
// let max = Math.max(...arr)//gọi lần lượt tùng phần tử
// console.log(max)
// //c.
// /** indexOf caasu trusc: arr.indexOf(item,start- ở vị trí nào, nếu k thì mchạy từ -1) */
// let index = arr.indexOf(max)
// console.log(index);
// if ( index === -1){
//     console.log("Not found")
// } else {
//     arr[index] = 8
//     console.log(`After shearing, here is my flock`)
// console.log(...arr) //in ra số
// }
// //d.
