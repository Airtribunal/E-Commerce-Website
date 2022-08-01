// Goods variables
const shopContent = document.querySelector(".shop-content")
const productBox = document.querySelector("#box")

// Goods 
let goods = [{
        title: "aeroready shirt",
        price: "$25",
        img: "assets/images/product1.jpg",
        tag: "t-shirt",
        inCart: 0
    },
    {
        title: "wireless earbuds",
        price: "$100",
        img: "assets/images/product2.jpg",
        tag: "hearpodes",
        inCart: 0
    },
    {
        title: "hooded parka",
        price: "$45",
        img: "assets/images/product3.jpg",
        tag: "hood",
        inCart: 0
    },
    {
        title: "straw metal bottle",
        price: "$15.99",
        img: "assets/images/product4.jpg",
        tag: "bottled-water",
        inCart: 0
    },
    {
        title: "sliver metal",
        price: "$44.99",
        img: "assets/images/product5.jpg",
        tag: "glasses",
        inCart: 0
    },
    {
        title: "black hat",
        price: "$65.79",
        img: "assets/images/product6.jpg",
        tag: "hat",
        inCart: 0
    },
    {
        title: "blackpack",
        price: "$49.99",
        img: "assets/images/product7.jpg",
        tag: "package",
        inCart: 0
    },
    {
        title: "ultraboost 22",
        price: "$355.99",
        img: "assets/images/product8.jpg",
        tag: "snikkers",
        inCart: 0
    },
    {
        title: "adidas socks",
        price: "$12",
        img: "assets/images/product9.jpg",
        tag: "socks",
        inCart: 0
    },
]

// First Box Deleting
productBox.remove()

// Adding goods to the website 
for (let i = 0; i < goods.length; i++) {
    let good = goods[i];
    const productNode = productBox.cloneNode(true)
    productNode.querySelector(".product-img").setAttribute("src", good.img)
    productNode.querySelector(".product-title").textContent = good.title
    productNode.querySelector(".price").textContent = good.price
    shopContent.appendChild(productNode)
}


// Cart variables
let cart = document.querySelector(".cart")
let cartIcon = document.querySelector("#cart-icon")
let closeCart = document.querySelector("#close-cart")
let removeItemButtons = document.querySelector("#cart-remove")
let addCarts = document.querySelectorAll(".add-cart")

// Open Cart
cartIcon.addEventListener("click", () => {
    cart.classList.add("active")
})

// Close Cart
closeCart.addEventListener("click", () => {
    cart.classList.remove("active")
})

// Remove Cart Buttons

removeItemButtons.forEach(removeButton => {
    removeButton.addEventListener("click", () => {
        console.log("eoef");
    })
});