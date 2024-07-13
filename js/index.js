// 1 misol

// let chars = ['j', 's', 'd', 'a', ' ', 'd', 'j', 's', 't', 'a', "'", 'l', 'i', 'm', 'l', 'd', 'j', 'a', 'i', 'o', 'r', 'w', 'g', 'm', 'N', 'A', 'J', 'O', 'T', 'a', 's', 'o', 'i', 'j', 'm', 'o', 'm', 'i', 's', 'o', 'i', 'j', 'd', 's', 'a', 'o', 'i', 'd', 'j', 't', 'h', 'e', 'm', 'o', 'i', 's', 'a', 's', 'd', 'o', 'o', 'n', 'i', 'o', 'n', 'b', 'e', 's', 't'];
// let message = "Najot ta'lim is the best";

// let result = Array.from(message).filter(char => chars.includes(char)).join('');

// console.log(result);

// 2 misol

// let searchMatrix = function(matrix, target) {
//     let found = false; 

//     matrix.forEach(row => {
//         row.forEach(value => {
//             if (value === target) {
//                 found = true;
//             }
//         });
//     });

//     return found;
// };

// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));  
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); 

// 3 misol (Ustoz bu misolga tushunmadim)

// 4 misol

// function lengthOfLastWord(s) {
//     let words = s.trim().split(' ');
//     return words[words.length - 1].length;
// }

// console.log(lengthOfLastWord("Hello World")); 


// 5 misol

// function stringifyObject(obj) {
//     let entries = Object.entries(obj);
    
//     let result = entries.map(([key, value]) => `${key}${value}`);
    
//     return result;
// }

// let obj = {a: 2, b: 5, c: 7};
// let output = stringifyObject(obj);
// console.log(output); 

// 6 misol

// let findMedianSortedArrays = function(nums1, nums2) {
//     let merged = [...nums1, ...nums2].sort((a, b) => a - b);
//     let n = merged.length;
//     if (n % 2 === 0) {
//         return (merged[n / 2 - 1] + merged[n / 2]) / 2;
//     } else {
//         return merged[Math.floor(n / 2)];
//     }
// };

// let nums1 = [1, 2];
// let nums2 = [3, 4];
// console.log(findMedianSortedArrays(nums1, nums2)); 

// 7 misol

// function moveDuplicates(arr) {
//     let unique = []; 
//     let duplicates = []; 

//     arr.forEach(item => {
//         if (!unique.includes(item)) {
//             unique.push(item); 
//         } else {
//             duplicates.push(item); 
//         }
//     });

//     return { unique, duplicates }; 
// }

// // Test
// let arr = [1, 2, 3, 1, 4, 5, 2, 6, 7, 3];
// let result = moveDuplicates(arr);

// console.log("Unikal elementlar:", result.unique); 
// console.log("Takrorlanayotgan elementlar:", result.duplicates);


// 8 misol

// let products = [
//     {id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
//   ];
  
//   let updatedProducts = products.filter(product => product.id !== 4);
  
//   console.log(updatedProducts);

// 9 misol

// let people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];

// people.sort((a, b) => a.age - b.age);

// let youngest = people[0].age;
// let oldest = people[people.length - 1].age;
// let ageDifference = oldest - youngest;

// console.log(ageDifference); 



// Qoshimcha promptda kiritilgan qiymatni true false ligini tekshiruvchi.

// 1 USUL

// let truthyFalsy = prompt("Ixtiyoriy Boolean qiymat kiriting")
// alert("Hozir men sizni true yoki false qiymat kiritganingizni topaman")
// if(truthyFalsy){
//     alert('Siz kiritgan qiymat TRUE')
// } else {
//     alert('Siz kiritgan qiymat FALSE')
// }


// 2 USUL

// let arr = [ "null",1, 5, 0, 'a', null," ", 'bcd', undefined,"", false ,,"hello World", "false", ""]
// let trysy = {}
// let falsy = {}
// arr.forEach(item => {
//     if(item){
//         trysy + arr.filter(item => item)
//     }else{
//         falsy + arr.filter(item => item)
//     }
// })
// console.log(trysy)
// console.log(falsy)