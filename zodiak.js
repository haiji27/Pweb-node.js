const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("======================================");
console.log("Selamat datang! Yuk cari tahu zodiakmu");
console.log("Silahkan masukkan tanggal dan bulan kelahiran Anda untuk melihat hasilnya.");
console.log("======================================\n");

rl.question("Masukkan nama kamu: ", function(nama) {

    rl.question("Masukkan tanggal lahir (1-31): ", function(tanggal) {

        rl.question("Masukkan bulan lahir (1-12): ", function(bulan) {

            tanggal = parseInt(tanggal);
            bulan = parseInt(bulan);

            let zodiak;

            if ((bulan === 1 && tanggal >= 20) || (bulan === 2 && tanggal <= 18)) {
                zodiak = "Aquarius";
            } 
            else if ((bulan === 2 && tanggal >= 19) || (bulan === 3 && tanggal <= 20)) {
                zodiak = "Pisces";
            } 
            else if ((bulan === 3 && tanggal >= 21) || (bulan === 4 && tanggal <= 19)) {
                zodiak = "Aries";
            } 
            else if ((bulan === 4 && tanggal >= 20) || (bulan === 5 && tanggal <= 20)) {
                zodiak = "Taurus";
            } 
            else if ((bulan === 5 && tanggal >= 21) || (bulan === 6 && tanggal <= 20)) {
                zodiak = "Gemini";
            } 
            else if ((bulan === 6 && tanggal >= 21) || (bulan === 7 && tanggal <= 22)) {
                zodiak = "Cancer";
            } 
            else if ((bulan === 7 && tanggal >= 23) || (bulan === 8 && tanggal <= 22)) {
                zodiak = "Leo";
            } 
            else if ((bulan === 8 && tanggal >= 23) || (bulan === 9 && tanggal <= 22)) {
                zodiak = "Virgo";
            } 
            else if ((bulan === 9 && tanggal >= 23) || (bulan === 10 && tanggal <= 22)) {
                zodiak = "Libra";
            } 
            else if ((bulan === 10 && tanggal >= 23) || (bulan === 11 && tanggal <= 21)) {
                zodiak = "Scorpio";
            } 
            else if ((bulan === 11 && tanggal >= 22) || (bulan === 12 && tanggal <= 21)) {
                zodiak = "Sagitarius";
            } 
            else if ((bulan === 12 && tanggal >= 22) || (bulan === 1 && tanggal <= 19)) {
                zodiak = "Capricorn";
            } 
            else {
                console.log("\nError! Masukkan tanggal dan bulan yang valid.");
                rl.close();
                return;
            }

            console.log("\n===== HASIL =====");
            console.log("Nama           :", nama);
            console.log("Tanggal Lahir  :", tanggal);
            console.log("Bulan Lahir    :", bulan);
            console.log("Zodiak         :", zodiak);

            rl.close();
        });
    });
});