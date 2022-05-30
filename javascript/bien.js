// Biến
// function
// tên biến ->
// - danh từ, isStatus

// tên hàm nó phải hành động
// - sum, showProducts, removeProduct

// 1
const a = 10;
const b = 20;

// 3
function sum(a, b) {
    // kiểm tra
    if (typeof a !== "number" || typeof b !== "number") return -1;
    // xử lý
    const result = a + b;
    // kết quả
    return result;
}

// 2
console.log(sum(a, b));
