// let arr1=["Shrikant","Mohan", "Kunal","Shrikant","Mohan", "Manoj"];
let numbers=[2,3,4,5,6,7,7];

// arr1.splice(2,1,"now",2,"hello","Now",45);
// console.log(arr1);


//Finding unique using for loop:
let num=[2,3,4,5,6,6,6,7,2,3,1]

// for (let i= 0; i<num.length-1; i++) {
//     for(let j=i+1; j<num.length; j++){
//         if(num[i]===num[j]){
//             num.splice(j,1);
//             i--;
//         }
//     }
// }
// console.log(num); // [2, 3, 4, 5,6, 7, 1]


// Finding unique using for loop:

let arr1=["Shrikant","Mohan", "Kunal","Shrikant","Mohan", "Manoj"];

for(let i=0; i<arr1.length; i++){
    for(let j=i+1; j<arr1.length; j++){
        if(arr1[i]===arr1[j]){
            arr1.splice(j,1);
            i--;
        }
    }
}
console.log(arr1); //[ 'Shrikant', 'Mohan', 'Kunal', 'Manoj' ]