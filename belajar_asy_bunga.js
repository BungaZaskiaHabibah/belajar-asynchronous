// === CALLBACK ==
function greeting(name, callback) {
    console.log("Mulai greeting.....");
    callback(name);
}

function sayName(name) {
    console.log('Halo, nama saya ${name}');
}

greeting("Bunga", sayName);

// == PROMISE ===
function checkNumber(num) {
    return new Promise((resolve, reject)
 => {
    if (num > 10) {
        resolve('${num} lebih besar dari 10');
    } else {
        reject('${num} tidak lebih dari 10');
    }
});
}

checkNumber(15)
 .then((result) => console.log("Promise berhasil:", result))
 .catch((error) => console.log("Promise gagal:", error));

 //--- ASYNC/AWAIT ===
 function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
 }

 async function asyncProses() {
    console.log("Mulsi Proses.....");
    await delay(2000);
    console.log("Selesai setelah 2 detik (delay pakai promise)");
 }

 asyncProses();

 //====FETCH API----
 async function fetchPost() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log("Data dari API:");
        console,log(data);
    } catch (error) {
        console.log("Gagal fetch data", error);
    }
 }

 fetchPost();