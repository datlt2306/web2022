const productList = [
    { id: 1, name: "product A", price: 200 },
    { id: 2, name: "product B", price: 300 },
];

const productElement = document.querySelector("#product");

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
function render(element, content) {
    console.log(content);
    if (element) {
        element.innerHTML = content;
    }
}
render(productElement, showProducts(productList));
// render(vi tri, noi dung);
