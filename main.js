const productList = [
    { id: 1, name: "Đat" },
    { id: 2, name: "Kiên" },
];
const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
];

function showData(data, key) {
    // kiểm tra
    if (!Array.isArray(data) || data.length == 0) return false;

    // xử lý
    let result = "";
    if (key == "product") {
        for (let i = 0; i < data.length; i++) {
            result += `<h2>${data[i].name}</h2>`;
        }
    } else {
        for (let i = 0; i < data.length; i++) {
            result += `<div><h2>${data[i].name}</h2></div>`;
        }
    }
    // trả về kết quả
    return result;
}

function render(idElement, content) {
    document.getElementById(idElement).innerHTML = content;
}
render("product", showData(productList, "product"));
render("category", showData(categories, "category"));
