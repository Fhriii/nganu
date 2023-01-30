// 2.1 EXECUTION CONTEXT , HOISTING ,& SCOPE

// console.log(nama());
// function nama(a,b) {
//     var a;
//     var b;
//     var c =a+b;
//    return c;

// }
// let angka = nama (2,3);
// console.log(angka);

        // Creation phase pada global context 

// nama var= undefined;
// nama function = fn();

// dinamakan hoisting;
// window = global Object;
// this = window;

        //Execution phase
// var nama = 'Fahri';
// var umur = 15;

// console.log(hello());

// function hello(){
//     return `Hello ,My name is ${nama},Iam ${umur} years old`
// }

// Function membuat lokal execution context
// Yang didalam nya terdapat creation dan executiion phase
// window
// arguments
// hoisting


// var nama = 'Fahri';
// var username = '@muhfachri'

// function halo(){
//     var instagram = 'http://instagram.com/';
//     return instagram + username;

// }
// console.log(halo('fahri','fafsa')); //ini disimpan di arguments



// function satu (){
//     var nama = 'fahri';
//     console.log(nama);
// }
// function dua (){
//     console.log(nama);
// }
// console.log(nama);
// var nama = 'fahru';
// satu ();
// dua('fahra');
// console.log(nama);