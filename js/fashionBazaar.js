
//main Products--Array contain marvel figuren products as objects
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

window.onload = function(){

// call function
displayCollections(stock);

};
// display the collections
function displayCollections(collection)
{

    let collections1 = `<h2 id="collections">Our Collections</h2>`;
            collection.forEach(function(cloth, Index){
                let {image,name,category,avlSize,description,price} = cloth;
        collections1 += `
        <div class="product">
            <img src="${image}" alt="product-Image" id="productImg" class="productImg">
            <div class="productCaption">
                <h3>${name}</h3>
                <p>Price: <ins>Rs.${price} only</ins></p>
                <p>Size: <ins>${avlSize}</ins></p>
                <input onclick="showPop(${Index})" class="button" type="button" value="Order Now">
            </div>
        </div>`;
    });
    document.getElementsByClassName("products-list")[0].innerHTML = collections1;
}

//search products
function searchs(e)
{
    e.preventDefault();
    let srch = document.getElementById("sch").value;
    let coll = stock.filter(function(elem){
        return (elem.name.toUpperCase().indexOf(srch.toUpperCase()) != -1) ||
                (elem.avlSize.indexOf(srch.toUpperCase()) != -1) ||
                (elem.description.toUpperCase().indexOf(srch.toUpperCase()) != -1);
    });
    displayCollections(coll);
    
}


    // call function
    displayCollections(stock);
    
// show the pop window
//let Cart = [];
//Cart = JSON.parse(localStorage.getItem("cart"));

// selected product
let selectedP;

function showPop(i)
{
        selectedP = stock[i];
        //Cart.push(selectedP);
        //localStorage.setItem("cart", JSON.stringify(Cart))
        // console.log(localStorage.getItem("cart"));
        let pop1 = document.getElementsByClassName("up")[0];
        document.getElementById("productImg1").src = selectedP.image;
        document.getElementById("pName").innerHTML = selectedP.name;
        document.getElementById("pName").innerHTML = selectedP.name;
        document.getElementById("pPrice").innerHTML = "Price :" + selectedP.price;
        document.getElementById("pDescription").innerHTML = "Description :" + selectedP.description;
        document.getElementById("pSize").innerHTML = "Size :" + `<select onblur="checkS()" name="selSize">
        <option class="button" value="S">Small</option>
        <option class="button" value="M">Medium</option>
        <option class="button" value="L">Large</option>
        <option class="button" value="XL">X Large</option>
        <option class="button" value="XXL">XX Large</option>
    </select>`;
        pop1.style.display = "block";       

}
// close the pop window
function closePop()
{
        let pop = document.getElementsByClassName("up")[0];
            pop.style.display = "none";
}

// send order
function sendOrder(e){
    e.preventDefault();
    let orderDetails = "name :" + selectedP.name + ", description : " + selectedP.description;
    let name = document.getElementById("uname").value;
    let phno = document.getElementById("uphno").value;
    let address = document.getElementById("uaddress").value;
    let pincode = document.getElementById("upin").value;
    let buyerDetails = " name :" + name + ", phone :" + phno + ", address :" + address + ", pincode :" + pincode;
    //let url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kaleemfairy@gmail.com&su=' + name + ' Placed ordered&body= Order Details: '+ orderDetails +  '\n Buyer Details: ' + buyerDetails +'&ui=2&tf=1&pli=1';
    let url = 'mailto.kaleemfairy@gmail.com';
    
    window.open(url, '_blank');
    alert("your order placed, our staffs will contact you soon");
    closePop();
}

// check available size
function checkS(){
    let c = document.getElementsByName("selSize")[0];
    if(!selectedP.avlSize.includes(c.value)){
        document.getElementById("pSize").innertext = "not Available";
        console.log("ok")
    }
    else{
        document.getElementById("pSize").innertext = "Available";
        console.log("no")
    }
}
