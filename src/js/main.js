import { render } from "./common";
import { categories, productList } from "./data";

function showData(data, key) {
    // kiểm tra
    if (!Array.isArray(data) || data.length == 0) return false;

    // xử lý
    let result = "";
    for (let i = 0; i < data.length; i++) {
        result += `<div><h2><a href="./detail.html?id=${data[i].id}">${data[i].name}</a></h2></div>`;
    }
    // trả về kết quả
    return result;
}
// render(vitri, noidung);
render("abc", "Hello world");
render("product", showData(productList));
