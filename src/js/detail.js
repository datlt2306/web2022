import { render } from "./common";
import { productList } from "./data";

const id = new URLSearchParams(window.location.search).get("id");
// sử dụng phương thức .find() để tìm ra được object trong mảng
console.log("id", id);

const product = productList.find((item) => item.id == id);
console.log("product", product);

const result = `<div>
                    ${product.name}
                    <span>${product.time} Time</span>
                </div>`;
render("detail", result);
