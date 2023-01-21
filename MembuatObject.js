// Membuat Object

// 1. Object literal

// var siswa= {
//     nama : ['Fahru','Fahri'],
//     nis : '34659',
//     jurusan : 'sija',
// }
//         // Atau
// var objk = {};
// objk.halo = function(){
//     console.log('HALOOOOOOOOOOO');
    
// }
// objk.halo();

    // Menggunakan This
// function halo (){
//     console.log(this);
//     console.log('Hlao');

// }
// this.halo();

// This mengembalikan object global

// 2. Function Declaration

// function buatObjSiswa(nama,nis,jurusan){
//     var siswaa = {};
//     siswaa.nama = nama;
//     siswaa.nis = nis;
//     siswaa.jurusan = jurusan;
//     return siswaa;
// }
// var siswaaa = buatObjSiswa('Fahri',34659,'sija');

    // Menggunakan this
// var obj = {a : 10 ,nama : 'fahri'}
// obj.halo = function(){
//     console.log(this);
//     console.log('hola');
// }
// obj.halo();
// This menembalikan object yang bersangkutan

// 3. Constructor Funciton

// function siswa1 (nama,nis,jurusan){
//     this.nama = nama;
//     this.nis = nis;
//     this.jurusan = jurusan;

// }
// var siswaa1 = new siswa1 ('Fahri',34659,'sija');

    // Menggunakan this

// function halo (){
//     console.log(this);
//     console.log('hlao');
// }
// var obj1 = new halo();

// This mengembalikan object yang baru dibuat
