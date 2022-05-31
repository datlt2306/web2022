const a = 10;
const name = "Đạt";
const isStatus = true;
const hasChild = true;
const running = function () {
    console.log("running");
};
running();

const productList = [
    { id: 1, name: "Đat" },
    { id: 2, name: "Kiên" },
];

console.log(productList[1].name);

// Đặt theo danh từ
// trạng thái ( true /false ) thì thêm is/has

// tên hàm: động từ
const info = {
    name: "Đạt",
    isStatus: true,
    running: function () {
        console.log("running");
    },
};

info.running();
