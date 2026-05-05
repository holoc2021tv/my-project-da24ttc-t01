const productList =[
    // id, name, price, image, hyperLink   
    {id: "01", name: "Nồi cơm điện", price: 1290, image: "../assets/images/noi-com-dien.jpg", productLink: "product-detail.html"},
    {id: "02", name: "Nồi chiên không dầu", price: 2550, image: "../assets/images/noi-chien.jpg", productLink: "product-detail.html"},
    {id: "03", name: "Máy hút bụi cầm tay", price: 1890, image: "../assets/images/may-hut-bui.jpg", productLink: "product-detail.html"},
    {id: "04", name: "Máy lọc không khí", price: 3200, image: "../assets/images/may-loc-kk.jpg", productLink: "product-detail.html"},
    {id: "05", name: "Bếp từ đơn", price: 950, image: "../assets/images/bep-tu.jpg", productLink: "product-detail.html"},
    {id: "06", name: "Ấm siêu tốc", price: 450, image: "../assets/images/am-sieu-toc.jpg", productLink: "product-detail.html"},
    {id: "07", name: "Máy xay sinh tố", price: 890, image: "../assets/images/may-xay.jpg", productLink: "product-detail.html"},
    {id: "08", name: "Lò vi sóng", price: 2100, image: "../assets/images/lo-vi-song.jpg", productLink: "product-detail.html"},
    {id: "09", name: "Bàn là hơi nước", price: 650, image: "../assets/images/ban-la.jpg", productLink: "product-detail.html"},
    {id: "10", name: "Quạt cây Inverter", price: 1150, image: "../assets/images/quat-cay.jpg", productLink: "product-detail.html"}
];

function addProduct (id, name, price, image, hyperLink)
{
// Tạo một product item
//1. Tao khung chua 1 item
const productItem = document.createElement("div");
productItem.setAttribute("class", "product-item col m-2");

//2. Tạo khung chứa hình
const productImage = document.createElement("div");
productImage.setAttribute("class", "product-image h-75 ratio ratio-1x1 overflow-hidden");

//3. Tạo đối tượng hình ảnh
const Image = document.createElement("img");
Image.setAttribute("src", image);
Image.setAttribute("alt", name);
Image.setAttribute("class", "img-fluid object-fit-cover h-100");

//4. Gán hình vào khung
productImage.appendChild(Image);

//5. Tạo khung chứa thông tin
const productInfo = document.createElement("div");
productInfo.setAttribute("class", "product-info h25 text-center");

// Tạo paragraph 1
const productName = document.createElement("p");
const productNameText = document.createTextNode(name);
productName.appendChild(productNameText);

// Tạo paragraph 2
const productPrice = document.createElement("p");
const productPriceText = document.createTextNode(price);
productPrice.appendChild(productPriceText);

// Tạo link
const productLink = document.createElement("a");
const productLinkText = document.createTextNode("Xem chi tiết");
productLink.appendChild(productLinkText);
productLink.setAttribute("href", hyperLink);
productLink.setAttribute("class", "btn btn-info")

// Gán thông tin vào khung
productInfo.appendChild(productName);
productInfo.appendChild(productPrice);
productInfo.appendChild(productLink);

//6. gán khung hình và khung thông tin vào khung sản phẩm
productItem.appendChild(productImage);
productItem.appendChild(productInfo);

//gắn sản phẩm vào danh sách sản phẩm
document.getElementById("product-list").appendChild(productItem);

}