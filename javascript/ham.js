function sum(a, b) {
    // kiểm tra
    if (typeof a !== "number" || typeof b !== "number") return -1;
    // xử lý
    const result = a + b;
    // trả về kết quả
    return result;
}
console.log(sum("10", 20));

// ví dụ 2
const productList = [
    { id: 1, name: "Đat" },
    { id: 2, name: "Kiên" },
];

function showProduct(products) {
    // kiểm tra
    if (!Array.isArray(products) || products.length == 0) return false;

    // xử lý
    let result = "";
    for (let i = 0; i < products.length; i++) {
        result += `<h2>${products[i].name}</h2>`;
    }
    // trả về kết quả
    return result;
}
document.getElementById("app").innerHTML = showProduct(productList);
