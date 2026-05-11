const productList = [
{ id: 1 ,   
    name: "Bàng Singapore" ,
    price: "130.000đ" ,
    image: "../assets/images/bang-singapore-phong-thuy.jpg",
    productLink: "product-detail.html" ,
    desc: "Dáng cao sang trọng, lá to, tạo điểm nhấn hiện đại cho nội thất." 
},

{ id: 2 , 
    name: "Cây Hạnh Phúc" , 
    price: "155.000đ" , 
    image: "../assets/images/cay-hanh-phuc.jpg" , 
    productLink: "product-detail.html" , 
    desc: "Mang lại sự bình yên, ấm áp và gắn kết cho gia đình." 
},

{ id: 3 ,
     name: "Cây Kim Tiền" ,
      price: "150.000đ" , 
      image: "../assets/images/cay-kiem-tien.jpg" , 
      productLink: "product-detail.html" , 
      desc: "Mang ý nghĩa về sự giàu có, thịnh vượng và may mắn." 
    },
    
    { id: 4 , 
        name: "Cây Lan Ý" , 
        price: "100.000đ " , 
        image: "../assets/images/cay-lan-y.jpg" , 
        productLink: "product-detail.html" , 
        desc: "Hoa trắng tinh khôi, có khả năng khử các độc tố trong không khí." 
    },

    { id: 5 , 
        name: "Cây Lưỡi Hổ" , 
        price: "120.000đ " , 
        image: "../assets/images/luoi-ho.jpg" , 
        productLink: "product-detail.html" , 
        desc: "Lá cứng, thẳng đứng, có khả năng lọc không khí và mang lại sự mạnh mẽ, kiên cường." 
    },
    
    { id: 6 ,
        name: "Cây Ngũ Gia Bì" , 
        price: "140.000đ" , 
        image: "../assets/images/cay-ngu-giai-bi.jpg" , 
        productLink: "product-detail.html" , 
        desc: "Lá xanh quanh năm, có tác dụng xua đuổi muỗi rất hiệu quả." 
    },
    
    { id: 7 , 
        name: "Trầu Bà Đế Vương" , 
        price: "180.000đ" , 
        image: "../assets/images/trau-ba-de-vuong.jpg" , 
        productLink: "product-detail.html" , 
        desc: "Lá xanh quanh năm, có tác dụng xua đuổi muỗi rất hiệu quả." 
    },
    
    { id: 8 , 
        name: "Tùng La Hán" , 
        price: "500.000đ " , 
        image: "../assets/images/cay-tung-la-hang.jpg" , 
        productLink: "product-detail.html" , 
        desc: "Mang ý nghĩa về sự trường thọ, sức khỏe" 
    },
    { id: 9 ,
        name: "Sen Đá" , 
        price: "15.000đ" , 
        image: "../assets/images/sen-da.jpg" , 
        productLink: "product-detail.html" , 
        desc: "Cây sen đá có khả năng chịu hạn tốt, dễ chăm sóc và mang lại sự năng động cho không gian sống."
    },
    
    { id: 10 , name: "Xương Rồng" , 
        price: "20.000đ" , 
        image: "../assets/images/xuong-rong.jpg" , 
        productLink: "product-detail.html" , 
        desc: "Cây xương rồng có khả năng chịu hạn tốt, dễ chăm sóc và mang lại sự năng động cho không gian sống." }
];


function loadProduct(products)
{
    for(let i = 0; i<products.length; i++)
    {
        addProduct_v2(products[i]);
    }
}

function loadProduct(products)
{
    for(let i = 0; i<products.length; i++)
    {
        addProduct_v2(products[i]);
    }
}

function addProduct_v2(product)
{
    //Tạo thẻ div khung chứa 1 sản phẩm  - product item
            const productItem = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productItem.setAttribute("class", "product-item");

            //Tạo khung số 1 - chứa ảnh - product image
            const productImage = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productImage.setAttribute("class", "product-image h-75");

            //Thêm ảnh vào khung chứa
            const myImage = document.createElement("img");
            myImage.setAttribute("src", product.image);
            myImage.setAttribute("alt", product.name);
            myImage.setAttribute("class", "img-fluid h-100 object-fit-cover");
           // myImage.style.height="250px";
            //myImage.style.width="250px";

            //Gắn hình vào khung chứa product image
            productImage.appendChild(myImage);


            //Tạo khung số 2 - chứa thông tin sản phẩm - product info
            const productInfo = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productInfo.setAttribute("class", "product-info text-center h-25");

            //Thêm đối tượng p, a cho khung chứa product info
            const productName = document.createElement("p");
            const productNameText = document.createTextNode(product.name);
            productName.appendChild(productNameText);

            //gắn vào khung chứa
            productInfo.appendChild(productName);

            //Thêm đối tượng p, a cho khung chứa product info
            const productPrice = document.createElement("p");
            const productPriceText = document.createTextNode(product.price+"/túi");
            productPrice.setAttribute("class","text-danger fw-bold");
            productPrice.appendChild(productPriceText);

            //gắn vào khung chứa
             productInfo.appendChild(productPrice);


            const productLink = document.createElement("a");
            const productLinkText = document.createTextNode("Xem chi tiết");
            productLink.setAttribute("href",product.productLink+"?id="+product.id);
            productLink.appendChild(productLinkText);
            productLink.setAttribute("class", "btn btn-info");

            //Gắn link cho product Info
            productInfo.appendChild(productLink);

            //Gắn 2 khung chứa image và info vào product item
            productItem.appendChild(productImage);
            productItem.appendChild(productInfo);

            //Gắn product item vào product list
            document.getElementById("product-list").appendChild(productItem);
}

function addProduct(id, name, price, image, hyperLink)
{
    //Tạo thẻ div khung chứa 1 sản phẩm  - product item
            const productItem = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productItem.setAttribute("class", "product-item");

            //Tạo khung số 1 - chứa ảnh - product image
            const productImage = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productImage.setAttribute("class", "product-image h-75");

            //Thêm ảnh vào khung chứa
            const myImage = document.createElement("img");
            myImage.setAttribute("src", image);
            myImage.setAttribute("alt", name);
            myImage.setAttribute("class", "img-fluid h-100 object-fit-cover");
           // myImage.style.height="250px";
            //myImage.style.width="250px";

            //Gắn hình vào khung chứa product image
            productImage.appendChild(myImage);


            //Tạo khung số 2 - chứa thông tin sản phẩm - product info
            const productInfo = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productInfo.setAttribute("class", "product-info text-center h-25");

            //Thêm đối tượng p, a cho khung chứa product info
            const productName = document.createElement("p");
            const productNameText = document.createTextNode(name);
            productName.appendChild(productNameText);

            //gắn vào khung chứa
            productInfo.appendChild(productName);

            //Thêm đối tượng p, a cho khung chứa product info
            const productPrice = document.createElement("p");
            const productPriceText = document.createTextNode(price+"/túi");
            productPrice.setAttribute("class","text-danger fw-bold");
            productPrice.appendChild(productPriceText);

            //gắn vào khung chứa
             productInfo.appendChild(productPrice);


            const productLink = document.createElement("a");
            const productLinkText = document.createTextNode("Xem chi tiết");
            productLink.setAttribute("href",hyperLink+"?id="+id);
            productLink.appendChild(productLinkText);
            productLink.setAttribute("class", "btn btn-info");

            //Gắn link cho product Info
            productInfo.appendChild(productLink);

            //Gắn 2 khung chứa image và info vào product item
            productItem.appendChild(productImage);
            productItem.appendChild(productInfo);

            //Gắn product item vào product list
            document.getElementById("product-list").appendChild(productItem);
}