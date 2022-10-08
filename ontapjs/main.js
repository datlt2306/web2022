// // selector theo id element
document.getElementById("products");

// selector theo css
const title = document.querySelector("#title");

const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
    items[i].style.color = "red";
}
// When
// Tốc độ của getElementById nhanh hơn querySelector
// Luôn phải check xem nó có tồn tại không?
const productList = [
    { id: 1, name: "Item 1" }, // productList[0]
    { id: 2, name: "Item 2" }, // productList[1]
    { id: 3, name: "Item 3" }, // productList[2]
];
/**
 * 1: Log được ra mảng
 * 2: Hiển thị ra ngoài hình các item
 */

function getProductList(products) {
    let result = "";
    if (!Array.isArray(products)) return false;

    for (let i = 0; i < products.length; i++) {
        // mỗi vòng lặp thì biến result sẽ cộng chuỗi
        result += `<div class="border">${products[i].name}</div>`;
    }
    return result;
}
const app = document.getElementById("app");
if (app) {
    document.getElementById("app").innerHTML = getProductList(productList);
}
