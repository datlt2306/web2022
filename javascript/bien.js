// Biến
// function
// tên biến ->
// - danh từ, isStatus

// tên hàm nó phải hành động
// - sum, showProducts, removeProduct

// 1 tên biến - Danh từ
const a = 10;
const b = 20;

// 3
// tên hàm - Động từ: showProduct, removeProduct, checkEvenOrOddNumber()
function sum(a, b) {
    // kiem tra
    if (typeof a !== "number" || typeof b !== "number") return -1;
    // xu ly
    const result = a + b;
    // return
    return result;
}
console.log(sum(10, 20));

// vi du 2:

const productList = [
    { id: 1, name: "Product A", price: 20 },
    { id: 2, name: "Product B", price: 30 },
];

function showProducts(products) {
    // kiểm tra
    if (!Array.isArray(productList) || productList.length == 0) return [];

    // xử lý
    let result = "";
    for (let i = 0; i < products.length; i++) {
        result += `<h2>${products[i]}</h2>`;
    }
    // return
    return result;
}
function render(element) {
    if (element) {
        document.querySelector("#app").innerHTML = element;
    }
}

render(showProducts(productList));
