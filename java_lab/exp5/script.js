// Array

let cartItems=[];


// Add predefined item

function addSelectedItem()
{

    let product=document.getElementById("product");

    let name=product.options[product.selectedIndex].text.split("-")[0].trim();

    let price=Number(product.value);

    cartItems.push({

        name:name,

        price:price

    });

    displayCart();

}



// Add custom item

function addCustomItem()
{

    let item=document.getElementById("item").value;

    let price=Number(document.getElementById("price").value);

    if(item=="" || price<=0)
    {
        alert("Enter valid details.");
        return;
    }

    cartItems.push({

        name:item,

        price:price

    });

    document.getElementById("item").value="";

    document.getElementById("price").value="";

    displayCart();

}



// Display Cart

function displayCart()
{

    let cart=document.getElementById("cart");

    cart.innerHTML="";

    let subtotal=0;

    for(let i=0;i<cartItems.length;i++)
    {

        subtotal+=cartItems[i].price;

        let li=document.createElement("li");

        li.innerHTML=

        "<span>"+cartItems[i].name+"</span>"+

        "<span>₹"+cartItems[i].price+"</span>";

        cart.appendChild(li);

    }

    document.getElementById("subtotal").innerHTML=subtotal;

    calculateDiscount();

}



// Discount

function calculateDiscount()
{

    let subtotal=0;

    for(let i=0;i<cartItems.length;i++)
    {

        subtotal+=cartItems[i].price;

    }

    let discount=Number(document.getElementById("discount").value);

    if(discount<0)
        discount=0;

    if(discount>100)
        discount=100;

    let discountAmount=subtotal*discount/100;

    let total=subtotal-discountAmount;

    document.getElementById("discountAmount").innerHTML=discountAmount.toFixed(2);

    document.getElementById("finalTotal").innerHTML=total.toFixed(2);

}



// Initially show empty cart

displayCart();