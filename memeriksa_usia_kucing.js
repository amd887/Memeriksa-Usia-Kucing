// Function untuk memeriksa usia kucing
const checkCats = (catsTuti, catsNining) => {

    // Menyalin array catsTuti ke correctedTuti untuk menghindari perubahan data asli
    const correctedTuti = catsTuti.slice();

    // Menghapus usia kucing pertama dan terakhir
    correctedTuti.shift();
    correctedTuti.pop();

    // Menggabungkan data kucing Tuti yang sudah dikoreksi dengan data kucing Nining
    const combinedData = correctedTuti.concat(catsNining);

    // Iterasi melalui setiap kucing dalam data gabungan
    for (let i = 0; i < combinedData.length; i++) {
        const age = combinedData[i];

        // Memeriksa usia kucing
        if (age >= 3) {
            console.log(`Kucing Nomor ${i + 1} adalah Kucing Dewasa, dan berusia ${age} tahun`);
        } else {
            console.log(`Kucing Nomor ${i + 1} masih anak-anak.`);
        }
    }
}

// Menjalankan fungsi untuk kedua set data uji

// Data uji 1
const data1Tuti = [3, 5, 2, 12, 7];
const data1Nining = [4, 1, 15, 8, 3];
console.log("Data Uji 1:");
checkCats(data1Tuti, data1Nining);

// Data uji 2
const data2Tuti = [9, 16, 6, 8, 3];
const data2Nining = [10, 5, 6, 1, 4];
console.log("\nData Uji 2:");
checkCats(data2Tuti, data2Nining);


// Menambahkan belajar github
// - Framework Javascript
//   * Angular
