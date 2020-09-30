
let stock = [
    {
        image: "images/Cotton solid shirt.jpg",
        name: "Cotton solid shirt",
        category: "shirt",
        avlSize: "S M L",
        description: "USPA mens shirt cotton full sleeves solid Grey slim fit",
        price: 630
    },
    {
        image: "images/Polyknit Track pants.jpg",
        name: "Polyknit Track pants",
        category: "tracks",
        avlSize: "S M L XL XXL",
        description: "Solid Polyknit slim fit Track pants with 5 designs",
        price: 650
    },
    {
        image: "images/Cotton woven shirt.jpg",
        name: "Cotton woven shirt",
        category: "shirt",
        avlSize: "S M L XL XXL",
        description: "woven printed shirt cotton full sleeves solid Maroon,green slim fit with 5 designs",
        price: 650
    },
    {
        image: "images/Cotton knit T-shirt.jpg",
        name: "Cotton knit T-shirt",
        category: "shirt",
        avlSize: "S M L XL XXL",
        description: "cotton knit printed T-shirt half sleeves solid Black, Blue with 4 designs",
        price: 300
    },
    {
        image: "images/Desinger Men T-shirt.jpg",
        name: "Desinger Men T-shirt",
        category: "shirt",
        avlSize: "S M L XL",
        description: "Pretty designer men T-shirts cotton fabric long sleeves solid",
        price: 280
    },
    {
        image: "images/Cotton stripped T-shirt.jpg",
        name: "Cotton stripped T-shirt",
        category: "shirt",
        avlSize: "M L XL",
        description: "sotton stripped/color block T-shirts round neck with 3 designs",
        price: 280
    },
];

displayCollections(stock);
function displayCollections(collection)
{

    let collections1 = `<h2 id="collections">Our Collections</h2>`;
            collection.forEach(function(cloth){
                let {image,name,category,avlSize,description,price} = cloth;
        collections1 += `
        <div class="product">
            <img src="${image}" alt="product-Image" id="productImg" class="productImg">
            <div class="productCaption">
                <h3>${name}</h3>
                <p>Price: <ins>Rs.${price} only</ins></p>
                <p>Size: <ins>${avlSize}</ins></p>
                <a href="product.html">Order now</a>
                <a href="product.html">View</a>
            </div>
        </div>`;
    });
    document.getElementById("list-1").innerHTML = collections1;


    let collections2 = `<h2 id="collections">Our Collections</h2>`;

            collection.forEach(function(cloth){
                let {name,category,avlSize,description,price} = cloth;
            collections2 += `
            <div class="product">
                <img src="images/IMG-20200930-WA0006.jpg" alt="product-Image" id="productImg" class="productImg">
                <div class="productCaption">
                    <h3>${name}</h3>
                    <p>Price: <ins>Rs.${price} only</ins></p>
                    <p>Size: <ins>${avlSize}</ins></p>
                    <a href="product.html">Order now</a>
                    <a href="product.html">View</a>
                </div>
            </div>`;  
        }); 
        document.getElementById("list-2").innerHTML = collections2;
     
        // else{
        // }
}
