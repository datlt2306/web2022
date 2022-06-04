import { productList } from "./data";

// Lấy ID trên url
const id = new URLSearchParams(window.location.search).get("id");

function showProduct(products) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const product = products.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `<h2>${product.name}</h2>`;
    return result;
}

document.getElementById("detail").innerHTML = showProduct(productList);



const user = {
    name: 
}
conss