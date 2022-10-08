const services = [
    {
        id: 1,
        name: "Service 1",
        img: "https://picsum.photos/100/100",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, // service
    {
        id: 2,
        name: "Service 2",
        img: "https://picsum.photos/100/100",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        name: "Service 3",
        img: "https://picsum.photos/100/100",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 4,
        name: "Service 4",
        img: "https://picsum.photos/100/100",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

const serviceElement = document.getElementById("services");

// Hiển thị services ra ngoài màn hình
const showServices = (services) => {
    let result = "";
    services.forEach((service) => {
        result += `
            <div class="services-item">
                <div class="services-icon">
                    <img src="${service.img}" alt="" />
                </div>
                <div class="services-info">
                    <h3>${service.name}</h3>
                    <p>${service.desc}</p>
                </div>
            </div>
        `;
    });
    return result;
};
serviceElement.innerHTML = showServices(services);
