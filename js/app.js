function getCart(){

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


function saveCart(cart){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


function addCart(name, price, image){

    let cart = getCart();

    let existingProduct = cart.find(
        product => product.name === name
    );


    if(existingProduct){

        existingProduct.quantity += 1;

    }else{

        cart.push({

            name:name,

            price:Number(price),

            image:image,

            quantity:1

        });

    }


    saveCart(cart);

    updateCartCount();

    alert(
        name + " added to cart!"
    );

}


function updateCartCount(){

    let cart = getCart();

    let count = cart.reduce(
        function(total,product){

            return total +
            (product.quantity || 1);

        },
        0
    );


    let cartCount =
        document.getElementById(
            "cart-count"
        );


    if(cartCount){

        cartCount.innerText =
            count;

    }

}


updateCartCount();