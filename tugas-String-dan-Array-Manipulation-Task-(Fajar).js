console.log("Nama: Fajar Ari Fadilla" + "\nProgram: Web Development" );
console.log("");
console.log("========== TASK: STRING DAN ARRAY MANIPULATION ==========");

// Tugas ke-1
console.log("========== CASE 1: USER DATA CLEANER ==========");

// String mentah dari form input:
const namaMentah = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

// Code:
const cleanedString = namaMentah.trim();
const namesArray = cleanedString.split(",");
const formattedNames = namesArray.map((name) => {
    return name.trim().toLowerCase();
});

// Tampilkan hasil:
const finalNames = formattedNames.join(" | ");
console.log("String awal:", namaMentah);
console.log("Array nama:", formattedNames);
console.log("Hasil akhir:", finalNames);


// Tugas ke-2
console.log("\n========== CASE 2: E-COMMERCE PRODUCT FILTER ==========");

// Data produk:
const products = [
    { name: "Laptop", price: 1000, active: true },
    { name: "Mouse", price: 20, active: false },
    { name: "Keyboard", price: 50, active: true }
];

// Code:
const activeProducts = products.filter((product) => {
    return product.active === true;
});
const activeProductNames = activeProducts.map((product) => {
    return product.name.toUpperCase();
});
const totalActivePrice = activeProducts.reduce((total, product) => {
    return total + product.price;
}, 0);

// Tampilkan hasil:
console.log("Produk aktif:", activeProducts);
console.log("Nama produk aktif:", activeProductNames);
console.log("Total harga produk aktif:", totalActivePrice);
