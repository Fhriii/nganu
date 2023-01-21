// Memanipulasi Array

// 1.Menambah isi array
// var arr =[];
// arr[0]= "Muhammad";
// arr[1]= "Fachri";
// arr[2]= "Sija2";


// console.log(arr);


// 2.Menghapus isi array
// var arr = ["Muhammad","Fachri","Sija2"];
// arr[1]=undefined;
// console.log(arr);


// 3.Menampilkan isi array
// var arr = ["Muhammad","Fachri","Sija2"];

// for(var i=0;i<arr.length;i++){
    //     console.log('Murid ke-'+ (i+1) + ' : ' + arr[i]);
    // }
    
    

// METHOD PADA ARRAY
    
// var arr = ["Muhammad","Fachri","Sija2"];

// 1.join
// console.log(arr.join(' - '));

// 2.Push & Pop
// arr.push('22');
// arr.pop();

// 3.Unshift & Shift
// arr.unshift('22');
// arr.shift();

// console.log(arr);


// 4.Splice
//splice(indexAwal,MauDihapusbrp,elemenBaru1,elemenBaru2,....);
// arr.splice(2,1,22);

// 5.Slice
// slice(awal,akhir)--Membuat variabel baru

// var arr2 = arr.slice(1,2);

// 6.ForEach
// var angka =[1,2,3,4,5,6,7,8];
// angka.forEach(function (e) {
    //     console.log(e);
    // });
    
    
// 7.Map
    
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e){
//     return e*2;
// });
// console.log(angka2);

// 8.SOrt
// var angka = [1,3,2,6,4,7,5];
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka);

// 9.Filter
// var angka = [1,2,5,6,20,10,7,3];
// var angka2 = angka.filter(function(c){
//     return c > 3;
// });
// console.log(angka2);

// 10.Find

// var angka = [1,2,5,6,20,10,7,3];
// var angka2 = angka.find(function(c){
//     return c > 3;
// });
// console.log(angka2);