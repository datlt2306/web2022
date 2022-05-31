// Khai báo mảng
const productList = [
    { id: 1, name: "product A", price: 200 },
    { id: 2, name: "product B", price: 300 },
];
// selector đến element product
const productElement = document.querySelector("#product");

// khai báo hàm show product
function showProducts(products) {
    // kiểm tra
    if (!Array.isArray(productList) || productList.length == 0) return [];

    // xử lý
    let result = "";
    for (let i = 0; i < products.length; i++) {
        result += `<h2><a href="./detail.html?id=${products[i].id}">${products[i].name}</a></h2>`;
    }
    // return
    return result;
}

// Hiển thị ra ngoài màn hình
function render(element, content) {
    // nếu tìm được element thì hiển thị
    if (element) {
        element.innerHTML = content;
    }
}
render(productElement, showProducts(productList));
