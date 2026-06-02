let selectedSize = null;

const products = [
  {
    id: 1,
    name: "Oversized Denim Jacket",
    price: 2499,
    category: "Streetwear"
  },
  {
    id: 2,
    name: "Spirit Tee🔥",
    price: 499,
    category: "Fan Club",
    image: "assets/spirit-tee.png",
    colors: ["#f4f5f0", "#4ba58a", "#20312f"]
  }
];

const productId =
Number(localStorage.getItem("selectedProduct"));

const product =
products.find(item => item.id === productId);

if(product){

    document.getElementById("productName")
    .textContent = product.name;

    document.getElementById("productCategory")
    .textContent = product.category;

    document.getElementById("productPrice")
    .textContent = "₹" + product.price;

    if(product.image){

        document.getElementById("productImage")
        .src = product.image;

    }

}

document.querySelectorAll(".size-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        document
        .querySelectorAll(".size-btn")
        .forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedSize =
        button.textContent;

    });

});

document
.getElementById("productAddCart")
.addEventListener("click", () => {

    if(!selectedSize){

        alert(
          "Please select a size"
        );

        return;}

        const cart =
JSON.parse(
    localStorage.getItem("cart")
) || [];

cart.push({
    ...product,
    size: selectedSize
});

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);
    

    const toast =
document.getElementById("cartToast");

toast.textContent =
`Added Size ${selectedSize} ✅`;

toast.classList.add("show");

setTimeout(() => {

    toast.classList.remove("show");

}, 2000);
});